//libs
import { useState, useEffect } from 'react';
import mechanicalInventions from '@alexandriiia/mechanicalInventions';
import { createInvention, getInventions } from '@libs/api';
//components
import MechanicalInventionsDataCard from '@components/datacards/MechanicalInventionsDataCard';
//icons
import { IoMdAdd } from 'react-icons/io';

function MechanicalInventions() {
    //state management
    const [showAddForm, setShowAddForm] = useState(false);
    const [contributor, setContributor] = useState('');
    const [dateInvented, setDateInvented] = useState(0);
    const [inventionName, setInventionName] = useState('');
    const [inventionType, setInventionType] = useState('');
    const [dimensions, setDimensions] = useState('');
    const [iteration, setIteration] = useState('');
    const [iterationOf, setIterationOf] = useState('');
    const [materials, setMaterials] = useState('');
    const [inventor, setInventor] = useState('');
    const [researchGroups, setResearchGroups] = useState('');
    const [model, setModel] = useState('');
    const [modelImage, setModelImage] = useState('');
    const [regions, setRegions] = useState('');
    const [numberOfCorroborativeSources, setNumberOfCorroborativeSources] = useState(0);
    const [sourceIds, setSourceIds] = useState('');
    const [sourcePageReferences, setSourcePageReferences] = useState('');
    const [primarySourceIds, setPrimarySourceIds] = useState('');
    const [ancient, setAncient] = useState(false);
    const [modern, setModern] = useState(false);
    const [multiRegional, setMultiRegional] = useState(false);
    const [error, setError] = useState('');

    // Make initial request to warm up the server
    useEffect(() => {
        const warmUpServer = async () => {
            try {
                await getInventions();
            } catch (error) {
                console.error('Error warming up server:', error);
            }
        };
        warmUpServer();
    }, []);

    //mapped data
    const renderedMechanicalInventions = mechanicalInventions.map(invention => {
        return (
            <MechanicalInventionsDataCard key={invention.id} {...invention} />
        );
    });

    //handlers
    const handleAddInvention = async (e) => {
        e.preventDefault();
        try {
            const inventionData = {
                contributor,
                dateInvented,
                inventionName,
                inventionType,
                dimensions,
                iteration,
                iterationOf,
                materials,
                inventor,
                researchGroups,
                model,
                modelImage,
                regions,
                numberOfCorroborativeSources,
                sourceIds,
                sourcePageReferences,
                primarySourceIds,
                ancient,
                modern,
                multiRegional
            };

            await createInvention(inventionData);
            
            // Reset form after successful creation
            setContributor('');
            setDateInvented('');
            setInventionName('');
            setInventionType('');
            setDimensions('');
            setIteration('');
            setIterationOf('');
            setMaterials('');
            setInventor('');
            setResearchGroups('');
            setModel('');
            setModelImage('');
            setRegions('');
            setNumberOfCorroborativeSources('');
            setSourceIds('');
            setSourcePageReferences('');
            setPrimarySourceIds('');
            setAncient(false);
            setModern(false);
            setMultiRegional(false);
            setShowAddForm(false);
            setError('');

        } catch (err) {
            //console.error('Error details:', err);
            // setError('Failed to add invention: ' + (err.response?.data?.message || err.message));
        } finally {
            setShowAddForm(false);
            setContributor('');
            setDateInvented('');
            setInventionName('');
            setInventionType('');
            setDimensions('');
            setIteration('');
            setIterationOf('');
            setMaterials('');
            setInventor('');
            setResearchGroups('');
            setModel('');
            setModelImage('');
            setRegions('');
            setNumberOfCorroborativeSources(0);
            setSourceIds('');
            setSourcePageReferences('');
            setPrimarySourceIds('');
            setAncient(false);
            setModern(false);
            setMultiRegional(false);
            
        }
    };

    return (
        <section className='page mechanical-inventions'>
            <article className='page-header'>
                <h1>Mechanical Inventions</h1>
                <p>A list of historical mechanical inventions, from the ancient world to the modern day.</p>
                <br/>
                <br/>
                <p><strong>Click the add button to add a new invention for consideration. All contributed data will be vetted by the ALEXANDRiiiA team before being added to the database.</strong></p>
                <button className='add-button' onClick={() => setShowAddForm(!showAddForm)}><IoMdAdd /></button>
            </article>
            {showAddForm && (
                <article className='add-form'>
                    <form onSubmit={handleAddInvention}>
                        <input value={contributor} type='text' placeholder='Contributor' onChange={(e) => setContributor(e.target.value)} />
                        <input value={dateInvented} type='number' placeholder='Date Invented' onChange={(e) => setDateInvented(e.target.value)} />
                        <input value={inventionName} type='text' placeholder='Invention Name' onChange={(e) => setInventionName(e.target.value)} />
                        <input value={inventionType} type='text' placeholder='Invention Type' onChange={(e) => setInventionType(e.target.value)} />
                        <input value={dimensions} type='text' placeholder='Dimensions' onChange={(e) => setDimensions(e.target.value)} />
                        <input value={iteration} type='text' placeholder='Iteration' onChange={(e) => setIteration(e.target.value)} />
                        <input value={iterationOf} type='text' placeholder='Iteration of' onChange={(e) => setIterationOf(e.target.value)} />
                        <input value={materials} type='text' placeholder='Materials' onChange={(e) => setMaterials(e.target.value)} />
                        <input value={inventor} type='text' placeholder='Inventor' onChange={(e) => setInventor(e.target.value)} />
                        <input value={researchGroups} type='text' placeholder='Research Groups' onChange={(e) => setResearchGroups(e.target.value)} />
                        <input value={model} type='text' placeholder='Model' onChange={(e) => setModel(e.target.value)} />
                        <input value={modelImage} type='text' placeholder='Model Image' onChange={(e) => setModelImage(e.target.value)} />
                        <input value={regions} type='text' placeholder='Regions' onChange={(e) => setRegions(e.target.value)} />
                        <input value={numberOfCorroborativeSources} type='number' placeholder='Number of Corroborative Sources' onChange={(e) => setNumberOfCorroborativeSources(e.target.value)} />
                        <input value={sourceIds} type='text' placeholder='Source IDs' onChange={(e) => setSourceIds(e.target.value)} />
                        <input value={sourcePageReferences} type='text' placeholder='Source Page References' onChange={(e) => setSourcePageReferences(e.target.value)} />
                        <input value={primarySourceIds} type='text' placeholder='Primary Source IDs' onChange={(e) => setPrimarySourceIds(e.target.value)} />
                        <div className='checkbox-container'>
                            <label htmlFor='ancient'>Ancient</label>
                            <input 
                                checked={ancient}
                                type='checkbox' 
                                id='ancient' 
                                onChange={(e) => setAncient(e.target.checked)}
                            />
                            <label htmlFor='modern'>Modern</label>
                            <input 
                                checked={modern}
                                type='checkbox' 
                                id='modern'
                                onChange={(e) => setModern(e.target.checked)}
                            />
                            <label htmlFor='multi-regional'>Multi-Regional</label>
                            <input 
                                checked={multiRegional}
                                type='checkbox' 
                                id='multi-regional'
                                onChange={(e) => setMultiRegional(e.target.checked)}
                            />
                        </div>
                        <button type='submit' className='button'>
                            Add
                        </button>
                    </form>
                    {error && <p className='error'>{error}</p>}
                </article>
            )}
            <div className='data-grid'>
                {renderedMechanicalInventions}
            </div>
        </section>
    );
}

export default MechanicalInventions;
