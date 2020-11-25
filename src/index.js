import React from 'react';
import ReactDOM from 'react-dom';
import "fullpage.js/vendors/scrolloverflow";
import ReactFullpage from '@fullpage/react-fullpage';
import App from './App';

import "./styles.css";

class MySection extends React.Component {
  render() {
    return (
      <div className="section">
        <h3>{this.props.content}</h3>
      </div>
    );
  }
}

const FullpageWrapper = () => (
  <ReactFullpage
    navigation
    sectionsColor={["#282c34", "#ff5f45", "#0798ec"]}
    render={({ state, fullpageApi }) => {
      return (
        <div>
          <MySection content={"About the A-List"} />
          <MySection content={"How the A-List Works", <App />} />
          <MySection content={"Check out our App!"} />
        </div>
      );
    }}
  />
);

ReactDOM.render(<FullpageWrapper />, document.getElementById("react-root"));

