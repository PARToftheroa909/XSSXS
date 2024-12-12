const player = document.getElementById('player');
const itemList = document.getElementById('itemList');
let inventory = [];

function movePlayer(direction) {
    const step = 10;
    const playerRect = player.getBoundingClientRect();
    const gameAreaRect = document.getElementById('gameArea').getBoundingClientRect();

    if (direction === 'up' && playerRect.top > gameAreaRect.top) {
        player.style.top = `${playerRect.top - step - gameAreaRect.top}px`;
    }
    if (direction === 'down' && playerRect.bottom < gameAreaRect.bottom) {
        player.style.top = `${playerRect.top + step - gameAreaRect.top}px`;
    }
    if (direction === 'left' && playerRect.left > gameAreaRect.left) {
        player.style.left = `${playerRect.left - step - gameAreaRect.left}px`;
    }
    if (direction === 'right' && playerRect.right < gameAreaRect.right) {
        player.style.left = `${playerRect.left + step - gameAreaRect.left}px`;
    }
}

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            movePlayer('up');
            break;
        case 'ArrowDown':
            movePlayer('down');
            break;
        case 'ArrowLeft':
            movePlayer('left');
            break;
        case 'ArrowRight':
            movePlayer('right');
            break;
        case 'i': // 'i' key to add Wood
            addItem('Wood');
            break;
        case 'o': // 'o' key to add Stone
            addItem('Stone');
            break;
    }
});

function addItem(item) {
    inventory.push(item);
    const listItem = document.createElement('li');
    listItem.textContent = item;
    itemList.appendChild(listItem);
}

function craftItem() {
    if (inventory.includes('Wood') && inventory.includes('Stone')) {
        inventory.splice(inventory.indexOf('Wood'), 1);
        inventory.splice(inventory.indexOf('Stone'), 1);
        addItem('Axe');
        alert('Crafted: Axe');
    } else {
        alert('Not enough materials to craft Axe');
    }
}