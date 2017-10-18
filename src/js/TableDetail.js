import React from "react";
import PropTypes from 'prop-types';
import { timeSlots } from './data';

class TableDetail extends React.Component {

    constructor (props) {
        super(props);

        this.cancelRegistration = this.cancelRegistration.bind(this);
    }

    cancelRegistration (date) {
        if (confirm('Are you sure?')) {
            this.props.cancelRegistration(date);
        }
    }

    printReservation (index, reservation) {
        return <span className="float-right">
            <i className="fa fa-calendar-check-o"/>
            {` ${reservation.home} vs ${reservation.away}`}
            <a className="cancel">
                <i className="fa fa-trash-o" onClick={() => this.cancelRegistration(index)}/>
            </a>
        </span>;
    }

    printSchedule () {
        return timeSlots.map((date, index) => {
            const reservation = this.props.table.reservations[index];
            return <li href="#"
                      key={index}
                      className={`list-group-item list-group-item-action ${reservation.isReserved ? 'reserved' : ''}`}
                      onClick={() => reservation.isReserved ? null : this.props.selectDate(index)}
            >
                <i className="fa fa-clock-o"/>
                &nbsp;{date}
                {reservation.isReserved ? this.printReservation(index, reservation) : ''}
            </li>
        });
    }

    render () {
        return (<div>
            <h2>{`Time Slots for ${this.props.table.title}`}</h2>
            <ul className="list-group schedule">
                {this.printSchedule()}
            </ul>
        </div>);
    }
}

TableDetail.propTypes = {
    table: PropTypes.object.isRequired,
    selectDate: PropTypes.func.isRequired,
    cancelRegistration: PropTypes.func.isRequired
};

export default TableDetail;


