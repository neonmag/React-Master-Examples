function PortraitInformation(props) {
  const { image } = props;

  return (
    <div>
      <img src={image} />
    </div>
  );
}

export default PortraitInformation;
