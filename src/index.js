import './scss/ange.scss'
import components from './components'

function install(Vue, opts = {}) {
    Object.values(components).forEach((each) => {
        Vue.component(each.name, each)
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}
export default {
    version: '1.0.0',
    install,
    ...components
}
