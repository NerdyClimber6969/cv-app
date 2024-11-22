import Input from "./Input";
import { useContext } from "react";
import { PersonalDetailsContext } from "../../Context/Provider.jsx";

function PersonalDetailsForm({onClose, content={}}) {
    const { personalDetails, setPersonalDetails } = useContext(PersonalDetailsContext) 

    function handleUpdate(id, field, value) {
        setPersonalDetails(personalDetails.map((detail) => (
            detail.id === id ? {...detail, [field]: value} : detail
        )));

        return;
    };

    return (
        <form
            className="personalDetailsForm"
        >
            <Input
                type="text"
                name="firstName"
                value={content.firstName}
                labelText="First Name"
                placeholder="e.g. John"
                onChange={(e) => handleUpdate(content.id, "firstName", e.target.value)}
            />
            <Input
                type="text"
                name="lastName"
                value={content.lastName}
                labelText="Last Name"
                placeholder="e.g. Wick"
                onChange={(e) => handleUpdate(content.id, "lastName", e.target.value)}
            />
            <Input
                type="tel"
                name="phoneNumber"
                value={content.phoneNumber}
                labelText="Phone Number"
                placeholder="e.g. 12345678"
                onChange={(e) => handleUpdate(content.id, "phoneNumber", e.target.value)}
            />
            <Input
                type="email"
                name="email"
                value={content.email}
                labelText="Email Address"
                placeholder="e.g. johnwrick@gmail.com"
                onChange={(e) => handleUpdate(content.id, "email", e.target.value)}
            />
            <button 
                type="button"
                onClick={onClose}
            >
                Close
            </button>
        </form>
    );
};

export default PersonalDetailsForm;