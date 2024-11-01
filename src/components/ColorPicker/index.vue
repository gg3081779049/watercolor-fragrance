<template>
    <el-color-picker class="color-picker" @active-change="colorChange" />
</template>

<script>
import { hexToHsl } from "@/utils/color"
const colorValEle = document.createElement('span')
export default {
    name: 'ColorPicker',
    mounted() {
        const colorPicker = this.$el.nextElementSibling.querySelector('.el-color-picker__color-inner')
        colorPicker.replaceChild(colorValEle, colorPicker.querySelector('.is-icon-arrow-down'))
        this.colorChange(this.$attrs.modelValue.toUpperCase())
    },
    methods: {
        colorChange(color) {
            colorValEle.innerText = color
            colorValEle.style.display = color ? '' : 'none'
            if (color) {
                const hsl = hexToHsl(color)
                colorValEle.style.color = `hsl(${hsl[0]}, 100%, ${hsl[2] < 50 ? 95 : 5}%)`
            }
        }
    }
}
</script>

<style lang="scss">
    .color-picker {
        .el-color-picker__trigger {
            width: auto;
            min-width: 32px;

            .el-color-picker__color-inner span {
                margin: 0 5px;
                font-size: 12px;
            }
        }
    }
</style>