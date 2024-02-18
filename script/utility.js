// total price
function TotalPrice(selectSeat){
    let TotalPrice=550*selectSeat
    let getPriceById=document.getElementById('total-price')
    getPriceById.innerText=TotalPrice
}
// grand total 
function GrandTotal(selectSeat){
   
    let getPriceById=document.getElementById('grand-total')
    getPriceById.innerText=550*selectSeat
}
