const Formulario = document.getElementById("Formulario");
const cadastroArmazenado = document.querySelector(".cadastro");
const nomeInput = Formulario["nome"];
const cidadeInput = Formulario["cidade"];
const dataInput = Formulario["data"];
const seuNomeInput = Formulario["seuNome"];
const emailInput = Formulario["email"];
const telefoneInput = Formulario["telefone"];
const infoInput = Formulario["info"];

const cadastro = JSON.parse(localStorage.getItem("cadastro")) || [];

const addAnimal = (nome, cidade, data, seuNome, email, telefone, info) => {
  cadastro.push({
    nome,
    cidade,
    data,
    seuNome,
    email,
    telefone,
    info
  });

  localStorage.setItem("cadastro", JSON.stringify(cadastro));

  return { nome, cidade, data, seuNome, email, telefone, info };
};

const createAnimalElement = ({ nome, cidade, data, seuNome, email, telefone, info }) => {
  
  const animalDiv = document.createElement("div");
  const animalNome = document.createElement("p");
  const animalCidade = document.createElement("p");
  const animalData = document.createElement("p");
  const animalSeuNome = document.createElement("p");
  const animalEmail = document.createElement("p");
  const animalTelefone = document.createElement("p");
  const animalInfo = document.createElement("p");

  
  animalNome.innerText = "Nome do animal: " + nome;
  animalCidade.innerText = "Cidade em que foi localizado: " + cidade;
  animalData.innerText = "Data do desaparecimento: " + data;
  animalSeuNome.innerText = "Seu nome: " + seuNome;
  animalEmail.innerText = "E-mail: " + email;
  animalTelefone.innerText = "Telefone: " + telefone;
  animalInfo.innerText = "Informações Adicionais: " + info;

  
  animalDiv.append(animalNome, animalCidade, animalData, animalSeuNome, animalEmail, animalTelefone, animalInfo);
  cadastroArmazenado.appendChild(animalDiv);

  cadastroArmazenado.style.display = cadastro.length === 0 ? "none" : "flex";
};

cadastroArmazenado.style.display = cadastro.length === 0 ? "none" : "flex";

cadastro.forEach(createAnimalElement);

Formulario.onsubmit = e => {
  e.preventDefault();

  const newAnimal = addAnimal(
    nomeInput.value,
    cidadeInput.value,
    dataInput.value,
    seuNomeInput.value,
    emailInput.value,
    telefoneInput.value,
    infoInput.value,
  );

  createAnimalElement(newAnimal);

  nomeInput.value = "";
  cidadeInput.value = "";
  dataInput.value = "";
  seuNomeInput.value = "";
  emailInput.value = "";
  telefoneInput.value = "";
  infoInput.value = "";
};