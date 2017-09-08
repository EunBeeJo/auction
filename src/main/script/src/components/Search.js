import React from 'react';
import { Form, FormGroup, ControlLabel, Button, FormControl} from 'react-bootstrap';

class Search extends React.Component {
    render() {
        return(
            <Form inline>
                <FormGroup controlId="formInlineSearch">
                    <ControlLabel>Search</ControlLabel>
                    {' '}
                    <FormControl type="text" placeholder="Search"/>
                </FormGroup>
                {' '}
                <Button bsSize="xsmall">search</Button>
            </Form>
        );
    }
}

export default Search;