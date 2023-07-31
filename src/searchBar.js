import React, { useState, useEffect } from 'react'
import './pages/previouswork.css';
import Modal from 'react-modal';

import { datas } from './pages/aboutme.js';
import axios from 'axios'
const itemList = [];
const nameList = [];

let apply_link = "";
let apply_link2 = "";
let Message = "Apply Here!"
let company_name = "";

const customStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    content: {
        background: '#262223',
        border: 'none',
        borderRadius: '8px',
        padding: '20px',
        maxWidth: '400px',
        margin: '0 auto',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
};



async function fetchData() {
    var response = await axios.get('/files');
    const fetchedData = JSON.parse(response.data.replace(/&quot;/g, '"'));

    for (let i = 0; i < fetchedData.length; i++) {
        itemList.push(("" + fetchedData[i].name));
        nameList.push(("" + fetchedData[i].name));
    }
    return fetchedData;
}




const SearchBar = () => {

    const [searchInput, setSearchInput] = useState("");
    const [filteredList, setFilteredList] = new useState(itemList);

    //To reqeuest from the backend
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    //For popup
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    const handleClick = (event, name, fetchedData) => {
        event.stopPropagation(); // Prevent event propagation to parent
        apply_link = fetchedData[nameList.indexOf(name)].company_link;
        apply_link2 = fetchedData[nameList.indexOf(name)].apply_link;
        
        Message = "Apply Here!"

        if(apply_link.length == 0 && apply_link2.length == 0){
            console.log(apply_link);
            Message = "Not open yet";
        }
        else if(apply_link.length == 0 && apply_link2.length != 0){
            apply_link = apply_link2;
        }


        
        company_name = name;
        // console.log("Company Website: " + fetchedData[nameList.indexOf(name)].company_link);
        openModal();
        console.log(localStorage.getItem('Key'));
        localStorage.setItem('Key', 'Value');
    };




    useEffect(() => {
        async function check() {
            try {
                setLoading(true);
                const data = await fetchData();
                setData(data);
                setLoading(false);
            }
            //Error
            catch (error) { setLoading(false); }
        }
        check();
    }, []);

    const filterBySearch = (event) => {
        const query = event.target.value;
        setSearchInput(query);
        var updatedList = [...itemList];

        updatedList = updatedList.filter((item) => {
            return (item.toLowerCase()).indexOf(query.toLowerCase()) !== -1;
        });
        setFilteredList(updatedList);
    };



    return (
        <div>
            <input style={{ width: '100%', height: '5vh', fontFamily: 'Special-Elite' }}
                type="search"
                placeholder="Search here"
                onChange={filterBySearch}
                value={searchInput} />
            <ol>

                {filteredList.map((item, index) => (
                    <button className="companyButton" onClick={(event) => handleClick(event, item, data)} style={{ background: 'transparent', width: '100%', border: 'none' }}>
                        <li key={index}>{item}</li>
                    </button>

                ))}
            </ol>

            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                style={customStyles}>
                <div>
                    <h2 className='company_name'>{company_name}</h2>
                    <a className="apply_link"
                        href={apply_link}
                        target="_blank"
                    > {Message}
                    </a>
                </div>
                <button className="close_modal" onClick={closeModal}>Close</button>


            </Modal>
        </div>
    );
};

export default SearchBar;