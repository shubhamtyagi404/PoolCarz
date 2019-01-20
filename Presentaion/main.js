import React from 'react';
import ReactDOM from 'react-dom'; 
import Login from './Login.jsx';
import BookRide from './BookRide.jsx';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

//ReactDOM.render(<BookRide></BookRide>, document.getElementById('bookRide'));

class Header extends React.Component {
    render() {
              return (<Router>
<div>
<Route exact path = "/" component = {Login} />
<Route path = "/bookride" component = {BookRide} />

</div>
</Router>)
             }
}
export default Header;

ReactDOM.render(<Header></Header>, document.getElementById('header'));