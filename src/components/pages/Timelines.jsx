/** 
@desc: This component is used to generate a timeline based on the starting and ending dates
- Dates set BCE are negative numbers
- Dates set AD are positive numbers
@author: Lwandle Babekizulu Dlamini
@date: 2025-02-28
*/
//libs
import { useState } from 'react';

function Timelines() {
  //state management 
  const [date, setDate] = useState('');
  const [event, setEvent] = useState('');
  const [timelineData, setTimelineData] = useState([]);
  //mapped data
  const renderedTimeline = timelineData.map((item) => {
    return (
      <article className='timeline-item' key={item.date}>
        <p>{item.date < 0 ? `${item.date * -1} BCE` : `${item.date} AD`}</p>
        <p>{item.event}</p>
      </article>
    )
  })
  //handlers
  const onGenerateTimeline = (e) => {
    e.preventDefault();
    if(date && event){
      setTimelineData([...timelineData, {date, event}]);
    }
    setDate('');
    setEvent('');
  }
  const onClearTimeline = () => {
    setTimelineData([]);
  }
 
  return (
    <section className="page">
      <article className='instructions-container'>
        <h2>Enter a date and an event to add to the timeline</h2>
        <p>Dates set BCE are negative numbers</p>
        <p>Dates set AD are positive numbers</p>
      </article>
      <form onSubmit={onGenerateTimeline}>
        <div className='timeline-input-container'>
          <label htmlFor="date">Date</label>
          <input value={date} onChange={(e) => setDate(e.target.value)} type="number" id="date" />
        </div>
        <div className='timeline-input-container'>
          <label htmlFor="event">Event</label>
          <input value={event} onChange={(e) => setEvent(e.target.value)} type="text" id="event" />
        </div>
        <button type='submit'>Generate Timeline</button>
      </form>
      <article className='timeline-container'>
        {renderedTimeline}
      </article>
      <button onClick={onClearTimeline} className='button danger'>Clear Timeline</button>
    </section>
  );
};

export default Timelines;
