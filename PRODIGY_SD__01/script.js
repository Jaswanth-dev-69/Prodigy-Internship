document.getElementById('convertbtn').addEventListener('click', function() {
    let temp = parseFloat(document.getElementById('temp').value);
    let unit = document.getElementById('unit').value;
    let result = "";

    // Perform the temperature conversion
    if (isNaN(temp)) {
        result = "Please enter a valid Temperature.";
    } else {
        if (unit === "C") {
            let fahrenheit = (temp * 9 / 5) + 32;
            let kelvin = temp + 273.15;
            result = `${temp}°C is equals to
            ${fahrenheit}°F and ${kelvin} Kelvin`;
        } else if (unit === "F") {
            let celsius = (temp - 32) * 5 / 9;
            let kelvin = celsius + 273.15;
            result = `${temp}°F is equals to
            ${celsius}°C and ${kelvin} Kelvin`;
        } else if (unit === "K") {
            let celsius = temp - 273.15;
            let fahrenheit = (celsius * 9 / 5) + 32;
            result = `${temp} K is equals to
            ${celsius}°C and ${fahrenheit}°F`;
        } else {
            result = "Invalid Unit!";
        }
    }

    // Update the result text
    const resultElement = document.getElementById('result');
    resultElement.innerText = result;

    // Add smooth scrolling and move the form box up
    document.querySelector('form').classList.add('moved-up');
    resultElement.classList.add('visible');
});