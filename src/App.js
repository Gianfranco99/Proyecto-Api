
import './App.css';
import Nav from "./components/Nav.jsx";
import Cards from "./components/Cards.jsx"
import React,{useState} from "react";

export default function App () {
 const[cities,setCities]=useState([]);

 function onSearch(ciudad) {
  fetch("https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=" + ciudad + "&appid=9ec47a8150e44e6385aae05be36f9e11&units=metric")
    .then(r => r.json())
    .then((recurso) => {
      if(recurso.main !== undefined){
        const ciudad = {
          min: Math.round(recurso.main.temp_min),
          max: Math.round(recurso.main.temp_max),
          img: recurso.weather[0].icon,
          id: recurso.id,
          wind: recurso.wind.speed,
          name: recurso.name,
          weather: recurso.weather[0].main,
          clouds: recurso.clouds.all,
          latitud: recurso.coord.lat,
          longitud: recurso.coord.lon
        };
        setCities(oldCities => [...oldCities, ciudad]);
      } else {
        alert("Ciudad no encontrada");
      }  
    });
  }
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id != id));
  }

    return (
      <div class="content">
      <ul class="slider">
        <li class="img1"></li>
        <li class="img2"></li>
        <li class="img3"></li>
      </ul>
      <div className="App">
      <Nav  onSearch= {onSearch}/>
      <Cards cities={cities} onClose={onClose}/>
      </div>
    </div>
      
    );
  }




//  export default class App extends React.Component{
//   constructor (props){
//     super(props);
//     this.state={cities : []}
//     this.onSearch=this.onSearch.bind(this)
//     this.onClose=this.onClose.bind(this)
//   }
// onSearch(ciudad) {
//     fetch("http://api.openweathermap.org/data/2.5/weather?q=" + ciudad + "&appid=9ec47a8150e44e6385aae05be36f9e11&units=metric")
//       .then(r => r.json())
//       .then((recurso) => {
//         if(recurso.main !== undefined){
//           const ciudad = {
//             min: Math.round(recurso.main.temp_min),
//             max: Math.round(recurso.main.temp_max),
//             img: recurso.weather[0].icon,
//             id: recurso.id,
//             wind: recurso.wind.speed,
//             name: recurso.name,
//             weather: recurso.weather[0].main,
//             clouds: recurso.clouds.all,
//             latitud: recurso.coord.lat,
//             longitud: recurso.coord.lon
//           };
//           this.setState({cities:[...this.state.cities,ciudad]})
//         } else {
//           alert("Ciudad no encontrada");
//         }
//       });
//     }
//  onClose(id) {
//    this.setState({cities: this.state.cities.filter(c=>c.id !=id)})
//     }
//   render(){
//   return(
//     <div className="App">
//     <Nav  onSearch= {this.onSearch}/>
//     <Cards cities={this.state.cities} onClose={this.onClose}/>
//     </div>
//   );
// }

//   }
      

