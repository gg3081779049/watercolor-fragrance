<template>
  <div class="navbar-search" :class="{ show }">
    <svg-icon class="navbar-search-icon" icon="navbar-search" @click.stop="handleClick" />
    <el-select class="navbar-search-select" ref="navbarSearchSelect" v-model="search" filterable default-first-option
      remote :placeholder="`${$t('common.search')}...`" :remote-method="querySearch" @change="change">
      <el-option v-for="option in options" :key="option" :label="option.label" :value="option.value" />
    </el-select>
  </div>
</template>

<script>
import { useRouteStore } from '@/store/modules/route'
import { mapState } from 'pinia'
import { isExternal } from '@/utils'
import Fuse from "fuse.js"

export default {
  name: "NavbarSearch",
  data() {
    return {
      show: false,
      search: "",
      options: [],
      searchPool: [],
      fuse: null,
    }
  },
  computed: { ...mapState(useRouteStore, ["sidebarRouteList"]) },
  created() {
    this.searchPool = this.sidebarRouteList.map(({ meta, path, query }) => ({ title: meta.title.join(" > "), path, query }))
    this.fuse = new Fuse(this.searchPool, {
      shouldSort: true,
      threshold: 0.4,
      location: 0,
      distance: 100,
      minMatchCharLength: 1,
      keys: [{ name: "title", weight: 0.7 }],
    })
  },
  methods: {
    handleClick() {
      this.show = !this.show
      // 自动聚焦
      if (this.show) {
        this.$nextTick(() => {
          this.$refs.navbarSearchSelect.focus()
        })
      }
    },
    querySearch(query) {
      if (query[0] !== " " && query[0] !== ">") {
        this.options = this.fuse
          .search(query)
          .map(({ item }) => ({ label: item.title, value: item }))
      } else {
        this.options = []
      }
    },
    change({ path, query }) {
      this.search = ""
      this.options = []
      if (isExternal(path)) {
        window.open(path)
      } else {
        this.$router.push({ path: '/' + path, query })
      }
    },
  }
}
</script>

<style lang="scss" scoped>
  .navbar-search {
    font-size: 0 !important;

    .navbar-search-icon {
      width: 1em;
      height: 1em;
      fill: var(--navbar-icon-fill-color);
      overflow: hidden;
      font-size: 18px;
      vertical-align: middle;
      cursor: pointer;
    }

    .navbar-search-select {
      font-size: 18px;
      transition: width 0.2s;
      width: 0;
      overflow: hidden;
      background: transparent;
      border-radius: 0;
      display: inline-block;
      vertical-align: middle;
      --el-border-color: var(--el-color-info-light-3);

      ::v-deep {
        input {
          border-radius: 0;
          border: 0;
          padding-left: 0;
          padding-right: 0;
          box-shadow: none !important;
          border-bottom: 1px solid #d9d9d9;
          vertical-align: middle;
        }

        .el-select__wrapper {
          background: transparent;
        }
      }
    }

    &.show {
      .navbar-search-select {
        width: 210px;
        margin-left: 10px;
      }
    }
  }
</style>
