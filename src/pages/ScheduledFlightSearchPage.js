import React, {Component} from 'react';
import {connect} from "react-redux";
import {Container, Row, Col} from 'reactstrap';
import MapPanel from "../components/Map/MapPanel";
import FlightDetailPanel from "../components/FlightDetailPanel/FlightDetailPanel";
import ScheduledFlightSearchPanel from "../components/ScheduledFlightSearchPanel/ScheduledFlightSearchPanel";

class FlightSearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let component = this.props.data.flight ? <FlightDetailPanel/> : <MapPanel/>;
        return (
            <Container fluid={true}>
                <Row>
                    <Col xs={6} md={4}>
                        <ScheduledFlightSearchPanel/>
                    </Col>
                    <Col xs={6} md={8}>
                        {component}
                    </Col>
                </Row>
            </Container>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {};
}


function mapStateToProps(state) {
    return {
        data: state.data
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FlightSearchPage);