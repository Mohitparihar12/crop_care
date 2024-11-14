from flask import Flask, render_template, request, jsonify
import numpy as np
import pickle
from flask_cors import CORS, cross_origin
from sklearn.ensemble import RandomForestClassifier
app = Flask(__name__, template_folder='./template', static_folder='./Assets')

CORS(app, support_credentials=True)

# Load the crop recommendation model
with open("RandomForest.pkl", "rb") as f:
    crop_model = pickle.load(f)

# Labels for crop recommendation
crop_labels = ['Wheat', 'Rice', 'Maize', 'Millet', 'Barley', 'Lentil', 'Pigeonpeas', 'Chickpea', 'Kidney Beans', 'Black Gram']

@app.route('/')
def index():
    return render_template('crop_predict.html')

@app.route('/predict', methods=['POST', 'OPTIONS'])
@cross_origin(supports_credentials=True)
def predict():
    if request.method == 'OPTIONS':
        # Handle CORS preflight request
        return '', 200
    try:
        print("lala",request.get_json()['nitrogen'])
        request_data = request.get_json()
        # Get input values from the form
        nitrogen = float(request_data['nitrogen'])
        phosphorous = float(request_data['phosphorous'])
        potassium = float(request_data['potassium'])
        temperature = float(request_data['temperature'])
        humidity = float(request_data['humidity'])
        rainfall = float(request_data['rainfall'])
        ph = float(request_data['ph'])

        # Print received form data (optional)
        print("Received Form Data:")
        print("Nitrogen:", nitrogen)
        print("Phosphorous:", phosphorous)
        print("Potassium:", potassium)
        print("Temperature:", temperature)
        print("Humidity:", humidity)
        print("Rainfall:", rainfall)
        print("PH:", ph)

        # Process input data (if needed)
        input_data = [[nitrogen, phosphorous, potassium, temperature, humidity, ph, rainfall]]
        # Perform crop recommendation
        prediction = crop_model.predict(input_data)
        print("",prediction)
        # Get crop label
        crop = prediction[0]

        return jsonify({'result': crop})
    except KeyError as e:
        print(e)
        return jsonify({'error': f'Missing field: {str(e)}'}), 400
    except Exception as e:
        print(f'Error in predict function: {str(e)}')
        return jsonify({'error': 'An unexpected error occurred.'}), 500

if __name__ == '__main__':
    app.run(debug=True)
