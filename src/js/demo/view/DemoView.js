var DemoView = extend(ThingView, function(demo){
    ThingView.apply(this,arguments);

    var containerFigure = $("[data-demo=" + demo.name + "]");
   
    this.jDom = stampFromTemplate($('#demo'), demo.colors)
                  .add( stampFromTemplate($('#demoCaption')) );
   
    containerFigure.append( this.jDom );

    this.baseWidth  = demo.width;
    this.baseHeight = demo.height;
    this.setDimensions(this.baseHeight, this.scalingFactor());

    this.initSubviewCreation();
 
    this.resizeWithWindow();

    this.setupControls();
    
    this.showNewNarrativeItems();
   
    demo.events('started').on(function(){
       addClass(this.jDom, 'playing');
    }.bind(this));
   
    demo.events('reset').on(function(){
       removeClass(this.jDom, 'playing');
    }.bind(this));

   demo.events('paused').on(function(){
      addClass(this.jDom, 'paused');
   }.bind(this));

   demo.events('unpaused').on(function(){
      removeClass(this.jDom, 'paused');
   }.bind(this));   
});

DemoView.prototype.withNarrativeView = function(narrativeView){
    this.narrativeView = narrativeView;
};

DemoView.prototype.resizeWithWindow = function(){
    $( window ).resize(function() {
        this.setDimensions(this.baseHeight, this.scalingFactor());
    }.bind(this));
};

DemoView.prototype.showNewNarrativeItems = function(){
    this.subject.events('NarrativeItem').on(function(narrativeItem){
        
        this.narrativeView.displayItem(narrativeItem);
    }.bind(this));
};

DemoView.prototype.initSubviewCreation = function(){
    this.createNewViewsForNewModelItems(Packet, PacketView);
    this.createNewViewsForNewModelItems(Message, MessageView);
    this.createNewViewsForNewModelItems(AggregatingServer, ServerView);
    this.createNewViewsForNewModelItems(OriginServer, ServerView);
    this.createNewViewsForNewModelItems(Wire, WireView);
    this.createNewViewsForNewModelItems(Client, ClientView);
    this.createNewViewsForNewModelItems(Relay, RelayView);
    this.createNewViewsForNewModelItems(Barrier, BarrierView);
    this.createNewViewsForNewModelItems(Cache, ServerView);
};

DemoView.prototype.createNewViewsForNewModelItems = function(ModelType, ViewType){
    if( !ModelType.newEvent ) {
        throw new Error('constructors must have .newEvent set to be listened to'); 
    }
    
    var demo = this.subject;
    
    demo.events(ModelType.newEvent).on(function(modelItem){
        ViewType.factory
            ?   ViewType.factory(modelItem, this)
            :   new ViewType(modelItem, this);
    }.bind(this));
};

DemoView.prototype.setupControls = function(){
    var jDom = this.jDom,
        jControls = jDom.find('.controls'),
        jFadeControls = jControls.find('.fadeControls'),
        jReset = jControls.find('.reset').hide(),
        demo = this.subject,
        demoEvents = demo.events;
    
    demoEvents('started').on(function(){
        jFadeControls.fadeOut();
        jReset.fadeIn();
        listenForClickOnReset();
    });

    demoEvents('reset').on(function(){
        jFadeControls.off();
        jReset.off();
       
        jFadeControls.fadeIn();
        jReset.fadeOut();
        listenForClickOnPlay();
    });

    function listenForClickOnPlay(){
        jFadeControls.one('click', function(){
            demo.start();
        });
    }

    function listenForClickOnReset(){
        jReset.one('click', function(){
            demo.reset();
        });
    }
    
    listenForClickOnPlay();
};

DemoView.prototype.scalingFactor = function(){
    var spaceAvailable = this.jDom.parents('main').width();
    return spaceAvailable / this.baseWidth;
};

DemoView.prototype.setDimensions = function(height, scalingFactor){

    var jSvg = this.jDom.filter('svg');

    jSvg.attr('height', height * scalingFactor);
    jSvg.attr('data-scale', scalingFactor);

    jSvg.find('.scaling').attr('transform', 'scale(' + scalingFactor + ')');   
    jSvg.find('.fade').attr('height', height+1);

    // The container div should have the height set on
    // the server-side to avoid the page reflowing.
    jSvg.find('.reset').css('translateY', height);
    jSvg.find('.play').attr('y', height / 2);
};
