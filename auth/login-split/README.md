# auth/login-split

Tela de login com layout dividido (Split-Screen), focada em conversão, acessibilidade e estética.

---

## Estrutura

- **index.html**
  - Marcação semântica (`main`, `section`, `form`) e acessível (`labels`, `aria`).

- **css/**
  - Estilos e sistema de variáveis para **3 temas distintos**.

- **js/**
  - Lógica de alternância de temas e simulação de submit.

- **assets/**
  - Diretório para imagens de fundo ou logotipos.

---

## Variações de Tema (CSS Variables)

Para aplicar um tema manualmente, altere a classe do `<body>` no HTML.

### theme-corporate

- Azul escuro
- Visual sóbrio
- Radius: **8px**

### theme-startup

- Roxo e rosa
- Bordas arredondadas
- Radius: **16px**

### theme-minimal

- Preto e branco
- Alto contraste
- Radius: **0px**

---

## Como usar

1. Copie a pasta `auth/login-split` para o seu projeto.

2. Substitua o gradiente do `.visual-panel` por uma imagem:

```css
background: url('../assets/img/seu-bg.jpg') center/cover;
```

3. Conecte o formulário (`#loginForm`) à sua API de autenticação no `main.js`.
