import React, { Component } from 'react';
// import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
class DataTable extends Component {
    componentDidMount() {
    }
    render() {
  return (
    <Paper >
      <Table >
        <TableHead>
          <TableRow>
            <TableCell>Field</TableCell>
            <TableCell numeric>Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(this.props.imageInfo).filter((row,index)=>{
            var regEx=new RegExp(this.props.searchTerm,'gi');
            return row !=='MakerNote' && row.match(regEx);
          }).map((row,index )=> {
            return (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {row}
                </TableCell>
                <TableCell numeric>{this.props.imageInfo[row]}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
    }
}
export default DataTable;