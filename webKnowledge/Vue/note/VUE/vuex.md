## vuex

> 状态管理方式：
>
> - 用自定义事件从子组件向父组件传递数据，
> - 或者用props反向传递，
> - 或者用eventBus来管理状态 

不属于父子关系的不同组件之间访问，不能直接访问，

1. 可以操作组件传递回调，但当应用中的组件变多的时候，这种方法就很难用

2. 可以用事件总线来实现这个操作，虽然不能直接访问组件，但是可以集中使用一个vue实例作为事件总线。在这个事件总线上调用$emit方法，在目标组件上监听总线上的事件。但是在大型应用中，由于有大量触发事件的代码，一个事件总线很快就会变得十分臃肿，这个实例中会聚集大量代码，而且变动很难跟踪。虽然有了一个事件总线，但是我们在应用里到处访问它。因此我们写完代码之后，就不知道我们在哪里做了什么改动了

3. 大型应用需要另一种状态管理机制，就是在一个地方集中存储所有状态，然后在另一个地方定义如何获取或修改数据 ，有了状态存储与获取分离的机制，才能跟踪我们在什么时候改变了什么状态

   ##### 集中的状态

   Vuex Redux Flux  

   集中存储库  （状态存储）：在应用的不同地方使用的状态，进行集中存储，方便我们从子组件或者其他组件里访问并改变他（change），在另一个组件里获取数据（get）可直接访问存储库获取数据

   - 把所有和vuex有关的文件，放到一个单独的文件夹store内，他和components文件夹在同一层。

   - 在这个文件夹里创建一个新文件store.js.它是一个用于存储库的普通javascript文件。为了能够创建这样一个存储库，需要一些vuex包内的一些辅助方法。

     `npm  install --save vuex`下载并安装vuex,以便使用vuex提供的工具

     ```
     //store.js
     import Vue from 'vue'
     import Vuex from 'vuex'
     
     //注册插件
     Vue.use(Vuex)
     //store是一个方法，我们要传入一个对象来配置这个存储库 
     export const store =  new Vuex.Store({
     	state:{
     		counter:0
     	}
     })
     //在状态存储库里，保存应用的状态,state属性，是一个对象，可以用来保存应用中需要的全部状态
     
     //在文件外面使用存储库，需要导出对象，导出一个叫做store的常量
     ```

     vuex是一个第三方包，它提供了状态管理相关的工具

   - 在main.js文件内，在根实例内注册vuex,然后才能再整个应用内使用 ,导入存储库，在vue实例内注册它

     ```
     //main.js
     import {store} from './store/store'
     
     new Vue({
     	el:'#app',
     	store,
     	render:h=>h(App)
     })
     ```

   - 访问存储库

     用$store来访问存储库，$表示这不是我们自己创建的属性，这是vue自己的，或者是第三方包创建的。$store让我们能够访问到集中的状态存储库

     ```
     //Counter.vue
     
     methods:{
     	increment(){
     		this.$store.state.counter++;
     	}
     }
     
     //Result.vue
     
     export default{
     	computed:{
     		counter(){
     			return this.$store.state.counter;
     		}
     	}
     }
     
     ```

     ​	大型应用，一旦我们在多个组件里面同时获取和改变一个状态，会体现出存储库的局限性

   ##### Getter

   在几个组件里都要使用的话，就会带来重复使用同一段代码的问题。解决方法，不直接在组件中访问状态，而是使用Getter,它会从仓库里获取状态，然后再对状态进行处理，然后在不同的组件里使用这个Getter.我们把处理状态用的代码保存在同一个地方，然后我们在使用这个状态的地方，访问这个Getter即可。在仓库中添加属性 getters

   **设置getter**

