// general images
import banner from "./banner.png";
import app_store from "./app_store.png";
import play_store from "./play_store.png";
import footer_img from "./footer_img.png";
import fruits_right from "./fruits_right.webp";
import logo from "./logo.png";
import hero_img1 from "./hero_img1.webp";
import hero_img2 from "./hero_img2.webp";
import hero_img3 from "./hero_img3.webp";
import hero_left_img from "./hero_left_img.webp";
import leef_layer_bg from "./leef_layer_bg.png";
import payment from "./payment.png";
import pink_bg from "./pink_bg.jpg";
import vegetables_left from "./vegetables_left.webp";
import organic_fruits from "./organic_fruits.webp";
import organic_vegetables from "./organic_vegetables.webp";
import profile_pic from "./profile_pic.webp";
import about_hero from "./about_hero.webp";
import rice1 from "./rice1.jpg";
import rice2 from "./rice2.jpg";

// blogs images
import blog_1 from "./blog_1.webp";
import blog_2 from "./blog_2.webp";
import blog_3 from "./blog_3.webp";

// brands logo
import brand_1 from "./brand_1.webp";
import brand_2 from "./brand_2.webp";
import brand_3 from "./brand_3.webp";
import brand_4 from "./brand_4.webp";
import brand_5 from "./brand_5.webp";

// categories
import dry_fruit from "./dry_fruit.webp";
import eggs from "./eggs.webp";
import flakes from "./flakes.webp";
import fruits from "./fruits.webp";
import vegetable from "./vegetable.webp";
import juice from "./juice.webp";
import spices from "./spices.webp";
import rice from "./rice.webp";

// products
import cashews1 from "./cashews1.webp";
import cashews2 from "./cashews2.webp";
import corn1 from "./corn1.webp";
import corn2 from "./corn2.webp";
import garlic1 from "./garlic1.webp";
import garlic2 from "./garlic2.webp";
import gourd1 from "./gourd1.webp";
import gourd2 from "./gourd2.webp";
import mushrooms1 from "./mushrooms1.webp";
import mushrooms2 from "./mushrooms2.webp";
import organic_broccoli1 from "./organic_broccoli1.webp";
import organic_broccoli2 from "./organic_broccoli2.webp";
import peas1 from "./peas1.webp";
import peas2 from "./pease2.webp";
import potatos1 from "./potatos1.webp";
import potatos2 from "./potatos2.webp";
import pumpkin1 from "./pumpkin1.webp";
import pumpkin2 from "./pumpkin2.webp";
import raisins1 from "./raisins1.webp";
import raisins2 from "./raisins2.webp";
import redcabbage1 from "./red_cabbage1.webp";
import redcabbage2 from "./red_cabbage2.webp";
import toordal1 from "./toordal1.png";
import toordal2 from "./toordal2.webp";
import atta1 from "./atta1.webp";
import atta2 from "./atta2.avif";
import sugar1 from "./sugar1.avif";
import sugar2 from "./sugar2.png";
import oil1 from "./oil1.avif";
import oil2 from "./oil2.png";
import turmeric1 from "./turmeric1.webp";
import turmeric2 from "./turmeric2.webp";
import chilli1 from "./chilli1.webp";
import chilli2 from "./chilli2.webp";
import coriander1 from "./coriander1.webp";
import coriander2 from "./coriander2.webp";
import garammasala1 from "./garammasala1.webp";
import garammasala2 from "./garammasala2.webp";
import sambar1 from "./sambar1.webp";
import sambar2 from "./sambar2.jpg";
import rasam1 from "./rasam1.jpg";
import rasam2 from "./rasam2.jpg";
import chicken1 from "./chicken1.webp";
import chicken2 from "./chicken2.webp";

