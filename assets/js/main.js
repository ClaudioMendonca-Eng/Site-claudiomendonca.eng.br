/*
  Claudio Mendonça · Portfólio v2
  1. Tradução PT/EN
  2. Header, barra de progresso e menu ativo
  3. Animações (GSAP + ScrollTrigger + Lenis)

  Tradução: o texto em INGLÊS fica no próprio index.html (é lido na carga da página).
  O texto em PORTUGUÊS fica no objeto PT abaixo. Todo elemento traduzível tem
  data-i18n="chave" no HTML e a mesma chave aqui.
*/
(function () {
	'use strict';

	/* ------------------------------------------------------------------
	   1. Tradução PT/EN
	------------------------------------------------------------------ */
	var PT = {
		pageTitle: 'Claudio Mendonça · Engenheiro de Software',
		skip: 'Pular para o conteúdo',
		navAbout: 'Sobre',
		navProjects: 'Projetos',
		navTestimonials: 'Depoimentos',
		navContact: 'Contato',
		role: 'Engenheiro de Software · Back-end &amp; Cibersegurança',
		banner: 'Sou desenvolvedor de software, transformando seu brainstorming em realidade digital.',
		scroll: 'Role',

		labelAbout: 'Sobre',
		phraseresume: 'Dedicado a melhorar suas operações comerciais',
		download: 'Baixar currículo',
		resume: 'Transformando o seu brainstorming em realidade, meu compromisso é dedicar expertise e dedicação à criação de softwares de qualidade superior, potencializando o desempenho e a eficiência do seu negócio. Especializado em atender às necessidades de pequenas e grandes empresas, estou aqui para concretizar ideias inovadoras e elevar o padrão tecnológico da sua empresa.',
		stat1: 'Projetos em destaque',
		stat2: 'Flags capturadas em CTF',
		stat3: 'Recomendações profissionais',

		labelProjects: 'Projetos',
		projects: 'Confira alguns dos meus projetos recentes.',
		projectsHint: 'Continue rolando para explorar',
		viewProject: 'Ver projeto',
		moreProjects: 'Ver todos os projetos no GitHub',
		p08Title: 'PROTEGER-NR1 EPT',
		p08Desc: 'Sistema web para identificar, registrar e prevenir riscos psicossociais (NR-1) em instituições de Educação Profissional e Tecnológica, com os instrumentos Karasek e COPSOQ. Questionários anônimos, resultados com k-anonimato e mapa de risco, planos de ação e recursos de IA opcionais.',
		p09Title: 'Agente de IA com RAG - BimBam Buy',
		p09Desc: 'Agente de IA que responde dúvidas sobre as políticas de um e-commerce fictício usando apenas os documentos internos da empresa. Busca com FAISS, suporte a OpenAI, Gemini e Cohere, e um limiar de similaridade que recusa perguntas fora do escopo sem chamar o LLM.',
		p10Title: 'FórumHub - API REST',
		p10Desc: 'API REST em Java com Spring Boot que simula um fórum de discussão: CRUD completo de tópicos, respostas, cursos, perfis e usuários, com autenticação e banco de dados PostgreSQL.',
		p11Title: 'API de Livros',
		p11Desc: 'API REST em Flask para doar, listar e remover livros, com persistência em SQLite, respostas em JSON e documentação no Postman. Publicada no Render.',
		p12Title: 'Chatbot com IA - Sítio do Picapau Amarelo',
		p12Desc: 'Chatbot criado com Gemini e Google AI Studio na Imersão IA da Alura, que permite conversar com os personagens das histórias clássicas de Monteiro Lobato.',
		p13Title: 'Livraria - React e Sass',
		p13Desc: 'Front-end com várias páginas feito em React, React Router e SCSS Modules, com componentes reutilizáveis, formulário com validação e deploy na Vercel.',
		p14Title: 'Imersão Agentes de IA - Oracle ONE',
		p14Desc: 'Jornada de cinco dias construindo agentes de IA: ingestão com RAG, embeddings e vector store, um agente com memória que consulta MySQL e integração com o Telegram para automação real.',
		p15Title: 'Kensei AI Foundations',
		p15Desc: 'Trilha prática de oito semanas em IA, dados e automação: Python do zero, análise de dados com Pandas, dashboards interativos e APIs de IA, montando um portfólio de projetos reais.',
		p21Title: 'Assistente de Delivery - AWS',
		p21Desc: 'Estudo de um fluxo de trabalho com AWS Step Functions e Amazon Bedrock para automatizar um assistente de delivery, do recebimento do pedido até a entrega final.',
		p22Title: 'Desafio Microsoft Copilot',
		p22Desc: 'Projeto de bootcamp usando o GitHub Copilot em pair programming, revisão de código e refatoração, além do Copilot Studio e de IA generativa para agilizar o dia a dia.',
		p24Title: 'LiterAlura',
		p24Desc: 'Aplicação Java que consome a API Gutendex (catálogo do Project Gutenberg) e guarda livros e autores em um banco de dados relacional.',
		p27Title: 'ScreenMatch',
		p27Desc: 'Projeto em Java e Spring que consulta dados de séries, lista os 5 melhores episódios, busca por data e gera estatísticas por temporada usando streams.',
		p23Title: 'Padrões de Projeto em Java',
		p23Desc: 'Projeto Java aplicando os padrões Singleton, Strategy/Repository e Facade, da trilha back-end do Santander Bootcamp 2024.',
		p26Title: 'Banco Digital',
		p26Desc: 'Solução bancária orientada a objetos em Java, com contas corrente e poupança que fazem depósito, saque e transferência entre contas.',
		p25Title: 'Bootcamp - POO em Java',
		p25Desc: 'Domínio de um bootcamp modelado em Java para praticar os quatro pilares da POO: abstração, encapsulamento, herança e polimorfismo.',
		p28Title: 'API de Collections em Java',
		p28Desc: 'Exemplos práticos do Collections Framework do Java (List, Set e Map) aplicados a cenários do dia a dia, do Santander Bootcamp 2024.',
		p33Title: 'Conversor de Moedas',
		p33Desc: 'Aplicação interativa de console em Java que busca cotações em tempo real numa API e converte entre seis pares de moedas.',
		p19Title: 'API Rick and Morty',
		p19Desc: 'Exercício em JavaScript que renderiza um array de objetos no HTML com map() e busca personagens dinamicamente na API do Rick and Morty.',
		p20Title: 'Landing page a partir do Figma',
		p20Desc: 'Landing page construída a partir de um layout no Figma com HTML5 e Sass, com foco em boas práticas e organização de arquivos, publicada na Vercel.',
		p30Title: 'HTML e CSS - Oracle ONE',
		p30Desc: 'Primeiros passos com HTML e CSS no programa Oracle ONE, construindo uma página de portfólio com estrutura semântica e estilização.',
		p16Title: 'Cartão de Natal - Vai na Web',
		p16Desc: 'Página interativa de Natal feita para o desafio da comunidade Vai na Web, com um cartão personalizado que pode ser baixado.',
		p18Title: 'Desafio Python - Vai na Web',
		p18Desc: 'Conjunto de missões em Python para restaurar o sistema de uma escola invadido por um vírus: verificação de notas, permissões de acesso e regras de segurança.',
		p31Title: 'Contador - Controle de Fluxo',
		p31Desc: 'Contador de console em Java que recebe dois números pelo terminal e pratica condicionais, laços e exceções personalizadas.',
		p32Title: 'Banco Java - Abertura de conta',
		p32Desc: 'Desafio de console da formação Java Developer da DIO que cadastra um cliente e abre uma conta bancária, praticando os fundamentos da linguagem.',
		p29Title: 'UML do iPhone - POO',
		p29Desc: 'Diagrama de classes UML que modela os papéis do iPhone como reprodutor musical, telefone e navegador, com base no vídeo de lançamento.',
		p34Title: 'CS50 - Harvard',
		p34Desc: 'Anotações e exercícios do CS50 de Harvard, curso introdutório de Ciência da Computação, começando por um jogo do Dinossauro do Google em Scratch e seguindo para C, arrays e algoritmos.',
		p35Title: 'Lógica de Programação - JavaScript',
		p35Desc: 'Fundamentos de lógica de programação com JavaScript no programa Oracle ONE, construindo passo a passo um jogo do número secreto.',
		p36Title: 'Docker para Desenvolvedores',
		p36Desc: 'Anotações e exercícios sobre Docker: imagens, containers, redes, Docker Compose e projetos com vários containers, incluindo um serviço de envio de e-mails com workers.',
		p04Title: 'Relatório de Pentest - Desafio Final CTF',
		p04Desc: 'Teste de penetração completo em aplicação web, capturando 17 flags em vulnerabilidades críticas: SQL Injection, XSS, falhas de controle de acesso e exposição de credenciais.',
		p05Title: 'Formação em Cybersecurity - Módulo 2',
		p05Desc: 'Laboratório prático de implementação de Web Application Firewall (WAF) ModSecurity em ambiente containerizado Docker, demonstrando proteção contra ataques SQL Injection e XSS em aplicação DVWA.',
		p06Title: 'Formação em Cybersecurity - Módulo 1',
		p06Desc: 'Simulação de rede corporativa segmentada utilizando Docker, representando uma empresa fictícia com diferentes sub-redes, estações de trabalho, servidores e dispositivos pessoais.',
		p03Title: 'Santander Dev Week 2024',
		p03Desc: 'Um Chat Inteligente com os Campeões de League of Legends usando APIs, Java, Spring Boot e IA.',
		p07Title: 'Argos SCADA',
		p07Desc: 'Sistema robusto e flexível para Supervisão e Aquisição de Dados (SCADA), com monitoramento em tempo real, interfaces HMI personalizáveis e suporte a múltiplos protocolos de comunicação industrial.',
		p01Title: 'Decodificador de texto',
		p01Desc: 'Aplicativo decodificador de textos.',
		p02Title: 'Jogo de Adivinhação',
		p02Desc: 'Jogo do número secreto.',

		labelTestimonials: 'Depoimentos',
		testimonials: 'O que dizem sobre o meu trabalho',
		t01Text: 'O Claudio é um excelente profissional, tendo executado uma performance bastante elogiada durante o tempo em que eu trabalhava na Parex, e pude acompanhá-lo no seu dia a dia. Baseado nesse tempo, é com satisfação que eu faço essa recomendação.',
		t01Post: 'Sócio-gerente · PVP Comercio e Representações EIRELI',
		t02Text: 'Claudio, profissional exemplar, compromisso com o resultado, bom trabalho em equipe com uma forte sinergia e fortes conhecimentos na área de TI, Excel, AutoCAD entre outros. Super indico, muito bom profissional.',
		t02Post: 'Gestor de manutenção · Sika',
		t03Text: 'Claudio é muito bom profissional. Esse parceiro eu recomendo, pois confio em suas competências para dar soluções coerentes às demandas difíceis! Claudio tem meu total apoio.',
		t03Post: 'Fundador · Engenheiro Consultor Ltda',

		labelContact: 'Contato',
		contactTitle: 'Vamos construir algo juntos.',
		vacant: 'Estou disponível para prestação de serviços.',
		rights: 'Todos os direitos reservados.',
		createdBy: 'Criado por Claudio Mendonça.',
		oldVersion: 'Versão anterior',
		backTop: 'Voltar ao topo'
	};

	var root = document.documentElement;
	var i18nEls = document.querySelectorAll('[data-i18n]');
	var EN = { pageTitle: document.title };
	i18nEls.forEach(function (el) { EN[el.dataset.i18n] = el.innerHTML.trim(); });
	var DICT = { en: EN, pt: PT };

	function storedLang() {
		try { return localStorage.getItem('cm-lang'); } catch (e) { return null; }
	}

	var lang = storedLang() || ((navigator.language || '').toLowerCase().indexOf('pt') === 0 ? 'pt' : 'en');

	function applyLang(next) {
		lang = next;
		root.lang = next === 'pt' ? 'pt-BR' : 'en';
		i18nEls.forEach(function (el) {
			var value = DICT[next][el.dataset.i18n];
			if (value === undefined) {
				console.warn('[i18n] chave sem tradução:', el.dataset.i18n);
				return;
			}
			el.innerHTML = value;
		});
		document.title = DICT[next].pageTitle;
		try { localStorage.setItem('cm-lang', next); } catch (e) { /* modo privado */ }
	}

	applyLang(lang);

	document.getElementById('translator').addEventListener('click', function () {
		applyLang(lang === 'pt' ? 'en' : 'pt');
		rebuildAnimations();
	});

	document.querySelectorAll('.cm-year').forEach(function (el) { el.textContent = new Date().getFullYear(); });

	/* ------------------------------------------------------------------
	   2. Header (esconde ao descer, volta ao subir), progresso e menu ativo
	------------------------------------------------------------------ */
	var header = document.querySelector('.cm-header');
	var progress = document.querySelector('.cm-progress');
	var lastY = window.scrollY;

	function onScroll() {
		var y = window.scrollY;
		var max = document.documentElement.scrollHeight - window.innerHeight;
		progress.style.transform = 'scaleX(' + (max > 0 ? y / max : 0) + ')';
		header.classList.toggle('is-scrolled', y > 40);
		header.classList.toggle('is-hidden', y > lastY && y > 400);
		lastY = y;
	}
	window.addEventListener('scroll', onScroll, { passive: true });
	onScroll();

	var navLinks = document.querySelectorAll('.cm-nav a');
	if ('IntersectionObserver' in window) {
		var io = new IntersectionObserver(function (entries) {
			entries.forEach(function (entry) {
				if (!entry.isIntersecting) return;
				navLinks.forEach(function (a) {
					a.classList.toggle('is-active', a.getAttribute('href') === '#' + entry.target.id);
				});
			});
		}, { rootMargin: '-45% 0px -50% 0px' });
		['about', 'projects', 'testimonials', 'contact'].forEach(function (id) {
			var s = document.getElementById(id);
			if (s) io.observe(s);
		});
	}

	/* ------------------------------------------------------------------
	   3. Animações
	------------------------------------------------------------------ */
	var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	var hasGsap = typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined';

	if (reduceMotion || !hasGsap) {
		root.classList.remove('js-anim');
		return;
	}

	gsap.registerPlugin(ScrollTrigger);

	// Rolagem suave (opcional: se o Lenis não carregar, o site segue com a rolagem nativa)
	if (typeof window.Lenis !== 'undefined') {
		var lenis = new Lenis({ lerp: 0.1, anchors: true });
		lenis.on('scroll', ScrollTrigger.update);
		gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
		gsap.ticker.lagSmoothing(0);
	}

	// Divide o texto de um elemento em palavras (<span class="cm-word"><span class="cm-word-inner">)
	function splitWords(el) {
		if (!el.querySelector('.cm-word')) {
			(function walk(node) {
				Array.prototype.slice.call(node.childNodes).forEach(function (child) {
					if (child.nodeType === 3) {
						var frag = document.createDocumentFragment();
						child.textContent.split(/(\s+)/).forEach(function (part) {
							if (!part) return;
							if (/^\s+$/.test(part)) {
								frag.appendChild(document.createTextNode(' '));
								return;
							}
							var word = document.createElement('span');
							var inner = document.createElement('span');
							word.className = 'cm-word';
							inner.className = 'cm-word-inner';
							inner.textContent = part;
							word.appendChild(inner);
							frag.appendChild(word);
						});
						child.parentNode.replaceChild(frag, child);
					} else if (child.nodeType === 1) {
						walk(child);
					}
				});
			})(el);
		}
		return el.querySelectorAll('.cm-word-inner');
	}

	// Entrada do hero (roda uma vez ao carregar)
	function playIntro() {
		var tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
		tl.fromTo('.cm-hero__line .cm-line-inner', { yPercent: 110, y: 0 }, { yPercent: 0, y: 0, duration: 1.4, stagger: 0.12 })
			.fromTo('.cm-hero__photo', { opacity: 0, y: 60, scale: 1 }, { opacity: 1, y: 0, duration: 1.4 }, 0.25)
			.fromTo('.cm-hero__photo img', { scale: 1.25 }, { scale: 1, duration: 1.8 }, 0.25)
			.fromTo(['.cm-header', '.cm-hero__bottom'], { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 1, stagger: 0.1 }, 0.7);
		root.classList.remove('js-anim');
		if (window.matchMedia(desktopQuery).matches) {
			swarm(['.cm-hero__photo', '.cm-hero__line--1', '.cm-hero__line--2'], document.querySelector('.cm-hero'), 7, 0.15);
		}
	}

	/* ------------------------------------------------------------------
	   Cursores "multiplayer" que montam o site enquanto a página desce
	   (só no desktop; desligado com prefers-reduced-motion)
	------------------------------------------------------------------ */
	var CURSOR_COLORS = ['#c6f432', '#5ee7ff', '#ff5c8a', '#a78bfa', '#ededf0'];
	var CURSOR_LABELS = ['Java', 'Spring', 'Docker', 'SQL', 'API', 'Git', 'JS', 'WAF'];
	var cursorCount = 0;
	var cursorsOn = true; // desligado depois da troca de idioma, para não repetir a montagem
	var rand = gsap.utils.random;

	function cursorLayer(container) {
		var layer = container.querySelector(':scope > .cm-cursor-layer');
		if (!layer) {
			layer = document.createElement('div');
			layer.className = 'cm-cursor-layer';
			layer.setAttribute('aria-hidden', 'true');
			container.appendChild(layer);
		}
		return layer;
	}

	function makeCursor(layer) {
		var i = cursorCount++;
		var c = document.createElement('div');
		c.className = 'cm-cursor';
		c.style.setProperty('--c', CURSOR_COLORS[i % CURSOR_COLORS.length]);
		c.innerHTML = '<svg viewBox="0 0 24 24"><path d="M4 2.5l15.5 7.2-6.6 1.9-2.4 6.8z"/></svg>' +
			(i % 2 === 0 ? '<span>' + CURSOR_LABELS[(i / 2 | 0) % CURSOR_LABELS.length] + '</span>' : '');
		layer.appendChild(c);
		return c;
	}

	// Caixa do elemento relativa ao container, descontando o x/y que o GSAP aplicou
	function relBox(el, container) {
		var r = el.getBoundingClientRect();
		var s = container.getBoundingClientRect();
		return {
			left: r.left - s.left - (gsap.getProperty(el, 'x') || 0),
			top: r.top - s.top - (gsap.getProperty(el, 'y') || 0),
			w: r.width,
			h: r.height
		};
	}

	// Vários cursores voam até o(s) alvo(s), "trabalham" um pouco, clicam e vão embora
	function swarm(targets, container, count, delay) {
		if (!cursorsOn) return null;
		var layer = cursorLayer(container);
		var list = gsap.utils.toArray(targets);
		var cursors = [];
		var tl = gsap.timeline({
			delay: delay || 0,
			onComplete: function () { cursors.forEach(function (c) { c.remove(); }); }
		});
		for (var i = 0; i < count; i++) {
			var b = relBox(list[i % list.length], container);
			var c = makeCursor(layer);
			var px = b.left + b.w * rand(0.1, 0.9);
			var py = b.top + b.h * rand(0.15, 0.85);
			var ang = Math.random() * Math.PI * 2;
			var dist = rand(350, 650);
			cursors.push(c);
			tl.add(gsap.timeline()
				.fromTo(c, { x: px + Math.cos(ang) * dist, y: py + Math.sin(ang) * dist, opacity: 0 },
					{ x: px, y: py, opacity: 1, duration: 0.9, ease: 'power3.out' })
				.to(c, { x: '+=' + rand(-40, 40), y: '+=' + rand(-24, 24), duration: 0.45, ease: 'sine.inOut', yoyo: true, repeat: 1 })
				.to(c, { scale: 0.8, duration: 0.09, yoyo: true, repeat: 1 })
				.to(c, { x: px + Math.cos(ang + 1.2) * dist, y: py + Math.sin(ang + 1.2) * dist, opacity: 0, duration: 0.8, ease: 'power2.in' }, '+=0.1'),
			i * 0.09);
		}
		return tl;
	}

	// Cada cursor "pega" um elemento solto, arrasta até o lugar certo e solta (montando a seção)
	function assemble(ctx, targets, container, triggerEl) {
		if (!cursorsOn) return;
		var els = gsap.utils.toArray(targets);
		var offsets = els.map(function () { return { x: rand(-160, 160), y: rand(70, 150) }; });
		els.forEach(function (el, i) {
			gsap.set(el, { x: offsets[i].x, y: offsets[i].y, opacity: 0 });
		});
		ScrollTrigger.create({
			trigger: triggerEl || els[0],
			start: 'top 80%',
			once: true,
			onEnter: function () {
				ctx.add(function () {
					var layer = cursorLayer(container);
					var cursors = [];
					var master = gsap.timeline({
						onComplete: function () { cursors.forEach(function (c) { c.remove(); }); }
					});
					els.forEach(function (el, i) {
						var o = offsets[i];
						var b = relBox(el, container);
						var c = makeCursor(layer);
						var px = b.left + o.x + b.w * rand(0.2, 0.7);
						var py = b.top + o.y + rand(10, Math.min(48, b.h * 0.4));
						var side = i % 2 ? 1 : -1;
						cursors.push(c);
						master.add(gsap.timeline()
							.fromTo(c, { x: px + side * rand(250, 450), y: py + rand(150, 300), opacity: 0 },
								{ x: px, y: py, opacity: 1, duration: 0.75, ease: 'power3.out' })
							.to(c, { scale: 0.8, duration: 0.09, yoyo: true, repeat: 1 })
							.to(el, { opacity: 1, duration: 0.2 }, '<')
							.to(el, { x: 0, y: 0, duration: 0.85, ease: 'power3.inOut' })
							.to(c, { x: px - o.x, y: py - o.y, duration: 0.85, ease: 'power3.inOut' }, '<')
							.to(c, { x: '+=' + rand(-180, 180), y: '-=' + rand(60, 160), opacity: 0, duration: 0.6, ease: 'power2.in' }, '+=0.15'),
						i * 0.18);
					});
				});
			}
		});
	}

	function removeCursorLayers() {
		document.querySelectorAll('.cm-cursor-layer').forEach(function (l) { l.remove(); });
	}

	var desktopQuery = '(min-width: 992px) and (min-height: 620px)';

	var mm;

	function setupAnimations() {
		mm = gsap.matchMedia();

		mm.add({
			desktop: desktopQuery,
			mobile: '(max-width: 991px), (max-height: 619px)'
		}, function (ctx) {
			var desktop = ctx.conditions.desktop;

			/* Hero: o título gigante sai de cena enquanto a foto permanece (pin no desktop) */
			var heroTl = gsap.timeline({
				scrollTrigger: {
					trigger: '.cm-hero',
					start: 'top top',
					end: desktop ? '+=90%' : 'bottom top',
					scrub: true,
					pin: desktop
				}
			});
			heroTl
				.to('.cm-hero__line--1', { xPercent: -45, opacity: 0, ease: 'none' }, 0)
				.to('.cm-hero__line--2', { xPercent: 45, opacity: 0, ease: 'none' }, 0)
				.to('.cm-hero__photo', { scale: desktop ? 0.8 : 0.9, ease: 'none' }, 0)
				.to('.cm-hero__glow', { scale: 1.6, opacity: 0.4, ease: 'none' }, 0)
				.to(['.cm-hero__intro', '.cm-hero__aside'], { opacity: 0, y: -40, ease: 'none' }, 0);

			/* Títulos revelados palavra por palavra */
			document.querySelectorAll('[data-split]').forEach(function (el) {
				gsap.from(splitWords(el), {
					yPercent: 110,
					duration: 1,
					ease: 'expo.out',
					stagger: 0.05,
					scrollTrigger: { trigger: el, start: 'top 85%', once: true }
				});
			});

			/* Sobre: seção presa enquanto o parágrafo acende palavra por palavra */
			var scrubText = document.querySelector('[data-scrub]');
			if (scrubText) {
				gsap.fromTo(splitWords(scrubText), { opacity: 0.15 }, {
					opacity: 1,
					ease: 'none',
					stagger: 0.1,
					scrollTrigger: desktop
						? { trigger: '.cm-about__grid', start: 'center center', end: '+=110%', pin: true, scrub: true }
						: { trigger: scrubText, start: 'top 80%', end: 'bottom 45%', scrub: true }
				});
			}

			/* Números com contagem */
			document.querySelectorAll('.cm-count').forEach(function (el) {
				var target = parseInt(el.dataset.count, 10);
				var counter = { v: 0 };
				gsap.to(counter, {
					v: target,
					duration: 1.8,
					ease: 'power2.out',
					onUpdate: function () { el.textContent = Math.round(counter.v); },
					scrollTrigger: { trigger: '.cm-stats', start: 'top 85%', once: true }
				});
			});
			if (desktop) {
				// cursores montam o "Sobre" e arrastam os números para o lugar
				ScrollTrigger.create({
					trigger: '.cm-about__grid', start: 'top 70%', once: true,
					onEnter: function () { ctx.add(function () { swarm(['.cm-about__head .cm-title', '.cm-about__head .cm-btn'], document.querySelector('.cm-about__grid'), 4); }); }
				});
				assemble(ctx, '.cm-stats li', document.querySelector('.cm-about'), '.cm-stats');
			} else {
				gsap.from('.cm-stats li', {
					y: 40, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.12,
					scrollTrigger: { trigger: '.cm-stats', start: 'top 85%', once: true }
				});
			}

			/* Projetos */
			var section = document.querySelector('.cm-projects');
			var track = document.querySelector('.cm-projects__track');
			var cards = gsap.utils.toArray('.cm-projects .cm-card');

			if (desktop) {
				// Scroll horizontal: a seção fica presa e os cards deslizam conforme a rolagem
				section.classList.add('cm-h-scroll');
				var distance = function () { return track.scrollWidth - window.innerWidth; };
				var horizontal = gsap.to(track, {
					x: function () { return -distance(); },
					ease: 'none',
					scrollTrigger: {
						trigger: section,
						start: 'top top',
						end: function () { return '+=' + distance(); },
						pin: true,
						scrub: 1,
						invalidateOnRefresh: true,
						anticipatePin: 1
					}
				});
				// Cada card (e sua imagem) cresce ao entrar na tela
				cards.forEach(function (card) {
					var trig = { trigger: card, containerAnimation: horizontal, start: 'left 100%', end: 'left 55%', scrub: true };
					gsap.fromTo(card, { scale: 0.82, opacity: 0.35 }, { scale: 1, opacity: 1, ease: 'none', scrollTrigger: trig });
					var img = card.querySelector('img');
					if (img) {
						gsap.fromTo(img, { scale: 1.35 }, { scale: 1, ease: 'none', scrollTrigger: trig });
					}
					// dois cursores "ajustam" cada card quando ele chega; os cards que já
					// aparecem no início disparam quando a seção entra na tela
					var startsVisible = card.getBoundingClientRect().left < window.innerWidth * 0.7;
					ScrollTrigger.create(Object.assign(
						startsVisible
							? { trigger: section, start: 'top 40%' }
							: { trigger: card, containerAnimation: horizontal, start: 'left 70%' },
						{ once: true, onEnter: function () { ctx.add(function () { swarm(card, track, 2); }); } }
					));
				});
			} else {
				cards.forEach(function (card) {
					gsap.from(card, {
						y: 60, opacity: 0, duration: 1, ease: 'expo.out',
						scrollTrigger: { trigger: card, start: 'top 88%', once: true }
					});
					var img = card.querySelector('img');
					if (img) {
						gsap.fromTo(img, { scale: 1.25 }, {
							scale: 1, ease: 'none',
							scrollTrigger: { trigger: card, start: 'top bottom', end: 'center center', scrub: true }
						});
					}
				});
			}

			/* Depoimentos */
			if (desktop) {
				assemble(ctx, '.cm-quote', document.querySelector('.cm-testimonials'), '.cm-quotes');
			} else {
				gsap.from('.cm-quote', {
					y: 80, opacity: 0, duration: 1.1, ease: 'expo.out', stagger: 0.15,
					scrollTrigger: { trigger: '.cm-quotes', start: 'top 85%', once: true }
				});
			}

			/* Contato */
			gsap.from(['.cm-contact__text', '.cm-contact__mail', '.cm-contact .cm-social li'], {
				y: 30, opacity: 0, duration: 0.9, ease: 'expo.out', stagger: 0.06,
				scrollTrigger: { trigger: '.cm-contact__title', start: 'top 75%', once: true }
			});
			if (desktop) {
				ScrollTrigger.create({
					trigger: '.cm-contact__title', start: 'top 70%', once: true,
					onEnter: function () { ctx.add(function () { swarm(['.cm-contact__title', '.cm-contact__mail'], document.querySelector('.cm-contact'), 8, 0.2); }); }
				});
			}

			return function () {
				section.classList.remove('cm-h-scroll');
				removeCursorLayers();
			};
		});
	}

	// Ao trocar o idioma, o texto muda de tamanho: refaz as divisões em palavras e os gatilhos
	function rebuildAnimations() {
		if (!mm) return;
		cursorsOn = false;
		mm.revert();
		setupAnimations();
		ScrollTrigger.refresh();
	}

	playIntro();
	setupAnimations();

	if (document.fonts && document.fonts.ready) {
		document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
	}
	window.addEventListener('load', function () { ScrollTrigger.refresh(); });
})();
