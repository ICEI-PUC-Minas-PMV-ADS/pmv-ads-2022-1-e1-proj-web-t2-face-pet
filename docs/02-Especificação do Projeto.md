# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

A definição exata do problema e os pontos mais relevantes a serem tratados neste projeto foi consolidada na forma de personas e histórias de usuários.

## Personas

<p align="left">
<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t2-face-pet/blob/d188c043623504164283c3de7ff1ce9cd599edef/docs/img/persona.Aline.Alves.png")
 </p>
  
 <p align="left">
<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t2-face-pet/blob/d188c043623504164283c3de7ff1ce9cd599edef/docs/img/persona.Andre%CC%81.Gomes.png")
 </p> 
   
<p align="left">
<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t2-face-pet/blob/d188c043623504164283c3de7ff1ce9cd599edef/docs/img/persona.Alice.paes.png")
 </p> 
 
 <p align="left">
<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t2-face-pet/blob/d188c043623504164283c3de7ff1ce9cd599edef/docs/img/persona.Paula.goncalves.png")
 </p> 

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

## Requisitos

O escopo funcional do projeto é definido por meio dos requisitos funcionais que descrevem as possibilidades interação dos usuários, bem como os requisitos não funcionais que descrevem os aspectos que o sistema deverá apresentar de maneira geral. Estes requisitos são apresentados a seguir.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O site deve permitir que o usuário cadastre as informações do seu animal perdido.  | ALTA | 
|RF-002| O site deve permitir que o usuário cadastre as informações de um animal encontrado, com imagens, e dados de localização e contacto de quem o encontrou.  | ALTA |
|RF-003| O site deve permitir que seja inserida uma foto do animal no seu cadastro.  | ALTA |
|RF-004| O site deve permitir que o usuário pesquise os animais cadastrados por suas características físicas.   | MÉDIA | 
|RF-005| O site deve permitir que o usuário pesquise os animais cadastrados pela data que foi encontrado.  | MÉDIA |
|RF-006| O site deve permitir que o usuário pesquise os animais cadastrados pela data que foi perdido.   | MÉDIA | 
|RF-007| O site deve permitir que o usuário pesquise os animais cadastrados pelo bairro ou região que foi localizado.   | MÉDIA |
|RF-008| O site deve permitir que o usuário pesquise os animais cadastrados pelo bairro que foi visto pela última vez.   | MÉDIA | 
|RF-009| O site deve permitir que o usuário compartilhe as informações dos animais em plataformas de redes sociais  | BAIXA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O site deve ser publicado em um ambiente acessível publicamente na Internet (Repl.it, GitHub Pages, Heroku); | ALTA | 
|RNF-002| O site deverá ser responsivo permitindo a visualização em um celular de forma adequada |  ALTA | 
|RNF-003| O site deve ter bom nível de contraste entre os elementos da tela em conformidade   | MÉDIA | 
|RNF-004| O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge)  |  ALTA | 

## Restrições

As questões que limitam a execução desse projeto e que se configuram como obrigações claras para o desenvolvimento do projeto em questão são apresentadas na tabela a seguir. 

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 14/07/2022.  |
|02| O aplicativo deve se restringir às tecnologias básicas da Web no Frontend       |
|02| A equipe não pode subcontratar o desenvolvimento do trabalho.      |
