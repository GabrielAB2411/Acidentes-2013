<h1 align="center"> 
<br>
    <img src="./Assets/Title.PNG" width="270">
<br>
<br>
Dashboard de acidentes rodoviários de 2013
</h1>

<hr />

## :information_source: Sobre

<br>

A aplicação tem como função principal, consumir e renderizar os dados extraídos de uma base de dados do Governo do Brasil a respeito dos acidentes rodoviários ocorridos ao longo do ano de 2013 em todo o território nacional, exibir um gráfico com taxas de mortalidade e uma tabela com todos esses dados.

<br>

Como a os dados em questão eram muito extensos e causariam impactos severos no carregamento da página, recursos de paginação e otimização dentro da API foram implementados. Por fim, ao final da tela, há um player do vídeo de apresentação do dashboard e um as redes sociais dos desenvolvedores que contribuiram com o presente projeto.

<br>

<hr />

## :page_with_curl: Tutorial

<br>

Lista de dependências para executar o projeto:

    Client:
    - React 18
    - Vite
    - Tailwind CSS
    - AOS
    - React-Query
    - Axios 
    - Apex Charts
    - Data table component
    - React-Player
    - React-Spinners

    Server:
    - .Net 6
    - Entity Framework Core
    - SQL Server

OBS: É necessário fazer a importação da base de dados do arquivo "datatran2013.csv" de dados dentro do seu banco de dados, e em seguida executar os scripts encontrado no arquivo "cria_banco.txt" e "normaliza_banco.txt" para que os dados possam ser acessados e consumidos propriamente.

<br>

<hr />

## :city_sunset: Preview

<br>

<div align="center">
    <img src="./Assets/Preview.gif" width="570" height="230">
</div>

<br>

<hr />

## :rocket: Tecnologias 

Projeto desenvolvido com as seguintes tecnologias:

- :heavy_check_mark: React JS 
- :heavy_check_mark: Axios
- :heavy_check_mark: Tailwind CSS
- :heavy_check_mark: React-Query
- :heavy_check_mark: .Net Core
- :heavy_check_mark: Entity Framework
- :heavy_check_mark: Sql Server