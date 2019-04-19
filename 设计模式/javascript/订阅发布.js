// 订阅-发布模式 实现一个方法，返回一个对象，包含listen，trigger，remove方法

var dyEvent = (function() {
    var eventList = {};
    var subscriber, publish, unsubscriber;
    subscriber = function (key, fn) {
        if (!eventList[key]) {
            eventList[key] = [];
        }
        eventList[key].push(fn);
    };
    publish = function() {
        var key = Array.prototype.shift.call(arguments);
        if (eventList[key]) {
            for (var i = 0; i < eventList[key].length; i++) {
                eventList[key][i].apply(this, arguments);
            }
        }
    };
    unsubscriber = function(key, fn) {
        var fns = eventList[key];
        if (!fns) {
            return false;
        }  else {
            if (eventList[key].length > 0) {
                for (var i = eventList[key].length - 1; i >= 0; i--) {
                    if (eventList[key][i] === fn) {
                        eventList[key].splice(i, 1);
                    }
                }
            }
        }
    };
    return {
        subscriber: subscriber,
        publish: publish,
        unsubscriber: unsubscriber
    }
})();
function a(p) {
    console.log(p);
}
dyEvent.subscriber('test', a);
dyEvent.subscriber('test', a);
dyEvent.unsubscriber('test', a);
dyEvent.publish('test', 200);

// 观察者模式又名发布-订阅模式，观察者内容发生了变化，订阅者收到变化
// 改变1： 通过defineProperty，在设置属性的时候出发通知。
function Publisher() {
    this.observers = [];
    var value = '';
    Object.defineProperty(this, 'state', {
        set: function(v) {
            var temp = value;
            value = v;
            if (v !== temp) {
                this.notice();
            }
        },
        get: function () { return value }
    })
}
Publisher.prototype.add = function(observer) {
    var flag = false;
    for(var i = 0; i < this.observers.length; i++) {
        if (this.observers[i] === observer) {
            flag = true;
        }
    }

    if (!flag) {
        this.observers.push(observer);
    }

    return this;
};

Publisher.prototype.remove = function(observer) {
    for(var i = this.observers.length - 1; i >= 0 ; i--) {
        if (this.observers[i] === observer) {
            this.observers.splice(i, 1);
        }
    }
};

Publisher.prototype.notice = function() {
    console.log(1);
    for (var i = 0; i < this.observers.length; i++) {
        var fn = this.observers[i].update;
        if (fn && typeof fn === 'function') {
            this.observers[i].update(this.state);
        }
    }
};

function Subscriber() {
    this.update = function(data) {
        console.log(data);
    }
}

var s1 = new Subscriber();
var s2 = new Subscriber();
s2.update = function(data) {
    console.log(data, '12');
};
var p = new Publisher();
p.add(s1).add(s2);
p.state = 'test';
// p.notice();