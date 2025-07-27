import { Button } from "@heroui/react";

export type FilterButtonProps = {
  label: string;
  isActive: boolean;
  icon?: React.ReactNode;
  onClick?: (filter: string) => void;
};

export const FilterButton: React.FC<FilterButtonProps> = ({
  label,
  isActive,
  icon,
  onClick,
}) => {
  const handleToggle = () => {
    if (onClick) {
      onClick(label);
    }
  };

  return (
    <Button
      color={isActive ? "primary" : "default"}
      variant={isActive ? "solid" : "bordered"}
      onPress={handleToggle}
      startContent={icon}
    >
      {label}
    </Button>
  );
};
