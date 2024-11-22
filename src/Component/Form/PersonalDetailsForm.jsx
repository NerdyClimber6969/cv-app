import { useState } from "react";
import Input from "./Input";

function PersonalDetailsForm({item, updatePreview, onSave, onClose}) {
    const [personalDetailsData, setPersonalDetailsData] = useState(item);

    function handleFormUpdate(e) {
        const {name, value} = e.target;
        const newPersonalDetailsData = {...personalDetailsData, [name]: value};
        setPersonalDetailsData(newPersonalDetailsData);
        updatePreview(newPersonalDetailsData);
        return;
    };

    return (
        <form
            className="personalDetailsForm"
        >
            <Input
                type="text"
                name="firstName"
                value={personalDetailsData.firstName}
                labelText="First Name"
                placeholder="e.g. John"
                onChange={(e) => handleFormUpdate(e)}
            />
            <Input
                type="text"
                name="lastName"
                value={personalDetailsData.lastName}
                labelText="Last Name"
                placeholder="e.g. Wick"
                onChange={(e) => handleFormUpdate(e)}
            />
            <Input
                type="tel"
                name="phoneNumber"
                value={personalDetailsData.phoneNumber}
                labelText="Phone Number"
                placeholder="e.g. 12345678"
                onChange={(e) => handleFormUpdate(e)}
            />
            <Input
                type="email"
                name="email"
                value={personalDetailsData.email}
                labelText="Email Address"
                placeholder="e.g. johnwrick@gmail.com"
                onChange={(e) => handleFormUpdate(e)}
            />
            <div className="buttonContainer">
                <button type="submit" onClick={(e) => onSave(e)}>Save</button>
                <button type="button" onClick={onClose}>Close</button>
            </div>
        </form>
    );
};

export default PersonalDetailsForm;