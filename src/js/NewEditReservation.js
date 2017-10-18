import React from "react";
import PropTypes from 'prop-types';

class NewEditReservation extends React.Component {

    constructor (props) {
        super(props);

        console.log(this.props);

        this.state = {
            home: this.props.reservation.home,
            guest: this.props.reservation.guest
        };
        
        this.confirm = this.confirm.bind(this);
        this.cancel = this.cancel.bind(this);
        this.changeHomeTeam = this.changeHomeTeam.bind(this);
        this.changeAwayTeam = this.changeAwayTeam.bind(this);
    }

    confirm () {
        this.props.createReservation(this.props.date, {
            isReserved: true,
            home: this.state.home,
            guest: this.state.guest
        });
    }

    cancel () {
        this.props.createReservation(this.props.date, { isReserved: false });
    }

    changeHomeTeam (event) {
        this.setState({ home: event.target.value });
    }

    changeAwayTeam (event) {
        this.setState({ guest: event.target.value });
    }

    render () {
        return (
            <div>
                <h3>
                    {
                        (this.props.reservation.isReserved) ? "Edit reservation" : "New reservation"
                    }
                </h3>
                <div>
                    <input
                        type="text"
                        name="home"
                        placeholder="Home"
                        defaultValue={this.state.home}
                        onChange={this.changeHomeTeam}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="guest"
                        placeholder="Away"
                        defaultValue={this.state.guest}
                        onChange={this.changeAwayTeam}
                    />
                </div>
                <div>
                    <button onClick={this.confirm}>Confirm reservation</button>
                    <button onClick={this.cancel}>Cancel</button>
                </div>
            </div>
        )
    }
}

NewEditReservation.propTypes = {
    reservation: PropTypes.object
};

export default NewEditReservation;
