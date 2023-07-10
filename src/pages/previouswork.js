import './previouswork.css';
import SearchBar from '../searchBar';
import React, { useState } from "react";
import Calendar from '../MyCalendar';

function PreviousWork() {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
  const [menu_class, setMenuClass] = useState("menu hidden")
  const [searchbar_class, setSearchBarClass] = useState("search-bar hidden")

  const [isMenuClicked, setIsMenuClicked] = useState(false)
  const [searchInput, setSearchInput] = useState("");


  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked")
      setSearchBarClass("searchbar visible")
      setMenuClass("menu visible")
    }
    else if(isMenuClicked){
      setBurgerClass("burger-bar unclicked")
      setMenuClass("menu hidden")
      setSearchBarClass("searchbar hidden")
    }
    setIsMenuClicked(!isMenuClicked)
  }


  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      {/* Set design later */}
      <Calendar/>
      <nav className='nav'>
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class} ></div>
          <div className={burger_class} ></div>
          <div className={burger_class} ></div>
        </div>
      </nav>
      

      <div className={menu_class}> 
      </div>
      <div className={searchbar_class}>
        <SearchBar/>
      </div>

      
    </div>
  );
}
export default PreviousWork