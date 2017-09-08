import React from 'react';
import { Grid } from 'react-bootstrap';
import { Search, Category, Item } from '../components';

class Home extends React.Component {

    render() {
        return (
            <div>
                <Grid>
                    <Search/>
                    <h2>  </h2>
                    <Category/>
                    <h2>실시간 상품</h2>
                </Grid>
                <Item/>
            </div>
        );
    }
}
export default Home;