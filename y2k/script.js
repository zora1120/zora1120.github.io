const audio = new Audio("music/bgm.mp3"); // 你的 BGM 放在 music 文件夹里
audio.loop = true;

function playMusic() {
  audio.play();
}

function pauseMusic() {
  audio.pause();
}