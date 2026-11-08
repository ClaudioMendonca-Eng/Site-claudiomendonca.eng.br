# CLAUDE.md

Guia para o Claude (e para qualquer pessoa) trabalhar neste repositório.

## Visão geral

Site pessoal / portfólio de Claudio Mendonça, publicado em **https://claudiomendonca.eng.br** (domínio definido no arquivo `CNAME`, hospedagem estática via GitHub Pages).

- Sempre responder e documentar em **português do Brasil**.
- Site 100% estático: **HTML + CSS + JavaScript puro**, sem Node, sem bundler e sem etapa de build.
- Para testar localmente basta abrir `index.html` no navegador ou servir a pasta (ex.: `python3 -m http.server`).

## Estrutura

```
index.html          Página única do site (todas as seções)
assets/css/main.css Estilos próprios (prefixo de classes `cm-`)
assets/js/main.js   Tradução PT/EN + inicialização dos carrosséis (Slick)
assets/images/      Imagens dos projetos, banner e currículo em PDF
old/                Versão antiga do site (legado, não editar sem pedido)
CNAME               Domínio customizado do GitHub Pages
```

Seções do `index.html`, em ordem: header/menu (`.cm-menu`), banner (`.cm-banner`), resumo (`.cm-resume-section`), projetos (`.cm-projects-section`, carrossel), depoimentos (`.cm-testimonials-section`, carrossel), contato (`.cm-email-section`) e rodapé (`.cm-footer`).

## Bibliotecas (todas via CDN no `index.html`)

- Bootstrap 5.0.2 (CSS e JS)
- jQuery 3.5.1
- Slick Carousel 1.8.1 (projetos e depoimentos)
- Remix Icon 2.5.0
- Google Fonts: Poppins e DM Serif Display
- AOS 2.3.1: **só o CSS está carregado**; o script e o `AOS.init()` não existem ainda.

Observação: o Bootstrap JS aparece carregado mais de uma vez (bundle + popper + bootstrap.min). Dá para enxugar numa limpeza futura.

## Convenções importantes

- **Tradução PT/EN**: o botão `#translator` chama `translatorPage()` em `assets/js/main.js`, que troca o `innerHTML` de cada elemento por `id`. O HTML vem em inglês por padrão. Ao adicionar ou alterar qualquer texto visível, atualize **os dois idiomas** no `main.js` e mantenha o `id` correspondente no HTML.
- Novos projetos: adicionar o card em `.cm-projects-slider` com um `id` `projectNN`, a imagem em `assets/images/projects-N.png` e os textos PT/EN no `main.js`.
- Classes CSS próprias usam o prefixo `cm-`. Variáveis de tamanho ficam em `:root` no `main.css`.

## Planos futuros

### 1. Modernizar o layout (prioridade)

O Claudio quer deixar o visual mais moderno **antes** de aplicar animações. Fazer o redesenho primeiro e só depois a animação de scroll abaixo, já pensando nas seções novas.

### 2. Animação ao rolar a página (aguardando o novo layout)

Referência: vídeo de um portfólio com hero de título gigante e efeitos acompanhando o scroll. **Não aplicar até o Claudio pedir.**

Efeitos desejados:
- Hero com título enorme que sai de cena (parallax) enquanto a foto permanece.
- Seções "presas" (pin) na tela enquanto o conteúdo entra.
- Projetos deslizando na horizontal conforme a rolagem; imagem que cresce ao entrar.
- Títulos revelados palavra por palavra e números com contagem.

Como implementar (mantendo o site sem build, tudo via CDN):
- **GSAP + ScrollTrigger** (gratuitos) para pin, scroll horizontal e animações ligadas ao scroll.
- **Lenis** (opcional) para rolagem suave.
- Para efeitos simples de fade/slide, dá para usar o AOS que já está no `<head>`: adicionar o script e chamar `AOS.init()`.
- Respeitar `prefers-reduced-motion` e testar no celular (desativar pin/scroll horizontal em telas pequenas, se pesar).
- Se a seção de projetos virar scroll horizontal com GSAP, o carrossel Slick dela deve ser removido para não conflitar.

Esforço estimado:
- Básico (AOS, fade/slide nas seções): 1 a 2 horas.
- Parecido com o vídeo (hero parallax, projetos em scroll horizontal, textos revelados): 1 a 3 dias, incluindo responsividade e desempenho.
