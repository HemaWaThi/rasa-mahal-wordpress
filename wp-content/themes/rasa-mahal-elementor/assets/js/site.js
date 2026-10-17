(function(){
  'use strict';

  function initMenu(scope){
    scope = scope || document;
    const toggle = scope.querySelector ? scope.querySelector('.rasa-menu-toggle') : null;
    const nav = document.querySelector('.rasa-nav');
    if(toggle && nav && !toggle.dataset.rasaInit){
      toggle.dataset.rasaInit='1';
      toggle.addEventListener('click',()=>{
        nav.classList.toggle('open');
        toggle.setAttribute('aria-expanded',nav.classList.contains('open')?'true':'false');
      });
      nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
    }
  }

  function initSlider(scope){
    (scope || document).querySelectorAll('[data-rasa-slider]').forEach(slider=>{
      if(slider.dataset.rasaInit) return;
      slider.dataset.rasaInit='1';
      const track=slider.querySelector('.rasa-dish-track');
      const prev=slider.querySelector('[data-prev]');
      const next=slider.querySelector('[data-next]');
      if(!track) return;

      const distance=()=>{
        const card=track.querySelector('.rasa-dish-card');
        if(!card) return Math.max(280,track.clientWidth*.72);
        const style=getComputedStyle(track);
        return card.getBoundingClientRect().width + (parseFloat(style.gap)||24);
      };
      const move=dir=>track.scrollBy({left:dir*distance(),behavior:'smooth'});
      if(prev) prev.addEventListener('click',()=>move(-1));
      if(next) next.addEventListener('click',()=>move(1));

      let timer=null;
      const autoplay=slider.dataset.autoplay==='yes';
      const delay=parseInt(slider.dataset.delay||'4200',10);
      const start=()=>{
        if(!autoplay || timer) return;
        timer=setInterval(()=>{
          if(track.scrollLeft+track.clientWidth>=track.scrollWidth-20){track.scrollTo({left:0,behavior:'smooth'});}else{move(1);}
        },Math.max(1500,delay));
      };
      const stop=()=>{if(timer){clearInterval(timer);timer=null;}};
      slider.addEventListener('mouseenter',stop);
      slider.addEventListener('mouseleave',start);
      slider.addEventListener('touchstart',stop,{passive:true});
      slider.addEventListener('touchend',start,{passive:true});
      start();
    });
  }

  function initLightbox(scope){
    scope=scope||document;
    const candidate=scope.querySelector('.rasa-lightbox') || document.querySelector('.rasa-lightbox');
    if(!candidate) return;
    const lightbox=candidate;
    if(!lightbox.dataset.rasaShellInit){
      lightbox.dataset.rasaShellInit='1';
      const img=lightbox.querySelector('img');
      const close=lightbox.querySelector('.rasa-lightbox-close');
      const prev=lightbox.querySelector('.rasa-lightbox-prev');
      const next=lightbox.querySelector('.rasa-lightbox-next');
      let items=[],index=0;
      const show=i=>{
        if(!items.length)return;
        index=(i+items.length)%items.length;
        img.src=items[index].dataset.rasaFull||items[index].querySelector('img').src;
        img.alt=items[index].querySelector('img')?.alt||'';
        lightbox.classList.add('active');
        lightbox.setAttribute('aria-hidden','false');
        document.body.style.overflow='hidden';
      };
      lightbox._rasaShow=function(clicked){
        items=Array.from(document.querySelectorAll('[data-rasa-lightbox]')).filter(el=>getComputedStyle(el).display!=='none');
        index=Math.max(0,items.indexOf(clicked));
        show(index);
      };
      const hide=()=>{lightbox.classList.remove('active');lightbox.setAttribute('aria-hidden','true');document.body.style.overflow='';};
      if(close) close.addEventListener('click',hide);
      if(prev) prev.addEventListener('click',()=>show(index-1));
      if(next) next.addEventListener('click',()=>show(index+1));
      lightbox.addEventListener('click',e=>{if(e.target===lightbox)hide();});
      document.addEventListener('keydown',e=>{if(!lightbox.classList.contains('active'))return;if(e.key==='Escape')hide();if(e.key==='ArrowLeft')show(index-1);if(e.key==='ArrowRight')show(index+1);});
    }
    scope.querySelectorAll('[data-rasa-lightbox]').forEach(el=>{
      if(el.dataset.rasaLightboxInit) return;
      el.dataset.rasaLightboxInit='1';
      el.addEventListener('click',e=>{e.preventDefault();const shell=document.querySelector('.rasa-lightbox');if(shell&&shell._rasaShow)shell._rasaShow(el);});
    });
  }


  function initMenuFilters(scope){
    (scope || document).querySelectorAll('[data-rasa-filter-menu]').forEach(menu=>{
      if(menu.dataset.rasaFilterInit) return;
      menu.dataset.rasaFilterInit='1';
      const buttons=Array.from(menu.querySelectorAll('[data-rasa-filter]'));
      const items=Array.from(menu.querySelectorAll('[data-rasa-menu-item]'));
      buttons.forEach(btn=>btn.addEventListener('click',()=>{
        const filter=btn.dataset.rasaFilter||'all';
        buttons.forEach(b=>b.classList.toggle('active',b===btn));
        items.forEach(item=>{
          const show=filter==='all' || item.dataset.rasaMenuItem===filter;
          item.classList.toggle('rasa-filter-hidden',!show);
        });
      }));
    });
  }

  function initAll(scope){initMenu(scope);initSlider(scope);initLightbox(scope);initMenuFilters(scope);}

  document.addEventListener('DOMContentLoaded',()=>initAll(document));

  // Re-initialize when Elementor renders a widget in the editor or frontend.
  window.addEventListener('elementor/frontend/init',()=>{
    if(!window.elementorFrontend || !elementorFrontend.hooks) return;
    const widgets=['rasa_popular_dishes','rasa_gallery','rasa_menu_gallery','rasa_home_hero','rasa_intro','rasa_home_links','rasa_page_hero','rasa_about','rasa_reservation','rasa_contact','rasa_cta','rasa_special_categories','rasa_signature_menu','rasa_reviews'];
    widgets.forEach(name=>{
      elementorFrontend.hooks.addAction('frontend/element_ready/'+name+'.default',function($scope){
        const node=$scope && $scope[0] ? $scope[0] : document;
        initAll(node);
      });
    });
  });
})();
