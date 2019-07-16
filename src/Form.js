import React from 'react';


class Form extends React.Component {
  render() {
   return (
     <div>
      <form onSubmit={this.props.getRecipe}>
        <input type="text" name="recipeName" />
        <button>Search</button>
      </form>
    </div>
    )
  }
}

export default Form;
