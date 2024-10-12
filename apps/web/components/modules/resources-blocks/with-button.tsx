import React from "react";

interface WithButtonProps {
  title: string | JSX.Element;
  description: string;
  button: JSX.Element;
}

const WithButton: React.FC<WithButtonProps> = ({ title, description, button }) => {
  return (
    <div className="border-grid w-full border-b">
      <div className="border-grid mx-auto grid size-full max-w-screen-lg grid-cols-1 border-x px-4 md:grid-cols-3 md:gap-4">
        <div className="border-grid col-span-2 grid size-full gap-2 border-x p-6">
          <h2 className="font-brand text-4xl font-medium">{title}</h2>
          <p className="text-description text-lg">{description}</p>
        </div>
        <div className="border-grid flex size-full items-center justify-normal border-x p-6 md:justify-center">
          {button}
        </div>
      </div>
    </div>
  );
};

export default WithButton;
