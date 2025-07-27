"use client";

import { Category } from "@/lib/types";
import { Card } from "@heroui/react";

export type CategoryCardProps = {
  category: Category;
  onClick?: (category: Category) => void;
};

export const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  onClick,
}) => {
  return (
    <Card
      className="flex-shrink-0 w-60 h-52"
      isPressable
      onPress={() => onClick?.(category)}
    >
      <div className="p-4">
        <div className="rounded-xl w-full h-28 bg-red-500">{/* <img /> */}</div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h2 className="font-semibold text-lg">{category.name}</h2>
        <p>{category.total} NFTs</p>
      </div>
    </Card>
  );
};
