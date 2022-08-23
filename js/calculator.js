
// First Button
// Step:1
document.getElementById('player-cost-btn').addEventListener('click', function(){
    // step:1 Get the player cost from input field.
    const playerCost= document.getElementById('player-cost');
    let playervalue = playerCost.value;
    // console.log(playervalue);

    // step:2 Set The total cost in the total player expences segment:

    const previousValue = document.getElementById('allplayer-expences');
    // const abcd = previousValue.innerText;
    // console.log(abcd);
    previousValue.innerText = playervalue;
    // console.log(playervalue);
});

// Second-Button
// Step-1:
document.getElementById('all-expences-btn').addEventListener('click',function(){
    // step:2
    const managerCost = document.getElementById('manager-cost');
    const managerStringValue = managerCost.value;
    const managerValue =parseFloat(managerStringValue);
    // step:3
    const coachCost = document.getElementById('coach-cost');
    const coachStringValue = coachCost.value;
    const coachValue =parseFloat(coachStringValue);
    // Step:4
    const totalExpences = managerValue + coachValue;

    const totalExpencesString = document.getElementById('all-expences');
    // const dbcs =  totalExpencesString.innerText;
    totalExpencesString.innerText = totalExpences;
})