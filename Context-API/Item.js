import React, { Component } from 'react';
import { MyContext } from './App';

class Item extends Component {

    render() {
        return (
            <MyContext.Consumer>
                {(context) => (
                    <React.Fragment>
                        <div className="jumbotron py-3 mb-4 h4">
                            Item Details
                        </div>
                        <p className="lead">Item Name: {context.state.name}</p>
                        <p className="lead">Item Price: {context.state.price}</p>
                        <p className="lead">
                            <button className="btn btn-primary fas fa-minus mr-3" onClick={() => context.changeQty(context.state.qty - 1)}></button>
                                Item Qty: {context.state.qty}
                            <button className="btn btn-primary fas fa-plus ml-3" onClick={() => context.changeQty(context.state.qty + 1)}></button>
                        </p>
                    </React.Fragment>
                )}
            </MyContext.Consumer>
        );
    }
}

export default Item;