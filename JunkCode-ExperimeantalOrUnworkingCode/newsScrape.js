fetch('https://www.chess.com/today')
  .then(response => response.text())
  .then(data => {
    console.log(data); // or do something else with the data
  })
  .catch(error => {
    console.error(error);
  });
