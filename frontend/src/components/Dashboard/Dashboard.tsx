
import SearchBar from '../SearchBar/SearchBar'
import VideoList from '../VideoList/VideoList'
import './Dashboard.scss'

function Dashboard() {

    return (
        <div className='dashboard'>
        <SearchBar/>
        <VideoList />
        </div>
    )
}

export default Dashboard
