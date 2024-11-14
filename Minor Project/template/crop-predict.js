document.getElementById('predict-button').addEventListener('click', async function () {
    const formData = {
        nitrogen: document.getElementById('nitrogen').value,
        phosphorous: document.getElementById('phosphorous').value,
        potassium: document.getElementById('potassium').value,
        temperature: document.getElementById('temperature').value,
        humidity: document.getElementById('humidity').value,
        rainfall: document.getElementById('rainfall').value,
        ph: document.getElementById('ph').value
    };

    try {
        const response = await fetch('/predict', {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        console.log('Response data:', data);

        const resultDiv = document.getElementById('predictionResult');
        resultDiv.innerHTML = `<h2>Predicted Crop:</h2>`;
        resultDiv.innerHTML += `<p>${data.result}</p>`;
    } catch (error) {
        console.error('Fetch error:', error);

        const resultDiv = document.getElementById('predictionResult');
        resultDiv.innerHTML = `<h2>Predictions:</h2>`;
        resultDiv.innerHTML += `<p>Error: ${error.message}</p>`;
    }

    // Prevent default form submission
    return false;
})