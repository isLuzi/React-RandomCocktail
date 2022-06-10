import { useEffect } from "react";
import useAxios from './hooks/useAxios';

function App() {

  const { fetchData, response, } = useAxios();
  const { strDrink, strDrinkThumb, strGlass, strInstructions } = response;


  useEffect(() => {
    fetchData()
  }, []);

  let ingredients = [];
  Object.keys(response).forEach((item, index) => {
    if (response[`strIngredient${index}`]) {
      ingredients.push({
        "ingredient": response[`strIngredient${index}`],
        "measure": response[`strMeasure${index}`]
      })
    }
  });

  const renderList = (item, index) => (
    <div className='flex text-sm mt-2' key={index}>
      <li className='text-gray-200 font-medium text-lg'>{item.ingredient}</li> <span className='italic text-gray-400 font-medium text-lg ml-3'> {item.measure}</span>

    </div>
  )

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">

      <button onClick={() => fetchData()}
        className='text-white bg-gradient-to-br from-pink-400 to-cyan-800 px-4 py-2 rounded-md uppercase  font-medium text-md w-full md:w-52'>🍹 Get New Cocktail
      </button>

      <h1 className='text-2xl text-gray-200 mt-8 font-bold underline'>{strDrink}</h1>

      <div className='md:grid grid-cols-2 md:gap-5'>
        <div className='mt-4 border-cyan-800 border-2 rounded-md h-96'>
          <img className='w-full h-full object-cover' src={strDrinkThumb} alt="" />
        </div>
        <div className=' my-6'>
          <h2 className='text-2xl text-gray-200  font-bold underline'>Ingredients</h2>
          {ingredients.map((item, index) => renderList(item, index))}
        </div>
      </div>
      <div>
        <h2 className='text-2xl text-gray-200 mt-8 font-bold underline'>Instructions</h2>
        <p className='text-gray-200 font-normal text-lg mt-2'>{strInstructions}</p>
      </div>
      <div>
        <h2 className='text-2xl text-gray-200 mt-8 font-bold underline'>Glass type</h2>
        <p className='text-gray-200 font-normal text-lg mt-2'>{strGlass}</p>
      </div>
    </div>
  );
}

export default App;
