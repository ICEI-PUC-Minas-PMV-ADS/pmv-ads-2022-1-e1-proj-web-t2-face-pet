# Programação de Funcionalidades

Nesta seção são apresentadas as telas desenvolvidas para cada uma das funcionalidades do sistema. O respectivo endereço (URL) e outras orientações de acesso são são apresentadas na sequência.

## Página Home (RF-009)

A tela "Página Home" apresenta cabeçalho com opção de ir a página de pesquisa, página de cadastro de animais perdidos "PERDI, E AGORA?", e página de animais encontrados "ENCONTREI, E AGORA?". 
Na página Home estará disponivel imagens de animais encontrados e perdidos, com a opção de filtro por data, tipo de animais e localização. 
Ainda encontrará a opção de compartilhamento para rede sociais e comentários, onde abrirá uma outra página para inserir todos os dados necessários para concluir o comentário.

<p align="center">
<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t2-face-pet/blob/main/docs/Pagina%20Home.png")
 </p>

<p align="center"> Figura 06 - Tela "Pagina Home". </p>  

### Requisitos atendidos
-	RF-009  - O site deve permitir que o usuário compartilhe as informações dos animais em plataformas de redes sociais

### Artefatos da funcionalidade
-	Home.html
-	Home_style.css


## Página de Pesquisa (RF-004, RF-005, RF-006, RF-007 e RF-008)

A tela "Pesquisa" apresenta cabeçalho com as opções de navegar entre as páginas "Home", "Encontrei, e agora?" e "Perdi, e agora?". Na página Pesquisa o usuário poderá
realizar sua busca de animais por características físicas, data em que foi encontrado, data em que foi perdido, pesquisa por bairros ou regiões. Além disso, a página apresenta filtros para facilitar e especificar melhor o que se pretende buscar.


<p align="center">
<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t2-face-pet/blob/9fb65706c4e42529c9d3cde89b50e1e1f7ae7d61/docs/img/Captura%20de%20ecr%C3%A3%202022-06-03%20231032.png"
     </p>
 
 <p align="center"> Figura 07 - Tela "Pesquisa". </p>  
 
 ### Requisitos atendidos
 - RF-004 - O site deve permitir que o usuário pesquise os animais cadastrados por suas características físicas.
 - RF-005 - O site deve permitir que o usuário pesquise os animais cadastrados pela data que foi encontrado.
 - RF-006 - O site deve permitir que o usuário pesquise os animais cadastrados pela data que foi perdido.
 - RF-007 - O site deve permitir que o usuário pesquise os animais cadastrados pelo bairro ou região que foi localizado.
 - RF-008 - O site deve permitir que o usuário pesquise os animais cadastrados pelo bairro que foi visto pela última vez.

### Artefatos de funcionalidade
- Pesquisa.html
- Pesquisa_style.css

## Cadastro de Animais Encontrados (RF-01, RF-02 e RF-03)

A tela "Encontrei, e agora?" do sistema apresenta um formulário para que pessoas que encontraram um animal perdido possam localizar o dono do animal. Os cadastros são armazenados no LocalStorage com estruturas de dados baseada em JSON. Um exemplo da tela é apresentado na Figura 08. 

<p align="center">
<img src="https://user-images.githubusercontent.com/100412134/169698953-575f82de-5384-4d82-944a-1d34c76d02ef.png")
 </p>

<p align="center"> Figura 08 - Tela "Encontrei, e agora?". </p>  
  
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

