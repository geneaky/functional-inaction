import {_filter, _map, _curry}from './_.js';

var users = [
    {id:1, name: 'ID', age : 36},
    {id:2, name: 'BJ', age : 32},
    {id:3, name: 'JM', age : 32},
    {id:4, name: 'PJ', age : 27},
    {id:5, name: 'HA', age : 25},
    {id:6, name: 'JE', age : 26},
    {id:7, name: 'JI', age : 31},
    {id:8, name: 'MP', age : 23},
];

var temp_users = [];
for(var i = 0; i < users.length; i++) {
    if(users[i].age >= 30) {
        temp_users.push(users[i]);
    }
}
console.log(temp_users);

var names = [];
for(var i = 0; i < temp_users.length; i++) {
    names.push(temp_users[i].name);
}
console.log(names);

var list = [];
for(var i = 0; i < users.length; i++) {
    if(users[i].age < 30) {
        list.push(users[i]);
    }
}
console.log(list);

var ages = [];
for(var i = 0; i < list.length; i++) {
    ages.push(list[i].age);
}
console.log(ages);


//응용형 함수 , 응용향 프로그래밍, 적용형 프로그래밍, 고차함수
//함수를 인자로 받아서 원하는 시점에 특정한 인자를 전달받아서 수행하는 함수

console.log(_filter(users, function (user) {
    return user.age >= 30;}))

console.log(_filter(users, function (user) {
    return user.age < 30;}))

console.log(_filter([1,2,3,4], function(num){ return num % 2;}))

console.log(_filter([1,2,3,4], function (num){ return num / 2;}))



let over_30 = _filter(users, function(user) {return user.age >= 30;});
console.log(
    over_30
)
console.log(over_30);

var names = _map(over_30, function (user) {
    return user.name;
});
console.log(names);

var under_30 = _filter(users, function (user) {
    return user.age < 30;})
console.log(under_30);

var ages = _map(under_30, function(user) {
    return user.age;
});
console.log(ages);

console.log(_map([1, 2, 3], function (num) {
    return num * 2;
}));

console.log(_map(_filter(users, function (user) {
        return user.age >= 30;
    }),
    function (user) {
        return user.name;
    }));

console.log([1, 2, 3].filter(function (val) {
    return val % 2;
}));

var add = function(a,b) {
    return a+b;
}

console.log(add(10, 5));

var add1 = _curry(function(a,b) {
    return a+b;
});

var add10 = add1(10);
console.log(add10(5));
console.log(add1(5)(10));
console.log(add1(3, 5));

var sub = _curry(function(a,b) {
    return a - b;
});

console.log(sub(10, 5));

var sub10 = sub(10);
console.log(sub10(5));

function _curryr(fn) {
   return function(a,b) {
       return arguments.length == 2 ? fn(a,b) : function (b) {return fn(b,a);};
   }
}

var sub = _curryr(function(a,b) {
    return a - b;
});

console.log(sub(10, 5));

var sub10 = sub(10);
console.log(sub10(5));


var _get = _curryr(function _get(obj, key) {
    return obj == null ? undefined : obj[key];
});

var user1 = users[0];
console.log(user1.name);
console.log(_get(user1, 'name'))
console.log(_get('name')(user1))

var get_name = _get('name');

console.log(get_name(user1));
console.log(get_name(users[3]));
console.log(get_name(users[10]));

//console.log(user[10].name);
console.log(_get(users[10], 'name'))