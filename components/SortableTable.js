import React, { useState } from 'react';
import Table from '@mui/joy/Table';
import {Paper} from '@mui/material';
import { TableBody, TableHead, TableRow, TableCell } from '@mui/material';

function createData(name, school, position, score, similarplayer) {
  return { name, school, position, score, similarplayer };
}

const initialRows = [
  createData('Loading...', '', '', '', '')
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
              <TableCell style={getColumnStyle('position')} onClick={() => handleSort('position')}>Position<SortIndicator column="position" /></TableCell>
              <TableCell style={getColumnStyle('playerclass')} onClick={() => handleSort('playerclass')}>Class<SortIndicator column="playerclass" /></TableCell>
              {/* <TableCell style={getColumnStyle('similarplayer')} onClick={() => handleSort('similarplayer')}>Similar Player<SortIndicator column="similarplayer" /></TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
  {rows.map((row, index) => {
    // Debugging: Log the current row to the console
    // console.log(`Row ${index}:`, row);

    // // Check if the row is undefined before proceeding
    // if (!row) {
    //   console.error(`Row ${index} is undefined.`);
    //   return null; // Skip rendering this row
    // }

    return (
      <TableRow key={index}>
        <TableCell style={{ textAlign: 'center' }}>
          <a href={`/player/${row.position ? row.position.toLowerCase() : 'unknown'}/${row.name}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            {row.name}
          </a>
        </TableCell>
        <TableCell style={{ textAlign: 'center' }}>{row.school || 'N/A'}</TableCell>
        <TableCell style={{ textAlign: 'center' }}>{row.position || 'N/A'}</TableCell>
        <TableCell style={{ textAlign: 'center' }}>{row.playerclass || 'N/A'}</TableCell>
      </TableRow>
    );
  })}
</TableBody>
        </Table>
      </div>
      </Paper>
    </div>
  );
}