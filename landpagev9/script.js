/* Função toggle menu para responsividade do menu HAMBURGUER */

let btnMobile = document.getElementById('btn-mobile')

function toggleMenu(event){
    if(event.type === 'touchstart') event.preventDefault()
    let nav = document.getElementById('nav')
    nav.classList.toggle('active')
}

    /* ao clicar, ativar função toggleMenu*/
btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)

/* Local storage data list \ Validação campos tela de cadastro \ */

let sairNavButton = document.getElementById('sair-nav-button')
let adminNavButton = document.getElementById('admin-nav-button')
let meuPerfilNavButton = document.getElementById("perfil-nav-button")
let signUpNavButton = document.getElementById("signup-nav-button") // id do elemento a no html referente ao direcionamento para a tela de cadastro
let signInNavButton = document.getElementById("signinv2-nav-button") // id do elemento a no html referente ao direcionamento para a tela de login
let signInForm = document.getElementById("form-signin") // id divForm tela idex seção signin
let form = document.getElementById("form-signup") // id divform tela signup
let formCad = document.getElementById("form-perfil") // id divform tela meu perfil
let formInputs = document.getElementsByClassName("form-inputs") // classe dos inputs de todas as páginas que possuem inputs
let usernameCad = document.getElementById("username") // id do input username telas signup
let emailCad = document.getElementById("email") // id do input email telas signup
let passwordCad = document.getElementById("password") // id do input password telas signup
let passwordConfirmationCad = document.getElementById("passwordconfirmation") // id do input password-confirmation tela signup
let nomeCompletoCad = document.getElementById("nomecompleto") // id do input nome-completo tela signup
let cpfCad = document.getElementById("cpf") // id do input CPF (telas signup e perfil)
let nascimentoCad = document.getElementById("nascimento") // id do input data de nascimento tela signup
let phoneNumberCad = document.getElementById("phonenumber") // id do input phone-number tela signup
let indicaUmCad= document.getElementById("indica1") // id do nome-indicacao-1 tela signup
let indicaUmPhoneCad = document.getElementById("indica1phone") // id do phone-indicacao-1 telas
let indicaDoisCad = document.getElementById("indica2") // id do nome-indicacao-2 tela signup
let indicaDoisPhoneCad = document.getElementById("indica2phone") // id do phone-indicacao-2 telas signup
let usernamePerfil = document.getElementById("usernameperfil") // id do input username tela perfil
let emailPerfil = document.getElementById("emailperfil") // id do input email telas perfil
let passwordPerfil = document.getElementById("passwordperfil") // id do input password telas perfil
let passwordConfirmationPerfil = document.getElementById("passwordconfirmationperfil") // id do input password-confirmation tela perfil
let nomeCompletoPerfil = document.getElementById("nomecompletoperfil") // id do input nome-completo tela perfil
let cpfPerfil = document.getElementById("cpfperfil") // id do input CPF telas perfil
let nascimentoPerfil = document.getElementById("nascimentoperfil") // id do input data de nascimento tela perfil
let phoneNumberPerfil = document.getElementById("phonenumberperfil") // id do input phone-number tela perfil
let indicaUmPerfil = document.getElementById("indica1perfil") // id do nome-indicacao-1 tela perfil
let indicaUmPhonePerfil = document.getElementById("indica1phoneperfil") // id do phone-indicacao-1 tela perfil
let indicaDoisPerfil = document.getElementById("indica2perfil") // id do nome-indicacao-2 tela perfil
let indicaDoisPhonePerfil = document.getElementById("indica2phoneperfil") // id do phone-indicacao-2 tela perfil
let usernameSignIn = document.getElementById("inputs-signin-username") // id do input username tela signup
let passwordSignIn = document.getElementById("inputs-signin-password") // id do input password tela signup
let statusEdit = true // flag para disable e enable dos inputs na tela de perfil
let clickEditPepperoni = true // flag pro click da opção pepperoni
let clickEditVeggie = true // flag pro click da opção veggie
let clickEditQueijo = true // flag pro click da opção queijo
let clickButtonPedido = true // flag pro click do pedido de compra
let userLogedIn = false // flag para autenticação de login
let typePizza
let usernameListLocalStorage = []
let userLogado = JSON.parse(localStorage.getItem('userLogado'))
let objetoPedidos = {}
let optionSaboresPedido = document.getElementById("option-sabores") // id do input de opção de sabores pagina pedidos
let optionTamanhoPedido = document.getElementById("option-tamanhos") // id do input de opção de tamanhos pagina pedidos
let optionBordaPedido = document.getElementById("option-bordas") // id do input de opção de bordas pagina pedidos
let enderecoEntrega = []



if(userLogado == null){
    form.addEventListener('submit', (e) => {
        e.preventDefault()
    })

    form.addEventListener('keyup', (e) => {
        checkInputs()
    })
}
if (userLogado != null) {
    formCad.addEventListener('submit', (e) => {
        e.preventDefault()
    })
    formCad.addEventListener('keyup', (e) => {
        checkInputsPerfil()
    })
}

