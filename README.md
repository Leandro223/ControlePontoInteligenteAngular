![ponto_inteigente1(1)](https://github.com/Leandro223/api-controle-ponto-inteligente/assets/29740781/3df77628-77c5-487c-8be7-9d59e14ca868)



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
Os funcionários podem se autenticar na aplicação e registrar seus pontos de entrada e saída.

![2 (1)](https://github.com/Leandro223/api-controle-ponto-inteligente/assets/29740781/93fdfc22-1d6d-4574-86b7-df4b02a470d4)


![3](https://github.com/Leandro223/api-controle-ponto-inteligente/assets/29740781/01f924f5-0bc6-4f24-b445-8ca45ce17a5d)


Os administradores podem acessar funcionalidades adicionais para gerenciar os registros dos funcionários.
Contribuições
Contribuições são bem-vindas! Se você deseja contribuir para este projeto, siga estas etapas:

Crie um fork do repositório.
Faça as alterações necessárias em sua branch.
Abra um pull request com uma descrição clara das alterações propostas.
Licença
Este projeto é distribuído sob a licença MIT. Sinta-se à vontade para usá-lo como base para seu próprio projeto.
