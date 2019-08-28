import * as React from 'react';
import './Hotsearch.less';

const HotSearch=()=>{
    return(
        <>
        <div className='dg-title mb15'>
         热门搜索
        </div>
        <div className='search-hot mb30 clearfix hot-heit'>
         <a href="/caipu/梭子蟹?f=www" className="hot-btn">梭子蟹</a>
         <a href="/caipu/梭子蟹?f=www" className="hot-btn">冰皮月饼</a>
         <a href="/caipu/梭子蟹?f=www" className="hot-btn">辣子鸡</a>
         <a href="/caipu/梭子蟹?f=www" className="hot-btn">丝瓜</a>
         <a href="/caipu/梭子蟹?f=www" className="hot-btn">蛋黄酥</a>
         <a href="/caipu/梭子蟹?f=www" className="hot-btn">秋葵</a>
         <a href="/caipu/梭子蟹?f=www" className="hot-btn">冬瓜</a>
         <a href="/caipu/梭子蟹?f=www" className="hot-btn">梭子蟹</a>
         <a href="/caipu/梭子蟹?f=www" className="hot-btn">南瓜</a>
         <a href="/caipu/梭子蟹?f=www" className="hot-btn">家常菜</a>
        </div>
        <div className='search-hot mtb clearfix'>
        <a href="/shicai?f=www" className="hot-icon"><img src="https://i1.douguo.com//static/wap/img/m/h_all.png" className="npic" /></a>
        <a href="/shicai?f=www" className="hot-icon"><img src="https://i1.douguo.com//static/wap/img/m/h_week.png" className="npic" /></a>
        <a href="/shicai?f=www" className="hot-icon"><img src="https://i1.douguo.com//static/wap/img/m/h_video.png" className="npic" /></a>
        <a href="/shicai?f=www" className="hot-icon"><img src="https://i1.douguo.com//static/wap/img/m/h_menu_new.png" className="npic" /></a>

        </div>
        </>
    )
}
export default HotSearch;