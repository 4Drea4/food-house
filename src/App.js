import React from 'react';
import axios from 'axios';
import Form from './Form.js';
import app from './app.css';
import Recipe from './Recipe.js';


class App extends React.Component {

constructor(props) {
    super(props);
    this.state = {
      recipes: []
    }
  }

getRecipe = (event) => {
    const recipeName = event.target.elements.recipeName.value;
    event.preventDefault();
    console.log(recipeName);
    const url = `https://www.food2fork.com/api/search?key=${'bf9aa717cc76ea7069e3a46a8dab83de'}&q=${recipeName}&count=10`;
    axios.get(url)
    .then(res => {
      this.setState({ recipes: res.data.recipes })
    })

  }

render() {
    return (
      <div>
        <div className="header bg-primary">
          <h1>Recipe Search</h1>
        </div>
        <div className="form-container">
          <Form className="recipe-form" getRecipe={this.getRecipe}/>
        </div>
        <Recipe recipes={this.state.recipes}/>
      </div>
    )
  }

}


export default App;
