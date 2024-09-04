import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';

function AvailableBooks() {
  const [books, setBooks] = useState([]);
  const [records, setRecords] = useState([]);

  const columns = [
    {
      name: 'Book Name',
      selector: row => row.name,
      sortable: true,
    },
    {
      name: 'Author',
      selector: row => row.author,
      sortable: true,
    },
    {
      name: 'Price',
      selector: row => row.price,
      sortable: true,
      right: true,
    },
    {
      name: 'Action',
      cell: row => (
        <button onClick={() => handleaddbook(row)} className="btn btn-primary">
          Add
        </button>
      ),
    },
  ];
  function handleaddbook(row) {
    const bookId = row.id; 
    axios.post(`http://localhost:8080/api/user/2/${bookId}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error('Error adding book:', error.response ? error.response.data : error.message);
      });
  }

  function handleFilter(e) {
    const newdata = books.filter(row => {
      return row.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setRecords(newdata);
  }

  useEffect(() => {
    fetch('http://localhost:8080/api/book/getall')
      .then((response) => response.json())
      .then((books) => {
        setBooks(books);
        setRecords(books); 
      })
      .catch((error) => console.error('Error fetching books:', error));
  }, []);

  return (
    <div className='container mt-5'>
      <div className='text-end'>
        <input type="text" style={{width:"350px"}} onChange={handleFilter} />
      </div>
      <DataTable
        title="Books"
        columns={columns}
        data={records} 
        pagination
      />
    </div>
  );
}

export default AvailableBooks;
