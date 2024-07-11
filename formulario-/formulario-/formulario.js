function Enviar(){
    // declaranod as variaveis
    let nomeUsuario = document.getElementById('Nome').value
    let emailUsuario = document.getElementById('Email').value
    let IdadeUsuario = document.getElementById('Idade').value
    let UsoTermos = document.getElementById('Termos')

    // escolhenfo o primeiro marcado, mas é só um marcdo
    let genero = document.querySelector("input[name='genero']:checked").value

    if(UsoTermos.checked){
        alert ('Seu nome é: '+nomeUsuario+'\n' 
        + 'Seu email é: '+emailUsuario+ '\n' 
        + 'Sua idade é: ' +IdadeUsuario + '\n' +
        'genero: ' + genero
        )

        // puxei a outra tela
        window.location.href='telainicial.html'

    }
    else{
        alert("você não aceitou os termos")
    }
}

function Voltar(){
    window.location.href='formulario.html'
}
