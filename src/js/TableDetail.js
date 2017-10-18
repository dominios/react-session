import React from "react";
import { timeSlots } from './data';

class TableDetail extends React.Component {

    printSchedule () {
        return timeSlots.map((date, index) => {
            return <a href="#"
                      key={index}
                      className="list-group-item list-group-item-action"
                      onClick={() => this.props.selectDate(index)}
            >
                {date} {(this.props.table.reservations[index].isReserved) ? "RESERVED" : ""}

            </a>
        });
    }

    render () {
        return (<div className="list-group schedule">
            {this.printSchedule()}
        </div>);
    }
}

export default TableDetail;


