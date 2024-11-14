const cropSelect = document.getElementById('crop');
const fieldAreaInput = document.getElementById('fieldArea');
const nitrogenInput = document.getElementById('nitrogen');
const phosphorousInput = document.getElementById('phosphorous');
const potassiumInput = document.getElementById('potassium');

const nutrientRecommendations = {
  apple: {
    nitrogen: 120,
    phosphorous: 60, 
    potassium: 80, 
  },
  maize: {
    nitrogen: 150, 
    phosphorous: 60,
    potassium: 80, 
  },
  wheat: {
    nitrogen: 100, 
    phosphorous: 40, 
    potassium: 60, 
  },
  potato: {
    nitrogen: 170, 
    phosphorous: 80, 
    potassium: 140,
  },
  rice: {
    nitrogen: 120,
    phosphorous: 40, 
    potassium: 30, 
  },
};

function calculateNutrients() {
  const selectedCrop = cropSelect.value;
  const fieldArea = parseFloat(fieldAreaInput.value);

  if (!selectedCrop) {
    alert('Please select a crop');
    return;
  }

  const nutrients = nutrientRecommendations[selectedCrop];

  if (!nutrients) {
    alert('Nutrient recommendations not available for the selected crop');
    return;
  }

  const nitrogen = nutrients.nitrogen * fieldArea;
  const phosphorous = nutrients.phosphorous * fieldArea;
  const potassium = nutrients.potassium * fieldArea;

  nitrogenInput.value = nitrogen.toFixed(1);
  phosphorousInput.value = phosphorous.toFixed(1);
  potassiumInput.value = potassium.toFixed(1);
}
