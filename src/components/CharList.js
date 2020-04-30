import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import CharCard from "./CharCard";
import SearchForm from "./SearchForm";

const Card = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Search = styled.div`
  margin-left: 30%;
`;

export default function CharList() {
  const [chars, setChars] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const search = (charArr) => {
    setFilteredData(charArr);
  };

  useEffect(() => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/"
      )
      .then((res) => {
        console.log(res.data);
        setChars(res.data.results);
        setFilteredData(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section>
      <Search>
        <SearchForm search={search} chars={chars} />
      </Search>

      <Card>
        {filteredData.map((char) => {
          return <CharCard key={char.id} character={char} />;
        })}
      </Card>
    </section>
  );
}
