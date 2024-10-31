document.querySelector(".hamburgers").addEventListener('click', () => {
  if (document.querySelector(".hamburgers").classList.contains('active')) {
    document.querySelector('.nav').style.left = "-" + 100 + "%";
    document.querySelector(".hamburgers").classList.remove('active');
    document.querySelector("body").classList.remove('hidden');
  } else {
    document.querySelector('.nav').style.left = 0;
    document.querySelector(".hamburgers").classList.add('active');
    document.querySelector("body").classList.add('hidden');
  }
})


document.querySelectorAll(".nav__link").forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelector('.nav').style.left = "-" + 100 + "%";
    document.querySelector(".hamburgers").classList.remove('active');
    document.querySelector("body").classList.remove('hidden');
  })
})

// const anchors = document.querySelectorAll('a[href*="#"]');
// anchors.forEach(anchor => {
//   anchor.addEventListener('click', event => {
//     event.preventDefault();

//     const blockId = anchor.getAttribute('href').substring(1);
//     console.log(blockId);

//     document.getElementById(blockId).scrollIntoView({
//       behavior: 'smooth',
//       block: 'start'
//     })
//   })
// })
