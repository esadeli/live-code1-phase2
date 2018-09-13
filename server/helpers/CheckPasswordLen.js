'use strict'

function CheckPasswordLen(input){
    let str = input + '';
    if(str.length>=6){
        return true
    }else{
        return false
    }
}

module.exports = CheckPasswordLen