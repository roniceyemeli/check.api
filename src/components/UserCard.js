import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserCard = ({user}) => {
  return (
    <Card style={{ width: "18rem",marginTop:20 }}>
      <span className="profile">{user.name[0]}</span>
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>
            <p>{user.username}</p>
            <p>{user.phone}</p>
            <p>{user.email}</p>
        </Card.Text>
        <Link to={`/profile/${user.id}`}>
        <Button variant="primary">See Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default UserCard;
