import React from "react";

interface IconItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface IconsProps {
  items: IconItem[];
}

const Icons: React.FC<IconsProps> = ({ items }) => {
  return (
    <div className="border-grid w-full border-b">
      <div className="border-grid mx-auto grid size-full max-w-screen-lg grid-cols-1 border-x px-4 md:grid-cols-3 md:gap-4">
        {items.map((item, index) => (
          <div key={index} className="border-grid block size-full border-x p-5">
            <div className="[&>svg]:stroke-brand-500 size-6 [&>svg]:size-6">{item.icon}</div>
            <p className="text-description pt-3 text-lg">
              <span className="text font-medium">{item.title}</span> {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Icons;
