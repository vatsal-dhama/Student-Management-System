import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Link } from "react-router-dom";

const Students = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    s_batch_code: '',
    rollnumber: '',
    firstname: '',
    lastname: '',
    email: '',
    photourl: '',
    totalcredits: '',
    graduationYear: ''
  });
  let componentMounted = true;

 //   const dispatch = useDispatch();



  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform actions with the form data here
    axios.post("http://localhost:8070/student/add", formData)
    .then((response)=>{
      console.log(response)
    })
    console.log('Form submitted:', formData);
    
  };


  //For fetching students
  useEffect(() => {
    const getStudents = async () => {
      setLoading(true);
      const response = await fetch("http://localhost:8070/student/all");
      console.log(response);
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }

      return () => {
        componentMounted = false;
      };
    };

    getStudents();
  }, []);

  const filterStudent = (batch) => {
    const updatedList = data.filter((item) => item.s_batch_code.batch_id===batch );
    setFilter(updatedList);
  }
  const ShowStudents = () => {
    return (
      <>
        <div className="buttons text-center py-5">
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => setFilter(data)}>All</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterStudent("MT2025")}>MT2025</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterStudent("BT2025")}>
          BT2025
          </button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterStudent("MT2024")}>MT2024</button>
        </div>

        {filter.map((student) => {
          return (

            <div id={student.student_id} key={student.student_id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
                <div className="card">
                    <img className="card-img-top" src={student.photourl} alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{student.firstname}{" "}{student.lastname}</h5>
                        <p className="card-text">{student.email}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        {/* <li class="list-group-item">{student.email}</li> */}
                        <li className="list-group-item">{student.rollnumber}</li>
                    </ul>
                    <div className="card-body">
                        <a href="#" className="card-link">View</a>
                        <a href="#" className="card-link">Edit</a>
                        <a href="#" className="card-link">Delete</a>
                    </div>
                    </div>
            </div>
          );
        })}
      </>
    );
  };


  return (
    <>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12">
            <h2 className="display-7 text-center">Students</h2>
            <hr />
          </div>
        </div>

        <div className="row justify-content-center">
          {<ShowStudents />}
        </div>


        <div>
          <h2>Add new Student</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="s_batch_code" className="form-label">Batch Code</label>
              <input type="text" className="form-control" id="s_batch_code" name="s_batch_code" value={formData.s_batch_code} onChange={handleInputChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="rollnumber" className="form-label">Roll Number</label>
              <input type="text" className="form-control" id="rollnumber" name="rollnumber" value={formData.rollnumber} onChange={handleInputChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="firstname" className="form-label">First Name</label>
              <input type="text" className="form-control" id="firstname" name="firstname" value={formData.firstname} onChange={handleInputChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="lastname" className="form-label">Last Name</label>
              <input type="text" className="form-control" id="lastname" name="lastname" value={formData.lastname} onChange={handleInputChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="text" className="form-control" id="email" name="email" value={formData.email} onChange={handleInputChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="photourl" className="form-label">Photo URL</label>
              <input type="text" className="form-control" id="photourl" name="photourl" value={formData.photourl} onChange={handleInputChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="totalcredits" className="form-label">Total Credits</label>
              <input type="number" className="form-control" id="totalcredits" name="totalcredits" value={formData.totalcredits} onChange={handleInputChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="graduationYear" className="form-label">Graduation Year</label>
              <input type="number" className="form-control" id="graduationYear" name="graduationYear" value={formData.graduationYear} onChange={handleInputChange} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>


        </div>
      </div>
    </>
  );
};

export default Students;