```
//store.js
import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)
//store是一个方法，我们要传入一个对象来配置这个存储库 
export const store =  new Vuex.Store({
	state:{
		counter:0
	},
	//getters类似于保留字，Vuex会检测它，是一个对象，在里面添加多少个Getter都可以。每一个Getter（函数）的名称，就可以随便取
	getters:{
		//在这个函数里面，参数state,可以对状态进行任意操作
		doubleCounter: state =>{
			return state.counter*2;
}
	}
})

```

**组件中获取Getter**

```
//Result.vue
每个组件下只能有一个根元素
export default{
	computed:{
		counter(){
		//（不需要在函数后面添加括号）没有在组件里执行Getter Vuex会自动为我们执行，不执行，直接运行
			return this.$store.getters.doubleCounter;
		}
	}
}

```

Vuex有辅助方法，内置了一种可以自动创建所有计算属性的方法

```vue
//Result.vue
{{doubleCounter}}



<script>
	import {mapGetters} from 'vuex';
    
    export default{
        //参数是一个数组，在数组中对所有要在组件中用到的字符串值进行定义,他会在后台自动生成计算属性，然后把他们映射到Getter以及store.js下的同名函数中，这样就可以让模板使用doubleCounter
        //可以传递一个对象，将不同的Getter映射到不同的名字上
		       computed:mapGetters(['doubleCounter','stringCounter'])
}


</script>

```

**添加自定义计算属性**

```
//Result.vue
{{doubleCounter}}



<script>
	import {mapGetters} from 'vuex';
    
    export default{
 
	computed:{
	//...将这个对象中的所有对象和方法拉取出来添加到计算属性对象中
	//对象扩展运算符和剩余参数用法
	...mapGetters([
		'doubleCounter',
		'stringCounter'
		])，
		//可以在下面创建自己的计算属性(混合用法)
		ourOwn(){
		
		}
	}
}


</script>

```

package,json 可以查看项目的各个版本设置，可以简单地加个包，最后可以编译出有效可用的代码

`npm install --save-dev bable-preset-stage-2`

```
//.babelrc
"presets":[
//添加刚刚下好的预设包
["stage-2"]
]
```

重启开发服务器  npm run dev

##### Mutation

直接在组件里改变状态，在组件里访问状态然后操纵它。在几个组件都操作一个状态时就会遇到问题，很难跟踪是哪一个组件在什么时候改变了状态

(Setters)改变仓库的状态，使用Mutation需要提交，之后仓库内的状态就会被更新

```
//store.js
import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)
//store是一个方法，我们要传入一个对象来配置这个存储库 
export const store =  new Vuex.Store({
	state:{
		counter:0
	},
	getters:{
		doubleCounter: state =>{
			return state.counter*2;
}
	},
	//保留属性，是一个可执行的方法
	mutations:{
	increment：state=>{
		//改变state
		state.counter++;
})

```

使用mutation

```
methods:{
	increment(){
		//提交一个mutation,名字必须是一个字符串
		//vuex就回去store.js里的mutations对象去找名字叫increment的方法，然后执行这个方法，并且自动传递state
		this.$store.commit('increment')
		
	}
}
```

减少代码的重复，类似mapGetters方法，需要导入这个辅助方法

使用mapMutations方法自动映射减少代码量，确保改变state数据的代码集中在一个地方，而且可以更容易地获取到这些改变state的函数，也就是mumtation

```
//Counter.vue
//调用方法会自动运行，因为名字是一样的
<button @click="increment"></button>

import {mapMutations} from 'vuex'

//使自己的方法和 mapMutations都可以使用
//mapMutations传入一个数组，数组里传入你想要映射的mutation的名字
methods:{
		...mapMutations([
		'increment',
		'decrement'
		])

}
methods:{
		...mapMutations([
		'increment',
		'decrement'
		])

}

```

**Mutation使用同步执行模式**

如果想用setTimeout在一段时间后执行一个操作或者想访问服务器，就不能用Mutation,否则就不能很容易的跟踪状态的变化，也就是知道什么时候改变了什么状态。

