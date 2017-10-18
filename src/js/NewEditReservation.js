import React from "react";
import PropTypes from 'prop-types';
import { timeSlots } from "./data";

class NewEditReservation extends React.Component {

    constructor (props) {
        super(props);

        console.log(this.props);

        this.state = {
            home: this.props.reservation.home,
            away: this.props.reservation.away
        };

        this.confirm = this.confirm.bind(this);
        this.cancel = this.cancel.bind(this);
        this.changeHomeTeam = this.changeHomeTeam.bind(this);
        this.changeAwayTeam = this.changeAwayTeam.bind(this);
    }

    confirm (e) {
        e.preventDefault();
        this.props.createReservation(this.props.date, {
            isReserved: true,
            home: this.state.home,
            away: this.state.away
        });
    }

    cancel (e) {
        e.preventDefault();
        this.props.createReservation(this.props.date, { isReserved: false });
    }

    changeHomeTeam (event) {
        this.setState({ home: event.target.value });
    }

    changeAwayTeam (event) {
        this.setState({ away: event.target.value });
    }

    render () {
        return (
            <div className="reservation-form">

                <h2>
                    {(this.props.reservation.isReserved ? "Edit reservation" : "New reservation")}: {timeSlots[this.props.date]}
                </h2>

                <form>

                    <div className="form-group">
                        <label htmlFor="homeTeam">
                            Home Team
                        </label>
                        <input
                            id="homeTeam"
                            className="form-control"
                            type="text"
                            name="home"
                            defaultValue={this.state.home}
                            onChange={this.changeHomeTeam}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="awayTeam">
                            Away Team
                        </label>
                        <input
                            id="awayTeam"
                            className="form-control"
                            type="text"
                            name="away"
                            defaultValue={this.state.away}
                            onChange={this.changeAwayTeam}
                        />
                    </div>

                    <div className="form-group">

                        <button
                            className="btn btn-primary"
                            onClick={this.confirm}
                        >
                            <i className="fa fa-check"/> Confirm reservation
                        </button>

                        <button
                            className="btn btn-secondary"
                            onClick={this.cancel}
                        >
                            <i className="fa fa-ban"/> Cancel
                        </button>
                    </div>

                </form>
            </div>
        )
    }
}

NewEditReservation.propTypes = {
    reservation: PropTypes.object,
    date: PropTypes.number.isRequired
};

export default NewEditReservation;
