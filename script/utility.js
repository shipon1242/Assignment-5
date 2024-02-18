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
// append
function WhichSeatSelected(seatId){
    const mother =document.getElementById('parentma')
    const elements=document.createElement('h2')
    elements.innerText=seatId
    const elementsClass=document.createElement('h2')
    elementsClass.innerText='Economy'
    const elementsPrice=document.createElement('h2')
    elementsPrice.innerText='550'
    
   mother.appendChild(elements);
   mother.appendChild(elementsClass);
   mother.appendChild(elementsPrice);

}
// function WhichSeatSelected() {
//     const mother = document.getElementById('appendParent');

//     const elements = document.createElement('h2');
//     elements.innerText = 'This is Shion';

//     const elementsClass = document.createElement('p');
//     elementsClass.innerText = 'Economy';

//     const elementsPrice = document.createElement('p');
//     elementsPrice.innerText = 550;

//     mother.appendChild(elements);
//     mother.appendChild(elementsClass);
//     mother.appendChild(elementsPrice);
// }
