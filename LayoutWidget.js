function Dashboard(_containerID){
    if (!$ || !jQuery) return false;
    var $container = $('#'+_containerID);
    $container.addClass('container');
    var _widgets = [],
    _dataObject = {};
    
    this.bind = function(dataObject){
        _dataObject = dataObject;
    }
    
    this.layout = function(layout){
        for (var i = 0; i < layout.rows.length; i++){
            var $currentRow = $('<div>', {class:'row'});
            $currentRow.appendTo($container);
            for (var j = 0; j < layout.rows[i].cols.length; j++) {
                var span = 'col-xs-12 col-sm-'+layout.rows[i].cols[j].span+' col-md-'+layout.rows[i].cols[j].span;
                $currentRow.append($('<div>', {
                    id: layout.rows[i].cols[j].widget, 
                    class: span
                }));
            }
        }
    }
    
    this.register = function(widget){
        //add widget to the widget stack
        _widgets.push(widget);
        
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