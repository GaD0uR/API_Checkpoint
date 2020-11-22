import React from "react";
import { MDBCard, MDBCardTitle, MDBCardText } from "mdbreact";

function UsersInfo({ user }) {
  const {
    name = "",
    username = "",
    phone = "",
    email = "",
    address = "",
    website = "",
    company = "",
  } = user;

  return (
    <div style={{ backgroundColor: "#362f55" }}>
      <MDBCard
        style={{
          backgroundColor: "#362f55",
          border: "transparent",
          color: "gold",
        }}
      >
        <div className="user-card">
          <MDBCardTitle>
            <h1>Full Name: {name}</h1>
          </MDBCardTitle>
          <MDBCardTitle>
            <h3>Username: {username}</h3>
          </MDBCardTitle>
          <MDBCardText>
            <h5>Phone Number: {phone}</h5>
          </MDBCardText>
          <MDBCardText>
            <h5>E-mail: {email}</h5>
          </MDBCardText>
          <MDBCardText>
            <h5>
              Address: {address.city} | {address.street} | {address.suite}
            </h5>
          </MDBCardText>
          <MDBCardText>
            <h5>
              geo: {address.geo.lat} | {address.geo.lng}
            </h5>
          </MDBCardText>
          <MDBCardText>
            <h5>Zipcode: {address.zipcode}</h5>
          </MDBCardText>
          <MDBCardText>
            <h5>
              Copany Name: {company.name} | {company.catchPhrase} | {company.bs}
            </h5>
          </MDBCardText>
          <MDBCardText>
            <h5>Website: {website}</h5>
          </MDBCardText>
        </div>
      </MDBCard>
    </div>
  );
}

export default UsersInfo;
