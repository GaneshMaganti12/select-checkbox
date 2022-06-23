import './App.css';
import Continents from "./components/Continents/Continents"
import Countries from './components/Countries/Countries';
import { useState } from 'react';

function App() {

  const [continentList, setContinentList] = useState([
    {
        id: 1, name: "Asia", isSelect: false, continentId: "ASIA"
    },
    {
        id: 2, name: "Europe", isSelect: false, continentId: "EUROPE"
    },
    {
        id: 3, name: "Africa", isSelect: false, continentId: "AFRICA"
    },
    {
        id: 4, name: "North America", isSelect: false, continentId: "NORTH AMERICA"
    },
    {
        id: 5, name: "South America", isSelect: false, continentId: "SOUTH AMERICA"
    },
    {
        id: 6, name: "Australia", isSelect: false, continentId: "AUSTRALIA"
    },
    {
        id: 7, name: "Antartica", isSelect: false, continentId: "ANTARTICA"
    }
  ])

  const [countryList, setCountryList] = useState([
    {
        id: "ASIA",
        names: ["Thailand", "Singapore", "Japan", "India", "China"],
        isActive: true
    },
    {
        id: "EUROPE",
        names: ["Germany", "France", "Spain", "Italy", "England"],
        isActive: true
    },
    {
        id: "AFRICA",
        names: ["South Africa", "Kenya", "Egypt", "Uganda", "Nigeria"],
        isActive: true
    },
    {
        id: "NORTH AMERICA",
        names: ["Canada", "United States", "Mexico", "Cuba", "Panama"],
        isActive: true
    },
    {
        id: "SOUTH AMERICA",
        names: ["Brazil", "Chile", "Colombia", "Peru", "Argentina"],
        isActive: true
    },
    {
        id: "AUSTRALIA",
        names: ["New Zealand", "New Caledonia", "Fiji", "Samoa"],
        isActive: true
    },
    {
        id: "ANTARTICA",
        names: [],
        isActive: true
    }

  ])

  const changeActive = (id, isSelect, continentId) =>{
    const filteredContinent = continentList.map((each) =>{
        if(each.id === id){
            return {...each, isSelect: !isSelect}
        }
        return each
    })

    const filteredCountries = countryList.map((each) =>{
        if(each.id === continentId){
            return {...each, isActive: isSelect}
        }
        return each
    })

    // console.log(updatedData)
    setContinentList(filteredContinent)
    setCountryList(filteredCountries)
  }

  return (
    <div className="App">
      <div className="continent-card">
          {continentList.map((each) => (
            <Continents key={each.id} continent={each} changeActive = {changeActive}/>
        ))}
      </div>
      
      <div className="countries-card">
            {countryList.map((each) =>(
                <Countries key={each.id} country={each}/>
            ))}
        </div>
    </div>
  );
}

export default App;
