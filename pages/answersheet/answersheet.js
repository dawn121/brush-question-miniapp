// pages/answersheet/answersheet.js
import * as echarts from "../../ec-canvas/echarts"
var echart_max= [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var echart_yours= [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var codeid = 3
function initChart(canvas, width, height, dpr) {
    const chart = echarts.init(canvas, null, {
      width: width,
      height: height,
      devicePixelRatio: dpr // 像素
    });
    canvas.setChart(chart);
    var option = {
        title: {
            text: ''
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          legend: {},
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
          },
          yAxis: {
            type: 'category',
            data: ['概述', '生物', '意识', '学习', '记忆','语言', '思维', '智力', '动机', '情绪','发展', '人格', '社会', '健康', '障碍', '治疗']
          },
          series: [
            {
              name: '您的得分',
              type: 'bar',
              data: echart_yours
            },
            {
              name: '满分',
              type: 'bar',
              data: echart_max
            }
          ]
    };
    chart.setOption(option);
    return chart;
  }

Page({

    /**
     * 页面的初始数据
     */
    data: {
        scoresheet:[],
        scoresheet_kancuoti:[],
        ec: {
            onInit: initChart
          },
          linianzhenti:true

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        echart_yours= JSON.parse(options.echart_yours),
        echart_max= JSON.parse(options.echart_max),
        codeid= JSON.parse(options.codeid),
        this.setData({
            scoresheet : JSON.parse(options.scoresheet),
        })     
        if(codeid == 0) {
            this.setData({
                linianzhenti: false
            })
        }
    },
    
    jixunuli(events) {
        if(codeid == 0) {
            wx.navigateTo({
                url: '/pages/introductorytheory/introductorytheory',
                events: events,
                success: (result) => {},
                fail: (res) => {},
                complete: (res) => {},
            })
        } else if (codeid == 1) {
            wx.navigateTo({
                url: '/pages/introductorytheory/introductorytheory',
                events: events,
                success: (result) => {},
                fail: (res) => {},
                complete: (res) => {},
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

    chakancuoti(e) {
        wx.navigateTo({
            url: '/pages/xuanzeti/xuanzeti?index=' + e.currentTarget.dataset.index 
        })
        
    }
})
