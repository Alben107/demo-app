import React from "react";
import { useDispatch } from "react-redux";
import { Nav } from "react-bootstrap";
import { setFilter } from "../../../redux/slices/filterSlice";

interface FilterComponentProps {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
}

const FilterComponent: React.FC<FilterComponentProps> = ({
  selectedFilter,
  onFilterChange,
}) => {
  const dispatch = useDispatch();
  const filters: string[] = ["All", "Asia", "Europe"];
  const handleFilterChange = (filter: string): void => {
    dispatch(setFilter(filter));
  };

  return (
    <Nav className="d-flex d-lg-inline-flex flex-column flex-lg-row">
      {filters.map((filter) => (
        <Nav.Link
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`mx-2 ${selectedFilter === filter ? "active" : ""}`}
          style={{
            borderBottom:
              selectedFilter === filter ? "2px solid #3d3d3d" : "none",
          }}
        >
          {filter}
        </Nav.Link>
      ))}
    </Nav>
  );
};

export default FilterComponent;
