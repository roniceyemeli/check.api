import axios from "axios";
import React, { useEffect, useState } from "react";
import { Spinner,Card,Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const Details = ({ match }) => {
  const [user, setUser] = useState({});
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${match.params.id}`)
      .then((res) => {
        setUser(res.data);
        setLoading(false);
      })
      .catch((err) => setErr(err.res.data));
  }, [match]);
  console.log(user);
  console.log(err);
  if (loading) {
    return <Spinner animation="border" />;
  }
  return (
    
      <Card style={{ width: "18rem", marginTop:"10em",textAlign:"center",marginLeft:"40%"}}>
        <span className="profile">{user.name[0]}</span>
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>
            <p>{user.username}</p>
            <p>{user.phone}</p>
            <p>{user.email}</p>
          </Card.Text>
          <Link to="/">
            <Button variant="primary">Go Back</Button>
          </Link>
        </Card.Body>
      </Card>
    
  );
};

export default Details;
