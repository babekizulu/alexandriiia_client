//libs
import { useContext } from 'react';
//context
import { NarrativesContext } from '../context/narratives';

function useNarrativesContext(){
    return useContext(NarrativesContext);
}

export default useNarrativesContext;
