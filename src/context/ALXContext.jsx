//libs
import {createContext, useState, useCallback, useEffect} from 'react';

//context
const ALXContext = createContext();


function Provider({children}) {
    // const [signedIn, setSignedIn] = useState(false);
    // const [researchTopics, setResearchTopics] = useState([]);
    // const [weaves, setWeaves] = useState([]);
    // const [user, setUser] = useState(null);

    // //fetch
    // const fetchResearchTopics = useCallback(async () => {
    //     const response = await axios.get('http://localhost:3000/research-topics');
    //     setResearchTopics(response.data);
    // }, []);

    // const fetchWeaves = useCallback(async () => {
    //     const response = await axios.get('http://localhost:3000/weaves');
    //     setWeaves(response.data);
    // }, []);

    // const fetchUser = useCallback(async () => {
    //     const response = await axios.get('http://localhost:3000/user');
    //     setUser(response.data);
    // }, []);

    // useEffect(() => {
    //     fetchResearchTopics();
    //     fetchWeaves();
    //     fetchUser();
    // }, [fetchResearchTopics, fetchWeaves, fetchUser]);

    return (
        <ALXContext.Provider value={{}}>
            {children}
        </ALXContext.Provider>
    )
}

export {ALXContext, Provider};
