import React from 'react';


class Recipe extends React.Component {

render() {
    return(
      <div className="container">
        <div className="row">
          {this.props.recipes.map((recipe) => {
            return (
              <div key={recipe.title} className="col-md-4 col-lg-3 col-8 offset-lg-0 offset-md-0 offset-2 recipes-info">
                <div>
                  <img
                  src={recipe.image_url}
                  alt={recipe.title} />
                  <div>
                    <h5>
                    {recipe.title.length < 20 ? `${recipe.title}` : `${recipe.title.substring(0, 20)}...`}
                    </h5>
                    <p>Publisher: <span>{recipe.publisher}</span></p>
                  </div>
                  <button>View Recipe</button>
                </div>
              </div>
          )
        })}
        </div>
      </div>
    )
  }
}

export default Recipe;
