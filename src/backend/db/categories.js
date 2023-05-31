import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Men",
    url: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2215238/2018/1/18/11516279440759-Roadster-Men-Grey-Melange-Striped-Round-Neck-T-shirt-2671516279440577-1.jpg",
    description: "Men's Clothing",
  },
  {
    _id: uuid(),
    categoryName: "Women",
    url: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/21126868/2023/3/28/49f84428-77d1-4795-bf59-81804c3f9bf11679999126159-Anouk-Women-Kurta-Sets-7381679999125464-1.jpg",
    description: "Women's Clothing",
  },
  {
    _id: uuid(),
    categoryName: "Kids",
    url: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/22257502/2023/3/8/a1be671d-ae84-4c53-93cc-f2542c3e6b271678274363991Shirts1.jpg",
    description: "Kid's Clothing",
  },
];
