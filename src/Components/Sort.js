import React, { useState, useCallback } from 'react';

const SortNumbers = () => {
  const [numbers, setNumbers] = useState([5, 3, 8, 1, 2]);
  const [sortedNumbers, setSortedNumbers] = useState([]);

  // Memoized sorting function
  const sortNumbers = useCallback(() => {
    const sorted = [...numbers].sort((a, b) => a - b);
    setSortedNumbers(sorted);
  }, [numbers]);

  return (
    <div>
      <h3>Original Numbers:{numbers.join(',')}</h3>
      <h3>SortedNumbers:{sortedNumbers.join(',')}</h3>
      <button onClick={sortNumbers}>Sort Numbers</button>
      
    </div>
  );
};

export default SortNumbers;
