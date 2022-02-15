import React from 'react'
import './item.css'

export default function Item({tag, img, title, desc}) {
    return (
        <div className="item">
            <div className="itemImg">
                <img src={'./img/' + img} alt="" />
                <span className="itemTag">{tag}</span>
            </div>
            <div className="itemBody">
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
        </div>
    )
}
