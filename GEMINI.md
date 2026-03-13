# 💎 Shiroma Portfolio - Contexto & Diretrizes

Este é o portfólio pessoal do **Hugo Gaio Shiroma**, um Desenvolvedor Frontend Sênior. O projeto foi concebido para ser uma experiência visual de alto nível, unindo estética refinada, performance impecável e interações fluidas.

---

## 🎨 Identidade Visual (Estética & Design)

### 1. Estética "Light Premium"
- **Fundo Principal**: Quase branco (`#fafafa`).
- **Paleta Pastel**: Vermelho Rosado (`rose-100/200`) e Azul Claro (`blue-100/200`).
- **Background Abstrato**: Mesh gradients animados (`AbstractBackground.tsx`). **MANDATÓRIO** usar `translateZ(0)` e `will-change` para manter 60fps no mobile.
- **Glassmorphism**: Uso intensivo da classe `.glass` (`backdrop-blur-md` no mobile, `xl` no desktop).

### 2. Experiência de Usuário (UX)
- **Preloader**: Bloqueio de scroll inicial com revelação da página.
- **Smooth Scroll**: Navegação "amanteigada" utilizando a lib **Lenis**.
- **Custom Cursor**: Ativado apenas em dispositivos com ponteiro (mouse). Desativado automaticamente em touch devices para performance.
- **i18n (Internacionalização)**: Sistema customizado em `src/hooks/useI18n.tsx`. Toda string deve passar pelo componente `<Trans />` ou hook `t()` para suporte a EN/PT com transição fade suave.

---

## 🛠️ Stack Tecnológica & Regras de Código

### 1. Framework & Core
- **Next.js 15+ (App Router)**: Sempre utilizar o diretório `src/app`.
- **TypeScript**: Tipagem rigorosa. Variantes do Framer Motion devem ser tipadas como `Variants`.
- **Yarn**: Gerenciador de pacotes padrão.

### 2. Engenharia de Software (Mandatório)
- **SOLID & Clean Code**: Separar lógica de UI (Hooks para lógica, Componentes para render).
- **Componentização**: Botões, seletores e cards devem ser reaproveitáveis.
- **Otimização de DOM**: Evitar sub-scrolls (`overflow` indesejado) e garantir que `html/body` tenham `max-width: 100vw`.
- **Performance Mobile**: Reduzir intensidade de blur em dispositivos móveis. Priorizar GPU acceleration via CSS.

---

## 📝 Informações do Usuário & Contato

- **Nome**: Hugo Gaio Shiroma (Nascido em 28/08/1996). **MANDATÓRIO** calcular idade dinamicamente.
- **Contato**:
    - **WhatsApp**: +5511996731201 (Integrado no `FloatingContact.tsx`).
    - **LinkedIn**: [hugo-gaio-shiroma](https://www.linkedin.com/in/hugo-gaio-shiroma-ab342215b/).
    - **Email**: hugo.shiroma@gmail.com.
- **Status**: Senior Frontend Engineer @ Méliuz.

---

## 🚀 Padrões de Entrega
- **Surgical Updates**: Manter a integridade do layout ao adicionar novas features.
- **Lighthouse**: Manter Score 90+ em Performance e Acessibilidade.
- **Comunicação**: Dialeto "paulista da quebrada", com respeito e precisão técnica.

---

*Este arquivo é a única fonte de verdade para o design e comportamento do projeto. Respeite-o.*
