# Chatbot Blip Integration

Este projeto foi desenvolvido para integrar com a API do chatbot da Blip, utilizando **React**, **Next.js**, **TypeScript** e **TailwindCSS**. A principal motivação do projeto foi explorar o funcionamento da API da Blip e aprender a manipulá-la para receber e enviar dados.

## Desafios e Aprendizado

Durante o desenvolvimento, encontrei dificuldades no entendimento inicial da API da Blip e seu funcionamento. Através de tentativas e erros, fui descobrindo como realizar as requisições corretamente e como lidar com as respostas. Documentar as respostas das requisições foi essencial para melhorar a compreensão e o desenvolvimento da integração.

Ainda pretendo voltar ao projeto para:

- **Melhorar o layout**: aprimorando a interface de usuário.
- **Melhorar a integração com a API**: possivelmente criando um webhook para lidar melhor com eventos em tempo real.
- **Implementar testes**: para garantir a qualidade e a estabilidade da aplicação.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Next.js**: Framework React com suporte a rotas dinâmicas e renderização no servidor (SSR).
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **TailwindCSS**: Framework de utilitários para estilização de interfaces.

## Requisitos

- **Node.js** versão 14 ou superior.
- **Yarn** como gerenciador de pacotes.

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/nome-do-projeto.git
   cd blip-chatbot
   ```

2. Instale as dependências:
   ```bash
   yarn install
   ```

3. Configure as variáveis de ambiente. Baseie-se no arquivo .env.example e crie um arquivo .env com as configurações adequadas:
   ```bash
   cp .env.example .env
   ```

4. Realize o build do projeto:
   ```bash
   yarn build
   ```

5. Execute o projeto em modo de produção:
   ```bash
   yarn start
   ```

6. Para rodar o projeto em modo de desenvolvimento:
   ```bash
   yarn dev
   ```


## Próximos Passos
- Melhorias no layout da interface com foco em usabilidade e design responsivo.
- Integração de um webhook para melhorar a recepção de eventos em tempo real da API da Blip.
- Implementação de testes para garantir a qualidade do código e a integridade da aplicação.

