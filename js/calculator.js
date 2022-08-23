
// First Button
// Step:1
document.getElementById('player-cost-btn').addEventListener('click', function(){
    // step:1 Get the player cost from input field.
    const playerCost= document.getElementById('player-cost');
    const playervalueString = playerCost.value;
    const playerValue = parseFloat(playervalueString);
    // console.log(playervalue);

    // step:2 Set The total cost in the total player expences segment:

    const previousValue = document.getElementById('allplayer-expences');
    const previousValueString = previousValue.innerText;
    const previousValueAmount = parseFloat(previousValueString);
    const total = previousValueAmount + playerValue;
    previousValue.innerText = total;
    
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

    const allExpences = document.getElementById('all-expences');
    const allExpencesString = allExpences.innerText;
    const allExpencesAmount = parseFloat(allExpencesString);
    const previousValue = document.getElementById('allplayer-expences');
    const previousValueAmountString = previousValue.innerText;
    const previousValueAmount = parseFloat(previousValueAmountString)
    const total = totalExpences+allExpencesAmount+ previousValueAmount;
    allExpences.innerText = total;

})