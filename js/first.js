
function buttons(player, playerName) {
  document.getElementById(player).addEventListener('click', function(){
    const firstPlayer =document.getElementById(playerName);
    const abcd = firstPlayer.innerText;

    const clickedButton = document.getElementById(player);
    clickedButton.setAttribute('disabled','');
    
    const playerContainer = document.getElementById('player-container');
    const li = document.createElement('li');
    li.innerText = abcd;
    const playerCount = playerList();
    if (playerCount >= 5) {
      alert('You can select only 5 Players')
      return;
    } 
    playerContainer.appendChild(li);
})
}
buttons('player1','playerOne');
buttons('player2','playerTwo');
buttons('player3','playerThree');
buttons('player4','playerFour');
buttons('player5','playerFive');
buttons('player6','playerSix');



function playerList() {
 const playerSelectedList = document.querySelectorAll('#player-container li');
 const allPlayerName = [];
 for(const playerName of playerSelectedList ){
  allPlayerName.push(playerName) ;
 }
 const abcde = allPlayerName.length;
 return abcde;
}