let increase= document.querySelector('#inc');
let decrease= document.querySelector('#dec');

let main= document.querySelector('#show')

let count=0;
increase.addEventListener('click',function(){
    main.textContent = ++count;

});
 
decrease.addEventListener('click',function(){
    main.textContent = --count;
    
});