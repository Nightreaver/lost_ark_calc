import React, { useContext, useState } from "react";

export const GlobalStoreContext = React.createContext<{
  goldToCrystal: number;
  setGoldToCrystal?: React.Dispatch<React.SetStateAction<number>>;
  royalCrystalToGold: number;
  setRoyalCrystalToGold?: React.Dispatch<React.SetStateAction<number>>;
}>({ goldToCrystal: 0, royalCrystalToGold: 0 });

export const GlobalStoreProvider: React.FC = (props) => {
  const [goldToCrystal, setGoldToCrystal] = useState<number>(0); // How much Gold for 95 crystals
  const [royalCrystalToGold, setRoyalCrystalToGold] = useState<number>(0);
  return (
    <GlobalStoreContext.Provider
      value={{
        goldToCrystal,
        setGoldToCrystal,
        royalCrystalToGold,
        setRoyalCrystalToGold,
      }}
      {...props}
    ></GlobalStoreContext.Provider>
  );
};

export const useGlobalStore = () => useContext(GlobalStoreContext);
