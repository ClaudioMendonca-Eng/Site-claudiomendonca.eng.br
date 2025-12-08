const textTranslator = document.getElementById('translator');
const textBanner = document.getElementById('banner');
const textPhraseResume = document.getElementById('phraseresume');
const textResume = document.getElementById('resume');
const textDownload = document.getElementById('download');
const textProjects = document.getElementById('projects');
const textProject01 = document.getElementById('project01');
const textProject02 = document.getElementById('project02');
const textProject03 = document.getElementById('project03');
const textProject04 = document.getElementById('project04');
const textProject05 = document.getElementById('project05');
const textProject06 = document.getElementById('project06');
const textTestimonials = document.getElementById('testimonials');
const textArticle01 = document.getElementById('article01');
const textArticle02 = document.getElementById('article02');
const textArticle03 = document.getElementById('article03');
const textVacant = document.getElementById('vacant');
const textFooter = document.getElementById('footer');


function translatorPage() {
	if (textTranslator.innerHTML === '&lt;HTML Lang="PT-BR"&gt;') {
		textTranslator.innerHTML = '&lt;HTML Lang="EN"&gt;';
		textBanner.innerHTML = 'Sou desenvolvedor de software, transformando seu brainstorming em realidade digital.';
		textPhraseResume.innerHTML = 'Dedicado a melhorar suas operações comerciais';
		textResume.innerHTML = 'Transformando o seu brainstorming em realidade, meu compromisso é dedicar expertise e dedicação à criação de softwares de qualidade superior, potencializando o desempenho e a eficiência do seu negócio. Especializado em atender às necessidades de pequenas e grandes empresas, estou aqui para concretizar ideias inovadoras e elevar o padrão tecnológico da sua empresa.';
		textDownload.innerHTML = 'Download do Resumo  <i class="ri-download-line"></i>';
		textProjects.innerHTML = '<span>projetos</span>Confira alguns dos meus projetos recentes.';
		textProject01.innerHTML = '<h3>Decodificador de texto</h3><span>Aplicativo decodificador de textos.</span>';
		textProject02.innerHTML = '<h3>Jogo de Adivinhação</h3><span>Jogo do número secreto.</span>';
		textProject03.innerHTML = '<h3>Santander Dev Week 2024</h3><span>Um Chat Inteligente com os Campeões de League of Legends usando APIs, Java, Spring Boot e IA.</span>';
		textProject04.innerHTML = '<h3>Relatório de Pentest - Desafio Final CTF</h3><span>Teste de penetração completo em aplicação web, capturando 17 flags em vulnerabilidades críticas: SQL Injection, XSS, falhas de acesso e exposição de credenciais.</span>';
		textProject05.innerHTML = '<h3>Formação em Cybersecurity - Módulo 2</h3><span>Laboratório prático de implementação de Web Application Firewall (WAF) ModSecurity em ambiente containerizado Docker, demonstrando proteção contra ataques SQL Injection e XSS em aplicação DVWA.</span>';
		textProject06.innerHTML = '<h3>Formação em Cybersecurity - Módulo 1</h3><span>Simulação de rede corporativa segmentada utilizando Docker, representando uma empresa fictícia com diferentes sub-redes, estações de trabalho, servidores e dispositivos pessoais.</span>';
		textTestimonials.innerHTML = 'Depoimentos';
		textArticle01.innerHTML = '<div class="cm-testimonials-loop" id="article01"><article>O Claudio é um excelente profissional, tendo executado uma performance bastante elogiada, durante o tempo em que eu trabalhava na Parex , e pude acompanhá-lo no seu dia dia . Baseado nesse tempo é com satisfação que eu faço essa recomendação.</article><section><span class="cm-name">Paulo Cesar</span><span class="cm-post">SÓCIO-GERENTE - PVP COMERCIO E REPRESENTAÇÕES EIRELI</span></section></div>';
		textArticle02.innerHTML = '<div class="cm-testimonials-loop" id="article02"><article>Claudio profissional exemplar compromisso com o resultado, bom trabalho em equipe com uma forte sinergia e fortes conhecimentos na área de TI, Excel, AutoCAD entre outros. Super indico muito bom profissional.</article><section><span class="cm-name">Rogerio Martins</span><span class="cm-post">Gestor de manutenção | Supervisor manutenção - Sika</span></section></div>';
		textArticle03.innerHTML = '<div class="cm-testimonials-loop" id="article03"><article>Claudio é muito bom profissional. Esse parceiro recomendo, pois confio em suas competências para dar soluções coerentes as demandas difíceis! Claudio tem meu total apoio.</article><section><span class="cm-name">Humberto Santana</span><span class="cm-post">Fundador - Engenheiro Consultor Ltda</span></section></div>';
		textVacant.innerHTML = 'Estou disponível para prestação de serviços';
		textFooter.innerHTML = '<span class="cm-copyright">© 2024 Todos os direitos reservados. <br><a href="https://www.claudiomendonca.eng.br/" target="_blanck">Criado por Claudio Mendonça.</span>';
	}
	else {
		textTranslator.innerHTML = '&lt;HTML Lang="PT-BR"&gt;';
		textBanner.innerHTML = 'I’m a soft­ware devel­op­er, turning your brainstorming into reality.';
		textPhraseResume.innerHTML = 'Dedicated to improving your business operations';
		textResume.innerHTML = 'Turning your brainstorming into reality, my commitment is to apply expertise to create a superior-quality software, boosting the performance and efficiency of your business. Specialized in find out the needs of both small and large enterprises, I am here to bring innovative ideas to improve the technological standards of your company.';
		textDownload.innerHTML = 'Download Resume  <i class="ri-download-line"></i>';
		textProjects.innerHTML = '<span>projects</span>Check out a few of my recent projects.';
		textProject01.innerHTML = '<h3>Text Decoder</h3><span>Text decoder application.</span>';
		textProject02.innerHTML = '<h3>Guessing Game</h3><span>Secret number game.</span>';
		textProject03.innerHTML = '<h3>Santander Dev Week 2024</h3><span>A Smart Chat with League of Legends Champions using APIs, Java, Spring Boot, and AI.</span>';
		textProject04.innerHTML = '<h3>Pentest Report - CTF Final Challenge</h3><span>Complete penetration testing on web application, capturing 17 flags in critical vulnerabilities: SQL Injection, XSS, access control flaws and credential exposure.</span>';
		textProject05.innerHTML = '<h3>Cybersecurity Training - Module 2</h3><span>Practical lab implementing Web Application Firewall (WAF) ModSecurity in Docker containerized environment, demonstrating protection against SQL Injection and XSS attacks on DVWA application.</span>';
		textProject06.innerHTML = '<h3>Cybersecurity Training - Module 1</h3><span>Simulation of segmented corporate network using Docker, representing a fictitious company with different subnets, workstations, servers and personal devices.</span>';
		textTestimonials.innerHTML = 'Testimonials';
		textArticle01.innerHTML = '<div class="cm-testimonials-loop" id="article01"><article>Claudio is an excellent professional, having delivered a highly praised performance during the time I worked at Parex, and I had the opportunity to observe his day-to-day activities. Based on that experience, it is with pleasure that I provide this recommendation.</article><section><span class="cm-name">Paulo Cesar</span><span class="cm-post">MANAGING PARTNER - PVP COMERCIO E REPRESENTAÇÕES EIRELI</span></section></div>';
		textArticle02.innerHTML = '<div class="cm-testimonials-loop" id="article02"><article>Claudio is an exemplary professional committed to results, good teamwork skills with strong synergy, and deep knowledge in the IT field, Excel, AutoCAD among others. Highly recommend, very skilled professional.</article><section><span class="cm-name">Rogerio Martins</span><span class="cm-post">Gestor de manutenção | Supervisor manutenção - Sika</span></section></div>';
		textArticle03.innerHTML = '<div class="cm-testimonials-loop" id="article03"><article>Claudio is a very skilled professional. I recommend this partner because I trust in his abilities to provide coherent solutions to difficult demands! Claudio has my full support.</article><section><span class="cm-name">Humberto Santana</span><span class="cm-post">Fundador - Engenheiro Consultor Ltda</span></section></div>';
		textVacant.innerHTML = 'I am available to work';
		textFooter.innerHTML = '<span class="cm-copyright">© 2024 All rights reserved. <br><a href="https://www.claudiomendonca.eng.br/" target="_blanck">Created by Claudio Mendonça.</span>';
	}

}

jQuery(document).ready(function($) {

   if ($('.cm-testimonials-section').length) {
		$('.cm-testimonials-slider').slick({
		  	infinite: true,
		  	arrows: true,
		  	autoplay: true,
		  	autoplaySpeed: 4000,
		  	prevArrow:"<button type='button' class='slick-prev slick-arrow'><i class='ri-arrow-left-line'></i></button>",
		  	nextArrow:"<button type='button' class='slick-next slick-arrow'><i class='ri-arrow-right-line'></i></button>"
		});
    }

   if ($('.cm-projects-section').length) {
		$('.cm-projects-slider').slick({
		  	infinite: true,
		  	arrows: false,
		  	dots: true,
		  	autoplay: true,
		  	autoplaySpeed: 3000,
		  	slidesToShow: 3,
		  	slidesToScroll: 1,
		  	pauseOnHover: true,
		  	pauseOnFocus: true,
		  	responsive: [
			    {
			      breakpoint: 992,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 1
			      }
			    },
			    {
			      breakpoint: 768,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    }
			]
		});
    }
   

});

