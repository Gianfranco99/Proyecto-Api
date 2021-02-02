import React, { useState } from "react";
import style from "./SearchBar.module.css"

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity("")
    }}>
      <input  className={style.barra}
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input className={style.boton} type="submit" value="Agregar" />
    </form>
  );
}

// class SearchBar extends React.Component{
//   constructor(props){
//     super(props);
//     this.state ={city:""};
//   }
//   render (){
//     return (
//       <form onSubmit={(e) => {
//       e.preventDefault();
//       this.props.onSearch(this.state.city);
//       this.setState({
//         city: ""
//       })
// }}>
//       <input
//         type="text"
//         placeholder="Ciudad..."
//         value={this.state.city}
//         onChange={e => this.setState({city:e.target.value})}
//       />
//       <input type="submit" value="Agregar" />
//     </form>
//   );
//   }
// }

// export default SearchBar;