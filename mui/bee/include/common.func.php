<?php
#公共函数库,整个项目开发过程中使用到的函数都应该放在这个include的目录里面

/**
 * function      上传文件处理函数
 * param    string     $name      表单的上传文件框的name名称
 * param    array      $type      限制上传文件的类型
 * param    int        $size      限制上传文件的大小[君子协定] 单位: 字节
 * param    string     $path      指定上传文件的保存路径
 * return   array                 上传成功返回2个成员，失败返回一个成员
 **/
    function uploads($name,$type,$size,$path){
        $file = $_FILES[$name];
        # 1. 判断当前文件是否是post过来的文件  is_uploaded_file();
        if(!is_uploaded_file($file['tmp_name'])){
           return array('上传文件错误!');
        }
        # 2. 上传文件的错误状态判断 只有 error为0 的时候我们才会做文件上传处理
        if($file['error'] == 1 ){
            return array('上传文件太大!');
        }else if($file['error'] == 2 ){
            return array('上传文件太大!');
        }else if($file['error'] == 3 ){
            return array('上传文件不完整!');
        }else if($file['error'] == 4 ){
            return array('没有找到上传文件');
        }else if($file['error'] >4 ){
            return array('上传文件发生了未知错误,请联系网站工作人员!');
        }

        # 上传文件的类型判断

        #获取文件后缀
        $pre = pathinfo($file['name'],PATHINFO_EXTENSION);

        if(!in_array( $pre,$type) ){
            return array('上传文件的类型不正确!');
        }

        # 对上传文件大小进行判断
        if ($file['size'] > $size ){
            return array('上传文件太大!');
        }

        # 移动上传文件到我们的目录里面去
        # move_uploaded_file();
        # 为了防止上传文件的重命名，建议使用 微秒时间戳加上 随机数
        
        $newname = date('YmdHis',time()).mt_rand(10000,99999);
        $res = move_uploaded_file($file['tmp_name'],$path.'/'.$newname.'.'.$pre);
        if($res){
           return array('上传文件成功',$newname.'.'.$pre);
        }else{
           return array('上传文件失败');
        }
    }

/**
 * function 打印复杂变量
 * param    array    $arr    要打印的数组
 * param    callback $type   要执行的函数名
 * return   void     没有返回值
 */
    function p($arr,$type='print_r'){
        echo '<pre>';
        $type($arr);
        echo '</pre>';
    }


/**
 * function  获取文件大小
 * param     string    $filename   文件名[加路径]
 * return    string    $filesize   转换单位的文件大小
 */
    function get_filesize($filename){
        $size = filesize($filename);
        if($size<1024){
           return $size.'Byte';
        }else if($size < pow(1024,2)){
           $size = ($size/1024).'KB';
           $size = sprintf('%.2fKB',$size);
        }else if($size < pow(1024,3)){
           $size = $size/pow(1024,2);
           $size = sprintf('%.2fMB',$size);
        }else if($size <pow(1024,4)){
           $size = $size/pow(1024,3);
           $size = sprintf('%.2fGB',$size);      
        }else if($size <pow(1024,5)){
           $size = $size/pow(1024,4);
           $size = sprintf('%.2fTB',$size);      
        }
        return $size;
    }
##创建多层目录


# 数据库操作函数库
/**
 * function  数据库连接函数
 * param     string       $host       数据库域名
 * param     string       $user       帐号
 * param     string       $pwd        密码
 * param     string       $charset    数据库编码
 * param     string       $db         数据库
 * return    resource     $conn       连接数据库成功后的唯一标识符
 **/
function conn($host,$user,$pwd,$db,$charset='utf8'){
    #连接数据库
    $conn = @mysql_connect($host,$user,$pwd) or exit('连接失败');
    #选择数据库
    mysql_select_db($db,$conn);
    #设置数据库编码
    mysql_set_charset($charset='utf8',$conn);
    #返回唯一标识符
    return $conn;
}




/**
 * function 获取多条数据
 * param    $sql              数据库查询语句
 * return   $data             查询得到的结果
 */

function get_all($sql){
    #预定义一个变量存储数据
    global $conn;
    $data = array();

    #获取查询的资源
    $result = mysql_query($sql,$conn);
    #获取数据
    while($row = mysql_fetch_assoc($result)){
        $data[] = $row;
    }
    return $data;
}


/**
 * fucntion 查询一条数据
 * param    string        $sql          查询语句
 * return   array         $data         查询的数据[]
 */

function get_one($sql){
    global $conn;
    $result = mysql_query($sql,$conn);
    $data = mysql_fetch_assoc($result);
    return $data;
}

/**
 * fucntion   删除指定条件的数据
 * param      string    $table           表名
 * param      string    $where           条件
 * return     boolean                    执行结果 [true/false]
 */
function del($table,$where){
    global $conn;
    #拼接SQL语句
    $sql = "DELETE FROM `$table` WHERE $where";
    $result = mysql_query($sql,$conn);
    if($result && mysql_affected_rows()>0){
        return true;
    }else{
        return false;
    }
}

