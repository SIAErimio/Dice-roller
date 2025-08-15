function rollDice() {
    const numOfDice = parseInt(document.getElementById('numOfDice').value);
    const diceResult = document.getElementById('diceResult');
    const diceImages = document.getElementById('diceImages');
    
    const values = [];
    const images = [];

    // Clear previous images
    diceImages.innerHTML = '';

    for (let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);

        // Create a new img element for each dice
        const img = document.createElement('img');
        img.src = `dice_images/${value}.PNG`; // matches your file names
        img.alt = `Dice ${value}`;
        img.width = 50; // optional size
        diceImages.appendChild(img);
    }

    diceResult.textContent = `Dice: ${values.join(', ')}`;
}

