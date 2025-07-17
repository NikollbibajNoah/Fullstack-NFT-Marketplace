import {
  Dropdown,
  DropdownTrigger,
  DropdownItem,
  DropdownMenu,
} from "@heroui/react";
import { MenuItemProps } from "../Header";
import classNames from "classnames";

export type DropdownMenuProps = {
  children: React.ReactNode;
  items: MenuItemProps[];
};

export const DropdownHeaderMenu: React.FC<DropdownMenuProps> = ({
  children,
  items,
}) => {
  return (
    <Dropdown>
      <DropdownTrigger>{children}</DropdownTrigger>
      <DropdownMenu aria-label="Static Actions" items={items}>
        {items?.length > 0 ? (
          items.map((item: MenuItemProps) => (
            <DropdownItem
              key={item.label}
              color={item.color == "danger" ? "danger" : "default"}
              className={classNames("", {
                "text-danger": item.color === "danger",
              })}
              onClick={item.onClick}
            >
              {item.label}
            </DropdownItem>
          ))
        ) : (
          <DropdownItem key="empty" isDisabled>
            Nothing in here..
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
};
