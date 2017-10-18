import React from "react";

class NewEditReservation extends React.Component {

  constructor(props){
    super(props);

    console.log(this.props);
    this.state = {host:this.props.reservation.host, guest:this.props.reservation.guest}
    this.reserve = this.reserve.bind(this);
    this.cancle = this.cancle.bind(this);
    this.changeHost = this.changeHost.bind(this);
    this.changeGuest = this.changeGuest.bind(this);
  }

  reserve(){
    this.props.createReservation(this.props.date, {isReserved:true,host: this.state.host,guest: this.state.guest})
  }

  cancle(){
    this.props.createReservation(this.props.date, {isReserved:false});
  }

  changeHost(event){
    this.setState({host:event.target.value})
  }

  changeGuest(event){
    this.setState({guest:event.target.value})
  }

  render(){
    return (
      <div>
        <h3>
          {
            (this.props.reservation.isReserved)?"Uprav registráciu":"Nová rezervácia?"
          }
        </h3>
        <div>
          <input type="text" name="host" value={this.state.host} placeholder="Domáci" onChange={this.changeHost}/>
        </div>
        <div>
          <input type="text" name="guest" value={this.state.guest} placeholder="Hostia" onChange={this.changeGuest}/>
        </div>
        <div>
          <button onClick={this.reserve} >Rezervuj</button>
          <button onClick={this.cancle} >Zruš</button>
        </div>
      </div>
    )
  }
}
export default NewEditReservation;
