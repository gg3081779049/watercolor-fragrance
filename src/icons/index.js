// 目录, 是否递归查找, 规则
const req = require.context('./svg', true, /\.svg$/)

req.keys().forEach(req)