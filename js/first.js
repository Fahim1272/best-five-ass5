
function buttons(player, playerName) {
  document.getElementById(player).addEventListener('click', function(){
    const firstPlayer =document.getElementById(playerName);
    const abcd = firstPlayer.innerText;

    const clickedButton = document.getElementById(player);
    clickedButton.setAttribute('disabled','');
    
    const playerContainer = document.getElementById('player-container');
    const li = document.createElement('li');
    li.innerText = abcd;
    playerContainer.appendChild(li);
})
}
buttons('player1','playerOne');
buttons('player2','playerTwo');
buttons('player3','playerThree');
buttons('player4','playerFour');
buttons('player5','playerFive');
buttons('player6','playerSix');

// document.getElementById('player1').addEventListener('click', function(){
//     const firstPlayer =document.getElementById('playerOne');
//     const abcd = firstPlayer.innerText;

//     const clickedButton = document.getElementById('player1');
//     clickedButton.setAttribute('disabled','');
    
//     const playerContainer = document.getElementById('player-container');
//     const li = document.createElement('li');
//     li.innerText = abcd;
//     playerContainer.appendChild(li);
// })


