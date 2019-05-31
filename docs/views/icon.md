### 图标 Icon

> 在组件内传入icon值，即可得到对应图标

<div class="component-wrapper">
    <t-icon icon="clock mr5" title="clock" />
    <t-icon icon="clock-fill mr5" title="clock-fill" />
    <t-icon icon="news mr5" title="news" />
    <t-icon icon="news-fill mr5" title="news-fill" />
    <t-icon icon="delete mr5" title="delete" />
    <t-icon icon="delete-fill mr5" title="delete-fill" />
    ...
</div>

```vue
<t-icon icon="clock" title="clock" />
<t-icon icon="clock-fill" title="clock-fill" />
```

<script>
    import Vue from 'vue'
    import TedUI from '../../src'
    import '../../src/scss/ted.scss'
    Vue.use(TedUI)

    export default {}
</script>