import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";
import classNames from "classnames";
import { BellIcon } from "lucide-react";

export type NotificationProps = {
  label: string;
  preview: string;
};

export type NotificationMenuProps = {
  notifications: NotificationProps[];
};

export const NotificationDropdownMenu: React.FC<NotificationMenuProps> = ({
  notifications,
}) => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <span className="cursor-pointer">
          <BellIcon />
        </span>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions" items={notifications}>
        {notifications?.length > 0 ? (
          notifications.map((item: NotificationProps) => (
            <DropdownItem
              key={item.label}
              className={classNames("h-16 p-2")}
              //   color={item.color == "danger" ? "danger" : "default"}
              //   onClick={item.onClick}
            >
              <div className="max-w-[200px]">
                <div className="font-semibold">{item.label}</div>
                <div className="text-sm text-gray-500 truncate">
                  This is a sample notification
                  message.asdddddddddddddddddddddddddddddddddddddddd
                </div>
              </div>
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
