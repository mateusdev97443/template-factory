# auth/login-split
Tela de login com layout dividida (Split-Screen), focada em conversão, acessibilidade e estética.

## Estrutura
- `index.html`: Marcação semântica e acessível.
- `css/`: Sistema de variáveis para 3 temas.
- `js/`: Alternância de temas e simulação de submit.
- `assets/`: Diretório para imagens.

## Variações de Tema
Altere a classe do `<body>`:
1. `theme-corporate`: Azul escuro, radius 8px.
2. `theme-startup`: Roxo/rosa, radius 16px.
3. `theme-minimal`: Preto/branco, radius 0px.

## Como usar
1. Copie a pasta `auth-login-split`.
2. Troque o gradiente do `.visual-panel` por imagem se desejar.
3. Conecte o `#loginForm` à sua API no `main.js`.
