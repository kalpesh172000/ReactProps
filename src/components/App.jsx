import React from "react";
import contacts from "../contacts";
import Card from "./Card";

function addContact(contact) {
    return (
        <Card key={contact.id} id={contact.id} name={contact.name} imgURL={contact.imgURL} phone={contact.phone} email={contact.email} />
    );
}

function App() {
    return (
        <div>
            <h1 className="heading">My Contacts</h1>
            {
                contacts.map(addContact)
                // contacts.map(contact => (
                //   <Card
                //    name = {contact.name}
                //    imgURL = {contact.imgURL}
                //    phone = {contact.phone}
                //    email = {contact.email}
                //   />
                // ))
            }
        </div>
    );
}

export { App };
