import React from 'react';
import SearchIcon from '@material-ui/icons/Search';


const GifSearchBar = (props) => {

return(

<div classeName="searchContainer">
          
{/* When submited form will call fetchUserGifs and return results in a grid*/}
<form onSubmit={props.handleSubmit}>
<SearchIcon />
  <input 
  className= "gif-search-input"
  type= "text" 
  name= "searchTerm"
  placeholder= "Search for GIFs.." 
  onChange= { props.handleChange } 
  value= {props.searchTerm} 
  />
  <button className= "gif-search-button">{"->"}</button>
</form>
</div>
    )
}

export default GifSearchBar;