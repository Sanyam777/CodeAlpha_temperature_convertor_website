document.addEventListener("DOMContentLoaded", function () {
    const convertBtn = document.getElementById("convertBtn");
    const inputTemp = document.getElementById("inputTemp");
    const inputUnit = document.getElementById("inputUnit");
    const resultText = document.getElementById("resultText");

    convertBtn.addEventListener("click", function () {
        const temperature = parseFloat(inputTemp.value);

        if (isNaN(temperature)) {
            resultText.textContent = "Please enter a valid number.";
            return;
        }

        const fromUnit = inputUnit.value;
        let toUnit, result;

        switch (fromUnit) {
            case "celsius":
                toUnit = "fahrenheit";
                result = (temperature * 9 / 5) + 32;
                break;
            case "fahrenheit":
                toUnit = "celsius";
                result = (temperature - 32) * 5 / 9;
                break;
            case "kelvin":
                toUnit = "celsius";
                result = temperature - 273.15;
                break;
        }

        resultText.textContent = `${temperature} ${fromUnit} is ${result.toFixed(2)} ${toUnit}.`;
    });
});
