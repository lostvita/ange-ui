### 图标 Icon

> 在组件内传入icon值，即可得到对应图标

<div class="component-wrapper">
    <ag-icon icon="clock mr5" title="clock" />
    <ag-icon icon="clock-fill mr5" title="clock-fill" />
    <ag-icon icon="news mr5" title="news" />
    <ag-icon icon="news-fill mr5" title="news-fill" />
    <ag-icon icon="delete mr5" title="delete" />
    <ag-icon icon="delete-fill mr5" title="delete-fill" />
    ...
</div>

```vue
<ag-icon icon="clock" title="clock" />
<ag-icon icon="clock-fill" title="clock-fill" />
```

<script>
    import Vue from 'vue'
    import AngeUI from '../../src'
    import '@scss/ange.scss'
    import '@/scss/docs.scss'
    Vue.use(AngeUI)

    export default {}
</script>