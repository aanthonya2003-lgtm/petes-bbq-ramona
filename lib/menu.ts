/**
 * VERIFIED MENU — sourced directly from petessd.com.
 * Do not add, invent, or approximate items. If a price is missing, omit it.
 */

export type MenuItem = {
  name: string;
  desc?: string;
  price: string;
};

export type MenuCategory = {
  id: string;
  label: string;
  note?: string;
  items: MenuItem[];
};

export const MENU: MenuCategory[] = [
  {
    id: "bbq-plates",
    label: "BBQ Plates",
    note: "Two sides + cornbread or dinner rolls",
    items: [
      { name: "¼ Rack Ribs Plate", desc: "3 St. Louis-style pork rib bones", price: "$18.99" },
      { name: "½ Rack Ribs Plate", desc: "6 St. Louis-style pork rib bones", price: "$26.99" },
      { name: "½ Chicken Plate", desc: "Half chicken, smoked low and slow", price: "$18.99" },
      { name: "Pulled Pork Plate", desc: "⅓ lb. pulled pork", price: "$14.99" },
      { name: "Tri-Tip Plate", desc: "⅓ lb. tri-tip", price: "$18.99" },
      { name: "Brisket Plate", desc: "⅓ lb. brisket", price: "$19.99" },
      { name: "Pulled Pork Mac 'N' Cheese", desc: "1 lb. mac & cheese, ⅓ lb. pulled pork, fried onions, BBQ sauce", price: "$14.99" },
      { name: "Hot Sausage Link Plate", desc: "⅓ lb. hot sausage link", price: "$13.99" },
    ],
  },
  {
    id: "bbq-fries",
    label: "BBQ Fries",
    items: [
      { name: "Pulled Pork Fries", desc: "Fries, shredded cheese, ⅓ lb. pulled pork, coleslaw, BBQ sauce", price: "$12.99" },
      { name: "Tri-Tip Fries", desc: "Fries, shredded cheese, ⅓ lb. tri-tip, grilled onions, BBQ sauce", price: "$16.99" },
      { name: "Brisket Fries", desc: "Fries, shredded cheese, ⅓ lb. brisket, fried onions, BBQ sauce", price: "$17.99" },
      { name: "Buffalo Chicken Fries", desc: "Fries, shredded cheese, ½ lb. chicken, buffalo sauce, ranch", price: "$14.99" },
    ],
  },
  {
    id: "burgers",
    label: "Burgers",
    note: "Served with small fries",
    items: [
      { name: "Double Smash Burger", desc: "Brioche bun, two beef patties, cheddar, bacon, tomatoes, mayo", price: "$15.99" },
      { name: "The Ramona", desc: "Brioche bun, ½ lb. Angus beef, cheddar, bacon, onion rings, BBQ sauce", price: "$15.99" },
      { name: "Sue's Sriracha", desc: "Brioche bun, ½ lb. Angus beef, cheddar, bacon, jalapeños, grilled onions, lettuce, tomatoes, sriracha", price: "$15.99" },
      { name: "Pete's Classic", desc: "Brioche bun, ½ lb. Angus beef, American cheese, thousand island, lettuce, tomatoes, red onions, pickles", price: "$15.99" },
      { name: "Truffle Mushroom Smash", desc: "Brioche bun, two beef patties, provolone, sautéed mushrooms, onions, truffle aioli", price: "$15.99" },
    ],
  },
  {
    id: "sandwiches",
    label: "Sandwiches",
    items: [
      { name: "Pulled Pork Sandwich", desc: "Brioche bun, ⅓ lb. pulled pork, coleslaw, BBQ sauce", price: "$12.99" },
      { name: "Tri-Tip Sandwich", desc: "French roll, ⅓ lb. tri-tip, grilled onions, BBQ sauce", price: "$14.99" },
      { name: "Brisket Sandwich", desc: "Brioche bun, ⅓ lb. brisket, fried onions, BBQ sauce", price: "$15.99" },
      { name: "Pulled Pork Sliders", desc: "Brioche slider buns, ⅓ lb. pulled pork, coleslaw, BBQ sauce", price: "$12.99" },
      { name: "BBQ Chicken Sandwich", desc: "Brioche bun, ⅓ lb. chicken breast, lettuce, tomatoes, BBQ sauce", price: "$12.99" },
      { name: "Hot Sausage Link Sandwich", desc: "French roll, ⅓ lb. hot sausage link, grilled onions, BBQ sauce", price: "$9.99" },
      { name: "Philly Sandwich", desc: "⅓ lb. ribeye steak, grilled onions, red & green bell peppers, provolone on French roll", price: "$13.99" },
      { name: "French Dip Sandwich", desc: "⅓ lb. ribeye steak, grilled onions, Swiss on French roll, au jus on side", price: "$13.99" },
      { name: "Pastrami Sandwich", desc: "⅓ lb. pastrami, grilled onions, pickles, mustard, Swiss on sourdough", price: "$14.99" },
      { name: "Reuben", desc: "⅓ lb. pastrami, sauerkraut, thousand island, Swiss on rye", price: "$14.99" },
    ],
  },
  {
    id: "burritos",
    label: "Burritos",
    items: [
      { name: "Pulled Pork Burrito", desc: "Flour tortilla, fries, ⅓ lb. pulled pork, shredded cheese, cilantro, white onions, BBQ sauce", price: "$13.99" },
      { name: "Tri-Tip Burrito", desc: "Flour tortilla, fries, ⅓ lb. tri-tip, shredded cheese, cilantro, white onions, BBQ sauce", price: "$16.99" },
      { name: "Brisket Burrito", desc: "Flour tortilla, fries, ⅓ lb. brisket, shredded cheese, cilantro, white onions, BBQ sauce", price: "$17.99" },
      { name: "Chicken Burrito", desc: "Flour tortilla, fries, ⅓ lb. chicken breast, shredded cheese, cilantro, white onions, BBQ sauce", price: "$14.99" },
    ],
  },
  {
    id: "gyros",
    label: "Gyros",
    items: [
      { name: "Gyro Sandwich", desc: "Pita bread, tomatoes, onions, tzatziki", price: "$8.99" },
      { name: "Gyro Plate", desc: "French fries, salad, pita bread, tzatziki on side", price: "$14.99" },
      { name: "Gyro Salad", desc: "Lettuce, cucumber, onion, tomatoes, banana peppers, feta, black olives, feta dressing", price: "$14.99" },
      { name: "Gyro Fries", desc: "Loaded with gyro meat, feta cheese, tzatziki", price: "$16.99" },
    ],
  },
  {
    id: "sides-dessert",
    label: "Sides & Dessert",
    note: "Small / Large where listed",
    items: [
      { name: "Baked Beans", price: "$3.99 / $5.99" },
      { name: "Mac & Cheese", price: "$4.50 / $6.50" },
      { name: "Coleslaw", price: "$3.99 / $5.99" },
      { name: "Macaroni Salad", price: "$4.50 / $6.50" },
      { name: "Potato Salad", price: "$4.50 / $6.50" },
      { name: "Fries", price: "$3.99 / $5.99" },
      { name: "Onion Rings", price: "$4.99 / $7.99" },
      { name: "Corn Bread", desc: "Served with butter and honey", price: "$2.99" },
      { name: "Peach Cobbler", price: "$4.99" },
      { name: "Corn Bread Tray", desc: "18 pieces, 18 butter, 18 honey", price: "$44.99" },
      { name: "Peach Cobbler Tray", desc: "10 servings", price: "$49.99" },
    ],
  },
  {
    id: "kids",
    label: "Kids' Menu",
    note: "Served with small fries",
    items: [
      { name: "2 Burger Sliders", price: "$10.99" },
      { name: "4 PC Chicken Tenders", desc: "With 2 ranch", price: "$11.99" },
      { name: "Grilled Cheese", price: "$6.99" },
      { name: "Quesadilla", desc: "With 2 ranch", price: "$7.99" },
    ],
  },
];

