//components
import SourceList from '../SourceList';

function Analysis({sources}) {
  //handlers
  const handleSourceAnalysis = (sourceData) => {
    console.log(sourceData);
  }

  return (
    <section className="page">
      <h2>Select a Source to Analyze</h2>
      <SourceList sources={sources} handleSourceAnalysis={handleSourceAnalysis} />
    </section>
  );
};

export default Analysis;
