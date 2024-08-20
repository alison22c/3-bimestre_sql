
let respostaAPI = [
    {"id": 1, "descrição": "varrer a sala "},
    {"id": 2, "descrição": "revisar a aula de BD"},
    {"id": 3, "descrição": "lavar a louça"},
    {"id": 4, "descrição": "lavar a roupa"},
    {"id": 5, "descrição": "Arrumar a cama"}   //json
];
//array matriz
const taskList = document.getElementById("task-list");

function init(){
    carregarLista()
}

function carregarLista(){
    let idx = -1;
    const listContainer = document.getElementById("task-list");
    listContainer.innerHTML= '';


}

























// function salvarTarefa(){
//     const Adicionar = document.getElementById("adicionar")
//     repostaAPI.push({"id: getProximoId(), "descricao": Adicionar.value});
//     Adicionar.value = ''
//     carregarLista();
// }


// function getProximoId(){
//     return 1;
// }

// Function editarTarefa()