const scrollProgress = document.querySelector('.scroll_progress__text');
const scrollBar = document.querySelector('.scroll_progress');

window.onscroll = function() {
  const offset = window.pageYOffset || document.documentElement.scrollTop,
  windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight,
  progress = Math.floor(offset/windowHeight * 100);
//   progress = offset/windowHeight * 100;
  scrollProgress.innerHTML = `${progress + '%'}`;
  scrollBar.style.width = `${progress + '%'}`;
}