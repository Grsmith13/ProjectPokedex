const button = document.getElementById('cat-button');
const audio = document.getElementById('cat-sound');
const catImg = document.createElement('img');
catImg.classList.add('cat-image'); // Add the "cat-image" class
button.addEventListener('click', () => {
  catImg.src = "/static/misc/cat-image.jpg";
  audio.play();
  button.replaceWith(catImg);
  // Remove the cat image after 2 seconds
  setTimeout(() => {
    catImg.remove();
  }, 2000);
});

setInterval(() => {
  const x = Math.floor(Math.random() * window.innerWidth);
  const y = Math.floor(Math.random() * window.innerHeight);
  button.style.transform = `translate(${x}px, ${y}px)`;
}, 2000);

//Sound clip aquired from
// https://soundbible.com/1290-Cat-Meowing.html