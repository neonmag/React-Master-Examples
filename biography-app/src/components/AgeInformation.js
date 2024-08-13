import React from 'react';

export class AgeInformation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { age, date } = this.props;

    return (
      <div>
        <h1>Age: {age}</h1>
        <h1>Birthday: {date}</h1>
      </div>
    );
  }
}
