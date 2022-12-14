 /*
      Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
      - document.getElementById()
      - document.getElementsByClassName()
      - document.getElementsByTagName()
      1. Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
      2. Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
      3. Crie e execute uma função que mude a cor do quadrado vermelho para branco.
      4. Crie e execute uma função que corrija o texto da tag <h1>.
      5. Crie e execute uma função que modifique o texto da primeira tag <p> para maiúsculo.
      6. Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
      */

    function changeTextID(element, text) {
      document.getElementById(element).innerText = text;
    }
    changeTextID('main-text', 'Estarei trabalhando e comprando todas as coisas que eu quiser!');

    function changeColorClass(element, color) {
      let elementClass = document.getElementsByClassName(element);
      for (let i = 0; i < elementClass.length; i += 1) {
        document.getElementsByClassName(element)[i].style.backgroundColor = color;
      }
    }
    changeColorClass('main-content', 'rgb(76,164,109)');

    changeColorClass('center-content', 'white');

    function changeTextClass(element, text) {
      let elementClass = document.getElementsByClassName(element);
      for (let i = 0; i < elementClass.length; i += 1) {
        document.getElementsByClassName(element)[i].innerText = text;
      }
    }
    changeTextClass('title', 'Exercício - Java Script');

    function upperCaseTextID(element) {
      document.getElementById(element).style.textTransform = 'uppercase';
    }
    upperCaseTextID('title-paragraph');

    function consoleLogParagraphs() {
      let arrayP = document.getElementsByTagName('p')
      for (let i = 0; i < arrayP.length; i += 1) {
        console.log(document.getElementsByTagName('p')[i].innerText);
      }
    }
    consoleLogParagraphs();