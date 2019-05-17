import React from 'react';
import ReactDOM from 'react-dom';

import ProgressBar from './components/ProgressBar';
import Back from './components/Back';

ReactDOM.render(
    <ProgressBar />,
    document.getElementById('progress')
);

ReactDOM.render(
    <Back />,
    document.getElementById('back')
);