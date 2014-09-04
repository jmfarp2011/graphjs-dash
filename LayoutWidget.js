function Dashboard(_containerID){
    if (!$ || !jQuery) return false;
    var _widgets = [],
    _dataObject = {};
    this.bind = function(dataObject){
        _dataObject = dataObject;
    }
    this.register = function(widget){
        //add widget to the widget stack
        _widgets.push(widget);
        
        //create widget container div $widget
        var $widget = $('<div>', { id: widget.id });
        $widget.addClass('span'+widget.span)
            .appendTo($('#'+_containerID));
        
        //init widget
        widget.init(_dataObject);
    }
    this.update = function(dataObject){
        _dataObject = dataObject;
        for (var i = 0; i < _widgets.length; i++){
            _widgets[i].update(_dataObject);
        }
    }
}

function Widget(widget){
    this.id = widget.id;
    this.span = widget.span;
    this.init = widget.init;
    this.update = widget.update;
}