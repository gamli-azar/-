const continer = document.querySelector('.continer')
const seats = document.querySelectorAll('.row .seat:not(.aoccupid)')
const count = document.getElementById('count')
const total = document.getElementById('total')
const movieSelect = document.getElementById('movie')

let ticketPrice = +movieSelect.value
// console.log(typeof ticketPrice)
function setMovidata(movieIndex,moviPris){
    localStorage.setItem('movieIndex',movieIndex)
    localStorage.setItem('moviPris',moviPris)
}

function updateSelectedcount() {
    const selectedSeats = document.querySelectorAll('.row .seat.Selected')

    const setIndex = [...selectedSeats].map((seat) => {
        return [...seats].indexOf(seat)
    })
localStorage.setItem('selectedSeats',JSON.stringify(setIndex))
    const selectedSeatsCount = selectedSeats.length
    count.innerText = selectedSeatsCount
    total.innerText = selectedSeatsCount * ticketPrice
    console.log(selectedSeatsCount);
}


movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value
    setMovidata(e.target.selectedIndex,e.target.value)
    updateSelectedcount()
})

continer.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('aoccupid')) {
        console.log(e.target);
        e.target.classList.toggle('Selected')

    }


    updateSelectedcount()
})

