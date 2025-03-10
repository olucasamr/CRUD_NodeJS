# CRUD com Node JS

### Tecnologias e ferramentas utilizadas:
- Javascript
- Node JS
- Express JS
- MySQL
<hr>
<div>
  Olá, pessoas! Este é um projeto simples de CRUD (Create, Read, Update e Delete). Ele cria um back-end com suas rotas para manipulação de um banco de dados utilizando a biblioteca MySQL2 do Node JS.

  ### Configurações:
  1- Todas as dependências estão listadas no arquivo package.json. Dessa forma, basta usar o comando para instala-las com base no gerenciador de pacotes da sua escolha. Caso use o NPM (Meu caso) basta rodar o comando:
  ``` 
  npm install
```
2- O código, até este momento, não apresenta uma interface com formulários e roteamento que possibilitem a manipulação dinâmica do banco de dados. Dessa forma, será necessário uma alternativa para que consiga enviar os parâmetros utilizando os métodos corretos em cada rota

Particulamente, essse código foi testado com a extensão do VSCode Thunder Client. Só essa extensão é mais do que sulficiente para rodar o projeto, porém sinta-se a vontade para escolher outra alternativa. 

3- Além das dependencias já citadas, esse projeto utiliza o dotenv para maior segurança dos dados, dessa forma é necessário que você configure algo como esta exemplificado a seguir:
```

DB_HOST= Your hostname
DB_NAME= Your database name
DB_USER= Your user from database
DB_PASSWORD= Password of your database
PORT= 3000 
TABLE_NAME= Name from table created in your database
```
Esse arquivo está exemplificado no código como "exemple_env.txt", no projeto seu nome seria ".env" ele é quem fornece os dados para a conexão com o MySQL no arquivo database.js. 
Assim, basta instalar a dependência e importar esse arquivo para cada pasta que use a conexão com o banco

4 - Por fim, vale lembrar que é necessário ter umm database e uma table ja criados no banco de dados com os mesmos nomes que estão no arquivo .env para que o projeto funcione corretamente

Sinta-se a vontade para criar projetos a partir desse com base em sua licença
<div>
    <a href="https://www.linkedin.com/in/olucasamr/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-  badge&logo=linkedin&logoColor=white"></a> 
</div>
</div>