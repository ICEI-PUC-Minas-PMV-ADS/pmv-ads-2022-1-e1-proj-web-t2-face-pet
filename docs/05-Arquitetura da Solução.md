# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Nesta seção são apresentados os detalhes técnicos da solução criada pela equipe, tratando dos componentes que fazem parte da solução e do ambiente de hospedagem da solução.

## Diagrama de componentes

Os componentes que fazem parte da solução são apresentados na Figura XX.

![Diagrama de Componentes](https://user-images.githubusercontent.com/100412134/164107689-128946e8-3b22-490c-b144-263daf8b04a1.jpg)
Figura XX - Arquitetura da Solução

A solução implementada conta com os seguintes módulos:
- **Navegador** - Interface básica do sistema  
  - **Páginas Web** - Conjunto de arquivos HTML, CSS, JavaScript e imagens que implementam as funcionalidades do sistema.
   - **Local Storage** - armazenamento mantido no Navegador, onde são implementados bancos de dados baseados em JSON. São eles: 
     - **Cadastro** - fotos, informações e contato do tutor;
     - **Comentários** - registro de informações que os usuários possuem a repeito do animal.
     
 - **PET API** - plataforma que permite o acesso às informações sobre animais desaparecidos.
 - **Hospedagem** - local na Internet onde as páginas são mantidas e acessadas pelo navegador. 


## Hospedagem

O site utiliza a plataforma do GitHub Pages como ambiente de hospedagem do site do projeto. O site é mantido no ambiente da URL: 

https://pages.github.com/

A publicação do site no GitHub Pages é feita por meio de uma submissão do projeto (push) via git para o repositório remoto que se encontra no endereço: 
https://pages.github.com/
