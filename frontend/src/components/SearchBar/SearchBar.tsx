import Search from "antd/es/input/Search";
import { setSearchText } from "../../services/slices/searchSlice";
import { useAppDispatch, useAppSelector } from "../../services/hooks";

function SearchBar(){
    const searchText = useAppSelector((state) => state.searchReducer.value)

    const dispatch = useAppDispatch();

    const onSearch = ()=>{
        console.log(searchText);
    }

    return <Search
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="large"
            onChange={(event)=>dispatch(setSearchText(event.target.value))}
            onSearch={()=>onSearch()}
        />
}

export default SearchBar