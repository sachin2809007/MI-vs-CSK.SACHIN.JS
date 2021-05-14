const strikeButton = document.getElementById('strike')
const resetButton = document.getElementById('reset')
const team1score = document.getElementById('score-team1')
const team2score = document.getElementById('score-team2')
const team1wickets = document.getElementById('wickets-team1')
const team2wickets = document.getElementById('wickets-team2')

var scoreTeam1 = 0
var scoreTeam2 = 0
var wicketsTeam1 = 0
var wicketsTeam2 = 0
var ballFacedTeam1 = 0
var ballFacedTeam2 = 0
var turn = 1
const strikeAudio = new Audio('https://i1.faceprep.in/prograd-junior/bat%2Bhit%2Bball.mp3')
const gameOverAudio = new Audio('https://i1.faceprep.in/prograd-junior/Ball%2BHit%2BCheer.mp3')

const possibleOutcomes = [0,1,2,3,4,6,"W"]

strikeButton.onclick = ()=>{
    strikeAudio.pause()
    strikeAudio.currentTime = 0
    strikeAudio.play()

    const randomElement = possibleOutcomes[Math.floor(Math.random()*possibleOutcomes.length)]
if(turn == 1){
        ballFacedTeam1++
        document.querySelector(`#team1-superover div:nth-child(${ballFacedTeam1})`).textContent = randomElement
        if(randomElement == "W"){
            wicketsTeam1++
        }
        else{
            scoreTeam1 += randomElement
        }

        if(ballFacedTeam1 == 6 || wicketsTeam1 == 2){
            turn = 2
        }
    }
    if(turn == 2){
        ballFacedTeam2++
        document.querySelector(`#team2-superover div:nth-child(${ballFacedTeam2})`).textContent = randomElement
        if(randomElement == "W"){
            wicketsTeam2++
        }
        else{
            scoreTeam2 += randomElement
        }

        if(ballFacedTeam2 == 6 || wicketsTeam2 == 2 || scoreTeam1<scoreTeam2){
            gameOver()
        }
    }
    updateScore()
}

function updateScore(){
    team1score.textContent = scoreTeam1
    team2score.textContent = scoreTeam2
    team1wickets.textContent = wicketsTeam1
    team2wickets.textContent = wicketsTeam2
}
function gameOver(){
    gameOverAudio.play()
    if(scoreTeam1>scoreTeam2){
        alert("MI wins")
    }
    if(scoreTeam2>scoreTeam1){
        alert("CSK wins")
    }
    if(scoreTeam2==scoreTeam1){
        alert("It's another superover")
    }
}
resetButton.onclick=()=>{
    window.location.reload()
}