import React from "react";
import Companioncard from "@/components/Companioncard";
import CompanionsList from "@/components/CompanionsList";
import Cta from "@/components/Cta";
import { recentSessions } from "@/constants";
const Page = () => {
  return (
    <main>
      <h1 className="text-2xl underline">Popular Companions</h1>

      <section className="home-section">
        <Companioncard
          id="123"
          name="Verba the Vocabulary Builder"
          topic="English Literature"
          subject="language"
          duration={30}
          color="#ffda6e"
        />

        <Companioncard
          id="456"
          name="neura the binary explorer"
          topic="neural network of the brain"
          subject="science"
          duration={45}
          color="#efd0ff"
        />

        <Companioncard
          id="789"
          name="The Growth Expert"
          topic="Scaling Your Business Successfully"
          subject="Bussiness "
          duration={20}
          color="#BDE7FF"
        />
      </section>

      <section className="home-section">
        <CompanionsList
          title="Recently completed sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <Cta />
      </section>
    </main>
  );
};

export default Page;
