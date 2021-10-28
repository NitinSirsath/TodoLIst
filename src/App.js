import React, { Component } from 'react'
import './App.css'
import Plan from './components/Plan'

 class App extends Component {
   state = {
     items: [],
     text: ""
   }
   handleChange = (e) =>{
     this.setState({
      text : e.target.value
     })
   }
   handleAdd = e => {
     if(this.state.items !== ''){
       const items = [...this.state.items, this.state.text];
       this.setState({ items: items , text:"" })
     }
   }
   handledelete = (id) => {
    const oldItems = [...this.state.items]
    const items = oldItems.filter((element ,i)=>{
      return i !== id
    })
    this.setState({ items : items })
   }
  render() {
    return (
      <div className="App">
        <div className="main-box">
          <div>
            <h1>Todays's Plan</h1>
          </div>
          <div>
            <input className='field' type="text" placeholder="What's Todays Plan" value={this.state.text} onChange={this.handleChange}/>
            <button className='field' onClick={this.handleAdd}>Add</button>
          </div>
          <div className="plan-list">
        <ul>
        { this.state.items.map((value, i)=>{
          return <Plan key={i} id={i} value={value} sendData={this.handledelete} />
        })}
         
        </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default App