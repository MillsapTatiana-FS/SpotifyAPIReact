import React, { useState, useEffect} from 'react';
import apiClient from '../../spotify';
import { MdFavorite } from 'react-icons/md';
import { FaGripfire, FaPlay } from 'react-icons/fa';
import { FaSignOutAlt } from 'react-icons/fa';
import { IoLibrary } from 'react-icons/io5';
import { MdSpaceDashboard } from 'react-icons/md';
import SideNavButton from './SideNavButton';
import './SideNav.css';

export default function SideNav() {
  const [image, setImage] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdLAY3C19kL0nV2bI_plU3_YFCtra0dpsYkg&usqp=CAU"
  );
  useEffect(() => {
    apiClient.get("me")
    .then(response => {console.log(response)})
  } , []);
  
  return (
    <div className="sidebar-container">
      <img src={image} className="profile-img" alt="profile" />
      <div>
        <SideNavButton title="Feed" to="/feed" icon={<MdSpaceDashboard />} />
        <SideNavButton title="Trending" to="/trending" icon={<FaGripfire />} />
        <SideNavButton title="Player" to="/player" icon={<FaPlay />} />
        <SideNavButton
          title="Favorites"
          to="/favorites"
          icon={<MdFavorite />}
        />
        <SideNavButton title="Library" to="/" icon={<IoLibrary />} />
      </div>
      <SideNavButton title="Sign Out" to="" icon={<FaSignOutAlt />} />
    </div>
  );
}