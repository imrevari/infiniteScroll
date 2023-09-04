import React, {FC, useState, useEffect} from 'react';
import MyNewListItem from './MyNewListItem'
import ImageList from '../ImageList'
import useIdGenerator from './useIdGenerator'

interface MyNewListProps {
    message: string;
}

const MyNewList: FC<any> = () =>{

    const [index, setIndex] = useState(0)

    const {previousId, nextId} = useIdGenerator(index, ImageList);

    const scroll = (deltaY: number) =>{
        if(deltaY > 0){
            setIndex(nextId)
        }else{
            setIndex(previousId)
        }
    }


    return (
        <div style={{border: '1px solid red'}} onWheel = {({deltaY}) => scroll(deltaY)}>
            <div style={{padding: '3px'}} >
                <MyNewListItem pic = {ImageList[previousId]}/>
                <MyNewListItem pic = {ImageList[index]}/>
                <MyNewListItem pic = {ImageList[nextId]}/>
            </div>
        </div>
    )
}

export default MyNewList; 


