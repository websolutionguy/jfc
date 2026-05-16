import { Category, Product, Review, GalleryItem, Branch } from '../types';

export const categories: Category[] = [
  { id: 'fried-chicken', name: 'Fried Chicken', image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500&auto=format&fit=crop&q=60' },
  { id: 'burgers', name: 'Burgers', image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&auto=format&fit=crop&q=60' },
  { id: 'rice-meals', name: 'Rice Meals', image: 'https://images.unsplash.com/photo-1569058242252-623df46b5025?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 'drinks', name: 'Drinks', image: 'https://images.unsplash.com/photo-1665359045452-bfa257a2a6bf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 'snacks', name: 'Snacks', image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500&auto=format&fit=crop&q=60' },
  { id: 'combos', name: 'Combos', image: 'https://images.unsplash.com/photo-1551782450-17144efb9c50?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 'desserts', name: 'Desserts', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&auto=format&fit=crop&q=60' },
];

export const products: Product[] = [
  // Fried Chicken
  {
    id: 'fc1',
    name: 'Classic Crispy Chicken (2pcs)',
    category: 'fried-chicken',
    price: 350,
    description: 'Freshly prepared, breaded, and marinated in our secret blend of spices. Fried to a golden perfection.',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&auto=format&fit=crop&q=60',
    rating: 4.8,
    isPopular: true,
    offerBadge: 'Best Seller'
  },
  {
    id: 'fc2',
    name: 'Spicy Wings (6pcs)',
    category: 'fried-chicken',
    price: 280,
    description: 'Tender wings tossed in our signature hot sauce for that extra kick.',
    image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=800&auto=format&fit=crop&q=60',
    rating: 4.7,
    isPopular: true
  },
  {
    id: 'fc3',
    name: 'Chicken Nuggets (9pcs)',
    category: 'fried-chicken',
    price: 220,
    description: 'Bite-sized pieces of juicy chicken, lightly breaded and fried.',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=800&auto=format&fit=crop&q=60',
    rating: 4.5
  },
  {
    id: 'fc4',
    name: 'Crispy Chicken Strips',
    category: 'fried-chicken',
    price: 310,
    description: 'Boneless chicken strips, marinated and fried to perfection.',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.6,
    isPopular: true
  },
  {
    id: 'fc5',
    name: 'Thai Fried Chicken',
    category: 'fried-chicken',
    price: 380,
    description: 'Crispy chicken with a hint of Thai spices and lemon.',
    image: 'https://images.unsplash.com/photo-1516684669134-de6f7c473a2a?w=800&auto=format&fit=crop&q=60',
    rating: 4.4
  },
  {
    id: 'fc6',
    name: 'Drumstick Special (4pcs)',
    category: 'fried-chicken',
    price: 490,
    description: 'Only the best drumsticks, fried with our signature breading.',
    image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=800&auto=format&fit=crop&q=60',
    rating: 4.9,
    isPopular: true
  },
  {
    id: 'fc7',
    name: 'Chicken Popcorn (Large)',
    category: 'fried-chicken',
    price: 240,
    description: 'Miniature bites of massive flavor.',
    image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?w=800&auto=format&fit=crop&q=60',
    rating: 4.3
  },
  {
    id: 'fc8',
    name: 'Full Roast Chicken',
    category: 'fried-chicken',
    price: 980,
    description: 'Whole chicken roasted with herbs and butter.',
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&auto=format&fit=crop&q=60',
    rating: 4.8
  },

  // Burgers
  {
    id: 'b1',
    name: 'Classic Beef Burger',
    category: 'burgers',
    price: 390,
    description: 'Prime beef patty with cheese, pickles, and our house sauce.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=60',
    rating: 4.7,
    isPopular: true
  },
  {
    id: 'b2',
    name: 'Spicy Zinger Burger',
    category: 'burgers',
    price: 420,
    description: 'Juicy spicy chicken fillet topped with fresh lettuce and creamy mayo.',
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&auto=format&fit=crop&q=60',
    rating: 4.8,
    isPopular: true,
    offerBadge: 'Spicy'
  },
  {
    id: 'b3',
    name: 'Cheese Explosion Burger',
    category: 'burgers',
    price: 450,
    description: 'Triple cheese with a double beef patty.',
    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=800&auto=format&fit=crop&q=60',
    rating: 4.9,
    isPopular: true
  },
  {
    id: 'b4',
    name: 'Mushroom Swiss Burger',
    category: 'burgers',
    price: 410,
    description: 'Beef patty topped with sautéed mushrooms and Swiss cheese.',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=800&auto=format&fit=crop&q=60',
    rating: 4.6
  },
  {
    id: 'b5',
    name: 'Barbecue Bacon Burger',
    category: 'burgers',
    price: 480,
    description: 'Smoky BBQ sauce, crispy beef bacon, and onion rings.',
    image: 'https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?w=800&auto=format&fit=crop&q=60',
    rating: 4.8
  },
  {
    id: 'b6',
    name: 'Chicken Hawaiian Burger',
    category: 'burgers',
    price: 380,
    description: 'Grilled chicken with pineapple slices and teriyaki sauce.',
    image: 'https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?w=800&auto=format&fit=crop&q=60',
    rating: 4.4
  },
  {
    id: 'b7',
    name: 'Veggie Delite Burger',
    category: 'burgers',
    price: 280,
    description: 'Crispy vegetable patty with fresh greens and healthy mayo.',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&auto=format&fit=crop&q=60',
    rating: 4.2
  },
  {
    id: 'b8',
    name: 'The Mega Monster',
    category: 'burgers',
    price: 750,
    description: 'Huge 4-layer burger for the ultimate hunger.',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800&auto=format&fit=crop&q=60',
    rating: 4.9,
    offerBadge: 'Monster'
  },

  // Rice Meals
  {
    id: 'r1',
    name: 'Chicken Rice Bowl',
    category: 'rice-meals',
    price: 320,
    description: 'Fragrant rice served with crispy chicken strips and gravy.',
    image: 'https://images.unsplash.com/photo-1636401870585-a8852371e84a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.5,
    isPopular: true
  },
  {
    id: 'r2',
    name: 'Beef Teriyaki Rice',
    category: 'rice-meals',
    price: 450,
    description: 'Slices of tender beef in teriyaki sauce over steamed rice.',
    image: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=800&auto=format&fit=crop&q=60',
    rating: 4.7
  },
  {
    id: 'r3',
    name: 'Egg Fried Rice',
    category: 'rice-meals',
    price: 220,
    description: 'Classic Chinese style egg fried rice.',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&auto=format&fit=crop&q=60',
    rating: 4.3
  },
  {
    id: 'r4',
    name: 'Shrimp Fried Rice',
    category: 'rice-meals',
    price: 490,
    description: 'Premium rice fried with fresh shrimps and vegetables.',
    image: 'https://images.unsplash.com/photo-1680674774705-90b4904b3a7f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.8
  },
  {
    id: 'r5',
    name: 'Peri Peri Chicken Rice',
    category: 'rice-meals',
    price: 380,
    description: 'Spicy peri peri chicken served with buttered rice.',
    image: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=800&auto=format&fit=crop&q=60',
    rating: 4.6
  },
  {
    id: 'r6',
    name: 'Mexican Rice Bowl',
    category: 'rice-meals',
    price: 350,
    description: 'Zesty rice with beans, corn, and grilled chicken.',
    image: 'https://images.unsplash.com/photo-1636401870585-a8852371e84a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.5
  },
  {
    id: 'r7',
    name: 'Butter Chicken Rice',
    category: 'rice-meals',
    price: 420,
    description: 'Creamy butter chicken served with premium basmati rice.',
    image: 'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?w=800&auto=format&fit=crop&q=60',
    rating: 4.9
  },
  {
    id: 'r8',
    name: 'Hyderabadi Biryani',
    category: 'rice-meals',
    price: 550,
    description: 'Authentic Hyderabadi chicken biryani with special spices.',
    image: 'https://images.unsplash.com/photo-1728745118618-941ec839208f?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 5.0
  },

  // Drinks
  {
    id: 'd1',
    name: 'Coca Cola (500ml)',
    category: 'drinks',
    price: 45,
    description: 'Refreshing classic coca cola.',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=800&auto=format&fit=crop&q=60',
    rating: 4.9
  },
  {
    id: 'd2',
    name: 'Lemon Iced Tea',
    category: 'drinks',
    price: 120,
    description: 'Chilled iced tea with a twist of lemon.',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&auto=format&fit=crop&q=60',
    rating: 4.6
  },
  {
    id: 'd3',
    name: 'Fresh Strawberry Shake',
    category: 'drinks',
    price: 250,
    description: 'Creamy shake made with real strawberries.',
    image: 'https://images.unsplash.com/photo-1579954115563-e72bf1381629?w=800&auto=format&fit=crop&q=60',
    rating: 4.8
  },
  {
    id: 'd4',
    name: 'Chocolate Milkshake',
    category: 'drinks',
    price: 240,
    description: 'Rich chocolate milkshake topped with cream.',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&auto=format&fit=crop&q=60',
    rating: 4.7
  },
  {
    id: 'd5',
    name: 'Mango Lassi',
    category: 'drinks',
    price: 180,
    description: 'Traditional yogurt-based mango drink.',
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696?w=800&auto=format&fit=crop&q=60',
    rating: 4.9
  },
  {
    id: 'd6',
    name: 'Cold Coffee with Ice Cream',
    category: 'drinks',
    price: 210,
    description: 'Iced coffee blended with vanilla ice cream.',
    image: 'https://images.unsplash.com/photo-1655731725805-1798e1d88e04?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.8
  },
  {
    id: 'd7',
    name: 'Mint Lemonade',
    category: 'drinks',
    price: 130,
    description: 'Refreshing mint and lemon cooler.',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&auto=format&fit=crop&q=60',
    rating: 4.5
  },
  {
    id: 'd8',
    name: 'Mineral Water',
    category: 'drinks',
    price: 25,
    description: 'Pure mineral water.',
    image: 'https://images.unsplash.com/photo-1612134678926-7592c521aa52?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.2
  },

  // Snacks
  {
    id: 's1',
    name: 'French Fries (Large)',
    category: 'snacks',
    price: 180,
    description: 'Golden, crispy, potato goodness seasoned to perfection.',
    image: 'https://images.unsplash.com/photo-1736826201130-c8a3d4e1427c?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.6,
    isPopular: true
  },
  {
    id: 's2',
    name: 'Onion Rings (8pcs)',
    category: 'snacks',
    price: 160,
    description: 'Crispy batter-fried onion rings.',
    image: 'https://images.unsplash.com/photo-1625938146369-adc83368bda7?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.4
  },
  {
    id: 's3',
    name: 'Potato Wedges',
    category: 'snacks',
    price: 190,
    description: 'Thick cut potato wedges with herb seasoning.',
    image: 'https://images.unsplash.com/photo-1565310022152-79c62f598627?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.5
  },
  {
    id: 's4',
    name: 'Garlic Bread with Cheese',
    category: 'snacks',
    price: 210,
    description: 'Toasted bread with garlic butter and melted cheese.',
    image: 'https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?q=80&w=1196&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.7
  },
  {
    id: 's5',
    name: 'Nachos Supreme',
    category: 'snacks',
    price: 350,
    description: 'Crispy nachos with cheese sauce, salsa, and jalapeños.',
    image: 'https://images.unsplash.com/photo-1582169296194-e4d644c48063?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.8
  },
  {
    id: 's6',
    name: 'Coleslaw',
    category: 'snacks',
    price: 80,
    description: 'Freshly shredded cabbage and carrots in creamy dressing.',
    image: 'https://images.unsplash.com/photo-1630409350018-0e06ea178b92?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.4
  },
  {
    id: 's7',
    name: 'Mozzarella Sticks (4pcs)',
    category: 'snacks',
    price: 280,
    description: 'Breaded mozzarella cheese fried until gooey.',
    image: 'https://images.unsplash.com/photo-1531749668029-2db88e4276c7?w=800&auto=format&fit=crop&q=60',
    rating: 4.9
  },
  {
    id: 's8',
    name: 'Fried Calamari',
    category: 'snacks',
    price: 450,
    description: 'Lightly breaded and fried squid rings with tartar sauce.',
    image: 'https://images.unsplash.com/photo-1579670039509-e21e75007e4c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.6
  },

  // Combos
  {
    id: 'c1',
    name: 'Combo Family Bucket',
    category: 'combos',
    price: 1250,
    description: '8 pieces of chicken, 2 burgers, 2 large fries and a 1.5L drink.',
    image: 'https://images.unsplash.com/photo-1734949160721-c9bf35d66fd1?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.9,
    offerBadge: '15% OFF',
    isPopular: true
  },
  {
    id: 'c2',
    name: 'Solo Meal Deal',
    category: 'combos',
    price: 490,
    description: '2 pieces chicken, 1 fries, 1 soft drink.',
    image: 'https://plus.unsplash.com/premium_photo-1683657860500-36c53be84668?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.7
  },
  {
    id: 'c3',
    name: 'Double Burger Combo',
    category: 'combos',
    price: 850,
    description: '2 Zinger burgers, 1 large wedges, 2 soft drinks.',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&auto=format&fit=crop&q=60',
    rating: 4.8
  },
  {
    id: 'c4',
    name: 'Chicken and Rice Combo',
    category: 'combos',
    price: 420,
    description: 'Chicken rice bowl, 1 piece chicken, 1 soft drink.',
    image: 'https://images.unsplash.com/photo-1772693471187-6e7d364f99ee?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.6
  },
  {
    id: 'c5',
    name: 'Wings Lover Platter',
    category: 'combos',
    price: 720,
    description: '12 pieces spicy wings, large fries, 2 soft drinks.',
    image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=800&auto=format&fit=crop&q=60',
    rating: 4.9,
    isPopular: true
  },
  {
    id: 'c6',
    name: 'Snack Attack Combo',
    category: 'combos',
    price: 350,
    description: '9 pieces nuggets, 1 small fries, 1 juice.',
    image: 'https://images.unsplash.com/photo-1773620494293-e9e075dd48fd?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.5
  },
  {
    id: 'c7',
    name: 'Party Pack For 4',
    category: 'combos',
    price: 1850,
    description: '4 burgers, 8 pieces wings, 2 large fries, 4 drinks.',
    image: 'https://images.unsplash.com/photo-1645066803665-d16a79a21566?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.8
  },
  {
    id: 'c8',
    name: 'The Big JFC feast',
    category: 'combos',
    price: 2500,
    description: '12 pieces chicken, 4 burgers, 2 rice bowls, 4 drinks.',
    image: 'https://images.unsplash.com/photo-1732185269471-b62b52ca46f9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 5.0,
    offerBadge: 'Value'
  },

  // Desserts
  {
    id: 'ds1',
    name: 'Chocolate Lava Cake',
    category: 'desserts',
    price: 220,
    description: 'Warm chocolate cake with a gooey molten center.',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&auto=format&fit=crop&q=60',
    rating: 4.8,
    isPopular: true
  },
  {
    id: 'ds2',
    name: 'Vanilla Ice Cream Bowl',
    category: 'desserts',
    price: 120,
    description: 'Premium vanilla ice cream topped with chocolate syrup.',
    image: 'https://images.unsplash.com/photo-1561845730-208ad5910553?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.5
  },
  {
    id: 'ds3',
    name: 'Strawberry Cheesecake',
    category: 'desserts',
    price: 320,
    description: 'Rich and creamy cheesecake with strawberry topping.',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=800&auto=format&fit=crop&q=60',
    rating: 4.9
  },
  {
    id: 'ds4',
    name: 'Brownie with Ice Cream',
    category: 'desserts',
    price: 250,
    description: 'Fudge brownie served warm with a scoop of vanilla ice cream.',
    image: 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=800&auto=format&fit=crop&q=60',
    rating: 4.7
  },
  {
    id: 'ds5',
    name: 'Apple Pie',
    category: 'desserts',
    price: 180,
    description: 'Warm, flaky crust with sweet apple filling.',
    image: 'https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?w=800&auto=format&fit=crop&q=60',
    rating: 4.6
  },
  {
    id: 'ds6',
    name: 'Red Velvet Cupcake',
    category: 'desserts',
    price: 150,
    description: 'Classic red velvet cupcake with cream cheese frosting.',
    image: 'https://images.unsplash.com/photo-1587668178277-295251f900ce?w=800&auto=format&fit=crop&q=60',
    rating: 4.7
  },
  {
    id: 'ds7',
    name: 'Fruit Salad',
    category: 'desserts',
    price: 160,
    description: 'Fresh seasonal fruits cut daily.',
    image: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=800&auto=format&fit=crop&q=60',
    rating: 4.4
  },
  {
    id: 'ds8',
    name: 'Tiramisu',
    category: 'desserts',
    price: 380,
    description: 'Authentic Italian coffee-flavored dessert.',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&auto=format&fit=crop&q=60',
    rating: 4.9
  }
];

export const reviews: Review[] = [
  {
    id: 'r1',
    user: 'Tahmid Ahmed',
    rating: 5,
    comment: 'The best fried chicken in Dhaka! Always crispy and juicy.',
    avatar: 'https://i.pravatar.cc/150?u=tahmid',
    date: '2 days ago'
  },
  {
    id: 'r2',
    user: 'Sarah Kabir',
    rating: 4,
    comment: 'Love the Zinger burger. Service was quick too.',
    avatar: 'https://i.pravatar.cc/150?u=sarah',
    date: '1 week ago'
  }
];

export const gallery: GalleryItem[] = [
  { id: 'g1', image: 'https://images.unsplash.com/photo-1655463485347-f3dd84fead5b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Our Restaurant' },
  { id: 'g2', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&auto=format&fit=crop&q=60', title: 'Fresh Preparation' },
  { id: 'g3', image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&auto=format&fit=crop&q=60', title: 'Signature Wings' }
];

export const branches: Branch[] = [
  {
    id: 'b1',
    name: 'Dhanmondi Branch',
    address: 'House 12, Road 27, Dhanmondi, Dhaka',
    phone: '+880 1234-567890',
    hours: '10:00 AM - 11:00 PM',
    mapUrl: '#'
  },
  {
    id: 'b2',
    name: 'Uttara Branch',
    address: 'Sector 3, Uttara, Dhaka',
    phone: '+880 1234-567891',
    hours: '10:00 AM - 11:30 PM',
    mapUrl: '#'
  }
];
