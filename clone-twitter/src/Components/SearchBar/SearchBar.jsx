import { useState } from 'react';
import './SearchBar.css';
import { Search } from 'lucide-react'; // Import de l'icône Search

export default function SearchBar() {
    const [isActive, setActive] = useState(false)
    function activeClick(){
        if (isActive === false){
            setActive(!activeClick)
        }
        else{
            setActive(false)
        }
    }
    return (
        <div className='containerBar'>
            <div className="flexContainer">

                <form 
                onClick={() => activeClick()}
                action="">
                    <button type="submit">
                        {isActive ? 
                        <Search className='imageLoupe'color="blue"/>
                        :
                        <Search className='imageLoupe'color="grey"/>
                        }
                    </button>
                    <input type="text" name="query" placeholder="Search" />
                </form>
            </div>
        </div>
    )
}