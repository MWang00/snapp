import React, { useState, useEffect } from 'react';
import { SortableTable } from '../components/SortableTable';
import { NavBar } from '../components/NavBar';
import {LinearGradient} from "react-text-gradients"
import { useRouter } from 'next/router';


function createData(name, school, position, score, similarplayer) {
  return { name, school, position, score, similarplayer };
}

const initialRows = [
  createData('John Doe', 'University of Alabama', 'WR', 1, 'Julio Jones'),
  createData('Alex Smith', 'Ohio State University', 'WR', 2, 'Michael Thomas'),
  createData('Brian Taylor', 'Clemson University', 'WR', 1, 'DeAndre Hopkins'),
  createData('Chris Johnson', 'University of Florida', 'WR', 3, 'Emmanuel Sanders'),
  createData('Derek Allen', 'LSU', 'WR', 2, 'Jarvis Landry'),
  createData('Evan White', 'University of Oklahoma', 'WR', 1, 'CeeDee Lamb'),
  createData('Frank Brown', 'Penn State', 'WR', 3, 'Chris Godwin'),
  createData('George King', 'University of Notre Dame', 'WR', 2, 'Chase Claypool'),
  createData('Henry Davis', 'University of Southern California', 'WR', 4, 'Robert Woods'),
  createData('Isaac Wilson', 'Stanford University', 'WR', 3, 'JJ Arcega-Whiteside'),
  createData('Jack Thomas', 'University of Michigan', 'WR', 4, 'Donovan Peoples-Jones'),
  createData('Kevin Young', 'University of Georgia', 'WR', 2, 'A.J. Green'),
  createData('Liam Carter', 'Texas A&M', 'WR', 1, 'Mike Evans'),
  createData('Mason Hill', 'University of South Carolina', 'WR', 3, 'Deebo Samuel'),
  createData('Nathan Baker', 'TCU', 'WR', 4, 'Jalen Reagor'),
  createData('Oscar Adams', 'University of California, Berkeley', 'WR', 2, 'DeSean Jackson'),
  createData('Patrick Scott', 'University of Mississippi', 'WR', 1, 'DK Metcalf'),
  createData('Quinn Lewis', 'University of Louisville', 'WR', 3, 'DeVante Parker'),
  createData('Ryan Martinez', 'University of Colorado', 'WR', 4, 'Laviska Shenault Jr.'),
  createData('Samuel Green', 'University of Washington', 'WR', 2, 'John Ross')
];

export default function Players() {
  const router = useRouter();
  const { search } = router.query;
  const [rows, setRows] = useState(initialRows);

  useEffect(() => {
    if (search) {
      const searchLowercase = search.toLowerCase();
      const filteredRows = initialRows.filter(row => row.name.toLowerCase().startsWith(searchLowercase));
      setRows(filteredRows);
    } else {
      setRows(initialRows);
    }
  }, [search]);

  return (
    <div>
      <NavBar/>
      <div style={{width: "80%", marginLeft: "10%", textAlign: "center" }}>
        <h1><LinearGradient gradient={["to right", "#f54242 ,#b50b02"]}>Player Rankings</LinearGradient></h1>
        <SortableTable height="75vh" rows={rows} setRows={setRows}/>
      </div>
    </div>
  );
}