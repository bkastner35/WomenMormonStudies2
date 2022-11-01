
import React, { useState } from 'react';
import Scroll from './Scroll';
import SearchList from './SearchList';
import { useEffect, useRef} from "react"

function Search({ details }) {

  const [searchNameField, setNameSearchField] = useState("");
  const [searchGeoField, setGeoSearchField] = useState("");
  const [searchDiscField, setDiscSearchField] = useState("");



  const filteredNamePersons = details.filter(
    person => {
      if (typeof(person.first_name) === 'undefined' && typeof(person.last_name) === 'undefined') {
        return details
      }
      else if (typeof(person.first_name) === 'undefined') {
        return (
          person
        .last_name
        .toLowerCase()
        .includes(searchNameField.toLowerCase())
        )
      }
      else{
        return (
          person
        .first_name
        .toLowerCase()
        .includes(searchNameField.toLowerCase()) ||
        person
        .last_name
        .toLowerCase()
        .includes(searchNameField.toLowerCase())
        )
      }
    }
  );

  const filteredGeoPersons = filteredNamePersons.filter(
    person => {
      if (typeof(person.geographic_areas) === 'undefined') {
        return filteredNamePersons
      }
      else{
        return (
        person
        .geographic_areas
        .toLowerCase()
        .includes(searchGeoField.toLowerCase())
        )
      }
    }
  );

  const filteredPersons = filteredGeoPersons.filter(
    person => {
      if (typeof(person.discipline) === 'undefined') {
        return filteredGeoPersons
      }
      else{
        return (
        person
        .discipline
        .toLowerCase()
        .includes(searchDiscField.toLowerCase())
        )
      }
    }
  );

const handleNameChange = e => {
  console.log(e)
  setNameSearchField(e.target.value);
};

const handleGeoChange = e => {
  console.log(e)
  setGeoSearchField(e.target.value);
};

const handleDiscChange = e => {
  console.log(e)
  setDiscSearchField(e.target.value);
};


function searchList() {
  return (
    <Scroll>
      <SearchList filteredPersons={filteredPersons} />
    </Scroll>
  );
}

  return (
    <section className="garamond">
      <div className="navy georgia ma0 grow">
        <h2 className="f2">Name Filter</h2>
      </div>
      <div className="pa2">
        <input 
          className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
          type = "search" 
          placeholder = "Enter Name" 
          onChange = {handleNameChange}
        />
      </div>
      
      <div className="navy georgia ma0 grow">
        <h2 className="f2">Geographic Filter</h2>
      </div>
      <div className="pa2">
        <input 
          className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
          type = "search" 
          placeholder = "Enter Geographic Location" 
          onChange = {handleGeoChange}
        />
      </div>
      <div className="navy georgia ma0 grow">
        <h2 className="f2">Discipline Filter</h2>
      </div>
      <div className="pa2">
        <input 
          className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
          type = "search" 
          placeholder = "Enter Discipline" 
          onChange = {handleDiscChange}
        />
      </div>

      {searchList()}

      
    </section>
    
  );
}

export default Search;





