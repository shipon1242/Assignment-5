// buy click buttton
// document.getElementById('BuyTicketButton').addEventListener('click',function(){
//     const ticketSection=document.getElementById('ticketSection')
//     ticketSection.scrollIntoView({ behavior: 'auto' })

   
// })
function scroal(){
    const ticketSection=document.getElementById('ticketSection')
    ticketSection.scrollIntoView()
    // document.addEventListener('click',function(event){
    // const elements=event.target
    // console.log(elements)
    
    }
    // getseatsId ()
    
    seatColor()
// const seatElement=document.getElementById('A1')
// const press=seatElement.addEventListener('click',function(event){
//     console.log('shipon')
// })

// }
function seatColor(){
    // getseatsId()
    let availableSeat=40;
    let selectSeat=0;
    let selectSeatsElement=document.getElementById('select-seat')
    
    
   let AvailableSeatsElement  = document.getElementById('available-seats')



    
    const seatsId=['A1','A2','A3','A4','B1','B2','B3','B4','C1','C2','C3','C4','D1','D2','D3','D4','E1','E2','E3','E4','F1','F2','F3','F4','G1','G2','G3','G4','H1','H2','H3','H4','I1','I2','I3','I4','J1','J2','J3','J4']
    
for(const seatId of seatsId ){
    const seatElement=document.getElementById(seatId)
    
    // const SeatText=seatElement.classList.add('bg-green')
    seatElement.addEventListener('click',function(event){
        event.target.style.backgroundColor='green'
        selectSeat=selectSeat+1;
        availableSeat=availableSeat-1;
       
        AvailableSeatsElement.innerText=availableSeat
        
        selectSeatsElement.innerText=selectSeat
        TotalPrice(selectSeat)
        GrandTotal(selectSeat)
        
    })
   
   }
  
//    const AvailableSeatsElement  = document.getElementById('available-seats')
//     const AvailableSeats= AvailableSeatsElement.innerText
//     console.log(AvailableSeats)
    
}
// setBackgroundColor('A1')


// availbe seat id check







