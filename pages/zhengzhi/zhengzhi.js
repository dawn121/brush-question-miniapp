// pages/zhengzhi/zhengzhi.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        yuanli: true,
        dijige: 0,
        zhongte24: true,
        shigang: true,
        sixiu: true,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        const param = { //请求接口的参数
            //根据接口要求的参数
            //根据接口要求的参数
        }
        this.getData(param).then(res => { //调用promise实例的then方法获取返回结果
            console.log(res) //res为返回的结果
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

    },

    getData(param) {
        return new Promise((resolve, reject) => { //创建promise实例
            //请求接口
            wx.request({ //微信小程序官方的请求接口的方法
                url: 'http://127.0.0.1:8000/api/v1/question', //自己的接口地址
                data: param, //请求接口的参数，通过调用getData方法传递的
                method: 'GET', //请求方式
                success: (res) => { //接口调用成功时，调用promise的resolve
                    resolve(res);
                    console.log(param)
                },
                fail: (error) => { //接口调用失败时，调用promise的reject
                    reject(error)
                }
            })
        })
    },

    yuanli24() {
        this.setData({
            yuanli: !this.data.yuanli
        })
    },
    zhongte24() {
        this.setData({
            zhongte24: !this.data.zhongte24
        })
    },
    shigang() {
        this.setData({
            shigang: !this.data.shigang
        })
    },
    sixiu() {
        this.setData({
            sixiu: !this.data.sixiu
        })
    },

    navigateTobianzhengfa(events) {
        wx.navigateTo({
            url: '/pages/bianzhengfa/bianzhengfa?dijige=' + this.data.dijige,
            events: events,
            success: (result) => {},
            fail: (res) => {},
            complete: (res) => {},
        })
    },

    di1ge(events) {
        this.setData({
            dijige: 1
        })
        this.navigateTobianzhengfa(events)
    },
    di2ge(events) {
        this.setData({
            dijige: 2
        })
        this.navigateTobianzhengfa(events)
    },
    di3ge(events) {
        this.setData({
            dijige: 3
        })
        this.navigateTobianzhengfa(events)
    },
    di4ge(events) {
        this.setData({
            dijige: 4
        })
        this.navigateTobianzhengfa(events)
    },
    di5ge(events) {
        this.setData({
            dijige: 5
        })
        this.navigateTobianzhengfa(events)
    },
    di6ge(events) {
        this.setData({
            dijige: 6
        })
        this.navigateTobianzhengfa(events)
    },
    di7ge(events) {
        this.setData({
            dijige: 7
        })
        this.navigateTobianzhengfa(events)
    },
    di8ge(events) {
        this.setData({
            dijige: 8
        })
        this.navigateTobianzhengfa(events)
    },
    di9ge(events) {
        this.setData({
            dijige: 9
        })
        this.navigateTobianzhengfa(events)
    },
    di10ge(events) {
        this.setData({
            dijige: 10
        })
        this.navigateTobianzhengfa(events)
    },
    di11ge(events) {
        this.setData({
            dijige: 11
        })
        this.navigateTobianzhengfa(events)
    },
    di12ge(events) {
        this.setData({
            dijige: 12
        })
        this.navigateTobianzhengfa(events)
    },
    di13ge(events) {
        this.setData({
            dijige: 13
        })
        this.navigateTobianzhengfa(events)
    },
    di14ge(events) {
        this.setData({
            dijige: 14
        })
        this.navigateTobianzhengfa(events)
    },
    di15ge(events) {
        this.setData({
            dijige: 15
        })
        this.navigateTobianzhengfa(events)
    },
    di16ge(events) {
        this.setData({
            dijige: 16
        })
        this.navigateTobianzhengfa(events)
    },
    di17ge(events) {
        this.setData({
            dijige: 17
        })
        this.navigateTobianzhengfa(events)
    },
    di18ge(events) {
        this.setData({
            dijige: 18
        })
        this.navigateTobianzhengfa(events)
    },
    di19ge(events) {
        this.setData({
            dijige: 19
        })
        this.navigateTobianzhengfa(events)
    },
    di20ge(events) {
        this.setData({
            dijige: 20
        })
        this.navigateTobianzhengfa(events)
    },
    di21ge(events) {
        this.setData({
            dijige: 21
        })
        this.navigateTobianzhengfa(events)
    },
    di22ge(events) {
        this.setData({
            dijige: 22
        })
        this.navigateTobianzhengfa(events)
    },
    di23ge(events) {
        this.setData({
            dijige: 23
        })
        this.navigateTobianzhengfa(events)
    },
    di24ge(events) {
        this.setData({
            dijige: 24
        })
        this.navigateTobianzhengfa(events)
    },
    di25ge(events) {
        this.setData({
            dijige: 25
        })
        this.navigateTobianzhengfa(events)
    },
    di26ge(events) {
        this.setData({
            dijige: 26
        })
        this.navigateTobianzhengfa(events)
    },
    di27ge(events) {
        this.setData({
            dijige: 27
        })
        this.navigateTobianzhengfa(events)
    },
    di28ge(events) {
        this.setData({
            dijige: 28
        })
        this.navigateTobianzhengfa(events)
    },
    di29ge(events) {
        this.setData({
            dijige: 29
        })
        this.navigateTobianzhengfa(events)
    },
    di30ge(events) {
        this.setData({
            dijige: 30
        })
        this.navigateTobianzhengfa(events)
    },
    di31ge(events) {
        this.setData({
            dijige: 31
        })
        this.navigateTobianzhengfa(events)
    },
    di32ge(events) {
        this.setData({
            dijige: 32
        })
        this.navigateTobianzhengfa(events)
    },
    di33ge(events) {
        this.setData({
            dijige: 33
        })
        this.navigateTobianzhengfa(events)
    },
    di34ge(events) {
        this.setData({
            dijige: 34
        })
        this.navigateTobianzhengfa(events)
    },
    di35ge(events) {
        this.setData({
            dijige: 35
        })
        this.navigateTobianzhengfa(events)
    },
    di36ge(events) {
        this.setData({
            dijige: 36
        })
        this.navigateTobianzhengfa(events)
    },
    di37ge(events) {
        this.setData({
            dijige: 37
        })
        this.navigateTobianzhengfa(events)
    },
    di38ge(events) {
        this.setData({
            dijige: 38
        })
        this.navigateTobianzhengfa(events)
    },
    di39ge(events) {
        this.setData({
            dijige: 39
        })
        this.navigateTobianzhengfa(events)
    },
    di40ge(events) {
        this.setData({
            dijige: 40
        })
        this.navigateTobianzhengfa(events)
    },
    di41ge(events) {
        this.setData({
            dijige: 41
        })
        this.navigateTobianzhengfa(events)
    },
    di42ge(events) {
        this.setData({
            dijige: 42
        })
        this.navigateTobianzhengfa(events)
    },
    di43ge(events) {
        this.setData({
            dijige: 43
        })
        this.navigateTobianzhengfa(events)
    },
    di44ge(events) {
        this.setData({
            dijige: 44
        })
        this.navigateTobianzhengfa(events)
    },
    di45ge(events) {
        this.setData({
            dijige: 45
        })
        this.navigateTobianzhengfa(events)
    },
    di46ge(events) {
        this.setData({
            dijige: 46
        })
        this.navigateTobianzhengfa(events)
    },
    di47ge(events) {
        this.setData({
            dijige: 47
        })
        this.navigateTobianzhengfa(events)
    },
    di48ge(events) {
        this.setData({
            dijige: 48
        })
        this.navigateTobianzhengfa(events)
    },
    di49ge(events) {
        this.setData({
            dijige: 49
        })
        this.navigateTobianzhengfa(events)
    },
    di50ge(events) {
        this.setData({
            dijige: 50
        })
        this.navigateTobianzhengfa(events)
    },
    di51ge(events) {
        this.setData({
            dijige: 51
        })
        this.navigateTobianzhengfa(events)
    },
    di52ge(events) {
        this.setData({
            dijige: 52
        })
        this.navigateTobianzhengfa(events)
    },
    di53ge(events) {
        this.setData({
            dijige: 53
        })
        this.navigateTobianzhengfa(events)
    },
    di54ge(events) {
        this.setData({
            dijige: 54
        })
        this.navigateTobianzhengfa(events)
    },
    di55ge(events) {
        this.setData({
            dijige: 55
        })
        this.navigateTobianzhengfa(events)
    },
    di56ge(events) {
        this.setData({
            dijige: 56
        })
        this.navigateTobianzhengfa(events)
    },
    di57ge(events) {
        this.setData({
            dijige: 57
        })
        this.navigateTobianzhengfa(events)
    },
    di58ge(events) {
        this.setData({
            dijige: 58
        })
        this.navigateTobianzhengfa(events)
    },
    di59ge(events) {
        this.setData({
            dijige: 59
        })
        this.navigateTobianzhengfa(events)
    },
    di60ge(events) {
        this.setData({
            dijige: 60
        })
        this.navigateTobianzhengfa(events)
    },
    di61ge(events) {
        this.setData({
            dijige: 61
        })
        this.navigateTobianzhengfa(events)
    },
    di62ge(events) {
        this.setData({
            dijige: 62
        })
        this.navigateTobianzhengfa(events)
    },
    di63ge(events) {
        this.setData({
            dijige: 63
        })
        this.navigateTobianzhengfa(events)
    },
    di64ge(events) {
        this.setData({
            dijige: 64
        })
        this.navigateTobianzhengfa(events)
    },
    di65ge(events) {
        this.setData({
            dijige: 65
        })
        this.navigateTobianzhengfa(events)
    },
    di66ge(events) {
        this.setData({
            dijige: 66
        })
        this.navigateTobianzhengfa(events)
    },
    di67ge(events) {
        this.setData({
            dijige: 67
        })
        this.navigateTobianzhengfa(events)
    },
    di68ge(events) {
        this.setData({
            dijige: 68
        })
        this.navigateTobianzhengfa(events)
    },
    di69ge(events) {
        this.setData({
            dijige: 69
        })
        this.navigateTobianzhengfa(events)
    },
    di70ge(events) {
        this.setData({
            dijige: 70
        })
        this.navigateTobianzhengfa(events)
    },
    di71ge(events) {
        this.setData({
            dijige: 71
        })
        this.navigateTobianzhengfa(events)
    },
    di72ge(events) {
        this.setData({
            dijige: 72
        })
        this.navigateTobianzhengfa(events)
    },
    di73ge(events) {
        this.setData({
            dijige: 73
        })
        this.navigateTobianzhengfa(events)
    },
    di74ge(events) {
        this.setData({
            dijige: 74
        })
        this.navigateTobianzhengfa(events)
    },
    di75ge(events) {
        this.setData({
            dijige: 75
        })
        this.navigateTobianzhengfa(events)
    },
    di76ge(events) {
        this.setData({
            dijige: 76
        })
        this.navigateTobianzhengfa(events)
    },
    di77ge(events) {
        this.setData({
            dijige: 77
        })
        this.navigateTobianzhengfa(events)
    },
    di78ge(events) {
        this.setData({
            dijige: 78
        })
        this.navigateTobianzhengfa(events)
    },
    di79ge(events) {
        this.setData({
            dijige: 79
        })
        this.navigateTobianzhengfa(events)
    },
})