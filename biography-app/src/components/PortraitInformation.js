import React from 'react';

export class PortraitInformation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { image } = this.props;

    return (
      <div>
        <img src={image} />
      </div>
    );
  }
}
