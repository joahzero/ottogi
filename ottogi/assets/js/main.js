// menu 
var $ww = $(window).width();


$(function(){  

  if($ww > 1023){
    $('.gnb-wrap .gnb-item').mouseover(function(){
      $('.header').addClass('header-white');
      $('.header .gnb-dep02').addClass('on')
    })

    $('.header').mouseleave(function(){
      $('.header').removeClass('header-white');
      $('.header .gnb-dep02').removeClass('on')
    })
  }

  if($ww <= 1023){

    $( '.header .mobile-menu-open' ).click( function() {
      $('.header').addClass('open');
    });

    $( '.header .mobile-menu-close' ).click( function() {
      $('.header').removeClass('open');
      $('.header .header-wrap .logo').css('display','flex');
      $('.header .h-basic .mobile-menu-prev').css('display','none');
      $('.gnb-wrap .gnb-list .gnb-dep02').removeClass('active');
    });

    $( '.gnb-wrap .gnb-list .gnb-item > a' ).click( function() {
      $(this).next('.gnb-dep02').addClass('active');
      $('.header .header-wrap .logo').css('display','none');
      $('.header .h-basic .mobile-menu-prev').css('display','block');
    });

    $( '.header .h-basic .mobile-menu-prev' ).click( function() {
      $(this).css('display','none');
      $('.header .header-wrap .logo').css('display','flex');
      $('.gnb-wrap .gnb-list .gnb-dep02').removeClass('active');
    });

  }



$( '.h-lang .btn-lang' ).click( function(e) {
  if($(this).hasClass('active')){
    $(this).removeClass('active');
    $(this).next('.h-lang-list').stop().slideUp();
  } else {
    $(this).addClass('active');
    $(this).next('.h-lang-list').stop().slideDown();
  }
});


// mainVisual
const mainVisual = new Swiper('.main-visual-wrap', {
  loop: true,
  spaceBetween: 0,
  speed:500,
  // autoplay:true,
  autoplay:{
    delay:3000,
    disableOnInteraction:false,
  },
  pagination:{
    el:".visual-control .swiper-progressbar",
    type: 'progressbar',
  },
  navigation:{
    nextEl:".visual-control .btn-next",
    prevEl:".visual-control .btn-prev",
  },
  on:{
    "init":function(){
      $('.visual-control .swiper-fraction').html(`<span class='count'>0${this.realIndex+1}</span><span class='total'>0${this.slides.length}</span>`)

      // video = this.slides[this.realIndex].querySelector('video')
      

      // if (video) {
      //   this.autoplay.stop();
      //   video.addEventListener('ended', videoEndedHandler);
      // }else{
      //   this.autoplay.start();
      // }
      
    },
     "slideChange":function(){
       $('.visual-control .swiper-fraction').html(`<span class='count'>0${this.realIndex+1}</span><span class='total'>0${this.slides.length}</span>`)

    //   video = this.slides[this.realIndex].querySelector('video')

    //   if (video) {
    //     this.autoplay.stop();
    //     video.addEventListener('ended', videoEndedHandler);
    //   }else{
    //     this.autoplay.start();
    //   }
      
    }
  }
})

function videoEndedHandler() {
  mainVisual.slideNext();
}


$(".main-visual .btn-pause").click(function(){
  mainVisual.autoplay.stop();
  $(".main-visual .main-visual-item .visual-video").get(0).pause(); // 비디오 일시 중지
  $(this).css("display", "none");
  $('.main-visual .btn-play').css("display", "block");
});

$(".main-visual .btn-play").click(function(){
  mainVisual.autoplay.start();
  $(".main-visual .main-visual-item .visual-video").get(0).play(); // 비디오 재생
  $(this).css("display", "none");
  $('.main-visual .btn-pause').css("display", "block");
});




var animation1 = bodymovin.loadAnimation({
  container: $('.about-lottie1')[0], // Required
  path: './assets/data/main-content1-1.json', // URL 직접 입력
  //path: 'data.json', // 실제 사용 폴더 지정 ex) data.json
  renderer: 'svg', // Required
  loop: true, // Optional
  autoplay: true // Optional
});

var animation2 = bodymovin.loadAnimation({
  container: $('.about-lottie2')[0], // Required
  path: './assets/data/main-content1-2.json', // URL 직접 입력
  //path: 'data.json', // 실제 사용 폴더 지정 ex) data.json
  renderer: 'svg', // Required
  loop: true, // Optional
  autoplay: true // Optional
});

var animation3 = bodymovin.loadAnimation({
  container: $('.about-lottie3')[0], // Required
  path: './assets/data/main-content1-3.json', // URL 직접 입력
  //path: 'data.json', // 실제 사용 폴더 지정 ex) data.json
  renderer: 'svg', // Required
  loop: true, // Optional
  autoplay: true // Optional
});



// vision 
if($ww > 1023){
  $('.vision-unit').on("mouseenter", function(){
    $('.vision-unit').removeClass('hoverd');
    $(this).addClass('hoverd');
    return false;
  })
}
if($ww <= 1023){
  $('.vision-unit').removeClass('hoverd');

  const mainVision = new Swiper('.sect-vision .group-vision', {
    speed: 800,
		slidesPerView: 1.12,
		spaceBetween: 30,
		//observer: true,
		//observeParents: true,
  })
}


var animation4 = bodymovin.loadAnimation({
  container: $('.vision-lottie1')[0], // Required
  path: './assets/data/main-vision1.json', // URL 직접 입력
  //path: 'data.json', // 실제 사용 폴더 지정 ex) data.json
  renderer: 'svg', // Required
  loop: true, // Optional
  autoplay: true // Optional
});

var animation5 = bodymovin.loadAnimation({
  container: $('.vision-lottie2')[0], // Required
  path: './assets/data/main-vision2.json', // URL 직접 입력
  //path: 'data.json', // 실제 사용 폴더 지정 ex) data.json
  renderer: 'svg', // Required
  loop: true, // Optional
  autoplay: true // Optional
});

var animation6 = bodymovin.loadAnimation({
  container: $('.vision-lottie3')[0], // Required
  path: './assets/data/main-vision3.json', // URL 직접 입력
  //path: 'data.json', // 실제 사용 폴더 지정 ex) data.json
  renderer: 'svg', // Required
  loop: true, // Optional
  autoplay: true // Optional
});



// mainPro
const mainPro = new Swiper('.main-product-wrap', {
  loop: true,
  speed:500,
  autoplay:true,
  spaceBetween: 0,
  effect : 'fade',
	fadeEffect: {
		crossFade: true
	},
  pagination: {
    el: ".product-control .swiper-fraction",
    type: "fraction",
  },
  navigation:{
    nextEl:".product-control .btn-next",
    prevEl:".product-control .btn-prev",
  },
})

$(".sect-product .btn-pause").click(function(){
  mainPro.autoplay.stop();
  $(this).css("display", "none");
  $('.sect-product .btn-play').css("display", "block");
});

$(".sect-product .btn-play").click(function(){
  mainPro.autoplay.start();
  $(this).css("display", "none");
  $('.sect-product .btn-pause').css("display", "block");
});




// mainNews
var $outw = $(window).outerWidth();
var mainNews; // mainNews 변수를 전역으로 선언

function mainNewsSwiper() {
  if ($outw <= 1023) {
    if (mainNews) {
      mainNews.destroy(); // 이전에 생성된 Swiper 객체 파괴
    }
    mainNews = new Swiper(".main-news-wrap", {
      speed: 600,
      slidesPerView: 1.15,
      spaceBetween: 15,
      observer: true,
      observeParents: true,
    });
  } else if ($outw > 1023) {
    if (mainNews) {
      mainNews.destroy(); // 이전에 생성된 Swiper 객체 파괴
    }
    mainNews = new Swiper(".main-news-wrap", {
      slidesPerView: 3,
      grid: {
        rows: 2,
        fill: 'row',
      },
      loop: false,
      spaceBetween: 30,
      autoplay: false
    });
  }
}

mainNewsSwiper();

$(window).on('resize', function () {
    $outw = $(window).outerWidth(); // 창 너비 다시 할당
    mainNewsSwiper();
});




// mainRecipe
// const mainRecipe = new Swiper('.recipe-list-wrap', {
//   slidesPerView: 4,
//   loop: false,
//   spaceBetween: 30,
//   autoplay:false,
// })
var mainRecipe; // mainNews 변수를 전역으로 선언

function mainRecipeSwiper() {
  if ($outw <= 1023) {
    if (mainRecipe) {
      mainRecipe.destroy(); // 이전에 생성된 Swiper 객체 파괴
    }
    mainRecipe = new Swiper(".recipe-list-wrap", {
      speed: 600,
      slidesPerView: 1.15,
      spaceBetween: 15,
      observer: true,
      observeParents: true,
    });
  } else if ($outw > 1023) {
    if (mainRecipe) {
      mainRecipe.destroy(); // 이전에 생성된 Swiper 객체 파괴
    }
    mainRecipe = new Swiper(".recipe-list-wrap", {
      slidesPerView: 4,
      loop: false,
      spaceBetween: 30,
      autoplay:false,
    });
  }
}

mainRecipeSwiper();

$(window).on('resize', function () {
    $outw = $(window).outerWidth(); // 창 너비 다시 할당
    mainRecipeSwiper();
});



// mainSns
// const mainSns = new Swiper('.main-sns-listwrap', {
//   slidesPerView: 3,
//   grid: {
//     rows: 2, 
//     fill: 'row', 
//   },
//   loop: false,
//   spaceBetween: 30,
//   autoplay:false,
// })
var mainSns; // mainNews 변수를 전역으로 선언

function mainSnsSwiper() {
  if ($outw <= 1023) {
    if (mainSns) {
      mainSns.destroy(); // 이전에 생성된 Swiper 객체 파괴
    }
    mainSns = new Swiper(".main-sns-listwrap.swiper", {
      speed: 600,
      slidesPerView: 1.15,
      spaceBetween: 15,
      observer: true,
      observeParents: true,
    });
  } else if ($outw > 1023) {
    if (mainSns) {
      mainSns.destroy(); // 이전에 생성된 Swiper 객체 파괴
    }
    mainSns = new Swiper(".main-sns-listwrap.swiper", {
      slidesPerView: 3,
      grid: {
        rows: 2, 
        fill: 'row', 
      },
      loop: false,
      spaceBetween: 30,
      autoplay:false,
    });
  }
}

mainSnsSwiper();

$(window).on('resize', function () {
    $outw = $(window).outerWidth(); // 창 너비 다시 할당
    mainSnsSwiper();
});




$('.main-sns-tab a').click(function(e){
  e.preventDefault();

  tabName = $(this).data('tab');

  $('.main-sns-tab a').removeClass('active');
  $(this).addClass('active');
  $(tabName).addClass('active').siblings().removeClass('active');
})



// sidePopup 
$('.side-popup-wrap .btn-open').click(function(){
  $('.side-popup-wrap').addClass("open");
})

$('.side-popup-wrap .btn-close').click(function(){
  $('.side-popup-wrap').removeClass("open");
})


$('.btn-top a').click(function(e){
  e.preventDefault();
  window.scrollTo({top:0, behavior:'smooth'});
})




// slide
window.onload = function() {
  visualTl = gsap.timeline() 
  visualTl.to('.main-visual .main-visual-item .mask',{maskSize: '500% 400%'})
};



$('[data-scroll]').each(function(){
  gsap.from($(this),{
    scrollTrigger:{
      trigger:$(this),
      start:"0% 80%",
      end:"100% 100%",
      // markers:true,
    },
    y:100, opacity:0
  })
})




const globalTl = gsap.timeline({
  scrollTrigger:{
    trigger:".sect-global",
    start:"0% 50%",
    end:"100% 100%",
    // markers:true,
  }
})

globalTl.from('.sect-global h2 .h2-span',{y:100, opacity:0})
globalTl.from('.sect-global h2 .point-red',{y:100, opacity:0})
globalTl.from('.sect-global .description',{y:100, opacity:0})
globalTl.from('.sect-global .more',{y:100, opacity:0})
globalTl.from('.sect-global .global-unit',{
  scale:0,
  stagger:{
    from:'random',
    each:0.2
  }
})

$('[data-delay]').each(function(){
  delayTime=$(this).data('delay')

  fade = gsap.timeline({
    repeat:-1,
    defaults:{
      duration:1,
    }
  })
  fade.to($(this).find('.fade1'),{
    delay:delayTime,
    opacity:0,
    ease:'none'
  })
  fade.to($(this).find('.fade1'),{
    delay:delayTime,
    opacity:1,
    ease:'none'
  })
})


const mainProBg = gsap.timeline({
  scrollTrigger:{
    trigger:".sect-product",
    start:"0% 50%",
    end:"100% 100%",
    // markers:true,
  }
})

mainProBg.to('.sect-product .main-product-bg',{width:"500%", height:"500%"})




});


