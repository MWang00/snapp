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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const initialRows = [
  createData('1', 159, 6.0, 24, 4.0),
  createData('2', 237, 9.0, 37, 4.3),
  createData('3', 262, 16.0, 24, 6.0),
  createData('4', 305, 3.7, 67, 4.3),
  createData('5', 356, 16.0, 49, 3.9),
  createData('6', 159, 6.0, 24, 4.0),
  createData('7', 237, 9.0, 37, 4.3),
  createData('8', 262, 16.0, 24, 6.0),
  createData('9', 305, 3.7, 67, 4.3),
  createData('10', 356, 16.0, 49, 3.9)
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
    return orderBy === column && order ? (order === 'asc' ? ' ▲' : ' ▼') : '';
  };

  return (
    <div>
      <Sheet sx={{ height: 300, overflow: 'auto' }}>
        <Table aria-label="table with sticky header" stickyHeader stickyFooter hoverRow>
          <thead>
            <tr>
              {/* Apply inline styles directly for centering if supported */}
              <th style={{ textAlign: 'center' }} onClick={() => handleSort('name')}>Row<SortIndicator column="name" /></th>
              <th style={{ textAlign: 'center' }} onClick={() => handleSort('calories')}>Calories<SortIndicator column="calories" /></th>
              <th style={{ textAlign: 'center' }} onClick={() => handleSort('fat')}>Fat&nbsp;(g)<SortIndicator column="fat" /></th>
              <th style={{ textAlign: 'center' }} onClick={() => handleSort('carbs')}>Carbs&nbsp;(g)<SortIndicator column="carbs" /></th>
              <th style={{ textAlign: 'center' }} onClick={() => handleSort('protein')}>Protein&nbsp;(g)<SortIndicator column="protein" /></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.name}>
                {/* Apply inline styles directly for centering if supported */}
                <td style={{ textAlign: 'center' }}>{row.name}</td>
                <td style={{ textAlign: 'center' }}>{row.calories}</td>
                <td style={{ textAlign: 'center' }}>{row.fat}</td>
                <td style={{ textAlign: 'center' }}>{row.carbs}</td>
                <td style={{ textAlign: 'center' }}>{row.protein}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Sheet>
    </div>
  );
}
