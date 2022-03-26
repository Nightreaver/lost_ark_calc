import { Disclosure } from "@headlessui/react";
import { useGlobalStore } from "store/globalStore";

export type subItem = {
  icon: string;
  name: string;
  amount: number;
};

export type ItemProps = subItem & {
  priceInCrystals: number;
  subItems?: subItem[];
};

export const Item: React.FC<ItemProps> = (props) => {
  const { goldToCrystal, royalCrystalToGold } = useGlobalStore();

  return (
    <Disclosure>
          <Disclosure.Button
            disabled={!props.subItems}
            className={`w-full h-20 px-6 grid grid-cols-item gap-x-2 items-center bg-stone-200 shadow-md rounded-md mt-4`}
          >
            <img src={props.icon} className="h-14 justify-self-end" />
            <div className="flex flex-col justify-self-start">
              <span className="text-base text-stone-600 text-left">
                Item Name
              </span>
              {props.name}
            </div>
            <div>
              <div className="flex flex-col items-center">
                <div className="flex items-center text-stone-600">
                  <span>Amount</span>
                </div>
                <span className="text-center w-full">x{props.amount}</span>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center">
                <div className="flex items-center text-stone-600">
                  <span>Cost in</span>
                  <img
                    src="https://static.wikia.nocookie.net/lostark_gamepedia/images/a/a6/Crystal_icon.png"
                    className="h-4 pl-1 w-min"
                  />
                </div>
                <span>{props.priceInCrystals}</span>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center">
                <div className="flex items-center text-stone-600">
                  <span>Cost in</span>
                  <img
                    src="https://lostark.wiki.fextralife.com/file/Lost-Ark/gold_currencies_lost_ark_wiki_guide.png"
                    className="h-4 pl-1 w-min"
                  />
                </div>
                <span>
                  {((goldToCrystal / 95) * props.priceInCrystals).toFixed(2)}
                </span>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center">
                <div className="flex items-center text-stone-600">
                  <span>Cost in</span>
                  <img
                    src="https://lostark.wiki.fextralife.com/file/Lost-Ark/gold_currencies_lost_ark_wiki_guide.png"
                    className="h-4 px-1 w-min"
                  />
                  <span>/i</span>
                </div>
                <span>
                  {(
                    ((goldToCrystal / 95) * props.priceInCrystals) /
                    props.amount
                  ).toFixed(2)}
                </span>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center">
                <div className="flex items-center text-stone-600">
                  <span>Cost in €</span>
                </div>
                <span>
                  {(
                    (((((goldToCrystal / 95) * props.priceInCrystals) /
                      royalCrystalToGold) *
                      238) /
                      1000) *
                    9.99
                  ).toFixed(2)}
                </span>
              </div>
            </div>
          </Disclosure.Button>
          <Disclosure.Panel className="w-full h-fit pl-20 pr-6 py-4 items-center bg-stone-300 shadow-md rounded-b-md">
            {props.subItems?.map((subItem) => (
              <div key={props.name+subItem.icon} className="grid grid-cols-subitem gap-x-2 mt-4 first:mt-0">
                <img
                  src={subItem.icon}
                  className="h-11 justify-self-end self-center"
                />
                <div className="flex flex-col justify-self-start">
                  <span className="text-base text-stone-400 text-left">
                    Item Name
                  </span>
                  {subItem.name}
                </div>
                <div>
                  <div className="flex flex-col items-center">
                    <div className="flex items-center text-stone-600">
                      <span>Amount T</span>
                    </div>
                    <span className="text-center w-full">
                      x{props.amount * subItem.amount}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col items-center">
                    <div className="flex items-center text-stone-600">
                      <span>Amount</span>
                    </div>
                    <span className="text-center w-full">
                      x{subItem.amount}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col items-center">
                    <div className="flex items-center text-stone-600">
                      <span>Cost in</span>
                      <img
                        src="https://static.wikia.nocookie.net/lostark_gamepedia/images/a/a6/Crystal_icon.png"
                        className="h-4 pl-1 w-min"
                      />
                      /i
                    </div>
                    <span>
                      {(
                        props.priceInCrystals /
                        (subItem.amount * props.amount)
                      ).toFixed(2)}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col items-center">
                    <div className="flex items-center text-stone-600">
                      <span>Cost in</span>
                      <img
                        src="https://lostark.wiki.fextralife.com/file/Lost-Ark/gold_currencies_lost_ark_wiki_guide.png"
                        className="h-4 pl-1 w-min"
                      />
                    </div>
                    <span>
                      {((goldToCrystal / 95) * props.priceInCrystals).toFixed(
                        2
                      )}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col items-center">
                    <div className="flex items-center text-stone-600">
                      <span>Cost in</span>
                      <img
                        src="https://lostark.wiki.fextralife.com/file/Lost-Ark/gold_currencies_lost_ark_wiki_guide.png"
                        className="h-4 px-1 w-min"
                      />
                      <span>/i</span>
                    </div>
                    <span>
                      {(
                        ((goldToCrystal / 95) * props.priceInCrystals) /
                        (props.amount * subItem.amount)
                      ).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </Disclosure.Panel>
    </Disclosure>
  );
};
