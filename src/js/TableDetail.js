import React from "react";
import PropTypes from 'prop-types';
import { timeSlots } from './data';

class TableDetail extends React.Component {

    printReservation (reservation) {
        return <span className="float-right">
            <i className="fa fa-calendar-check-o"/>
            {` ${reservation.home} vs ${reservation.away}`}
        </span>;
    }

    printSchedule () {
        return timeSlots.map((date, index) => {
            const reservation = this.props.table.reservations[index];
            return <a href="#"
                      key={index}
                      className={`list-group-item list-group-item-action ${reservation.isReserved ? 'reserved' : ''}`}
                      onClick={() => reservation.isReserved ? null : this.props.selectDate(index)}
            >
                <i className="fa fa-clock-o"/>
                &nbsp;{date}
                {reservation.isReserved ? this.printReservation(reservation) : ''}
            </a>
        });
    }

    render () {
        return (<div className="list-group schedule">
            <h2>{`Time Slots for ${this.props.table.title}`}</h2>
            {this.printSchedule()}
        </div>);
    }
}

TableDetail.propTypes = {
    table: PropTypes.object.isRequired,
    selectDate: PropTypes.func.isRequired
};

export default TableDetail;