// função para cadastrar o usuario
function cadastraUser(){

    let userLocalObj = {

        username: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        nomeCompleto: "",
        cpf: "",
        nascimento: "",
        phoneNumber: "",
        indicaUm : "",
        indicaUmPhone: "",
        indicaDois: "",
        indicaDoisPhone: "",
        pedidos: []
    
    }

    userLocalObj.username = usernameCad.value
    userLocalObj.email = emailCad.value
    userLocalObj.password = passwordCad.value
    userLocalObj.passwordConfirmation = passwordConfirmationCad.value
    userLocalObj.nomeCompleto = nomeCompletoCad.value
    userLocalObj.cpf = cpfCad.value
    userLocalObj.nascimento = nascimentoCad.value
    userLocalObj.phoneNumber = phoneNumberCad.value
    userLocalObj.indicaUm = indicaUmCad.value
    userLocalObj.indicaUmPhone = indicaUmPhoneCad.value
    userLocalObj.indicaDois = indicaDoisCad.value
    userLocalObj.indicaDoisPhone = indicaDoisPhoneCad.value

    usernameListLocalStorage = JSON.parse(localStorage.getItem('usernameList'))

    if (usernameListLocalStorage === null){
        usernameListLocalStorage = []
        usernameListLocalStorage.push(userLocalObj)
        localStorage.setItem('usernameList', JSON.stringify(usernameListLocalStorage))
    }

    let formInputsControls = form.querySelectorAll('.form-inputs-control')
        
    /* para utilizar o método .every é necessário converter formInputsControls para um array padrão, ele é um node list.*/
    /* a função em seguida verifica se todos os formInputsControls possuem uma classe de sucesso */
    let formIsValid = [...formInputsControls].every((formInputsControls) => {
        return formInputsControls.className === "form-inputs-control success"
    })

    if (formIsValid){

        if(usernameListLocalStorage === null){
            usernameListLocalStorage = []
            usernameListLocalStorage.push(userLocalObj)
            localStorage.setItem('usernameList', JSON.stringify(usernameListLocalStorage))
        }else{ 
            usernameListLocalStorage.push(userLocalObj)
            localStorage.setItem('usernameList', JSON.stringify(usernameListLocalStorage))      
        }
        alert("USUARIO CADASTRADO COM SUCESSO")
        moveToSignIn()
    }
}
// autenticação e login
function LOGAR(){

    let i = 0

    usernameListLocalStorage = JSON.parse(localStorage.getItem('usernameList'))

    if(usernameSignIn.value == "" || passwordSignIn.value == ""){
        alert("POR FAVOR, PREENCHA USUÁRIO E SENHA.")
    }else
        for(i=0; i < usernameListLocalStorage.length; i++){
            if(usernameSignIn.value == usernameListLocalStorage[i].username && passwordSignIn.value == usernameListLocalStorage[i].password){
                userLogado = usernameSignIn.value
                localStorage.setItem('userLogado', JSON.stringify(userLogado))
                alert("Bem-vindo!")
                window.location.href = "indexv2.html"
                userLogedIn = true          
            } 
        }
    if(!userLogedIn){
        alert("USUÁRIO OU SENHA INVÁLIDOS")
    }      
}        
// configurações das páginas
function carregaUser(){

    checkUsernameListExist()

    let userLogado = JSON.parse(localStorage.getItem('userLogado'))
    usernameListLocalStorage = JSON.parse(localStorage.getItem('usernameList'))

    if(userLogado != null){        
        signUpNavButton.style.display = 'none'
        signInNavButton.style.display = 'none'
        sairNavButton.display = 'none'
    } else {
        meuPerfilNavButton.style.display = 'none'
        adminNavButton.style.display = 'none'
        sairNavButton.style.display = 'none'
    }

    if(userLogado == 'admin'){
        adminNavButton.style.display = 'block'
    }else{
        adminNavButton.style.display = 'none'
    }
} 
// configurações da página perfil de usuário
function carregaUserPerfil(){    

    let userLogado = JSON.parse(localStorage.getItem('userLogado'))
    usernameListLocalStorage = JSON.parse(localStorage.getItem('usernameList'))
    let userValid = {
        username: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        nomeCompleto: "",
        cpf: "",
        nascimento: "",
        phoneNumber: "",
        indicaUm : "",
        indicaUmPhone: "",
        indicaDois: "",
        indicaDoisPhone: "",
        pedidos: []
    }

    if(userLogado == 'admin'){
        moveToAdmin()
    } else {
        if(userLogado != null){     
            
            adminNavButton.style.display = 'none'

            for(i=0 ; i<usernameListLocalStorage.length; i++){
                if(userLogado == usernameListLocalStorage[i].username){            
                    userValid.username = usernameListLocalStorage[i].username            
                    userValid.email = usernameListLocalStorage[i].email
                    userValid.password = usernameListLocalStorage[i].password
                    userValid.passwordConfirmation = usernameListLocalStorage[i].passwordConfirmation
                    userValid.nomeCompleto = usernameListLocalStorage[i].nomeCompleto
                    userValid.cpf = usernameListLocalStorage[i].cpf
                    userValid.nascimento = usernameListLocalStorage[i].nascimento
                    userValid.phoneNumber = usernameListLocalStorage[i].phoneNumber
                    userValid.indicaUm = usernameListLocalStorage[i].indicaUm
                    userValid.indicaUmPhone = usernameListLocalStorage[i].indicaUmPhone
                    userValid.indicaDois = usernameListLocalStorage[i].indicaDois
                    userValid.indicaDoisPhone = usernameListLocalStorage[i].indicaDoisPhone
                    i = usernameListLocalStorage.length
                }
            }
            
            usernamePerfil.value = userValid.username
            emailPerfil.value = userValid.email
            passwordPerfil.value = userValid.password
            passwordConfirmationPerfil.value = userValid.passwordConfirmation
            nomeCompletoPerfil.value = userValid.nomeCompleto
            cpfPerfil.value = userValid.cpf
            nascimentoPerfil.value = userValid.nascimento
            phoneNumberPerfil.value = userValid.phoneNumber
            indicaUmPerfil.value = userValid.indicaUm
            indicaUmPhonePerfil.value = userValid.indicaUmPhone
            indicaDoisPerfil.value = userValid.indicaDois
            indicaDoisPhonePerfil.value = userValid.indicaDoisPhone
            
            if(statusEdit){
            usernamePerfil.disabled = true
            emailPerfil.disabled = true
            passwordPerfil.disabled = true
            passwordConfirmationPerfil.disabled = true
            nomeCompletoPerfil.disabled = true
            cpfPerfil.disabled = true
            nascimentoPerfil.disabled = true
            phoneNumberPerfil.disabled = true
            indicaUmPerfil.disabled = true
            indicaUmPhonePerfil.disabled = true
            indicaDoisPerfil.disabled = true
            indicaDoisPhonePerfil.disabled = true
            }
        }else{

        }
    }        

}
// libera os inputs para alteração de valores
function editar() {

    if(statusEdit){
        usernamePerfil.disabled = true
        emailPerfil.disabled = false
        passwordPerfil.disabled = false
        passwordConfirmationPerfil.disabled = true
        nomeCompletoPerfil.disabled = false
        cpfPerfil.disabled = true
        nascimentoPerfil.disabled = false
        phoneNumberPerfil.disabled = true
        indicaUmPerfil.disabled = false
        indicaUmPhonePerfil.disabled = false
        indicaDoisPerfil.disabled = false
        indicaDoisPhonePerfil.disabled = false
        statusEdit = false
    } else {
        usernamePerfil.disabled = true
        emailPerfil.disabled = true
        passwordPerfil.disabled = true
        passwordConfirmationPerfil.disabled = true
        nomeCompletoPerfil.disabled = true
        cpfPerfil.disabled = true
        nascimentoPerfil.disabled = true
        phoneNumberPerfil.disabled = true
        indicaUmPerfil.disabled = true
        indicaUmPhonePerfil.disabled = true
        indicaDoisPerfil.disabled = true
        indicaDoisPhonePerfil.disabled = true
        statusEdit = true
    }
}
// armazena o vetor usernameList no localstorage
function salvar() {
    let i
    let userValid = {
        username: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        nomeCompleto: "",
        cpf: "",
        nascimento: "",
        phoneNumber: "",
        indicaUm : "",
        indicaUmPhone: "",
        indicaDois: "",
        indicaDoisPhone: "",
        pedidos: []
    }
    
    let passwordEditConfirmation = prompt("Tem certeza que deseja alterar os seus dados?\n\nDigite a sua senha para confirmar:")
    
    if(passwordEditConfirmation == passwordConfirmationPerfil.value){
        userValid.username = usernamePerfil.value
        userValid.email = emailPerfil.value
        userValid.password = passwordPerfil.value
        userValid.passwordConfirmation = passwordPerfil.value
        userValid.nomeCompleto = nomeCompletoPerfil.value
        userValid.cpf = cpfPerfil.value
        userValid.nascimento = nascimentoPerfil.value
        userValid.phoneNumber = phoneNumberPerfil.value
        userValid.indicaUm = indicaUmPerfil.value
        userValid.indicaUmPhone = indicaUmPhonePerfil.value
        userValid.indicaDois = indicaDoisPerfil.value
        userValid.indicaDoisPhone = indicaDoisPhonePerfil.value

        usernameListLocalStorage = JSON.parse(localStorage.getItem('usernameList'))
        userLogado = JSON.parse(localStorage.getItem('userLogado'))

        for(i=0; i < usernameListLocalStorage.length; i++){    
            if(userLogado == usernameListLocalStorage[i].username){
                usernameListLocalStorage[i].username = (userValid.username)
                usernameListLocalStorage[i].email = (userValid.email)
                usernameListLocalStorage[i].password = userValid.password
                usernameListLocalStorage[i].passwordConfirmation = userValid.password
                usernameListLocalStorage[i].nomeCompleto = userValid.nomeCompleto
                usernameListLocalStorage[i].cpf = userValid.cpf
                usernameListLocalStorage[i].nascimento = userValid.nascimento
                usernameListLocalStorage[i].phoneNumber = userValid.phoneNumber
                usernameListLocalStorage[i].indicaUm = userValid.indicaUm
                usernameListLocalStorage[i].indicaUmPhone = userValid.indicaUmPhone
                usernameListLocalStorage[i].indicaDois = userValid.indicaDois
                usernameListLocalStorage[i].indicaDoisPhone = userValid.indicaDoisPhone
                localStorage.setItem('usernameList', JSON.stringify(usernameListLocalStorage))
                alert("Dados salvos com sucesso!")
            }
        }        

        usernamePerfil.disabled = true
        emailPerfil.disabled = true
        passwordPerfil.disabled = true
        passwordConfirmationPerfil.disabled = true
        nomeCompletoPerfil.disabled = true
        cpfPerfil.disabled = true
        nascimentoPerfil.disabled = true
        phoneNumberPerfil.disabled = true
        indicaUmPerfil.disabled = true
        indicaUmPhonePerfil.disabled = true
        indicaDoisPerfil.disabled = true
        indicaDoisPhonePerfil.disabled = true
        
    }
    else{
        alert("Senha inválida.")
    }
}
// exclui o usuário logado do array
function excluir() {
    usernameListLocalStorage = JSON.parse(localStorage.getItem('usernameList'))
    userLogado = JSON.parse(localStorage.getItem('userLogado'))

    let passwordEditConfirmation = prompt("Tem certeza que deseja excluir ?\n\nDigite a sua senha para confirmar:")
    if(passwordConfirmationCad == usernameListLocalStorage.password){
    for(i=0; i < usernameListLocalStorage.length; i++){

            if(userLogado == usernameListLocalStorage[i].username){
                usernameListLocalStorage.splice(i,1)
                localStorage.setItem('usernameList', JSON.stringify(usernameListLocalStorage))
                signOut()
            }
        }
    }
}
// limpa a chave de autenticação de usuário logado e direciona para a página de login
function signOut(){
    localStorage.removeItem('userLogado')
    moveToSignIn()
}

