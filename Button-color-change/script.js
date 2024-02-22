let RedButton=document.getElementById('button-1')
let GreenButton=document.getElementById('button-2')
let BlueButton=document.getElementById('button-3')
let YellowButton=document.getElementById('button-4')

RedButton.addEventListener("click",function(){
    document.body.style.backgroundColor="red"
})
GreenButton.addEventListener("click",function(){
    document.body.style.backgroundColor="green"
})
BlueButton.addEventListener("click",function(){
    document.body.style.backgroundColor="blue"
})
YellowButton.addEventListener("click",function(){
    document.body.style.backgroundColor="yellow"
})

//KeY points to learn  

//1.... we can put addEventListener on every separate varible
//2... to color the body use body properties
//3... we learned click addEventListener