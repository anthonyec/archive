<!-- description: A small fake operating system, Flash "portal" for the PSP -->
<!-- type: interactive -->
<!-- draft: true -->

# Opollo

Summary of what the project was.

<div class="flash-player" id="container"></div>
<script src="../assets/ruffle.js"></script>
<script>
  window.RufflePlayer = window.RufflePlayer || {};
  window.addEventListener('load', (event) => {
      const ruffle = window.RufflePlayer.newest();
      const player = ruffle.createPlayer();
      const container = document.getElementById('container');
      container.appendChild(player);
      player.load('assets/pspo.swf');
      player.style.width = "720px";
      player.style.height = "408px";
  });
</script>

Flash file powered by [ruffle.rs](https://ruffle.rs/).

Original size was 480x272 (PSP resolution). I've made it 1.5x bigger here because the original size is tiny.

## Video

### Advert

<iframe width="560" height="315" src="https://www.youtube.com/embed/1e4myqNoe9E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Music by [Just Can't Get Enough - Nouvelle Vague](https://www.youtube.com/watch?v=kcljHWUqLVA). I remember finding the song from a live performance on YouTube (I think).

## Artwork
<img src="assets/MAIN8 copy.jpg" />

## Screenshots

## Assets
