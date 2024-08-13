function SomeBiographyInformation(props) {
  const { header, text } = props;

  return (
    <div>
      <h1>{header}</h1>
      <p>{text}</p>
    </div>
  );
}

export default SomeBiographyInformation;
