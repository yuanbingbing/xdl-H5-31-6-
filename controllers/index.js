// 对应index路由的控制器
var index = {};

// 加载stu模型
var stuModel = require('../models/stuModel');

// 定义首页方法
index.index = function(req, res) {
	//响应index视图模板
	res.render('ybb_index');

}
//定义首页的个人动态方法
index.pd = function(req,res){
	//响应动态的视图模板
	res.render('ybb_index_pd');
}
// 加载用户注册页面
index.reg = function(req, res) {
	
}

// 向外导出
module.exports = index;