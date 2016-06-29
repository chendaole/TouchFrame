import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

import'../node_modules/amazeui-touch/dist/amazeui.touch.min.css';

export default class Main extends React.Component{
    render(){
        return(
            <div className="TouchFrame">
                <App/>
            </div>
        );
    }
}

ReactDOM.render(
  <Main/>,
  document.body.appendChild(document.createElement('div'))
);
