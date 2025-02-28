//libs
import {createContext, useCallback, useState} from 'react';

const NarrativesContext = createContext();

function NarrativesProvider({children}){
    const [narratives, setNarratives] = useState([]);

    const addNarrative = useCallback((narrative) => {
        setNarratives((prevNarratives) => [...prevNarratives, narrative]);
    }, []);
    
    return <NarrativesContext.Provider value={{narratives, addNarrative}}>{children}</NarrativesContext.Provider>
}

export {NarrativesProvider, NarrativesContext};
