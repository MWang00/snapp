import React, { useState } from 'react';
import Table from '@mui/joy/Table';
import {Paper} from '@mui/material';
import { TableBody, TableHead, TableRow, TableCell } from '@mui/material';
// import styles from '../styles/SortableTable.module.css';

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

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedTableCellis = array.map((el, index) => [el, index]);
  stabilizedTableCellis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedTableCellis.map((el) => el[0]);
}

export function SortableTable({height, rows, setRows}) {
  const [order, setOrder] = useState(null); // Initialize order state as null
  const [orderBy, setOrderBy] = useState('');
  // [rows, setRows] = useState(initialRows.slice(0, initialRows.length));
  const [selectedColumn, setSelectedColumn] = useState(null);
  const handleSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    const newOrder = isAsc ? 'desc' : 'asc';
    setOrder(newOrder);
    setOrderBy(property);
    const sortedRows = stableSort(rows, getComparator(newOrder, property));
    setRows(sortedRows);
  };

  const SortIndicator = ({ column }) => {
    return orderBy === column && order ? (order === 'asc' ? ' ▼' : ' ▲') : '';
  };
  const getColumnStyle = (columnName) => ({
    textAlign: 'center',
    cursor: 'pointer',
    backgroundColor: orderBy === columnName ? '#fbfcfe' : '#fbfcfe',
  });

  return (
    <div>
      
      {/* borderColor:'lightgray', borderStyle:'solid' */}
      <Paper sx={{ height: height, overflow: 'auto', borderRadius: '20px', boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)' }}>
      <div style={{ borderRadius: '8px'}}>
        <Table aria-label="sticky table" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell style={getColumnStyle('name')} onClick={() => handleSort('name')}>Player<SortIndicator column="name" /></TableCell>
              <TableCell style={getColumnStyle('school')} onClick={() => handleSort('school')}>School<SortIndicator column="school" /></TableCell>
              <TableCell style={getColumnStyle('position')} onClick={() => handleSort('position')}>Position<SortIndicator column="position" /></TableCell>
              <TableCell style={getColumnStyle('score')} onClick={() => handleSort('score')}>Draftability<SortIndicator column="score" /></TableCell>
              <TableCell style={getColumnStyle('similarplayer')} onClick={() => handleSort('similarplayer')}>Similar Player<SortIndicator column="similarplayer" /></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell style={{ textAlign: 'center' }}>
                  <a href={`/player/${row.position.toLowerCase()}/${row.name}`} style={{ texTableCellecoration: 'none', color: 'inherit' }}>
                    {row.name}
                  </a>
                </TableCell>
                <TableCell style={{ textAlign: 'center' }}>{row.school}</TableCell>
                <TableCell style={{ textAlign: 'center' }}>{row.position}</TableCell>
                <TableCell style={{ textAlign: 'center' }}>{row.score}</TableCell>
                <TableCell style={{ textAlign: 'center' }}>{row.similarplayer}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      </Paper>
    </div>
  );
}