function surprise() {
    const box = document.getElementById("surprise-box");
    box.innerHTML = "";
  
    // Doğum günü yazısı
    const message = document.createElement("div");
    message.innerText = "🎉 Betül, iyi ki doğdun! 🎈";
    message.className = "animated-message";
    box.appendChild(message);
  
    // Konfeti ve kediler + müzik
    fullConfettiStorm();
    catParty();
  
    // Arka plan efekti
    document.body.classList.add("surprise-bg");
  
    // Müzik başlat (iOS uyumu için tekrar tetiklenebilir)
    const music = document.getElementById("bg-music");
    if (music.paused) music.play();
  
    // Arka planı geri döndür
    setTimeout(() => {
      document.body.classList.remove("surprise-bg");
    }, 8000);
  }
  
  function fullConfettiStorm() {
    const emojis = ["🎉", "🎈", "🎂", "🥳", "✨", "🎊", "💖"];
    
    // Mobilde konfeti sayısını azalt
    const count = window.innerWidth <= 600 ? 150 : 300;
  
    for (let i = 0; i < count; i++) {
      const emoji = document.createElement("div");
      emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
      emoji.style.position = "fixed";
      emoji.style.left = Math.random() * 100 + "vw";
      emoji.style.top = Math.random() * -50 + "vh";
      emoji.style.fontSize = `${Math.random() * 20 + 20}px`;
      emoji.style.animation = "fall 5s linear forwards";
      emoji.style.zIndex = "999";
      document.body.appendChild(emoji);
      setTimeout(() => emoji.remove(), 6000);
    }
  }
  
  function catParty() {
    const cats = ["🐱", "😺", "😸", "😹"];
    for (let i = 0; i < 6; i++) {
      const cat = document.createElement("div");
      cat.className = "cat";
      cat.innerText = cats[Math.floor(Math.random() * cats.length)];
      cat.style.left = Math.random() * 90 + "vw";
      cat.style.bottom = "0";
      document.body.appendChild(cat);
      setTimeout(() => cat.remove(), 5000);
    }
  }
  