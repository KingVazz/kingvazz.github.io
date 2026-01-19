function startSurprise() {
    document.querySelector('.opening').style.display = 'none';
  
    document.querySelector('.message').classList.remove('hidden');
    document.querySelector('.gallery').classList.remove('hidden');
    document.querySelector('.surprise').classList.remove('hidden');
    document.querySelector('footer').classList.remove('hidden');
  
    const music = document.getElementById('music');
    music.play();
  }
  
  function showLove() {
    const text = document.getElementById('loveText');
    text.innerHTML = "Aku harap semua mimpimu pelan-pelan jadi nyata, dan aku bisa ada di sampingmu saat itu terjadi 💕✨";
  }
  