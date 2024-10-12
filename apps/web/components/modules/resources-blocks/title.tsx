import React from "react";

interface TitleProps {
  title: string | JSX.Element;
  description: string;
}

const Title: React.FC<TitleProps> = ({ title, description }) => {
  return (
    <div className="border-grid w-full border-b">
      <div className="border-grid mx-auto grid size-full max-w-screen-lg grid-cols-1 gap-4 border-x px-4 md:grid-cols-3">
        <div className="border-grid col-span-2 grid size-full gap-2 border-x p-6">
          <h2 className="font-brand text-4xl font-medium">{title}</h2>
          <p className="text-description text-lg">{description}</p>
        </div>
        <div className="border-grid hidden size-full border-x md:flex"></div>
      </div>
    </div>
  );
};

export default Title;
