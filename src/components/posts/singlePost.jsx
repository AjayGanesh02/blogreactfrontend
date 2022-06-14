import './singlePost.css';

export default function SinglePost() {
  return (
    <div className='singlePost'>
      <div className='singlePostWrapper'>
        <img
          className='singlePostImage'
          src=''
          alt=''
        />
        <h1 className='singlePostTitle'>
          Title of the post
          <div className='singlePostEdit'>
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className='singlePostInfo'>
          <span className='singlePostAuthor'>Author: <b>Ajay</b></span>
          <span className='singlePostDate'>1 hour ago</span>
        </div>
        <p className='singlePostDesc'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Pellentesque euismod, nisi eu consectetur consectetur,
          nisl nisi consectetur nisl, eu consectetur nisl nisi eu
          consectetur consectetur, nisl nisi consectetur nisl, eu
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Pellentesque euismod, nisi eu consectetur consectetur,
          nisl nisi consectetur nisl, eu consectetur nisl nisi eu
          consectetur consectetur, nisl nisi consectetur nisl, eu
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Pellentesque euismod, nisi eu consectetur consectetur,
          nisl nisi consectetur nisl, eu consectetur nisl nisi eu
          consectetur consectetur, nisl nisi consectetur nisl, eu
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Pellentesque euismod, nisi eu consectetur consectetur,
          nisl nisi consectetur nisl, eu consectetur nisl nisi eu
          consectetur consectetur, nisl nisi consectetur nisl, eu
        </p>
      </div>
    </div>
  )
}
