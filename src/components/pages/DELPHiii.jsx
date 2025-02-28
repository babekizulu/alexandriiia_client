//libs
import axios from 'axios';
import { useState } from 'react';
//custom hooks
import useNarrativesContext from '../hooks/use-narratives-context';

function DELPHiii() {
  //context
  const {narratives} = useNarrativesContext();
  //state
  const [prediction, setPrediction] = useState('');
  const [error, setError] = useState('');
  //handlers
  const handlePrediction = async () => {
    try{
      const response = await axios.post('https://api.alexandriiia.com/delphiii', {narratives});
      setPrediction(response.data);
    }catch(error){
      console.error(error);
      setError(error.message);
    }
  }
  return (
    <section className="page">
      <article className='instructions-container'>
      <h2>DELPHiii</h2>
      <p>
        Use narratives generated from the analysis tool to make predictions about the future.
      </p>
      </article>
      <button onClick={handlePrediction}>Predict</button>
      {error?<p>{error}</p>:''}
      <article className='prediction-container'>
        {prediction?<p>{prediction}</p>:''}
      </article>
    </section>
  );
};

export default DELPHiii;
