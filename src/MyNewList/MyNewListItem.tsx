

import React, {FC} from 'react';

interface MyNewListItemProps {
    pic: Picture;
}

interface Picture {
    title: string;
    img: string;
    author: string | null | undefined;
    featured: boolean | undefined;
}

const MyNewListItem: FC<MyNewListItemProps | any> = ({pic}) =>{
    const {title, img:image} = pic;
    return (
        <div>
            <img 
            src={`${image}?w=248&fit=crop&auto=format`}
            //srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={title}
            loading="lazy"/>
        </div>)
}

export default MyNewListItem; 