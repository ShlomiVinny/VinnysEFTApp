  import React, {Component} from 'react';

class Reservation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 4,
      availableSeats: {seats:["available"]}
    };
  
    seats = {
     "1":"available",
      "2":"notAvailable"
    }
    
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = handleValues(event);
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  handleValues(event){
    switch (target.type){
      default: return target.value;
      case 'checkbox': return target.checked;
      case 'select': return target.value;
    }
  }

  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
        <label>
        <select
          name="selectSeat"
          type="select"
          value={}
          onChange={this.handleInputChange}
          >
          {seats.map((seat, key)=>{
            return(
            <option value={seat} key={key}>{seat.value}</option>
            
          )})}
          
          </select>
        </label>
      </form>
    );
  }
}

ReactDOM.render(
  <Reservation />,
  document.getElementById('root')
);
