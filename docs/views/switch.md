### 开关 Switch
<div class="component-wrapper">
    <ag-switch label="是否展开" v-model="expand"></ag-switch>
</div>

<div class="component-wrapper">
    <ag-switch v-model="expand" size="small" onText="开" offText="关"><ag-icon icon="news" class="mr5" /></ag-switch>
</div>

```vue
    <ag-switch label="是否展开" v-model="expand"></ag-switch>
    <ag-switch v-model="expand" size="small" onText="开" offText="关"><ag-icon icon="news" class="mr5" /></ag-switch>
```

<script>
    import Vue from 'vue'
    import AngeUI from '../../src'
    import '@scss/ange.scss'
    import '@/scss/docs.scss'
    Vue.use(AngeUI)

    export default {
        data () {
            return {
                expand: false
            }
        }
    }
</script>