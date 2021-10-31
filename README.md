# ShiyiFramework
### ShiyiApi

- 目录结构

  ```typescript
  -ShiyiApi
      - [Controller]
          - [ApiName]Api
            - Model
              - [ApiName]ApiModel.ts	//定义请求以及响应的处理方法
            - [ApiNmae]Api.ts			//定义Api
  ```

  请务必按照以上目录结构建立Api。
  
- Snippets

  ```typescript
  >>ShiyiApiModel	//填充完成ApiModel.ts初始化模板
  >>ShiyiApi		//填充完成Api.ts的初始化模板
  ```

具体编写方法请参考/ShiyiFrameword/SampleController/SampleApi

### Data

- ​	**GetSetData<DataT>** 自带Get Set的数据类型

  构造函数

  ```typescript
  constructor(data:DataT,				//数据值
  	_getFunc?:(data:DataT)=>DataT,	//自定义get处理方法
  	_setFunc?:(data:DataT)=>DataT	//自定义set处理方法
  ){
  ```

  示例

  ```typescript
  let DarkMode = new GetSetData<boolean>(false)	//不自定义get、set
  
  let DarkMode = new GetSetData<boolean>(false,(data:DataT)=>{
      return !data;
  })//自定义get、set
  ```

  调用示例

  ```typescript
  DarkMode.Get();
  DarkMode.Set(false);
  ```

- **Data<DataT>** 可绑定至页面data的数据类型

  Data<DataT> 派生自GetSetData<DataT>,构造函数以及Get 、Set使用方法相同

  绑定方法请参考**ShiyiPage.AddObserver()**

### Router

- ​	添加页面路由

  - pages目录下的一级路由，请直接将页面名添加至Router.ts内PageName枚举

    ```typescript
    Router.ts
    
    export enum PageName {
        SamplePage1,SamplePage2
    }
    ```

  - 嵌套路由，请同一级路由定义PageName，并于Router.PageMap内定义嵌套结构

    ```typescript
    public static PageMap: Array<PageMapItem> = [
        {
        	name: PageName.SamplePage1,
            children: [
                {
                    name: PageName.SamplePage2,
                    children: []
                }
            ]
        }
    ]
    ```

  - 路由跳转

    - **Route.NavigateTo()** 跳转至指定页面

      定义:

      ```
      NavigateTo(name: PageName, param?: any): void
      ```

      示例:

      ```typescript
      Router.NavigateTo(PageName.SamplePage1)	//无参数
      
      Router.NavigateTo(PageName.SamplePage1,{
          SampleParam:this.SampleParam
      })	//带参数
      ```

      其中参数会在目标ShiyiPage的onLoad方法中被加载至ShiyiPage.InParameter，可在**onReady()**方法中进行初始化操作

    - **Router.NavigateBack()** 返回上一页

  - 页面栈

    - **Router.CurrentPage** 获取当前ShiyiPage对象

    - **Router.RegisterPageUnLoaded()** 绑定指定页面Unloaded事件

      定义

      ```typescript
      /**
      * 绑定指定页面Unloaded事件
      * @param page 要绑定的页面
      * @param notification Unload时处理函数
      */
      RegisterPageUnLoaded(page: ShiyiPageBase,notification:(page: ShiyiPageBase) => void): void
      ```

      示例

      ```typescript
      Router.RegisterPageUnLoaded(page,(page:ShiyiPageBase)=>{
          console.log("Page Unloaded");
      })
      ```

      

### ShiyiPage

- 目录结构

  ```typescript
  - pages
  	- [PageName]
          - Functional
              - [PageName]Func.ts	//定义功能性方法
          - Models
          	- Models.ts			//定义数据模型
          - UI
          	-[PageName]UI.ts	//定义UI方法
  ```

- 生命周期

  - onLoad

    onLoad方法于ShiyiPage加载时调用，请不要在除了ShiyiPageBase以外的地方调用此方法，或者如下调用（不建议）

    ```typescript
    public onLoad(){
        super.onLoad();
        //Your Code
    }
    ```

    如需要在页面加载时处理，请使用**onReady()**

  - onReady

    onReady方法于ShiyiPage加载完成时调用，作为onLoad的替代，请使用如下方法获取传入页面的参数

    ```typescript
    public onReady(){
        let options = this.InParameters as [YourDataModel]
    }
    ```

  - onUnload

    onUnload方法于ShiyiPage卸载时调用，请不要在除了ShiyiPageBase以外的地方调用此方法，或者如下调用（不建议）

    ```
    public onUnload(){
        super.onUnload();
        //Your Code
    }
    ```

  其他的生命周期请参考微信小程序文档

- **AddObserver<DataT>()** 全局数据绑定

  定义

  ```typescript
  AddObserver<DataT>(data:Data<DataT>,target:ObserverTarget<DataT>)
  
  interface ObserverTarget<DataT>{
      name: string;						//本页data的key
      PreProcess?:(value:DataT) => any;	//预处理方法
  }
  ```

  示例

  ```typescript
  /*******************************************/
  //GlobalData.ts
  public DarkMode = new GetSetData<boolean>(false)
  
  /*******************************************/
  //SamplePage1.ts
  interface PageData{
      Dark:string
  }
  
  public data:PageData={
      Dark:""
  }
  
  this.AddObserver(GlobalData.DarkMode,{
      name:nameof<PageData>("Dark"),
      PreProcess:(value){
      	return value?"Dark":""
  	}
  })
  //当DarkMode更新时，SamplePage1中的data也会更新，并重新渲染
  ```

- 冒泡事件

  - 发送冒泡事件

    ```typescript
    let event = new Event("SampleEvent",{
        Id:1
    })
    event.Run();	//仅在页面上传递
    event.Run(true);//在页面以及组件传递
    ```

  - **AddHandler()** 处理冒泡事件

    定义

    ```typescript
    AddHandler(Trigger:string,Handler:(e:Event)=>void):void
    ```

    示例

    ```typescript
    this.AddHandler("SampleEvent",(e)=>{
    	console.log(e.EventData);
    	e.Pass();	//如希望不阻断事件，使事件继续传递，使用e.Pass();
    })
    ```

- UI事件参数

  示例

  ```typescript
  //SamplePage1.ts
  public BtnTap(option:IuiOption){
      this.Func.BtnTap(option);
  }
  
  //SamplePage1Func.ts
  public BtnTap(option:IuiOption){
      let model = option as TapOption
  }
  ```

  具体请参看/ShiyiFramework/UI/

