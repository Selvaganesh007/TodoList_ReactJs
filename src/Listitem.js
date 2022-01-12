import React from "react";
import './Listitem.css';
import { MdDeleteForever } from 'react-icons/md';
import FlipMove from 'react-flip-move';

export default function Listitem(props) {

    const items = props.items;

    const Listitems = items.map(item => {
        return <div className="list" key={item.key}>
            <p>{item.text} <span><MdDeleteForever className="del-icon" onClick={() => props.deleteItem(item.key)} /></span></p>
        </div>
    })

    return (
        <div>
            <FlipMove duration={500} easing="ease-in-out">
                {Listitems}
            </FlipMove>
        </div>
    )
}