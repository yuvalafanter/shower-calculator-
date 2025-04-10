document.getElementById('calculatorForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const height = parseFloat(document.getElementById('height').value);
  const wall1 = parseFloat(document.getElementById('wall1').value);
  const wall2 = parseFloat(document.getElementById('wall2').value);
  const glassPrice = parseFloat(document.getElementById('glassType').value);
  const vatRate = 0.18;

  if (isNaN(height) || isNaN(wall1) || isNaN(wall2) || isNaN(glassPrice)) {
    alert('נא למלא את כל השדות כראוי.');
    return;
  }

  const area = height * (wall1 + wall2);
  const price = area * glassPrice;
  const priceWithVAT = price * (1 + vatRate);

  document.getElementById('area').textContent = area.toFixed(2);
  document.getElementById('priceWithoutVAT').textContent = price.toFixed(2);
  document.getElementById('priceWithVAT').textContent = priceWithVAT.toFixed(2);

  document.getElementById('result').style.display = 'block';
});
