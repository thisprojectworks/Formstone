/*! formstone v0.9.0 [lightbox.js] 2016-03-13 | MIT License | formstone.it */

!function(a,b,c){"use strict";function d(){X=b.$body,Y=a("html, body"),Z=b.window.location.hash.replace("#","")}function e(){_&&j()}function f(a){this.on(T.click,a,i);var b=this.data(P+"-gallery");!$&&Z&&b===Z&&($=!0,this.trigger(T.click))}function g(){k(),this.off(T.namespace)}function h(b,c){b instanceof a&&i.apply(V,[{data:a.extend(!0,{},{$object:b},Q,c||{})}])}function i(c){if(!_){var d=c.data,e=d.$el,f=d.$object,g=e&&e[0].href?e[0].href||"":"",h=e&&e[0].hash?e[0].hash||"":"",i=(g.toLowerCase().split(".").pop().split(/\#|\?/),e?e.data(P+"-type"):""),j="image"===i||g.match(d.fileTypes)||"data:image"===g.substr(0,10),l=N(g),m="url"===i||!j&&!l&&"http"===g.substr(0,4)&&!h,o="element"===i||!j&&!l&&!m&&"#"===h.substr(0,1),q="undefined"!=typeof f;if(o&&(g=h),!(j||l||m||o||q))return;if(U.killEvent(c),_=a.extend({},{visible:!1,gallery:{active:!1},isMobile:b.isMobile||d.mobile,isTouch:b.support.touch,isAnimating:!0,oldContentHeight:0,oldContentWidth:0},d),_.touch=d.touch&&_.isMobile&&_.isTouch,_.margin*=2,_.type=j?"image":l?"video":"element",j||l){var r=e.data(P+"-gallery");r&&(_.gallery.active=!0,_.gallery.id=r,_.gallery.$items=a("a[data-lightbox-gallery= "+_.gallery.id+"], a[rel= "+_.gallery.id+"]"),_.gallery.index=_.gallery.$items.index(_.$el),_.gallery.total=_.gallery.$items.length-1)}var t="";_.isMobile||(t+='<div class="'+[R.raw.overlay,_.theme,_.customClass].join(" ")+'"></div>');var u=[R.raw.base,R.raw.loading,R.raw.animating,_.theme,_.customClass];_.fixed&&u.push(R.raw.fixed),_.isMobile&&u.push(R.raw.mobile),_.isTouch&&u.push(R.raw.touch),m&&u.push(R.raw.iframed),(o||q)&&u.push(R.raw.inline),t+='<div class="'+u.join(" ")+'">',t+='<button type="button" class="'+R.raw.close+'">'+_.labels.close+"</button>",t+='<span class="'+R.raw.loading_icon+'"></span>',t+='<div class="'+R.raw.container+'">',t+='<div class="'+R.raw.content+'">',(j||l)&&(t+='<div class="'+R.raw.tools+'">',t+='<div class="'+R.raw.controls+'">',_.gallery.active&&(t+='<button type="button" class="'+[R.raw.control,R.raw.control_previous].join(" ")+'">'+_.labels.previous+"</button>",t+='<button type="button" class="'+[R.raw.control,R.raw.control_next].join(" ")+'">'+_.labels.next+"</button>"),_.isMobile&&_.isTouch&&(t+='<button type="button" class="'+[R.raw.caption_toggle].join(" ")+'">'+_.labels.captionClosed+"</button>"),t+="</div>",t+='<div class="'+R.raw.meta+'">',_.gallery.active&&(t+='<p class="'+R.raw.position+'"',_.gallery.total<1&&(t+=' style="display: none;"'),t+=">",t+='<span class="'+R.raw.position_current+'">'+(_.gallery.index+1)+"</span> ",t+=_.labels.count,t+=' <span class="'+R.raw.position_total+'">'+(_.gallery.total+1)+"</span>",t+="</p>"),t+='<div class="'+R.raw.caption+'">',t+=_.formatter.call(e,d),t+="</div></div>",t+="</div>"),t+="</div></div></div>",X.append(t),_.$overlay=a(R.overlay),_.$lightbox=a(R.base),_.$close=a(R.close),_.$container=a(R.container),_.$content=a(R.content),_.$tools=a(R.tools),_.$meta=a(R.meta),_.$position=a(R.position),_.$caption=a(R.caption),_.$controlBox=a(R.controls),_.$controls=a(R.control),_.isMobile?(_.paddingVertical=_.$close.outerHeight(),_.paddingHorizontal=0,_.mobilePaddingVertical=parseInt(_.$content.css("paddingTop"),10)+parseInt(_.$content.css("paddingBottom"),10),_.mobilePaddingHorizontal=parseInt(_.$content.css("paddingLeft"),10)+parseInt(_.$content.css("paddingRight"),10)):(_.paddingVertical=parseInt(_.$lightbox.css("paddingTop"),10)+parseInt(_.$lightbox.css("paddingBottom"),10),_.paddingHorizontal=parseInt(_.$lightbox.css("paddingLeft"),10)+parseInt(_.$lightbox.css("paddingRight"),10),_.mobilePaddingVertical=0,_.mobilePaddingHorizontal=0),_.contentHeight=_.$lightbox.outerHeight()-_.paddingVertical,_.contentWidth=_.$lightbox.outerWidth()-_.paddingHorizontal,_.controlHeight=_.$controls.outerHeight(),n(),_.gallery.active&&(_.$lightbox.addClass(S.has_controls),E()),W.on(T.keyDown,F),X.on(T.click,[R.overlay,R.close].join(", "),k),_.gallery.active&&_.$lightbox.on(T.click,R.control,D),_.isMobile&&_.isTouch&&_.$lightbox.on(T.click,R.caption_toggle,p),_.$lightbox.fsTransition({property:"opacity"},function(){j?s(g):l?A(g):m?I(g):o?G(g):q&&J(_.$object)}).addClass(R.raw.open),_.$overlay.addClass(R.raw.open)}}function j(a){"object"!=typeof a&&(_.targetHeight=arguments[0],_.targetWidth=arguments[1]),"element"===_.type?K(_.$content.find("> :first-child")):"image"===_.type?y():"video"===_.type&&B(),m()}function k(a){U.killEvent(a),_&&(_.$lightbox.fsTransition("destroy"),_.$container.fsTransition("destroy"),t(),_.$lightbox.addClass(R.raw.animating).fsTransition({property:"opacity"},function(){_.$inlineTarget.length&&H(),_.$lightbox.off(T.namespace),_.$container.off(T.namespace),W.off(T.keyDown),X.off(T.namespace),_.$overlay.remove(),_.$lightbox.remove(),_=null,W.trigger(T.close)}),_.$lightbox.removeClass(R.raw.open),_.$overlay.removeClass(R.raw.open),_.isMobile&&Y.removeClass(S.lock))}function l(){{var a=o();_.isMobile?0:_.duration}_.isMobile||_.$controls.css({marginTop:(_.contentHeight-_.controlHeight-_.metaHeight)/2}),_.$lightbox.fsTransition({property:_.contentHeight!==_.oldContentHeight?"height":"width"},function(){_.$container.fsTransition({property:"opacity"},function(){_.$lightbox.removeClass(R.raw.animating),_.isAnimating=!1}),_.$lightbox.removeClass(R.raw.loading),_.visible=!0,W.trigger(T.open),_.gallery.active&&C()}),_.isMobile||_.$lightbox.css({height:_.contentHeight+_.paddingVertical,width:_.contentWidth+_.paddingHorizontal,top:_.fixed?0:a.top});var b=_.oldContentHeight!==_.contentHeight||_.oldContentWidth!==_.contentWidth;(_.isMobile||!b)&&_.$lightbox.fsTransition("resolve"),_.oldContentHeight=_.contentHeight,_.oldContentWidth=_.contentWidth,_.isMobile&&Y.addClass(S.lock)}function m(){if(_.visible&&!_.isMobile){var a=o();_.$controls.css({marginTop:(_.contentHeight-_.controlHeight-_.metaHeight)/2}),_.$lightbox.css({height:_.contentHeight+_.paddingVertical,width:_.contentWidth+_.paddingHorizontal,top:_.fixed?0:a.top})}}function n(){var a=o();_.$lightbox.css({top:_.fixed?0:a.top})}function o(){if(_.isMobile)return{left:0,top:0};var a={left:(b.windowWidth-_.contentWidth-_.paddingHorizontal)/2,top:_.top<=0?(b.windowHeight-_.contentHeight-_.paddingVertical)/2:_.top};return _.fixed!==!0&&(a.top+=W.scrollTop()),a}function p(a){U.killEvent(a),_.captionOpen?q():(_.$lightbox.addClass(R.raw.caption_open).find(R.caption_toggle).text(_.labels.captionOpen),_.captionOpen=!0)}function q(){_.$lightbox.removeClass(R.raw.caption_open).find(R.caption_toggle).text(_.labels.captionClosed),_.captionOpen=!1}function r(){var a=this.attr("title"),b=a!==c&&a?a.replace(/^\s+|\s+$/g,""):!1;return b?'<p class="caption">'+b+"</p>":""}function s(b){_.hasScaled=!1,_.$imageContainer=a('<div class="'+R.raw.image_container+'"><img></div>'),_.$image=_.$imageContainer.find("img"),_.$image.one(T.load,function(){var a=M(_.$image);_.naturalHeight=a.naturalHeight,_.naturalWidth=a.naturalWidth,_.retina&&(_.naturalHeight/=2,_.naturalWidth/=2),_.$content.prepend(_.$imageContainer),""===_.$caption.html()?(_.$caption.hide(),_.$lightbox.removeClass(S.has_caption)):(_.$caption.show(),_.$lightbox.addClass(S.has_caption)),y(),l(),_.touch&&(u(),w({scale:1,deltaX:0,deltaY:0}),x(),_.$container.fsTouch({pan:!0,scale:!0}).on(T.scaleStart,v).on(T.scaleEnd,x).on(T.scale,w))}).error(L).attr("src",b).addClass(R.raw.image),(_.$image[0].complete||4===_.$image[0].readyState)&&_.$image.trigger(T.load)}function t(){_.$image&&_.$image.length&&_.$container.fsTouch("destroy")}function u(){_.scalePosition=_.$imageContainer.position(),_.scaleY=_.scalePosition.top,_.scaleX=_.scalePosition.left,_.scaleHeight=_.$image.outerHeight(),_.scaleWidth=_.$image.outerWidth()}function v(){u(),_.$lightbox.removeClass(R.raw.animating)}function w(a){_.targetContainerY=_.scaleY+a.deltaY,_.targetContainerX=_.scaleX+a.deltaX,_.targetImageHeight=_.scaleHeight*a.scale,_.targetImageWidth=_.scaleWidth*a.scale,_.targetImageHeight<_.scaleMinHeight&&(_.targetImageHeight=_.scaleMinHeight),_.targetImageHeight>_.scaleMaxHeight&&(_.targetImageHeight=_.scaleMaxHeight),_.targetImageWidth<_.scaleMinWidth&&(_.targetImageWidth=_.scaleMinWidth),_.targetImageWidth>_.scaleMaxWidth&&(_.targetImageWidth=_.scaleMaxWidth),_.hasScaled=!0,_.isScaling=!0,_.$imageContainer.css({top:_.targetContainerY,left:_.targetContainerX}),_.$image.css({height:_.targetImageHeight,width:_.targetImageWidth,top:-(_.targetImageHeight/2),left:-(_.targetImageWidth/2)})}function x(){u(),_.isScaling=!1;var a=_.$container.outerHeight()-_.metaHeight,b=_.$container.outerWidth();_.scaleMinY=a-_.scaleHeight/2,_.scaleMinX=b-_.scaleWidth/2,_.scaleMaxY=_.scaleHeight/2,_.scaleMaxX=_.scaleWidth/2,_.scaleHeight<a?_.scalePosition.top=a/2:(_.scalePosition.top<_.scaleMinY&&(_.scalePosition.top=_.scaleMinY),_.scalePosition.top>_.scaleMaxY&&(_.scalePosition.top=_.scaleMaxY)),_.scaleWidth<b?_.scalePosition.left=b/2:(_.scalePosition.left<_.scaleMinX&&(_.scalePosition.left=_.scaleMinX),_.scalePosition.left>_.scaleMaxX&&(_.scalePosition.left=_.scaleMaxX)),_.$lightbox.addClass(R.raw.animating),_.$imageContainer.css({left:_.scalePosition.left,top:_.scalePosition.top})}function y(){if(_.$image){var a=0;for(_.windowHeight=_.viewportHeight=b.windowHeight-_.mobilePaddingVertical-_.paddingVertical,_.windowWidth=_.viewportWidth=b.windowWidth-_.mobilePaddingHorizontal-_.paddingHorizontal,_.contentHeight=1/0,_.contentWidth=1/0,_.imageMarginTop=0,_.imageMarginLeft=0;_.contentHeight>_.viewportHeight&&2>a;)_.imageHeight=0===a?_.naturalHeight:_.$image.outerHeight(),_.imageWidth=0===a?_.naturalWidth:_.$image.outerWidth(),_.metaHeight=0===a?0:_.metaHeight,_.spacerHeight=0===a?0:_.spacerHeight,0===a&&(_.ratioHorizontal=_.imageHeight/_.imageWidth,_.ratioVertical=_.imageWidth/_.imageHeight,_.isWide=_.imageWidth>_.imageHeight),_.imageHeight<_.minHeight&&(_.minHeight=_.imageHeight),_.imageWidth<_.minWidth&&(_.minWidth=_.imageWidth),_.isMobile?(_.isTouch?(_.$controlBox.css({width:b.windowWidth}),_.spacerHeight=_.$controls.outerHeight(!0)):(_.$tools.css({width:b.windowWidth}),_.spacerHeight=_.$tools.outerHeight(!0)),_.contentHeight=_.viewportHeight,_.contentWidth=_.viewportWidth,z(),_.imageMarginTop=(_.contentHeight-_.targetImageHeight-_.spacerHeight)/2,_.imageMarginLeft=(_.contentWidth-_.targetImageWidth)/2):(0===a&&(_.viewportHeight-=_.margin+_.paddingVertical,_.viewportWidth-=_.margin+_.paddingHorizontal),_.viewportHeight-=_.metaHeight,z(),_.contentHeight=_.targetImageHeight,_.contentWidth=_.targetImageWidth),_.isMobile||_.isTouch||_.$meta.css({width:_.contentWidth}),_.hasScaled||(_.$image.css({height:_.targetImageHeight,width:_.targetImageWidth}),_.$image.css(_.touch?{top:-(_.targetImageHeight/2),left:-(_.targetImageWidth/2)}:{marginTop:_.imageMarginTop,marginLeft:_.imageMarginLeft})),_.isMobile||(_.metaHeight=_.$meta.outerHeight(!0),_.contentHeight+=_.metaHeight),a++;_.touch&&(_.scaleMinHeight=_.targetImageHeight,_.scaleMinWidth=_.targetImageWidth,_.scaleMaxHeight=_.naturalHeight,_.scaleMaxWidth=_.naturalWidth)}}function z(){var a=_.isMobile?_.contentHeight-_.spacerHeight:_.viewportHeight,b=_.isMobile?_.contentWidth:_.viewportWidth;_.isWide?(_.targetImageWidth=b,_.targetImageHeight=_.targetImageWidth*_.ratioHorizontal,_.targetImageHeight>a&&(_.targetImageHeight=a,_.targetImageWidth=_.targetImageHeight*_.ratioVertical)):(_.targetImageHeight=a,_.targetImageWidth=_.targetImageHeight*_.ratioVertical,_.targetImageWidth>b&&(_.targetImageWidth=b,_.targetImageHeight=_.targetImageWidth*_.ratioHorizontal)),(_.targetImageWidth>_.imageWidth||_.targetImageHeight>_.imageHeight)&&(_.targetImageHeight=_.imageHeight,_.targetImageWidth=_.imageWidth),(_.targetImageWidth<_.minWidth||_.targetImageHeight<_.minHeight)&&(_.targetImageWidth<_.minWidth?(_.targetImageWidth=_.minWidth,_.targetImageHeight=_.targetImageWidth*_.ratioHorizontal):(_.targetImageHeight=_.minHeight,_.targetImageWidth=_.targetImageHeight*_.ratioVertical))}function A(b){var c=b.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i),d=b.match(/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/),e=b.split("?"),f=null!==c?"//www.youtube.com/embed/"+c[1]:"//player.vimeo.com/video/"+d[3];e.length>=2&&(f+="?"+e.slice(1)[0].trim()),_.$videoWrapper=a('<div class="'+R.raw.video_wrapper+'"></div>'),_.$video=a('<iframe class="'+R.raw.video+'" frameborder="0" seamless="seamless" allowfullscreen></iframe>'),_.$video.attr("src",f).addClass(R.raw.video).prependTo(_.$videoWrapper),_.$content.prepend(_.$videoWrapper),B(),l()}function B(){_.windowHeight=_.viewportHeight=b.windowHeight-_.mobilePaddingVertical-_.paddingVertical,_.windowWidth=_.viewportWidth=b.windowWidth-_.mobilePaddingHorizontal-_.paddingHorizontal,_.videoMarginTop=0,_.videoMarginLeft=0,_.isMobile?(_.isTouch?(_.$controlBox.css({width:b.windowWidth}),_.spacerHeight=_.$controls.outerHeight(!0)):(_.$tools.css({width:b.windowWidth}),_.spacerHeight=_.$tools.outerHeight(!0)),_.viewportHeight-=_.spacerHeight,_.targetVideoWidth=_.viewportWidth,_.targetVideoHeight=_.targetVideoWidth*_.videoRatio,_.targetVideoHeight>_.viewportHeight&&(_.targetVideoHeight=_.viewportHeight,_.targetVideoWidth=_.targetVideoHeight/_.videoRatio),_.videoMarginTop=(_.viewportHeight-_.targetVideoHeight)/2,_.videoMarginLeft=(_.viewportWidth-_.targetVideoWidth)/2):(_.viewportHeight=_.windowHeight-_.margin,_.viewportWidth=_.windowWidth-_.margin,_.targetVideoWidth=_.videoWidth>_.viewportWidth?_.viewportWidth:_.videoWidth,_.targetVideoWidth<_.minWidth&&(_.targetVideoWidth=_.minWidth),_.targetVideoHeight=_.targetVideoWidth*_.videoRatio,_.contentHeight=_.targetVideoHeight,_.contentWidth=_.targetVideoWidth),_.isMobile||_.isTouch||_.$meta.css({width:_.contentWidth}),_.$videoWrapper.css({height:_.targetVideoHeight,width:_.targetVideoWidth,marginTop:_.videoMarginTop,marginLeft:_.videoMarginLeft}),_.isMobile||(_.metaHeight=_.$meta.outerHeight(!0),_.contentHeight=_.targetVideoHeight+_.metaHeight)}function C(){var b="";_.gallery.index>0&&(b=_.gallery.$items.eq(_.gallery.index-1).attr("href"),N(b)||a('<img src="'+b+'">')),_.gallery.index<_.gallery.total&&(b=_.gallery.$items.eq(_.gallery.index+1).attr("href"),N(b)||a('<img src="'+b+'">'))}function D(b){U.killEvent(b);var c=a(b.currentTarget);_.isAnimating||c.hasClass(R.raw.control_disabled)||(_.isAnimating=!0,t(),q(),_.gallery.index+=c.hasClass(R.raw.control_next)?1:-1,_.gallery.index>_.gallery.total&&(_.gallery.index=_.infinite?0:_.gallery.total),_.gallery.index<0&&(_.gallery.index=_.infinite?_.gallery.total:0),_.$lightbox.addClass(R.raw.animating),_.$container.fsTransition({property:"opacity"},function(){"undefined"!=typeof _.$imageContainer&&_.$imageContainer.remove(),"undefined"!=typeof _.$videoWrapper&&_.$videoWrapper.remove(),_.$el=_.gallery.$items.eq(_.gallery.index),_.$caption.html(_.formatter.call(_.$el,_)),_.$position.find(R.position_current).html(_.gallery.index+1);var a=_.$el.attr("href"),b=N(a);b?(_.type="video",A(a)):(_.type="image",s(a)),E()}),_.$lightbox.addClass(R.raw.loading))}function E(){_.$controls.removeClass(R.raw.control_disabled),_.infinite||(0===_.gallery.index&&_.$controls.filter(R.control_previous).addClass(S.control_disabled),_.gallery.index===_.gallery.total&&_.$controls.filter(R.control_next).addClass(S.control_disabled))}function F(a){!_.gallery.active||37!==a.keyCode&&39!==a.keyCode?27===a.keyCode&&_.$close.trigger(T.click):(U.killEvent(a),_.$controls.filter(37===a.keyCode?R.control_previous:R.control_next).trigger(T.click))}function G(b){_.$inlineTarget=a(b),_.$inlineContents=_.$inlineTarget.children().detach(),J(_.$inlineContents)}function H(){_.$inlineTarget.append(_.$inlineContents.detach()),_.$inlineTarget=null,_.$inlineContents=null}function I(b){b+=b.indexOf("?")>-1?"&"+_.requestKey+"=true":"?"+_.requestKey+"=true";var c=a('<iframe class="'+R.raw.iframe+'" src="'+b+'"></iframe>');J(c)}function J(a){_.$content.append(a),K(a),l()}function K(a){_.windowHeight=b.windowHeight-_.mobilePaddingVertical-_.paddingVertical,_.windowWidth=b.windowWidth-_.mobilePaddingHorizontal-_.paddingHorizontal,_.objectHeight=a.outerHeight(!0),_.objectWidth=a.outerWidth(!0),_.targetHeight=_.targetHeight||(_.$el?_.$el.data(P+"-height"):null),_.targetWidth=_.targetWidth||(_.$el?_.$el.data(P+"-width"):null),_.maxHeight=_.windowHeight<0?_.minHeight:_.windowHeight,_.isIframe=a.is("iframe"),_.objectMarginTop=0,_.objectMarginLeft=0,_.isMobile||(_.windowHeight-=_.margin,_.windowWidth-=_.margin),_.contentHeight=_.targetHeight?_.targetHeight:_.isIframe||_.isMobile?_.windowHeight:_.objectHeight,_.contentWidth=_.targetWidth?_.targetWidth:_.isIframe||_.isMobile?_.windowWidth:_.objectWidth,(_.isIframe||_.isObject)&&_.isMobile?(_.contentHeight=_.windowHeight,_.contentWidth=_.windowWidth):_.isObject&&(_.contentHeight=_.contentHeight>_.windowHeight?_.windowHeight:_.contentHeight,_.contentWidth=_.contentWidth>_.windowWidth?_.windowWidth:_.contentWidth)}function L(){var b=a('<div class="'+R.raw.error+'"><p>Error Loading Resource</p></div>');_.type="element",_.$tools.remove(),_.$image.off(T.namespace),J(b)}function M(a){var b=a[0],c=new Image;return"undefined"!=typeof b.naturalHeight?{naturalHeight:b.naturalHeight,naturalWidth:b.naturalWidth}:"img"===b.tagName.toLowerCase()?(c.src=b.src,{naturalHeight:c.height,naturalWidth:c.width}):!1}function N(a){return a.indexOf("youtube.com")>-1||a.indexOf("youtu.be")>-1||a.indexOf("vimeo.com")>-1}var O=b.Plugin("lightbox",{widget:!0,defaults:{customClass:"",fileTypes:/\.(jpg|sjpg|jpeg|png|gif)$/i,fixed:!1,formatter:r,infinite:!1,labels:{close:"Close",count:"of",next:"Next",previous:"Previous",captionClosed:"View Caption",captionOpen:"Close Caption"},margin:50,minHeight:100,minWidth:100,mobile:!1,retina:!1,requestKey:"fs-lightbox",theme:"fs-light",top:0,touch:!0,videoRatio:.5625,videoWidth:800},classes:["loading","animating","fixed","mobile","touch","inline","iframed","open","overlay","close","loading_icon","container","content","image","image_container","video","video_wrapper","tools","meta","controls","control","control_previous","control_next","control_disabled","position","position_current","position_total","caption_toggle","caption","caption_open","has_controls","has_caption","iframe","error","lock"],events:{open:"open",close:"close"},methods:{_setup:d,_construct:f,_destruct:g,_resize:e,resize:j},utilities:{_initialize:h,close:k}}),P=O.namespace,Q=O.defaults,R=O.classes,S=R.raw,T=O.events,U=O.functions,V=b.window,W=b.$window,X=null,Y=null,Z=!1,$=!1,_=null}(jQuery,Formstone);