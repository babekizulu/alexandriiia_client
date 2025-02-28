//libs
import WeaveCard from './WeaveCard';

function WeaveRack({weaves}) {

    const renderedWeaves = weaves.map((weave) => {
        return (
            <li key={weave.id}>
                <WeaveCard weave={weave} />
            </li>
        );
    });

  return (
    <section className="weave-rack">
      <nav>
        <ul>
            {renderedWeaves}
        </ul>
      </nav>
    </section>
  );
};

export default WeaveRack;
