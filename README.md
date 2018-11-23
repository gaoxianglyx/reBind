# reBind
unfortunate

## 这次做RN项目目前遇到的坑
### 1.
      ### 装饰器模式与Redux同时使用格式需要改变
      ``` javascript
      class LoginView ....
      
      // 后置写法，解决QRN框架导致的Decorator不能正常继承问题
      // 详情看node_modules\@qnpm\react-native-ext\plugins\redux\index.js
      LoginView.reduxPlugin = {
          mapStateToProps: (state) => ({
              isWaiting: state.vcode.isWaiting
          }),
          mapDispatchToProps: (dispatch) => ({
              fetchCode: bindActionCreators(fetchCode, dispatch),
              fetchCodeDone: bindActionCreators(fetchCodeDone, dispatch),
              initUserInfo: bindActionCreators(initUserInfo, dispatch)
          })
      };
      
      export default Decorator.wrap(LoginView, StorageDecorator);
      ```
### 2. 
Android中，给一个View设置BorderRadius时并且OverHidden时，Radius部分不会hidden

本次采用给radius部分覆盖一个层级更高的view，中心部分透明，也就是一个同心圆来达到效果

### 3.
两个Animate动画同事播放时，在某些机型上会产生错乱，所以尽量避免多个动画同时播放

### 4.
在RN中用WebView加载H5，初始化体验不太好，本次用SSR和其他的骚操作提升了加载速度