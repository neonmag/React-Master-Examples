function AgeInformation(props) {
  const { age, date } = props;

  return (
    <div>
      <h1>Age: {age}</h1>
      <h1>Birthday: {date}</h1>
    </div>
  );
}

export default AgeInformation;
