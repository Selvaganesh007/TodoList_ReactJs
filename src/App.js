import React from 'react';
import './App.css';
import Listitem from './Listitem';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: ""
      }
    }

    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);

  }

  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now() 
      }
    })

  } 

  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if (newItem.text !== '') {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: '',
          key: ''
        }
      })
    }
  }

  deleteItem(key) {
    const fillteredItems = this.state.items.filter(item => item.key !== key)
    this.setState({
      items:fillteredItems
    })
  }

  render() {
    return (
      <div className="App">
        <div className='header'>
          <form id='to-do-form' onSubmit={this.addItem}>
            <input type="text"
              class="form-text" placeholder="Enter text . . ." value={this.state.currentItem.text}
              onChange={this.handleInput} /> 
            <button className='form-btn'>Add</button>
          </form>
          <Listitem items={this.state.items} deleteItem={this.deleteItem}></Listitem>
        </div>
      </div>
    );
  }
}

export default App;


