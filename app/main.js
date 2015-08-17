import './styles/index.scss';
import React from "react";
import {HistoryLocation} from 'react-router';

import router from './utils/router';
router.run((Handler) => {
  React.render(<Handler path={window.location.pathname}/>, document.getElementById('content'));
});
