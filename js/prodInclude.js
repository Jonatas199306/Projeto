// Referencias do DOM - HTML


const inpNome = document.getElementById('inpNome');
const inpDesc = document.getElementById('inpDesc');
const inpQtda = document.getElementById('inpQtda');
const inpFab = document.getElementById('inpFab');



const btnInclude = document.getElementById('btnInclude');

console.log (btnInclude);
//Código 

const api = axios.create({
    baseURL: 'http://18.224.8.119:3334/'
});

document.querySelector('form').addEventListener('submit', event =>{
    event.preventDefault();
});

btnInclude.onclick = ()=>{
    let nome = inpNome.value;
    let desc = inpDesc.value;
    let qtda = inpQtda.value;
    let fab = inpFab.value;
    
    data = {
        'nome': nome,
        'descri': desc,
        'qtda':qtda,
        'fabricante':fab
    }

    api.post ('produto', data).then (res=>{
        limparCampos();
        Swal.fire('cadastro realizado !!');
    }).catch(err => console.log ('Erro ao realizar Cadastro!!!'));
}
function limparCampos(){

    inpNome.value='';
    inp

}

()=>{

}