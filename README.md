![controle_ponto_inteligente](https://github.com/Leandro223/ControlePontoInteligenteAngular/assets/29740781/e1f3b374-3e4c-4c48-9c9f-4784fb530a96)


Controle de Ponto de Funcionários - Front End

Este é o frontend de uma aplicação Angular que se integra com uma API com o nome de repositorio aqui no git-hub como api-controle-ponto-inteligente. 

Com esta aplicação, os funcionários podem registrar seus pontos (entrada e saída) e os administradores podem gerenciar esses registros.

Pré-requisitos
Antes de começar, certifique-se de ter instalado o seguinte:

Node.js: Certifique-se de que o Node.js está instalado em sua máquina.
Angular CLI: Você precisará do Angular CLI para executar e desenvolver este projeto.
Acesso à API: Garanta que você tenha a URL da API de controle de ponto de funcionários e que a mesma esteja funcionando.
Instalação
Clone este repositório:

Navegue até a pasta do projeto:

cd controle-ponto-inteligente
Instale as dependências do projeto:

npm install
Configuração
Abra o arquivo src/environments/environment.ts e configure a URL da API de controle de ponto de funcionários:

typescript

Copy code

export const environment =
{
  production: false,
  apiUrl: 'URL_DA_SUA_API_AQUI'
};


Verifique outras configurações no arquivo de ambiente, como variáveis de produção em src/environments/environment.prod.ts.

Execução
Após a instalação e configuração, você pode executar o projeto localmente com o comando:

ng serve
Isso iniciará o servidor de desenvolvimento. Abra seu navegador e acesse http://localhost:4200/ para visualizar a aplicação.

Como usar
Os funcionários podem se autenticar na aplicação e registrar seus pontos de entrada e saída.![ponto_inteligente2](https://github.com/Leandro223/ControlePontoInteligenteAngular/assets/29740781/db1f39e7-eefc-4098-9d64-684233e24b38)
![ponto_inteligente3](https://github.com/Leandro223/ControlePontoInteligenteAngular/assets/29740781/d2991873-7d80-4d2c-8ed3-30c8cf5b7a86)

Os administradores podem acessar funcionalidades adicionais para gerenciar os registros dos funcionários.
Contribuições
Contribuições são bem-vindas! Se você deseja contribuir para este projeto, siga estas etapas:

Crie um fork do repositório.
Faça as alterações necessárias em sua branch.
Abra um pull request com uma descrição clara das alterações propostas.
Licença
Este projeto é distribuído sob a licença MIT. Sinta-se à vontade para usá-lo como base para seu próprio projeto.
