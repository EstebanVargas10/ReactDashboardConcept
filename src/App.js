import React, { Component } from 'react';
import './App.css';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      posts: []
    }
  }

  componentDidMount(){
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url, {
      method: 'GET'
    }).then(response => response.json()).then(posts => {
      this.setState({posts: posts})
    })
  }

render() {
  const columns = [
    {
      Header: "User ID",
      accessor: "userId",
      width:100,
      maxWidth:100,
      minWidth:100
    },
    {
      Header: "title",
      accessor: "title",
      Cell: props => {
        // console.log(props.row.title);
        return(
          <select id='actionPlanSelector' onChange = {() => {  
            let userOption = document.getElementById('actionPlanSelector');
            let actionPlanSelected = userOption.options[userOption.selectedIndex].value;
           props.row.title = actionPlanSelected;
          }}>
          
          {/* // <select value={this.state.value} onChange={this.handleChange}> */}
          <option selected value={props.row.title}>{props.row.title}</option>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
        )
      }
    },
    {
      Header: "body",
      accessor: "body",
      Cell: props => {
        // console.log(props.row.title);
        return(

          <textarea id='serverNotes' rows="2" cols="100" onChange = {() => {
            // let servernotes = 
            // let  = userOption.options[userOption.selectedIndex].value;
            console.log('Im change notes!');
            props.row.body = document.getElementById('serverNotes').value;
            // console.log
           }}>
          {props.row.body}
          </textarea>
        )
      }
    },
    {
      Header: "Actions",
      Cell: props => {
        return(
          <button 
          onClick={() => {
            console.log('Data to be saved!')
            console.log(props.row.title);
            console.log(props.row.body);
            console.log(props.row);
          }}>Save</button>
        )
      },
      width:100,
      maxWidth:100,
      minWidth:100
    }
  ]
  return(
    <div> 
    <h1>Shame Dashboard</h1> <h4>Beta</h4>
    <ReactTable
      columns = {columns}
      data={this.state.posts}
      filterable
      noDataText={'Loading W2008 Servers...'}

    > 

    </ReactTable>
    </div>
  );
}
}

export default App;