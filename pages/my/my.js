// pages/my/my.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        openid: "",
        avatarUrl: "",
        isup: true,
        show: true,
        showIndex:null,//打开弹窗的对应下标
    height:'',//屏幕高度
        buttons: [
            {
                type: 'default',
                className: '',
                text: '辅助操作',
                value: 0
            },
            {
                type: 'primary',
                className: '',
                text: '主操作',
                value: 1
            }
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    login(events) {
        this.lolo().then(res => {
            console.log(res)
        })
        this.setData({
        //    show: !this.data.show
        })
    },
    lolo() {
        var that = this
        return new Promise((resolve, reject) => {
            wx.getUserInfo({
                success: (res) => {

                    that.setData({
                        isup: !this.data.isup
                    })
                }

            })
        })

    },
    submit(events) {
        this.setData({
          //  show : !this.data.show
        })
    },
    openPopup(e){
        var index = e.currentTarget.dataset.index;
        this.setData({
          showIndex:index
        })
      },
      //关闭弹窗
      closePopup(){
        this.setData({
          showIndex:null
        })
      },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
        var that = this;
        // 动态获取屏幕高度
        wx.getSystemInfo({
          success: (result) => {
            that.setData({
              height: result.windowHeight
            });
          },
        })
    },
    yuanxiaoxiangqing(events) {
        wx.navigateTo({
            url: '/pages/yuanxiaoxiangqing/yuanxiaoxiangqing',
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

    }
})