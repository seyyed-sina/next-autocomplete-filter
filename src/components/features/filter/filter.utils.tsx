export const highlightMatch = (
  text: string,
  searchTerm: string,
): React.ReactNode[] => {
  if (!searchTerm) {
    return [text];
  }

  const regex = new RegExp(`(${searchTerm})`, 'gi');
  const parts = text.split(regex);

  return parts.map((part) =>
    regex.test(part) ? (
      <span key={part} className="text-orange-500 font-semibold">
        {part}
      </span>
    ) : (
      <span key={part}>{part}</span>
    )
  );
};
