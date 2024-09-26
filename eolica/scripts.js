const windSpeedInput = document.getElementById('windSpeed');
const windTurbine = document.getElementById('windTurbine');
const energyOutput = document.getElementById('energyOutput');
const windSpeedDisplay = document.getElementById('windSpeedDisplay');

windSpeedInput.addEventListener('input', (event) => {
    const speed = event.target.value;
    
    // Atualizar a exibição da velocidade do vento
    windSpeedDisplay.textContent = `Velocidade do vento: ${speed} m/s`;
    
    // Ajustar a duração da animação com base na velocidade do vento
    windTurbine.style.animationDuration = `${20 / speed}s`;
    
    // Calcular a energia gerada
    const energy = Math.pow(speed, 3); // Relação cúbica (exemplo simples)
    energyOutput.textContent = `Energia gerada: ${energy.toFixed(2)} kW`;
});
