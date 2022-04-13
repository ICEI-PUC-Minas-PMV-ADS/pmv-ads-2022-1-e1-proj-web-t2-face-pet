
# Metodologia

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Documentação de Especificação</a></span>

A metodologia contempla as definições de ferramental utilizado pela equipe tanto para a manutenção dos códigos e demais artefatos quanto para a organização do time na execução das tarefas do projeto.

## Relação de Ambientes de Trabalho
Os artefatos do projeto são desenvolvidos a partir de diversas plataformas e a relação dos ambientes com seu respectivo propósito é apresentada na tabela que se segue.

| Ambiente  |  Plataforma  | Links Úteis |
| ------------------- | ------------------- | ----------- |
|  Repositório de código fonte        |  GitHub | https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t2-face-pet/src/    |
|  Documentos do projeto              |  GitHub | https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t2-face-pet/docs/    |
|  Projeto de Interface e  Wireframes |  GitHub | https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t2-face-pet/docs/    |
|  Gerenciamento do Projeto           |  GitHub | https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t2-face-pet/projects/2    |

## Gestão de código fonte
Para gestão do código fonte do software desenvolvido pela equipe, o grupo utiliza um processo baseado no Git Flow mostrado na Figura 01. Desta forma, todas as manutenções no código são realizadas em branches separados, identificados como Develop e Feature. Uma explicação rápida sobre este processo é apresentada no vídeo [The gitflow workflow - in less than 5 mins](https://www.youtube.com/watch?v=1SXpE08hvGs).

<p align="center">
<img src="https://user-images.githubusercontent.com/100412134/163283172-1eb71591-dfd2-4222-835c-e9c2ef7df0ed.png")
 </p>

<p align="center"> Figura 01 - Fluxo de controle do código fonte no repositório git </p>

### Controle de Versão

A ferramenta de controle de versão adotada no projeto foi o
[Git](https://git-scm.com/), sendo que o [Github](https://github.com)
foi utilizado para hospedagem do repositório.

O projeto segue a seguinte convenção para o nome de branches:

- `main`: versão estável já testada do software
- `unstable`: versão já testada do software, porém instável
- `testing`: versão em testes do software
- `dev`: versão de desenvolvimento do software

Quanto à gerência de issues, o projeto adota a seguinte convenção para
etiquetas:

- `documentation`: melhorias ou acréscimos à documentação
- `bug`: uma funcionalidade encontra-se com problemas
- `enhancement`: uma funcionalidade precisa ser melhorada
- `feature`: uma nova funcionalidade precisa ser introduzida

## Gerenciamento de Projeto
A equipe utiliza metodologias ágeis, tendo escolhido o Scrum como base para definição do processo de desenvolvimento.
### Divisão de Papéis

A equipe está organizada da seguinte maneira:
-	Scrum Master: Nome
-	Product Owner: Nome
-	Equipe de Desenvolvimento: Nome
- Equipe de Design: Nome

Para organização e distribuição das tarefas do projeto, a equipe está utilizando o Github estruturado com as seguintes listas: 

- **Recursos**: esta lista mantém template de tarefas recorrentes com as configurações padronizadas que todos devem seguir. O objetivo é permitir a cópia destes templates para agilizar a criação de novos cartões.
-	**Backlog**: recebe as tarefas a serem trabalhadas e representa o Product Backlog. Todas as atividades identificadas no decorrer do projeto também devem ser incorporadas a esta lista.
-	**To Do**: Esta lista representa o Sprint Backlog. Este é o Sprint atual que estamos trabalhando.
-	**Doing**: Quando uma tarefa tiver sido iniciada, ela é movida para cá.
-	**Test**: Checagem de Qualidade. Quando as tarefas são concluídas, eles são movidas para o “CQ”. No final da semana, eu revejo essa lista para garantir que tudo saiu perfeito.
-	**Done**: nesta lista são colocadas as tarefas que passaram pelos testes e controle de qualidade e estão prontos para ser entregues ao usuário. Não há mais edições ou revisões necessárias, ele está agendado e pronto para a ação.
-	**Locked**: Quando alguma coisa impede a conclusão da tarefa, ela é movida para esta lista juntamente com um comentário sobre o que está travando a tarefa.


O quadro kanban do grupo no Trello está disponível através da URL [Quadro Kanban - Pet Face](https://trello.com/b/VnMxBtsf/pet-face) e é apresentado, no estado atual, na Figura X. 

<p align="center">
<img src="https://user-images.githubusercontent.com/101607336/162626162-5edac5ff-6342-4670-88ec-aa13dd695bff.png")
 </p>
<p align="center"> Figura X - Tela do kanban utilizada pelo grupo </p>

A tarefas são, ainda, etiquetadas em função da natureza da atividade e seguem o seguinte esquema de cores/categorias:
-	Documentação
-	Desenvolvimento 
-	Infraestrutura
-	Testes
-	Gerência de Projetos.
