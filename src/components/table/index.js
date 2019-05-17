import Table from './Table.vue'

Table.install = function (Vue, opt) {
    Vue.component(Table.name, Table, opt)
}

export default Table