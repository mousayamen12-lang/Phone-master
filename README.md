<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Phone Master - مقارنة الهواتف</title>
    <style>
        body { font-family: Arial, sans-serif; background-color: #f4f4f9; text-align: center; padding: 20px; }
        .container { max-width: 600px; margin: auto; background: white; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
        select { width: 100%; padding: 10px; margin: 10px 0; border-radius: 5px; border: 1px solid #ccc; font-size: 16px; }
        table { width: 100%; margin-top: 20px; border-collapse: collapse; display: none; }
        th, td { border: 1px solid #ddd; padding: 12px; text-align: center; }
        th { background-color: #007bff; color: white; }
    </style>
</head>
<body>

<div class="container">
    <h1>📱 Phone Master</h1>
    <p>اختر هاتفين للمقارنة بينهما:</p>
    
    <select id="phone1" onchange="comparePhones()">
        <option value="">-- اختر الهاتف الأول --</option>
        <option value="iphone15">iPhone 15 Pro</option>
        <option value="s24">Samsung S24 Ultra</option>
    </select>

    <select id="phone2" onchange="comparePhones()">
        <option value="">-- اختر الهاتف الثاني --</option>
        <option value="iphone15">iPhone 15 Pro</option>
        <option value="s24">Samsung S24 Ultra</option>
    </select>

    <table id="compareTable">
        <thead>
            <tr>
                <th>الميزة</th>
                <th id="name1">الهاتف 1</th>
                <th id="name2">الهاتف 2</th>
            </tr>
        </thead>
        <tbody id="tableBody"></tbody>
    </table>
</div>

<script>
    const data = {
        iphone15: { name: "iPhone 15 Pro", cpu: "A17 Pro", cam: "48MP", battery: "3274 mAh", price: "$999" },
        s24: { name: "Samsung S24 Ultra", cpu: "Snapdragon 8 Gen 3", cam: "200MP", battery: "5000 mAh", price: "$1299" }
    };

    function comparePhones() {
        const p1 = document.getElementById('phone1').value;
        const p2 = document.getElementById('phone2').value;
        const table = document.getElementById('compareTable');
        const body = document.getElementById('tableBody');

        if (p1 && p2) {
            document.getElementById('name1').innerText = data[p1].name;
            document.getElementById('name2').innerText = data[p2].name;
            
            body.innerHTML = `
                <tr><td>المعالج</td><td>${data[p1].cpu}</td><td>${data[p2].cpu}</td></tr>
                <tr><td>الكاميرا</td><td>${data[p1].cam}</td><td>${data[p2].cam}</td></tr>
                <tr><td>البطارية</td><td>${data[p1].battery}</td><td>${data[p2].battery}</td></tr>
                <tr><td>السعر</td><td>${data[p1].price}</td><td>${data[p2].price}</td></tr>
            `;
            table.style.display = "table";
        } else {
            table.style.display = "none";
        }
    }
</script>

</body>
</html>