因为如果可以执行异步操作，就没办法跟踪哪个Mutation改变了哪个状态，不能保证状态改变的顺序和Mutation提交的顺序相同，因为Mutation执行的时间长短不同。我们希望能够保证，在执行完Mutation之后立即改变状态

##### Action

Action可以看作是一个附加的函数，有时候可以用来执行异步任务，是在组件里面出发执行的，在Action里面提交Mutation，并且只在异步任务结束后才提交Mutation。有点：有时候会在组件里触发Action的执行，然后再向服务器发送请求，这通常需要数毫秒或几秒时间，但是现在还不会有任何改变发生，这里的状态还不会任何改变。只有当这个耗时长的异步计算任务结束，或者通常说是在这个函数结束后，只会在这个时候，Mutation才会进行提交，才会改变存储在Store里面的状态，所以这样的话，所有的状态变化任然是同步发生的，但在改变之前，可以执行一些异步的代码

```
//store.js
import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)
//store是一个方法，我们要传入一个对象来配置这个存储库 
export const store =  new Vuex.Store({
	state:{
		counter:0
	},
	getters:{
		doubleCounter: state =>{
			return state.counter*2;
}
	},
	//保留属性，是一个可执行的方法
	mutations:{
	increment：state=>{
		//改变state
		state.counter++;
}
},
	actions:{
		increment :context =>{
			//context对象里还有很多vuex内的其他方法，甚至比Store里的方法还多，和store不完全相同，不过有commit方法，还可以访问到getters等，虽然不能访问到仓库里的所有内容
			context.commit('increment')
			
			
		}
	}




)}

```

```
//如果从传入的对象中只获取一个对象使用，可以使用es6的解构特性，把其他的都去掉，只留下commit方法，只需要commit方法时可以这样使用
actions:{
		increment :({commit}) =>{
			commit('increment')
		}
	}
```

为了便于维护，可以用action执行所有操作，而不是有时候使用mumtations有时候使用actions

```
		mutations:{
	increment：(state,payload)=>{
		//改变state
		state.counter+=payload;
}
},
	actions:{
	//传递参数，表示它是 action的载荷，action把payload传递给mutation
		increment :({commit}，payload) =>{
		//ction把payload传递给mutation
			commit('increment',payload)
		},
		asyncIncrement:({commit}) =>{
			setTimeout(()=>{
				commit('increment')
			},1000)
			
		},
	}

```

```
//Counter.vue
//调用方法会自动运行，因为名字是一样的
<button @click="increment"></button>

import {mapActions} from 'vuex'

methods:{
		...mapMutations([
		'increment',
		'decrement'
		])

}
methods:{
		...mapActions([
		'increment',
		'decrement'
		])
		//mapActions的作用(函数可以传递参数，例如确定计数器增长的步长),背后生成的是
		increment(by){
			this.$store.dispatch('increment',by)
		}

}
```

传入多个参数

直接在后面加第二个或第三个参数是不行的，dispatch不能这样用，

应该传入一个对象，一个对象里面有多少个属性都可以

```
<button @click="increment({by:50,duration:500})"></button>

```

```
	actions:{
		//传入一个参数，但该参数是对象
		asyncIncrement:({commit},payload) =>{
			setTimeout(()=>{
				//前一个参数是mutation名
				commit('increment'，payload.by)
			},payload.duration)
			
		},
	}

```

actions是由组件用dispatch触发，始终用actions是很好的写法，即使

mutations或任务不是异步的。

getters的好处，无论何时state改变了，组件都会自动更新

##### 双向绑定(v-model)和vuex

计算属性value只是一个Getter,因此不能如愿实现双向绑定



```vue
//自定义双向绑定
<input type="text" :value="value" @input="updateValue" ></input>


methods:{
	updateValue(event){
		this.$store.dispatch('updateValue',event.target.value)
	}
}
```

