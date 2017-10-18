import React from "react";
import TableMaster from "./TableMaster";
import TableDetail from "./TableDetail";
import NewEditReservation from "./NewEditReservation";


class MainPage extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      selectedTable: tables[0],
      selectedDate: null
    }
    this.selectTable = this.selectTable.bind(this);
    this.selectDate = this.selectDate.bind(this);
    this.createReservation = this.createReservation.bind(this);
  }

  selectTable(table){
    this.setState({selectedTable: table, selectedDate: null})
  }

  selectDate(date){
    this.setState({selectedDate: date})
  }

  createReservation(date, value){
    this.state.selectedTable.reservations[date]=value;
    this.setState({selectedDate: null});
  }

  render () {
      return (
        <div className="row">
          <div className="col">
            <TableMaster table={this.state.selectedTable} tables={tables} selectTable={this.selectTable}/>
          </div>
          <div className="col">
          {
            (this.state.selectedDate===null)
            ?<TableDetail table={this.state.selectedTable} selectDate={this.selectDate} />
            :<NewEditReservation date={this.state.selectedDate} reservation={this.state.selectedTable.reservations[this.state.selectedDate]} createReservation={this.createReservation} />
          }
          </div>
        </div>
      );
  }
}

export default MainPage;

const tables = [
  {img: "assets/table1.jpg", reservations: [{isReserved: false},{isReserved: false},{isReserved: false},{isReserved: false},{isReserved: false},{isReserved: false},{isReserved: false},{isReserved: false},{isReserved: false},{isReserved: false},{isReserved: false},{isReserved: false},{isReserved: false},{isReserved: false},{isReserved: false},{isReserved: false},{isReserved: false},{isReserved: false},{isReserved: false},{isReserved: false}]},
  {img: "assets/table2.jpg", reservations: [{isReserved: false},{isReserved: false},{isReserved: false},{isReserved: false},{isReserved: false},{isReserved: false},{isReserved: false},{isReserved: false},{isReserved: false},{isReserved: false},{isReserved: false},{isReserved: false},{isReserved: false},{isReserved: false},{isReserved: false},{isReserved: false},{isReserved: false},{isReserved: false},{isReserved: false},{isReserved: false}]},
  {img: "assets/table3.jpg", reservations: [{isReserved: false},{isReserved: false},{isReserved: false},{isReserved: false},{isReserved: false},{isReserved: false},{isReserved: false},{isReserved: false},{isReserved: false},{isReserved: false},{isReserved: false},{isReserved: false},{isReserved: false},{isReserved: false},{isReserved: false},{isReserved: false},{isReserved: false},{isReserved: false},{isReserved: false},{isReserved: false}]}
]
