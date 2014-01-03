var NarrativeView = (function () {

    var NarrativeView = extend(ThingView, function NarrativeView(demo, demoView) {
        ThingView.apply(this, arguments);
        
        this.jDom = demoView.jDom.find('.lightbox').hide();
    });

    NarrativeView.prototype.positionHighlightAt = function( location ){
        this.goToXy('translateX', 'translateY', location);
    };

    NarrativeView.prototype.showText = function( text ){
        this.jDom.find('p').text(text);
    };   
    
    NarrativeView.prototype.showItem = function( narrativeItem ){
        var text = narrativeItem.text,
            topic = narrativeItem.topic,
            locationOnTopic = narrativeItem.locationOnTopic,
            location = topic.locations[locationOnTopic];
       
        this.showText(text);
        this.positionHighlightAt(location);
        this.jDom.show();
    };

    NarrativeView.prototype.hideItem = function(){
        this.jDom.hide();
    };
    
    NarrativeView.prototype.displayItem = function( narrativeItem ){

        var jLightbox = this.jDom;

        narrativeItem.events('activated').on(this.showItem.bind(this));

        narrativeItem.events('reset').on(this.hideItem.bind(this));
        narrativeItem.events('deactivated').on(this.hideItem.bind(this));

        jLightbox.click(function(){
            narrativeItem.dismiss();
        });
    };
    
    NarrativeView.newEvent = 'NarrativeView';

    return NarrativeView;
}());