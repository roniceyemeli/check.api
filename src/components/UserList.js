import React, { useEffect, useState } from "react";
import { Spinner, Button, Modal } from "react-bootstrap";
import UserCard from "./UserCard";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users") //consommation de l'api
      .then((response) => response.json()) //convert our data to json
      .then((json) => {
        setUsers(json);
        setLoading(false);
      })
      .catch((err) => console.log(err)); //put our data in setUsers(state)
  }, []);
  console.log(users);
  if (loading) {
    return <Spinner animation="border" />;
  }
  return (
    <div>
      <div className="userlist">
        {users
          .filter((user) =>
            user.name.toUpperCase().trim().includes(text.toUpperCase().trim())
          )
          .map((user) => (
            <UserCard user={user} key={user.id} />
          ))}
      </div>

      <Button variant="primary" onClick={handleShow}>
        Find a contact
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Remplissez les champs</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            className="form-control"
            style={{ width: "60%", marginLeft: "22%"}}
            onChange={(e) => setText(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            See the contacts
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UserList;
