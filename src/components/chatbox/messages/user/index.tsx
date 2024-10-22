interface Props {
  content: string;
}

export default function UserMessage({ content }: Props) {
  return (
    <div className="mb-2 text-right" style={{marginBottom: '0.5rem'}}>
      <p
        className="rounded-lg"
        style={{
          display: "inline-block",
          backgroundColor: "#10b981",
          color: "#ffffffff",
          padding: "0.5rem 1rem 0.5rem 1rem",
        }}
      >
        {content}
      </p>
    </div>
  );
}
