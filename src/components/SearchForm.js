import React, { useState } from 'react';

export default function SearchForm(props) {

    const [results, setResults] = useState();

    const handleChanges = e => {
      setResults(e.target.value);
    };
  
    const submitHandler = e => {
      e.preventDefault();
  
    const filtered = props.chars.filter(char => {
        return char.name.toLowerCase().indexOf(results.toLowerCase()) !== -1;
      });
      props.search(filtered);
      console.log(filtered);
    };
    return (
      <section className="search-form">
        <form onSubmit={submitHandler}>
          <input
            onChange={handleChanges}
            type="text"
            name="character"
            id="character"
            placeholder="Search"
          />
          <button type='submit'>Search</button>
        </form>
      </section>
    );
  }