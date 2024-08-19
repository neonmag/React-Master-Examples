function ResultComponent(props: {
    userId: string;
    password: string;
    name: string;
    address: string;
    country: string;
    zipCode: string;
    email: string;
    sex: string;
    language: string;
    about: string;
}) {
    const {
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
    } = props;

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label>ID: {userId}</label>
            <label>Password: {password}</label>
            <label>Name: {name}</label>
            <label>Address: {address}</label>
            <label>Country: {country}</label>
            <label>ZipCode: {zipCode}</label>
            <label>Email: {email}</label>
            <label>Sex: {sex}</label>
            <label>Language: {language}</label>
            <label>About: {about}</label>
        </div>
    );
}

export default ResultComponent;
