### 表格 Table

#### 单个表格
<div class="component-wrapper">
    <t-table>
        <tr slot="thead">
            <th v-for="(each, index) in singleTableHead" :key="index">{{ each }}</th>
        </tr>
        <template slot="tbody">
            <tr v-for="(each, index) in singleTableBody" :key="index">
                <td>{{ each.no }}</td>
                <td>{{ each.name }}</td>
                <td>{{ each.verdict }}</td>
            </tr>
        </template>
    </t-table>
</div>

#### 组合表格

<script>
    import Vue from 'vue'
    import TedUI from '../../src'
    import '../../src/scss/ted.scss'
    Vue.use(TedUI)

    export default {
        data () {
            return {
                singleTableHead: ['十二钗编号', '姓名', '判词'],
                singleTableBody: [{
                    no: 1,
                    name: '林黛玉',
                    verdict: '可叹停机德，堪怜咏絮才。玉带林中挂，金簪雪里埋。'
                },{
                    no: 1,
                    name: '薛宝钗',
                    verdict: '可叹停机德，堪怜咏絮才。玉带林中挂，金簪雪里埋。'
                },{
                    no: 2,
                    name: '贾元春',
                    verdict: '二十年来辨是非，榴花开处照宫闱。三春争及初春景，虎兕相逢大梦归。'
                },{
                    no: 3,
                    name: '贾探春',
                    verdict: '才自精明志自高，生于末世运偏消。清明涕送江边望，千里东风一梦遥。'
                },{
                    no: 4,
                    name: '史湘云',
                    verdict: '富贵又何为，襁褓之间父母违。展眼吊斜辉，湘江水逝楚云飞。'
                },{
                    no: 5,
                    name: '妙玉',
                    verdict: '欲洁何曾洁，云空未必空。可怜金玉质，终陷淖泥中。'
                }]
            }
        }
    }
</script>