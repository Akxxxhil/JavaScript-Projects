let inputValue=document.getElementById('input-1')
let zero=document.getElementById('id-0')
let one=document.getElementById('id-1')
let two=document.getElementById('id-2')
let three=document.getElementById('id-3')
let four=document.getElementById('id-4')
let five=document.getElementById('id-5')
let six=document.getElementById('id-6')
let seven=document.getElementById('id-7')
let Eight=document.getElementById('id-8')
let Nine=document.getElementById('id-9')
let plus=document.getElementById('id-plus')
let minus=document.getElementById('id-minus')
let Multiply=document.getElementById('id-multiply')
let Equal=document.getElementById('id-equal')
let Clear=document.getElementById('id-clear')

let currentOpertor=''
let firstoperand=''


zero.addEventListener('click',()=>{
 inputValue.value +=0
})
one.addEventListener('click',()=>{
    inputValue.value +=1
})
two.addEventListener('click',()=>{
    inputValue.value +=2
})
three.addEventListener('click',()=>{
    inputValue.value +=3
})
four.addEventListener('click',()=>{
    inputValue.value +=4
})
five.addEventListener('click',()=>{
    inputValue.value +=5
})
six.addEventListener('click',()=>{
    inputValue.value +=6
})
seven.addEventListener('click',()=>{
    inputValue.value +=7
})
Eight.addEventListener('click',()=>{
    inputValue.value +=8
})
Nine.addEventListener('click',()=>{
    inputValue.value +=9
})
Clear.addEventListener('click',()=>{
    inputValue.value =" "

})

plus.addEventListener('click',()=>{
    firstoperand=inputValue.value
    currentOpertor="+"
    inputValue.value=""
})
minus.addEventListener('click',()=>{
    firstoperand=inputValue.value
    currentOpertor="-"
    inputValue.value=""
})
Multiply.addEventListener('click',()=>{
    firstoperand=inputValue.value
    currentOpertor="*"
    inputValue.value=""
})


Equal.addEventListener('click',()=>{
    let secondOperand=inputValue.value
    let result;
    switch(currentOpertor){
        case '+':
            result= parseInt(firstoperand) + parseInt(secondOperand);
            break;
        case '-':
            result= parseInt(firstoperand) - parseInt(secondOperand);
            break;
        case '*':
            result= parseInt(firstoperand) * parseInt(secondOperand);
            break;
        
    }
    inputValue.value=result


})
