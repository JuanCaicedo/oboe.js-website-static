var NarrativeView = (function () {

    var NarrativeView = extend(ThingView, function NarrativeView(demo, demoView) {
        ThingView.apply(this, arguments);
        
        this.jDom = 
            demoView.jDom.find('.narrative')
               .add( demoView.jDom.filter('.narrative') )
               .hide();
    });

    NarrativeView.prototype.scaleAt = function( jEle ){
       // bit of a hack here:
       return jEle.parents('[data-scale]').attr('data-scale');
    };

    NarrativeView.prototype.captionPositionOnSmall = function( highlightPosition ){
       var demoWidth = this.subject.demo.width,
           halfWidth = (demoWidth * 0.5),
           highlightCloserToRight = (highlightPosition.x > halfWidth);
       
       return {
          x: 0, y: 0,
          verticalSide: "top",
          horizontalSide: (highlightCloserToRight? 'left' : 'right')
       }
    };
   
    NarrativeView.prototype.captionPosition = function( highlightPosition ){

       var demoWidth = this.subject.demo.width,
           demoHeight = this.subject.demo.height,
           halfWidth = (demoWidth * 0.5),
           HIGHLIGHT_SIZE = 100,
           highlightFromLeft = highlightPosition.x,
           highlightCloserToRight = (highlightPosition.x > halfWidth),
           highlightCloserToBottom = (highlightPosition.y > (demoHeight / 2)),
           flipVert = false,
           result = {},
           x;
       
       if( highlightCloserToRight ) {

          var highlightFromRight = demoWidth - highlightPosition.x;
          x = highlightFromRight + HIGHLIGHT_SIZE;
          result.horizontalSide = 'right';
       } else {

          x = highlightFromLeft + HIGHLIGHT_SIZE;
          result.horizontalSide = 'left';
       }
       
       var maxX = demoWidth * 0.45;
       
       if( x > maxX ) {
          x = maxX;
          flipVert = true;
       }

       result.x = x;
       result.y = '15';

       var relateToTop = (flipVert ? highlightCloserToBottom : !highlightCloserToBottom);
       result.verticalSide = relateToTop ? 'top' : 'bottom';
       
       return result;
    };
   
    NarrativeView.prototype.positionLightboxHighlightAt = function( topic, location ){

       var jLightbox = this.jDom.filter('.lightbox');
       this.putAtXy(jLightbox, 'translateX', 'translateY', location);
      
       var scale = this.scaleAt(jLightbox),
           isSmall = scale < 1,
           captionLocation = (isSmall ? this.captionPositionOnSmall(location) 
                                      : this.captionPosition(location));

       this.jDom.filter('div.narrative')
                   .css( {left:'', right:'', top:'', bottom:''} )
                   .css( 'text-align', captionLocation.horizontalSide )
                   .css( captionLocation.horizontalSide, captionLocation.x * scale * topic.zoom)
                   .css( captionLocation.verticalSide,   captionLocation.y * scale * topic.zoom);
    };
   
    NarrativeView.prototype.showText = function( text ){
       this.jDom.find('.label').text(text);
    };   
    
    NarrativeView.prototype.showItem = function( narrativeItem ){
        var text = narrativeItem.text,
            topic = narrativeItem.topic,
            locationOnTopic = narrativeItem.locationOnTopic,
            location = topic.locations[locationOnTopic];
       
        this.showText(text);
        this.positionLightboxHighlightAt(topic, location);
        this.setZoom(topic.zoom);
        this.jDom.fadeIn();

        this.jDom.filter('.demoCaption').one('click', function(){
           
            narrativeItem.dismiss();
            return false;
        });
    };

    NarrativeView.prototype.hideItem = function(){
        // event handler might still be on the element if narrative was 
        // dismissed in some way other than clicking the 'dismiss' link,
        // for example by clicking 'reset' 
        this.jDom.filter('.demoCaption').off();
        this.jDom.fadeOut();
    };
    
    NarrativeView.prototype.displayItem = function( narrativeItem ){

        narrativeItem.events('activated').on(this.showItem.bind(this));

        narrativeItem.events('reset').on(this.hideItem.bind(this));
        narrativeItem.events('deactivated').on(this.hideItem.bind(this));
    };
    
    NarrativeView.newEvent = 'NarrativeView';

    return NarrativeView;
}());
