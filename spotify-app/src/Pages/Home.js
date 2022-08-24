import React, {useState, useEffect} from "react";
import axios from "axios"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideNav from "../Components/SideNav/SideNav";
import Favorites from "./Favorites" ;
import Feed from "./Feed";
import Library from "./Library/Library";
import Player from "./player";
import Trending from "./trending";
import Login from "./Login";
import { setClientToken } from "../spotify";

function Home() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";
    if(!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(token);
      setClientToken(token);
    }
  }, []);
  
  return !token ? (
    <Login />
  ) : (
    <Router>
        <div style={styles.mainBody}>
          <SideNav />
            <Routes>
              <Route path="/" element={<Library />} />
              <Route path="/feed" element={<Feed />} />
              <Route path="/trending" element={<Trending />} />
              <Route path="/player" element={<Player />} />
              <Route path="/favorites" element={<Favorites />} />
            </Routes>
        </div>
    </Router>
  );
}

export default Home;

const styles = {
  mainBody: {
    height: '100vh',
    width: '100vw',
    backgroundColor: '#f7e2fb',
    borderRadius: '30px',
    display: 'flex',
  },
}