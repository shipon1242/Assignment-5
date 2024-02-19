// total price
function TotalPrice(selectSeat){
    let TotalPrice=550*selectSeat
    let getPriceById=document.getElementById('total-price')
    getPriceById.innerText=TotalPrice
    
    return TotalPrice
}
// grand total 
// function GrandTotal(selectSeat){
   
//     let getPriceById=document.getElementById('grand-total')
//     getPriceById.innerText=550*selectSeat
// }
function GrandTotal(RegularTotalPrice){
   
        let getPriceById=document.getElementById('grand-total')
        let grandPrice=
        getPriceById.innerText=RegularTotalPrice
        return RegularTotalPrice
    }
// append part
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
// cuppon part
function coupon(selectSeat,RegularTotalPrice,grand){
    const couponParent=document.getElementById('coupon-parent')
    const applyBtn=document.getElementById('couponBtn')
    const couponField=document.getElementById('couponField')
    if(selectSeat===4){
        applyBtn.removeAttribute('disabled')
    }
    applyBtn.addEventListener('click',function(){
if(selectSeat===4){
    
    if(couponField.value==='NEW15'){
        const discount =(RegularTotalPrice*15)/100;
        grand=RegularTotalPrice-discount
        GrandTotal(grand)
        couponField.value=''
        couponParent.classList.add('hidden')


        

    }
    else if(couponField.value==='Couple 20'){
        const discount =(RegularTotalPrice*20)/100;
        grand=RegularTotalPrice-discount
        GrandTotal(grand)
        couponField.value=''
        couponParent.classList.add('hidden')
    }
    


    
}


    }
    )
   
}
// pasenger booking complite
function passengerBooked(selectSeat){
    const phoneNumber=document.getElementById('phone-number')
    if(selectSeat>=1){

        const getNext=document.getElementById('next-btn')
// const getModal=document.getElementById('success-modal')
// const getMainPage=document.getElementById('main-site')
getNext.removeAttribute('disabled') 
// getNext.addEventListener('click',function(){
    // getMainPage.classList.add('hidden')
    // getModal.classList.remove('hidden')
// })

    }
    




}
