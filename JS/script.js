const button = document.querySelector('.button-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-task')

let minhaListaDeItens = []

function adicionarNovaTarefa() {
    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false
    })
    input.value = ''
    mostrarTarefas()
}
function mostrarTarefas() {
    let novaLi = ''
    minhaListaDeItens.forEach((item, posicao) => {
        novaLi = novaLi +`
        <li class="task ${item.concluida && "done"}">
        <lord-icon src="https://cdn.lordicon.com/yqzmiobz.json" trigger="hover" state="hover" onclick="concluirTarefa(${posicao})"></lord-icon>
        <p>${item.tarefa}</p>
        <lord-icon src="https://cdn.lordicon.com/jmkrnisz.json" trigger="hover" onclick="deletarItem(${posicao})"></lord-icon>
        </li>
        `
    })
    listaCompleta.innerHTML = novaLi
    localStorage.setItem('lista',JSON.stringify(minhaListaDeItens))

}
function concluirTarefa(posicao){
    minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida
    mostrarTarefas()
}
function deletarItem(posicao){
    minhaListaDeItens.splice(posicao, 1)
    mostrarTarefas()
}
function recarregarTarefas(){
    const tarefasDoLocalStorage = localStorage.getItem('lista')
    if (tarefasDoLocalStorage){
    minhaListaDeItens = JSON.parse(tarefasDoLocalStorage)
    }
    mostrarTarefas()
}
recarregarTarefas()
button.addEventListener('click', adicionarNovaTarefa)