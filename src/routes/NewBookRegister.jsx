
import axios from 'axios';
import React, { useState } from 'react';

function NewBookRegister() {
  const [data, setData] = useState({
    name: "",
    author: "",
    price: ""
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    const bookobj = {
      name: data.name,
      author: data.author,
      price: data.price
    };
    
    try {
      const response = await axios.post("http://localhost:8080/api/book/", bookobj);
      const bookid = response.data.id;
      await axios.post(`http://localhost:8080/api/user/2/${bookid}`);
      setSuccessMessage("Book added successfully!");
      setData({
        name: "",
        author: "",
        price: ""
      });
    } catch (error) {
      console.error("There was an error adding the book or associating it with the user!", error);
    }
  };

  return (
    <div className='register-container'>
      <div className="register-card">
        <h2>Register a new book</h2>
        {successMessage && <p className="success-message">{successMessage}</p>}
        <form onSubmit={handlesubmit}>
          <div className="input-group">
            <input
              type="text"
              value={data.name}
              onChange={handleChange}
              placeholder="Book Name"
              name="name"
              required
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              value={data.author}
              onChange={handleChange}
              placeholder="Author Name"
              name="author"
              required
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              name="price"
              value={data.price}
              onChange={handleChange}
              placeholder="Price"
              required
            />
          </div>
          <button type="submit" className="btn-register">
            ADD NEW BOOK
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewBookRegister;
