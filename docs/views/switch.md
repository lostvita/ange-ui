### 开关 Switch
<div class="component-wrapper">
    <t-switch label="是否展开" v-model="expand"></t-switch>
</div>

<div class="component-wrapper">
    <t-switch v-model="expand" size="small" onText="开" offText="关"><t-icon icon="news" class="mr5" /></t-switch>
</div>

```vue
    <t-switch label="是否展开" v-model="expand"></t-switch>
    <t-switch v-model="expand" size="small" onText="开" offText="关"><t-icon icon="news" class="mr5" /></t-switch>
```

<script>
    import Vue from 'vue'
    import TedUI from '../../src'
    import '../../src/scss/ted.scss'
    import '../scss/docs.scss'
    Vue.use(TedUI)

    export default {
        data () {
            return {
                expand: false
            }
        }
    }
</script>