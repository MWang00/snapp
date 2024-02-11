// import * as React from 'react';
// import { useState } from 'react';
// import { SortableTable } from '../components/SortableTable';
// import { NavBar } from '../components/NavBar';
// import {LinearGradient} from "react-text-gradients"
// import { useEffect } from 'react';
// import { useRouter } from 'next/router';

// function createData(name, school, position, score, similarplayer) {
//   return { name, school, position, score, similarplayer };
// }

import * as React from 'react';
import { useState, useEffect } from 'react';
import { SortableTable } from '../components/SortableTable';
import { NavBar } from '../components/NavBar';
import { LinearGradient } from "react-text-gradients";
import { useRouter } from 'next/router';


const initialRows = [
  
  createData('Loading...', 'Loading...', 'Loading...', 'Loading...', 'Loading...')
];


function createData(name, school, position, playerclass) {
  return { name, school, position, playerclass };
}

export default function players() {
  const router = useRouter();
  const { search } = router.query;
  const [allRows, setAllRows] = useState([]); 
  const [rows, setRows] = useState([]); 

  useEffect(() => {
    // fetch
    fetch('/api/mass_fetch')
      .then(response => response.json())
      .then(data => {
        const formattedData = data.map(player => createData(player.name, player.college, player.position.toUpperCase(), player.class));
        setAllRows(formattedData); 
        setRows(formattedData); 
      })
      .catch(error => console.error('Error fetching player data:', error));
  }, []);

  useEffect(() => {
    if (search) {
      const searchLowercase = search.toLowerCase();
      const filteredRows = allRows.filter(row => row.name.toLowerCase().includes(searchLowercase));
      setRows(filteredRows);
    } else {
      setRows(allRows);
    }
  }, [search, allRows]);

    return (
      <div>
        <NavBar/>
        <div style={{width: "80%", marginLeft: "10%", textAlign: "center" }}>
          <h1><LinearGradient gradient={["to right", "#f54242 ,#b50b02"]}>Player Statistics</LinearGradient></h1>
          <SortableTable height="75vh" rows={rows} setRows={setRows}/>
        </div>
      </div>
    );
}
