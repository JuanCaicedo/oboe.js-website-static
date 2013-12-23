var Relay = (function(){

    var Relay = extend(PacketHolder, function Relay(name, locations, options){
        PacketHolder.apply(this, arguments);
    
        this.timeBetweenPackets = Thing.asFunction(options.timeBetweenPackets);
        this.initThrottle();
        
        this.events('reset').on(function(){
            this.initThrottle();
        }.bind(this));
    });
    
    Relay.newEvent = 'Relay';
    
    Relay.prototype.initThrottle = function(){
    
        this.throttledOutputStreams = {
            'upstream'   : throttle(this.timeBetweenPackets, this.propagate.bind(this), this )
        ,   'downstream' : throttle(this.timeBetweenPackets, this.propagate.bind(this), this )
        }
    };
    
    Relay.prototype.accept = function(receivedPacket){
    
        var direction = receivedPacket.direction,
            outputStream = this.throttledOutputStreams[direction];
        
        outputStream.read(receivedPacket);
    };
    
    return Relay;
}())
