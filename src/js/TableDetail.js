import React from "react";
import PropTypes from 'prop-types';
import { timeSlots } from './data';

class TableDetail extends React.Component {

    printReservation (index) {
        const tableSlot = this.props.table.reservations[index];
        if (tableSlot.isReserved) {
            return <span>
                <i className="fa fa-calendar-check-o"/>
                {` ${tableSlot.home} vs ${tableSlot.away}`}
            </span>;
        }
        return null;
    }

    printSchedule () {
        return timeSlots.map((date, index) => {
            return <a href="#"
                      key={index}
                      className="list-group-item list-group-item-action"
                      onClick={() => this.props.selectDate(index)}
            >
                <i className="fa fa-clock-o"/>
                &nbsp;{date}
                <span className="float-right">
                    {this.printReservation(index)}
                </span>
            </a>
        });
    }

    render () {
        return (<div className="list-group schedule">
            <h2>Time Slots</h2>
            {this.printSchedule()}
        </div>);
    }
}

TableDetail.propTypes = {
    table: PropTypes.object.isRequired,
    selectDate: PropTypes.func.isRequired
};

export default TableDetail;


