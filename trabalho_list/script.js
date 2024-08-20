document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.querySelector('.Adicionar');
    const inputField = document.querySelector('input[type="text"]');
    const todoList = document.querySelector('.todo-list');

    // Adicionar uma nova tarefa
    addButton.addEventListener('click', function() {
        const taskText = inputField.value.trim();
        if (taskText !== '') {
            const newTask = document.createElement('li');
            newTask.innerHTML = `
                <input type="checkbox">
                <label>${taskText}</label>
                <button class="edit">
                    <img src="./img/cached_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png" alt="Editar" title="Editar">
                </button>
                <button class="delete">
                    <img src="./img/delete_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png" alt="Apagar" title="Apagar">
                </button>
            `;
            todoList.appendChild(newTask);
            inputField.value = ''; // Limpa o campo de texto
        }
    });

    // Editar ou deletar uma tarefa existente
    todoList.addEventListener('click', function(e) {
        const taskItem = e.target.closest('li');
        
        // Deletar tarefa
        if (e.target.closest('.delete')) {
            taskItem.remove();
        }
        
        // Editar tarefa
        if (e.target.closest('.edit')) {
            const label = taskItem.querySelector('label');
            const newTaskText = prompt("Edite a tarefa:", label.textContent);
            if (newTaskText !== null && newTaskText.trim() !== '') {
                label.textContent = newTaskText;
            }
        }
    });
});
