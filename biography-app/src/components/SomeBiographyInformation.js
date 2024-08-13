import React from 'react';

export class SomeBiographyInformation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { header, text } = this.props;

    return (
      <div>
        <h1>{header}</h1>
        <p>{text}</p>
      </div>
    );
  }
}
