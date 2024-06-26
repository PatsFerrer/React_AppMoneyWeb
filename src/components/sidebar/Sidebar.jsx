import { Link } from 'react-router-dom';

import './sidebar.css';
import icons from '../../styles/icons';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to="/"> <img className='icon' src={icons.home} /> </Link>
      <Link to="/despesa/add"> <img className='icon' src={icons.add} /> </Link>
      <Link to="#"> <img className='icon' src={icons.config} /> </Link>
      <Link to="#"> <img className='icon' src={icons.logout} /> </Link>
    </div>
  )
}

export default Sidebar;