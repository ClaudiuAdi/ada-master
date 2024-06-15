const normalizePlayersByCat = (data) => {
  if (!data || !data.length) {
    return [];
  }
  return data.map(({ _id, count }) => ({
    label: _id,
    y: count,
  }));
};

export default normalizePlayersByCat;
