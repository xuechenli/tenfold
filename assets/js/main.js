!function(a){var b=a(document).attr("title");window.onblur=function(){document.title="Check this out"},window.onfocus=function(){document.title=b},skel.breakpoints({xlarge:"(max-width: 1680px)",large:"(max-width: 1280px)",medium:"(max-width: 980px)",small:"(max-width: 736px)",xsmall:"(max-width: 480px)",xxsmall:"(max-width: 360px)"}),a(function(){a(".collapse").on("click",function(b){b.preventDefault(),a(this).toggleClass("active")}),$body.addClass("is-loading"),$window.on("load",function(){window.setTimeout(function(){$body.removeClass("is-loading")},100)});responsiveNav(".nav-collapse");a("form").placeholder(),skel.on("+medium -medium",function(){a.prioritize(".important\\28 medium\\29",skel.breakpoint("medium").active)}),"ie"==skel.vars.browser&&function(){var b;$window.on("resize.flexbox-fix",function(){var c=a(".fullscreen");clearTimeout(b),b=setTimeout(function(){c.prop("scrollHeight")>$window.height()?c.css("height","auto"):c.css("height","100vh")},250)}).triggerHandler("resize.flexbox-fix")}(),skel.canUse("object-fit")||function(){a(".banner .image, .spotlight .image").each(function(){var b=a(this),c=b.children("img"),d=b.parent().attr("class").match(/image-position-([a-z]+)/);switch(b.css("background-image",'url("'+c.attr("src")+'")').css("background-repeat","no-repeat").css("background-size","cover"),d.length>1?d[1]:""){case"left":b.css("background-position","left");break;case"right":b.css("background-position","right");break;default:case"center":b.css("background-position","center")}c.css("opacity","0")})}(),a(".smooth-scroll").scrolly(),a(".smooth-scroll-middle").scrolly({anchor:"middle"}),$wrapper.children().scrollex({top:"30vh",bottom:"30vh",initialize:function(){a(this).addClass("is-inactive")},terminate:function(){a(this).removeClass("is-inactive")},enter:function(){a(this).removeClass("is-inactive")},leave:function(){var b=a(this);b.hasClass("onscroll-bidirectional")&&b.addClass("is-inactive")}})})}(jQuery);
