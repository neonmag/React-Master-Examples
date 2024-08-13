function AwardsInfo(props) {
  const { medals, cup, goals, wins, loses, styleClass } = props;
  return (
    <div className={styleClass}>
      <h1 className={styleClass}>Amount of medals: {medals}</h1>
      <h1 className={styleClass}>Amount of winned cups: {cup}</h1>
      <h1 className={styleClass}>Amount of reached goals: {goals}</h1>
      <h1 className={styleClass}>Amount of wins: {wins}</h1>
      <h1 className={styleClass}>Amount of loses: {loses}</h1>
    </div>
  );
}

export default AwardsInfo;
