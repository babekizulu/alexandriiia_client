function MechanicalInventionsDataCard({id, date_invented, ancient, modern, invention_name, invention_type, dimensions, iteration, iteration_of, materials, inventor, research_groups, model, model_image, multi_regional, regions, number_of_corroborative_sources, source_ids, source_page_references, primary_source_ids}) {
    return (
        <article className='data-card'>
            <div className='data-card-header'>
                <h1>{invention_name}</h1>
                <p>{id}</p>
            </div>
            <div className='data-card-metadata'>
                <p><strong>Date Invented:</strong> {date_invented || 'Unknown'}</p>
                <p><strong>Ancient:</strong> {ancient ? 'True' : ancient === false ? 'False' : 'Unknown'}</p>
                <p><strong>Modern:</strong> {modern ? 'True' : modern === false ? 'False' : 'Unknown'}</p>
                <p><strong>Invention Type:</strong> {invention_type || 'Unknown'}</p>
                <p><strong>Dimensions:</strong> {dimensions || 'Unknown'}</p>
                <p><strong>Iteration:</strong> {iteration || 'Unknown'}</p>
                <p><strong>Iteration of:</strong> {iteration_of || 'Unknown'}</p>
                <p><strong>Materials:</strong> {materials || 'Unknown'}</p>
                <p><strong>Inventor:</strong> {inventor || 'Unknown'}</p>
                <p><strong>Research Groups:</strong> {research_groups || 'Unknown'}</p>
                <p><strong>Model:</strong> {model || 'Unknown'}</p>
                <p><strong>Model Image:</strong> {model_image || 'Unknown'}</p>
                <p><strong>Multi-Regional:</strong> {multi_regional ? 'True' : multi_regional === false ? 'False' : 'Unknown'}</p>
                <p><strong>Regions:</strong> {regions || 'Unknown'}</p>
                <p><strong>Number of Corroborative Sources:</strong> {number_of_corroborative_sources || 'Unknown'}</p>
                <p><strong>Source IDs:</strong> {source_ids || 'Unknown'}</p>
                <p><strong>Source Page References:</strong> {source_page_references || 'Unknown'}</p>
                <p><strong>Primary Source IDs:</strong> {primary_source_ids || 'Unknown'}</p>
            </div>
            {/* <div className='data-card-thumbnail'>
                <img src={model_image} alt={invention_name} />
            </div> */}
        </article>
    );
}

export default MechanicalInventionsDataCard;
