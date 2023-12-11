import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Link } from "react-router-dom";

const Students = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

//   const dispatch = useDispatch();

//   const addStudent = (student) => {
//     dispatch(addCart(student))
//   }

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
      </div>
    </>
  );
};

export default Students;
