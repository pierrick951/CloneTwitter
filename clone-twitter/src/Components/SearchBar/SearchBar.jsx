import React from 'react';
import './SearchBar.css';
import { Search } from 'lucide-react'; // Import de l'icône Search

export default function SearchBar() {
    return (
        <div className='containerBar'>
            <div className="flexContainer">

                <form action="">
                    <button type="submit">
                        <Search
                            className='imageLoupe'
                            color="grey" />
                    </button>
                    <input type="text" name="query" placeholder="Search" />
                </form>
            </div>
        </div>
    )
}