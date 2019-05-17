import Button from './Button.vue'

Button.install = function (Vue, opt) {
    Vue.component(Button.name, Button)
}

export default Button
