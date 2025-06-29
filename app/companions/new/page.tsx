import React from "react";
import CompanionForm from "../CompanionForm";

const New = () => {
  return (
    <main className="min-lg:w-1/3 min-md:h-2/3 items-center justify-center ">
      <article className="w-full gap-4 flex flex-col">
        <h1>Companion Builder</h1>
        <CompanionForm />
      </article>
    </main>
  );
};

export default New;
