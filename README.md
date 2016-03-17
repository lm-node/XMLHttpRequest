# XMLHttpRequest
XMLHttpRequest

      /***
       * xmlhttprequest
       * 是一个内置的http包装器用来模拟浏览器XMLHttpRequest对象
       * 可以跨域访问，达到代码重用和使用现有库
       *
       * readyState:
       * 0	请求未初始化	初始化状态。XMLHttpRequest 对象已创建或已被 abort() 方法重置。还没有调用 open()）
1	 * 1  Open	            open() 方法已调用，但是 send() 方法未调用。请求还没有被发送。
2	 * 2  Send	            Send() 方法已调用，HTTP 请求已发送到 Web 服务器。未接收到响应。
3	 * 3  Receiving	      所有响应头部都已经接收到。响应体开始接收但未完成。
4	 * 4  Loaded	      HTTP 响应已经完全接收。
       */
      
      var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
      
      var xhr = new XMLHttpRequest();
      
      xhr.onreadystatechange = function() {
          console.log("State: " + this.readyState);
      
          if (this.readyState === 4) {
              console.log("Complete.\nBody length: " + this.responseText.length);
              console.log("Body:\n" + this.responseText);
          }
      };
      
      xhr.open("GET", "http://www.yungou.cn/api.do?goods_id=2005315&num=50&page=2&action=getRecords");
      xhr.send();
