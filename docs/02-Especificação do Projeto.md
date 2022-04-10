# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

A definição exata do problema e os pontos mais relevantes a serem tratados neste projeto foi consolidada na forma de personas e histórias de usuários.

## Personas

Aline Alves tem 41 anos, é Chefe da Divisão de Vigilância de Zoonoses do Município. Motivada á reduzir a população de animais de rua e controle de doenças e agravos transmitidas por animais. Sente dificuldade de localizar o dono de um animal perdido e controlar a população de animais de rua.

André Gomes tem 41 anos, é Advogado Ambientalista e possui um animal de estimação. Em caso de desparecimento, gostaria de localizar com facilidade seu animal de estimação, receio da dificuldade em recuperar animais desaparecidos. Gosta de pratica atividades ao ar livre com regularidade.

Alice Paes tem 33 anos, é bióloga e presidente de uma ONG de resgate de animais. Deseja encontrar com mais facilidade os donos dos animais, diminuir a ocupação dos canis da ONG, e reduzir a população de animais de rua. Sente a dificuldade de localizar o dono de um animal perdido, animais que já possuem dono ocupando lugar nos canis da ONG, pois não encontra um canal onde posso agrupar estas informações. Atua como pesquisadora em uma universidade, ativista na proteção de animais e realiza trabalhos voluntários em ONGs;

Paula Gonçalves tem 28 anos e trabalha como professora em sua cidade. Sonha em localizar seu animalzinho perdido, pois tem dificuldades deencontrar um canal onde deixar as informações de contato. Atua como educadora infantil, ensina teatro para crianças concietizando sobre o bem estar animal e sempre que possivel oferece lar temporário para animais resgatados. 

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|André Gomes     | Verificar se algum animal cadastrado corresponde ao meu animal que estou procurando.     | Para saber se já encontraram o meu animal.              |
|André Gomes     | Cadastrar animal perdido com suas características.   | Para que seja possível ser visualizado por quem possa encontrar.  |
|André Gomes     | Inserir foto do animalzinho no anúncio.  | Para que seja possível identificar o animal com mais facilidade. |
|André Gomes     | Compartilhar o cadastro que realizou do seu animalzinho.   | Para aumentar o alcance do anúncio cadastrado e chegar para mais gente. |
|Aline Alves     | AEncontrar informações de donos de animais perdidos com mais facilidade.  | PDiminuiria a quantidade de animais que estão abrigados nos canis da ONG aguardando adoção, mas já possuem dono. |
|Alice Paes      | Procurar se o animal que viu próximo a sua casa está cadastrado como um animal perdido   | Porque viu esse animal perdido próximo a sua casa e está preocupada com sua segurança.  |
|Alice Paes      | Cadastrar o animal que localizou, informando em qual bairro e localização aproximada que estava nesse momento.   | Porque com essa localização aproximada possibilita que quem está à procura do animal, possa buscar considerando a última vez que o viu. |
|Paula Gonçalves | Procurar se encontraram um animalzinho em uma data próxima ao que seu animal fugiu . | Para que com a quantidade de anúncios diminua para os que a Paula realmente precisa ver, que são os que a data coincide com o sumiço do seu animalzinho.  |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

O escopo funcional do projeto é definido por meio dos requisitos funcionais que descrevem as possibilidades interação dos usuários, bem como os requisitos não funcionais que descrevem os aspectos que o sistema deverá apresentar de maneira geral. Estes requisitos são apresentados a seguir.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O site deve permitir que o usuário cadastre as informações do seu animal perdido.  | ALTA | 
|RF-002| O site deve permitir que seja inserida uma foto do animal no seu cadastro.  | ALTA |
|RF-003| O site deve permitir que o usuário pesquise os animais cadastrados por suas características físicas.   | MÉDIA | 
|RF-004| O site deve permitir que o usuário pesquise os animais cadastrados pela data que foi encontrado.  | MÉDIA |
|RF-005| O site deve permitir que o usuário pesquise os animais cadastrados pela data que foi perdido.   | MÉDIA | 
|RF-006| O site deve permitir que o usuário pesquise os animais cadastrados pelo bairro ou região que foi localizado.   | MÉDIA |
|RF-007| O site deve permitir que o usuário pesquise os animais cadastrados pelo bairro que foi visto pela última vez.   | MÉDIA | 
|RF-008| O site deve permitir que o usuário compartilhe as informações dos animais em plataformas de redes sociais  | BAIXA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O site deve ser publicado em um ambiente acessível publicamente na Internet (Repl.it, GitHub Pages, Heroku); | ALTA | 
|RNF-002| O site deverá ser responsivo permitindo a visualização em um celular de forma adequada |  ALTA | 
|RNF-003| O site deve ter bom nível de contraste entre os elementos da tela em conformidade   | MÉDIA | 
|RNF-004| O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge)  |  ALTA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

As questões que limitam a execução desse projeto e que se configuram como obrigações claras para o desenvolvimento do projeto em questão são apresentadas na tabela a seguir. 

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 15/05/2022.  |
|02| O aplicativo deve se restringir às tecnologias básicas da Web no Frontend       |
|02| A equipe não pode subcontratar o desenvolvimento do trabalho.      |
