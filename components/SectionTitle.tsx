export default function SectionTitle({
  index,
  title,
  description,
}: {
  index: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-title">
      <div className="section-kicker">{index}</div>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
