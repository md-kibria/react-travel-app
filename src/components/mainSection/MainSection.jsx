import React from 'react'
import './mainSection.css'
import Item from '../item/Item'

function MainSection() {
    return (
        <div className="mainSection">
            <h1 className='title'>Check Out These EPIC Determain</h1>
            <div className="items two">
                <Item
                    img="1.jpg"
                    title="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ipsum dolor sit amet"
                    tag="Lake"
                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, molestiae! Accusantium quidem maiores sint provident non tempora aliquid ratione? Minima voluptatem similique quibusdam quo. Temporibus."
                />
                <Item
                    img="2.jpg"
                    title="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ipsum dolor sit amet dolor sit"
                    tag="Hill"desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, molestiae! Accusantium quidem maiores sint provident non tempora aliquid ratione? Minima voluptatem similique quibusdam quo. Temporibus."
                />
            </div>
            <div className="items three">
                <Item
                    img="3.jpg"
                    title="Lorem ipsum dolor sit amet Lorem ipsum"
                    tag="Rest API"
                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, molestiae! Accusantium quidem maiores sint provident non tempora aliquid ratione"
                />
                <Item
                    img="4.jpg"
                    title="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
                    tag="Mountain"
                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, molestiae! Accusantium quidem maiores sint provident non tempora aliquid ratione"
                />
                <Item
                    img="5.jpg"
                    title="Lorem ipsum dolor sit amet Lorem ipsum dolor"
                    tag="Tour"
                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, molestiae! Accusantium quidem maiores sint provident non tempora aliquid ratione"
                />
            </div>
        </div>
    )
}

export default MainSection
