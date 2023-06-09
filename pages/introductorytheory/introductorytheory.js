Page({

    /**
     * 页面的初始数据
     */
    data: {
        leibie: "",
        beikaodian: true,
        index_school: 0,
        school: ['中山大学','广外','广中医','中科院'],
        touxiangurl: "/../lib/img/touxiang.jfif"
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    mingcijieshi(events) {
        wx.navigateTo({
            url: '/pages/mingcijieshi/mingcijieshi',
            events: events,
            success: (result) => {},
            fail: (res) => {},
            complete: (res) => {},
        })
    },

    my(events) {
        wx.navigateTo({
            url: '/pages/my/my',
            events: events,
            success: (result) => {},
            fail: (res) => {},
            complete: (res) => {},
        })
    },

    bindPickerChange(events) {
        this.setData({
            index_school: events.detail.value
          })
    },

    kaodianshuati(events) {
        wx.navigateTo({
            url: '/pages/introductorytheory_kaodianshuati/introductorytheory_kaodianshuati',
            events: events,
            success: (result) => {},
            fail: (res) => {},
            complete: (res) => {},
        })
    },

    jiyika(events) {
        wx.navigateTo({
            url: '/pages/introductorytheory_jiyika/introductorytheory_jiyika',
            events: events,
            success: (result) => {},
            fail: (res) => {},
            complete: (res) => {},
        })
    },

    biology(events) {
        this.setData({
            leibie: "biology"
        })
        wx.navigateTo({
            url: '/pages/xuanzeti/xuanzeti?leibie=' + this.data.leibie,
            events: events,
            success: (result) => {},
            fail: (res) => {},
            complete: (res) => {},
        })
    },

    linianzhenti(events) {
        wx.navigateTo({
            url: '/pages/linianzhenti/linianzhenti',
            events: events,
            success: (result) => {},
            fail: (res) => {},
            complete: (res) => {},
        })
    },

    yishi(events) {
        this.setData({
            dijige: "yishi"
        })
        wx.navigateTo({
            url: '/pages/beisongxindao/beisongxindao?dijige=' + this.data.dijige,
            events: events,
            success: (result) => {},
            fail: (res) => {},
            complete: (res) => {},
        })
    },
    xuexi(events) {
        this.setData({
            dijige: "xuexi"
        })
        wx.navigateTo({
            url: '/pages/beisongxindao/beisongxindao?dijige=' + this.data.dijige,
            events: events,
            success: (result) => {},
            fail: (res) => {},
            complete: (res) => {},
        })
    },

    jiyi(events) {
        this.setData({
            dijige: "jiyi"
        })
        wx.navigateTo({
            url: '/pages/beisongxindao/beisongxindao?dijige=' + this.data.dijige,
            events: events,
            success: (result) => {},
            fail: (res) => {},
            complete: (res) => {},
        })
    },
    yuyan(events) {
        this.setData({
            dijige: "yuyan"
        })
        wx.navigateTo({
            url: '/pages/beisongxindao/beisongxindao?dijige=' + this.data.dijige,
            events: events,
            success: (result) => {},
            fail: (res) => {},
            complete: (res) => {},
        })
    },
    siwei(events) {
        this.setData({
            dijige: "siwei"
        })
        wx.navigateTo({
            url: '/pages/beisongxindao/beisongxindao?dijige=' + this.data.dijige,
            events: events,
            success: (result) => {},
            fail: (res) => {},
            complete: (res) => {},
        })
    },
    zhili(events) {
        this.setData({
            dijige: "zhili"
        })
        wx.navigateTo({
            url: '/pages/beisongxindao/beisongxindao?dijige=' + this.data.dijige,
            events: events,
            success: (result) => {},
            fail: (res) => {},
            complete: (res) => {},
        })
    },
    dongji(events) {
        this.setData({
            dijige: "dongji"
        })
        wx.navigateTo({
            url: '/pages/beisongxindao/beisongxindao?dijige=' + this.data.dijige,
            events: events,
            success: (result) => {},
            fail: (res) => {},
            complete: (res) => {},
        })
    },
    qingxu(events) {
        this.setData({
            dijige: "qingxu"
        })
        wx.navigateTo({
            url: '/pages/beisongxindao/beisongxindao?dijige=' + this.data.dijige,
            events: events,
            success: (result) => {},
            fail: (res) => {},
            complete: (res) => {},
        })
    },
    fazhan(events) {
        this.setData({
            dijige: "fazhan"
        })
        wx.navigateTo({
            url: '/pages/beisongxindao/beisongxindao?dijige=' + this.data.dijige,
            events: events,
            success: (result) => {},
            fail: (res) => {},
            complete: (res) => {},
        })
    },
    renge(events) {
        this.setData({
            dijige: "renge"
        })
        wx.navigateTo({
            url: '/pages/beisongxindao/beisongxindao?dijige=' + this.data.dijige,
            events: events,
            success: (result) => {},
            fail: (res) => {},
            complete: (res) => {},
        })
    },
    shehui(events) {
        this.setData({
            dijige: "shehui"
        })
        wx.navigateTo({
            url: '/pages/beisongxindao/beisongxindao?dijige=' + this.data.dijige,
            events: events,
            success: (result) => {},
            fail: (res) => {},
            complete: (res) => {},
        })
    },
    jiankang(events) {
        this.setData({
            dijige: "jiankang"
        })
        wx.navigateTo({
            url: '/pages/beisongxindao/beisongxindao?dijige=' + this.data.dijige,
            events: events,
            success: (result) => {},
            fail: (res) => {},
            complete: (res) => {},
        })
    },
    zhangai(events) {
        this.setData({
            dijige: "zhangai"
        })
        wx.navigateTo({
            url: '/pages/beisongxindao/beisongxindao?dijige=' + this.data.dijige,
            events: events,
            success: (result) => {},
            fail: (res) => {},
            complete: (res) => {},
        })
    },
    zhiliao(events) {
        this.setData({
            dijige: "zhiliao"
        })
        wx.navigateTo({
            url: '/pages/beisongxindao/beisongxindao?dijige=' + this.data.dijige,
            events: events,
            success: (result) => {},
            fail: (res) => {},
            complete: (res) => {},
        })
    },
})