# Plano de Testes de Software

Os requisitos para realização dos testes de software são:
-	Site publicado na Internet;
-	Navegador da Internet - Chrome, Firefox ou Edge;
-	Conectividade de Internet.

Os testes funcionais a serem realizados no aplicativo são descritos a seguir.

| Caso de Teste  |  CT-01 - Cadastrar um animal encontrado  |
| ------------------- | ------------------- |
|  Requisitos Associados |  RF-001 O site deve permitir que o usuário cadastre as informações do seu animal perdido.<br> RF-002 O site deve permitir que o usuário cadastre as informações de um animal encontrado, com imagens, e dados de localização e contacto de quem o encontrou.<br> RF-003 O site deve permitir que seja inserida uma foto do animal no seu cadastro. |
|  Objetivo do Teste |  Verificar se o usuário consegue cadastrar um animal encontrado |
|  Passos | 1) Acessar o Navegador <br> 2) Informar o endereço do site <br>3) Visualizar a página "Encontrei, e agora?" <br>4) Preencher os campos do formulário de cadastro <br>5) Clicar no botão "Cadastrar" |
|  Critérios de Êxito |  ● O cadastro deve ser realizado após o usuário clicar no botão "Cadastrar";<br> ● O campo "Seu e-mail" deve ser obrigatoriamente preenchido.|

| Caso de Teste  |  CT-02 - Cadastrar um animal encontrado sem informar o e-mail para contato  |
| ------------------- | ------------------- |
|  Requisitos Associados |  RF-001 O site deve permitir que o usuário cadastre as informações do seu animal perdido.<br> RF-002 O site deve permitir que o usuário cadastre as informações de um animal encontrado, com imagens, e dados de localização e contacto de quem o encontrou.<br> RF-003 O site deve permitir que seja inserida uma foto do animal no seu cadastro. |
|  Objetivo do Teste |  Verificar se o usuário consegue cadastrar um animal encontrado sem informar seu e-mail para contato no campo "Seu e-mail" |
|  Passos | 1) Acessar o Navegador <br> 2) Informar o endereço do site <br>3) Visualizar a página "Encontrei, e agora?" <br>4) Não preencher o campo "Seu e-mail" do formulário de cadastro <br>5) Clicar no botão "Cadastrar" |
|  Critérios de Êxito |  ● O cadastro deve ser realizado após o usuário clicar no botão "Cadastrar";<br> ● O campo "Seu e-mail" deve ser obrigatoriamente preenchido.|
