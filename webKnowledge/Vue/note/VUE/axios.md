### AXIOS

> 在JavaScript应用里创建HTTP请求，不只是Vue项目，还可以用在其他JavaScript项目里，vue-resource的替代品

导入项目步骤：

下载，解压，npm install安装依赖，然后npm run dev 运行

Firebase 打开控制台 ，打开一个已有的项目或者创建一个

点击DataBase后台数据库，选择实时数据库，Realtime DataBase

Rules 把write和read属性都设置成true,表示每个人都可以读写数据库

安装axios依赖包

```
npm install --save axios
//--save表示保存在package.json里，axios就是包的名字

npm run dev
```

在Vue实例和App里添加使用

axios不能跟vue-router Vuex一样使用Vue.use方法

axios是独立的包，没有整合在vue中。

有的包可以直接把axios绑定到Vue,然后在实例或者组件里通过关键字获取到axios

直接使用axios的方法

```
//导入到组件模板文件中
import axios from 'axios'
axios是这个包默认的导出对象

axios.post('url.json',数据，{配置})
.then()
//返回一个promise,发送POST是异步操作，可以在未来的某个时间点再对结果做出反应，请求结束之后调用then
```

```vue
<script>
    import axios from 'axios'
	export default {
        created(){
            axios.get('url.json'，{配置})
        	.then( res => console.log(res))
            .catch(error =>{error => console.log(error) })
			//返回一个promise,
        }
    }

</script>
```

##### 访问和使用响应数据

```vue
<script>
    import axios from 'axios'
	export default {
        data(){
            return {
               email:'' 
            }
        }
        created(){
            axios.get('url.json'，{配置})
        	.then( res => {
                  console.log(res)
                const data = res.data
                const users = []
                for(let key in data){
                	const user = data[key]
                    user.id = key;
                    users.push(user)
                }
                console.log(users)
                this.email = users[0].email
            })
    		//只有在 then模块里面才得到数据
            .catch(error =>{error => console.log(error) })
			//返回一个promise,
        }
    }

</script>
```

##### 全局请求配置

```
//main.js
main.js是在组件代码前执行的第一个文件
import axios from 'axios'

axios.defaults.baseURL = ' '
//common作用于所有请求，不管是什么请求方式
axios.defaults.headers.common['Authorization'] = 'sgfds'  
//用这个方式让每个请求传递令牌给后端
axios.defaults.headers.get['Accepts'] = 'application/json'
```

axios可以设置请求配置，可以在单个请求层面上设置，或者在全局层面上设置

##### 使用拦截器

```
//main.js
main.js是在组件代码前执行的第一个文件
import axios from 'axios'

const reqInterceptor = axios.interceptors.request.use ( config =>{
	config.headrers
	return config
} )

const resInterceptor = axios.interceptors.response.use ( res =>{
	config.headrers
	return res
} )

//拦截器可以被添加，也可以被移除,需要拦截器的id作为参数，在use函数返回
axios.interceptors.resqueat.eject(reqInterceptor)
axios.interceptors.response.eject(resInterceptor)
```

##### 自定义axios实例

之前一直使用的是从axios包导入的全局axios实例，整个应用共用一个全局axios实例是可以的，但是如果应用里面用了不同的URL请求，其中一个URL请求需要加上鉴权，另一个URL请求不加，有了自定义实例，就可以简单解决

main.js同级下添加新文件axios-auth.js用于鉴权，从登陆和注册页面发送请求时使用两个不同的baseURL

```
//axios-auth.js
import axios from 'axios'

//创建一个新的axios实例
const instance = axios.create({
	baseURL:''
})

instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance
```

```
//.vue
import axios from '../../axios-auth'
//实例和全局的axios一样的运作方式
```

