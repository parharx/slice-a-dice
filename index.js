const div = document.querySelector('#animated')
const body = document.querySelector('body')
const score = document.querySelector('#score')
var timer = document.querySelector('#timer')
var btn = document.querySelector('button')
var currentTime = 5
var changeScore = 0
var randomTime
var randomPosition
var randomAnimation
var createDiv
var noOfDivs



/* Write the program below */
// countDownTimerId = setInterval(remainTime, 1000)

function remainTime() {
    currentTime--
    timer.textContent = currentTime

    if (currentTime == 0){
        alert("Game Over" + "Your Score is " + changeScore )
        clearInterval(countDownTimerId)
        currentTime = 1
        div.style.animationName = ""
        location.reload()
    }

}

div.addEventListener('click', change)

function change() {

    changeScore++
    score.innerHTML = changeScore

    randomTime = Math.floor(Math.random() * 3 + 1)
    div.style.animationDuration= randomTime + "s"

    randomPosition = Math.floor( (((Math.random() * 8) * 10) + 2) )
    div.style.left = randomPosition + "%"
    console.log(randomPosition)
    
    randomAnimation = Math.floor(Math.random() * 4 + 1)
    div.style.animationName = "animated-" + randomAnimation

}

btn.onclick = function moveMole() {

    currentTime  = 60
    timer.textContent = currentTime
    result = 0
    score.textContent =  result
    countDownTimerId = setInterval(remainTime, 1000)

    div.style.animationName = "animated-4"
    btn.remove()
}
