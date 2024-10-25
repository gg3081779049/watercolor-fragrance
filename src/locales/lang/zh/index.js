import zh from 'element-plus/es/locale/lang/zh-cn'
export default {
    ...zh,
    system: {
        title: '水色天香管理系统',
        copyright: '版权所有 © 2024 watercolor-fragrance All Rights Reserved.',
        watermark: '水色天香',
    },
    common: {
        back: '返回',
        systemTip: '系统提示',
        backHome: '返回首页',
        relogin: '重新登录',
        confirm: '确定',
        cancel: '取消',
        search: '搜索',
        reset: '重置',
        add: '新增',
        delete: '删除',
        export: '导出',
        update: '修改',
    },
    toolTip: {
        expand: '展开',
        collapse: '折叠',
        fullscreen: '全屏',
        exitFullscreen: '退出全屏',
        showSearchBar: '显示搜索栏',
        hiddenSearchBar: '隐藏搜索栏',
        columnSetting: '列设置',
        refresh: '刷新'
    },
    placeholder: {
        enterIconName: '请输入图标名称',
        selectIcon: '请选择图标',
        search: '搜索'
    },
    operation: {
        closeCurrent: '关闭当前',
        closeOthers: '关闭其他',
        closeLeft: '关闭左侧',
        closeRight: '关闭右侧',
        closeAll: '全部关闭',
        userCenter: '个人中心',
        configuration: '系统配置',
        logout: '退出登录',
        save: '保存配置',
        reset: '恢复默认',
    },
    message: {
        loginSuccess: '登录成功',
        welcomeBack: '欢迎回来',
        operationSuccess: '操作成功',
        loginExpired: '登录状态已过期，您可以继续留在该页面，或者重新登录',
        invalidSession: '无效的会话，或者会话已过期，请重新登录。',
        committing: '数据正在处理，请勿重复提交',
        networkError: '后端接口连接异常',
        timeout: '系统接口请求超时',
        downloading: '正在下载数据，请稍候...',
        downloadFailed: '下载文件失败，请联系管理员！',
        confirmLogout: '确定要退出系统吗？',
        unsupportFullscreen: '你的浏览器不支持全屏',
        saving: '正在保存到本地，请稍候...',
        reseting: '正在清除设置，请稍候...',
        error: {
            '401': '认证失败，无法访问系统资源',
            '403': '当前操作没有权限',
            '404': '访问资源不存在',
            'default': '系统未知错误'
        }
    },
    settings: {
        title: {
            system: '系统',
            navbar: '顶栏',
            navToolbar: '工具栏',
            tabs: '标签栏',
            sidebar: '侧边栏',
            mode: '模式',
            theme: '主题',
            language: '语言',
            pageAnimateType: '页面切换动画',
            dynamicTitle: '开启动态标题',
            watermark: '开启水印',
            headerHeight: '头部高度',
            fixedHeader: '固定头部',
            showBreadcrumb: '显示面包屑',
            showBreadcrumbIcon: '显示面包屑图标',
            tabsHeight: '标签栏高度',
            tabsStyle: '标签栏风格',
            showTabs: '显示标签栏',
            showTabsIcon: '显示标签栏图标',
            draggable: '开启标签拖拽',
            sidebarWidth: '侧边栏宽度',
            uniqueOpened: '只保持一个子菜单展开'
        },
        options: {
            layout: {
                'vertical': '左侧菜单模式',
                'vertical-mix': '左侧菜单混合模式',
                'horizontal': '顶部菜单模式',
                'horizontal-mix': '顶部菜单混合模式'
            },
            mode: {
                'light': '白天',
                'dark': '黑夜'
            },
            theme: {
                'default': '默认'
            },
            language: {
                'en': 'English',
                'zh': '简体中文',
            },
            pageAnimateType: {
                'fade': '淡入淡出',
                'fade-zoom': '缩放淡入',
                'slide-right': '向右滑动',
                'slide-bottom': '向下滑动',
                'flip': '翻页',
                'none': '无'
            },
            tabsStyle: {
                'card': '卡片风格',
                'button': '按钮风格',
                'line': '线条风格'
            },
            navToolbar: {
                'NavbarSearch': '搜索',
                'Screenfull': '全屏',
                'DataScreen': '数据大屏',
                'LangSelect': '语言切换',
                'ModeSwitch': '模式切换'
            }
        }
    },
    page: {
        login: {
            account: '账号',
            password: '密码',
            captcha: '验证码',
            remember: '记住我',
            register: '立即注册',
            login: '登录',
            logging: '登录中...',
            rules: {
                account: '请输入您的账号',
                password: '请输入您的密码',
                captcha: '请输入验证码'
            }
        },
        register: {
            systemTipDesc: '当前系统没有开启注册功能！'
        },
        page401: {
            title: '401 错误!',
            noaccess: "您没有访问权限！",
            noaccessDesc: "对不起，您没有访问权限，请不要进行非法操作！您可以返回主页面"
        },
        page404: {
            title: '404 错误!',
            nofound: '找不到页面！',
            nofoundDesc: "对不起，您正在寻找的页面不存在。尝试检查URL的错误，然后按浏览器上的刷新按钮或尝试在我们的应用程序中找到其他内容。"
        }
    },
    route: {
        'home': '首页',
        'user': '个人中心',
        'room': '房间管理',
        'room/state': '房态',
        'finance': '财务管理',
        'news': '消息管理',
        'news/bulletin': '消息公告',
        'news/complaints': '投诉',
        'document': '项目文档',
        'document/element': 'Element Plus',
        'document/vue': 'Vue.js',
        'document/pinia': 'Pinia',
        'document/soybean': 'Soybean Admin',
        'document/github': 'Github',
        'system': '系统管理',
        'system/emp': '员工管理',
        'system/dept': '部门管理',
        'system/role': '角色管理',
        'system/project': '项目管理',
        'system/menu': '菜单管理',
        'system/branchStore': '分店管理',
        'system/log': '日志管理',
        'system/log/operate': '操作日志',
        'system/log/login': '登录日志',
    }
}