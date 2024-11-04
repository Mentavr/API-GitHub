export const debounce = (fn, ms) => {
    let id;
    return function debounceWrapper(path, option, cb) {
        clearTimeout(id)
        id = setTimeout(async () => {
            const data = await fn.apply(this, [path, option])
            return cb(data);
        }, ms)
    }
}