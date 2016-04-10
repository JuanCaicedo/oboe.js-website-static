var Barrier = (function(){
    
    var Barrier = extend(Thing, function Barrier(name, locations){
        Thing.apply(this, arguments);
        
        this.events('reset').on(function(){
            this.hasBeenShown = false;
        }.bind(this));
    });

    Barrier.newEvent = 'Barrier';
    
    
    Barrier.prototype.activateIfNeverShownBefore = function(){
        
        if( !this.hasBeenShown ) {
            this.activate();
        }
        this.hasBeenShown = true;
    };

    return Barrier;
}());
