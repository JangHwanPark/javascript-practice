function CalculateFrequency(str) {
  const frequencyMap = new Map();
  console.log(frequencyMap)

  for (const char of str) {
    frequencyMap.set(char,
      (frequencyMap.get(char) || 0) + 1
    );
  }

  return frequencyMap;
}


console.log(CalculateFrequency('asdasd'))
