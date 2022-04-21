# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Nesta seção são apresentados os detalhes técnicos desenvolvidos pela equipe, tratando dos componentes que fazem parte da solução e do ambiente de hospedagem da mesma.

## Diagrama de componentes

Os componentes que fazem parte da solução são apresentados na Figura 04.

<p align="center">
<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t2-face-pet/blob/5bf1bb97a740c08d3f652daf2da0bb1ea038124d/docs/img/WhatsApp%20Image%202022-04-21%20at%2021.44.19.jpeg")
 </p>

<p align="center"> Figura 04 - Arquitetura da Solução. </p>

A solução implementada conta com os seguintes módulos:
- **Navegador** - Interface básica do sistema, janela para navegar na página.  
  - **Páginas Web** - Conjunto de arquivos HTML, CSS, JavaScript e imagens que implementam as funcionalidades do sistema, compondo seu esqueleto e toda interatividade da página.
   - **Local Storage** - armazenamento mantido no Navegador, onde são implementados bancos de dados baseados em JSON. São eles: 
     - **Cadastro** - fotos, informações e contato do tutor;
     - **Comentários** - registro de informações que os usuários possuem a repeito do animal.
     - **Contatos** - Permissões para que usuários possam contactar uns aos outros em caso de solucionar a questão postada.
     
 - **API** - plataformas que permitam o envio de e-mails e mensagens para o dono.
 - **Hospedagem** - local na Internet onde as páginas são mantidas e acessadas pelo navegador. 


## Hospedagem

O site utiliza a plataforma do GitHub Pages como ambiente de hospedagem do site do projeto. O site é mantido no ambiente da URL: 

https://pages.github.com/

A publicação do site no GitHub Pages é feita por meio de uma submissão do projeto (push) via git para o repositório remoto que se encontra no endereço: 
https://pages.github.com/
