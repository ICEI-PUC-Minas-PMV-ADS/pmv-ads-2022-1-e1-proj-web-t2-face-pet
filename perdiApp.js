const Formulario = document.getElementById("Formulario");
const animalArmazenado = document.querySelector(".animalPerdido");
const animalInput = Formulario["animal"];
const tutorInput = Formulario["tutor"];
const localidadeInput = Formulario["localidade"];
const ultimolocalInput = Formulario ["ultimoLocal"];
const dataAnimalPerdidoInput = Formulario["dataPerdido"];
const telefoneInput = Formulario["telefone"];
const emailInput = Formulario["email"];
const infoInput = Formulario["info"];

const cadastro = JSON.parse(localStorage.getItem("AnimalPerdido")) || [];

const addAnimal = (animal, tutor, telefone,email,  dataAnimalPerdido, localidade, ultimoLocal, info) => {
  cadastro.push({
    animal,
    tutor,
    telefone,
    email,
    dataAnimalPerdido,
    localidade,
    ultimoLocal,
    info
  });

  localStorage.setItem("cadastro", JSON.stringify(cadastro));

  return { animal, tutor, localidade,ultimoLocal, dataAnimalPerdido, telefone, email, info };
};

const createAnimalElement = ({ animal, tutor, telefone,email,  dataAnimalPerdido, localidade, ultimoLocal, info }) => {
  
  const animalDiv = document.createElement("div");
  const animalanimal = document.createElement("p");
  const animaltutor = document.createElement("p");
  const animallocalidade = document.createElement("p");
  const dataAnimalPerdido = document.createElement("p");
  const animaltelefone = document.createElement("p");
  const animalultimolocal = document.createElement("p");
  const animalemail = document.createElement("p");
  const animalInfo = document.createElement("p");

  
  animalNome.innerText = "Nome do animal: " + animal;
  animalCidade.innerText = "Cidade em que foi localizado: " + localidade;
  animalDataAnimalPerdido.innerText = "Data do desaparecimento: " + dataAnimalPerdido;
  animaltutor.innerText = "Seu nome: " + tutor;
  animalEmail.innerText = "E-mail: " + email;
  animalTelefone.innerText = "Telefone: " + telefone;
  animalInfo.innerText = "Informações Adicionais: " + info;

  
  animalDiv.append(animalNome, animalCidade, animaldataAnimalPerdido, animalSeuNome, animalultimolocal, animalEmail, animalTelefone, animalInfo);
  cadastroArmazenado.appendChild(animalDiv);

  cadastroArmazenado.style.display = cadastro.length === 0 ? "none" : "flex";
};

cadastroArmazenado.style.display = cadastro.length === 0 ? "none" : "flex";

cadastro.forEach(createAnimalElement);

Formulario.onsubmit = e => {
  e.preventDefault();

  const newAnimal = addAnimal(
    animalInput.value,
    localidadeInput.value,
    ultimolocalInput.value,
    dataAnimalPerdidoInput.value,
    tutorInput.value,
    emailInput.value,
    telefoneInput.value,
    infoInput.value,
  );

  createAnimalElement(newAnimal);

  animalInput.value = "";
  localidadeInput.value = "";
  ultimolocalInput.value = "";
  dataAnimalPerdidoInput.value = "";
  tutorInput.value = "";
  emailInput.value = "";
  telefoneInput.value = "";
  infoInput.value = "";
};