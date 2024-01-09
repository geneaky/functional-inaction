function _map(list, mapper) {
    var new_list = [];
    _each(list, function(val) {
        new_list.push(mapper(val));
    } )
    return new_list;
}

function _filter(users, predi) {
    var new_list = [];
    _each(users, function(val) {
        if(predi(val)) {
            new_list.push(val);
        }
    })
    return new_list;
}

function _each(list, iter) {
    for(var i = 0; i < list.length; i++) {
        iter(list[i])
    }
    return list;
}

function _curry(fn) {
    return function(a, b) {
        return arguments.length == 2? fn(a,b) : function(b) {return fn(a,b);};
    }
}

export {_filter, _map, _curry};
