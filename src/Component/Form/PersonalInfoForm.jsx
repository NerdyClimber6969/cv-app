import { useState } from "react";
import Input from "./Input";

function PersonalInfoForm({item, updatePreview, onSave, onClose}) {
    const [personalInfo, setPersonalInfo] = useState(item);

    function handleFormUpdate(e) {
        const {name, value} = e.target;
        const newPersonalInfo = {...personalInfo, [name]: value};
        setPersonalInfo(newPersonalInfo);
        updatePreview(newPersonalInfo);
        return;
    };

    return (
        <form
            className="form personalInfo"
        >
            <Input
                type="text"
                name="firstName"
                value={personalInfo.firstName}
                labelText="First Name"
                placeholder="e.g. John"
                onChange={(e) => handleFormUpdate(e)}
            />
            <Input
                type="text"
                name="lastName"
                value={personalInfo.lastName}
                labelText="Last Name"
                placeholder="e.g. Wick"
                onChange={(e) => handleFormUpdate(e)}
            />
            <Input
                type="tel"
                name="phoneNumber"
                value={personalInfo.phoneNumber}
                labelText="Phone Number"
                placeholder="e.g. 12345678"
                onChange={(e) => handleFormUpdate(e)}
            />
            <Input
                type="email"
                name="email"
                value={personalInfo.email}
                labelText="Email Address"
                placeholder="e.g. johnwrick@gmail.com"
                onChange={(e) => handleFormUpdate(e)}
            />
            <div className="buttonContainer">
                <button className="btn save" type="submit" onClick={(e) => onSave(e)}>Save</button>
                <button className="btn close" type="button" onClick={onClose}>Close</button>
            </div>
        </form>
    );
};

export default PersonalInfoForm;