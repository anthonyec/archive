<!-- description: Mini flash website -->
<!-- type: interactive -->
<!-- draft: true -->

# Anthonys World

<div class="flash-player" id="container"></div>
<script src="../assets/ruffle.js"></script>
<script>
  window.RufflePlayer = window.RufflePlayer || {};
  window.addEventListener('load', (event) => {
      const ruffle = window.RufflePlayer.newest();
      const player = ruffle.createPlayer();
      const container = document.getElementById('container');
      container.appendChild(player);
      player.load('ants world indexswf!.swf');
      player.style.width = "600px";
      player.style.height = "500px";
  });
</script>

Flash file powered by [ruffle.rs](https://ruffle.rs/)

## Video

<video src="ants_world.mp4" controls muted></video>

## Assets

These illustrations were done in MSPaint and are the original .BMP files.

![Illustrations of my many faces](ants.bmp)

![Illustration of me on the computer](on%20the%20computer.bmp)

I also drew my mum.

![Illustration of my mum](mummy.bmp)

And my whole family. I was very inspired by The Simpsons and probably had a Simpsons sticker book at the time.

![Illustration of my mum](fronyt%20cover.BMP)

- [Download original Flash file](ants%20world%20indexswf!.swf)

