import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "@material-ui/core";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardBody,
  MDBCardText,
  MDBListGroup,
  MDBListGroupItem,
} from "mdbreact";

const UserCard = ({ user }) => {
  const { name, phone, email, username, address } = user;

  return (
    <div>
      <MDBCard
        style={{
          width: "18rem",
          height: "30rem",
          marginRight: "10px",
          marginBottom: "20px",
          marginTop: "30px",
          backgroundColor: "rgb(68 71 153)",
          borderRadius: "10px",
          border: "transparent",
          boxShadow: "0 10px 10px 0 rgba(0,0,0,0.2)",
        }}
      >
        <MDBCardText className="name-letter" style={{ fontSize: "60px" }}>
          <MDBCardTitle style={{ fontSize: "large", color: "gold" }}>
            {name}
          </MDBCardTitle>
          <MDBCardText style={{ fontSize: "medium", color: "gold" }}>
            {username}
          </MDBCardText>
        </MDBCardText>
        <MDBCardBody></MDBCardBody>
        <MDBListGroup className="list-group-flush text-light">
          <MDBListGroupItem
            style={{
              backgroundColor: "rgb(68 71 153)",
              color: "white",
              borderTop: "1px solid white",
            }}
          >
            E-MAIL:
            <br />
            {email}
          </MDBListGroupItem>
          <MDBListGroupItem
            style={{
              backgroundColor: "rgb(68 71 153)",
              color: "white",
              borderTop: "1px solid white",
            }}
          >
            PHONE NUMBER:
            <br />
            {phone}
          </MDBListGroupItem>
          <MDBListGroupItem
            style={{
              backgroundColor: "rgb(68 71 153)",
              borderTop: "1px solid white",
              borderBottom: "1px solid white",
              color: "white",
            }}
          >
            {address.city}
          </MDBListGroupItem>
        </MDBListGroup>
        <Card.Body>
          <Card.Link href={`/${user.id}`}>
            <Button variant="contained" color="secondary">
              User Informations
            </Button>
          </Card.Link>
        </Card.Body>
      </MDBCard>
    </div>
  );
};

export default UserCard;
