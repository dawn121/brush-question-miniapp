// pages/statistics/statistics.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        xianshi:true,
        dijiti:0,
        di1:true,
        di2:true,
        di3:true,
        di4:true,
        di5:true,
        di6:true,
        di7:true,
        di8:true,
        di9:true,
        di10:true,
        di11:true,
        di12:true,
        di13:true,
        di14:true,
        di15:true,
        di16:true,
        di17:true,
        di18:true,
        di19:true,
        di20:true,
        di21:true,
        di22:true,
        di23:true,
        di24:true,
        di25:true,
        di26:true,
        di27:true,
        di28:true,
        di29:true,
        di30:true,
        di31:true,
        di32:true,
        di33:true,
        di34:true,
        di35:true,
        di36:true,
        di37:true,
        di38:true,
        di39:true,
        di40:true,
        di41:true,
        di42:true,
        di43:true,
        di44:true,
        di45:true,
        di46:true,
        di47:true,
        di48:true,
        di49:true,
        di50:true,
        di51:true,
        di52:true,
        di53:true,
        di54:true,
        di55:true,
        di56:true,
        di57:true,
        di58:true,
        di59:true,
        di60:true,
        di61:true,
        di62:true,
        di63:true,
        di64:true,
        di65:true,
        di66:true,
        di67:true,
        di68:true,
        di69:true,
        di70:true,
        di71:true,
        di72:true,
        di73:true,
        di74:true,
        di75:true,
        di76:true,
        di77:true,
        di78:true,
        di79:true,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        console.log("options:",options)
        let dijige = options.dijige
        this.setData({
            dijige:dijige
        })
        console.log("dijige:",this.data.dijige)
        if(this.data.dijige==1){
            this.setData({
                di1:false
            })
        } else if(this.data.dijige==2){
            this.setData({
                di2:false
            })
        } else if(this.data.dijige==3){
            this.setData({
                di3:false
            })
        } else if(this.data.dijige==4){
            this.setData({
                di4:false
            })
        } else if(this.data.dijige==5){
            this.setData({
                di5:false
            })
        } else if(this.data.dijige==6){
            this.setData({
                di6:false
            })
        } else if(this.data.dijige==7){
            this.setData({
                di7:false
            })
        } else if(this.data.dijige==8){
            this.setData({
                di8:false
            })
        } else if(this.data.dijige==9){
            this.setData({
                di9:false
            })
        } else if(this.data.dijige==10){
            this.setData({
                di10:false
            })
        } else if(this.data.dijige==11){
            this.setData({
                di11:false
            })
        } else if(this.data.dijige==12){
            this.setData({
                di12:false
            })
        }  else if(this.data.dijige==13){
            this.setData({
                di13:false
            })
        }  else if(this.data.dijige==14){
            this.setData({
                di14:false
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
        } else if(this.data.dijige==25){
            this.setData({
                di25:false
            })
        } else if(this.data.dijige==26){
            this.setData({
                di26:false
            })
        } else if(this.data.dijige==27){
            this.setData({
                di27:false
            })
        } else if(this.data.dijige==28){
            this.setData({
                di28:false
            })
        } else if(this.data.dijige==29){
            this.setData({
                di29:false
            })
        } else if(this.data.dijige==30){
            this.setData({
                di30:false
            })
        } else if(this.data.dijige==31){
            this.setData({
                di31:false
            })
        } else if(this.data.dijige==32){
            this.setData({
                di32:false
            })
        } else if(this.data.dijige==33){
            this.setData({
                di33:false
            })
        } else if(this.data.dijige==34){
            this.setData({
                di34:false
            })
        } else if(this.data.dijige==35){
            this.setData({
                di35:false
            })
        } else if(this.data.dijige==36){
            this.setData({
                di36:false
            })
        } else if(this.data.dijige==37){
            this.setData({
                di37:false
            })
        } else if(this.data.dijige==38){
            this.setData({
                di38:false
            })
        } else if(this.data.dijige==39){
            this.setData({
                di39:false
            })
        } else if(this.data.dijige==40){
            this.setData({
                di40:false
            })
        } else if(this.data.dijige==41){
            this.setData({
                di41:false
            })
        } else if(this.data.dijige==42){
            this.setData({
                di42:false
            })
        } else if(this.data.dijige==43){
            this.setData({
                di43:false
            })
        } else if(this.data.dijige==44){
            this.setData({
                di44:false
            })
        } else if(this.data.dijige==45){
            this.setData({
                di45:false
            })
        } else if(this.data.dijige==46){
            this.setData({
                di46:false
            })
        } else if(this.data.dijige==47){
            this.setData({
                di47:false
            })
        } else if(this.data.dijige==48){
            this.setData({
                di48:false
            })
        } else if(this.data.dijige==49){
            this.setData({
                di49:false
            })
        } else if(this.data.dijige==50){
            this.setData({
                di50:false
            })
        } else if(this.data.dijige==51){
            this.setData({
                di51:false
            })
        } else if(this.data.dijige==52){
            this.setData({
                di52:false
            })
        } else if(this.data.dijige==53){
            this.setData({
                di53:false
            })
        } else if(this.data.dijige==54){
            this.setData({
                di54:false
            })
        } else if(this.data.dijige==55){
            this.setData({
                di55:false
            })
        } else if(this.data.dijige==56){
            this.setData({
                di56:false
            })
        } else if(this.data.dijige==57){
            this.setData({
                di57:false
            })
        } else if(this.data.dijige==58){
            this.setData({
                di58:false
            })
        } else if(this.data.dijige==59){
            this.setData({
                di59:false
            })
        } else if(this.data.dijige==60){
            this.setData({
                di60:false
            })
        } else if(this.data.dijige==61){
            this.setData({
                di61:false
            })
        } else if(this.data.dijige==62){
            this.setData({
                di62:false
            })
        } else if(this.data.dijige==63){
            this.setData({
                di63:false
            })
        } else if(this.data.dijige==64){
            this.setData({
                di64:false
            })
        } else if(this.data.dijige==65){
            this.setData({
                di65:false
            })
        } else if(this.data.dijige==66){
            this.setData({
                di66:false
            })
        } else if(this.data.dijige==67){
            this.setData({
                di67:false
            })
        } else if(this.data.dijige==68){
            this.setData({
                di68:false
            })
        } else if(this.data.dijige==69){
            this.setData({
                di69:false
            })
        } else if(this.data.dijige==70){
            this.setData({
                di70:false
            })
        } else if(this.data.dijige==71){
            this.setData({
                di71:false
            })
        } else if(this.data.dijige==72){
            this.setData({
                di72:false
            })
        } else if(this.data.dijige==73){
            this.setData({
                di73:false
            })
        } else if(this.data.dijige==74){
            this.setData({
                di74:false
            })
        } else if(this.data.dijige==75){
            this.setData({
                di75:false
            })
        } else if(this.data.dijige==76){
            this.setData({
                di76:false
            })
        } else if(this.data.dijige==77){
            this.setData({
                di77:false
            })
        } else if(this.data.dijige==78){
            this.setData({
                di78:false
            })
        } else if(this.data.dijige==79){
            this.setData({
                di79:false
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
        console.log("flagxianshi:",flagxianshi)
        console.log("xianshi:",this.data.xianshi)
    }
})