import React from "react";

class TableDetail extends React.Component {

  printSchedule(){
      return dates.map((date, index)=>{
        return <div key={index} onClick={(event)=>this.props.selectDate(index)}> {date} {(this.props.table.reservations[index].isReserved)?"RESERVED":""}</div>
      });
  }

  render(){
    return (
      <div>
        {
          this.printSchedule()
        }
      </div>
    )
  }
}

export default TableDetail;

const dates = [
  "8:00 - 8:30",
  "8:30 - 9:00",
  "9:00 - 9:30",
  "9:30 - 10:00",
  "10:00 - 10:30",
  "10:30 - 11:00",
  "11:00 - 11:30",
  "11:30 - 12:00",
  "12:00 - 12:30",
  "12:30 - 13:00",
  "13:00 - 13:30",
  "13:30 - 14:00",
  "14:00 - 14:30",
  "14:30 - 15:00",
  "15:00 - 15:30",
  "15:30 - 16:00",
  "16:00 - 16:30",
  "16:30 - 17:00",
  "17:00 - 17:30",
  "17:30 - 18:00"
]
