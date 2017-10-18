import React from "react";
import { timeSlots } from './data';

class TableDetail extends React.Component {

    printSchedule () {
        return timeSlots.map((date, index) => {
            return <div
                key={index}
                onClick={() => this.props.selectDate(index)}
            >
                {date} {(this.props.table.reservations[index].isReserved) ? "RESERVED" : ""}
            </div>
        });
    }

    render () {
        return (<div>
            {this.printSchedule()}
        </div>);
    }
}

export default TableDetail;


