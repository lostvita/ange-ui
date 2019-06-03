export function throttle (func, wait, before) {
    let isInvoking = false
    wait = wait || 300
    return function (arg) {
        if (isInvoking) return
        isInvoking = true
        before && before.call(this)
        window.setTimeout(async () => {
            if(!Array.isArray(func)) {
                func = [func]
            }
            for(let i in func) {
                await func[i].call(this, arg)
            }
            isInvoking = false
        }, wait)
    }
}

/**
 * 封装document.querySelectorAll
 * 返回数组
 *
 * @export
 * @param {String} selector 选择器
 * @param {Node} context 上下文
 * @returns {Array} 返回dom数组
 */
export function querySelectorAll (selector, context) {
    const dom = context.querySelectorAll(selector)
    return Array.prototype.slice.call(dom, 0)
}

export function randomId (len) {
    const str = 'abcdefghigklmnopqrstuvwxyz0123456789'
    let id = ''
    while (len) {
        const index = Math.floor(Math.random() * Math.floor(str.length))
        id += index % 2 ? str[index].toUpperCase() : str[index].toLowerCase()
        len--
    }
    return id
}