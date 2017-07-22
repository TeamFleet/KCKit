module.exports = {
    ArrayOrItem: (arg, func) => {
        if (Array.isArray(arg))
            return arg.some(func)
        return func(arg)
    },
    ArrayOrItemAll: (arg, func) => {
        if (Array.isArray(arg))
            return arg.every(func)
        return func(arg)
    }
}