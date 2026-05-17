/** Single source of truth for verified brand facts and links. */

export const SITE = {
  name: "Pete's BBQ",
  city: "Ramona, California",
  tagline: "Ramona's premier barbecue — slow-smoked to order, open daily.",
  founded: 2015,
  manager: "Braden N.",
  address: {
    line1: "977 Main St",
    city: "Ramona",
    region: "CA",
    postal: "92065",
    full: "977 Main St, Ramona, CA 92065",
  },
  phone: { display: "(760) 789-0584", tel: "tel:+17607890584" },
  email: "ramonaliquor@yahoo.com",
  hours: [
    { day: "Monday – Thursday", time: "10:00 AM – 8:00 PM" },
    { day: "Friday – Saturday", time: "10:00 AM – 9:00 PM" },
    { day: "Sunday",            time: "10:00 AM – 8:00 PM" },
  ],
  happyHour: "Mon–Fri · 1:00 PM – 5:00 PM",
  payments: ["Credit", "Debit", "Apple Pay", "Google Pay", "EBT"],
  ratings: {
    google:      { score: "4.3", reviews: "1,400+", href: "https://maps.google.com/?q=977+Main+St+Ramona+CA+92065" },
    yelp:        { score: "4.4", reviews: "362", href: "https://www.yelp.com/biz/petes-bbq-ramona" },
    tripadvisor: { score: "4.2", note: "#10 of 58 in Ramona", href: "https://www.tripadvisor.com" },
  },
  catering: {
    perPerson: "$35/person",
    minGuests: 50,
    maxGuests: 500,
    radius: "30 miles from 977 Main St",
    serviceArea: "all of San Diego County",
    deliveryFee: "$35 within 30 miles",
    serviceFee: "20%",
    advance: "Minimum 7 days advance, paid in full",
  },
  order: {
    toast:    "https://www.toasttab.com/petesbbq/v3/",
    doordash: "https://www.doordash.com/store/pete's-bbq-ramona-844360/",
    uber:     "https://www.ubereats.com/store/petes-bbq-%26-burgers-977-main-st/3cZinxGCWuWyQW5cg23czQ",
  },
  rewards: {
    join: "https://www.toasttab.com/petesbbq/rewardsSignup",
    gift: "https://www.toasttab.com/petesbbq/giftcards",
  },
  pages: {
    foodMenu: "https://petessd.com/ramona-pete-s-bbq-food-menu",
    drinkMenu: "https://petessd.com/ramona-pete-s-bbq-drink-menu",
    events:    "https://petessd.com/ramona-pete-s-bbq-events",
    catering:  "https://petessd.com/ramona-pete-s-bbq-catering",
  },
  social: {
    instagram: "https://www.instagram.com/petesbbqsd/",
    facebook:  "https://www.facebook.com/747484828702835",
    twitter:   "https://www.twitter.com/PetesBBQSD",
    yelp:      "https://www.yelp.com/biz/petes-bbq-ramona",
  },
  maps: "https://maps.google.com/?q=977+Main+St+Ramona+CA+92065",
} as const;
