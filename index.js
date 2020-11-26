
const express = require('express');
const app = express();
const puppeteer = require('puppeteer');

app.get('/api/formacao-front-end', async (req, res) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.alura.com.br/formacao-front-end');
  
 const pageData = await page.evaluate(() => {
    return {
      title: document.querySelector('.formacao-headline-titulo').innerText,
      subtitle: document.querySelector('.formacao-headline-subtitulo').innerHTML,
    };
  });

  await browser.close();

  res.send({
    "id": 33082,
    // "code": "front-end",
    // "kind": "DEGREE",
    // "kindDisplayName": "Formação",
    // "kindSlugDisplayName": "formacao",
    // "situation": "PUBLISHED",
    "title": pageData.title,
    "subtitle": pageData.subtitle,
    // "description": {
    //   "id": 46447,
    //   "title": "O front-end domina o mundo",
    //   "description": "<p>A Formação Frontvend da Alura foi pensada para você começar do zero e se tornar um profissional de ponta. É um guia de estudos com um passo a passo pensado com carinho pela equipe da Alura.</p>\r\n<h4>- <strong>O que é Front-End?</strong></h4>\r\n<p>A Web é a plataforma de programação mais importante do mundo. Suas tecnologias principais, o <strong>HTML</strong>, o <strong>CSS</strong> e o <strong>JavaScript</strong>, são as linguagens mais usadas. E quem domina essas tecnologias, suas boas práticas e seus recursos mais avançados, hoje está no mercado de Front-End.</p>\r\n<h4>- <strong>O que faz um(a) desenvolvedor(a) Front-End?</strong></h4>\r\n<p>Praticamente todo produto digital precisa de um Front-end Web, por isso é um mercado imenso no Brasil e no mundo. Mas se engana quem acha que aprender um pouco de HTML, CSS e arranhar um pouco de JavaScript são suficientes. O bom profissional de Front-end tem que lidar com desafios enormes. Precisa saber as boas práticas de código, como lidar com múltiplos navegadores e saber escrever sites resilientes. Precisa estar antenado nas novidades do JavaScript moderno e do CSS.</p>\r\n<h4>Pré-requisitos</h4>\r\n<p>Lógica de programação com JavaScript e noções de Git para submissão dos projetos. Aqui na Alura, <a href=\"https://www.alura.com.br/curso-online-logica-programacao-javascript-html\">curso de lógica I</a> e <a href=\"https://www.alura.com.br/curso-online-logica-programacao-pratica-com-desenho-animacoes-em-jogo\">curso de lógica II</a>, além do <a href=\"https://www.alura.com.br/curso-online-git\">curso de git</a>.</p>\r\n",
    //   "position": null
    // },
  })
});


app.listen(3000);