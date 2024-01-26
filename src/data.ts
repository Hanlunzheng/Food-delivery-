type Product = {
  id: number;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

type Products = Product[];

export const featuredProducts: Products = [
  {
    id: 1,
    title: "Sicilian",
    desc: "Rich, tender and juicy.  Our marbled, USDA Select Ribeye Steak* is served hot off the grill. Served with your choice of two sides.",
    img: "/temporary/p1.png",
    price: 24.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 2,
    title: "Bacon Deluxe",
    desc: "Indulge in smoky goodness with a flame-grilled beef patty, topped with crispy bacon, melted cheddar cheese, caramelized onions, and a smattering of tangy BBQ sauce.",
    img: "/temporary/p2.png",
    price: 29.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 3,
    title: "Bella Napoli",
    desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
    img: "/temporary/p3.png",
    price: 24.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 4,
    title: "Spicy Arrabbiata",
    desc: "Ignite your taste buds with this fiery pasta creation, combining penne in a spicy tomato sauce infused with garlic, red chili flakes, and fresh basil for the ultimate comfort food experience.",
    img: "/temporary/p4.png",
    price: 26.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 5,
    title: "Jalapeño Fiesta",
    desc: "Ignite your taste buds with a fiery kick! This burger features a succulent beef patty, fiery jalapeños, pepper jack cheese, and a zesty chipotle mayo sauce , and all the classic fixings on a toasted bun.",
    img: "/temporary/p5.png",
    price: 29.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 6,
    title: "Margherita Magic",
    desc: "A timeless favorite with a twist, showcasing a thin crust topped with sweet tomatoes, fresh basil, creamy mozzarella, and a drizzle of extra virgin olive oil, fresh arugula, and a drizzle of balsamic glaze.",
    img: "/temporary/p6.png",
    price: 24.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 7,
    title: "Garlic Parmesan Linguine",
    desc: "A garlic lover's delight, featuring linguine smothered in a creamy Parmesan sauce, infused with garlic and garnished with chopped parsley, bell peppers, and cherry tomatoes.",
    img: "/temporary/p7.png",
    price: 28.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 8,
    title: "Mediterranean Delight",
    desc: "Embark on a culinary journey with this Mediterranean-inspired creation, featuring zesty feta cheese, Kalamata olives, sun-dried tomatoes, and a sprinkle of oregano.",
    img: "/temporary/p8.png",
    price: 32.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 9,
    title: "Hawaiian Teriyaki",
    desc: "Experience a taste of the tropics with a juicy beef patty glazed in tangy teriyaki sauce, topped with grilled pineapple, crispy bacon, and fresh lettuce, and all the classic fixings on a toasted bun.",
    img: "/temporary/p9.png",
    price: 29.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
];
export const burgers: Products = [
  {
    id: 7,
    title: "Classic Beef Burger",
    desc: "Savor the timeless taste of a juicy beef patty topped with fresh lettuce, tomatoes, pickles, and our special burger sauce, all nestled in a soft sesame seed bun.",
    img: "/temporary/p1.png",
    price: 12.9,
    options: [
      {
        title: "Single Patty",
        additionalPrice: 0,
      },
      {
        title: "Double Patty",
        additionalPrice: 4,
      },
      {
        title: "Triple Patty",
        additionalPrice: 8,
      },
    ],
  },
  {
    id: 8,
    title: "Spicy Chicken Delight",
    desc: "Experience a fiery kick with our spicy chicken patty, layered with pepper jack cheese, jalapeños, lettuce, and zesty mayo, all enclosed in a toasted brioche bun.",
    img: "/temporary/b2.png",
    price: 14.9,
    options: [
      {
        title: "Regular",
        additionalPrice: 0,
      },
      {
        title: "Spicy Upgrade",
        additionalPrice: 2,
      },
      {
        title: "Double Trouble",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 9,
    title: "Mushroom Swiss Bliss",
    desc: "Indulge in the rich flavor of sautéed mushrooms, melted Swiss cheese, and a juicy beef patty, all embraced by a warm pretzel bun for a savory delight.",
    img: "/temporary/b3.png",
    price: 16.9,
    options: [
      {
        title: "Single Patty",
        additionalPrice: 0,
      },
      {
        title: "Double Patty",
        additionalPrice: 5,
      },
      {
        title: "Triple Patty",
        additionalPrice: 9,
      },
    ],
  },
  {
    id: 10,
    title: "Veggie Lover's Delight",
    desc: "A plant-based marvel featuring a flavorful veggie patty, fresh garden vegetables, vegan cheese, and our signature vegan mayo, all served on a whole grain bun.",
    img: "/temporary/b4.png",
    price: 13.9,
    options: [
      {
        title: "Regular",
        additionalPrice: 0,
      },
      {
        title: "Double Stack",
        additionalPrice: 4,
      },
      {
        title: "Triple Stack",
        additionalPrice: 8,
      },
    ],
  },
  {
    id: 11,
    title: "BBQ Bacon Bliss",
    desc: "Get ready for a flavor explosion with our BBQ-glazed beef patty, crispy bacon, cheddar cheese, lettuce, and a drizzle of ranch dressing, all in a toasted onion bun.",
    img: "/temporary/b5.png",
    price: 15.9,
    options: [
      {
        title: "Regular",
        additionalPrice: 0,
      },
      {
        title: "Double Trouble",
        additionalPrice: 6,
      },
      {
        title: "Triple Treat",
        additionalPrice: 10,
      },
    ],
  },
  {
    id: 12,
    title: "Blue Cheese Elegance",
    desc: "Elevate your burger experience with the bold taste of blue cheese, caramelized onions, and a perfectly grilled beef patty, all nestled in a ciabatta roll.",
    img: "/temporary/b6.png",
    price: 17.9,
    options: [
      {
        title: "Single Patty",
        additionalPrice: 0,
      },
      {
        title: "Double Patty",
        additionalPrice: 6,
      },
      {
        title: "Triple Patty",
        additionalPrice: 11,
      },
    ],
  },
];

export const pizzas: Products = [
  {
    id: 1,
    title: "Sicilian",
    desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
    img: "/temporary/p1.png",
    price: 24.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 2,
    title: "Mediterranean Delight",
    desc: "Embark on a culinary journey with this Mediterranean-inspired creation, featuring zesty feta cheese, Kalamata olives, sun-dried tomatoes, and a sprinkle of oregano.",
    img: "/temporary/p8.png",
    price: 32.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 3,
    title: "Bella Napoli",
    desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
    img: "/temporary/p3.png",
    price: 26.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 4,
    title: "Pesto Primavera",
    desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
    img: "/temporary/p10.png",
    price: 28.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 5,
    title: "Veggie Supreme",
    desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
    img: "/temporary/p11.png",
    price: 24.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 6,
    title: "Four Cheese Fantasy",
    desc: "Experience pure cheesy bliss with a melty blend of mozzarella, cheddar, provolone, and Parmesan cheeses, creating a rich and indulgent pizza experience.",
    img: "/temporary/p12.png",
    price: 22.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
];

export const singleProduct: Product = {
  id: 1,
  title: "Sicilian",
  desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
  img: "/temporary/p1.png",
  price: 24.9,
  options: [
    {
      title: "Small",
      additionalPrice: 0,
    },
    {
      title: "Medium",
      additionalPrice: 4,
    },
    {
      title: "Large",
      additionalPrice: 6,
    },
  ],
};

type Menu = {
  id: number;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
}[];

export const menu: Menu = [
  {
    id: 1,
    slug: "pastas",
    title: "Italian Pastas",
    desc: "Savor the taste of perfection with our exquisite Italian handmade pasta menu.",
    img: "/temporary/m1.png",
    color: "white",
  },
  {
    id: 2,
    slug: "burgers",
    title: "Juicy Burgers",
    desc: "Burger Bliss: Juicy patties, bold flavors, and gourmet toppings galore.",
    img: "/temporary/m2.png",
    color: "black",
  },
  {
    id: 3,
    slug: "pizzas",
    title: "Cheesy Pizzas",
    desc: "Pizza Paradise: Irresistible slices, mouthwatering toppings, and cheesy perfection.",
    img: "/temporary/m3.png",
    color: "white",
  },
];
