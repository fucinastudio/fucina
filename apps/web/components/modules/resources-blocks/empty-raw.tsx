import React from "react";

export default function EmptyRaw() {
  return (
    <div className="border-grid dash h-56 w-full border-b">
      <div className="border-grid border-b">
        <div className="border-grid mx-auto grid h-4 w-full max-w-screen-lg grid-cols-1 gap-4 border-x px-4 md:grid-cols-3">
          <div className="border-grid w-full border-x"></div>
          <div className="border-grid hidden w-full border-x md:flex"></div>
          <div className="border-grid hidden w-full border-x md:flex"></div>
        </div>
      </div>
      <div className="border-grid mx-auto grid h-48 w-full max-w-screen-lg grid-cols-1 gap-4 border-x px-4 md:grid-cols-3">
        <div className="border-grid w-full border-x"></div>
        <div className="border-grid hidden w-full border-x md:flex"></div>
        <div className="border-grid hidden w-full border-x md:flex"></div>
      </div>
      <div className="border-grid border-t">
        <div className="border-grid mx-auto grid h-4 w-full max-w-screen-lg grid-cols-1 gap-4 border-x px-4 md:grid-cols-3">
          <div className="border-grid w-full border-x"></div>
          <div className="border-grid hidden w-full border-x md:flex"></div>
          <div className="border-grid hidden w-full border-x md:flex"></div>
        </div>
      </div>
    </div>
  );
}
