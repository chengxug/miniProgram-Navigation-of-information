// pages/navegateOfPublicAccount/navigationOfPublicAccount.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    information:[
      {title:"浙江工业大学",desc:"学校官方微信"},
      {title:"浙工大资助",desc:"浙江工业大学学生资助管理中心信息发布平台，为学生提供资助服务，学生综合事务大厅业务办理"},
      {title:"浙江工业大学计财处",desc:"发布学费等费用的缴费通知"},
      {title:"浙工大青年志愿者协会",desc:"发布浙江工业大学志愿者相关活动消息"},
      {title:"浙江工业大学计 E890",desc:"浙江工业大学计算机科学与技术学院、软件学院官方平台，主要发布计算机学院相关活动推送"},
    ],
    studySupport:[
      {title:"浙江工业大学图书馆",desc:"发布图书馆最新通知，提供书目查询、自助云打印，研讨室预约等服务"},
      {title:"广雅通",desc:"发布书院活动通知，参与活动可获得第二课堂学时，第二课堂是大一的必修课"},
      {title:"青春浙江",desc:"青年大学习任务"},
    ],
    campusLife:[
      {title:"容大后勤",desc:"提供校园卡充值，缴电费，班车预约等服务"},
      {title:"浙工大寓生活",desc:"发布查寝分数，及公寓自治委员会招新通知"},
      {title:"浙江工业大学保卫处",desc:"浙江工业大学保卫处安全服务平台"},
      {title:"浙是工大",desc:"非官方平台，发布各类新鲜事"},
    ],
  },

  copyTitle:function(event){
    const name= event.currentTarget.dataset.title;
    wx.setClipboardData({
      data: name,
      success:function(){
        wx.showToast({
          title:'复制成功',
        });
      },
      fail:function(){
        console.error('复制失败，错误消息：',errMsg),
       wx.showToast({
         title: '复制失败',
       });
    },
  });
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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

  }
})