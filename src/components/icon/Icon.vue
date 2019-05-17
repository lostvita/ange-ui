<template>
    <i class="icon" :class="'icon-' + icon" />
</template>

<script>
export default {
    name: 't-icon', // eslint-disable-line
    props: {
        icon: String
    }
}
</script>
