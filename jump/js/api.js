var dappAddress = "n1wHG45ULA2vZiVogmjhyYuQay3ZPVX3uhE";
var NebPay = require("nebpay");
var nebPay = new NebPay();
var jumpMyRecord;
function sendScore(score,callback) {
    var func = "sendScore";
    var args = "[\"" + score +"\"]"
    nebPay.call(dappAddress, "0", func, args, {
        listener: callback
    });
}

function getScore(callback) {
    var func = "getScore";
    var args = "[]"
    nebPay.simulateCall(dappAddress, "0", func, args, {
        listener: callback
    });
}

function outputScore(resp) {
    var result = JSON.parse(resp.result);
    var s = "";
    if(result.record === undefined){
        s += "全局记录:"+0;
    }else {
        s += "全局记录:"+result.record.score;
    }
    if(result.myRecord === undefined){
        s += "; 我的记录:"+0;
    }else {
        s += "; 我的记录:"+result.myRecord.score;
        jumpMyRecord = result.myRecord.score;
    }
    document.getElementById("score").innerText = s;
}