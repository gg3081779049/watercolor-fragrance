import { menuList } from '@root/mock/data'

export default [{
    url: /.*?\/getRouters/,
    method: 'get',
    response() {
        return {
            code: 200,
            msg: '操作成功',
            data: menuList
        }
    }
}]