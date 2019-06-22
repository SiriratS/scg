function getResults(startBy, loopCount) {
  const interval = 2;
  let prevValue = startBy;

  return Array(loopCount).fill(startBy).map((_, i) => {
    const result = prevValue + (interval * i);
    prevValue = result;

    return result
  });
}

export default {
    name: 'scg',
    data: () => {
      return {
        results: getResults(3, 7)
      };
    }
}