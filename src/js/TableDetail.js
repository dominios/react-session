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
                <i className="fa fa-clock-o"/>
                &nbsp;{date}
                <span className="float-right">
                    {(this.props.table.reservations[index].isReserved) ? <i className="fa fa-calendar-check-o"/> : ""}
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

export default TableDetail;


