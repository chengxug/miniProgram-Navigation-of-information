// pages/navigateOfGroup/navigateOfGroup.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navItems:[
      //左侧导航栏数据。
      //path待填充。
      {id : 1, name: "求职", },
      {id : 2, name: "爱好", },
      {id : 3, name: "学习", },
      {id : 4, name: "问答", },
      {id : 5, name: "老乡", }, ], 

      curNav: 1,
      curIndex: 0,
    //主页面数据
    conItemsQQ_1:[  //求职
      {number:"暂无",desc:"敬请期待"},
    ],
    conItemsWX_1:[
      {number:"chengxugu193",desc:"家教群"},
      {number:"zjutsunshine",desc:"家教群"},   
    ],

    conItemsQQ_2:[  //爱好
      {number:"暂无",desc:"敬请期待"},
    ],
    conItemsWX_2:[
      {number:"暂无",desc:"敬请期待"},
    ],

    conItemsQQ_3:[   //学习
      {number:"363412850",desc:"计算机课外竞赛组队群"},
      {number:"172803176",desc:"计算机学院机器人竞赛招新群"},
      {number:"825756697",desc:"网络工程专业技术交流群"},
      {number:"837272733",desc:"ACM 竞赛招新群"},
    ],
    conItemsWX_3:[
      {number:"暂无",desc:"敬请期待"},
    ],

    conItemsQQ_4:[  //问答
      {number:"721519763", desc:"学生邮箱开通申请，及微信小程序“微精弘”问题反馈群"},
      {number:"610487247", desc:"朝晖校区电信网络维护群"},],

    conItemsWX_4:[ 
      {number:"暂无", desc:"敬请期待"},
    ],

    conItemsQQ_5:[ //老乡
      {number:"暂无",desc:"敬请期待"},
    ],
    conItemsWX_5:[
      {number:"暂无",desc:"敬请期待"},
    ],
    
  },

  //切换页面
  switchPage: function(event) {
    /*event是一个事件对象，它包含了触发事件的相关信息，包括用户点击的元素、事件类型等。
     currentTarget是事件对象中的一个属性，它表示当前事件所绑定的元素。在这个上下文中，currentTarget 代表被点击的导航项元素。     
     dataset是一个包含元素自定义属性的对象 
    */
     let id = event.currentTarget.dataset.id;
     let index = parseInt(event.currentTarget.dataset.index);
     this.setData({//跳转后更改把curNav的值更改为当前项的id
       curNav: id,
       curIndex: index,
     });
   },

  //长按复制函数
  copyText: function(event){
    //获取data-number属性的值，即要复制的文本。
    const textToCopy = event.currentTarget.dataset.number;
    //调用微信小程序的API复制文本到剪贴板
    wx.setClipboardData({
      data: String(textToCopy),
      success: function () {
        //复制成功的回调函数
        wx.showToast({
          title:'复制成功',
        });
      },
      fail: function (res) {
        //复制失败的回调函数
        console.error('复制失败，错误信息：', res.errMsg), // 打印错误消息
        wx.showToast({
          title: '复制失败',
          icon:'none',
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