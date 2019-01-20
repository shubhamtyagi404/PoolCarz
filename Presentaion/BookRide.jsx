import React from 'react';
import Well from 'react-bootstrap/lib/Well';
import Navbar from 'react-bootstrap/lib/Navbar';
import Panel from 'react-bootstrap/lib/Panel';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';
import axios from 'axios';
import ReactTable from 'react-table';

class BookRide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            tableData: []
        }
        this.showRides = this.showRides.bind(this);
        // this.handleLogin = this.handleLogin.bind(this);
    };
    showRides(e) {
        e.preventDefault();
        this.setState({ show: true });
        axios.get("http://localhost:3000/show_rides")
            .then((response => { this.setState({ tableData: response },console.log("got show_rides")) }));

    }
    render() {
        return (
            <div>
                <Navbar >
                    <Navbar.Header >
                        <Navbar.Brand >
                            <div>
                                <p style={{ color: "#1E90FF", fontSize: "30px" }}><b>PoolCarz</b></p>
                                <a href="/" style={{ color: "#1E90FF" }}>Logout</a>
                            </div>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                </Navbar>
                <Panel>
                    <Panel.Heading style={{ backgroundColor: "#1E90FF", textAlign: "center" }}>
                        <Panel.Title componentClass="h3">Book A Ride</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        <p>PoolCarz is an Online application which allows users to book or offer rides in their area.
                           Select Show All Rides to get the rides available or Offer a Ride to others by selecting Offer A Ride Option.</p>
                        <Button style={{ backgroundColor: "#1E90FF" }} onClick={((e) => this.showRides(e))} >Show All Rides</Button>
                        {this.state.show ? <ShowRide {...this.state} ></ShowRide> : <Button style={{ backgroundColor: "#1E90FF" }} >Offer A Ride</Button>}

                    </Panel.Body>

                </Panel>

                <footer ><Well className="footer">
                    &copy; 2019 Shubham Tyagi
        </Well></footer>
            </div>
        );
    }

}
export default BookRide;
class ShowRide extends React.Component {
    constructor(props) {
        super(props);
         this.state={data:this.props.tableData}
    }
    render() {
        
        return (

            <div>
                Please select a ride
            <button>To Infosys</button>
                <button>From Infosys</button>
                <button>Others</button>
                <table>
                    <tbody>
                        {this.state.data.map(function(item,key){
                            return(
                                <tr key={key}>
                                <td>{item._id}</td>
                                <td>{item.name}</td>
                                <td>{item.car}</td>
                                <td>{item.pickUp}</td>
                                <td>{item.destination}</td>
                                <td>{item.seatsLeft}</td>
                                <td>{item.id}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}