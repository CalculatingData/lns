/*
 * 说明：
 * 作者：
 * extends可以实现一种类型，此类型将可在java中通过调用服务提供器的.getServices(type)获取到。这样在java代码中直接使用接口间接的调用到jss实现
 * 注意使用extends的限制：
 * 1.jss必须实现该接口的方法，而且一定是导出方法，即声明为exports.method=function格式
 * 如果未有正确实现extends接口方法，则返回为null
 * extends的调用参考RefJssService类中的用例
 * isStronglyJss:true是强jss类型，它将以extends的接口类型作为jss对象类型
 * 
 * filter使用它需要在assembly.json中开启过滤器模式，它用于拦截java服务的方法，即此机制实现了以jss代理java的功能
 * 
 * 缺陷：java8 nashorn 在jdk8 65u之后的版本存在缺陷65u正常
 * 描述：绑定域可见性缺陷，比如一个jss服务的imports域，在非函数代码中可以打印出来，在函数（如：exports.test=function())代码段内却报imports未定义异常。
 * ScriptContext.ENGINE_SCOPE
 * 老外分析：jdk8 102版也存在此问题，95版也存在
 * http://stackoverflow.com/questions/37611959/java-8-passing-a-function-through-bindings
 * <![jss:{
		scope:'runtime',
		extends:'your.crop.examples.ecm.IPrinter',
		isStronglyJss:true
 	},
 	shit:{
 		name:"fuck"
 	}
 ]>
 <![desc:{
	ttt:'2323',
	obj:{
		name:'09skdkdk'
		}
* }]>
*/

var String = Java.type('java.lang.String');

print('---------------');
print('module_name:' + imports.module_name);
print('module_home:' + imports.module_home);
print('module_ext:' + imports.module_extName);
print('module_pack:' + imports.module_package);
print('module_unzip:' + imports.module_unzip);
print('module_type:' + imports.module_type);
print('head jss scope:'+imports.head.jss.scope);
print('head shit name:'+imports.head.shit.name);
print('location:' + imports.locaction);
print('source:' + imports.source);
print('selectKey1:' + imports.selectKey1);
print('selectKey2:' + imports.selectKey2);
print('this is jss chip site ' + chip.site());
var info = chip.info();
print(info.id);
print(info.name);
print(info.version);
print(info.getProperty('home.dir'));
print('-----------------end.')

exports.printHello=function(){
	print('--selectKey1:' + imports.selectKey1);
	print('--selectKey2:' + imports.selectKey2);
	print('hello world jss');
}
