const homeContainer = document.getElementById('home-container')
const guestContainer = document.getElementById('guest-container')
let home = document.getElementById('home-score')
let guest = document.getElementById('guest-score')

let homeScore = 0
let guestScore = 0


function homeAddOne () {
  homeScore += 1
  home.textContent = homeScore
  if(homeScore > guestScore) {
    leader()
  }

}

function homeAddTwo () {
    homeScore += 2
    home.textContent = homeScore
    if(homeScore > guestScore) {
        leader()
    }
    
}

function homeAddThree () {
    homeScore += 3
    home.textContent = homeScore
    if(homeScore > guestScore) {
        leader()
    }
    
}

function guestAddOne () {
    guestScore += 1 
    guest.textContent = guestScore
    if(guestScore > homeScore) {
        leader()
    }
    
}

function guestAddTwo () {
    guestScore += 2
    guest.textContent = guestScore
    if(guestScore > homeScore) {
        leader()
    }
    
}

function guestAddThree () {
    guestScore += 3
    guest.textContent = guestScore
    if(guestScore > homeScore) {
        leader()
    }
    
}

function newGame () {
    homeScore = 0
    guestScore = 0

    home.textContent = homeScore
    guest.textContent = guestScore
    
    homeContainer.style.boxShadow = "none"
    guestContainer.style.boxShadow = "none"

}

function leader () {
    if(homeScore > guestScore) {
        homeContainer.style.boxShadow = "10px 10px 10px 10px white"
    } else if (guestScore > homeScore) {
        guestContainer.style.boxShadow = "10px 10px 10px 10px black"
    } else {
        homeContainer.style.boxShadow = "none"
        guestContainer.style.boxShadow = "none"
    }
}



