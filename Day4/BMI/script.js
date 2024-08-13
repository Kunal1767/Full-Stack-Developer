document.getElementById('btn').addEventListener('click', function() {
    let age = document.getElementById('age').value;
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;
    let gender = document.querySelector('input[name="flexRadioDefault"]:checked').nextElementSibling.textContent.trim();

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        document.getElementById('result').innerHTML = 'Please enter valid height and weight values.';
        return;
    }

    height = parseFloat(height) / 100; 

    weight = parseFloat(weight);

    let bmi = weight / (height * height);

    document.getElementById('result').innerHTML = `
       
        <p>BMI: ${bmi.toFixed(2)}</p>
    `;
});
