/**
 *  高阶函数HOF(Higher Order Function)
 *  定义 参数可以是函数 或者 方法返回一个函数
 *  sort map forEach filter都是高阶函数
 */
var curring = function(fn) {
    const args = [];
    return function() {
        for (var i = 0; i < arguments.length; i++) {
            [].push.call(args, arguments[i]);
        }
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            return arguments.callee;
        }
    }
};

const add = function(a, b, c) {
    return a + b * c;
};

const total = curring(add);

console.log(total(1)(2)(3));