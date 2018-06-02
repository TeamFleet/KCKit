;(function (name, factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory()
    } else {
        window[name] = factory()
    }
})('__ArrayOrItemAll', function () {
    return (arg, func) => {
        if (Array.isArray(arg))
            return arg.every(func)
        return func(arg)
    }
})
