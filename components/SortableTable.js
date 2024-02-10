// createData('1', 159, 6.0, 24, 4.0),
// createData('2', 237, 9.0, 37, 4.3),
// createData('3', 262, 16.0, 24, 6.0),
// createData('4', 305, 3.7, 67, 4.3),
// createData('5', 356, 16.0, 49, 3.9),
// createData('6', 159, 6.0, 24, 4.0),
// createData('7', 237, 9.0, 37, 4.3),
// createData('8', 262, 16.0, 24, 6.0),
// createData('9', 305, 3.7, 67, 4.3),
// createData('10', 356, 16.0, 49, 3.9)
import React, { useState } from 'react';
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';
import styles from '../styles/SortableTable.module.css';

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
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export function SortableTable() {
  const [order, setOrder] = useState(null); // Initialize order state as null
  const [orderBy, setOrderBy] = useState('');
  const [rows, setRows] = useState(initialRows);
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
    // Only display the sort indicator if order is truthy
    return orderBy === column && order ? (order === 'asc' ? ' ▼' : ' ▲') : '';
  };
  const getColumnStyle = (columnName) => ({
    textAlign: 'center',
    cursor: 'pointer',
    backgroundColor: orderBy === columnName ? '#e0e0e0' : 'transparent', // Change color if column is selected
  });

  return (
    <div>
      <Sheet sx={{ height: '75vh', overflow: 'auto', borderRadius: '20px', boxShadow: 3 }}>
        <Table aria-label="playertable" stickyHeader stickyFooter sx={{ borderRadius: '8px', overflow: 'hidden' }}>
          <thead>
            <tr>
              <th style={getColumnStyle('name')} onClick={() => handleSort('name')}>Player<SortIndicator column="name" /></th>
              <th style={getColumnStyle('school')} onClick={() => handleSort('school')}>School<SortIndicator column="school" /></th>
              <th style={getColumnStyle('position')} onClick={() => handleSort('position')}>Position<SortIndicator column="position" /></th>
              <th style={getColumnStyle('score')} onClick={() => handleSort('score')}>Draftability<SortIndicator column="score" /></th>
              <th style={getColumnStyle('similarplayer')} onClick={() => handleSort('similarplayer')}>Similar Player<SortIndicator column="similarplayer" /></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td style={{ textAlign: 'center' }}>
                  <a href={`/player/${row.position}/${row.name}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    {row.name}
                  </a>
                </td>
                <td style={{ textAlign: 'center' }}>{row.school}</td>
                <td style={{ textAlign: 'center' }}>{row.position}</td>
                <td style={{ textAlign: 'center' }}>{row.score}</td>
                <td style={{ textAlign: 'center' }}>{row.similarplayer}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Sheet>
    </div>
  );
}