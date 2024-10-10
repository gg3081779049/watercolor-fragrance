export default {
    system: {
        title: '水色天香管理系统',
        copyright: '版权所有 © 2024 watercolor-fragrance All Rights Reserved.',
    },
    common: {
        back: '返回',
        tip: '提示',
        systemTip: '系统提示',
        search: '搜索',
        confirm: '确定',
        cancel: '取消'
    },
    settings: {
        title: '系统配置',
        subTitles: {
            'system': '系统',
            'navbar': '顶栏',
            'navToolbar': '工具栏',
            'tabs': '标签栏',
            'sidebar': '侧边栏',
            'mode': '模式',
            'theme': '主题',
            'language': '语言',
            'pageAnimateType': '页面动画类型',
            'watermark': '开启水印',
            'headerHeight': '头部高度',
            'fixedHeader': '固定头部',
            'showBreadcrumb': '显示面包屑',
            'showBreadcrumbIcon': '显示面包屑图标',
            'tabsHeight': '标签栏高度',
            'tabsStyle': '标签栏风格',
            'showTabs': '显示标签栏',
            'showTabsIcon': '显示标签栏图标',
            'draggable': '开启标签拖拽',
            'sidebarWidth': '侧边栏宽度',
            'uniqueOpened': '只保持一个子菜单展开'
        },
        options: {
            layout: {
                'vertical': '左侧菜单模式',
                'vertical-mix': '左侧菜单混合模式',
                'horizontal': '顶部菜单模式',
                'horizontal-mix': '顶部菜单混合模式'
            },
            theme: {

            },
            language: {
                'en': 'English',
                'zh': '简体中文'
            },
            pageAnimateType: {
                'fade': '淡入淡出',
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
                'ThemeSwitch': '主题切换'
            }
        },
        configOperation: {
            save: '保存配置',
            reset: '恢复默认'
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
        401: {
            error: '401错误!',
            noaccess: "您没有访问权限！",
            noaccessDesc: "对不起，您没有访问权限，请不要进行非法操作！您可以返回主页面",
            backHome: '回到首页'
        },
        404: {
            error: '404错误!',
            nofound: '找不到页面！',
            nofoundDesc: "对不起，您正在寻找的页面不存在。尝试检查URL的错误，然后按浏览器上的刷新按钮或尝试在我们的应用程序中找到其他内容。",
            backHome: '返回首页'
        }
    }
}