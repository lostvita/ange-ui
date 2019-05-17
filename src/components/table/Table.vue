<template>
    <div class="rel">
        <div class="ted-table" ref="content">
            <table v-if="false" ref='leftTable' class='common-table table-left'>
                <thead class='thead-left'>
                    <slot name='leftThead'></slot>
                </thead>
                <tbody>
                    <slot name='leftBody'></slot>
                </tbody>
            </table>
            <table ref='table' class='common-table table-middle'>
                <thead class='common-table-head thead-middle' :class="{fixed: fixed.top}">
                    <slot name='thead' />
                </thead>
                <tbody>
                    <slot name='tbody' />
                </tbody>
            </table>
            <table v-if="false" ref='rightTable' class='common-table table-right'>
                <thead class='thead-right'>
                    <slot name='rightThead'></slot>
                </thead>
                <tbody>
                    <slot name='rightBody'></slot>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: 't-table', // eslint-disable-line
    computed: {
        fixed () {
            return {
                top: false
            }
        },
        scroller () {
            return window
        }
    },
    methods: {
        init () {
            this.scroller.addEventListener('scroll', this.scrollHandle, {
                capture: false,
                passive: true
            })
            this.scroller.addEventListener(
                'mousewheel',
                this.scrollerMouseWheel,
                {
                    capture: false,
                    passive: false
                }
            )
        },

        scrollHandle () {
            console.log(111)
        },

        scrollerMouseWheel () {}
    },
    mounted () {
        this.init()
    },
    activated () {
        this.init()
    }
}
</script>
