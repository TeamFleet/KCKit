module.exports = (arg, func) => {
    if (Array.isArray(arg))
        return arg.every(func)
    return func(arg)
}
