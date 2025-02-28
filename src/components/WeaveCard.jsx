function WeaveCard({weave}) {
  const renderedTags = weave.tags.map((tag) => {
    return (
      <li key={tag}>{tag}</li>
    );
  });
  return (
    <article className="weave-card">
      <h1>{weave.title}</h1>
      <p>{weave.description}</p>
      <p>{weave.createdAt}</p>
      <p>{weave.updatedAt}</p>
      <ul>
        {renderedTags}
      </ul>
    </article>
  );
}

export default WeaveCard;
