import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

class Category extends React.Component {
    render() {
        return(
            <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
                <Tab eventKey={1} title="의류">의류</Tab>
                <Tab eventKey={2} title="가방">가방</Tab>
                <Tab eventKey={3} title="생활가전">생활가전</Tab>
            </Tabs>
        );
    }
}

export default Category;