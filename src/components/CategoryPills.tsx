import { useState } from "react";
import Button from "./Button";

type CategoryPillsProps = {
    categories: string[],
}


const CategoryPills = ({categories}: CategoryPillsProps) => {
    const [selectedCategory, setSelectedCategory] = useState(categories[0])
    
    return (
        <div className="overflow-x-hidden relative">
            <div className="flex gap-3 whitespace-nowrap transition-transform w-[max-content]">
                {
                    categories.map(category => (
                        <Button onClick={() => setSelectedCategory(category)} variant={selectedCategory === category ? 'dark' : 'default'} className="py-1 px-3 rounded-lg whitespace-nowrap">
                            {category}
                        </Button>
                    ))
                }
            </div>
        </div>
    );
};

export default CategoryPills;