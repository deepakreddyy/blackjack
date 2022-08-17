
let isAlive = false
let hasBlackjack = false
let cards=[]
let sum=0
let message=""
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardsEl=document.getElementById("cards-el")



function startGame(){
    isAlive=true
    let firstCard=getRandomCard()
    let secondCard=getRandomCard()
     cards=[firstCard,secondCard]
     sum=firstCard+secondCard

    


 renderGame()
}

function renderGame(){


    cardsEl.textContent="cards: "

    for(let i=0;i<cards.length;i++)
    {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent="sum: " + sum

    if(sum<21){
        message="Do you want to draw a new card?"
        
    }
    else if(sum===21)
    {
        message="You've got Blackjack!"
        hasBlackjack=true
    }
    else{
        message="You,re out of the game!"
        isAlive=false
    }
    
    messageEl.textContent=message

}
function newCard(){
    if(isAlive===true && hasBlackjack===false){
        let card=getRandomCard();
        sum=sum+card;
        cards.push(card)
        renderGame()
    
    }
   
}
function getRandomCard(){
let randomNumber=Math.floor( Math.random()*13)+1
if(randomNumber > 10)
return 10
else if(randomNumber === 1)
return 11
else 
return randomNumber



}