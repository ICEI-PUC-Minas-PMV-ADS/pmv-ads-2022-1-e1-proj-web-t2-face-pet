function cadastroAnimal (){



var animal = document.getElementById("animal")
var tutor = document.getElementById("tutor");
var emailTutor = document.getElementById("emailtutor");
var dataPerdido = document.getElementById("dataperdido");
var localidade = document.getElementById("localidade");
var ultimalocalidade = document.getElementById("ultimalocalidade");
var info = document.getElementById("info");


var dados = JSON.parse(localStorage.getItem("animalPerdido"));

if(dados == null){

localStorage.setItem("cadastroAnimal","[]");

dados = [];
}

var cadastroPerdido = {

animalPerdido: animal.value,
tutoranimalPerdido: tutor.value,
animalPerdidoEmailTutor: emailTutor.value,
animalPerdidoDataPerdido: dataPerdido.value,
animalPerdidoLocalidade: localidade.value,
animalPerdidoUltimaLocalidade: ultimalocalidade.value,
animalPerdidoInfo: info.value,


}


dados.push(cadastroPerdido);

localStorage.setItem("cadastroAnimal", JSON.stringify(dados));



alert("Animal Cadastrado com Sucesso!")

}