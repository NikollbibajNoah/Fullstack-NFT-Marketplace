"use client";

import { Button } from "@heroui/react";
import { FilterButton } from "./FilterButton";
import { ChevronDownIcon, FilterIcon } from "lucide-react";
import { useState } from "react";
import classNames from "classnames";

const filters = [
  { label: "NFT's" },
  { label: "Arts" },
  { label: "Music" },
  { label: "Sports" },
  { label: "Photography" },
];

export const FilterSection = () => {
  const [activeFilter, setActiveFilter] = useState<string[]>([]);
  const [filterHidden, setFilterHidden] = useState(true);

  const handleFilterToggle = () => {
    setFilterHidden(!filterHidden);
  };

  const handleFilterClick = (label: string) => {
    setActiveFilter((prev) => {
      if (prev?.includes(label)) {
        return prev.filter((item) => item !== label);
      } else {
        return [...(prev || []), label];
      }
    });
  };

  return (
    <section>
      <div className="flex gap-3 my-2">
        <div className="flex gap-2">
          {filters.map((filter) => (
            <FilterButton
              key={filter.label}
              isActive={activeFilter?.includes(filter.label)}
              label={filter.label}
              onClick={(filterValue: string) => handleFilterClick(filterValue)}
            />
          ))}
        </div>

        <div className="ml-5">
          <Button
            startContent={<FilterIcon />}
            endContent={<ChevronDownIcon />}
            onPress={handleFilterToggle}
          >
            Filter
          </Button>
        </div>
      </div>

      <div
        className={classNames("mt-4 transition-all duration-500 ease-in-out", {
          "max-h-0 overflow-hidden": filterHidden,
          "max-h-96": !filterHidden,
        })}
      >
        Nothing to see here for now...
      </div>
    </section>
  );
};
