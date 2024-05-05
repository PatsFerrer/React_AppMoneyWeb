import { Link } from 'react-router-dom';

import './sidebar.css';
import icons from '../../styles/icons';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to="/"> <img src={icons.home} /> </Link>
      <Link to="/despesa"> <img src={icons.add} /> </Link>
      <Link to="#"> <img src={icons.config} /> </Link>
      <Link to="#"> <img src={icons.logout} /> </Link>
    </div>
  )
}

export default Sidebar;