const cambiaTitolo = function () {
  let cambiaH1 = document.querySelector("h1");
  cambiaH1.innerText = "Il Mio Bellissimo Negozio";
};
cambiaTitolo();

const cambiaBody = function () {
  let bodyChange = document.querySelector("*");
  bodyChange.style.backgroundcolor = "gray";
};
cambiaBody();

const cambiaFooter = function () {
  let footer = document.querySelector("h3");
  footer.innerText = "Il Mio Bellissimo Negozio ,Piazza la bomba e scappa ,5";
};
cambiaFooter();

const classLinks = function () {
  const links = document.querySelectorAll("a");
  for (i = 0; i < links[i]; i++) {
    links[i].classList.add("links");
  }
}
classLinks();

const sparisciImg = function () {
  let tutteImg = document.querySelectorAll("img");
  for (i = 0; i < tutteImg.length; i++) {
    let imgs = tutteImg[i];
    imgs.style.display = "none";
  }
};

const colorePrezzo = function () {
  let prezzis = document.querySelectorAll("p");
  for (i = 0; i < prezzis.length; i++) {
    prezzis[i].style = "color: rgb(${Math.round(Math.random()*255)},${Math.round(Math.random()*255)},${Math.round(Math.random()*255)})";
  }
};