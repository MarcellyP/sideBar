const btn = document.querySelector('.menu');
const sec = document.querySelector('.sec-principal');
const pesq = document.querySelector('.pesquisa');
const volt = document.querySelector('.voltar');


btn.onclick = function(){
  sec.classList.toggle('ativo');
}

pesq.onclick = function(){
  sec.classList.toggle('ativo');
}

volt.onclick = function(){
  sec.classList.toggle('ativo');
}
