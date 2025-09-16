# **ChristQuiz ✝️**

Este é um aplicativo de quiz com tema bíblico, desenvolvido com React Native e Expo. O objetivo do projeto é testar os conhecimentos do usuário sobre diversas passagens e personagens da Bíblia de uma forma interativa e divertida.

## **🚀 Funcionalidades**

* **Quiz de Múltipla Escolha:** Interface simples e intuitiva para responder às perguntas.  
* **Seleção Aleatória:** A cada nova partida, um dos três questionários disponíveis é selecionado aleatoriamente, garantindo uma experiência diferente.  
* **Feedback Instantâneo:** O usuário recebe feedback visual imediato para respostas corretas (verde) e incorretas (vermelho).  
* **Feedback Tátil:** Uma vibração é acionada quando o usuário seleciona uma resposta incorreta.  
* **Tela de Resultados:** Ao final do quiz, uma tela exibe a pontuação total, mostrando quantas perguntas foram acertadas.  
* **Rejogabilidade:** Após ver o resultado, o usuário pode optar por "Jogar Novamente" (iniciando um novo quiz aleatório) ou "Voltar para Home".

## **🛠️ Tecnologias Utilizadas**

* **React Native:** Framework para desenvolvimento de aplicativos móveis multiplataforma.  
* **Expo:** Plataforma e conjunto de ferramentas para facilitar o desenvolvimento e a publicação de aplicativos React Native.  
* **TypeScript:** Superset do JavaScript que adiciona tipagem estática ao código, aumentando a robustez e a manutenibilidade.  
* **Expo Router:** Para gerenciar a navegação entre as telas do aplicativo.

## **📁 Estrutura do Projeto**

O projeto está organizado da seguinte maneira:

/  
├── app/  
│   ├── \_layout.tsx      \# Layout principal da navegação  
│   └── index.tsx        \# Lógica central do app, gerenciando os estados e as telas  
│  
├── assets/              \# Contém fontes e imagens  
│  
├── components/  
│   ├── HomeScreen.tsx     \# Tela inicial com o botão "Começar"  
│   ├── QuizScreen.tsx     \# Tela onde as perguntas e opções são exibidas  
│   └── ResultScreen.tsx   \# Tela que mostra o resultado final do quiz  
│  
└── questions.json       \# Arquivo com os dados dos quizzes (perguntas, opções e respostas)

## **⚙️ Como Executar**

Para rodar este projeto localmente, siga os passos abaixo:

1. **Clone o repositório:**  
   git clone \<URL\_DO\_SEU\_REPOSITORIO\>

2. **Acesse o diretório do projeto:**  
   cd quiz

3. **Instale as dependências:**  
   npm install

4. **Inicie o servidor de desenvolvimento do Expo:**  
   npx expo start

5. **Execute em um dispositivo:**  
   * Instale o aplicativo **Expo Go** em seu celular (iOS ou Android).  
   * Escaneie o QR Code exibido no terminal para abrir o aplicativo no seu dispositivo.

*Desenvolvido com ❤️ por Pedro Vitor.*
