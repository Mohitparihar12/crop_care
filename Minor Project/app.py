from flask import Flask, request, jsonify
import pickle
import numpy as np

app = Flask(__name__)

# Load your trained model
with open('crop_yield.sav', 'rb') as f:
    model = pickle.load(f)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()

    # Extract data from the request
    crop = data['crop']
    year = int(data['year'])
    season = data['season']
    state = data['state']
    area = float(data['area'])
    production = float(data['production'])
    rain = float(data['rain'])
    fertilizer = float(data['fertilizer'])
    pesticide = float(data['pesticide'])

    # Preprocess the input data as required by your model
    input_features = np.array([[crop, year, season, state, area, production, rain, fertilizer, pesticide]])

    # Perform prediction
    prediction = model.predict(input_features)

    # Send back the prediction result
    return jsonify({'yield': prediction[0]})

if __name__ == '__main__':
    app.run(debug=True)
