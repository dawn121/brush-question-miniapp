// pages/xuanzeiti/xuanzeti.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        //进度条
        progress_left: 10,
        progress_right: 90,
        //四个选项的判定
        selection1: "datiflex_unchecked",
        isselected1: false,
        selection2: "datiflex_unchecked",
        isselected2: false,
        selection3: "datiflex_unchecked",
        isselected3: false,
        selection4: "datiflex_unchecked",
        isselected4: false,
        buttonofsubmit: false,
        buttonofnext: true,
        //获取题目
        currenttimu: 0,
        list: [],
        //答案提交
        bukexuanzhong: false,
        isselect: false,
        selectwhat: 0,
        youranswer: "",
        correctanswer: "",
        //答案解析
        zuoduile: false,
        kanjiexi: true,
        //答题卡
        scoresheet: [10],
        end: true,
        //类别
        leibie: ""
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        console.log(options)
        let leibie = options.leibie
        this.setData({
            leibie:leibie
        })
        console.log("leibie:",this.data.leibie)
        wx.cloud.database().collection('timu')
            .where({
                leibie:this.data.leibie
            })
            .get()
            .then(res => {
                console.log('success', res.data)
                this.setData({
                    list: res.data
                })
            })
            .catch(err => {
                console.log('fail', err)
            })
    },

    click_selection1() {
        var flag = !this.data.isselected1
        if (this.data.isselected1 == false) {
            this.setData({
                selection1: "datiflex_checked",
                selection2: "datiflex_unchecked",
                selection3: "datiflex_unchecked",
                selection4: "datiflex_unchecked",
                isselected1: flag,
                isselected2: false,
                isselected3: false,
                isselected4: false,
                isselect: true,
                selectwhat: 1,
                youranswer: "A",
            })
        } else {
            this.setData({
                selection1: "datiflex_unchecked",
                isselected1: flag,
                isselect: false,
                selectwhat: 0,
                youranswer: "",
            })
        }
    },
    click_selection2() {
        var flag = !this.data.isselected2
        if (this.data.isselected2 == false) {
            this.setData({
                selection1: "datiflex_unchecked",
                selection2: "datiflex_checked",
                selection3: "datiflex_unchecked",
                selection4: "datiflex_unchecked",
                isselected2: flag,
                isselected1: false,
                isselected3: false,
                isselected4: false,
                isselect: true,
                selectwhat: 2,
                youranswer: "B",
            })
        } else {
            this.setData({
                selection2: "datiflex_unchecked",
                isselected2: flag,
                isselect: false,
                selectwhat: 0,
                youranswer: "",
            })
        }
    },

    click_selection3() {
        var flag = !this.data.isselected3
        if (this.data.isselected3 == false) {
            this.setData({
                selection1: "datiflex_unchecked",
                selection2: "datiflex_unchecked",
                selection3: "datiflex_checked",
                selection4: "datiflex_unchecked",
                isselected3: flag,
                isselected1: false,
                isselected2: false,
                isselected4: false,
                isselect: true,
                selectwhat: 3,
                youranswer: "C",
            })
        } else {
            this.setData({
                selection3: "datiflex_unchecked",
                isselected3: flag,
                isselect: false,
                selectwhat: 0,
                youranswer: "",
            })
        }
    },

    click_selection4() {
        var flag = !this.data.isselected4
        if (this.data.isselected4 == false) {
            this.setData({
                selection1: "datiflex_unchecked",
                selection2: "datiflex_unchecked",
                selection3: "datiflex_unchecked",
                selection4: "datiflex_checked",
                isselected4: flag,
                isselected1: false,
                isselected2: false,
                isselected3: false,
                isselect: true,
                selectwhat: 4,
                youranswer: "D",
            })
        } else {
            this.setData({
                selection4: "datiflex_unchecked",
                isselected4: flag,
                isselect: false,
                selectwhat: 0,
                youranswer: "",
            })
        }
    },

    xiayiti() {
        var flagnext = this.data.buttonofnext
        var flagsubmit = this.data.buttonofsubmit
        this.setData({
            //可以开始选择
            progress_left: this.data.progress_left + 10,
            bukexuanzhong: !this.data.bukexuanzhong,
            buttonofnext: !flagnext,
            buttonofsubmit: !flagsubmit,
            currenttimu: this.data.currenttimu + 1,
            selection1: "datiflex_unchecked",
            isselected1: false,
            selection2: "datiflex_unchecked",
            isselected2: false,
            selection3: "datiflex_unchecked",
            isselected3: false,
            selection4: "datiflex_unchecked",
            isselected4: false,
            isselect: false,
            selectwhat: 0,
            youranswer: "",
            correctanswer: "",
            kanjiexi: !this.data.kanjiexi,
            //初始化你的答案
            youranswer: "E",
            zuoduile: false
        })
        console.log("buttonofnext:", this.data.buttonofnext)
        console.log("buttonofsubmit:", this.data.buttonofsubmit)
        console.log("currenttimu:", this.data.currenttimu)
    },

    lijitijiao() {
        var flagnext = this.data.buttonofnext
        var flagsubmit = this.data.buttonofsubmit
        this.setData({
            kanjiexi: !this.data.kanjiexi,
            buttonofsubmit: !flagsubmit,
            buttonofnext: !flagnext,
        })
        console.log("buttonofsubmit:", this.data.buttonofsubmit)
        console.log("buttonofnext:", this.data.buttonofnext)

        //先把错误答案显示，再把正确答案显示
        var correctoption = "selection" + this.data.list[this.data.currenttimu].CorrectOption
        console.log("correctoption:", correctoption)
        console.log("selection1:", this.data.selection1)
        console.log("selection2:", this.data.selection2)
        console.log("selection3:", this.data.selection3)
        console.log("selection4:", this.data.selection4)

        if (this.data.selection1 == "datiflex_checked") {
            this.setData({
                selection1: "datiflex_error"
            })
        }
        if (this.data.selection2 == "datiflex_checked") {
            this.setData({
                selection2: "datiflex_error"
            })
        }
        if (this.data.selection3 == "datiflex_checked") {
            this.setData({
                selection3: "datiflex_error"
            })
        }
        if (this.data.selection4 == "datiflex_checked") {
            this.setData({
                selection4: "datiflex_error"
            })
        }

        //正确答案显示
        if (this.data.selection4 == "datiflex_checked") {
            this.setData({
                selection4: "datiflex_error"
            })
        }
        this.setData({
            [`${ correctoption }`]: "datiflex_correct",
            bukexuanzhong: !this.data.bukexuanzhong,
        })
        //答案反馈
        if (this.data.list[this.data.currenttimu].CorrectOption == 1) {
            this.setData({
                correctanswer: "A"
            })
        } else if (this.data.list[this.data.currenttimu].CorrectOption == 2) {
            this.setData({
                correctanswer: "B"
            })
        } else if (this.data.list[this.data.currenttimu].CorrectOption == 3) {
            this.setData({
                correctanswer: "C"
            })
        } else {
            this.setData({
                correctanswer: "D"
            })
        }
        //如果答案和自己选的一样
        if (this.data.youranswer == this.data.correctanswer) {
            this.setData({
                zuoduile: true,
            })
        }
        //把答案写入答题卡
        this.setData({
            scoresheet: this.data.scoresheet.concat(this.data.zuoduile)
        })
        //把按钮设为完成，进入答题卡
        if (this.data.currenttimu == 9) {
            this.setData({
                end: false,
                buttonofnext: true,
                buttonofsubmit: true
            })
        }
    },
    wancheng() {
        wx.navigateTo({
            url: '/pages/answersheet/answersheet?scoresheet='+JSON.stringify(this.data.scoresheet),
        })
        console.log("scoresheet:", this.data.scoresheet)
    }

})