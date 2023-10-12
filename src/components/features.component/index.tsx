import { featuresComponent } from "@/utils/content";
import { Button } from "@mantine/core";
import { IconArrowBigRightLines } from "@tabler/icons-react";
import { theme } from "@tailwindConfig";
import React from "react";

const FeaturesComponent = () => {
  const { colors } = theme as any;
  return (
    <section id="features" className="bg-white sm:py-16 lg:py-28">
      <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
        {featuresComponent.features.map((feat, index) => {
          return (
            <div
              key={index + feat.title}
              className="group/card border z-10 rounded-lg bg-gray-50 border-gray-200 p-10 hover:border-primary transition flex flex-col justify-between items-start"
            >
              <div className="content">
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 group-hover/card:bg-primary/20 transition">
                  {feat.icon(
                    "w-5 h-5 text-primary-600 group-hover/card:text-primary transition lg:w-6 lg:h-6"
                  )}
                </div>
                <h3 className="mb-2 text-xl font-bold hover:text-primary transition cursor-pointer">
                  {feat.title}
                </h3>
                <p className="text-gray-500">{feat.description}</p>
              </div>
              <Button
                variant="transparent"
                className="group/btn !px-0"
                rightSection={
                  <IconArrowBigRightLines
                    size={18}
                    className="group-hover/btn:translate-x-1 transition"
                  />
                }
                color={colors.tertiary.DEFAULT}
              >
                Meer Info
              </Button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturesComponent;
