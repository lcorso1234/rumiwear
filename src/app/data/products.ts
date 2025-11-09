export type Product = {
  name: string;
  price: string;
  front: string;
  back: string;
};

export const products: readonly Product[] = [
  {
    name: "God Mode Tee",
    price: "$68",
    front: "/God.png",
    back: "/godback.png",
  },
  {
    name: "Balance Tee",
    price: "$64",
    front: "/balance.png",
    back: "/balanceback.png",
  },
  {
    name: "Fishing Tee",
    price: "$62",
    front: "/fishing.png",
    back: "/fishingback.png",
  },
  {
    name: "Lover Tee",
    price: "$65",
    front: "/lover.png",
    back: "/loverback.png",
  },
  {
    name: "Tai Qi Tee",
    price: "$70",
    front: "/taiqi.png",
    back: "/taiqiback.png",
  },
  {
    name: "Tree Line Tee",
    price: "$60",
    front: "/tree.png",
    back: "/treeback.png",
  },
] as const;
