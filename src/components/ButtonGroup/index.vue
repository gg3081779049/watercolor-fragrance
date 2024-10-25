<template>
    <div class="button-group">
        <el-button type="primary" :size="size" v-if="$attrs.onAdd" :plain="plain" @click="$emit('add')">
            <SvgIcon icon="plus" />
            <span>{{ $t('common.add') }}</span>
        </el-button>
        <el-button type="danger" :size="size" v-if="$attrs.onDelete" :plain="plain" @click="$emit('delete')">
            <SvgIcon icon="delete" />
            <span>{{ $t('common.delete') }}</span>
        </el-button>
        <el-button type="warning" :size="size" v-if="$attrs.onExport" :plain="plain" @click="$emit('export')">
            <SvgIcon icon="export" />
            <span>{{ $t('common.export') }}</span>
        </el-button>
        <el-button type="info" :size="size" v-if="$attrs.onUpdate" :plain="plain" @click="$emit('update')">
            <SvgIcon icon="edit" />
            <span>{{ $t('common.update') }}</span>
        </el-button>
        <el-button v-for="btn in buttons" :key="btn" :type="btn.type" :size="size" :plain="plain" @click="btn.event">
            <SvgIcon :icon="btn.icon" />
            <span>{{ btn.text }}</span>
        </el-button>
        <slot />
    </div>
</template>

<script>
export default {
    name: 'ButtonGroup',
    props: {
        size: {
            type: String,
            default: 'small'
        },
        plain: {
            type: Boolean,
            default: true
        },
        buttons: {
            type: Array,
            default: []
        }
    }
}
</script>

<style lang="scss" scoped>
    .button-group {
        display: flex;
    }
</style>