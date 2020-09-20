import React, {Component} from 'react';
import GrildLinkComponent from '../components/GridLinkComponent';

class HomeScreen extends Component {
  render() {
    return (
      <GrildLinkComponent
        icon_name={'home'}
        title={'Book Mass'}
        url={'https://www.google.com'}
      />
    );
  }
}

export default HomeScreen;
