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