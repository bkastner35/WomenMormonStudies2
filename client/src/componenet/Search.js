
import React, { useState } from 'react';
import Scroll from './Scroll';
import SearchList from './SearchList';
import { useEffect, useRef} from "react"
let skills = [
  "Africa",
  "Asia",
  "Australia and/or New Zealand",
  "Pacific Islands",
  "Europe",
  "United States and/or Canada",
  "Latin America and/or Caribbean",
  "Middle East"

]

function Search({ details }) {

  const [searchField, setSearchField] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("")
  const [dropdownSearchValue, setDropdownSearchValue] = useState("")
  const [editMode, setEditMode] = useState(false)
  const dropdownRef = useRef()

  useEffect(() => {
    const checkIfClickedOutside = e => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (
        editMode &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setEditMode(false)
      }
    }
    document.addEventListener("mousedown", checkIfClickedOutside)
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [editMode])

  const skillSelectionHandler = skill => {
    setSelectedSkill(skill)
    setDropdownSearchValue("")
    setEditMode(false)
  }

  const filteredSkills = skills.filter(skill =>
    skill.match(new RegExp(dropdownSearchValue, "i"))
  )

  const filteredPersons = details.filter(
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
      else{
        return (
          person
        .first_name
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
        <SearchList filteredPersons={filteredPersons} />
      </Scroll>
    );
  }

  return (
    <section className="garamond">
          
    <div className="App">
      <h2>Geographic Filtering</h2>

      {editMode ? (
        // display the dropdown when the input us focused
        <div ref={dropdownRef} className="dropdown-wrapper">
          <input
            className="dropdown-input"
            name="dropdown-input"
            autoFocus
            onChange={e => setDropdownSearchValue(e.target.value)}
            value={dropdownSearchValue}
          />
          <div className="dropdown-list">
            <ul>
              {filteredSkills.map(skill => {
                return (
                  <li key={skill} onClick={() => skillSelectionHandler(skill)}>
                    {skill}{" "}
                  </li>
                )
              })}
              {filteredSkills.length === 0 && (
                <li className="no-result">No results found</li>
              )}
            </ul>
          </div>
        </div>
      ) : (
        <input
          // Grey out the text when "Select Primary skill" input hint is shown
          className={`dropdown-search ${
            !(dropdownSearchValue || selectedSkill) && "default"
          }`}
          onFocus={() => setEditMode(true)}
          // Display the selected skill or "Select Primary skill" input hint
          value={selectedSkill || "Select Primary Geographic Focus"}
        />
      )}
    </div>
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

export default Search;





