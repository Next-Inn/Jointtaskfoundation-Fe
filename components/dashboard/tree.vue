<template>
  <Tree :loadData="onLoadData" :treeData="this.treeInfo"/>
</template>

<script>
import { Tree } from 'ant-design-vue';
export default {
  components: { Tree },
  props: {
    childrens: Array,
    user: Object
  },
  data() {
    return {
      treeData: [
        { title: 'Expand to load', key: '0' },
        { title: 'Expand to load', key: '1' },
        { title: 'Tree Node', key: '2', isLeaf: true }
      ],
      treeInfo: ''
    }
  },

  created() {
    this.treeInfo = this.childrens.map((item, i) => ({
      title: item.name,
      key: i,
      // children: item.children
    }))
  },

  // mounted() {
  //   return console.log(this.loadChildren(this.childrens))
  //  },

  methods: {
    onLoadData(treeNode) {
      return new Promise(resolve => {
        if (treeNode.dataRef.children) {
          resolve()
          return
        }
        setTimeout(() => {
          // treeNode.dataRef.children = this.loadChildren(this.childrens, treeNode)
          this.treeInfo = [...this.treeInfo]
          resolve()
        }, 1000)
      })
    },

    loadChildren(user, treeNode) {
      // console.log(user)
      const newUser = user.map((item, i) => ({
        title: item.name,
        key: `${treeNode.eventKey}-${i}`,
        // children: item.children
      }));
      return newUser
      // this.loadChildren(newUser.children)
    }
  }
}
</script>