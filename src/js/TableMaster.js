import React from "react";

class TableMaster extends React.Component {

  constructor(props){
    super(props);
  }

  tableList(){
    return this.props.tables.map((table, index)=>{
      return (
        <div className="col" key={index}>
          <img style={{maxHeight: 70}} src={table.img} onClick={(event)=>{this.select(event, table)}}/>
        </div>
      )
    })
  }


  select(event, table){
    this.props.selectTable(table);
  }

  render(){
    return (
      <div>
        <div className="row">
          <div className="col">
            <img src={this.props.table.img}/>
          </div>
        </div>
        <div className="row">
          {
            this.tableList()
          }
        </div>
      </div>
    )
  }
}

export default TableMaster;
