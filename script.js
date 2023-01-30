const progress = document.querySelector('#progress')
const song = document.querySelector('#song')
const ctrlIcon = document.querySelector('#ctrl-icon')
const dicionarAudio = document.querySelector('#dicionar-audio')
const next = document.querySelector('#next')
const prev = document.querySelector('#prev')
let musicAtual = 1
const qtcMusic = [1,2,3,4]

const nextMusic = () => {
  (musicAtual === qtcMusic.length)? musicAtual = 1 :musicAtual++

}

const prevtMusic = () => {
  (musicAtual === 1)? musicAtual = qtcMusic.length : musicAtual--
}

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
    ctrlIcon.classList.add('fa-pause')
    ctrlIcon.classList.remove('fa-play')
  }
}

if (song.play()) {
  setInterval(()=>{
    progress.value = song.currentTime
  },500)
}

progress.onchange = () => {
  song.play()
  song.currentTime = progress.value
  ctrlIcon.classList.add('fa-pause')
  ctrlIcon.classList.remove('fa-play')
}

next.addEventListener('click',nextMusic)
prev.addEventListener('click',prevtMusic)