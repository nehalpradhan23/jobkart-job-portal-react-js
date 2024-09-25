import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React from "react";
import { Link } from "react-router-dom";

import companies from "../data/companies.json";
import faqs from "../data/faq.json";
import Autoplay from "embla-carousel-autoplay";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-b from-black  to-gray-500">
      <img
        src="/landing-bg.jpeg"
        alt=""
        className="w-full opacity-10 absolute z-0"
      />
      <main className="relative flex flex-col gap-10 sm:gap-20 py-10 sm:py-20 z-10">
        {/* background image ======================== */}

        <section className="text-center py-2 pointer-events-none">
          <h1 className="flex flex-col items-center justify-center text-4xl sm:text-5xl lg:text-6xl font-extrabold max-w-7xl mx-auto py-4 gradient-title">
            Explore the market,
            <span>
              Grab your's or <span className="">Give</span> those opportunities
            </span>
          </h1>
          <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">
            Find thousands of job listings or the right candidate
          </p>
        </section>
        <div className="flex gap-6 justify-center z-10">
          {/* buttons */}
          <Link to="/jobs">
            <Button
              size="xl"
              className="bg-black hover:bg-black/70 text-white border-white"
            >
              Find jobs
            </Button>
          </Link>
          <Link to="/post-job">
            <Button size="xl" className="">
              Post a job
            </Button>
          </Link>
        </div>
        {/* carousel =========================================*/}
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-full py-10"
        >
          <CarouselContent className="flex gap-5 sm:gap-20 items-center">
            {companies.map(({ name, id, path }) => {
              return (
                <CarouselItem key={id} className="basis-1/3 lg:basis-1/6">
                  <img
                    src={path}
                    alt={name}
                    className="h-9 sm:h-14 object-contain"
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
        {/* accordion ==============================================*/}
        <div className="mx-auto max-w-3xl w-full px-5">
          <Accordion type="single" collapsible>
            {faqs.map(({ question, answer }, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger>{question}</AccordionTrigger>
                <AccordionContent>{answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
