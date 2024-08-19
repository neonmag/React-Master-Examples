import InputFormComponent from './InputFormComponent';
import SelectFormComponent from './SelectFormComponent';
import CheckboxFormComponent from './CheckboxFormComponent';
import InputFieldComponent from './InputFieldComponent';
import SubmitButtonComponent from './SubmitButtonComponent';
import ResultComponent from './ResultComponent';

import style from './UpperFormComponent.module.css';
import { useState } from 'react';

function UpperFormComponent() {
    const [element, setElement] = useState({
        userId: '',
        password: '',
        name: '',
        address: '',
        country: '',
        zipCode: '',
        email: '',
        sex: '',
        language: '',
        about: '',
    });
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [country, setCountry] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [email, setEmail] = useState('');
    const [sex, setSex] = useState('');
    const [language, setLanguage] = useState('');
    const [about, setAbout] = useState('');

    function onSubmitButton() {
        setElement({
            userId,
            password,
            name,
            address,
            country,
            zipCode,
            email,
            sex,
            language,
            about,
        });
        console.log(element.userId);
    }

    return (
        <form className={style.container}>
            <InputFormComponent
                labelText="User id [5 to 7 characters] : "
                minWidth="15vw"
                maxLabelWidth="20vw"
                setMethod={setUserId}
            />
            <InputFormComponent
                labelText="Password [7 to 12 characters] : "
                minWidth="15vw"
                maxLabelWidth="20vw"
                setMethod={setPassword}
            />
            <InputFormComponent
                labelText="Name [Alphabets characters] : "
                minWidth="40vw"
                maxLabelWidth="20vw"
                setMethod={setName}
            />
            <InputFormComponent
                labelText="Address [Alphanumeric characters] : "
                minWidth="40vw"
                maxLabelWidth="20vw"
                setMethod={setAddress}
            />
            <SelectFormComponent
                labelText="Country [Must select a country] : "
                minWidth="15vw"
                maxLabelWidth="20vw"
                setMethod={setCountry}
            />
            <InputFormComponent
                labelText="ZIP Code [Alphanumeric characters] : "
                minWidth="40vw"
                maxLabelWidth="20vw"
                setMethod={setZipCode}
            />
            <InputFormComponent
                labelText="Email [Valid email] : "
                minWidth="40vw"
                maxLabelWidth="20vw"
                setMethod={setEmail}
            />
            <CheckboxFormComponent
                labelText="Sex [Select Male of Female] : "
                firstContent="Male"
                secondContent="Female"
                maxLabelWidth="20vw"
                setMethod={setSex}
            />
            <CheckboxFormComponent
                labelText="Language [Optional] : "
                firstContent="English"
                secondContent="Non English"
                maxLabelWidth="20vw"
                setMethod={setLanguage}
            />
            <InputFieldComponent
                labelText="About [Optional] : "
                maxLabelWidth="20vw"
                minWidth="20vw"
                setMethod={setAbout}
            />
            <SubmitButtonComponent setMethod={onSubmitButton} />
            {element.name != '' && (
                <ResultComponent
                    userId={element.userId}
                    password={element.password}
                    name={element.name}
                    address={element.address}
                    country={element.country}
                    zipCode={element.zipCode}
                    email={element.email}
                    sex={element.sex}
                    language={element.language}
                    about={element.about}
                />
            )}
        </form>
    );
}

export default UpperFormComponent;
