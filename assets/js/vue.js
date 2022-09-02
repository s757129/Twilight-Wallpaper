Vue.config.productionTip = false
const vm = new Vue({
    data() {
        return {
            name: '暮光壁纸',
            logo: './assets/img/logo.png',
            version: '2.4.26',
            volume: '8.77MB',
            time: '2022-08-26',
            introduction: '永久免费无广告，高清壁纸软件，素材一应俱全',
            download: [
                {
                    name: '立即下载',
                    url: 'https://www.123pan.com/s/ikkrVv-cP5Qh'
                },
                {
                    name: '备用下载',
                    url: '/'
                }
            ],
            screenshot: [
                {
                    image: './assets/img/1.png'
                },
                {
                    image: './assets/img/2.png'
                },
                {
                    image: './assets/img/3.png'
                },
                {
                    image: './assets/img/4.png'
                },
                {
                    image: './assets/img/5.png'
                },
                {
                    image: './assets/img/6.png'
                },
                {
                    image: './assets/img/7.png'
                },
            ],
            update: [
                {
                    log: '1. 优化应用功能布局，优化架构、响应速度'
                },
                {
                    log: '2. 修改了壁纸预览、头像预览的界面'
                },
                {
                    log: '3. 各搜索壁纸头像功能整合成为聚合搜图'
                },
                {
                    log: '4. 壁纸大全聚合了不同的10个接口'
                },
                {
                    log: '5. 新增哔哩哔哩解析功能'
                },
                {
                    log: '6. 各界面统一布局，界面更加美观'
                },
                {
                    log: '7. 已将MiSans删减版字体改用Material Design字体'
                }
            ],
            connect: [
                {
                    name: '联系作者',
                    url: 'http://wpa.qq.com/msgrd?v=3&uin=2858727468&site=qq&menu=yes'
                },
                {
                    name: '加入Q群',
                    url: 'https://jq.qq.com/?_wv=1027&k=RYIloXIj'
                }
            ],
            history: [
                {
                    version: '2.3.25',
                    volume: '12.45MB',
                    time: '2022-05-25',
                    url: 'https://wwa.lanzoui.com/itWwd05exy7e'
                },
                {
                    version: '2.1.4',
                    volume: '15.78MB',
                    time: '2021-11-11',
                    url: '/'
                }
            ],
            friend: [
                {
                    name: '柒伍七の鱼',
                    url: 'https://s757129.github.io'
                }
            ]
        }
    }
})
vm.$mount('#root')
