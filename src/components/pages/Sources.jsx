//libs
import { useState } from 'react';
//components
import SourceList from '../SourceList';
import SourceDisplay from '../SourceDisplay';

function Sources({sources, setSources}) {

  const [sourceData, setSourceData] = useState('');

  //handlers
  const handleSourceSelection = (sourceData) => {
    setSourceData(sourceData);
  }

  return (
    <section className="page">
      <SourceDisplay sources={sources} sourceData={sourceData} />
      <SourceList sources={sources} setSources={setSources} handleSourceSelection={handleSourceSelection} />
    </section>
  );
};

export default Sources;
