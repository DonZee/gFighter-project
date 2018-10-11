import React from 'react';
import Fighter from './Fighter';
import {Button, ListGroup, ListGroupItem} from 'reactstrap';

class FighterList extends React.Component {
  state = {
    searchTerm: ''
  }
  render() {
    return(
      <div>
        <input
          type="text"
          value={this.state.searchTerm}
          onChange={e => this.setState({ searchTerm: e.target.value })}
        />
        <ListGroup>
        <ListGroupItem>Brian Ortega</ListGroupItem>
        <ListGroupItem>Fedor Emelianenko</ListGroupItem>
        <ListGroupItem>Tony Ferguson</ListGroupItem>
      </ListGroup>
      </div>
    )
  }
}

export default FighterList
