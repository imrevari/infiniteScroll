import React from 'react';

export default function useIdGenerator(index: number, list: Object[]): { previousId: number; nextId: number; } {
    if(list.length <= 1){
        return ({previousId:0, nextId: 0});
    }
    if(index === 0){
        return({previousId: list.length - 1, nextId: index + 1})
    }

    if(index === (list.length - 1)){
        return({previousId: index - 1, nextId: 0})
    }
    return ({previousId: index - 1, nextId: index + 1});
}