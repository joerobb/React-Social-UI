import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Header from './Header.js';
import Card from './Card.js';
import Footer from './Footer.js';


class App extends Component {

  state = {
      date: '',
    };

  componentDidMount() {
    const that = this;
    const date = new Date().getDate(); //Current Date
    const month = new Date().getMonth() + 1; //Current Month
    const year = new Date().getFullYear(); //Current Year

    that.setState({
      //Setting the value of the date time
      date:
        date + '/' + month + '/' + year,
    });
  }


    render() {
        return (
            <div>
                <div className="body">
                    <Header
                    date = {this.state.date}
                     />
                    <Card
                    name="Joe Robb"
                      />
                    <Footer />
                </div>
            </div>
        );
    }
}


ReactDOM.render(
<App  />,
document.getElementById('root')
);

export default App;
