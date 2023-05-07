// pages/mingcijieshi/mingcijieshi.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        jiexi:true,
        list: [
            {
                "Id": 1,
                "Title": "双盲实验",
                "Answer": "双盲实验是消除实验者效应最好的办法，即实验者和实验参与者都不知道哪些被试接受哪种实验条件。这种技术在空气污染的行为效应的研究中常常使用。",
                "Type": "实验",
                "School": "中山大学",
                "createdAt": "0001-01-01T00:00:00Z",
                "updatedAt": "0001-01-01T00:00:00Z"
            },
            {
                "Id": 2,
                "Title": "速度与准确率的权衡",
                "Answer": "在操作的速度和准确性之间存在反向关系。当急于做某件事的时候，更可能出差错;当试图准确地完成某件事时，为达到预期的准确性，必须放慢工作速度。这一关系被称为速度-准确性权衡。",
                "Type": "实验",
                "School": "中山大学",
                "createdAt": "0001-01-01T00:00:00Z",
                "updatedAt": "0001-01-01T00:00:00Z"
            },
            {
                "Id": 3,
                "Title": "操作定义",
                "Answer": "操作性定义是以测量它或决定它存在的特定的操作或程序来界定一个概念，在一个实验内使含义标准化。一个实验中的所有变量必须给予操作性定义",
                "Type": "实验",
                "School": "中山大学",
                "createdAt": "0001-01-01T00:00:00Z",
                "updatedAt": "0001-01-01T00:00:00Z"
            },
            {
                "Id": 4,
                "Title": "差别阈限",
                "Answer": "指感觉所能察觉的刺激物的最小差异量,它是将一个恒定不变的标准刺激判断与一系列变化的刺激进行对比的结果",
                "Type": "实验",
                "School": "中山大学",
                "createdAt": "0001-01-01T00:00:00Z",
                "updatedAt": "0001-01-01T00:00:00Z"
            },
            {
                "Id": 5,
                "Title": "向平均数回归",
                "Answer": "向平均数回归指的是测量值向平均数靠近的现象。例如非常高者孩子的身高有比其父母更矮的趋势B21同样，非常矮者孩子的身高也有比其父母更高的趋势，这种趋势叫做回归平凡，也叫作向均数回归。",
                "Type": "实验",
                "School": "中山大学",
                "createdAt": "0001-01-01T00:00:00Z",
                "updatedAt": "0001-01-01T00:00:00Z"
            },
            {
                "Id": 6,
                "Title": "天花板效应",
                "Answer": "天花板效应是指因变量的测量范围受到限制，测量的结果停留在量表的最顶端。与地板效应相反，测试结果呈负偏态分布，当一个分布的分数只靠近上极限而不是下极限时，就产生了天花板效应。",
                "Type": "实验",
                "School": "中山大学",
                "createdAt": "0001-01-01T00:00:00Z",
                "updatedAt": "0001-01-01T00:00:00Z"
            },
            {
                "Id": 7,
                "Title": "混合设计",
                "Answer": "在同一实验中，一些自变量由被试间设计处理，另一些则由被试内设计处理，这就是混合设计。如果一个变量可能影响另一变量，那么这一变量可以作为被试间变量，而同时其他变量可在被试内变化，混合设计更安全。",
                "Type": "实验",
                "School": "中山大学",
                "createdAt": "0001-01-01T00:00:00Z",
                "updatedAt": "0001-01-01T00:00:00Z"
            },
            {
                "Id": 8,
                "Title": "速度与准确率的权衡",
                "Answer": "在操作的速度和准确性之间存在着反向关系当急于做某件事的时候，更可能出差错，当试图准确地完成某件事时，为达到预期的准确性，必须放慢工作速度。这一关系被称为速度一准确性权衡。",
                "Type": "实验",
                "School": "中山大学",
                "createdAt": "0001-01-01T00:00:00Z",
                "updatedAt": "0001-01-01T00:00:00Z"
            },
            {
                "Id": 9,
                "Title": "实验者效应",
                "Answer": "实验者效应指的是由于实验者不经意地向被试流露出些许自己的期望以至影响了实验结果。消除实验者效应最好的办法是使用双盲实验，即实验者和实验参与者都不知道哪些被试接受哪种实验条件。这种技术在空气污染的行为效应的研究中常常使用。",
                "Type": "实验",
                "School": "中山大学",
                "createdAt": "0001-01-01T00:00:00Z",
                "updatedAt": "0001-01-01T00:00:00Z"
            },
            {
                "Id": 10,
                "Title": "举例说明交互作用的概念",
                "Answer": "通常情况下，当一个变量的效果(对因变量的) 在另一个变量的不同水平上发生了变化就可以说这两个自变量之间存在交互作用可以选择内隐和外显记忆测验来说明交互作用这一概念。在这个例子中，控制组被试在外显自由回忆测验中，其作业成绩要优于遗忘症患者;而在词汇辨认测试时则两者是一样的。也就是说，当记忆用内隐的方式加以测试时，遗忘症患者与正常被试之间的差异便不再存在了。由此，一个自变量(记忆缺陷的存在与否)的效果随着另一个自变量(测验的类型) 的水平而发生变化。这是两个变量之间交互作用的一个例子。",
                "Type": "实验",
                "School": "中山大学",
                "createdAt": "0001-01-01T00:00:00Z",
                "updatedAt": "0001-01-01T00:00:00Z"
            },
            {
                "Id": 11,
                "Title": "ROC",
                "Answer": "ROC 又称接受者操作特征曲线，它将击中率作为虚惊率的函数，当标准由保守向大胆方向移动时，就会得到接受者操作特征曲线。在曲线的左下方，处于保守标准，击中和虚惊都较少。随着标准向大胆方向发展，击中和虚惊都变得更容易出现，并且 ROC 曲线开始向右上方移动。",
                "Type": "实验",
                "School": "中山大学",
                "createdAt": "0001-01-01T00:00:00Z",
                "updatedAt": "0001-01-01T00:00:00Z"
            },
            {
                "Id": 12,
                "Title": "韦伯定律",
                "Answer": "韦伯定律是指差别阈限与标准刺激之间保持一种常数关系，通常写为δI/I=K，I表示标准刺激的物理量，δI表示差别阈限，K表示常数。韦伯分数随着感觉通道的不同而不同，韦伯分数越小感觉就越敏锐，但韦伯分数只适用于中等强度的刺激，即只有使用中等强度的刺激，韦伯分数才是一个常数。",
                "Type": "实验",
                "School": "中山大学",
                "createdAt": "0001-01-01T00:00:00Z",
                "updatedAt": "0001-01-01T00:00:00Z"
            },
            {
                "Id": 13,
                "Title": "准实验设计",
                "Answer": "准实验设计是指未对自变量实施充分控制，但使用真正实验的某些方法收集、整理以及统计分析数据的研究方法。准实验设计能够在严格实验无法进行的时候取得结果。它与相关研究中的事后回溯相似，需要测查两个或多个变量水平。但因变量数据的获得是通过实验程序，带有一定的混淆性，所以最好进行一定的再匹配。",
                "Type": "实验",
                "School": "中山大学",
                "createdAt": "0001-01-01T00:00:00Z",
                "updatedAt": "0001-01-01T00:00:00Z"
            },
            {
                "Id": 14,
                "Title": "费希纳定律",
                "Answer": "费希纳定律是指心理量表值 (W )与物理刺激值成对数关系，即 =1g(S)其中K 是韦分数S是刺激值。根据费希纳定律，所有最小可觉差都产生等量的感觉增量，由此得到一个顺序量表表示感觉是以特定的方式依照它们的物理刺激排序的。",
                "Type": "实验",
                "School": "中山大学",
                "createdAt": "0001-01-01T00:00:00Z",
                "updatedAt": "0001-01-01T00:00:00Z"
            },
            {
                "Id": 15,
                "Title": "练习效应",
                "Answer": "练习效应指的是由于练习，而不是自变量本身的操作，所导致的被试成绩提高的现象。练习效应与疲劳效应作为一般练习效应的两种可能性，是使用被试内设计时需要考虑的因素，可以通过平衡来减少，即系统安排呈现给被试的实验条件的顺序。",
                "Type": "实验",
                "School": "中山大学",
                "createdAt": "0001-01-01T00:00:00Z",
                "updatedAt": "0001-01-01T00:00:00Z"
            }
        ],
        index: 0,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        const param = { //请求接口的参数

        }

        this.getData(param).then(res => { //调用promise实例的then方法获取返回结果
            console.log("成功1") //res为返回的结果
        })
    },

    getData(param) {
        return new Promise((resolve, reject) => { //创建promise实例
            //请求接口
            var header;
            header = {
                'content-type': 'application/x-www-form-urlencoded',
                'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhc2NvcGUiOiIiLCJleHAiOjQ4MjM2OTMyNTksImlkZW50aXR5IjoxLCJuaWNlIjoiYWRtaW4iLCJvcmlnX2lhdCI6MTY3MDA1NzI1OSwicm9sZWlkIjoxLCJyb2xla2V5IjoiYWRtaW4iLCJyb2xlbmFtZSI6Iuezu-e7n-euoeeQhuWRmCJ9._n5VEPs0fApHCfif7KrKDlyAmiGL2L_d5sGXxZOAS44" //读取cookie
            };
            wx.request({ //微信小程序官方的请求接口的方法
                url: 'http://127.0.0.1:8000/api/v1/mingcijieshi', //自己的接口地址
                data: param, //请求接口的参数，通过调用getData方法传递的
                method: 'GET', //请求方式
                header: header,
                success: (res) => { //接口调用成功时，调用promise的resolve
                    resolve(res);
                    console.log("res:如下", res)
                    this.setData({
                        list: res.data.data
                    })
                    console.log("list:如下", this.data.list)
                },

                fail: (error) => { //接口调用失败时，调用promise的reject
                    reject(error)
                    console.log("失败")
                }
            })
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
    jiesuodaan(events) {
        this.setData({
            jiexi: !this.data.jiexi
        })
    },
    xiayiti(events) {
        if(this.data.index<this.data.list.length-1) {
            this.setData({
                index: this.data.index+1,
                jiexi: true
            })
            console.log(this.data.index)
        } else{
            this.setData({
                index :0
            })
        }

    }
})