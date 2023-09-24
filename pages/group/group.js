// pages/group/group.js
Page({
  data: {
    cateItems: [
      {
        cate_id: 1,
        cate_name: "学习类",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '数模：123456789'
            },
            {
              child_id: 2,
              name: '英语：123456789'
            },
            {
              child_id: 3,
              name: '大雾：123456789'
            },
            {
              child_id: 4,
              name: '高数：123456789'
            }
          ]
      },
      {
        cate_id: 2,
        cate_name: "老乡群",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '黑龙江：123456789'
            },
            {
              child_id: 2,
              name: '吉林：123456789',
            },
            {
              child_id: 3,
              name: '辽宁：123456789',
            }
          ]
      },
      {
        cate_id: 3,
        cate_name: "求职类",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '家教：1111111111111'
            },
            {
              child_id: 2,
              name: '家教：1111111111111'
            },
            {
              child_id: 3,
              name: '家教：1111111111111'
            },
            {
              child_id: 4,
              name: '家教：1111111111111'
            }
          ]
      },
      {
        cate_id: 4,
        cate_name: "问答类",
        ishaveChild: false,
        children: []
      },
    {
      cate_id: 5,
      cate_name: "爱好类",
      ishaveChild: true,
      children:
        [
          {
            child_id: 1,
            name: '羽毛球：123456789'
          },
          {
            child_id: 2,
            name: '健身：123456789',
          },
          {
            child_id: 3,
            name: '桌游：123456789',
          }
        ]
    }
  ],
    curNav: 1,
    curIndex: 0
  },

  //事件处理函数  
  switchRightTab: function (e) {
    console.log(e)
    // 获取item项的id，和数组的下标值  
    let id = e.target.dataset.id,
    index = parseInt(e.target.dataset.index);
    // 把点击到的某一项，设为当前index  
    this.setData({
      curNav: id,
      curIndex: index
    })
  }
})