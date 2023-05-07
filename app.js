// app.js
App({
    onLaunch() {
        wx.cloud.init({
            env: 'cloud1-5glmwia0243ccdfa'
        })
       // wx.setStorageSync('phonenumber','19120517784')

        var phonenumber = wx.getStorageSync('phonenumber')
        if(phonenumber=="") {
            console.log("phonenumber为null")
        } else {
            console.log("phonenumber为",phonenumber)
        }
    }

})