/*function sugestaoPepperoni() {
    sugestaoPepperoniClick()

    let objetoPedidos = {
        sabor: 'pepperoni',
        tamanho: 'M',
        borda: 'Cheddar',
        endereco: ''
    }

    let userLogado = JSON.parse(localStorage.getItem('userLogado'))

    if(userLogado != null){
        usernameListLocalStorage = JSON.parse(localStorage.getItem('usernameList'))    
        for(let i=0; i < usernameListLocalStorage.lenght; i++){
            if(userLogado == usernameListLocalStorage[i].username){
                prompt("Por favor confirme seu endereço")
                usernameListLocalStorage[i].pedidos.push(objetoPedidos)
                localStorage.setItem('usernameList', JSON.stringify(usernameListLocalStorage))
            }else{}
        }
    }else{
        let resposta = prompt("Tem certeza que deseja realizar este pedido?")
        if(resposta = 'sim'){
            prompt("Por favor confirme seu endereço")
            usernameListLocalStorage = JSON.parse(localStorage.getItem('pedidosAnonimos'))
            if(usernameListLocalStorage == null){
                usernameListLocalStorage = []
                usernameListLocalStorage.push(objetoPedidos)
                localStorage.setItem('pedidosAnonimos', JSON.stringify(usernameListLocalStorage))
            }else{
                usernameListLocalStorage.push(objetoPedidos)
                localStorage.setItem('pedidosAnonimos', JSON.stringify(usernameListLocalStorage))
            }            
        }
    }
}*/
// valida a transação da pizza de pepperoni
function sugestaoPepperoniClick() {

    let cardBrancoPepperoni = document.getElementById("card-quadrado-pepperoni")
    if(clickEditPepperoni){
        cardBrancoPepperoni.classList.add("card-vermelho-quadrado-pepperoni");
    //clickEditPepperoni = false
    }else{
        cardBrancoPepperoni.classList.remove("card-vermelho-quadrado-pepperoni");
    //clickEditPepperoni = true
    }
    clickEditPepperoni = !clickEditPepperoni
}
function sugestaoVeggie() {
    objetoPedidos = {
        sabor: 'veggie',
        tamanho: 'M',
        borda: 'Pesto',
        endereco: ''
    }

    userLogado = JSON.parse(localStorage.getItem('userLogado'))

    if(userLogado != null){
        usernameListLocalStorage = JSON.parse(localStorage.getItem('usernameList'))
        for(let i=0;i<usernameListLocalStorage.lenght;i++){
            if(usernameListLocalStorage[i].username == userLogado){
                let resposta = prompt("Tem certeza que deseja realizar este pedido?")
                if(resposta = 'sim'){
                usernameListLocalStorage[i].pedidos.push(objetoPedidos)
                localStorage.setItem('usernameList', JSON.stringify(usernameListLocalStorage))
                }else{alert("pedido cancelado")}
            }
        }
    }else{
        let resposta = prompt("Tem certeza que deseja realizar este pedido?")
        if(resposta = 'sim'){
            prompt("Por favor confirme seu endereço")
            usernameListLocalStorage = JSON.parse(localStorage.getItem('pedidosAnonimos'))
            if(usernameListLocalStorage == null){
                usernameListLocalStorage = []
                usernameListLocalStorage.push(objetoPedidos)
                localStorage.setItem('pedidosAnonimos', JSON.stringify(usernameListLocalStorage))
            }else{
                usernameListLocalStorage.push(objetoPedidos)
                localStorage.setItem('pedidosAnonimos', JSON.stringify(usernameListLocalStorage))
            }            
        }
    }
}
// valida a transação da pizza veggie
function sugestaoVeggieClick() {

    let cardBrancoVeggie = document.getElementById("card-quadrado-veggie")
    if(clickEditVeggie){
        cardBrancoVeggie.classList.add("card-vermelho-quadrado-veggie");
    //clickEditVeggie = false
    }else{
        cardBrancoVeggie.classList.remove("card-vermelho-quadrado-veggie");
    //clickEditVeggie = true
    }
    clickEditVeggie = !clickEditVeggie
}
// valida transação de uma pizza de queijo
function sugestaoQueijo() {
    objetoPedidos = {
        sabor: 'queijo',
        tamanho: 'M',
        borda: 'Catupiry',
        endereco: ''
    }

    userLogado = JSON.parse(localStorage.getItem('userLogado'))

    if(userLogado != null){
        usernameListLocalStorage = JSON.parse(localStorage.getItem('usernameList'))
        for(let i=0;i<usernameListLocalStorage.lenght;i++){
            if(usernameListLocalStorage[i].username == userLogado){
                let resposta = prompt("Tem certeza que deseja realizar este pedido?")
                if(resposta = 'sim'){
                usernameListLocalStorage[i].pedidos.push(objetoPedidos)
                localStorage.setItem('usernameList', JSON.stringify(usernameListLocalStorage))
                }else{alert("pedido cancelado")}
            }
        }
    }else{
        let resposta = prompt("Tem certeza que deseja realizar este pedido?")
        if(resposta = 'sim'){
            prompt("Por favor confirme seu endereço")
            usernameListLocalStorage = JSON.parse(localStorage.getItem('pedidosAnonimos'))
            if(usernameListLocalStorage == null){
                usernameListLocalStorage = []
                usernameListLocalStorage.push(objetoPedidos)
                localStorage.setItem('pedidosAnonimos', JSON.stringify(usernameListLocalStorage))
            }else{
                usernameListLocalStorage.push(objetoPedidos)
                localStorage.setItem('pedidosAnonimos', JSON.stringify(usernameListLocalStorage))
            }            
        }
    }

}
// valida a transação da pizza queijo
function sugestaoQueijoClick() {

    let cardBrancoQueijo = document.getElementById("card-quadrado-queijo")
    if(clickEditQueijo){
        cardBrancoQueijo.classList.add("card-vermelho-quadrado-queijo");
    //clickEditQueijo = false
    }else{
        cardBrancoQueijo.classList.remove("card-vermelho-quadrado-queijo");
    //clickEditQueijo = true
    }
    clickEditQueijo = !clickEditQueijo
}
// seleciona uma opção de pizza na pagina de carrinho e libera o botão de pedido
function changeColorCardPizza(type) {
    typePizza = type
    let cardPizza = document.getElementById(`card-quadrado-${type}`);
    let buttonPizzaPedido = document.getElementById('button-carrinho-pedido')
    if (clickEditPepperoni && clickEditQueijo && clickEditVeggie) {
      cardPizza.classList.add(`card-new-color-${type}`);
    } else {        
      cardPizza.classList.remove(`card-new-color-${type}`);
    }
    switch (type) {
      case 'pepperoni':
        clickEditPepperoni = !clickEditPepperoni;
        break;
      case 'veggie':
        clickEditVeggie = !clickEditVeggie;
        break;
      case 'queijo':
        clickEditQueijo = !clickEditQueijo;
        break;
    }
    if (!clickEditPepperoni || !clickEditQueijo || !clickEditVeggie){
        buttonPizzaPedido.classList.add("button-pedido-liberado");
        buttonPizzaPedido.disabled = false
    } else {
        buttonPizzaPedido.classList.remove("button-pedido-liberado");
        buttonPizzaPedido.disabled = true
    }
}  
// confirma pedido e registra dados no sistema
function confirmaPedido(){
    userLogado = JSON.parse(localStorage.getItem('userLogado'))
    switch (typePizza){
        case 'pepperoni':
            objetoPedidos = {
                sabor: 'pepperoni',
                tamanho: 'M',
                borda: 'Cheddar',
                endereco: ""                            
            }
            break
            
        case 'veggie':
            objetoPedidos = {
                sabor: 'veggie',
                tamanho: 'M',
                borda: 'Pesto',
                endereco: ''                    
            }
            break

        case 'queijo':
            objetoPedidos = {
                sabor: 'queijo',
                tamanho: 'M',
                borda: 'Catupiry',
                endereco: ""                            
            }
            break
        
    }
    enderecoEntrega = localStorage.getItem('enderecoentrega')
    objetoPedidos.endereco = enderecoEntrega
    if(userLogado != null){
        usernameListLocalStorage = JSON.parse(localStorage.getItem('usernameList'))
        for(let i=0;i<usernameListLocalStorage.length;i++){
            if(usernameListLocalStorage[i].username == userLogado){         
                usernameListLocalStorage[i].pedidos.push(objetoPedidos)
                localStorage.setItem('usernameList', JSON.stringify(usernameListLocalStorage))
            }
        }
    }else{      
        usernameListLocalStorage.push(objetoPedidos)
        localStorage.setItem('pedidosAnonimos', JSON.stringify(usernameListLocalStorage))
    }
    localStorage.removeItem('endereco')
    
    alert("SEU PEDIDO ESTÁ SENDO PREPARADO...\nAGUARDE COM A FORMA DE PAGAMENTO EM MÃOS!")
    window.location.href = "indexv2.html"    
}
// move para o carrinho
function moveToCarrinho() {
    enderecoEntrega = document.getElementById('enderecopedido').value
    localStorage.setItem('enderecoentrega', JSON.stringify(enderecoEntrega))
    window.location.href = "carrinho.html"
}
// move para painel do admin
function moveToAdmin() {
    window.location.href = "admin.html"
}
// move para a tela de cadastro
function moveToSignUp() {
    window.location.href = "signup.html"
}
// move para a tela de login
function moveToSignIn() {
    window.location.href = "signinv2.html"
}
// move para a página do perfil
function moveToProfile() {
    window.location.href = "perfil.html"
}
// faz validações dos inputs de cadastro 
function checkInputs() {

    let usernameValue = usernameCad.value
    let emailValue = emailCad.value
    let passwordValue = passwordCad.value
    let passwordConfirmationValue = passwordConfirmationCad.value
    let nomeCompletoValue = nomeCompletoCad.value
    let cpfValue = cpfCad.value
    let nascimentoValue = nascimentoCad.value
    let phoneNumberValue = phoneNumberCad.value
    let indicaUmValue = indicaUmCad.value
    let indicaUmPhoneValue = indicaUmPhoneCad.value
    let indicaDoisValue = indicaDoisCad.value
    let indicaDoisPhoneValue = indicaDoisPhoneCad.value

    let phoneNumberExist
    let userExist
    let cpfExist
    let emailExist

    usernameListLocalStorage = JSON.parse(localStorage.getItem('usernameList'))
    if(usernameListLocalStorage == null){
        usernameListLocalStorage = []
        localStorage.setItem('usernameList', JSON.stringify(usernameListLocalStorage))
    }

    usernameListLocalStorage.forEach((item) => {
        if(usernameValue == item.username){
            userExist = true
        }
        if(cpfValue == item.cpf){
            cpfExist = true
        }
        if(emailValue == item.email){
            emailExist = true
        }
        if(phoneNumberValue == item.phoneNumber){
            phoneNumberExist = true
        }
    })

    /* for(i=0; i < usernameListLocalStorage.length; i++){

        if(usernameValue == usernameListLocalStorage[i].username){
            userExist = true
        } else {            
        } 
    }*/

    if (usernameValue === "") {
        setErrorFor(username, "Nome de usuário é obrigatório")
    }else if(userExist){
        setErrorFor(username, "Usuário já cadastrado!")
    } else {    
        setSuccessFor(username)
    }

    if (emailValue === "") {
        setErrorFor(email, "E-mail é obrigatório")
    } else if (!checkValidEmail(emailValue)) {
        setErrorFor(email, "Por favor, insira um e-mail válido")
    } else if (emailExist){
        setErrorFor(email, "E-mail já cadastrado!")    
    } else {
        setSuccessFor(email)
    }

    if (passwordValue === "") {
        setErrorFor(password, "Senha é obrigatória")
    } else if (passwordValue.length < 6 ){
        setErrorFor(password, "Mínimo 6 caracteres")
    } else {
        setSuccessFor(password)
    }

    if (passwordConfirmationValue === "") {
        setErrorFor(passwordconfirmation, "Confirmação de senha é obrigatória")
    } else if (passwordConfirmationValue !== passwordValue ){
        setErrorFor(passwordconfirmation, "As senhas não conferem")
    } else {
        setSuccessFor(passwordconfirmation)
    }

    if (nomeCompletoValue === "") {
        setErrorFor(nomecompleto, "Nome completo é obrigatório")
    } else {
        setSuccessFor(nomecompleto)
    }
    
    if (cpfValue === "") {
        setErrorFor(cpf, "CPF é obrigatório")
    } else if(cpfExist){
        setErrorFor(cpf, "CPF já cadastrado")
    } else {
        setSuccessFor(cpf)
    }

    let nascimentoValueSplit = nascimentoValue.split("/")
    let nascimentoValueSplitStr = new Date(nascimentoValueSplit[2], nascimentoValueSplit[1] - 1, nascimentoValueSplit[0])

    if (nascimentoValue === "") {
        setErrorFor(nascimento, "Data de nascimento é obrigatória")
    } else if (nascimentoValueSplitStr > new Date()){
        setErrorFor(nascimento, "Por favor, digite uma data de nascimento válida")
    } else {
        setSuccessFor(nascimento)
    }    
    
    if (phoneNumberValue === "") {
        setErrorFor(phonenumber, "Número de celular é obrigatório")
    } else if (!checkPhoneNumber(phoneNumberValue)) {
        setErrorFor(phonenumber, "Por favor insira um número de celular válido")
    } else if (phoneNumberExist){
        setErrorFor(phonenumber, "Número de telefone já cadastrado!")
    } else {
        setSuccessFor(phonenumber)
    }

    if (indicaUmValue === "") {
        setErrorFor(indica1, "Nome de indicação é obrigatório")
    } else {
        setSuccessFor(indica1)
    }

    if (indicaUmPhoneValue === "") {
        setErrorFor(indica1phone, "Número de celular é obrigatório")
    } else if (!checkPhoneNumber(indicaUmPhoneValue)) {
        setErrorFor(indica1phone, "Por favor insira um número de celular válido")
    } else {
        setSuccessFor(indica1phone)
    }

    if (indicaDoisValue === "") {
        setSuccessFor(indica2)
    }

    if (indicaDoisPhoneValue === "") {
        setSuccessFor(indica2phone)
    } else if (!checkPhoneNumber(indicaDoisPhoneValue)) {
        setErrorFor(indica2phone, "Por favor insira um número de celular válido")
    } else {
        setSuccessFor(indica2phone)
    }
}
// faz validações dos inputs da tela de perfil
function checkInputsPerfil() {

    let usernameValue = usernamePerfil.value
    let emailValue = emailPerfil.value
    let passwordValue = passwordPerfil.value
    let passwordConfirmationValue = passwordConfirmationPerfil.value
    let nomeCompletoValue = nomeCompletoPerfil.value
    let cpfValue = cpfPerfil.value
    let nascimentoValue = nascimentoPerfil.value
    let phoneNumberValue = phoneNumberPerfil.value
    let indicaUmValue = indicaUmPerfil.value
    let indicaUmPhoneValue = indicaUmPhonePerfil.value
    let indicaDoisValue = indicaDoisPerfil.value
    let indicaDoisPhoneValue = indicaDoisPhonePerfil.value

    if (usernameValue === "") {
        setErrorFor(usernameperfil, "Nome de usuário é obrigatório")
    }else if(checkExistUsername(usernameValue)){
        setErrorFor(usernameperfil, "Usuário já cadastrado!")
    } else {    
        setSuccessFor(usernameperfil)
    }

    if (emailValue === "") {
        setErrorFor(emailperfil, "E-mail é obrigatório")
    } else if (!checkValidEmail(emailValue)) {
        setErrorFor(emailperfil, "Por favor, insira um e-mail válido")
    } else {
        setSuccessFor(emailperfil)
    }

    if (passwordValue === "") {
        setErrorFor(passwordperfil, "Senha é obrigatória")
    } else if (passwordValue.length < 6 ){
        setErrorFor(passwordperfil, "Mínimo 6 caracteres")
    } else {
        setSuccessFor(passwordperfil)
    }

    if (passwordConfirmationValue === "") {
        setErrorFor(passwordconfirmationperfil, "Confirmação de senha é obrigatória")
    } else {
        setSuccessFor(passwordconfirmationperfil)        
    }

    if (nomeCompletoValue === "") {
        setErrorFor(nomecompletoperfil, "Nome completo é obrigatório")
    } else {
        setSuccessFor(nomecompletoperfil)
    }
    
    if (cpfValue === "") {
        setErrorFor(cpfperfil, "CPF é obrigatório")
    } else if(checkExistCPF(cpfValue)){
        setErrorFor(cpfperfil, "CPF já cadastrado")
    } else {
        setSuccessFor(cpfperfil)
    }

    let nascimentoValueSplit = nascimentoValue.split("/")
    let nascimentoValueSplitStr = new Date(nascimentoValueSplit[2], nascimentoValueSplit[1] - 1, nascimentoValueSplit[0])

    if (nascimentoValue === "") {
        setErrorFor(nascimento, "Data de nascimento é obrigatória")
    } else if (nascimentoValueSplitStr > new Date()){
        setErrorFor(nascimentoperfil, "Por favor, digite uma data de nascimento válida")
    } else {
        setSuccessFor(nascimentoperfil)
    }    
    
    if (phoneNumberValue === "") {
        setErrorFor(phonenumber, "Número de celular é obrigatório")
    } else if (!checkPhoneNumber(phoneNumberValue)) {
        setErrorFor(phonenumberperfil, "Por favor insira um número de celular válido")
    } else {
        setSuccessFor(phonenumberperfil)
    }

    if (indicaUmValue === "") {
        setErrorFor(indica1perfil, "Nome de indicação é obrigatório")
    } else {
        setSuccessFor(indica1perfil)
    }

    if (indicaUmPhoneValue === "") {
        setErrorFor(indica1phoneperfil, "Número de celular é obrigatório")
    } else if (!checkPhoneNumber(indicaUmPhoneValue)) {
        setErrorFor(indica1phoneperfil, "Por favor insira um número de celular válido")
    } else {
        setSuccessFor(indica1phoneperfil)
    }

    if (indicaDoisValue === "") {
        setSuccessFor(indica2perfil)
    }

    if (indicaDoisPhoneValue === "") {
        setSuccessFor(indica2phoneperfil)
    } else if (!checkPhoneNumber(indicaDoisPhoneValue)) {
        setErrorFor(indica2phoneperfil, "Por favor insira um número de celular válido")
    } else {
        setSuccessFor(indica2phoneperfil)
    }
}
// estabelece o status de erro para o campo determinado e mostra a mensagem referente a validação
function setErrorFor(input, message) {
    let formInputsControl = input.parentElement
    let small = formInputsControl.querySelector('small')
    
    // adicionar a mensagem de erro
    small.innerText = message;

    // adicionar a classe de erro
    formInputsControl.className = "form-inputs-control error"
}
// estabelece o status de sucesso para o campo determinado e mostra a mensagem referente a validação
function setSuccessFor(input) {
    let formInputsControl = input.parentElement

    // adicionar a classe de sucesso
    formInputsControl.className = "form-inputs-control success"
}
// verifica se o e-mail digitado no cadastro é válido
function checkValidEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
)}
// verifica se o telefone celular é válido (possui ddd brasileiro, inicia com o numero 9 e tem 8 dígitoss)
function checkPhoneNumber(phoneNumber) {
    return /^\(?(?:[14689][1-9]|2[12478]|3[1234578]|5[1345]|7[134579])\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/.test(
        phoneNumber
)}
// verifica se um usuário já existe
function checkExistUsername(username) {
    let existUsername = []
    existUsername = JSON.parse(localStorage.getItem('usernameList'));
    
     // validação do username no array usernameList (que está no local storage)
    existUsername.forEach((item) => {
        if(username == item.username){
            return true
        }else {
            return false  
        }
    })
}
// verifica se o cpf já existe
function checkExistCPF(cpf) {
    let existCPF = JSON.parse(localStorage.getItem('usernameList'));
    if (existCPF && existCPF.includes(cpf)) {
        return true // CPF já cadastrado
    } else {
        return false // CPF não cadastrado       
    }
}
//verifica se o vetor usernameList está no localStorage e se não está cria um vazio key[usernameList]
function checkUsernameListExist(){
    let userLocalObj = {

        username: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        nomeCompleto: "",
        cpf: "",
        nascimento: "",
        phoneNumber: "",
        indicaUm : "",
        indicaUmPhone: "",
        indicaDois: "",
        indicaDoisPhone: "",
        pedidos: []
    
    }
    
    usernameListLocalStorage = JSON.parse(localStorage.getItem('usernameList'))

    if (usernameListLocalStorage === null){
        usernameListLocalStorage = []
        usernameListLocalStorage.push(userLocalObj)
        localStorage.setItem('usernameList', JSON.stringify(usernameListLocalStorage))
    }
}

/* function cadastraChamado(){

    if(userLogedIn){
    let cont = 0
    usernameListLocalStorage = JSON.parse(localStorage.getItem('usernameList'))

    for(i=0; i < usernameListLocalStorage.length; i++){

        if(userLogado == usernameListLocalStorage[i].username){

            objetoPedidos = {
                sabor: "",
                tamanho: "",
                borda: "",
                endereco: "",
                observacao: ""
            }
            
            objetoPedidos.sabor = optionSaboresPedido.value
            objetoPedidos.tamanho = optionSaboresPedido.value
            objetoPedidos.borda = optionSaboresPedido.value
            objetoPedidos.endereco = optionSaboresPedido.value
            objetoPedidos.observacao = optionSaboresPedido.value

            usernameListLocalStorage[i].pedidos.push(objetoPedidos.value)
            localStorage.setItem('usuarioSalvo', JSON.stringify(vetorUsers))
            alert("Telefone cadastrado! :D")

        }else{

            cont++

        }

    }

        if(cont == vetorUsers.length){

            alert("Sua senha não confere!")

        }
    } else {

    }

} */

