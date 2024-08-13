function Band(props) {
  const { bandName, team, albums, posters } = props;

  return (
    <div>
      <h1>BAND: {bandName}</h1>
      <h1>TEAM</h1>
      {team.map((el, index) => {
        return <p key={index}>{el}</p>;
      })}
      {albums.map((el, index) => {
        return <p key={index}>{el}</p>;
      })}
      {posters.map((el, index) => {
        return <img src={el} key={index} />;
      })}
    </div>
  );
}

export default Band;
