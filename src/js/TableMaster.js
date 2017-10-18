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
                <div
                    key={index}
                    className={`col ${this.props.table.title === table.title ? 'active' : ''}`}
                    onClick={() => this.selectTable(table)}
                >
                    <img
                        style={{ maxHeight: 70 }}
                        src={table.img}
                    />
                    <div className="table-title">
                        {table.title}
                    </div>
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

                <div className="row table-detail">
                    <div className="col">
                        <img src={this.props.table.img}/>
                    </div>
                </div>

                <div className="table-list">
                    <h2>Available tables</h2>
                    <div className="row">
                        {
                            this.tableList()
                        }
                    </div>
                </div>
            </div>
        )
    }
}

TableMaster.propTypes = {
    tables: PropTypes.array.isRequired,
    table: PropTypes.object.isRequired
};

export default TableMaster;
