import * as types from '../action-types';
export default {
    increment(){
        return {type:types.INCREMENT};
    },
    decrement(){
        return {type:types.DECREMENT};
    },
    incrementAsync(){
        return function(dispatch){
            setTimeout(()=>{
                dispatch({type:types.INCREMENT});
            },1000);
        }
    },
    incrementPromise(){
        return {
            type:types.INCREMENT,
            payload:new Promise((resolve,reject)=>{
                let result = Math.random();
                if(result>.5){
                    resolve(result);
                }else{
                    reject(result);
                }
            })
        }
    }
}