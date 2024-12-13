const player = document.getElementById('player')
let playerPosition = 0

// by calling this function you can make the player move left and right
function movePlayer(direction) {
  if (direction === 'left') {
    playerPosition -= 10
    player.style.left = playerPosition + 'px'
  } else if (direction === 'right') {
    playerPosition += 10
    player.style.left = playerPosition + 'px'
  } else if (direction === 'up') {
    playerPosition += 10
    player.style.bottom = playerPosition + 'px'
  } else if (direction === 'down') {
    playerPosition -= 10
    player.style.bottom = playerPosition + 'px'
  }
}


document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (key === 'ArrowLeft') {
        movePlayer('left');
    } else if (key === 'ArrowRight') {
        movePlayer('right');
    } else if (key === 'ArrowUp') {
        movePlayer('up');
    } else if (key === 'ArrowDown') {
        movePlayer('down');
    }
});