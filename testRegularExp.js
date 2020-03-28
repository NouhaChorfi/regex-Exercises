var splitStringDelimiter=function(string, delimiter){
    var array= string.split(delimiter);
    var str=""
    for (var i=0; i<array.length ; i++){
        str=str+array[i]+"\n"
    }
    return str
}

var repeatString= function(string, num){
    return string.repeat(num)
}

var checkSubstring=function(string, sub){
    return string.indexOf(sub) === 0 ? true:false;
}

var checkLastSubString = function(string, sub){
    return string.lastIndexOf(sub) === string.length - sub.length ? true:false;
}

var capitalize = function(str){
    str = str.split(" ");
    var respStr = "";
    for(var i = 0; i < str.length; i++){
        var temp = str[i][0].toUpperCase() + str[i].slice(1).toLowerCase();
        respStr += temp + " ";
    }
    return respStr;
}

var captureTheNumber=function(arrayString){
    var str=""
    for( var i=0 ; i<arrayString.length; i++){
        arrayString[i]=arrayString[i].split(/[^\d]/);
        for (var j=0 ; j<arrayString[i].length; j++){
            if(arrayString[i][j]!==""){
                str=str+arrayString[i][j]+' '
            }
        }
    }
    return str
}
