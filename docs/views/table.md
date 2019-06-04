### 表格 Table

#### 固定列的表格
<div class="component-wrapper">
    <ag-table offsetTop="57.5">
        <tr slot='leftThead'>
            <th v-for="(each, index) in singleTableHeadL" :key="index">{{ each }}</th>
        </tr>
        <tr slot="thead">
            <th v-for="(each, index) in singleTableHead" :key="index">{{ each }}</th>
        </tr>
        <tr slot="rightThead">
            <th>操作</th>
        </tr>
        <template v-for="(each, index) in singleTableBody">
            <tr slot='leftBody' :key="`tbody-${index}`">
                <td>{{ each.no }}</td>
                <td>{{ each.name }}</td>
            </tr>
            <tr slot='tbody' :key="`tbody-${index}`">
                <td>{{ each.verdict }}</td>
                <td>{{ each.song }}</td>
            </tr>
            <tr slot="rightBody">
                <td><router-link :to="`/detail/${each.no}`" class="mr5">查看</router-link><router-link :to="`/detail/${each.no}`">编辑</router-link></td>
            </tr>
        </template>
    </ag-table>
</div>

```vue
<ag-table offsetTop="57.5">
    <tr slot='leftThead'>
        <th v-for="(each, index) in singleTableHeadL" :key="index">{{ each }}</th>
    </tr>
    <tr slot="thead">
        <th v-for="(each, index) in singleTableHead" :key="index">{{ each }}</th>
    </tr>
    <tr slot="rightThead">
        <th>操作</th>
    </tr>
    <template v-for="(each, index) in singleTableBody">
        <tr slot='leftBody' :key="`tbody-${index}`">
            <td>{{ each.no }}</td>
            <td>{{ each.name }}</td>
        </tr>
        <tr slot='tbody' :key="`tbody-${index}`">
            <td>{{ each.verdict }}</td>
            <td>{{ each.song }}</td>
        </tr>
        <tr slot="rightBody">
            <td><router-link :to="`/detail/${each.no}`" class="mr5">查看</router-link><router-link :to="`/detail/${each.no}`">编辑</router-link></td>
        </tr>
    </template>
</ag-table>
```

#### 普通表格
<div class="component-wrapper">
    <ag-switch label="展开表格" size="small" v-model="isExpand" />
    <ag-table offsetTop="57.5">
        <tr slot="thead">
            <th v-if="isExpand">姓名</th>
            <th v-for="(each, index) in singleTableHead" :key="index">{{ each }}</th>
        </tr>
        <template v-for="(each, index) in singleTableBody">
            <tr slot='tbody' :key="`tbody-${index}`">
                <td v-if="isExpand">{{ each.name }}</td>
                <td>{{ each.verdict }}</td>
                <td>{{ each.song }}</td>
            </tr>
        </template>
    </ag-table>
</div>

```vue
<ag-switch label="展开表格" size="small" v-model="isExpand" />
<ag-table offsetTop="57.5">
    <tr slot="thead">
        <th v-if="isExpand">姓名</th>
        <th v-for="(each, index) in singleTableHead" :key="index">{{ each }}</th>
    </tr>
    <template v-for="(each, index) in singleTableBody">
        <tr slot='tbody' :key="`tbody-${index}`">
            <td v-if="isExpand">{{ each.name }}</td>
            <td>{{ each.verdict }}</td>
            <td>{{ each.song }}</td>
        </tr>
    </template>
</ag-table>
```

<script>
    import Vue from 'vue'
    import AngeUi from '../../src'
    import '@scss/ange.scss'
    import '@/scss/docs.scss'
    Vue.use(AngeUi)

    export default {
        data () {
            return {
                singleTableHeadL: ['编号', '姓名'],
                singleTableHead: ['判词', '判曲'],
                isExpand: false,
                singleTableBody: [{
                    no: 1,
                    name: '林黛玉',
                    verdict: '可叹停机德，堪怜咏絮才。玉带林中挂，金簪雪里埋。',
                    song: '一个是阆苑仙葩，一个是美玉无瑕。若说没奇缘，今生偏又遇着他； 若说有奇缘，如何心事终虚化？一个枉自嗟呀，一个空劳牵挂； 一个是水中月，一个是镜中花。 想眼中能有多少泪珠儿？ 怎经得秋流到冬尽，春流到夏。'
                },{
                    no: 1,
                    name: '薛宝钗',
                    verdict: '可叹停机德，堪怜咏絮才。玉带林中挂，金簪雪里埋。',
                    song: '都道是金玉良缘，俺只念木石前盟。空对着，山中高士晶莹雪；终不忘，世外仙姝寂寞林。叹人间，美中不足今方信。纵然是齐眉举案，到底意难平。'
                },{
                    no: 2,
                    name: '贾元春',
                    verdict: '二十年来辨是非，榴花开处照宫闱。三春争及初春景，虎兕相逢大梦归。',
                    song: '喜荣华正好，恨无常又到。眼睁睁，把万事全抛。荡悠悠，芳魂消耗。望家乡，路远山高。故向爹娘梦里相寻告：儿命已入黄泉，天伦呵，须要退步抽身早！'
                },{
                    no: 3,
                    name: '贾探春',
                    verdict: '才自精明志自高，生于末世运偏消。清明涕送江边望，千里东风一梦遥。',
                    song: '一帆风雨路三千，把骨肉家园齐来抛闪。恐哭损残年，告爹娘，休把儿悬念。自古穷通皆有定，离合岂无缘？从今分两地,各自保平安。奴去也，莫牵连。'
                },{
                    no: 4,
                    name: '史湘云',
                    verdict: '富贵又何为，襁褓之间父母违。展眼吊斜辉，湘江水逝楚云飞。',
                    song: '襁褓中，父母叹双亡。纵居那绮罗丛，谁知娇养？幸生来，英豪阔大宽宏量，从未将儿女私情略萦心上。好一似，霁月光风耀玉堂。厮配得才貌仙郎，博得个地久天长，准折得幼年时坎坷形状。终久是云散高唐，水涸湘江。这是尘寰中消长数应当，何必枉悲伤！'
                },{
                    no: 5,
                    name: '妙玉',
                    verdict: '欲洁何曾洁，云空未必空。可怜金玉质，终陷淖泥中。',
                    song: '气质美如兰，才华馥比仙。天生成孤癖人皆罕。你道是啖肉食腥膻，视绮罗俗厌，却不知太高人愈妒，过洁世同嫌。可叹这，青灯古殿人将老；辜负了，红粉朱楼春色阑。到头来,依旧是风尘肮脏违心愿。好一似，无瑕白玉遭泥陷；又何须，王孙公子叹无缘。'
                },{
                    no: 6,
                    name: '贾迎春',
                    verdict: '子系中山狼，得志便猖狂。金闺花柳质，一载赴黄粱。',
                    song: '中山狼，无情兽，全不念当日根由。一味的，骄奢淫荡贪欢媾。觑着那，侯门艳质同蒲柳；作践的，公府千金似下流。叹芳魂艳魄，一载荡悠悠。'
                },{
                    no: 7,
                    name: '贾迎春',
                    verdict: '勘破三春景不长，缁衣顿改昔年装。可怜绣户侯门女，独卧青灯古佛旁。',
                    song: '将那三春勘破，桃红柳绿待如何？把这韶华打灭，觅那清淡天和。说什么，天上夭桃盛，云中杏蕊多？'
                }]
            }
        }
    }
</script>