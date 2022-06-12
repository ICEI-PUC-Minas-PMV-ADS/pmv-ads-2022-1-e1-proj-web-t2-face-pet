# Plano de Testes de Software

Os requisitos para realização dos testes de software são:
-	Site publicado na Internet;
-	Navegador da Internet - Chrome, Firefox ou Edge;
-	Conectividade de Internet.

Os testes funcionais a serem realizados no aplicativo são descritos a seguir.

| Caso de Teste  |  CT-01 - Página Home |
| ------------------- | ------------------- |
|  Requisitos Associados |  RF-009 O site deve permitir que o usuário compartilhe as informações dos animais em plataformas de redes sociais.<br>
|  Objetivo do Teste |  Verificar se usuário consegue compartilhar as informações do animal em rede social "Facebook"|
|  Passos | 1) Acessar o Navegador <br> 2) No grid com as informaçoes do animal, tanto perdido quando encontrado possui o botão de compartilhamento. <br>3) Clicar no botão compartilhar. <br>4) Acessar sua conta no facebook <br>5) Compartilhar o link do site com a imagem e mais informações do animal do animal; |
|  Critérios de Êxito |  ● O compartilhamento só estará completo após usuário clicar em "compartilhar" e inserir as informações de acesso para o Facebook.|

<br><br>

| Caso de Teste  |  CT-01 - Cadastrar um animal encontrado  |
| ------------------- | ------------------- |
|  Requisitos Associados |  RF-001 O site deve permitir que o usuário cadastre as informações do seu animal perdido.<br> RF-002 O site deve permitir que o usuário cadastre as informações de um animal encontrado, com imagens, e dados de localização e contacto de quem o encontrou.<br> RF-003 O site deve permitir que seja inserida uma foto do animal no seu cadastro. |
|  Objetivo do Teste |  Verificar se o usuário consegue cadastrar um animal encontrado fornecendo o e-mail para contato no campo "Seu e-mail"|
|  Passos | 1) Acessar o Navegador <br> 2) Informar o endereço do site <br>3) Visualizar a página "Encontrei, e agora?" <br>4) Preencher os campos do formulário de cadastro <br>5) Clicar no botão "Cadastrar" |
|  Critérios de Êxito |  ● O cadastro deve ser realizado após o usuário clicar no botão "Cadastrar".|

| Caso de Teste  |  CT-02 - Cadastrar um animal encontrado sem informar o e-mail para contato  |
| ------------------- | ------------------- |
|  Requisitos Associados |  RF-001 O site deve permitir que o usuário cadastre as informações do seu animal perdido.<br> RF-002 O site deve permitir que o usuário cadastre as informações de um animal encontrado, com imagens, e dados de localização e contacto de quem o encontrou.<br> RF-003 O site deve permitir que seja inserida uma foto do animal no seu cadastro. |
|  Objetivo do Teste |  Verificar se o usuário consegue cadastrar um animal encontrado sem informar seu e-mail para contato no campo "Seu e-mail" |
|  Passos | 1) Acessar o Navegador <br> 2) Informar o endereço do site <br>3) Visualizar a página "Encontrei, e agora?" <br>4) Não preencher o campo "Seu e-mail" do formulário de cadastro <br>5) Clicar no botão "Cadastrar" |
|  Critérios de Êxito |  ● O site deve exibir uma mensagem solicitando o e-mail do usuário caso essa informação não tenha sido fornecida no campo "Seu e-mail".|

<br><br>

| Caso de Teste  |  CT-01 - Cadastrar um animal perdido                                                                                      |
| ------------------- | ------------------- |
|  Requisitos Associados |  RF-001 O site deve permitir que o usuário cadastre as informações do seu animal perdido.<br> 
|  Objetivo do Teste |  Verificar se o usuário consegue cadastrar um animal perdido fornecendo suas informações.                             |
|  Passos | 1) Acessar o Navegador <br> 2) Informar o endereço do site <br>3) Visualizar a página "Perdi, e agora?" <br>4) Preencher os campos do formulário de cadastro <br>5) Clicar no botão "Cadastrar" |
|  Critérios de Êxito |  ● O cadastro deve ser realizado após o usuário clicar no botão "Cadastrar".                                         |

| Caso de Teste  |  CT-02 - Cadastrar um animal encontrado sem informar o telefone do tutor  |
| ------------------- | ------------------- |
|  Requisitos Associados |  RF-001 O site deve permitir que o usuário cadastre as informações do seu animal perdido.<br> 
|  Objetivo do Teste |  Verificar se o usuário consegue realizar o cadastro do animal perdido sem informar o telefone do tutor |
|  Passos | 1) Acessar o Navegador <br> 2) Informar o endereço do site <br>3) Visualizar a página "Perdi, e agora?" <br>4) Não preencher o campo "Telefone do tutor" do formulário de cadastro <br>5) Clicar no botão "Cadastrar" |
|  Critérios de Êxito |  ● O site deve exibir uma mensagem solicitando que o campo Telefone do tutor seja preenchido com a mensagem. "O campo precisa ser preenchido.".|


<br><br>

| Caso de Teste  |  CT-01 - Pesquisar um animal perdido  |
| ------------------- | ------------------- |
|  Requisitos Associados |  RF-004 - O site deve permitir que o usuário pesquise os animais cadastrados por suas características físicas.<br> 
|  Objetivo do Teste |  Verificar se o usuário consegue pesquisar um animal perdido fornecendo suas informações.|
|  Passos | 1) Acessar o Navegador <br> 2) Informar o endereço do site <br>3) Visualizar a página "Pesquisa" <br>4) Preencher o campo do formulário de busca <br>5) Clicar no botão "Lupa" |
|  Critérios de Êxito |  ● A Busca deve ser realizado após o usuário clicar no botão "Lupa".|

| Caso de Teste  |  CT-02 - Pesquisa de animal não cadastrado  |
| ------------------- | ------------------- |
|  Requisitos Associados |  RF-001 O site deve direcionar o usuário para página de erro e pedir que tente fazer nova busca.<br> 
|  Objetivo do Teste |  Verificar se o usuário consegue realizar a busca do animal perdido que não está cadastrado |
|  Passos | 1) Acessar o Navegador <br> 2) Informar o endereço do site <br>3) Visualizar a página "Pesquisa" <br>4) Preencher o formulário de busca com características do animal não cadastrado <br>5) Clicar no botão "Lupa" |
|  Critérios de Êxito |  ● O site deve direcionar para a pagina de erro solicitando que refaça a pesquisa.|
