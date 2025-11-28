document.addEventListener('DOMContentLoaded', () => {
    // Check if the calculator button exists on this page
    const calculateBtn = document.getElementById('calculate-footprint-btn');
    if (!calculateBtn) {
        return;
    }

    calculateBtn.addEventListener('click', () => {
        // --- Average Emission Factors for India ---
        const EMISSION_FACTORS = {
            DRIVING_PETROL: 0.17, // kg CO2e per km (avg hatchback)
            ELECTRICITY: 0.82,    // kg CO2e per kWh (India's grid average)
            // DIET values are annual kg CO2e, passed directly from the <option> value
        };

        // 1. Get Transport Footprint
        const transportKm = parseFloat(document.getElementById('transport-km').value) || 0;
        const transportAnnual = (transportKm * 52 * EMISSION_FACTORS.DRIVING_PETROL); // kg CO2e/year

        // 2. Get Energy Footprint
        const energyKwh = parseFloat(document.getElementById('energy-kwh').value) || 0;
        const energyAnnual = (energyKwh * 12 * EMISSION_FACTORS.ELECTRICITY); // kg CO2e/year

        // 3. Get Diet Footprint
        const dietAnnual = parseFloat(document.getElementById('diet-type').value) || 0; // kg CO2e/year

        // 4. Calculate Total
        const totalAnnualKg = transportAnnual + energyAnnual + dietAnnual;
        const totalAnnualTonnes = totalAnnualKg / 1000.0; // Convert kg to tonnes

        // 5. Display Result
        const resultContainer = document.getElementById('footprint-result-container');
        const resultValueEl = document.getElementById('footprint-result-value');
        
        resultValueEl.textContent = totalAnnualTonnes.toFixed(2);
        resultContainer.style.display = 'block';
    });
});