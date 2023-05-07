// pages/linianzhenti/linianzhenti.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        nianfen: "",
        codeid: 0
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    zhenti2022(events) {
        this.setData({
            nianfen: "nianfen=2022"
        })
        wx.navigateTo({
            url: '/pages/xuanzeti/xuanzeti?nianfen=' + encodeURIComponent(this.data.nianfen) +'&codeid=' + this.data.codeid,
            events: events,
            success: (result) => {},
            fail: (res) => {},
            complete: (res) => {},
        })
    },

    zhenti2021(events) {
        this.setData({
            nianfen: "nianfen=2021"
        })
        wx.navigateTo({
            url: '/pages/xuanzeti/xuanzeti?nianfen=' + encodeURIComponent(this.data.nianfen) +'&codeid=' + this.data.codeid,
            events: events,
            success: (result) => {},
            fail: (res) => {},
            complete: (res) => {},
        })
    },

    zhenti2020(events) {
        this.setData({
            nianfen: "nianfen=2020"
        })
        wx.navigateTo({
            url: '/pages/xuanzeti/xuanzeti?nianfen=' + encodeURIComponent(this.data.nianfen) +'&codeid=' + this.data.codeid ,
            events: events,
            success: (result) => {},
            fail: (res) => {},
            complete: (res) => {},
        })
    },

    zhenti2019(events) {
        this.setData({
            nianfen: "nianfen=2019"
        })
        wx.navigateTo({
            url: '/pages/xuanzeti/xuanzeti?nianfen=' + encodeURIComponent(this.data.nianfen)  +'&codeid=' + this.data.codeid,
            events: events,
            success: (result) => {},
            fail: (res) => {},
            complete: (res) => {},
        })
    },

    zhenti2018(events) {
        this.setData({
            nianfen: "nianfen=2018"
        })
        wx.navigateTo({
            url: '/pages/xuanzeti/xuanzeti?nianfen=' + encodeURIComponent(this.data.nianfen) +'&codeid=' + this.data.codeid,
            events: events,
            success: (result) => {},
            fail: (res) => {},
            complete: (res) => {},
        })
    },
    
    zhenti2017(events) {
        this.setData({
            nianfen: "nianfen=2017"
        })
        wx.navigateTo({
            url: '/pages/xuanzeti/xuanzeti?nianfen=' + encodeURIComponent(this.data.nianfen) +'&codeid=' + this.data.codeid,
            events: events,
            success: (result) => {},
            fail: (res) => {},
            complete: (res) => {},
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})