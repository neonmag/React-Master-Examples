function BioInformation(props) {
  const { name, surname, fathername } = props;

  return (
    <div>
      <h1>
        {surname} {name} {fathername}
      </h1>
    </div>
  );
}

export default BioInformation;
