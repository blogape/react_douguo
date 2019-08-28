// import PropTypes from 'prop-types';
import * as React from 'react';
import {IItemConfig } from "../../components/GoodList/GoodList.interface";
import './GoodList.less';
const GoodList=(props:{items:IItemConfig[]})=>{
    return(
        <ul className='feed-recipe'>
            {
                props.items.map((item)=>(
                    <li >
                    <a href="/cookbook/2336710.html?f=www" className="flex">
                       <div className="feed-pic cook-pic br4"> 
                           <img src={item.coverImage} alt="低卡早餐——厚切紫薯香蕉三明治" className="npic" />                
                                          </div> 
                       <div className="feed-content flex-1">
                            <div className="recipe-wrap mb10">
                               <h2 className="recipe-name text-clamp">{item.name}</h2>
                               <div className="recipe-cai text-lips">{item.recipe} </div>
                            </div>                   
                           <div className="recipe-auth text-lips mb5">{item.author}</div>
                           <div className="recipe-other">
                               <span className="view">{item.view}</span>
                               <span className="collect">{item.collect} </span>
                           </div>
                       </div>
                       </a>
                    </li>
                ))
            }
           
        </ul>
    )
}
GoodList.PropTypes={
    // items:PropTypes.array.isRequired
}

export default GoodList;