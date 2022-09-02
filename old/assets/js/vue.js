Vue.config.productionTip = false
const vm = new Vue({
    data() {
        return {
            name: '暮光壁纸',
            logo: './assets/img/logo.png',
            version: '2.4.26',
            downloads: [
                {
                    name: '蓝奏云',
                    url: 'https://wwa.lanzoui.com/itWwd05exy7e'
                },
                {
                    name: '123云盘',
                    url: 'https://www.123pan.com/s/ikkrVv-cP5Qh'
                }
            ],
            contact: [
                {
                    icon: 'ri-home-smile-line',
                    name: '体验新版',
                    url: '/'
                },
                {
                    icon: 'ri-user-smile-line',
                    name: '商务合作',
                    url: 'http://wpa.qq.com/msgrd?v=3&uin=2858727468&site=qq&menu=yes'
                }
            ],
            friends: [
                {
                    name: '柒伍七の鱼',
                    url: 'https://s757129.github.io',
                    gap: '|'
                },
                {
                    name: '油猴中文网',
                    url: 'https://bbs.tampermonkey.net.cn/?fromuid=27974',
                    gap: '|'
                },
                {
                    name: '脚本猫',
                    url: 'https://scriptcat.org/search',
                    gap: ''
                }
            ]
        }
    }
})
vm.$mount('#root')
