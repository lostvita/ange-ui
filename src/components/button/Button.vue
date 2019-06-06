<template>
    <component
        :is="tag"
        class="ange-btn"
        :class="[ btnSize, color, {
            'default': isDefault,
            'primary': primary,
            'secondary': secondary,
            'dashed': dashed,
            'link': link,
            'icon': icon,
            'circle': circle
        }]"
        @click="$emit('click', $event)"
        :disabled="loading">
        <span class="ange-btn-content">
            <ag-icon
                v-if="icon"
                :icon="icon" />
            <slot />
        </span>
    </component>
</template>

<script>
import Icon from '../icon/Icon'
export default {
    name: 'ag-button',
    components: {
        [Icon.name]: Icon
    },
    props: {
        size: {
            type: String,
            validator (val) {
                return new Set(['large', 'normal', 'small']).has(val)
            }
        },
        color: {
            type: String,
            validator (val) {
                return new Set(['success', 'warn', 'danger']).has(val)
            }
        },
        primary: Boolean,
        secondary: Boolean,
        dashed: Boolean,
        link: Boolean,
        loading: Boolean,
        icon: String,
        circle: Boolean,
        external: Boolean,
    },
    computed: {
        tag () {
            return this.external ? 'a' : 'button'
        },
        isDefault() {
            const type = [this.primary, this.secondary, this.dashed, this.link]
            return type.every((each) => !each)
        },
        btnSize() {
            return this.size || 'normal'
        }
    }
}
</script>
