document.querySelectorAll('.accordion-head').forEach((el) => {
  el.addEventListener('click', () => {
    let content = el.nextElementSibling;

    if (content.style.maxHeight) {
      document.querySelectorAll('.accordion__content').forEach((el) => {
        el.style.maxHeight = null;
        el.style.marginTop = 0 + "px";
      });
    } else {
      document.querySelectorAll('.accordion__content').forEach((el) => {
        el.style.maxHeight = null;
        el.style.marginTop = 0 + "px";
      });
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.marginTop = 24 + "px";
    }
  })
})

document.querySelectorAll('.tabItem-accordion-head').forEach((el) => {
  el.addEventListener('click', () => {
    let content = el.nextElementSibling;
    let btnPlus = el.children[1].children[0];

    if (content.style.maxHeight) {
      document.querySelectorAll('.tabItem-accordion_content').forEach((el) => {
        el.style.maxHeight = null;
        el.style.marginTop = 0 + "px";
        el.style.marginBottom = 0 + "px";
      });
      document.querySelectorAll(".btn-plus_line").forEach((el) => {
        el.style.transform = "rotate(" + 90 + "deg)";
      })
    } else {
      document.querySelectorAll('.tabItem-accordion_content').forEach((el) => {
        el.style.maxHeight = null;
        el.style.marginTop = 0 + "px";
        el.style.marginBottom = 0 + "px";
      });
      document.querySelectorAll(".btn-plus_line").forEach((el) => {
        el.style.transform = "rotate(" + 90 + "deg)";
      })
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.marginTop = 20 + "px";
      content.style.marginBottom = 20 + "px";
      btnPlus.style.transform = "rotate(" + 0 + "deg)";
    }
  })
})

// document.querySelector('.wpcourses-breadcrumbs').children[1].style.display = "none";
// document.querySelector('.wpcourses-breadcrumbs').children[2].style.display = "none";




