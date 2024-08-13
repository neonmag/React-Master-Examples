function TeamInfo(props) {
  const { team, styleClass } = props;

  return (
    <div className={styleClass}>
      <h1 className={styleClass}>TEAM</h1>
      <ul className={styleClass}>
        {team.map((el, index) => {
          return (
            <li className={styleClass} key={index}>
              {el}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TeamInfo;
