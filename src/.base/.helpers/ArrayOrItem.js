;(function (name, factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory()
    } else {
        window[name] = factory()
    }
})('__ArrayOrItem', function () {
    return (arg, func) => {
        if (Array.isArray(arg))
            return arg.some(func)
        return func(arg)
    }
})
