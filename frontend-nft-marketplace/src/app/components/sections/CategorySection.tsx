import { Category } from "@/lib/types";
import { CategoryCard } from "../cards/CategoryCard";

const categories: Category[] = [
  { name: "Art", total: 1200 },
  { name: "Music", total: 800 },
  { name: "Photography", total: 600 },
  { name: "Virtual Worlds", total: 400 },
  { name: "Domain Names", total: 200 },
];

export const CategorySection = () => {
  return (
    <section className="px-8 py-4 my-3">
      <div>
        <h2 className="text-2xl font-semibold">Categories</h2>
        <p>Explore our diverse categories of NFTs</p>
      </div>

      <div className="w-full grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:flex lg:overflow-x-scroll gap-4 p-4">
        {categories.map((category) => (
          <CategoryCard key={category.name} category={category} />
        ))}
      </div>
    </section>
  );
};
