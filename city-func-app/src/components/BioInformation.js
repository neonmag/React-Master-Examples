function BioInformation(props) {
  const { name, country } = props;

  return (
    <div>
      <h1>{country}</h1>
      <h1>{name}</h1>
    </div>
  );
}

export default BioInformation;
