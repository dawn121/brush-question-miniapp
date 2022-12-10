Page({
    onLoad() {
        wx.cloud.callFunction({
            name:'getData'
        })
        .then(res => {
            console.log('成功',res)
            this.setData({
                list: res.result.data
            })
        })
        .catch(res => {
            console.log('失败',res)
        })
    }
})