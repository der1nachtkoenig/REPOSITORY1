const btnUp = {
  el: document.querySelector('.btn-up'),
  show() {
    this.el.classList.remove('btn-up_hide');
  },
  hide() {
    this.el.classList.add('btn-up_hide');
  },
  addEventListener() {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      scrollY > 400 ? this.show() : this.hide();
    });
    document.querySelector('.btn-up').onclick = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}
btnUp.addEventListener();

const tabs = document.querySelectorAll('.tabs_items .tabs_item');
const onHashChange = () => {
  const { hash } = window.location;
  let counter = 0;
  for (const tab of tabs) {
    const addCall = () => tab.classList.add('active');

    if (hash && tab.href.includes(hash)) {
      addCall();
    } else if(!hash && counter < 1) {
      addCall();
      counter++;
    } else {
      tab.classList.remove('active');
    }
  }
}


window.addEventListener("hashchange", onHashChange);
onHashChange();
/*const smoothLinks = document.querySelectorAll('a[href^="#main_web_map"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};*/

const swiper = new Swiper (".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});


/*function openMaps(evt, mapName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabs_content");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tabs_btn_item");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(mapName).style.display = "block";
  evt.currentTarget.className += " active";
}*/

/*const tabItem = document.querySelectorAll('.tabs_btn_item');
const tabContent = document.querySelectorAll('.tabs_content_item');

tabItem.forEach(function(element){
  element.addEventListener('click, open');
})

function open(evt) {
  const tabTarget = evt.currentTarget;

  tabItem.forEach(function(item){
    item.classList.remove('tabs_btn_item_active')
  })

  tabTarget.classList.add('tabs_btn_item_active');
}*/