/** Combos shown in catering — verified pricing & guest counts. */
export const COMBOS = [
  { id: 1, name: "Combo #1", price: "$42.99", feeds: "Feeds 2",  notes: "¼ Rack Ribs · ½ Chicken · Sausage · 4th meat · 2 sides · 4 rolls" },
  { id: 2, name: "Combo #2", price: "$69.99", feeds: "Feeds 4",  notes: "½ Rack Ribs · Full Chicken · Sausage · 4th meat · 3 sm. sides · 6 rolls" },
  { id: 3, name: "Combo #3", price: "$99.99", feeds: "Feeds 6",  notes: "½ Rack Ribs · Full Chicken · Tri-Tip · Brisket · Pulled Pork · Sausage · 3 md. sides · 12 rolls" },
  { id: 4, name: "Combo #4", price: "$159.99", feeds: "Feeds 10", notes: "Full Rack Ribs · Full Chicken · Tri-Tip · Brisket · Pulled Pork · 2× Sausage · 5 lg. sides · 24 rolls" },
] as const;

/** Happy hour — Monday–Friday, 1:00–5:00 PM only. */
export const HAPPY_HOUR = [
  { name: "Pulled Pork Sandwich", price: "$8.99" },
  { name: "Pulled Pork Sliders (3)", price: "$8.99" },
  { name: "Coors Light 24 oz", price: "$3.99" },
] as const;

export const DRAFT_BEERS = [
  "Stone Delicious IPA",
  "Avery White Rascal",
  "Elysian Space Dust IPA",
  "Sierra Nevada Hazy IPA",
  "Modelo Especial",
  "Turquoise Barn Cider",
  "Coors Light",
  "Firestone Walker 805",
] as const;
