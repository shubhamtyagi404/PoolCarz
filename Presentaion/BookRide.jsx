import React from 'react';
import Well from 'react-bootstrap/lib/Well';
import Navbar from 'react-bootstrap/lib/Navbar';
import Panel from 'react-bootstrap/lib/Panel';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';

class BookRide extends React.Component{
render(){
    return(
        <div>
            <Navbar >
                    <Navbar.Header >
                        <Navbar.Brand >
                            <a href="#home" style={{ color: "#1E90FF", fontSize: "30px"}}><b>PoolCarz</b></a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                </Navbar>
                <Panel>
                    <Panel.Heading style={{backgroundColor:"#1E90FF",textAlign:"center"}}>
                        <Panel.Title  componentClass="h3">Book A Ride</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        <p>PoolCarz is an Online application which allows users to book or offer rides in their area. 
                           Select Show All Rides to get the rides available or Offer a Ride to others by selecting Offer A Ride Option.</p>
                        <Button style={{backgroundColor:"#1E90FF"}} >Show All Rides</Button>
                        <Button style={{backgroundColor:"#1E90FF"}} >Offer A Ride</Button>
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