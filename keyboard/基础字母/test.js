// A B C D E F G/H I J K L M N/O P Q R S T /U V W X Y Z
let str1 = 'abcdefg';
let str2 = 'hijklmn';
let str3 = 'opqrst';
let str4 = ",.<>/?;':\""
function permutate(str) {
    var result=[];
    if(str.length==1){
        return [str]    
    }else{  
        var preResult=permutate(str.slice(1));
        for (var j = 0; j < preResult.length; j++) {
            for (var k = 0; k < preResult[j].length+1; k++) {
                var temp=preResult[j].slice(0,k)+str[0]+preResult[j].slice(k);   
                result.push(temp);              
            }
        }
        return result;
    }  
}
let result = permutate(str4)
console.log(result.join('\n')); 