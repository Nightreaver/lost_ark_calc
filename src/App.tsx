import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/solid";
import { useGlobalStore } from "store/globalStore";
import { Item, ItemProps } from "components/Item";
import itemData from "./assets/items.json";
import { ConverterInput } from "components/ConverterInput";

export const App: React.FC = () => {
  const {
    goldToCrystal,
    setGoldToCrystal,
    royalCrystalToGold,
    setRoyalCrystalToGold,
  } = useGlobalStore();

  return (
    <div className="app__containe p-24 flex flex-col items-center">
      <div
        style={{ fontFamily: "Philosopher,sans-serif" }}
        className="text-5xl text-amber-600 text-center"
      >
        Lost Ark Item Cost Calculator
      </div>
      <div className="w-[1000px] mt-4">
        <div className="flex justify-evenly">
          <ConverterInput
            title="Gold to Crystal"
            text="How much gold do you have to pay for 95 Crystals?"
            leftIcon="https://lostark.wiki.fextralife.com/file/Lost-Ark/gold_currencies_lost_ark_wiki_guide.png"
            rightIcon="https://lostark.wiki.fextralife.com/file/Lost-Ark/crystals_currencies_lost_ark_wiki_guide.png"
            value={goldToCrystal}
            onChange={(val) => setGoldToCrystal!(val)}
          />

          <ConverterInput
            title="Royal Crystal to Gold"
            text="How much gold do you get for 238 Royal Crystals?"
            leftIcon="https://lostark.wiki.fextralife.com/file/Lost-Ark/royal_crystals_currencies_lost_ark_wiki_guide.png"
            rightIcon="https://lostark.wiki.fextralife.com/file/Lost-Ark/gold_currencies_lost_ark_wiki_guide.png"
            value={royalCrystalToGold}
            onChange={(val) => setRoyalCrystalToGold!(val)}
          />
        </div>
        {(itemData as ItemProps[]).map((i) => (
          <Item {...i} key={i.name} />
        ))}
      </div>
    </div>
  );
};
