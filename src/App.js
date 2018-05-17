import React, {Component} from 'react';
import {Panel, Table,DropdownButton,MenuItem} from 'react-bootstrap'
import axios from 'axios'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {restaurants: []};

    }

    componentDidMount() {
        this.GetInfo();
    }

    GetInfo() {
        axios.get("https://s3-us-west-2.amazonaws.com/lgoveabucket/data_melp.json ")
            .then(response => {
                const restaurants = response.data;
                this.setState({restaurants});
                console.log(this.state.restaurants);
            })
    }
    compare(key) {
        return function (a, b) {
            if (a[key] < b[key]) return -1;
            if (a[key] > b[key]) return 1;
            return 0;
        };
    }
    sort(key) {
        let array = this.state.restaurants;
        array.sort(this.compare(key));
        this.setState({array})
    }


    render() {
        var rows = [];
        this.state.restaurants.forEach(function (restaurant) {
            rows.push(
                <tr>
                    <td>{restaurant.name}</td>
                    <td>{restaurant.rating}</td>
                    <td>{restaurant.contact.site}</td>
                    <td>{restaurant.contact.phone}</td>
                    <td>{restaurant.address.street.concat(", " + restaurant.address.city + ", " + restaurant.address.state)}</td>

                </tr>)
        });
        return (
            <div>
                <Panel id="principalPanel">
                    <Panel.Heading>Available places</Panel.Heading>
                    <Panel.Body>
                        <DropdownButton title={"Order by"}>
                            <MenuItem onClick={()=>this.sort("name")}>Order by name</MenuItem>
                            <MenuItem onClick={()=>this.sort("rating")}>Order by rating</MenuItem>
                        </DropdownButton>
                        <Table responsive>
                            <thead>
                            <tr>
                                <th onClick={()=>this.sort("name")}>Name</th>
                                <th onClick={()=>this.sort("rating")}>Rating</th>
                                <th onClick={()=>this.sort("site")}>Site</th>
                                <th onClick={()=>this.sort("phone")}>Phone</th>
                                <th onClick={()=>this.sort("street")}>Location</th>
                            </tr>
                            </thead>
                            <tbody>
                            {rows}
                            </tbody>
                        </Table>
                    </Panel.Body>
                </Panel>
            </div>
        );
    }
}

export default App;
