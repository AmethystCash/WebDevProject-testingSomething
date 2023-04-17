const analyzeButton = document.getElementById('analyze-button');
const chessInput = document.getElementById('chess-input');
const analysisResults = document.getElementById('analysis-results');

analyzeButton.addEventListener('click', () => {
  const formData = new FormData();
  formData.append('chess-input', chessInput.value);

  fetch('http://127.0.0.1:5000/analyze', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    analysisResults.innerHTML = `
      <h2>Analysis Results</h2>
      <p>White could have played better: ${data.white}</p>
      <p>Black could have played better: ${data.black}</p>
    `;
  })
  .catch(error => {
    analysisResults.innerHTML = `<p>An error occurred: ${error.message}</p>`;
  });
});
