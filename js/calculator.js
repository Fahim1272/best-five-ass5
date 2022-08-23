document.getElementById('player-cost-btn').addEventListener('click', function(){
    // step:1 Get the player cost from input field.
    const playerCost= document.getElementById('player-cost');
    const playervalue = playerCost.value;
    // console.log(playervalue);

    // step:2 Set The total cost in the total player expences segment:

    const previousValue = document.getElementById('allplayer-expences');
    const abcd = previousValue.innerText;
    // console.log(abcd);
    previousValue.innerText = playervalue;
    // console.log(playervalue);
});
document.getElementById