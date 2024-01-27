import { Navbar, NavbarBrand } from "reactstrap";

export function NavBarF() {
  return (
    <div>
      <Navbar style={{ backgroundColor: "black" }}>
        <NavbarBrand style={{ color: "white" }} href="/">
          Edit Blog
        </NavbarBrand>
      </Navbar>
    </div>
  );
}

export default NavBarF;
