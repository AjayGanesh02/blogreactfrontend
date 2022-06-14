import './PostCard.css';

export default function PostCard() {
    return (
        <div className='post'>
            <img
                className='postImage'
                src=''
                alt=''
            />
            <div className='postInfo'>
                <div className='postCats'>
                    <span className='postCat'>Project</span>
                    <span className='postCat'>Web Development</span>
                </div>
                <span className='postTitle'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
                <hr/>
                <span className='postDate'> 1 hr ago</span>
            </div>
            <p className='postDesc'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
        </div>
    )
}
