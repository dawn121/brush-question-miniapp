Page({

    /**
     * 页面的初始数据
     */
    data: {
        type: "",
        daolun: true,
        shiyan: true,
        tongji: true,
        codeid: 1
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    daolun(events) {
        this.setData({
            daolun: !this.data.daolun
        })
    },

    shiyan(events) {
        this.setData({
            shiyan: !this.data.shiyan
        })
    },

    tongji(events) {
        this.setData({
            tongji: !this.data.tongji
        })
    },

    gaishu(events) {
        this.setData({
            type: "subject=导论&type=概述"
        })
        wx.navigateTo({
            url: '/pages/xuanzeti/xuanzeti?type=' + encodeURIComponent(this.data.type)  +'&codeid=' + this.data.codeid,
            events: events,
            success: (result) => {},
            fail: (res) => {},
            complete: (res) => {},
        })
    },

    biology(events) {
        this.setData({
            type: "type=生物"
        })
        wx.navigateTo({
            url: '/pages/xuanzeti/xuanzeti?type=' + encodeURIComponent(this.data.type)  +'&codeid=' + this.data.codeid,
            events: events,
            success: (result) => {},
            fail: (res) => {},
            complete: (res) => {},
        })
    },

    yishi(events) {
        this.setData({
            type: "type=意识"
        })
        wx.navigateTo({
            url: '/pages/xuanzeti/xuanzeti?type=' + encodeURIComponent(this.data.type)  +'&codeid=' + this.data.codeid,
            events: events,
            success: (result) => {},
            fail: (res) => {},
            complete: (res) => {},
        })
    },
    xuexi(events) {
        this.setData({
            type: "type=学习"
        })
        wx.navigateTo({
            url: '/pages/xuanzeti/xuanzeti?type=' + encodeURIComponent(this.data.type)  +'&codeid=' + this.data.codeid,
            events: events,
            success: (result) => {},
            fail: (res) => {},
            complete: (res) => {},
        })
    },

    jiyi(events) {
        this.setData({
            type: "type=记忆"
        })
        wx.navigateTo({
            url: '/pages/xuanzeti/xuanzeti?type=' + encodeURIComponent(this.data.type)  +'&codeid=' + this.data.codeid,
            events: events,
            success: (result) => {},
            fail: (res) => {},
            complete: (res) => {},
        })
    },
    yuyan(events) {
        this.setData({
            type: "type=语言"
        })
        wx.navigateTo({
            url: '/pages/xuanzeti/xuanzeti?type=' + encodeURIComponent(this.data.type)  +'&codeid=' + this.data.codeid,
            events: events,
            success: (result) => {},
            fail: (res) => {},
            complete: (res) => {},
        })
    },
    siwei(events) {
        this.setData({
            type: "type=思维"
        })
        wx.navigateTo({
            url: '/pages/xuanzeti/xuanzeti?type=' + encodeURIComponent(this.data.type)  +'&codeid=' + this.data.codeid,
            events: events,
            success: (result) => {},
            fail: (res) => {},
            complete: (res) => {},
        })
    },
    zhili(events) {
        this.setData({
            type: "type=智力"
        })
        wx.navigateTo({
            url: '/pages/xuanzeti/xuanzeti?type=' + encodeURIComponent(this.data.type)  +'&codeid=' + this.data.codeid,
            events: events,
            success: (result) => {},
            fail: (res) => {},
            complete: (res) => {},
        })
    },
    dongji(events) {
        this.setData({
            type: "type=动机"
        })
        wx.navigateTo({
            url: '/pages/xuanzeti/xuanzeti?type=' + encodeURIComponent(this.data.type)  +'&codeid=' + this.data.codeid,
            events: events,
            success: (result) => {},
            fail: (res) => {},
            complete: (res) => {},
        })
    },
    qingxu(events) {
        this.setData({
            type: "type=情绪"
        })
        wx.navigateTo({
            url: '/pages/xuanzeti/xuanzeti?type=' + encodeURIComponent(this.data.type)  +'&codeid=' + this.data.codeid,
            events: events,
            success: (result) => {},
            fail: (res) => {},
            complete: (res) => {},
        })
    },
    fazhan(events) {
        this.setData({
            type: "type=发展"
        })
        wx.navigateTo({
            url: '/pages/xuanzeti/xuanzeti?type=' + encodeURIComponent(this.data.type)  +'&codeid=' + this.data.codeid,
            events: events,
            success: (result) => {},
            fail: (res) => {},
            complete: (res) => {},
        })
    },
    renge(events) {
        this.setData({
            type: "type=人格"
        })
        wx.navigateTo({
            url: '/pages/xuanzeti/xuanzeti?type=' + encodeURIComponent(this.data.type)  +'&codeid=' + this.data.codeid,
            events: events,
            success: (result) => {},
            fail: (res) => {},
            complete: (res) => {},
        })
    },
    shehui(events) {
        this.setData({
            type: "type=社会"
        })
        wx.navigateTo({
            url: '/pages/xuanzeti/xuanzeti?type=' + encodeURIComponent(this.data.type)  +'&codeid=' + this.data.codeid,
            events: events,
            success: (result) => {},
            fail: (res) => {},
            complete: (res) => {},
        })
    },
    jiankang(events) {
        this.setData({
            type: "type=健康"
        })
        wx.navigateTo({
            url: '/pages/xuanzeti/xuanzeti?type=' + encodeURIComponent(this.data.type)  +'&codeid=' + this.data.codeid,
            events: events,
            success: (result) => {},
            fail: (res) => {},
            complete: (res) => {},
        })
    },
    zhangai(events) {
        this.setData({
            type: "type=障碍"
        })
        wx.navigateTo({
            url: '/pages/xuanzeti/xuanzeti?type=' + encodeURIComponent(this.data.type)  +'&codeid=' + this.data.codeid,
            events: events,
            success: (result) => {},
            fail: (res) => {},
            complete: (res) => {},
        })
    },
    zhiliao(events) {
        this.setData({
            type: "type=治疗"
        })
        wx.navigateTo({
            url: '/pages/xuanzeti/xuanzeti?type=' + encodeURIComponent(this.data.type)  +'&codeid=' + this.data.codeid,
            events: events,
            success: (result) => {},
            fail: (res) => {},
            complete: (res) => {},
        })
    },
    gaishu2(events) {
        this.setData({
            type: "subject=实验&type=概述"
        })
        wx.navigateTo({
            url: '/pages/xuanzeti/xuanzeti?type=' + encodeURIComponent(this.data.type)  +'&codeid=' + this.data.codeid,
            events: events,
            success: (result) => {},
            fail: (res) => {},
            complete: (res) => {},
        })
    },
    sheji(events) {
        this.setData({
            type: "type=设计"
        })
        wx.navigateTo({
            url: '/pages/xuanzeti/xuanzeti?type=' + encodeURIComponent(this.data.type)  +'&codeid=' + this.data.codeid,
            events: events,
            success: (result) => {},
            fail: (res) => {},
            complete: (res) => {},
        })
    },
    fanying(events) {
        this.setData({
            type: "type=反应"
        })
        wx.navigateTo({
            url: '/pages/xuanzeti/xuanzeti?type=' + encodeURIComponent(this.data.type)  +'&codeid=' + this.data.codeid,
            events: events,
            success: (result) => {},
            fail: (res) => {},
            complete: (res) => {},
        })
    },
    wuli(events) {
        this.setData({
            type: "type=物理"
        })
        wx.navigateTo({
            url: '/pages/xuanzeti/xuanzeti?type=' + encodeURIComponent(this.data.type)  +'&codeid=' + this.data.codeid,
            events: events,
            success: (result) => {},
            fail: (res) => {},
            complete: (res) => {},
        })
    },
    shiyan2(events) {
        this.setData({
            type: "type=实验"
        })
        wx.navigateTo({
            url: '/pages/xuanzeti/xuanzeti?type=' + encodeURIComponent(this.data.type)  +'&codeid=' + this.data.codeid,
            events: events,
            success: (result) => {},
            fail: (res) => {},
            complete: (res) => {},
        })
    },
    miaoshu(events) {
        this.setData({
            type: "type=描述"
        })
        wx.navigateTo({
            url: '/pages/xuanzeti/xuanzeti?type=' + encodeURIComponent(this.data.type)  +'&codeid=' + this.data.codeid,
            events: events,
            success: (result) => {},
            fail: (res) => {},
            complete: (res) => {},
        })
    },
    tuiduan(events) {
        this.setData({
            type: "type=推断"
        })
        wx.navigateTo({
            url: '/pages/xuanzeti/xuanzeti?type=' + encodeURIComponent(this.data.type)  +'&codeid=' + this.data.codeid,
            events: events,
            success: (result) => {},
            fail: (res) => {},
            complete: (res) => {},
        })
    },
})