import React, { useState, useEffect } from "react";
import CardComponent from "../../ui/card_component/index";
import { useGetAllCountriesQuery } from "../../../utils/endpoints/countryAPI";
import { useFilteredCountries } from "../../../utils/hooks/useFilteredCountry";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { CircularProgress } from "@mui/material";

interface Country {
  name: string;
  region: string;
  flag: string;
}

const ITEMS_PER_PAGE = 12;

const CardContainer: React.FC = () => {
  const { data: countries, isLoading, error } = useGetAllCountriesQuery();
  const filter = useSelector((state: RootState) => state.filter.filter);
  const [visibleCount, setVisibleCount] = useState<number>(ITEMS_PER_PAGE);

  const filteredCountries: any = useFilteredCountries(countries, filter);

  const visibleCountries = filteredCountries?.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + ITEMS_PER_PAGE);
  };

  const resetVisibleCount = () => {
    setVisibleCount(ITEMS_PER_PAGE);
  };

  useEffect(() => {
    resetVisibleCount();
  }, [filter]);

  if (isLoading)
    return (
      <div className="loader-div">
        <CircularProgress />
      </div>
    );
  if (error) return <div className="loader-div">Error loading countries</div>;

  return (
    <div className="container my-4">
      <div className="row g-3">
        {visibleCountries?.map((country: any, index: any) => (
          <div key={index} className="col-md-6">
            <CardComponent
              title={country?.name}
              subtitle={country?.region}
              flag={country?.flag}
            />
          </div>
        ))}
      </div>
      {visibleCount < filteredCountries?.length && (
        <div className="d-flex justify-content-center mt-4">
          <button className="btn btn-dark rounded-0" onClick={handleLoadMore}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default CardContainer;
