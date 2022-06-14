import './Sidebar.css';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>ABOUT ME</span>
        <img
          src='https://i.pinimg.com/474x/58/f2/de/58f2de50bad0fb24c24d4757841d57c4.jpg'
          alt=''
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>CATEGORIES</span>
        <ul className='sidebarList'>
          <li className='sidebarListItem'>Projects</li>
          <li className='sidebarListItem'>Thoughts</li>
          <li className='sidebarListItem'>Tech</li>
          <li className='sidebarListItem'>Reviews</li>
        </ul>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>FOLLOW ME</span>
        <div className='sidebarSocial'>
          <i className="sidebarIcon fa-solid fa-globe"></i>
          <i className="sidebarIcon fa-brands fa-linkedin"></i>
          <i className="sidebarIcon fa-brands fa-instagram-square"></i>
        </div>
      </div>
    </div>
  )
}
