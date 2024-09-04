import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'

function Mybooks() {
  const [userbooks, setUserBooks] = useState([]); // Initialize as an array

  const columns = [
    {
      name: "BookName",
      selector: row => row.name,
      sortable: true
    },
    {
      name: "Author",
      selector: row => row.author,
      sortable: true
    },
    {
      name: 'Action',
      cell: row => (
        <button onClick={() => handledelete(row)} className="btn btn-primary">
          Delete
        </button>
      )
    }
  ];

  useEffect(() => {
    axios.get('http://localhost:8080/api/user/get/2')
      .then((res) => res.data) 
      .then((userbooks) => {
        setUserBooks(userbooks);
      })
      .catch((error) => {
        console.error('There was an error fetching the books!', error);
      });
  }, []);

  function handledelete(e) {
    const bookid=e.id;
    axios.delete(`http://localhost:8080/api/user/2/${bookid}`)
    .then((res)=>res.data)
    .then(()=>{
      console.log("book deleted");
    })
  }

  return (
    <div className='container mt-5'>
      <div className='text-end'>
        <input type="text" style={{ width: "350px" }} />
      </div>
      <DataTable
        title="Books"
        columns={columns}
        data={userbooks} 
        pagination
      />
    </div>
  );
}

export default Mybooks;
