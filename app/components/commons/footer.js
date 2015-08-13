'use strict';

import React from 'react';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <footer className='app-footer'>
        <hr />
        <div className='app-footer-content'>
          <p>Created by Allen Fang.</p>
        </div>
      </footer>
    );
  }
};
