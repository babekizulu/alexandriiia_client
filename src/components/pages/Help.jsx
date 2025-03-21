function Help() {
    return (
        <section className='page help'>
            <article className='page-header'>
                <h1>Help</h1>
                <ol style={{marginBottom: "2rem"}}>
                    <li style={{marginBottom: "2rem"}}>
                        Welcome to ALEXANDRiiiA! This app allows you to explore and contribute to a growing dataset of historical information.
                    </li>
                    <li style={{marginBottom: "2rem"}}>
                        Browse through our data cards to view historical records across different categories. Each card contains detailed metadata about historical sources, events, people, and more.
                    </li>
                    <li style={{marginBottom: "2rem"}}>
                        Want to contribute? You can submit your own historical data through our submission forms. All submissions go through a thorough vetting process to ensure data quality and accuracy before being added to the dataset.
                    </li>
                    <li style={{marginBottom: "2rem"}}>
                        The ALEXANDRiiiA dataset will be used to train machine learning models for historical analysis, helping researchers uncover new patterns and insights in historical data.
                    </li>
                    <li style={{marginBottom: "2rem"}}>
                        Click on any category to start exploring, or use the "+" button to submit new data. Thank you for helping build this valuable historical resource!
                    </li>
                </ol>
            </article>
            
        </section>
    );
};

export default Help;
