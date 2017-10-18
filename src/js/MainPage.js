import React from "react";
import TableMaster from "./TableMaster";
import TableDetail from "./TableDetail";
import NewEditReservation from "./NewEditReservation";
import { tables } from './data';

class MainPage extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            selectedTable: tables[0],
            selectedDate: null
        };

        this.selectTable = this.selectTable.bind(this);
        this.selectDate = this.selectDate.bind(this);
        this.createReservation = this.createReservation.bind(this);
    }

    selectTable (table) {
        this.setState({ selectedTable: table, selectedDate: null });
    }

    selectDate (date) {
        this.setState({ selectedDate: date });
    }

    createReservation (date, value) {
        const table = this.state.selectedTable;
        table.reservations[date] = value;
        this.setState({
            selectTable: table,
            selectedDate: null
        });
    }

    render () {
        return (
            <div className="row">
                <div className="col left-column">
                    <TableMaster
                        tables={tables}
                        table={this.state.selectedTable}
                        selectTable={this.selectTable}
                    />
                </div>
                <div className="col right-column">
                    {
                        (this.state.selectedDate === null)
                            ? <TableDetail table={this.state.selectedTable} selectDate={this.selectDate}/>
                            : <NewEditReservation
                                date={this.state.selectedDate}
                                reservation={this.state.selectedTable.reservations[this.state.selectedDate]}
                                createReservation={this.createReservation}
                                table={this.state.selectedTable}
                            />
                    }
                </div>
            </div>
        );
    }
}

export default MainPage;
