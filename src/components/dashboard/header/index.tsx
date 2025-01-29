import React, { useState } from "react";
import { Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Menu } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../../redux/slices/filterSlice";
import FilterComponent from "../../ui/filter_component/index";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const dispatch = useDispatch();
  const selectedFilter = useSelector((state: any) => state.filter.filter);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleFilterClick = (filter: string) => {
    dispatch(setFilter(filter));
  };

  return (
    <header className="w-100 header-home">
      <Navbar expand="lg" className="container px-2 py-3 d-none d-lg-flex">
        <Navbar.Brand className="me-auto fw-bold">Countries</Navbar.Brand>
        <FilterComponent
          selectedFilter={selectedFilter}
          onFilterChange={handleFilterClick}
        />
      </Navbar>

      <Navbar className="container px-2 py-3 d-lg-none">
        <Navbar.Brand className="me-auto fw-bold">Countries</Navbar.Brand>
        <Nav.Link onClick={() => setShowMenu(true)} className="ms-auto">
          <Menu />
        </Nav.Link>
      </Navbar>

      <Offcanvas
        show={showMenu}
        onHide={() => setShowMenu(false)}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filters</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <FilterComponent
            selectedFilter={selectedFilter}
            onFilterChange={(filter: string) => {
              handleFilterClick(filter);
              setShowMenu(false);
            }}
          />
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
};

export default Header;
