# CLAUDE.md

Guia para o Claude (e para qualquer pessoa) trabalhar neste repositório.

## Visão geral

Site pessoal / portfólio de Claudio Mendonça, publicado em **https://claudiomendonca.eng.br** (domínio definido no arquivo `CNAME`, hospedagem estática via GitHub Pages).

- Sempre responder e documentar em **português do Brasil**.
- Site 100% estático: **HTML + CSS + JavaScript puro**, sem Node, sem bundler e sem etapa de build. Bibliotecas só via CDN.
- Para testar localmente basta abrir `index.html` no navegador ou servir a pasta (ex.: `python3 -m http.server`).

## Estrutura

```
index.html          Página única do site (versão 2, redesign de 2026)
assets/css/main.css Estilos próprios (prefixo de classes `cm-`, variáveis em `:root`)
assets/js/main.js   Tradução PT/EN + animações de scroll (GSAP, ScrollTrigger, Lenis)
assets/images/      Imagens dos projetos, foto do banner e currículo em PDF (compartilhadas com a v1)
v1/                 Versão anterior do site, congelada em 08/11/2026 (acessível em /v1/)
old/                Versão bem antiga do site (legado, não editar sem pedido)
CNAME               Domínio customizado do GitHub Pages
```

A versão anterior também está salva na branch `legado/v1-2026-11-08`.

Seções do `index.html`, em ordem: header (`.cm-header`, menu + botão de idioma), hero (`.cm-hero`), sobre (`.cm-about`, com números e faixa de tecnologias), projetos (`.cm-projects`), depoimentos (`.cm-testimonials`), contato (`.cm-contact`) e rodapé (`.cm-footer`).

## Bibliotecas (todas via CDN no `index.html`, sem build)

- GSAP 3.15 + ScrollTrigger (animações ligadas ao scroll)
- Lenis 1.3 (rolagem suave; opcional, o site funciona sem ele)
- Remix Icon 4.6
- Google Fonts: Space Grotesk (títulos), Inter (texto) e JetBrains Mono (detalhes)

A v2 não usa mais Bootstrap, jQuery nem Slick (continuam só na `v1/`).

## Convenções importantes

- **Tradução PT/EN**: todo texto visível traduzível tem `data-i18n="chave"`. O texto em **inglês fica no próprio HTML** (é lido ao carregar a página) e o texto em **português fica no objeto `PT`** em `assets/js/main.js`. Ao adicionar ou alterar texto, mexa nos dois. O idioma inicial vem do `localStorage` ou do idioma do navegador; o botão `#translator` alterna.
- **Novos projetos**: copiar um `<article class="cm-card">` dentro de `.cm-projects__track`, imagem em `assets/images/projects-N.png` (retrato, ~375x500), chaves `pNNTitle`/`pNNDesc` no HTML (EN) e no objeto `PT`. Atualizar o número em `data-count` do primeiro contador, se quiser.
- Classes CSS próprias usam o prefixo `cm-`.

## Animações (já aplicadas na v2)

Tudo em `setupAnimations()` no `main.js`, dentro de `gsap.matchMedia()`:

- Hero: título gigante entra letra por linha e sai de cena (parallax) enquanto a foto fica; no desktop a seção fica presa (pin).
- Sobre: seção presa enquanto o parágrafo acende palavra por palavra; números com contagem.
- Projetos: no desktop (largura >= 992px e altura >= 620px) a seção fica presa e os cards deslizam na horizontal (classe `.cm-h-scroll` adicionada pelo JS); cada card e sua imagem crescem ao entrar. No celular/tablet vira grade vertical com fade.
- Títulos com `data-split` são revelados palavra por palavra.
- Depoimentos e contato: entrada com fade/slide.
- **Cursores "multiplayer"** (estilo Figma, como no vídeo de referência), só no desktop: `swarm()` faz vários cursores coloridos voarem até um elemento, "trabalharem" e saírem (hero, sobre, cada card de projeto, contato); `assemble()` faz cada cursor pegar um elemento solto e arrastá-lo até o lugar (números e depoimentos). Os cursores ficam numa `.cm-cursor-layer` criada dentro da seção e são removidos ao terminar. Depois de trocar o idioma eles não se repetem (`cursorsOn`).
- `prefers-reduced-motion` desliga tudo; sem JS ou sem CDN o conteúdo aparece normalmente (os estados iniciais dependem da classe `js-anim`, removida em até 4 s).
- Ao trocar o idioma, `rebuildAnimations()` refaz as divisões em palavras e os gatilhos.

Para testar localmente: `python3 -m http.server` e abrir `http://localhost:8000`.
