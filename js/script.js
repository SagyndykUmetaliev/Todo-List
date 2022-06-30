const form = document.querySelector('form')

let todos = []

const createTask = () =>{
    let message = document.querySelector('#message')
    let task = {
        id:todos.length===0 ? 1
        : todos[todos.length-1].id+1,
        message:message.value,
        status:false,
        date: new Date()
        
    }
      todos.push(task)
      message.value=''
      renderTodos()

      
      
      
}




form.addEventListener('submit',(e)=>{
    e.preventDefault()
    createTask()
    changeStatus()
    changeText()
    
    
})


const renderTodos = () =>{ 
    const output = document.querySelector('#output')
    output.innerHTML=''
    todos.forEach(el=>{
        let block = document.createElement('div')
        block.className='block'
        block.style.background = el.status?'#bd155b':'#d96d2d'
        let mess = document.createElement('h2')
        let deleteBtn = document.createElement('button')

        deleteBtn.textContent = 'DELETE'
        let editBtn = document.createElement('button')
        editBtn.textContent = 'EDIT'
        let doneBtn = document.createElement('button')
        let completeTodo =document.createElement('p')
        completeTodo.textContent = el.status?'Todo is  completed':''   
        doneBtn.textContent = 'DONE'
        let currentDate = el.date
        let date = document.createElement('p')
        date.textContent = currentDate = `${currentDate.getDate()} - ${currentDate.getMonth()+1} - ${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes().toString().length<2?'0'+currentDate.getMinutes():currentDate.getMinutes()}  `
        doneBtn.style.display = el.status ? 'none': null
        mess.textContent=el.message
        deleteBtn.addEventListener('click',()=>{
            
           
            el.status ?  deleteTodo(el.id): 
            alert('Todo is not completed')         

        })
        doneBtn.addEventListener('click',()=>{
            
            changeStatus(el.id)
        })
        editBtn.addEventListener('click',()=>{
           
            changeText(el.id)
            
        })
       
    
        block.append(mess,deleteBtn,doneBtn,editBtn,completeTodo,date)
        output.append(block)

    })
}

const deleteTodo = (id) =>{
    todos = todos.filter(el=>el.id != id)
    renderTodos()
    
}

const editTodo = (id) =>{
    todos = todos.filter(el=>el.id != id)
    renderTodos()
    
}



const changeStatus = (id) =>{
    todos.forEach(el=>{
      if(id===el.id){
        el.status = true 
      }  
    })
    renderTodos()
}

const changeText = (id) =>{
    todos.forEach(el=>{
        if(id===el.id){
            let newMess = prompt('edit')
                el.message = newMess}
    })
    renderTodos()
}


// console.log(new Date());
// console.log(new Date().getDate());
// console.log(new Date().getMonth()+1);
// console.log(new Date().getFullYear());
// console.log(new Date().getHours());
// console.log(new Date().getMinutes());
let date = new Date()
let currentDate =  `${date.getDate()} - ${date.getMonth()+1} - ${date.getFullYear()} ${date.getHours()}:${date.getMinutes().toString().length<2?'0'+date.getMinutes():date.getMinutes()}:${date.getSeconds().toString().length<2?"0"+date.getSeconds():date.getSeconds}`

// console.log(currentDate);