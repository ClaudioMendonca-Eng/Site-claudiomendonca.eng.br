const textTranslator = document.getElementById('translator');
const textBanner = document.getElementById('banner');
const textPhraseResume = document.getElementById('phraseresume');
const textResume = document.getElementById('resume');
const textDownload = document.getElementById('download');
const textProjects = document.getElementById('projects');
const textProject01 = document.getElementById('project01');
const textProject02 = document.getElementById('project02');
const textProject03 = document.getElementById('project03');
const textTestimonials = document.getElementById('testimonials');
const textArticle01 = document.getElementById('article01');
const textArticle02 = document.getElementById('article02');
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
		textProject02.innerHTML = '<h3>Guessing Game</h3><span>Secret number game.</span>';
		textProject03.innerHTML = '<h3>Santander Dev Week 2024</h3><span>Um Chat Inteligente com os Campeões de LOL usando APIs, Java, Spring Boot e IA.</span>';
		textTestimonials.innerHTML = 'Depoimentos';
		textArticle01.innerHTML = '<article>O Cláudio é um excelente profissional, tendo executado uma performance bastante elogiada, durante o tempo em que eu trabalhava na Parex , e pude acompanhá-lo no seu dia dia . Baseado nesse tempo é com satisfação que eu faço essa recomendação.</article><section><span class="cm-name">Paulo Cesar</span><span class="cm-post">SÓCIO-GERENTE - PVP COMERCIO E REPRESENTAÇÕES EIRELI</span></section>';
		textArticle02.innerHTML = '<article>Aguardando Mais.</span>';
		textVacant.innerHTML = 'Estou disponível para prestação de serviços';
		textFooter.innerHTML = '<span class="cm-copyright">© 2024 Todos os direitos reservados. <br><a href="https://www.claudiomendonca.eng.br/" target="_blanck">Criado por Claudio Mendonça.</span>';
	}
	else {
		textTranslator.innerHTML = '&lt;HTML Lang="PT-BR"&gt;';
		textBanner.innerHTML = 'I’m a soft­ware devel­op­er, turning your brainstorming into reality.';
		textPhraseResume.innerHTML = 'Dedicated to improving your business operations';
		textResume.innerHTML = 'Turning your brainstorming into reality, my commitment is to dedicate expertise and dedication to the creation of superior-quality software, boosting the performance and efficiency of your business. Specialized in meeting the needs of both small and large enterprises, I am here to bring innovative ideas to fruition and elevate the technological standard of your company.';
		textDownload.innerHTML = 'Download Resume  <i class="ri-download-line"></i>';
		textProjects.innerHTML = '<span>projects</span>Check out a few of my recent project.';
		textProject01.innerHTML = '<h3Text decoder</h3><span>Text decoder application.</span>';
		textProject02.innerHTML = '<h3>Guessing Game</h3><span>Secret number game.</span>';
		textProject03.innerHTML = '<h3>Santander Dev Week 2024</h3><span>A Smart Chat with LOL Champions using APIs, Java, Spring Boot, and AI</span>';
		textTestimonials.innerHTML = 'Testimonials';
		textArticle01.innerHTML = '<article>Claudio is an excellent professional, having delivered a highly praised performance during the time I worked at Parex, and I had the opportunity to observe his day-to-day activities. Based on that experience, it is with pleasure that I provide this recommendation.</article><section><span class="cm-name">Paulo Cesar</span><span class="cm-post">MANAGING PARTNER - PVP COMERCIO E REPRESENTAÇÕES EIRELI</span></section>';
		textArticle02.innerHTML = '<article>Waiting for More.</article><section><span class="cm-name">Nome Sobrenome</span><span class="cm-post">Função - Empresa</span></section>';
		textVacant.innerHTML = 'I’m available for work';
		textFooter.innerHTML = '<span class="cm-copyright">© 2024 All right reserved. <br><a href="https://www.claudiomendonca.eng.br/" target="_blanck">Created by Claudio Mendonça.</span>';
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
   

});

