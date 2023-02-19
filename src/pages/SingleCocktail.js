import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
// const baseurl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const SingleCocktail = () => {
  const { id } = useParams();
  // console.log(useParams());
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);
  // const product = products.find((product) => product.id === productId);

  useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const resp = await fetch(`${url}${id}`);
        const data = await resp.json();
        // console.log(data);
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strInstructionsDE: instructionsDE,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
          } = data.drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
          ];
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            instructionsDE,
            ingredients,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getCocktail();
  }, [id]);
  if (loading) {
    return <Loading />;
  }
  if (!cocktail) {
    return <h2 className="section-tilte">No Cocktail to display</h2>;
  }

  const {
    name,
    image,
    info,
    category,
    glass,
    instructions,
    instructionsDE,
    ingredients,
  } = cocktail;
  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        back home
      </Link>
      <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img src={image} alt={name}></img>
        <div className="drink-info">
          <p>
            <span className="drink-data">name :</span> {name}
          </p>
          <p>
            <span className="drink-data">category :</span> {category}
          </p>
          <p>
            <span className="drink-data">info :</span> {info}
          </p>
          <p>
            <span className="drink-data">glass :</span> {glass}
          </p>
          <p>
            <span className="drink-data">ingredients :</span>
            {ingredients.map((item, index) => {
              return item ? <span key={index}> {item}</span> : null;
            })}
          </p>
          <p>
            <span className="drink-data">instructons :</span> {instructions}
          </p>
          <p>
            <span className="drink-data">Anleitung(DE) :</span> {instructionsDE}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
