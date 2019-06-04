<template>
    <i
        class="ange-icon"
        :class="`icon-${icon}`" />
</template>

<script>
export default {
    name: 'ag-icon',
    props: {
        icon: String
    }
}
</script>
