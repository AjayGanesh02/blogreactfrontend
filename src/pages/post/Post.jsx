import Sidebar from '../../components/sidebar/Sidebar';
import SinglePost from '../../components/posts/singlePost';
import './Post.css';

export default function Post() {
  return (
    <div className='postPage'>
        <SinglePost/>
        <Sidebar/>
    </div>
  )
}
