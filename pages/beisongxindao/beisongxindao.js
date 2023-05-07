// pages/statistics/statistics.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        xianshi:true,
        dijiti:0,
        yishi:true,
        xuexi:true,
        jiyi:true,
        yuyan:true,
        siwei:true,
        zhili:true,
        dongji:true,
        qingxu:true,
        fazhan:true,
        renge:true,
        shehui:true,
        jiankang:true,
        zhangai:true,
        zhiliao:true
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        let dijige = options.dijige
        this.setData({
            dijige:dijige
        })
        if(this.data.dijige=="yishi"){
            this.setData({
                yishi:false
            })
        } else if(this.data.dijige=="xuexi"){
            this.setData({
                xuexi:false
            })
        } else if(this.data.dijige=="jiyi"){
            this.setData({
                jiyi:false
            })
        } else if(this.data.dijige=="yuyan"){
            this.setData({
                yuyan:false
            })
        } else if(this.data.dijige=="siwei"){
            this.setData({
                siwei:false
            })
        } else if(this.data.dijige=="zhili"){
            this.setData({
                zhili:false
            })
        } else if(this.data.dijige=="dongji"){
            this.setData({
                dongji:false
            })
        } else if(this.data.dijige=="qingxu"){
            this.setData({
                qingxu:false
            })
        } else if(this.data.dijige=="fazhan"){
            this.setData({
                fazhan:false
            })
        } else if(this.data.dijige=="renge"){
            this.setData({
                renge:false
            })
        } else if(this.data.dijige=="shehui"){
            this.setData({
                shehui:false
            })
        } else if(this.data.dijige=="jiankang"){
            this.setData({
                jiankang:false
            })
        }  else if(this.data.dijige=="zhangai"){
            this.setData({
                zhangai:false
            })
        }  else if(this.data.dijige=="zhiliao"){
            this.setData({
                zhiliao:false
            })
        } else if(this.data.dijige==15){
            this.setData({
                di15:false
            })
        } else if(this.data.dijige==16){
            this.setData({
                di16:false
            })
        } else if(this.data.dijige==17){
            this.setData({
                di17:false
            })
        } else if(this.data.dijige==18){
            this.setData({
                di18:false
            })
        } else if(this.data.dijige==19){
            this.setData({
                di19:false
            })
        } else if(this.data.dijige==20){
            this.setData({
                di20:false
            })
        }  else if(this.data.dijige==21){
            this.setData({
                di21:false
            })
        } else if(this.data.dijige==22){
            this.setData({
                di22:false
            })
        } else if(this.data.dijige==23){
            this.setData({
                di23:false
            })
        } else if(this.data.dijige==24){
            this.setData({
                di24:false
            })
        }
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

    tishiyixia() {
        var flagxianshi = this.data.xianshi+1
        this.setData({
            xianshi: flagxianshi%2
        })
    }
})