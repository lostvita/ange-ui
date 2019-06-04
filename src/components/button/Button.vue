<template>
    <button
        class="ange-btn"
        :class="[ btnSize, color, {
            'default': isDefault,
            'primary': primary,
            'success': success,
            'secondary': secondary,
            'dashed': dashed,
            'link': link,
            'icon': icon,
            'circle': circle
        }]"
        :disabled="loading"
        @click="_click">
        <span class="ange-btn-content">
            <ag-icon v-if="icon"
                     :icon="icon" />
            <slot />
        </span>
    </button>
</template>

<script>
export default {
    name: 'ag-button',
    props: {
        size: {
            type: String,
            validator: (val) => {
                return new Set(['large', 'normal', 'small']).has(val)
            }
        },
        color: String,
        primary: Boolean,
        success: Boolean,
        secondary: Boolean,
        dashed: Boolean,
        link: Boolean,
        warn: Boolean,
        danger: Boolean,
        loading: Boolean,
        icon: String,
        circle: Boolean,
        href: String,
        external: Boolean,
        target: String
    },
    computed: {
        isDefault() {
            const type = [this.primary, this.success, this.secondary, this.dashed, this.link]
            return type.every((each) => !each)
        },
        btnSize() {
            return this.size || 'normal'
        }
    },
    methods: {
        _click(evt) {
            this.$emit('click', evt)
            if (this.href) {
                if (this.external) {
                    const target = this.target || '_blank'
                    window.open(this.href, target)
                } else {
                    if (!this.$router) return
                    this.$router.push({ path: this.href })
                }
            }
        }
    }
}
</script>
