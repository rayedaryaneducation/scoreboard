let homeScore = document.getElementById('score-home')
let guestScore = document.getElementById('score-guest')
let scoreHomeInt = 0
let scoreGuestInt = 0
function add1_home(){
    scoreHomeInt +=1
    homeScore.textContent = scoreHomeInt
}
function add2_home(){
    scoreHomeInt +=2
    homeScore.textContent = scoreHomeInt
}
function add3_home(){
    scoreHomeInt +=3
    homeScore.textContent = scoreHomeInt
}
function add1_guest(){
    scoreGuestInt +=1
    guestScore.textContent = scoreGuestInt
}
function add2_guest(){
    scoreGuestInt +=2
    guestScore.textContent = scoreGuestInt
}
function add3_guest(){
    scoreGuestInt +=3
    guestScore.textContent = scoreGuestInt
}