const openModalBtn = document.querySelector('#openModal')
const openCardModal = document.querySelector('#openCardModal')
const closeModal = document.getElementById('closeModal');
const modal = document.getElementById('modal');

openModalBtn.onclick = () => {
    modal.classList.remove('hidden');
    document.querySelector('form[name="addTask"]').classList.remove('hidden');
    document.querySelector('form[name="addCard"]').classList.add('hidden');
}


openCardModal.onclick = () => {
    modal.classList.remove('hidden');
    document.querySelector('form[name="addTask"]').classList.add('hidden');
    document.querySelector('form[name="addCard"]').classList.remove('hidden');
}

closeModal.onclick = () => {
    modal.classList.add('hidden');
}

function reload(arr) {

}


const peopleArray  = [
    {
        id: 1,
        title: "dfgdfdg",
        isDone: false,
        date: "dfgdfgdfg"
    },
    {
        id: 2,
        title: "fdgdf",
        isDone: false,
        date: "32fdg33d"
    },
    {
        id: 3,
        title: "hi",
        isDone: false,
        date: "dfgdfgdfgd"
    }
]



 const conteiner = document.querySelector(".todo-category")


function reload(peopleArray ) {

    for ( item of peopleArray ){
        const task_list = document.createElement('div')
        const task =document.createElement('div')
        const task_name =document.createElement('div')
        const input = document.createElement('input')
        const smth = document.creatElement('div')
        const p = document.createElement('p')
        const due_date = document.createElement('span')
        const btns = document.createElement('div')
        const save = document.createElement('button')
        const delet = document.createElement('button')

        task_list.classList.add('task-list')
        task.classList.add('task')
        task_name.classList.add('task_name')
        smth.classList.add('smth')
        save.classList.add('save')
        delet.classList.add('delete')

        p.innerHTML = item.title
        due_date.innerHTML = item.date
        save.src="./assets/icons8-backspace-50.png"
        delet.src = "./assets/icons8-delete-50.png"
        input.type = "checkbox"

        task_list.append(task, smth, p, due_date, btns)
        task.append(task_name, input)
        smth.append(p, due_date)
        btns.append(save, delet)




    }


}


reload(tasks) 


/* добавлени */

/* 
function addPerson() {
    const nameInput = document.getElementById('task-input');
    const ageInput = document.getElementById('task-date');
    const title = nameInput.value.trim(); 
    const data = ageInput.value.trim(); 

    if (name && age) {
        const person = {
            title: title,
            data: data
        };
        peopleArray.push(person); 
        console.log(peopleArray); 
        nameInput.value = ''; 
        ageInput.value = ''; 
    } else {
        alert('Пожалуйста, введите имя и возраст.'); 
    }
}


document.getElementById('submit-task').addEventListener('click', addPerson);

addPerson(peopleArray)
console.log(peopleArray);



 */