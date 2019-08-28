import * as React from "react";
import GoodList from "../../components/GoodList/GoodList";
import {IItemConfig} from "../../components/GoodList/GoodList.interface";
import HotSearch from './components/HotSearch/HotSearch';
import SearchInput from "./components/SearchInput/SearchInput";
import './home.less';

const items:IItemConfig[] =[
    {
        author:'珊珊啊',
        collect:39,
        coverImage:'https://cp1.douguo.com/upload/caiku/0/0/8/260x220_00f6b6e4865681921746983a6caa62f8.jpeg',
        name:'低卡早餐',
        recipe:'紫薯泥： 紫薯中型 炼乳（随口味调节） 吐司 卡仕达酱（可选） 香蕉 ',
        view:23,
    },
    {
        author:'爱美食的拉拉',
        collect:39,
        coverImage:'https://cp1.douguo.com/upload/caiku/5/f/1/260x220_5fabd1cbe90cb27a4dbec12d443a70e1.jpg',
        name:'东北酸菜小排汤',
        recipe:'猪肋排 东北酸菜 香葱 火腿 老姜 水 料酒 盐  ',
        view:230,
    },
     {
        author:'爱美食的拉拉',
        collect:139,
        coverImage:'https://cp1.douguo.com/upload/caiku/e/1/b/260x220_e17754661e5d6dcee36923218545f25b.jpg',
        name:'慕斯蛋糕',
        recipe:'牛奶 细砂糖 淡奶油 吉利丁粉 奥利奥饼干碎 黄油 蓝莓 ',
        view:23,
    }, {
        author:'仙児的厨',
        collect:39,
        coverImage:'https://cp1.douguo.com/upload/caiku/0/6/9/260x220_06989ea9d668b121ab182de1231ab209.jpg',
        name:'酥皮绿豆饼',
        recipe:'紫薯泥： 紫薯中型 炼乳（随口味调节） 吐司 卡仕达酱（可选） 香蕉 ',
        view:23,
    }
]
// interface IGoodListProps{
//     items:ItemConfig[]
// }

// const GoodList:React.FC<IGoodListProps>=()=>{
//     return null;
// }

class  Home extends React.Component{
    
    public render(){
        return(
            <div className='home'>
                {/* 搜索 */}
                <div className='header'>
                  <SearchInput />
                </div>
                {/* 热门搜索 */}
                <div className='h-search mlf'>
                  <HotSearch />
                </div>
                {/* 精选最新 */}
                <div className='mlf'>
                <div className='dg-title mt40'>
                    精选最新
                </div>
                    <GoodList items={items} />
                </div>
            </div>
        )
    }
}
export default Home;