// setup the application
function start(scenario) {
    console.log(scenario);
    
    var modelItems = {},
        itemViews = {};

    function makeModel(scenarioItem){
        var Type = modelType(scenarioItem.type);

        return new Type(
            scenarioItem.name,
            scenarioItem.locations,
            scenarioItem.options
        );
    }

    function modelType(scenarioType){
        switch(scenarioType){
            case "server":  return Server;
            case "wire":    return Wire;
            case "client":  return Client;
        }
        throw new Error('unknown type ' + scenarioType);
    }

    function viewType(scenarioType){
        switch(scenarioType){
            case "server":  return ServerView;
            case "wire":    return WireView;
            case "client":  return ClientView;
        }
        throw new Error('unknown type ' + scenarioType);
    }    

    // init the model items
    scenario.items.forEach(function (scenarioItem){

        modelItems[scenarioItem.name] = makeModel(scenarioItem);
    });

    // link up model items to each other
    scenario.items.forEach(function(scenarioItem){
        var modelItem = modelItems[scenarioItem.name];    

        scenarioItem.next.forEach(function( nextScenarioName ){

            modelItem.withDownstream( modelItems[nextScenarioName] );
        });
    });    
    
    // make some views:
    scenario.items.forEach(function(scenarioItem){
        var modelItem = modelItems[scenarioItem.name],
            ViewType = viewType(scenarioItem.type);
        
        itemViews[scenarioItem.name] = new ViewType(modelItem);
    });

    // TODO: put client requests in scenarios
    modelItems.client.makeRequest();
}

start( getScenario(0) );