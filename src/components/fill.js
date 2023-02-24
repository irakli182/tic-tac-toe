
import checkEmpty from "./checkEmpty"
import winloose from "./winloose"

function fill() {

    function check(str) {
        if (str.textContent == ""){
            return true
        } else {
            return false
        }
    }

    const box1 = document.getElementById("box1")
    const box2 = document.getElementById("box2")
    const box3 = document.getElementById("box3")
    const box4 = document.getElementById("box4")
    const box5 = document.getElementById("box5")
    const box6 = document.getElementById("box6")
    const box7 = document.getElementById("box7")
    const box8 = document.getElementById("box8")
    const box9 = document.getElementById("box9")


    function fillgap () {


        // edges middle //


        if (box1.textContent == 'X' && box3.textContent == "X" && box2.textContent == '' && box5.textContent == "O") {
            box2.textContent = 'O'
        }

        else if (box2.textContent == 'O' && box5.textContent == 'O' && box8.textContent == '') {
            box8.textContent = 'O' 
        }

        else if (box1.textContent == 'X' && box7.textContent == "X" && box4.textContent == '' && box5.textContent == "O") {
            box4.textContent = 'O'
        }

        else if (box3.textContent == 'X' && box9.textContent == "X" && box6.textContent == '' && box5.textContent == "O") {
            box6.textContent = 'O'
        }

        else if (box7.textContent == 'X' && box9.textContent == "X" && box8.textContent == '' && box5.textContent == "O") {
            box8.textContent = 'O'
        }

        // crossess //

        else if (box3.textContent == 'X' && box7.textContent == "X" && box5.textContent == 'O' && box2.textContent == '' ) {
            box2.textContent = 'O'
        }

        else if (box1.textContent == 'X' && box9.textContent == "X" && box5.textContent == 'O' && box2.textContent == '') {
            box2.textContent = 'O'
        }


        // win con //

        else if (box3.textContent == "O" && box5.textContent == "O" && box7.textContent == "") {
            box7.textContent = "O"
        }

        else if (box1.textContent == "O" && box5.textContent == "O" && box9.textContent == "") {
            box9.textContent = "O"
        }

        else if (box9.textContent == "O" && box5.textContent == "O" && box1.textContent == "") {
            box1.textContent = "O"
        }

        else if (box7.textContent == "O" && box5.textContent == "O" && box3.textContent == "") {
            box3.textContent = "O"
        }

        else if (box2.textContent == 'O' && box5.textContent == 'O' && box8.textContent == '') {
            box8.textContent = 'O' 
        }

        else if (box1.textContent == "O" && box2.textContent == "O" && box3.textContent == ""){
            box3.textContent = "O"
        }

        else if (box2.textContent == "O" && box3.textContent == "O" && box1.textContent == ""){
            box1.textContent = "O"
        }

        else if (box3.textContent == "O" && box6.textContent == "O" && box9.textContent == ""){
            box9.textContent = "O"
        }

        else if (box6.textContent == "O" && box9.textContent == "O" && box3.textContent == ""){
            box3.textContent = "O"
        }

        else if (box9.textContent == "O" && box8.textContent == "O" && box7.textContent == ""){
            box7.textContent = "O"
        }

        else if (box8.textContent == "O" && box7.textContent == "O" && box9.textContent == ""){
            box9.textContent = "O"
        }

        else if (box7.textContent == "O" && box4.textContent == "O" && box1.textContent == ""){
            box1.textContent = "O"
        }

        else if (box1.textContent == "O" && box4.textContent == "O" && box7.textContent == ""){
            box7.textContent = "O"
        }

        else if (box1.textContent == 'O' && box3.textContent == 'O' && box2.textContent == '') {
            box2.textContent = 'O'
        }

        else if (box3.textContent == 'O' && box9.textContent == 'O' && box6.textContent == '')
            box6.textContent = 'O'

        else if (box4.textContent == "O" && box5.textContent == 'O' && box6.textContent == ''){
            box6.textContent = 'O'
        }

        // xmiddle //

        else if (box1.textContent == "X" && box5.textContent == "X" && box9.textContent == '') {
            box9.textContent = 'O'
        }

        else if (box5.textContent == "X" && box7.textContent == "X" && box3.textContent == "O") {
            box9.textContent = "O"
        }

        else if (box5.textContent == "X" && box9.textContent == "X" && box1.textContent == '') {
            box1.textContent = 'O'
        }

        else if (box3.textContent == "X" && box5.textContent == "X" && box7.textContent == '') {
            box7.textContent = 'O'
        }

        else if (box4.textContent == "X" && box5.textContent == "X" && box6.textContent == '') {
            box6.textContent = 'O'
        }

        else if (box2.textContent == "X" && box5.textContent == "X" && box8.textContent == '') {
            box8.textContent = 'O'
        }

        else if (box5.textContent == "X" && box6.textContent == "X" && box4.textContent == "") {
            box4.textContent = 'O'
        }

        else if (box5.textContent == "X" && box7.textContent == "X" && box3.textContent == '') {
            box3.textContent = 'O'
        }
        
        else if (box5.textContent == "X" && box8.textContent == "X" && box2.textContent == '') {
            box2.textContent = 'O'
        }

        // side by side //

        
        else if (box1.textContent == "X" && box2.textContent == 'X' && box5.textContent == "O") {
            box3.textContent = "O"
        }

        else if (box2.textContent == "X" && box3.textContent == 'X' && box5.textContent == "O") {
            box1.textContent = "O"
        }

        else if (box3.textContent == "X" && box6.textContent == 'X' && box5.textContent == "O") {
            box9.textContent = "O"
        }

        else if (box6.textContent == "X" && box9.textContent == 'X' && box5.textContent == "O") {
            box3.textContent = "O"
        }
        
        else if (box9.textContent == "X" && box8.textContent == 'X' && box5.textContent == "O") {
            box7.textContent = "O"
        }

        else if (box8.textContent == "X" && box7.textContent == 'X' && box5.textContent == "O") {
            box9.textContent = "O"
        }

        else if (box7.textContent == "X" && box4.textContent == 'X' && box5.textContent == "O") {
            box1.textContent = "O"
        }

        else if (box1.textContent == "X" && box4.textContent == 'X' && box5.textContent == "O" && box7.textContent == '') {
            box7.textContent = "O"
        }


        // cant win //
        
        else if (box2.textContent == "X" && box4.textContent == 'X' && box5.textContent == "O") {
            checkEmpty()
        }

        else if (box2.textContent == "X" && box6.textContent == 'X' && box5.textContent == "O") {
            checkEmpty()
        }

        else if (box2.textContent == "X" && box7.textContent == 'X' && box5.textContent == "O") {
            checkEmpty()
        }

        else if (box2.textContent == "X" && box9.textContent == 'X' && box5.textContent == "O") {
            checkEmpty()
        }

        // cant win flipped //

        else if (box8.textContent == "X" && box4.textContent == 'X' && box5.textContent == "O") {
            checkEmpty()
        }

        else if (box8.textContent == "X" && box6.textContent == 'X' && box5.textContent == "O") {
            checkEmpty()
        }

        else if (box8.textContent == "X" && box1.textContent == 'X' && box5.textContent == "O") {
            checkEmpty()
        }

        else if (box8.textContent == "X" && box3.textContent == 'X' && box5.textContent == "O") {
            checkEmpty()
        }


        else {
            checkEmpty()
        }


        

    }


    box1.addEventListener('click', function(){
        if (check(box1)) {
            box1.textContent = 'X';
            if (box5.textContent == '') {
                box5.textContent = "O"
            }
            fillgap()
            winloose()
        }})

    box2.addEventListener('click', function(){
        if (check(box2)) {
            box2.textContent = 'X'
            if (box5.textContent == '') {
                box5.textContent = "O"
            }
            fillgap()
            winloose()
        }})

    box3.addEventListener('click', function(){
        if (check(box3)) {
            box3.textContent = 'X'
            if (box5.textContent == '') {
                box5.textContent = "O"
            }
            fillgap()
            winloose()
        }})

    box4.addEventListener('click', function(){
        if (check(box4)) {
            box4.textContent = 'X'
            if (box5.textContent == '') {
                box5.textContent = "O"
            }
            fillgap()
            winloose()
        }})

    box5.addEventListener('click', function(){
        if (check(box5)) {
            box5.textContent = "X"
            if (box5.textContent == 'X') {
                box3.textContent = 'O'
            }
            fillgap()
            winloose()
        }})

    box6.addEventListener('click', function(){
        if (check(box6)) {
            box6.textContent = 'X'
            if (box5.textContent == '') {
                box5.textContent = "O"
            }
            fillgap()
            winloose()
        }})

    box7.addEventListener('click', function(){
        if (check(box7)) {
            box7.textContent = 'X'
            if (box5.textContent == '') {
                box5.textContent = "O"
            }
            fillgap()
            winloose()
        }})

    box8.addEventListener('click', function(){
        if (check(box8)) {
            box8.textContent = 'X'
            if (box5.textContent == '') {
                box5.textContent = "O"
            }
            fillgap()
            winloose()
        }
    })

    box9.addEventListener('click', function(){
        if (check(box9)) {
            box9.textContent = 'X'
            if (box5.textContent == '') {
                box5.textContent = "O"
            }
            fillgap()
            winloose()
        }})

        
        winloose()
}

export default fill
