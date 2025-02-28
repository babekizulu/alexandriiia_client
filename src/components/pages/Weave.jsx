/*
@desc: The Weave tool will take in narratives received through context, and send the narratives to the ALEXANDRiiiA API as an array of objects.
*/
//libs
import axios from 'axios';
import { useState } from 'react';
//custom hooks
import useNarrativesContext from '../hooks/use-narratives-context';

function Weave() {
  //context
  const {narratives} = useNarrativesContext();
  //state management 
  const [weave, setWeave] = useState('');
  const [error, setError] = useState('');
  //handlers
  const handleWeave = async () => {
    try{
      const response = await axios.post('https://api.alexandriiia.com/weave', {narratives});
      setWeave(response.data);
    }catch(error){
      setError(error.message);
    }
  }
  return (
    <section className="page">
      <article className='instructions-container'>
      <h2>Weave Narratives</h2>
      <p>
        The weave tool will take the narratives generated from the analysis tool and weave them into one cohesive narrative.
      </p>
      </article>
      <button onClick={handleWeave}>Weave</button>
      {error?<p>{error}</p>:''}
      <article className='weave-container'>
        {weave?<p>{weave}</p>:''}
      </article>
    </section>
  );
};

export default Weave;
