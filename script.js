const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('#nav-menu ul');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  hamburger.classList.toggle('active'); // হ্যামবার্গার X এনিমেশন
});


fetch('lyrics.json')
  .then(response => response.json())
  .then(data => {

    const songList = document.getElementById('song-list');

    function displaySongs(songs) {
      songList.innerHTML = '';

      songs.forEach(song => {
        songList.innerHTML += `
          <div class="song-card">
            <h3>${song.title}</h3>
            <p>${song.artist}</p>
            <button onclick="showLyrics(${song.id})">
              সম্পূর্ণ লিরিক দেখুন
            </button>
          </div>
        `;
      });
    }

    displaySongs(data);

    document.getElementById('search')
      .addEventListener('input', function() {

        const keyword = this.value.toLowerCase();

        const filtered = data.filter(song =>
          song.title.toLowerCase().includes(keyword)
        );

        displaySongs(filtered);
      });

    window.showLyrics = function(id) {

      const song = data.find(item => item.id === id);

      alert(
        song.title +
        "\n\n" +
        song.lyrics
      );
    };

  });