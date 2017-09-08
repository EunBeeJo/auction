import React from 'react';
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';

class Item extends React.Component {
    render(){
        return(
            <Grid>
                <Row>
                    <Col xs={6} md={4}>
                        <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
                            <h3>옷</h3>
                            <p>판매가 <b>20,000</b>원</p>
                        </Thumbnail>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Item;