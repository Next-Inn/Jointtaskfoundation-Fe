<template>
  <div>
    <li>
    <div
      :class="[item.payed ? 'green' : 'danger', {bold: isFolder}]"
      class="name"
      @click="toggle"
      @dblclick="makeFolder">
      <span>
        {{ item.name }}
        <span v-if="isFolder">[{{ isOpen ? '⬆' : '⬇' }}]</span>
      </span>
      <span>{{ item.payed ? 'Payed' : 'Not Payed'}}</span>
    </div>
    <ul v-show="isOpen" v-if="isFolder">
      <tree
        class="item"
        v-for="(child, index) in item.children"
        :key="index"
        :item="child"
        @make-folder="$emit('make-folder', $event)"
      ></tree>
    </ul>
  </li>
  </div>

</template>

<script>
import Tree from './tree'
export default {
  name: 'tree',

  components: { Tree },

  props: {
    item: Object,
    user: Object
  },
  data: function() {
    return {
      isOpen: false
    };
  },
  computed: {
    isFolder: function() {
      return this.item.children && this.item.children.length;
    }
  },
  methods: {
    toggle: function() {
      if (this.isFolder) {
        this.isOpen = !this.isOpen;
      }
    },
    makeFolder: function() {
      if (!this.isFolder) {
        this.$emit("make-folder", this.item);
        this.isOpen = true;
      }
    }
  }

}
</script>

<style scoped>
.item {
  cursor: pointer;
  margin: 5px 0;
}
.bold {
  font-weight: bold;
}
.name {
  font-size: 25px;
  display: flex;
  justify-content: space-between;
}
ul {
  padding-left: 1em;
  line-height: 1.8em;
  list-style-type: dot;
  font-size: 20px;
}

.green {
  background: rgb(19, 211, 169);
  color: #fff;
  padding: 5px 13px;
}
.danger {
  background: rgb(255, 96, 91);
  color: #fff;
  padding: 3px 20px;
}
</style>