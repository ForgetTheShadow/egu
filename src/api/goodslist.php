<?php
	/*
		商品列表
		[{},{},{}]

		数组常用方法：
			* count() 获取数组长度
			* in_array() 判断某个值是否存在数组中
			* array_slice() 从数组中取出一段
			* array_rand() 随机获取索引值
	 */
	
	// 创建价格数组
	$price = array(998,1998.66,2998,1669,8998,1999,5999.98);
	
	// 创建空数组，用于存放商品列表
	$goodslist = array();
	
	for($i=0;$i<10;$i++){
		$goods = array(
			'name' => '商品' . $i,
			'price' => $price[array_rand($price)],
			'imgurl' => "../img/g$i.jpg"
		);

		// 商品写入数组$goodslist
		// $goodslist[$i] = $goods;
		$goodslist[] = $goods;
	}

	// 价格排序：低->高
	// $goodslist

	echo json_encode($goodslist,JSON_UNESCAPED_UNICODE);

?>