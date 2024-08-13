function ClubInfo(props) {
  const { clubName, city, date, crest, styleClass } = props;

  return (
    <div className={styleClass}>
      <h1 className={styleClass}>{clubName}</h1>
      <h1 className={styleClass}>{city}</h1>
      <h1 className={styleClass}>{date}</h1>
      <img className={styleClass} src={crest} />
    </div>
  );
}

export default ClubInfo;
