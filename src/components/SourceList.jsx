function SourceList({sources, handleSourceSelection, handleSourceAnalysis}) {

    const renderedSources = sources.map((source) => {
        return (
            <li key={source.id}>
                <button className='list-item' onClick={() => {
                    if(window.location.pathname === '/sources') {
                        handleSourceSelection(source.data);
                    }
                    else if(window.location.pathname === '/analysis') {
                        handleSourceAnalysis(source.data);
                    }
                }}>{source.name}.{source.format}</button>
            </li>
        )
    });

    return (
      <section className="source-list">
      <nav>
        <ul>
            {renderedSources}
        </ul>
      </nav>
    </section>
  );
};

export default SourceList;
