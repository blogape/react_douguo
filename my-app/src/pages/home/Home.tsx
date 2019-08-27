import * as React from "react";
import SearchInput from "./components/searchInput/searchInput";
import './home.less';
class  Home extends React.Component{
    public render(){
        return(
            <div className='home'>
                <div className='header'>
                  <SearchInput />
                </div>
            </div>
        )
    }
}
export default Home;