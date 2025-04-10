# shower-calculator-<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>מחשבון מקלחונים</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <h1>מחשבון מקלחונים</h1>

  <form id="calculatorForm">
    <label>גובה (במטרים):</label>
    <input type="number" step="0.01" id="height" required>

    <label>רוחב קיר 1 (במטרים):</label>
    <input type="number" step="0.01" id="wall1" required>

    <label>רוחב קיר 2 (במטרים):</label>
    <input type="number" step="0.01" id="wall2" required>

    <label>סוג זכוכית:</label>
    <select id="glassType" required>
      <option value="80">4 מ"מ - שקוף (₪80)</option>
      <option value="155">6 מ"מ - חלבי/מט (₪155)</option>
      <option value="180">6 מ"מ - ברונזה (₪180)</option>
      <option value="210">8 מ"מ - אקסטרה קליר (₪210)</option>
      <option value="250">10 מ"מ - קליר (₪250)</option>
      <option value="330">12 מ"מ - קליר (₪330)</option>
    </select>

    <button type="submit">חשב</button>
  </form>

  <div id="result" style="display:none; margin-top:20px;">
    <p><strong>שטח זכוכית:</strong> <span id="area"></span> מ"ר</p>
    <p><strong>מחיר לפני מע"מ:</strong> ₪<span id="priceWithoutVAT"></span></p>
    <p><strong>מחיר כולל מע"מ (18%):</strong> ₪<span id="priceWithVAT"></span></p>
  </div>

  <script src="script.js"></script>
</body>
</html>