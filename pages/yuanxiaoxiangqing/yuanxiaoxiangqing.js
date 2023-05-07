// pages/yuanxiaoxiangqing/yuanxiaoxiangqing.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        index_shengfen: 0,
        shengfen: ['广东省','四川省','江西省'],
        index_fenlei: 0,
        fenlei: ['985院校','211院校','双非院校'],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },
    yuanxiaoxiangqingxijie(events) {
        wx.navigateTo({
            url: '/pages/yuanxiaoxiangqing_index/yuanxiaoxiangqing_index',
            events: events,
            success: (result) => {},
            fail: (res) => {},
            complete: (res) => {},
        })
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

    },
    bindPickerChange1(events) {
        this.setData({
            index_shengfen: events.detail.value
          })
    },
    bindPickerChange2(events) {
        this.setData({
            index_fenlei: events.detail.value
          })
    },
})