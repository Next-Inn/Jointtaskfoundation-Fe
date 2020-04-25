<template>
  <div>
    <li>
    <div
      :class="{bold: isFolder}"
      class="name"
      @click="toggle"
      @dblclick="makeFolder">
      {{ item.name }}
      <span v-if="isFolder">[{{ isOpen ? '⬆' : '⬇' }}]</span>
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
}
.bold {
  font-weight: bold;
}
.name {
  font-size: 30px;
}
ul {
  padding-left: 1em;
  line-height: 1.8em;
  list-style-type: dot;
  font-size: 25px;
}

</style>