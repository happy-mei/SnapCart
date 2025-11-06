import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

// Mock item data for lifestyle analysis
// const purchasedItems = [
//   // Dairy
//   { name: "Milk", category: "Dairy", count: 8 },
//   { name: "Cheese", category: "Dairy", count: 4 },
//   { name: "Yogurt", category: "Dairy", count: 3 },
//   // Meat
//   { name: "Chicken Breast", category: "Meat & Seafood", count: 5 },
//   { name: "Beef Mince", category: "Meat & Seafood", count: 3 },
//   { name: "Salmon", category: "Meat & Seafood", count: 2 },
//   // Desserts
//   { name: "Chocolate Bar", category: "Snacks", count: 6 },
//   { name: "Ice Cream", category: "Snacks", count: 4 },
//   { name: "Cookies", category: "Snacks", count: 5 },
//   // Produce
//   { name: "Apples", category: "Fresh Produce", count: 4 },
//   { name: "Bananas", category: "Fresh Produce", count: 6 },
//   { name: "Spinach", category: "Fresh Produce", count: 3 },
//   { name: "Carrots", category: "Fresh Produce", count: 3 },
//   // Carbs
//   { name: "Bread", category: "Pantry", count: 7 },
//   { name: "Pasta", category: "Pantry", count: 4 },
//   { name: "Rice", category: "Pantry", count: 3 },
// ];

// Calculate lifestyle tags based on shopping patterns
// const getLifestyleTags = () => {
//   const tags = [];
  
//   // Count desserts/chocolate
//   const sweetItems = purchasedItems.filter(item => 
//     item.name.toLowerCase().includes('chocolate') || 
//     item.name.toLowerCase().includes('ice cream') ||
//     item.name.toLowerCase().includes('cookies') ||
//     item.name.toLowerCase().includes('dessert') ||
//     item.name.toLowerCase().includes('candy')
//   );
//   const sweetCount = sweetItems.reduce((sum, item) => sum + item.count, 0);
  
//   // Count meat items
//   const meatItems = purchasedItems.filter(item => item.category === "Meat & Seafood");
//   const meatCount = meatItems.reduce((sum, item) => sum + item.count, 0);
  
//   // Count carb items
//   const carbItems = purchasedItems.filter(item =>
//     item.name.toLowerCase().includes('bread') ||
//     item.name.toLowerCase().includes('pasta') ||
//     item.name.toLowerCase().includes('rice') ||
//     item.name.toLowerCase().includes('noodle')
//   );
//   const carbCount = carbItems.reduce((sum, item) => sum + item.count, 0);
  
//   // Count vegetarian items
//   const veggieItems = purchasedItems.filter(item => item.category === "Fresh Produce");
//   const veggieCount = veggieItems.reduce((sum, item) => sum + item.count, 0);
  
//   // Determine tags based on thresholds
//   if (sweetCount >= 10) {
//     tags.push({ icon: "🍫", label: "Sweet Tooth", description: "High frequency of desserts or chocolate" });
//   }
  
//   if (meatCount >= 8) {
//     tags.push({ icon: "🥩", label: "Meat Lover", description: "Frequent meat items" });
//   }
  
//   if (carbCount >= 10) {
//     tags.push({ icon: "🍞", label: "Carb Lover", description: "Lots of bread, pasta, rice" });
//   }
  
//   if (veggieCount >= 12 && meatCount < 5) {
//     tags.push({ icon: "🥦", label: "Vegetarian", description: "Mostly plant-based items" });
//   }
  
//   return tags;
// };


        // { icon: "🥦", label: "Healthy Eater", description: "Frequently purchases fresh produce and organic items." },
        // { icon: "🌱", label: "Eco-Friendly", description: "Buys sustainable and environmentally friendly products."},
        // { icon: "🍽️", label: "Home Chef", description: "Regularly buys ingredients for cooking at home." },
        // { icon: "🛒", label: "Budget Shopper", description: "Looks for deals and discounts while shopping." },
        // { icon: "🍫", label: "Snack Lover", description: "Enjoys a variety of snacks and treats." },
        // { icon: "☕", label: "Coffee Enthusiast", description: "Frequently purchases coffee and related products." },
        // { icon: "🍷", label: "Wine Aficionado", description: "Often buys wine and gourmet beverages." },
        // { icon: "🏋️‍♂️", label: "Fitness Focused", description: "Purchases health supplements and fitness-related items." },
        // { icon: "👶", label: "Family Oriented", description: "Buys products catering to family needs and children." },
        // { icon: "🌍", label: "Global Tastes", description: "Enjoys trying international and exotic foods." },
        // { icon: "🍔", label: "Fast Food Fan", description: "Frequently buys fast food and convenience meals." },
        // { icon: "🎂", label: "Sweet Tooth", description: "Loves desserts and sugary treats." },
        // { icon: "🥩", label: "Meat Lover", description: "Prefers meat and seafood products." },
        // { icon: "🍞", label: "Carb Lover", description: "Enjoys bread, pasta, and other carbohydrate-rich foods." },
        // { icon: "💧", label: "Hydration Conscious", description: "Regularly purchases water and healthy beverages." },