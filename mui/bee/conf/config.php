<?php
	header("Content-Type:text/html;charset=utf-8");
	//设置时区
	date_default_timezone_set('PRC');
	//设置好网站的根目录
	define('ROOT',str_replace('\\','/',dirname(dirname(__FILE__))));
	//echo str_replace('\\','/',dirname(dirname(__FILE__)));
	//echo ROOT;//ROOT常量永远代表项目根目录,不管是否换电脑或者服务器访问
	include(ROOT.'/include/common.func.php');//引入公共函数库
	include(ROOT.'/include/pagination.php');//引入分页函数库
	//使用公共函数库的函数连接数据库
	$host='localhost';
	$user='root';
	$pwd='';
	$db='3yy';
	$conn=conn($host,$user,$pwd,$db);
?>