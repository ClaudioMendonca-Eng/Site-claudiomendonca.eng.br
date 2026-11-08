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
	}

	var mm;

	function setupAnimations() {
		mm = gsap.matchMedia();

		mm.add({
			desktop: '(min-width: 992px) and (min-height: 620px)',
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
			gsap.from('.cm-stats li', {
				y: 40, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.12,
				scrollTrigger: { trigger: '.cm-stats', start: 'top 85%', once: true }
			});

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
			gsap.from('.cm-quote', {
				y: 80, opacity: 0, duration: 1.1, ease: 'expo.out', stagger: 0.15,
				scrollTrigger: { trigger: '.cm-quotes', start: 'top 85%', once: true }
			});

			/* Contato */
			gsap.from(['.cm-contact__text', '.cm-contact__mail', '.cm-contact .cm-social li'], {
				y: 30, opacity: 0, duration: 0.9, ease: 'expo.out', stagger: 0.06,
				scrollTrigger: { trigger: '.cm-contact__title', start: 'top 75%', once: true }
			});

			return function () {
				section.classList.remove('cm-h-scroll');
			};
		});
	}

	// Ao trocar o idioma, o texto muda de tamanho: refaz as divisões em palavras e os gatilhos
	function rebuildAnimations() {
		if (!mm) return;
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
