import React from "react";
import PropTypes from 'prop-types';

class TableMaster extends React.Component {

    constructor (props) {
        super(props);

        this.selectTable = this.selectTable.bind(this);
    }

    tableList () {
        return this.props.tables.map((table, index) => {
            return (
                <div className="col" key={index}>
                    <a href="#" onClick={() => this.selectTable(table)}>
                        <img
                            style={{ maxHeight: 70 }}
                            src={table.img}
                        />
                    </a>
                </div>
            )
        })
    }

    selectTable (table) {
        this.props.selectTable(table);
    }

    render () {
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

TableMaster.propTypes = {
    tables: PropTypes.array.isRequired
};

export default TableMaster;
