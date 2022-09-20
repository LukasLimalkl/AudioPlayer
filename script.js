let musicas = [
    {titulo:'No. 1 Party Anthem', artista:'Artic Monkeys', src:'img/party.mp3', img:'img/party.jpg'},
    {titulo:'505', artista:'Artic Monkeys', src:'img/505.mp3', img:'img/505.jpg'},
    {titulo:'Freaking out on the interstate', artista:'Briston Maroney', src:'img/briston.mp3', img:'img/briston.jpg'},
    {titulo:'Fim de semana no rio', artista:'Teto', src:'img/fds.mp3', img:'img/teto.jpg'},
    {titulo:'Homage', artista:'Mild High Club', src:'img/homage.mp3', img:'img/mh.jpg'},
    {titulo:'idfc', artista:'Blackbear', src:'img/idfc.mp3', img:'img/bb.jpg'},
    {titulo:'Stronger', artista:'Kanye West', src:'img/stronger.mp3', img:'img/stronger.jpg'},
    {titulo:'Civil War', artista:'Guns and Roses', src:'img/civil.mp3', img:'img/war.jpg'},
    {titulo:'Cabeça de gelo', artista:'Cleiton Rasta', src:'img/cleiton.mp3', img:'img/rasta.jpg'},
    {titulo:'Me dá o seu coração | Pedindo amor', artista:'Hugo e Guilherme', src:'img/coraçao.mp3', img:'img/hg.jpg'},
    {titulo:'Take What You Want', artista:'Post Malone', src:'img/malone.mp3', img:'img/post.jpg'}
];

let indexMusica = 0
let musica = document.querySelector('audio');

let duracaoMusica = document.querySelector('.fim')
let imagem = document.querySelector('.img');
let nomeMusica = document.querySelector('.descriçao h2');
let nomeArtista = document.querySelector('.descriçao i')

renderizarMusica(indexMusica);
// EVENTOS
document.querySelector('.p1').addEventListener('click', tocarMusica);

document.querySelector('.p2').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra)

document.querySelector('.anterior').addEventListener('click', () =>{
    indexMusica--;
    if (indexMusica < 0){
        indexMusica = 10
    }
    renderizarMusica(indexMusica);
});
document.querySelector('.proxima').addEventListener('click', () =>{
    indexMusica++;
    if (indexMusica > 10)
    indexMusica = 0
    renderizarMusica(indexMusica);
});

//FUNÇOES
function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () =>{
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosPMin(Math.floor(musica.duration));
    });
}
function tocarMusica(){
    musica.play();
    document.querySelector('.p2').style.display ='block';
    document.querySelector('.p1').style.display ='none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.p2').style.display ='none';
    document.querySelector('.p1').style.display ='block';
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosPMin(Math.floor(musica.currentTime))
}

function segundosPMin(segundos){
    let campoMin = Math.floor(segundos / 60);
    let campoSeg = segundos % 60;
    if (campoSeg <10){
        campoSeg = '0' + campoSeg
    }
    return campoMin + ':'+campoSeg
}

