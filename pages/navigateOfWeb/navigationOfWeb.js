// pages/navigateOfWeb/navigationOfWeb.js
Page({

  data: {
    officialInfomation:[
      {title:"浙江工业大学",url:"https://www.zjut.edu.cn/main.htm",desc:"这是学校的官方网站，包含学校的基本信息、校历、新闻公告、招生信息、学校历史等内容"},
      {title:"工大校报",url:"http://zjut.ihwrm.com/index/article/oldrelease.html",desc:"如题"},
      {title:"工大校历",url:"https://www.zjut.edu.cn/4520/list.htm",desc:"学生可在此查看学年上课、放假计划"},
    ],
    couseworkAndAcademicSupport:[ 
      {title:"浙江工业大学图书馆",url:"http://www.lib.zjut.edu.cn/main.htm",desc:"登录个人图书馆账号后可使用学校购买的学术资源，也提供图书续借，研讨室预约，教材管理等常用服务，部分资源需内网访问，馆藏查询，借阅使用微信公众号“浙江工业大学图书馆”更方便"},
      {title:"正方教务系统",url:"http://www.gdjw.zjut.edu.cn/jwglxt/xtgl/login_slogin.html",desc:"学生可以在教务系统中查看课程表、成绩、选课信息，培养计划等"},
      {title:"网络教学平台",url:"http://zjut.fanya.chaoxing.com/portal",desc:"学习通网页版"},
    ],
    campusLife:[
      {title:"校园地图服务系统",url:"https://map.zjut.edu.cn/#/home",desc:"该系统通过仿真 3D 方式展现校园风貌，为广大师生提供校园相关的位置（单位、生活、教学等）查询及导航服务。浏览校园各机构、院系设置及校内外设施分布情况。"},
    {title:"网上办事大厅",url:"https://ehall.zjut.edu.cn/taskcenter/workflow/appall",desc:"学生可在此办理各类常用服务，包括研讨室（共享空间）预约、注册社团、校园网账号办理、体育场馆借用、研究生寒暑假挂职锻炼申请等"},
    {title:"浙江工业大学毕业生就业信息网",url:"https://zjut.jysd.com/",desc:"学生可以在这里找到有关就业、实习和职业发展的资源和指南。"},
    {title:"浙江工业大学邮箱",url:"https://mail.zjut.edu.cn/",desc:"学生使用校园邮箱进行学术和行政事务的沟通，提供校园邮箱登录链接。注册学校邮箱请至群导航页面，进入“学生邮箱开通”群聊，申请注册"},
  ],
  },

  copyURL:function(event){  //复制URL
    const URL=event.currentTarget.dataset.url;
    wx.setClipboardData({
      data: String(URL),
      success: function(){
        wx.showToast({
          title:'复制成功',
        });
      },
      fail: function(){
        console.error('复制失败，错误消息：',errMsg),
        wx.showToast({
          title:'复制失败',
        });
      },
    });
  },
})