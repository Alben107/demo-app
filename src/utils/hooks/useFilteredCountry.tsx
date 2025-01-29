import { useState, useEffect } from "react";

export const useFilteredCountries = (
  allCountries: any,
  selectedFilter: any
): any => {
  const [filteredCountries, setFilteredCountries] = useState<any>([]);

  useEffect(() => {
    if (selectedFilter === "All" || !allCountries) {
      setFilteredCountries(allCountries || []);
    } else {
      setFilteredCountries(
        allCountries.filter((country: any) => country.region === selectedFilter)
      );
    }
  }, [allCountries, selectedFilter]);

  return filteredCountries;
};
