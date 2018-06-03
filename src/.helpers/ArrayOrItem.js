module.exports = (arg, func) => {
    if (Array.isArray(arg))
        return arg.some(func)
    return func(arg)
}