/**
 * function 添加数据
 * param   string      $table        表名 
 * param   array       $data         添加的数据
 * return  boolean                   执行的结果[true/false]
 **/
    function add($table,$data){
        global $conn;
        #使用数组函数 array_keys和array_values进行SQL拼接
        $sql = "INSERT INTO `$table` (`";
        $sql .= implode('`,`',array_keys($data)); #获取数组的键
        $sql .= "`) VALUES ('";
        $sql .= implode("','",array_values($data)) ."')"; ##获取数组的值
        // echo $sql;die;
        $result = mysql_query($sql,$conn);
        if($result && mysql_insert_id()>0){
            return true;
        }else{
            return false;
        }
    }

/**
 * function 数据更新函数
 * param    string      $table        表名 
 * param    array       $data         修改的数据
 * param    string      $where        条件
 * return   boolean                   执行的结果[true/false]
 */
 function edit($table,$data,$where){
    global $conn;
    $sql = "update `$table` SET ";
    foreach($data as $key=>$value){
        $sql .="`$key` = '$value',";
    }
    $sql = rtrim($sql,','); #rtrim 去掉右边指定的字符
    $sql .=' WHERE '.$where;
    // echo $sql;die;
    $result = mysql_query($sql,$conn);
    if( $result && mysql_affected_rows()>0 ){
        return true;
    }else{
        return false;
    }
}


/*
 * 中文字符截取
 * @param      string        $string       被处理的字符串
 * @param      int           $start        开始截取的位置
 * @param      int           $length       截取的字符长度
 * @param      string        $dot          缩略符号 ....
 * @param      string        $charset      字符编码
 * @return       string      $new          成功截取后的字符串
 */

function cutstr($string, $start, $length, $dot = '',$charset = "utf-8") {
    //判断当前的环境中是否开启了mb_substr这个函数
    if(function_exists("mb_substr")){
        
        if(mb_strlen($string,$charset)>$length){
            //如果开启了就可以直接使用这个
            return mb_substr($string,$start,$length,$charset).$dot;
        }
        return mb_substr($string,$start,$length,$charset);
    }
    //否则就是下面没开启
    $new = '';
    //判断是否是gbk，是gbk就转码成utf-8
    if($charset==='gbk'){
        $string = iconv("gbk","utf-8",$string);
    }
    //下面这个只能使用在utf-8的编码格式中
    $str = preg_split('//u',trim($string));
    for($i = $start,$len = 1;$i<count($str)-1 && $len<=$length;$i++,$len++){
        $new .= $str[$i+1];
    }
    //如果是gbk，就需要在返回结果之前，把之前的转换编码恢复一下
    if($charset==='gbk'){
        $new = iconv("utf-8","gbk",$new);
    }
    return count($str)-2<$length?$new:$new.$dot;
}

/**
 * function 页面跳转函数
 * param    $title           弹出框提示文字
 * param    $url             页面跳转地址[重定向]
 * 如果$url==null, 函数就默认返回到上一个页面
 * 如果$url!=null, 函数就跳转到指定的地址
 */
function show_msg($title,$url=null){
    echo '<script>';
    echo "alert('$title');";
    if($url){
        echo "window.location.href='$url';";
    }else{
        echo 'window.history.go(-1);';            
    }
    echo '</script>';
    exit();
}

/**
 * function  缩略图制作函数
 * param     $img       源图的路径[本地路径]
 * param     $s_width   缩略图的宽
 * param     $s_height  缩略图的高
 * param     $prefix    缩略图名称的前缀
 * param     $path      保存路径
 * return               函数执行的结果 true/false
 */
function thumb($img,$s_width,$s_height,$prefix="_min",$path="./"){
    #1. 打开源图(1) 获取图片大小
     $info = getimagesize($img);
     # print_r($info); #要记得$info的前三个成员
    #2. 打开原图(2) 根据不同的类型使用对应函数打开源图资源
        # $b_res 表示源图资源
        switch($info[2]){
          case 1:
            $b_res = imagecreatefromgif($img);
            break;
          case 2:
            $b_res = imagecreatefromjpeg($img);
            break;
          case 3:
            $b_res = imagecreatefrompng($img);
            break;
        }
    #3. 新建一个真彩色的画布[缩略图的资源]
        $s_res = imagecreatetruecolor($s_width,$s_height);
    #4. 把源图按比例复制小图上(10参数)
        imagecopyresized($s_res,$b_res,0,0,0,0,$s_width,$s_height,$info[0],$info[1]);
    #5. 保存缩略图
        switch($info[2]){
            case 1:
                imagegif($s_res,$path.$prefix.basename($img));
                break;
            case 2:
                imagejpeg($s_res,$path.$prefix.basename($img));
                break;
            case 3:
                imagepng($s_res,$path.$prefix.basename($img));
                break;
        }
    #6. 关闭图片资源
        imagedestroy($b_res);
        imagedestroy($s_res);
}
?>