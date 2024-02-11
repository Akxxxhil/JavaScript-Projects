document.addEventListener('DOMContentLoaded',function(){
    const taskInput=document.getElementById('taskInput');
    const addTaskBtn=document.getElementById('addTaskBtn');
    const taskList=document.getElementById('taskList');

  addTaskBtn.addEventListener("click",function(){
    const taskText=taskInput.value.trim();
    if(!taskText!==""){
        const listItem=document.createElement('li');
        listItem.textContent=taskText;
        taskList.appendChild(listItem);
        taskInput.value="";
    }
  
  });

  

})