# XMLHttpRequest
XMLHttpRequest

      /***
       * xmlhttprequest
       * 是一个内置的http包装器用来模拟浏览器XMLHttpRequest对象
       * 可以跨域访问，达到代码重用和使用现有库
       *
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
