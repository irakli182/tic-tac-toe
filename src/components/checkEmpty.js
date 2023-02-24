





export default function checkEmpty() {

    const box1 = document.getElementById("box1")
    const box2 = document.getElementById("box2")
    const box3 = document.getElementById("box3")
    const box4 = document.getElementById("box4")
    const box5 = document.getElementById("box5")
    const box6 = document.getElementById("box6")
    const box7 = document.getElementById("box7")
    const box8 = document.getElementById("box8")
    const box9 = document.getElementById("box9")

    let arr = [] 


    if (box1.textContent == '' ){
        arr.push(box1)
    } 
    if (box2.textContent == '' ){
        arr.push(box2)
    } 
    if (box3.textContent == '' ){
        arr.push(box3)
    } 
    if (box4.textContent == '' ){
        arr.push(box4)
    } 
    if (box5.textContent == '' ){
        arr.push(box5)
    } 
    if (box6.textContent == '' ){
        arr.push(box6)
    } 
    if (box7.textContent == '' ){
        arr.push(box7)
    } 
    if (box8.textContent == '' ){
        arr.push(box8)
    } 
    if (box9.textContent == '' ){
        arr.push(box9)
    } 

    var item = arr[Math.floor(Math.random()*arr.length)]

    console.log(arr.length)

    if (arr.length != 7) {

    item.textContent = "O" }


}