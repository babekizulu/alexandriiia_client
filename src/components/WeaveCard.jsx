function WeaveCard({weave}) {
  return (
    <article className="weave-card">
      <h1>{weave.title}</h1>
      <p>{weave.description}</p>
      <p>{weave.createdAt}</p>
      <p>{weave.updatedAt}</p>
      <p>{weave.tags}</p>
    </article>
  );
}

export default WeaveCard;
