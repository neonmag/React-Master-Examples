function PortraitInformation(props) {
  const { image } = props;

  return (
    <div>
      {image.map((el, index) => {
        return <img src={el} key={index} />;
      })}
      <img src={image} />
    </div>
  );
}

export default PortraitInformation;