```
//v-model实现
<input type="text" v-model="value" ></input>

computed:{
	//计算属性是一个对象，带有getter和setter
	value:{
		get(){
			return this.$store.getters.value
		}
		//在计算属性中设置某个值，它依赖别的数据并作重新计算,能够允许我们使用v-model,把属性和状态绑定起来
		set(value){
			this.$store.dispatch('updateValue',value)
		}
	}
}



methods:{
	updateValue(event){
		this.$store.dispatch('updateValue',event.target.value)
	}
}
```

**改进的目录结构**

将vuex代码，也就是store.js文件中的代码与其他文件组织起来

在store文件夹下新建一个modules(模块)文件夹

**模块**

在仓库里可能有些部分用于不同的功能模块

每个模块有自己的getters,mutations和state等部分

modules文件夹里新建两个文件

- counter.js
- value.js

```
//counter.js
const state = {
	counter:0;
};
const getters = {
	doubleCounter: state =>{
			return state.counter*2;
}
	}
};
const mutations = {

} 
const actions = {

}
//导出对象
export default  {
	state,
	mutations,
	actions,
	getters
}
```

合并到集中式仓库

```
//store.js
import counter from './modules/counter'


export const store =  new Vuex.Store({
	state:{
		counter:0
	},
	//getters类似于保留字，Vuex会检测它，是一个对象，在里面添加多少个Getter都可以。每一个Getter（函数）的名称，就可以随便取
	getters:{
		//在这个函数里面，参数state,可以对状态进行任意操作
		doubleCounter: state =>{
			return state.counter*2;
}
	},
	//合并，把所有的模块添加进去
	modules:{
		counter
	}
})
```

**使用分割的文件**

公共部分

直接创建在store文件夹下，而非modules下

```
//actions.js
把相关的actions直接导出成为一个常数，并命名
export const action1 = ()=>{

}
```

导入actions

```
//store.js
//星号语法 加上 as actions 名字是自定义的，会让javascript在这创建一个对象，可以用actions这个名字访问该对象，而 actions.js文件中所有的导出值都是这个对象的属性

import * as actions   from './actions'


//重新分配原本在actions  getters mutations等文件中集中的任务，把代码分成更细的模块

//直接用actions来导入所有Action
actions

mutations
```

也可以将模块下创建文件夹，分成getters 等更细的文件

##### 使用名字空间来避免命名冲突问题

保证全部的getters actions等不存在相同的命名，变量名都是唯一的，对于所有最后合并到一个store里的文件

可以给定前缀

在store文件夹里新建types.js,在这个文件里设置一些常量，他们的变量名都是唯一的，之后我为方法或者属性命名时，就能使用这些名字

```
//types.js

//全局常量命名 全大写,值为变量名，加上的counter/前缀表示这个变量所属的模块
export const DOUBLE_COUNTER = ’counter/DOUBLE_COUNTER'；
export const CLICK_COUNTER = ’counter/CLICK_COUNTER'；
```

```
//counter.js
//导入types文件，把所有的types导入到一个对象中
import * as types from '../types';
//因为es6语法，可以使用动态属性名，使用[],使javaScript在运行时动态分配变量名。

const getters = {
	//用一个常量储存名字
	[types.DOUBLE_COUNTER]:state =>{
	
	}
}
```

```
//Reault.vue
使用常量命名

 <script>
	import {mapGetters} from 'vuex';
     import * as types from '../store/types';
    export default{
 
	computed:{
	//传递一个对象，使用变量名
	...mapGetters({
		doubleCounter:type.DOUBLE_COUNTER,
		stringCounter:type.CLICK_COUNTER
		})，
		//可以在下面创建自己的计算属性(混合用法)
		ourOwn(){
		
		}
	}
}


</script>
```

```
//actions.js导出一个对象

//导出对象，从而在属性中动态命名，用常量是实现不了的
import * as types from './types'
export default{
	[types.UPDATE_VAVLUE]:({commit},payload) =>{
		commit(types.MUTATE_UPDATE_VALUE,payload)
	}
	
};
```

```
//store.js
import actions from './actions'
```

