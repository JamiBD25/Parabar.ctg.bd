const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('#nav-menu ul');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  hamburger.classList.toggle('active'); // হ্যামবার্গার X এনিমেশন
});


// lyrics.json লোড করা
fetch('./lyrics.json')
  .then(res => res.json())
  .then(songs => {

    const container = document.getElementById("song-list");

    // গানগুলো UI তে বানানো
    songs.forEach(song => {

      const item = document.createElement("div");
      item.className = "lyrics-item";

      item.innerHTML = `
        <button class="lyrics-btn">
          <span>🎵 ${song.title}</span>
          <span class="arrow">▼</span>
        </button>

        <div class="lyrics-content">
          ${song.lyrics.replace(/\n/g, "<br>")}
        </div>
      `;

      container.appendChild(item);

    });

    // এখন click event (ডাইনামিকভাবে বানানো তাই পরে লাগাতে হবে)
    document.querySelectorAll(".lyrics-btn")
      .forEach(button => {

        button.addEventListener("click", () => {

          const item = button.parentElement;

          // একসাথে শুধু একটা খোলা থাকবে (optional nice UX)
          document.querySelectorAll(".lyrics-item")
            .forEach(el => {
              if (el !== item) el.classList.remove("active");
            });

          // toggle current
          item.classList.toggle("active");

        });

      });

  })
  .catch(err => {
    console.log("JSON load error:", err);
  });