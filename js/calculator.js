
// First Button
// Step:1 : added eventHandler in First Button!

document.getElementById('player-cost-btn').addEventListener('click', function(){
    // step:2 Get the per player cost from input field.
    
    const perPlayerCost= document.getElementById('player-cost');
    const playervalueString = perPlayerCost.value;
    const playerValue = parseFloat(playervalueString);
    if (typeof playerValue !='number'){
        alert('not a number');
    }
    const playerSelected = playerList()
    
    const total = playerSelected * playerValue;
    console.log(total);
    // step:2 Set The total cost in the total player expences segment:

    const previousValue = document.getElementById('allplayer-expences');
    previousValue.innerText = total;
    
});

// Second-Button
// Step-1: Adding EventHandler in Second Button!

document.getElementById('all-expences-btn').addEventListener('click',function(){
    
    // step:2 Getting Manger Cost!
    const managerCost = document.getElementById('manager-cost');
    const managerStringValue = managerCost.value;
    const managerValue =parseFloat(managerStringValue);
    
    // step:3 Getting Coach Cost!
    const coachCost = document.getElementById('coach-cost');
    const coachStringValue = coachCost.value;
    const coachValue =parseFloat(coachStringValue);
    
    // Step:4: Sum Of Manager and Coach cost!
    const totalExpences = managerValue + coachValue;
    
    // step:5 Sum of All Expences!
    const previousValue = document.getElementById('allplayer-expences');
    const previousValueAmountString = previousValue.innerText;
    const previousValueAmount = parseFloat(previousValueAmountString)
    
    const allExpences = document.getElementById('all-expences');
    const allExpencesString = allExpences.innerText;
   
    const allTotal = previousValueAmount+totalExpences ;
    allExpences.innerText = allTotal;

})