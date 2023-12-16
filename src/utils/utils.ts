export default function util() {
  const concatStringIgnoreNull = (wildCard: string, ...arr: string[]) => {
    if (!arr) return "";
    return arr
      .filter((x) => x !== null && x !== undefined && `${x}`.trim() !== "")
      .join(wildCard);
  };

  return {
    concatStringIgnoreNull,
  };
}
