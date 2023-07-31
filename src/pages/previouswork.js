import './previouswork.css';
import SearchBar from '../searchBar';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Calendar from '../MyCalendar';







function PreviousWork() {

  const navigate = useNavigate();

  const goBack = () => navigate('/');
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
  const [menu_class, setMenuClass] = useState("menu hidden")
  const [searchbar_class, setSearchBarClass] = useState("search-bar hidden")

  const [isMenuClicked, setIsMenuClicked] = useState(false)
  const [searchInput, setSearchInput] = useState("");


  const updateMenu = (event) => {
    
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked")
      setSearchBarClass("searchbar visible")
      setMenuClass("menu visible")
      // Change the covered up
      document.getElementById('RyanCalendar').style.zIndex = -1;
    }
    else if (isMenuClicked) {
      setBurgerClass("burger-bar unclicked")
      setMenuClass("menu hidden")
      setSearchBarClass("searchbar hidden")
      // Change the style of the calendar
      document.getElementById('RyanCalendar').style.zIndex = 0;

    }
    setIsMenuClicked(!isMenuClicked)
  }


  return (
    <div style={{ width: '100vw', height: '100vh', position: 'fixed'}}>
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
        <SearchBar />
      </div>

      <button className="returnButton" onClick={goBack}> Back </button>

    </div>
  );
}
export default PreviousWork