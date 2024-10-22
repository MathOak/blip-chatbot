interface Props {
  content: string;
}

export default function BotMessage({ content }: Props) {
  return (
    <div className="mb-2" style={{marginBottom: '0.5rem'}}>
      <p
        className="rounded-lg inline-block"
        style={{
          display: "inline-block",
          backgroundColor: "#e5e7eb",
          color: "#374151",
          padding: "0.5rem 1rem 0.5rem 1rem",
        }}
      >
        {content}
      </p>
    </div>
  );
}