export const assets = {
  banner,
  brand_1,
  brand_2,
  brand_3,
  brand_4,
  brand_5,
  play_store,
  app_store,
  footer_img,
  fruits_right,
  logo,
  hero_img1,
  hero_img2,
  hero_img3,
  hero_left_img,
  pink_bg,
  leef_layer_bg,
  payment,
  vegetables_left,
  organic_fruits,
  organic_vegetables,
  profile_pic,
  about_hero,
};
export const categories = [
  { _id: 1, image: dry_fruit, name: "Dry Fruits" },
  { _id: 2, image: eggs, name: "Eggs" },
  { _id: 3, image: flakes, name: "Flakes" },
  { _id: 4, image: fruits, name: "Fruits" },
  { _id: 5, image: vegetable, name: "Vegetables" },
  { _id: 6, image: juice, name: "Fresh Juices" },
  { _id: 7, image: spices, name: "Spices" },
  { _id: 8, image: rice, name: "Rice" },
];
export const products = [
  {
    _id: 1,
    name: "Organic Cashews",
    price: 150,
    offerPrice: 120,
    smallDesc: "Crunchy and healthy cashews.",
    longDesc:
      "Premium organic cashews packed with nutrition. Perfect for snacking or adding to recipes.",
    weight: "250g",
    category: "Dry Fruits",
    images: [cashews1, cashews2],
  },
  {
    _id: 2,
    name: "Sweet Corn",
    price: 100,
    offerPrice: 80,
    smallDesc: "Fresh and juicy corn.",
    longDesc:
      "Hand-picked sweet corn rich in fiber and vitamins. Great for soups, salads, and snacks.",
    weight: "500g",
    category: "Vegetables",
    images: [corn1, corn2],
  },
  {
    _id: 3,
    name: "Fresh Garlic",
    price: 50,
    offerPrice: 40,
    smallDesc: "Strong aroma and flavor.",
    longDesc:
      "Fresh garlic bulbs, perfect for seasoning, sauces, and boosting immunity.",
    weight: "250g",
    category: "Vegetables",
    images: [garlic1, garlic2],
  },
  {
    _id: 4,
    name: "Bottle Gourd",
    price: 90,
    offerPrice: 70,
    smallDesc: "Light and refreshing vegetable.",
    longDesc:
      "Organic bottle gourd, rich in water content and essential nutrients.",
    weight: "1kg",
    category: "Vegetables",
    images: [gourd1, gourd2],
  },
  {
    _id: 5,
    name: "Button Mushrooms",
    price: 120,
    offerPrice: 100,
    smallDesc: "Fresh white mushrooms.",
    longDesc:
      "Farm fresh button mushrooms, ideal for stir-fry, pasta, and pizzas.",
    weight: "200g",
    category: "Vegetables",
    images: [mushrooms1, mushrooms2],
  },
  {
    _id: 6,
    name: "Organic Broccoli",
    price: 200,
    offerPrice: 180,
    smallDesc: "Rich in vitamins.",
    longDesc:
      "Organic broccoli packed with antioxidants and vitamins. A must-have for healthy meals.",
    weight: "400g",
    category: "Vegetables",
    images: [organic_broccoli1, organic_broccoli2],
  },
  {
    _id: 7,
    name: "Green Peas",
    price: 170,
    offerPrice: 140,
    smallDesc: "Sweet and tender peas.",
    longDesc:
      "Fresh green peas full of flavor. Perfect for curries, soups, and rice dishes.",
    weight: "500g",
    category: "Vegetables",
    images: [peas1, peas2],
  },
  {
    _id: 8,
    name: "Fresh Potatoes",
    price: 90,
    offerPrice: 80,
    smallDesc: "Staple food ingredient.",
    longDesc:
      "High-quality farm fresh potatoes. Ideal for fries, curries, and daily meals.",
    weight: "2kg",
    category: "Vegetables",
    images: [potatos1, potatos2],
  },
  {
    _id: 9,
    name: "Organic Pumpkin",
    price: 160,
    offerPrice: 140,
    smallDesc: "Rich in beta carotene.",
    longDesc: "Fresh organic pumpkin, great for soups, pies, and curries.",
    weight: "1kg",
    category: "Vegetables",
    images: [pumpkin1, pumpkin2],
  },
  {
    _id: 10,
    name: "Raisins",
    price: 220,
    offerPrice: 200,
    smallDesc: "Sweet and chewy dry fruit.",
    longDesc:
      "Premium quality raisins packed with natural sweetness and energy.",
    weight: "250g",
    category: "Dry Fruits",
    images: [raisins1, raisins2],
  },
  {
    _id: 11,
    name: "Red Cabbage",
    price: 160,
    offerPrice: 130,
    smallDesc: "Crunchy and colorful.",
    longDesc:
      "Farm fresh red cabbage, grown with care and packed with natural goodness. Its vibrant purple-red leaves are crisp, tender, and loaded with vitamins, minerals, and antioxidants that support a healthy lifestyle. Perfect for adding color and crunch to fresh salads, enhancing flavor in stir-fries, or making delicious homemade pickles. Whether enjoyed raw, sautéed, or fermented, this versatile vegetable brings both nutrition and taste to your everyday meals.",
    weight: "1kg",
    category: "Vegetables",
    images: [redcabbage1, redcabbage2],
  },
  {
    _id: 12,
    name: "Basmati Rice",
    price: 120,
    offerPrice: 100,
    smallDesc: "Premium long grain basmati rice.",
    longDesc:
      "High quality basmati rice with rich aroma and long grains. Perfect for biryani and daily cooking.",
    weight: "1kg",
    category: "Rice & Grains",
    images: [rice1, rice2],
  },
  {
    _id: 13,
    name: "Toor Dal",
    price: 140,
    offerPrice: 125,
    smallDesc: "Fresh and nutritious toor dal.",
    longDesc:
      "High quality toor dal rich in protein. Ideal for making sambar and dal recipes.",
    weight: "1kg",
    category: "Pulses",
    images: [toordal1, toordal2],
  },
  {
    _id: 14,
    name: "Wheat Flour (Atta)",
    price: 60,
    offerPrice: 55,
    smallDesc: "Soft and fine wheat flour.",
    longDesc:
      "Premium wheat flour suitable for chapati, poori, and other Indian breads.",
    weight: "1kg",
    category: "Flour",
    images: [atta1, atta2],
  },
  {
    _id: 15,
    name: "Sugar",
    price: 45,
    offerPrice: 40,
    smallDesc: "Pure white sugar crystals.",
    longDesc: "Refined sugar suitable for tea, coffee, sweets, and cooking.",
    weight: "1kg",
    category: "Essentials",
    images: [sugar1, sugar2],
  },
  {
    _id: 16,
    name: "Sunflower Oil",
    price: 180,
    offerPrice: 165,
    smallDesc: "Healthy cooking oil.",
    longDesc: "Refined sunflower oil ideal for frying, cooking, and daily use.",
    weight: "1L",
    category: "Oils",
    images: [oil1, oil2],
  },
  {
    _id: 17,
    name: "Turmeric Powder",
    price: 35,
    offerPrice: 30,
    smallDesc: "Pure turmeric powder.",
    longDesc:
      "Fresh turmeric powder with rich color and aroma. Essential for Indian cooking.",
    weight: "100g",
    category: "Masala",
    images: [turmeric1, turmeric2],
  },
  {
    _id: 18,
    name: "Red Chilli Powder",
    price: 50,
    offerPrice: 45,
    smallDesc: "Spicy red chilli powder.",
    longDesc:
      "Finely ground red chilli powder adding spice and color to dishes.",
    weight: "100g",
    category: "Masala",
    images: [chilli1, chilli2],
  },
  {
    _id: 19,
    name: "Coriander Powder",
    price: 40,
    offerPrice: 35,
    smallDesc: "Fresh coriander powder.",
    longDesc: "Premium coriander powder for enhancing flavor in curries.",
    weight: "100g",
    category: "Masala",
    images: [coriander1, coriander2],
  },
  {
    _id: 20,
    name: "Garam Masala",
    price: 60,
    offerPrice: 55,
    smallDesc: "Traditional garam masala mix.",
    longDesc: "Authentic blend of spices for rich aroma and taste.",
    weight: "100g",
    category: "Masala",
    images: [garammasala1, garammasala2],
  },
  {
    _id: 21,
    name: "Sambar Powder",
    price: 55,
    offerPrice: 50,
    smallDesc: "Traditional sambar masala.",
    longDesc:
      "Fresh sambar powder made from selected spices for authentic South Indian taste.",
    weight: "200g",
    category: "Masala",
    images: [sambar1, sambar2],
  },
  {
    _id: 22,
    name: "Rasam Powder",
    price: 45,
    offerPrice: 40,
    smallDesc: "Traditional rasam masala.",
    longDesc: "Flavorful rasam powder perfect for making traditional rasam.",
    weight: "100g",
    category: "Masala",
    images: [rasam1, rasam2],
  },
  {
    _id: 23,
    name: "Chicken Masala",
    price: 65,
    offerPrice: 60,
    smallDesc: "Special chicken masala mix.",
    longDesc: "Rich spice blend ideal for making delicious chicken curry.",
    weight: "100g",
    category: "Masala",
    images: [chicken1, chicken2],
  },
];
export const blogs = [
  {
    _id: 1,
    image: blog_1,
    title: "The Health Benefits of Organic Foods",
    date: "August 15, 2023",
    desc: "Discover the numerous health advantages of incorporating organic foods into your diet. From higher nutrient levels to reduced exposure to pesticides, learn why organic is a better choice for your well-being.",
  },
  {
    _id: 2,
    image: blog_2,
    title: "Top 10 Superfoods You Should Include in Your Diet",
    date: "September 10, 2023",
    desc: "Explore the top 10 superfoods that can boost your health and vitality. From antioxidant-rich berries to nutrient-dense leafy greens, find out how these foods can enhance your diet and overall wellness.",
  },
  {
    _id: 3,
    image: blog_3,
    title: "Sustainable Eating: How to Make Eco-Friendly Food Choices",
    date: "October 5, 2023",
    desc: "Learn how to make sustainable eating choices that benefit both your health and the environment. Discover tips on reducing food waste, choosing local and seasonal produce, and supporting eco-friendly farming practices.",
  },
];

export const myOrders = [
  {
    _id: 1,
    date: "2025-08-20",
    status: "Delivered",
    totalAmount: 15.5,
    paymentMethod: "COD",
  },
  {
    _id: 2,
    date: "2025-08-22",
    status: "Processing",
    totalAmount: 12,
    paymentMethod: "ONLINE",
  },
  {
    _id: 3,
    date: "2025-08-25",
    status: "Shipped",
    totalAmount: 7,
    paymentMethod: "ONLINE",
  },
];
