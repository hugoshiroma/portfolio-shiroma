# 💎 Shiroma Portfolio - Contexto & Diretrizes

Este é o portfólio pessoal do **Hugo Gaio Shiroma**, um Desenvolvedor Frontend Sênior. O projeto foi concebido para ser uma experiência visual de alto nível (nível Awwwards), unindo estética refinada, performance impecável e interações fluidas.

---

## 🎨 Identidade Visual (Estética & Design)

### 1. Estética "Light Premium"
- **Fundo Principal**: Quase branco (`#fafafa`).
- **Paleta Pastel**: Vermelho Rosado (`rose-100/200`) e Azul Claro (`blue-100/200`).
- **Background Abstrato**: Mesh gradients animados (esferas borradas de azul e rosa que flutuam sutilmente).
- **Glassmorphism**: Uso intensivo da classe `.glass` (`backdrop-blur-xl`, `bg-white/40`, bordas sutis) em banners, cards e menus.

### 2. Experiência de Usuário (UX)
- **Preloader**: Bloqueio de scroll inicial com contador de 0-100% e animação de "reveal" da página.
- **Smooth Scroll**: Navegação "amanteigada" utilizando a lib **Lenis**.
- **Custom Cursor**: Um círculo sutil que interage (escala e inverte cor) com elementos clicáveis.
- **Micro-interações**: Animações de entrada escalonadas (stagger) usando **Framer Motion**.

---

## 🛠️ Stack Tecnológica & Regras de Código

### 1. Framework & Core
- **Next.js 15+ (App Router)**: Sempre utilizar o diretório `src/app`.
- **TypeScript**: Tipagem rigorosa em todos os componentes e utilitários.
- **Yarn**: Gerenciador de pacotes padrão.

### 2. Estilização (Tailwind CSS v4)
- **Zero Config**: O projeto utiliza **Tailwind v4**. As configurações de tema estão no `src/app/globals.css` usando `@theme`.
- **Importante**: No v4, variações como `selection:` no `@apply` dentro do CSS podem causar erros. Prefira usar classes utilitárias diretamente nos componentes.
- **Utilitário `cn`**: Sempre utilizar `src/lib/utils.ts` (`clsx` + `tailwind-merge`) para gerenciar classes dinâmicas.

### 3. Animações
- **Framer Motion**: Padrão para transições e estados de animação.
- **Lenis**: Padrão para scroll suave. Nunca remover o wrapper `SmoothScroll.tsx`.

---

## 📝 Informações Relevantes do Usuário

- **Nome**: Hugo Gaio Shiroma (29 anos - Nasci em 28/08/1996).
- **Idade**: **MANDATÓRIO** calcular dinamicamente em código para evitar manutenção manual.
- **Status**: Solteiro, mora com a namorada, 2 gatos, 2 cachorros, cuida de plantas e projetos de dev.
- **Trajetória (Timeline)**:
    - 14 anos: Menor Aprendiz @ AOC (2 anos).
    - Estágio: Zellar (Startup incubada GTP) -> Efetivado.
    - Júnior: Acesso Soluções de Pagamentos.
    - Sênior (Hoje): Méliuz.

---

## 🚀 Padrões de Entrega
- **Surgical Updates**: Não refatorar o que já funciona se não for solicitado.
- **Performance**: Manter o Lighthouse acima de 90 em acessibilidade e performance.
- **Dialeto**: Manter a comunicação no dialeto "paulista da quebrada", com respeito e objetividade técnica.

---

*Este arquivo é a única fonte de verdade para o design e comportamento do projeto. Respeite-o.*
