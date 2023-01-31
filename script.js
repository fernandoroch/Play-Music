const progress = document.querySelector('#progress')
let song = document.querySelector('#song')
const ctrlIcon = document.querySelector('#ctrl-icon')
const addConteudoAudio = document.querySelector('#dicionar-audio')
const next = document.querySelector('#next')
const prev = document.querySelector('#prev')
let musicAtual = 1

const music = document.querySelector('#music-atual')
const nameAutor = document.querySelector('#name-autor')
const songImg = document.querySelector('.song-img')

const detalhesMusic = [
  {musica:'Um pedido',artista:'Hungria',url:'https://tse4.mm.bing.net/th?id=OIP.C9OSHst9Xzo5W0MH0xzzkgHaIQ&pid=Api&P=0'},
  {musica:'Vai cuiabá',artista:'The xomanos',url:'https://akamai.sscdn.co/uploadfile/letras/fotos/3/2/9/8/32984f5061b4ab352171cea66dc0f2fd.jpg'},
  {musica:'Ohno',artista:'Shaan Kambli',url:'https://tse4.mm.bing.net/th?id=OIP.1sMJffiI7MWWJe7H4ibRpgAAAA&pid=Api&P=0'}
]

song.onloadedmetadata = () => {
  progress.max = song.duration
  progress.value = song.currentTime
}

const playPause = () => {
  if (ctrlIcon.classList.contains('fa-pause')){
    song.pause()
    ctrlIcon.classList.remove('fa-pause')
    ctrlIcon.classList.add('fa-play')
  }else {
    song.play()
    ctrlIcon.classList.remove('fa-play')
    ctrlIcon.classList.add('fa-pause')
    atualizarRanger()
  }
}

const atualizarRanger = ()=> {
  if (song.play()) {
    setInterval(()=>{
      progress.value = song.currentTime
    },1000)
  }
}

progress.onchange = () => {
  song.play()
  song.currentTime = progress.value
  ctrlIcon.classList.add('fa-pause')
  ctrlIcon.classList.remove('fa-play')
}

const nextMusic = () => {
  (musicAtual === detalhesMusic.length)? musicAtual = 1 :musicAtual++
  defineMusicaAtual()
}

const prevtMusic = () => {
  (musicAtual === 1)? musicAtual = detalhesMusic.length : musicAtual--
  defineMusicaAtual()
}

const defineMusicaAtual = () => {
  let elements = `<audio  id="song">
  <source src="audio/music-${musicAtual}.mp3" type="audio/mpeg">
  </audio>`
  addConteudoAudio.innerHTML = elements
  song = document.querySelector('#song')
  song.play()
  ctrlIcon.classList.add('fa-pause')
  ctrlIcon.classList.remove('fa-play')
  infoMusicDom()
}

const infoMusicDom = () => {
  let posicaoArray = musicAtual - 1
  music.innerHTML = detalhesMusic[posicaoArray].musica
  nameAutor.innerHTML = detalhesMusic[posicaoArray].artista
  songImg.setAttribute('src',detalhesMusic[posicaoArray].url)
}

next.addEventListener('click',nextMusic)
prev.addEventListener('click',prevtMusic)
