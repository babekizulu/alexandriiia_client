//libs
import { useState, useEffect } from 'react';
import axios from 'axios';
//components
import SourceList from '../SourceList';
//custom hooks
import useNarrativesContext from '../hooks/use-narratives-context';

function Analysis({sources}) {
  //states
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [error, setError] = useState('');
  const [question, setQuestion] = useState('');
  //context
  const {narratives, addNarrative} = useNarrativesContext();
  //mapped data
  const renderedNarratives = narratives.map((narrative) => {
    return (
      <article className='narrative-item' key={narrative.id}>
        <p>{narrative.narrative}</p>
      </article>
    )
  })
  //function to randomly generate a unique id
  const generateUniqueId = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }
  //handlers
  const handleSourceAnalysis = async (sourceData) => {
    if(sourceData.length > 0){
      try{
        const response = await axios.post('https://api.alexandriiia.com/analysis', {sourceData});
        addNarrative({id: generateUniqueId(), narrative: response.data});
      }catch(error){
        console.error(error);
        setError(error.message);
      }
    }
  }
  const handleQuestion = async() => {
    try {
      const response = await axios.post('https://api.alexandriiia.com/chat', {question});
      setAnswer(response.data);
    }catch(error){
      console.error(error);
      setError(error.message);
    }
  }
  //lifecycle methods
  useEffect(() => {
    setAnalysisComplete(true);
  }, [narratives])

  return (
    <section className="page">
      <article className='instructions-container'>
        <h2>Select a Source to Analyze</h2>
        <p>
          Use the source list to select a source to analyze.
        </p>
      </article>
      {analysisComplete?<div>{renderedNarratives}</div>:''}
      <SourceList sources={sources} handleSourceAnalysis={handleSourceAnalysis} />
      {error?<p>{error}</p>:''}
      <article className='instructions-container'>
        <h2>Ask a question about the source</h2>
      </article>
      <article className='chat-box'>
        <input value={question} onChange={(e) => setQuestion(e.target.value)} type="text" placeholder='Ask any question about the source' className='chat-input'/>
        <button onClick={handleQuestion}>Ask</button>
      </article>
    </section>
  );
};

export default Analysis;
