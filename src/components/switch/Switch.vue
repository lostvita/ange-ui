<template>
    <span class="t-switch">
        <label class="t-switch-label" v-if="label" :for="id">{{ label }}</label>
        <slot></slot>
        <div class='t-switch-main' :class='[size, {active: model}]'>
            <input type="checkbox" class='t-switch-input'
                   v-model='model'
                   :name='id'
                   :disabled="disabled"
                   @click.stop='() => {}'
                   @change='$emit("change")'>
            <span class='t-switch-box' :class="size"></span>
        </div>
        <span v-if="text" class='t-switch-value' :class='size'>{{ text }}</span>
    </span>
</template>

<script>
import { randomId } from '../../utils'
export default {
    name: 't-switch',
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
