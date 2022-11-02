

import React, { useState } from 'react';
import Scroll from '../componenet/Scroll.js';
import UserBox from '../componenet/UserBox.js'



function Admin({ values }) {

  const [searchField, setSearchField] = useState("");

  const filteredPersons = values.filter(
    person => {
      if (typeof(person.first_name) === 'undefined' && typeof(person.last_name) === 'undefined') {
        return
      }
      else if (typeof(person.first_name) === 'undefined') {
        return (
          person
        .last_name
        .toLowerCase()
        .includes(searchField.toLowerCase())
        )
      }
      else {
        return (
          person
        .last_name
        .toLowerCase()
        .includes(searchField.toLowerCase())
        )
      }
    }
  );

  const handleChange = e => {
    setSearchField(e.target.value);
  };

  function searchList() {
    return (
      <Scroll>
        {/* <SearchList filteredPersons={filteredPersons} /> */}
        <UserBox values= {values}></UserBox>
      
      </Scroll>
    );
  }

  return (
    <section className="garamond">
      <div className="navy georgia ma0 grow">
        <h2 className="f2">Search for an Expert!</h2>
      </div>
      <div className="pa2">
        <input 
          className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
          type = "search" 
          placeholder = "Search People" 
          onChange = {handleChange}
        />
      </div>
      {searchList()}
    </section>
  );
}

export default Admin;