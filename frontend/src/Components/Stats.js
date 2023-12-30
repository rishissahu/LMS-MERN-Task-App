import React, { useEffect } from 'react'
import './Stats.css'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import BookIcon from '@material-ui/icons/Book';
import axios from 'axios';
import { useState } from 'react';



function Stats() {
    const API_URL = process.env.REACT_APP_API_URL
    const [books, setBooks] = useState([]);

    useEffect(async () => {
        const response = await axios.get(API_URL + "api/books/allbooks")
        setBooks(response.data)
    }, [])
    
    return (
        <div className='stats'>
            <div className='stats-block'>
                <LibraryBooksIcon className='stats-icon' style={{ fontSize: 80 }} />
                <p className='stats-title'>Total Books</p>
                <p className='stats-count'>{books?.length}</p>
            </div>
            <div className='stats-block'>
                <LocalLibraryIcon className='stats-icon' style={{ fontSize: 80 }} />
                <p className='stats-title'>Total Members</p>
                <p className='stats-count'>254</p>
            </div>
        </div>
    )
}

export default Stats