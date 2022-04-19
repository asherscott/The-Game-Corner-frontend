import {useState} from "react";
import "./Search.css";

function Search({placeholder,gameList}){
    const [search,setSearch]=useState("");
    const [genre,setGenre]=useState("");
    // console.log (search)
    let searchList 

    if (search !== ""){
        searchList = gameList.filter((game) => game.name.toLowerCase().includes(search)&&game.genre===genre).map((game)=> (
            <li className="gameName" >{game.name}</li>
        ))    
    }

    const genres = []

    gameList.forEach((game) => {
        if(!genres.includes(game.genre)) genres.push(game.genre)
    })

    const handleChange = e =>{
        setGenre(e.target.value)
    }
    console.log(genre)

    return (
        <div className= "search-bar">
            <select onChange={handleChange}>
                <option selected="true" disabled="true">Genre</option>
                {genres.map((genre) => <option value={genre}>{genre}</option>)}
            </select>
            <input 
                type="text" 
                placeholder={placeholder}
                onChange={(e) =>setSearch(e.target.value)}
            />
            <ul className="searchGameList">
                {searchList}
            </ul>
        </div>
    )
}

export default Search;