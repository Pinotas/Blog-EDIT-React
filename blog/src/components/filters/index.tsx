import { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

export function Filters({ ...args }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="d-flex p-5">
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>Filters</DropdownToggle>
        <DropdownMenu {...args}>
          <DropdownItem>Old to New</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
