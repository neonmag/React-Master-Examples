import React from 'react';

export class BioInformation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, surname, fathername } = this.props;

    return (
      <div>
        <h1>
          {surname} {name} {fathername}
        </h1>
      </div>
    );
  }
}
