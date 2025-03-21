function SourcesDataCard({source_id, source_reliability_rating, source_title, number_of_references, journal, volume, chapter, number, website_article_url, archeological_site, witnesses, authors, publisher, website_name, website_url, city_published, regions, original_language, isbn, year_published, original_year_published_bce, original_year_published_ad, source_type, modern}) {
    return (
        <article className='data-card'>
            <article className='data-card-header'>
                <h1>{source_title}</h1>
                <p>{source_id}</p>
            </article>
            <article className='data-card-metadata'>
                <p><strong>Source Reliability Rating:</strong> {source_reliability_rating || 'Unknown'}</p>
                <p><strong>Number of References:</strong> {number_of_references || 'Unknown'}</p>
                <p><strong>Journal:</strong> {journal || 'Unknown'}</p>
                <p><strong>Volume:</strong> {volume || 'Unknown'}</p>
                <p><strong>Chapter:</strong> {chapter || 'Unknown'}</p>
                <p><strong>Number:</strong> {number || 'Unknown'}</p>
                <p><strong>Website Article URL:</strong> {website_article_url || 'Unknown'}</p>
                <p><strong>Archeological Site:</strong> {archeological_site || 'Unknown'}</p>
                <p><strong>Witnesses:</strong> {witnesses || 'Unknown'}</p>
                <p><strong>Authors:</strong> {authors || 'Unknown'}</p>
                <p><strong>Publisher:</strong> {publisher || 'Unknown'}</p>
                <p><strong>Website Name:</strong> {website_name || 'Unknown'}</p>
                <p><strong>Website URL:</strong> {website_url || 'Unknown'}</p>
                <p><strong>City Published:</strong> {city_published || 'Unknown'}</p>
                <p><strong>Regions:</strong> {regions || 'Unknown'}</p>
                <p><strong>Original Language:</strong> {original_language || 'Unknown'}</p>
                <p><strong>ISBN:</strong> {isbn || 'Unknown'}</p>
                <p><strong>Year Published:</strong> {year_published || 'Unknown'}</p>
                <p><strong>Original Year Published BCE:</strong> {original_year_published_bce || 'Unknown'}</p>
                <p><strong>Original Year Published AD:</strong> {original_year_published_ad || 'Unknown'}</p>
                <p><strong>Source Type:</strong> {source_type || 'Unknown'}</p>
                <p><strong>Modern:</strong> {modern ? 'True' : modern === false ? 'False' : 'Unknown'}</p>
            </article>
        </article>
    )
}

export default SourcesDataCard;
