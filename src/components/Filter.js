import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
class Filter extends Component {
    // constructor() {
    //     super()
    // }
    render() {
        return (
            <div>
                <Input onKeyUp={event=> this.props.onTextChange(event.target.value)} placeholder="type to search" type="text" />
            </div>
        )
    }
}

export default Filter;