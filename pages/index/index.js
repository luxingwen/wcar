//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        motto: 'Hello World',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        date: '2018-12-25',
        arean: [
            { name: "个旧" },
            { name: "蒙自" },
            { name: "开远" },
            { name: "弥勒" },
            { name: "建水" },
            { name: "石屏" },
            { name: "绿春" },
            { name: "泸西" },
            { name: "元阳" },
            { name: "红河" },
            { name: "金平" },
            { name: "河口" },
            { name: "屏边" }
        ],
        index: 0,
        index2: 1
    },
    //事件处理函数
    bindViewTap: function() {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },

    onLoad: function() {
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true
            })
        } else if (this.data.canIUse) {
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            app.userInfoReadyCallback = res => {
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                })
            }
        } else {
            // 在没有 open-type=getUserInfo 版本的兼容处理
            wx.getUserInfo({
                success: res => {
                    app.globalData.userInfo = res.userInfo
                    this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    })
                }
            })
        }
    },
    getUserInfo: function(e) {
        console.log(e)
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    },
    bindPickerChange: function(e) {
        this.setData({
            index: e.detail.value
        })
    },
    bindPickerChange2: function(e) {
        this.setData({
            index2: e.detail.value
        })
    },
})