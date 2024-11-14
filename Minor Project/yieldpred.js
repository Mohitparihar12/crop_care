document.getElementById('predictionForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const crop = document.getElementById('Cropsel').value;
    const year = document.getElementById('year').value;
    const season = document.getElementById('SeasonSel').value;
    const state = document.getElementById('StateSel').value;
    const area = document.getElementById('area').value;
    const production = document.getElementById('production').value;
    const rain = document.getElementById('rain').value;
    const fertilizer = document.getElementById('fertilizer').value;
    const pesticide = document.getElementById('pesticide').value;
  
    const data = {
      crop,
      year,
      season,
      state,
      area,
      production,
      rain,
      fertilizer,
      pesticide
    };
  
    fetch('http://127.0.0.1:5000/predict', {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
      document.getElementById('yield').value = result.yield;
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });
  