import * as React from "react";
import './searchInput.less';

const SearchInput=()=>{
    return(
    <div className='h-search'>
      <input type="input" placeholder="搜索菜谱" className="search"/>
    </div>
     )
}

export default SearchInput;