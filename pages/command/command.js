Page({
    onLoad() {
        let db=wx.cloud.database()
        const _=db.command
        db.collection('goods')
        .where({
            price : _.gt(1),
        })
        .get()
        .then(res => {
            console.log("success",res)
        })
        .catch(res => {
            console.log("fail",res)
        })
    }
})