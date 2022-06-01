# Programação de Funcionalidades

Nesta seção são apresentadas as telas desenvolvidas para cada uma das funcionalidades do sistema. O respectivo endereço (URL) e outras orientações de acesso são são apresentadas na sequência.

## Página Home (RF-009)

A tela "Página Home" apresenta cabeçalho com opção de ir a página de pesquisa, página de cadastro de animais perdidos "PERDI, E AGORA?", e página de animais encontrados "ENCONTREI, E AGORA?". 
Na página Home estará disponivel imagens de animais encontrados e perdidos, com a opção de filtro por data, tipo de animais e localização. 
Ainda encontrará a opção de compartilhamento para rede sociais e comentários, onde abrirá uma outra página para inserir todos os dados necessários para concluir o comentário.

<p align="center">
<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t2-face-pet/blob/main/docs/Pagina%20Home.png")
 </p>

<p align="center"> Tela "Pagina Home". </p>  

### Requisitos atendidos
-	RF-009  - O site deve permitir que o usuário compartilhe as informações dos animais em plataformas de redes sociais

### Artefatos da funcionalidade
-	Home.html
-	Home_style.css


## Cadastro de Animais Encontrados (RF-01, RF-02 e RF-03)

A tela "Encontrei, e agora?" do sistema apresenta um formulário para que pessoas que encontraram um animal perdido possam localizar o dono do animal. Os cadastros são armazenados no LocalStorage com estruturas de dados baseada em JSON. Um exemplo da tela é apresentado na Figura XX. 

<p align="center">
<img src="https://user-images.githubusercontent.com/100412134/169698953-575f82de-5384-4d82-944a-1d34c76d02ef.png")
 </p>

<p align="center"> Figura XX - Tela "Encontrei, e agora?". </p>  
  
### Requisitos atendidos
-	RF-01 - O site deve permitir que o usuário cadastre as informações do seu animal perdido.
-	RF-02 - O site deve permitir que o usuário cadastre as informações de um animal encontrado, com imagens, e dados de localização e contacto de quem o encontrou.
-	RF-03 - O site deve permitir que seja inserida uma foto do animal no seu cadastro.

### Artefatos da funcionalidade
-	EncontreieAgora.html
-	encontreiApp.js
-	EncontreieAgora_style.css

### Instruções de acesso
-	Abra um navegador de Internet e informe a URL do site;
-	Na tela principal, clique em "Encontrei, e agora?" no menu de navegação;
- O formulário de cadastro será exibido;
- Preencha o formulário de clique o no botão "Cadastrar".

