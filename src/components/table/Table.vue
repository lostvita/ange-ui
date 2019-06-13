<template>
    <div class="rel ange-table" ref="container">
        <div class="table-container" ref="content">
            <table v-if="hasLeftTable"
                   ref="leftTable"
                   class="common-table table-left"
                   :class="{fixed: fixed.left}"
                   :style="leftStyle">
                <thead class="thead-left"
                       :class="{fixed: fixed.top}"
                       :style="theadStyle">
                    <slot name="leftThead" />
                </thead>
                <tbody>
                    <slot name="leftBody" />
                </tbody>
            </table>
            <table ref="table" class="common-table table-middle">
                <thead class="common-table-head thead-middle"
                       :class="{fixed: fixed.top}"
                       :style="theadStyle">
                    <slot name="thead" />
                </thead>
                <tbody>
                    <slot name="tbody" />
                </tbody>
            </table>
            <table v-if="hasRightTable"
                   ref="rightTable"
                   class="common-table table-right"
                   :style="rightStyle">
                <thead class="thead-right"
                       :class="{fixed: fixed.top}"
                       :style="theadStyle">
                    <slot name="rightThead" />
                </thead>
                <tbody>
                    <slot name="rightBody" />
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { throttle, querySelectorAll } from '@utils'
export default {
    name: 'ag-table',
    props: {
        offsetTop: {
            type: [String, Number],
            default: () => 0
        }
    },
    data () {
        return {
            fixed: { // 表格顶、左、右栏固定标识
                top: false,
                left: false
            },
            clientRect: {
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
            },
            initRight: 0,  // 右表格初始位置
        }
    },
    computed: {
        hasLeftTable () {
            return !!this.$slots.leftThead
        },
        hasRightTable () {
            return !!this.$slots.rightThead
        },
        scroller () {
            return window
        },
        theadStyle () {
            const { top } = this.clientRect
            return {
                transform: `translate3d(0px, ${this.fixed.top
                        ? -top
                        : 0}px, 1px)`
            }
        },
        leftStyle () {
            const { left } = this.clientRect
            return {
                transform: `translate3d(${this.fixed.left
                        ? left
                        : 0}px, 0px, 1px)`
            }
        },
        rightStyle () {
            const { right } = this.clientRect
            return {
                transform: `translate3d(${-right}px, 0px, 1px)`
            }
        }
    },
    watch: {
        'clientRect.top': function (val) {
            this.fixed.top = val < 0
        },
        'clientRect.left': function (val) {
            this.fixed.left = val > 0
        }
    },
    mounted () {
        this.init()
        const { top } = this.$refs.container.getBoundingClientRect()
        // this.headTop = Math.floor(top)
    },
    activated () {
        this.init()
    },
    methods: {
        init () {
            if(this.hasRightTable) {
                const container = this.$refs.container.getBoundingClientRect()
                const rightTable = this.$refs.rightTable.getBoundingClientRect()
                this.clientRect.right = Math.floor(rightTable.right  - container.right)
                this.initRight = this.clientRect.right
            }

            this.scroller.addEventListener('scroll', this.scrollHandle, {
                capture: false,
                passive: true
            })
            this.$refs.container.addEventListener('scroll', this.scrollHandle, {
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

            if(this.hasLeftTable || this.hasRightTable) {
                this.$el.addEventListener('mouseover', this.mouseOver, false)
                this.$el.addEventListener('mouseout', this.mouseLeave, false)
            }
        },

        scrollHandle () {
            const table = this.$refs.table
            if(!table) return

            const { top } = table.getBoundingClientRect()
            this.clientRect.top = Math.floor(top - parseInt(this.headTop || this.offsetTop, 10))
            this.clientRect.left = Math.floor(this.$refs.container.scrollLeft)

            const right = Math.floor(this.initRight - this.$refs.container.scrollLeft)
            this.clientRect.right = right
        },

        scrollerMouseWheel () {},

        mouseOver (e) {
            this.hoverClass(e, 'add')
        },
        mouseLeave(e) {
            this.hoverClass(e, 'remove')
        },
        hoverClass(e, type) {
            const tr = e.target.closest('tr')
            if(!tr) {
                return
            }
            const idx = tr.rowIndex
            const trs = querySelectorAll(`tbody tr:nth-child(${idx})`, this.$el)
            if(trs.length === 0) {
                return
            }
            trs.forEach(each => {
                each.classList[type]('hover')
            })
        },
    }
}
</script>
