<template>
    <span class="ange-switch">
        <label class="ange-switch-label" v-if="label" :for="id">{{ label }}</label>
        <slot />
        <div class="ange-switch-main" :class="[size, {active: model}]">
            <input type="checkbox" 
                   class="ange-switch-input"
                   v-model="model"
                   :name="id"
                   :disabled="disabled"
                   @click.stop="() => {}"
                   @change="$emit('change')">
            <span class="ange-switch-box" :class="size" />
        </div>
        <span v-if="text" class="ange-switch-value" :class="size">{{ text }}</span>
    </span>
</template>

<script>
import { randomId } from '@utils'
export default {
    name: 'ag-switch',
    props: {
        value: Boolean,
        name: String,
        label: String,
        size: String,
        disabled: Boolean,
        onText: String,
        offText: String
    },
    computed: {
        model: {
            get() {
                return this.value
            },
            set(val) {
                this.$emit('input', val)
            }
        },
        id () {
            return this.name ? this.name : randomId(5)
        },
        text () {
            return this.value ? this.onText : this.offText
        }
    }
}
</script>
