// to solve:
// TypeError: Do not know how to serialize a BigInt

const parseToJson = (vid: any) => {
  return JSON.parse(
    JSON.stringify(vid, (key, value) =>
      typeof value === "bigint" ? value.toString() : value,
    ),
  );
};

export default parseToJson;
