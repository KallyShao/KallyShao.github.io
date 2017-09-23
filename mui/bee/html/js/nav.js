//底部导航跳转
			document.getElementById('index').addEventListener('tap', function() {
				  mui.openWindow({
				    url: 'index.html', 
				    id:'index'
				  });
				});
			document.getElementById('sort').addEventListener('tap', function() {
				  mui.openWindow({
				    url: 'sort.html', 
				    id:'index1'
				  });
				});
			document.getElementById('mine').addEventListener('tap', function() {
				  mui.openWindow({
				    url: 'person.html', 
				    id:'index2'
				  });
				});
			document.getElementById('product').addEventListener('tap', function() {
				  mui.openWindow({
				    url: 'pro-detail.html', 
				    id:'index3'
				  });
				});