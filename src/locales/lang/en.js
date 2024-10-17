import en from 'element-plus/es/locale/lang/en'
export default {
    ...en,
    system: {
        title: '水色天香管理系统',
        copyright: 'Copyright © 2024 watercolor-fragrance All Rights Reserved.',
        watermark: '水色天香',
    },
    common: {
        back: 'Back',
        tip: 'Tip',
        systemTip: 'System Tip',
        backHome: 'Back Home',
        relogin: 'Relogin',
        confirm: 'Confirm',
        cancel: 'Cancel'
    },
    toolTip: {
        expand: 'Expand',
        collapse: 'Collapse',
        fullscreen: 'Fullscreen',
        exitFullscreen: 'Exit Fullscreen',
        showSearchBar: 'Show Search Bar',
        hiddenSearchBar: 'Hidden Search Bar',
        columnSetting: 'Column Setting',
        refresh: 'Refresh'
    },
    placeholder: {
        enterIconName: 'Please enter icon name',
        selectIcon: 'Please select icon',
        search: 'Search'
    },
    operation: {
        closeCurrent: 'Close Current',
        closeOthers: 'Close Others',
        closeLeft: 'Close Left',
        closeRight: 'Close Right',
        closeAll: 'Close All',
        userCenter: 'User Center',
        configuration: 'Configuration',
        logout: 'Logout',
        save: 'Save',
        saving: 'Saving to local, please wait...',
        reset: 'Restore',
        reseting: 'Clearing settings, please wait...',
    },
    message: {
        loginSuccess: 'Login Successfully',
        welcomeBack: 'Welcome back',
        operationSuccess: 'Operation Successfully',
        loginExpired: 'Your login status has expired, and you can stay on that page or log back in',
        invalidSession: 'If the session is invalid, or the session has expired, please log in again.',
        committing: 'The data is being processed, please do not submit it repeatedly',
        networkError: 'The backend interface is abnormally connected',
        timeout: 'The system interface request timed out',
        downloading: 'Downloading data, please wait...',
        downloadFailed: 'The download file failed, please contact the administrator!',
        logout: 'Are you sure you want to logout?',
        unsupportFullscreen: 'Your browser does not support full screen display',
        error: {
            '401': 'The authentication fails and the system resources cannot be accessed',
            '403': 'The current operation does not have permissions',
            '404': 'The access resource does not exist',
            'default': 'System Unknown Error'
        }
    },
    settings: {
        title: {
            'system': 'System',
            'navbar': 'Navbar',
            'navToolbar': 'Toolbar',
            'tabs': 'Tabs',
            'sidebar': 'Sidebar',
            'mode': 'Mode',
            'theme': 'Theme',
            'language': 'Language',
            'pageAnimateType': 'Page Animate Transition',
            'watermark': 'Watermark',
            'headerHeight': 'Header Height',
            'fixedHeader': 'Fixed Header',
            'showBreadcrumb': 'Show Breadcrumb',
            'showBreadcrumbIcon': 'Show Breadcrumb Icon',
            'tabsHeight': 'Tabs Height',
            'tabsStyle': 'Tabs Style',
            'showTabs': 'Show Tabs',
            'showTabsIcon': 'Show Tabs Icon',
            'draggable': 'Draggable',
            'sidebarWidth': 'Sidebar Width',
            'uniqueOpened': 'Unique Opened',
        },
        options: {
            layout: {
                'vertical': 'Vertical',
                'vertical-mix': 'Vertical Mix',
                'horizontal': 'Horizontal',
                'horizontal-mix': 'Horizontal Mix'
            },
            mode: {
                'light': 'Light',
                'dark': 'Dark'
            },
            theme: {
                'default': 'Default'
            },
            language: {
                'en': 'English',
                'zh': '简体中文'
            },
            pageAnimateType: {
                'fade': 'Fade',
                'fade-zoom': 'Fade Zoom',
                'slide-right': 'Slide Right',
                'slide-bottom': 'Slide Bottom',
                'flip': 'Flip',
                'none': 'None'
            },
            tabsStyle: {
                'card': 'card',
                'button': 'button',
                'line': 'line'
            },
            navToolbar: {
                'NavbarSearch': 'Search',
                'Screenfull': 'Screenfull',
                'DataScreen': 'Data Screen',
                'LangSelect': 'Lang Select',
                'ModeSwitch': 'Mode Switch'
            }
        }
    },
    page: {
        login: {
            account: 'Account',
            password: 'Password',
            captcha: 'Captcha',
            remember: 'Remember me',
            register: 'Register now',
            login: 'Login',
            logging: 'Logging in...',
            rules: {
                account: 'Please enter your account',
                password: 'Please enter your password',
                captcha: 'Please enter the correct captcha'
            }
        },
        register: {
            systemTipDesc: 'The current system does not have the registration function enabled!'
        },
        page401: {
            title: '401 Error!',
            noaccess: "You don't have access!",
            noaccessDesc: "Sorry, you don't have access, please don't do illegal things! You can go back to the main page."
        },
        page404: {
            title: '404 Error!',
            nofound: 'Page not found!',
            nofoundDesc: "Sorry, the page you're looking for doesn't exist. Try to check the URL for errors and press the refresh button on your browser or try to find something else in our app."
        }
    }
}