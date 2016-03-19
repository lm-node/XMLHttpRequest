/**
 * Created by liuzhentao on 2016/3/17 0017.
 */

/***
 * xmlhttprequest
 * 是一个内置的http包装器用来模拟浏览器XMLHttpRequest对象
 * 可以跨域访问，达到代码重用和使用现有库
 *
 */


(function(){
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var fs = require("fs");
    var kmdirs = "MacBookProMF840CHA13/2006703";
    var results = null;

    function existFile( file,content, start ) {
        fs.exists(file, function(exists) {
            if (!exists) {
                fs.mkdirSync(kmdirs, 0777, function (err) {
                    if (err) {
                        return console.error(err);
                    }
                     writeFile( content, file, start );
                    console.log("目录创建成功。");
                });
                return false;
            }
            writeFile( content, file, start );
        })
    }


    function writeFile( content, file, start ) {
        console.log("目录创建成功。");
        fs.open(kmdirs+file,"a+",0644,function(e,fd){
            if(e) throw e;
            //fs.write(fd,"first fs!",0,'utf8',function(e){
            //    if(e) throw e;
            //    fs.closeSync(fd);
            //})
            content.pipe(fs.createWriteStream(file, {flags: 'r+', encoding: 'utf8', mode: 0666, start: start}));
        });



    }

    function req(type,url,callback) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            console.log("State: " + this.readyState);
            if (this.readyState === 4) {
                //callback(this.responseText);
                existFile( "result.json",this.responseText, 0 );
            }
        };
        xhr.open(type, url);
        xhr.send();
    }

    req("GET","http://www.yungou.cn/api.do?goods_id=2006703&num=50&page=1&action=getRecords",pagesHander);
    //req("GET","http://www.yungou.cn/api.do?id=280771&action=getRecordsCodes",getCodesByUid);

    function pagesHander(result) {
        //result.replace(//);
        var data = JSON.parse(result);
        var total = data.data.total;
        var page = data.data.page;

        writeFile( result, filename+"result.json", 0 );
        //fs.open("test.txt","w",0644,function(e,fd){
        //    if(e) throw e;
        //    fs.write(fd,"first fs!",0,'utf8',function(e){
        //        if(e) throw e;
        //        fs.closeSync(fd);
        //    })
        //});
        //response.pipe(fs.createWriteStream('../../targetFiles/doodle.jpg',{flags: 'r+', encoding: null, mode: 0666,start:0}));
        //if(results){
        //    results.concat(data.data.lists);
        //}else{
        //    results = data.data.lists;
        //}
        //for(var i in lists){
        //    var list = lists[i];
        //    console.log(list.time);
        //    console.log(list.uid);
        //};
    }

    function getCodesByUid(result) {
        var data = JSON.parse(result);
        console.log(data)
    }

    function predicteResult() {

    }


}())


