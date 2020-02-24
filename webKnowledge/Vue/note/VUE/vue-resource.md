### 使用vue-resource来通过HTTP连接到服务器

> [vue-resource中文文档](https://vue-resource.changwei.me/)
>
> [菜鸟教程](https://www.runoob.com/vue2/vuejs-ajax.html)

1. [安装](https://github.com/pagekit/vue-resource)

   - npm
   - cdn

2. 配置应用文件

   在（main.js）全局vue对象上使用方法：

   `Vue.use()；`当然需要先引入它。

   在Vue的核心功能上添加插件，扩展Vue的核心功能。

   ```
   import VueResource from 'vue-resource';
   Vue.use(VueResource);
   //访问全局的Vue对象，不用加$
   //默认的（根）url,配置好之后，所有的请求都会发送到这个地址，在方法中只需补全剩余的地址
   //请求中如果已经包含需要的全部路径，则填写空字符串
   Vue.http.options.root = ''
   可以为全局Vue对象设置许多其他默认属性
   //设置拦截器，配置一组函数，每次请求都会执行这些函数，添加拦截器，next是允许请求继续执行的回调函数，不能让请求都终止在这个拦截器中
   Vue.http.interceptors.push( (request,next)=>{
   	if (request.method == 'POST'){
   		//PUT请求总会覆盖旧数据
   		request.method = 'PUT';
   	}
   	//拦截响应，在next()函数中传入一个新的参数来查看响应
   	//新建一个用于遍历所有键值的对象
   	//可以使用if语句创建自定义过滤器，从而校验请求或响应是否是特定的类型
   	next(response =>{
   		response.json = ()=>{
   			return {
   			message:response.body;
   			}
   		}
   	});
   } );
   ```

3. [firebase](https://firebase.google.com/)

   > 为原生应用提供后端服务，具体数据库存储功能，还有用户验证等

   - 转到控制台

4. 发送请求

   ```
   //提交表单
   submit(){
   	//需要从Vue实例内部访问http请求，加上$
   	//第一个参数是请求目标的url,必须要指定创建的数据节点
   	//Firebase只允许指向.json资源的请求
   	//此请求会在数据库里创建一个叫data的数据集或者说是data节点
   	//第二个参数是发送的数据
   	this.$http.post(，)
   		.then(response =>{
   		 	console.log(response)
   		}，error =>{
   			console.log(error)	
   		});
   	//get请求不需要第二个参数
   	//vue-resource给我们提供了一些辅助方法
   	//json()方法，会从响应中提取body部分，把它转换成一个我们可以直接使用的对象，否则得到的body部分是一个字符串
   		this.$http.post()
   		.then(response =>{
   		  return response.json()
   		})
   		.then(data =>{
   			const resultArray = [];
   			for (let key in data){
   				resultArray.push(data[key]);
   			}
   			this.users = resultArray;
   		});
   }
   ```

   vue-resource使用的是promise库，或者说是用了promise特性，这个方法的返回值是一个promise,promise适用于异步操作，因为promise表示一定会在未来某个时间返回一些数据，之所以用promise是因为现在还没有获取到数据，访问服务器不是同步进行的，需要耗费一些时间。调用then方法，它允许我们提供一个函数，在异步操作完成后执行，也就是请求发送完毕，并且收到了响应。添加箭头函数，处理响应部分.发出的请求会有响应

   - post是用来追加数据的，每条数据都有一个唯一标识name，才能保证一定是追加数据，否则就无法在未来安全的取回数据了。

   - get

5. 全局配置vue-resource

   ​	main.js  `Vue.http.options.root = ''`

6. 拦截请求

   ```
   Vue.http.interceptors.push( (request,next)=>{
   	if (request.method == 'POST'){
   		//PUT请求总会覆盖旧数据
   		request.method = 'PUT';
   	}
   	next();
   } );
   ```

   7. 拦截响应

      ```
      	next(response =>{
      		response.json = ()=>{
      			return {
      			message:response.body;
      			}
      		}
      	});
      ```

      

   8. resource

      vue-resource有一个很好的附加功能，可以让我们建立自己的 “资源”，比如存点什么到数据库

      如果想使用资源，首先要创建一个，在Vue实例的data里定义一个新变量resource初始值是空对象

   ```
   //App.vue
   data(){
   	return{
   		resource:{}
   	}
   },
   //生命周期钩子，用来初始化这个App.vue文件里的资源
   created(){
    	//vue-resource自带的resource方法传入的字段，第一个字段是资源文件，比如data.json,请求文件首先会使用这里定义的根路径（资源要访问的url路径）
   	this.resource = this.$resource()
   }
   ```

   vue-resource有一些默认的操作可以用于我们的资源和数据

   ```
   //通过默认操作使用资源插件
   submit(){
   	//vue-resource的默认方法，会向资源指定的url发送一个POST请求，可以把数据作为参数传入，实际上可以传入两个参数，第一个是我们想要传给url的参数，第二个是实际要传的数据
   	this.resource.save({}，this.user);
   }
   ```

   9. 创建自定义的资源

      ```
      fetchData(){
      	this.resource.getData({node:this.node});
      }
      
      
      
      created(){
      	//可以集中的设置资源，然后通过更集中的对象来访问，若干个Vue组件可以共用一个资源
      	//创建数个不同URL的快速资源
       const customActions ={
       	//用作储存选项或者类似的目的,括号内的部分用于调整这个动作。
       	saveAlt:		{method:'POST',url:'alternative.json'}
       }
      	this.resource = this.$resource('data.json',{},customActions)
      }
      ```

      10. [理解URL模板](https://medialize.github.io/URI.js/uri-template.html)

      ```
      fetchData(){
      	this.resource.getData({node:this.node});
      }
      
      
      
      
      
      created(){
      
       const customActions ={
      
       	saveAlt:		{method:'POST',url:'alternative.json'},
       	getData:{method:'GET'}
       }
      	//动态url,node可以被替换成传过来的值
      
      this.resource = this.$resource('{node}data.json',{},customActions)
      }
      
      
      
      
      
      
      ```

      

   