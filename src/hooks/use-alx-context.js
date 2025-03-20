//libs
import {useContext} from 'react';

//context
import {ALXContext} from '../context/ALXContext';

export default function useALXContext() {
    return useContext(ALXContext);
}
