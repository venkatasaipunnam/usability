/* eslint-disable */
const { Router } = require('express');

const categories = [
  {
    Id: 'bookcases',
    PId: 'furniture',
    imageId: 'bookcases',
    title: 'Bookcases',
    description: 'Different kinds of book cases.',
  },
  {
    Id: 'chairs',
    PId: 'furniture',
    imageId: 'chairs',
    title: 'Chairs',
    description: 'Different kinds of Chairs.',
  },
  {
    Id: 'tables',
    PId: 'furniture',
    imageId: 'tables',
    title: 'Tables',
    description: 'Different kinds of tables.'
  },
  {
    Id: 'dairy',
    PId: 'grocery',
    imageId: 'dairy',
    title: 'Dairy',
    description: 'Dairy supplies.',
  },
  {
    Id: 'beans',
    PId: 'grocery',
    imageId: 'beans',
    title: 'Beans',
    description: 'Beans supplies.',
  },
  {
    Id: 'pasta',
    PId: 'grocery',
    imageId: 'pasta',
    title: 'Pasta',
    description: 'Pasta supplies.',
  },
  {
    Id: 'paper_products',
    PId: 'grocery',
    imageId: 'paper_products',
    title: 'Paper Products',
    description: 'Paper products supplies.',
  },
  {
    Id: 'cleaning_supplies',
    PId: 'grocery',
    imageId: 'cleaning_supplies',
    title: 'Cleaning Supplies',
    description: 'cleaning supplies.',
  },
  {
    Id: 'desk',
    PId: 'office_supplies',
    imageId: 'desk',
    title: 'Desk Supplies',
    description: 'Desk Supplies,',
  },
  {
    Id: 'filing',
    PId: 'office_supplies',
    imageId: 'filing',
    title: 'Filing Supplies',
    description: 'Filing Supplies',
  },
  {
    Id: 'stationery_mailing',
    PId: 'office_supplies',
    imageId: 'stationery_mailing',
    title: 'Stationery/mailing supplies',
    description: 'Stationery/mailing supplies',
  },
  {
    Id: 'shoes',
    PId: 'clothing',
    imageId: 'shoes',
    title: 'Shoes',
    description: 'Shoes',
  },
  {
    Id: 'socks',
    PId: 'clothing',
    imageId: 'socks',
    title: 'Socks',
    description: 'Socks',
  },
  {
    Id: 'dresses',
    PId: 'clothing',
    imageId: 'dresses',
    title: 'Dresses',
    description: 'Dresses',
  },
  {
    Id: 'jackets',
    PId: 'clothing',
    imageId: 'jackets',
    title: 'Jackets',
    description: 'Jackets',
  },
  {
    Id: 'shorts',
    PId: 'clothing',
    imageId: 'shorts',
    title: 'Shorts',
    description: 'Shorts',
  },
  {
    Id: 'shirts',
    PId: 'clothing',
    imageId: 'shirts',
    title: 'Shirts',
    description: 'Shirts',
  },
  {
    Id: 'computers',
    PId: 'electronics',
    imageId: 'computers',
    title: 'Computers',
    description: 'Computers',
  },
  {
    Id: 'tv',
    PId: 'electronics',
    imageId: 'tv',
    title: 'TV',
    description: 'TV',
  },
  {
    Id: 'phones',
    PId: 'electronics',
    imageId: 'phones',
    title: 'Phones',
    description: 'Phones',
  },
  {
    Id: 'sound_system',
    PId: 'electronics',
    imageId: 'sound_system',
    title: 'Sound System',
    description: 'Sound System',
  },
  {
    Id: 'refrigerators',
    PId: 'appliances',
    imageId: 'refrigerators',
    title: 'Refrigerators',
    description: 'Refrigerators',
  },
  {
    Id: 'dishwashers',
    PId: 'appliances',
    imageId: 'dishwashers',
    title: 'Dishwashers',
    description: 'Dishwashers',
  },
  {
    Id: 'microwaves',
    PId: 'appliances',
    imageId: 'microwaves',
    title: 'Microwaves',
    description: 'Microwaves',
  },
  {
    Id: 'washers',
    PId: 'appliances',
    imageId: 'washers',
    title: 'Washers',
    description: 'Washers',
  },
  {
    Id: 'dryers',
    PId: 'appliances',
    imageId: 'dryers',
    title: 'Dryers',
    description: 'Dryers',
  },
]

const products = [
  {
    Id: 'bookcase1',
    PId: 'bookcases',
    imageId: 'bookcases1',
    title: 'Mainstays-3-Shelf-Bookcase-with-Adjustable-Shelves-White',
    description: 'Add the sleek Mainstays 3-Shelf Bookcase with Adjustable Shelves to any room for a functional and stylish look. This sturdy storage unit has a closed back design with one fixed shelf that holds up to 50 lbs, and two adjustable shelves that support up to 35 lbs each. Quick and easy to assemble, this attractive bookshelf is a useful storage option for any office, living room, family room, den and more. At 31" tall the Mainstays 3-Shelf Bookcase is perfect for small and medium rooms where smart, efficient storage is needed. The adjustable shelves accommodate everything from paperbacks to large folios, perfect for small libraries and collections.',
    price: 24.96
  },
  {
    Id: 'bookcase2',
    PId: 'bookcases',
    imageId: 'bookcases2',
    title: 'Portable 8-Cube Bookcase Adjustable Bookshelf Organizer Shelf Unit Folding Storage Shelves Unit Portable Organizer Bookshelf Shelf Rack Grey Blue Pink',
    description: 'Features:\nMulti-Purpose Cube Closet - 8 Cubes in Total Keep Your Shoes, Clothes, Stuffed Animals, Books or Crafts Organized; Nice for Closet Room, Kid?s Room, Study Room, Entryway as well as Office.\n Strong Storage Ability - Each Storage Cube Measures 15 x 12 x 11( L x H x W ), Provides Large Storage Capacity and Holds up to 10lbs, Which could be used for book displaying, shoes storage, toys collection, small green plant and other decorations etc, satisfying your daily storage needs.\n Excellent Stability - Constructed Of Durable ABS Connector and High Quality Laminated non-woven fabric and thickened steel pipe, Safety Strap Equipped for Further Protection.\nEasy To Assemble - The bookcase closet can easy installation, Very simple structure, parts are easy to classify, and tool-free assembly, and be repeated disassembly use, eco-friendly material, can be cleaned with water directly.',
    price: 31.23
  },
  {
    Id: 'bookcase3',
    PId: 'bookcases',
    imageId: 'bookcases3',
    title: '6 Shelf Bookcase Open Storage Swivel Bookcase Revolving Bookshelf 360° Rotating Wood Bookshelves Free Standing Bookshelf Display Rack White',
    description: '[Reliable Raw & Sturdy Design]: The Ansley&HosHo bookshelf is designed with raw materials, which meet the EPA TSCA Title VI and Carb Certification, not only providing great stability and durability but also offering you a safe, healthy, and large storage space in your home bedroom. its perfect for accessorizing, organizing, and storing your items while keeping them tidy and organized at the home office.\n[Perfectly Fits Your Room]: The rustic book storage shelves for an old-time classic, with an attractive vintage appearance and functional design, perfect platforms for displaying your decorations. Like family photos, novels, speakers, or plants. This wood bookshelf is suitable for any room and is a perfect furniture piece.',
    price: 79.99
  },
  {
    Id: 'bookcase4',
    PId: 'bookcases',
    imageId: 'bookcases4',
    title: 'Ameriwood Home Aaron Lane Bookcase with Sliding Glass Doors, Multiple Colors - BLACK',
    description: 'Featuring an exceptional design, the Ameriwood Home Aaron Lane Bookcase with Sliding Glass Doors is a practical and beautiful addition to your home. Made of painted MDF and solid wood feet, the elegant black finish looks stunning when contrasted with bold colors, or it can bring a subtle sophistication to your home when paired with neutrals. This Bookcase includes 4 shelves behind the 2 sliding doors. Theres plenty of storage space for books, personal items or to display decor. The sliding glass doors protect your books and keepsakes from dust. The Ameriwood Home Aaron Lane Bookcase with Sliding Glass Doors ships flat to your door and requires assembly upon delivery. Two adults are recommended to assemble. Once assembled, the Bookcase measures to be 51"H x 31.75"W x 13"D.',
    price: 178.82
  },
  {
    Id: 'chairs1',
    PId: 'chairs',
    imageId: 'chairs1',
    title: 'Fairyland Linen Fabric Modern Accent Chair with Metal Frame, Upholstered Club Chair, Clearance Arm Chair for Small Space and Office',
    description: 'This Fairyland modern accent chair is the ideal piece to tie your living room together. The style is elegant and sleek, blending in with any and all home decor. The linen fabric, multi-color upholstery complements the dark metal frame perfectly. The high-density foam filling makes this chair comfortable to sit in for hours on end. Get cozy and snuggle up here for an afternoon of movies, reading, etc. The padded wooden armrests add that extra comfort and add a little dimension to the look of the chair. This accent chair works in any living room, bedroom, home office, etc. Simple assembly is required and detailed instructions are included.',
    price: 115.99
  },
  {
    Id: 'chairs2',
    PId: 'chairs',
    imageId: 'chairs2',
    title: 'Vitesse Home Office Chair, Big and Tall Chair 8 Hours 400 LBS Heavy Duty Design, Ergonomic High Back Cushion Lumbar Back Support, Computer Desk Chair, Adjustable Executive Leather Chair With Arms',
    description: 'Do Not Buy Another Office Chair Until You Read This! <br>Are you tired of spending hours of your life in uncomfortable desk chairs that hurt your back? <br>Have you had enough with computer chairs that wont last over a month? <br>Introducing The #1 Ergonomic VITESSE Office Chair. <br>It about time to forget every other flimsy, overpriced office chair that the only thing they have to offer is hours of discomfort. <br>You spend one-third of your day sitting in a desk chair, why not do it comfortably? <br>Indulge yourself with a new inviting VITESSE high back leather executive office chair and look for reasons to work just to stay seated a bit longer! <br>It is no wonder that businessmen, students, and gamers all over the world choose the VITESSE chair for their office but also for their home. <br>Here Are The Top 3 Reasons To Choose Our Chair: <br>TAKE CARE OF YOUR BACK! The S-shape back cushion offers an excellent lumbar and neck support for those long working hours. There is no reason for you to suffer anymore.<br>MAKE A STATEMENT! The luxurious upholstery combined with the soft armrest gives an essence of leisure. Upgrade the image of your office or your home with a VITESSE home office chair.<br>ENJOY EVERY MINUTE OF YOUR WORKING TIME OR GAME PLAYING. With the extra soft padded seat cushion, the VITESSE desktop chair will ensure your comfort. The new waterfall seat edge will help the circulation in your legs. Forget the pain and the swelling that torments you after hours and hours of working or playing computer games with the best office chair.',
    price: 99.95
  },
  {
    Id: 'tables1',
    PId: 'tables',
    imageId: 'tables1',
    title: 'Farmhouse End Table with Charging Station,Side Table with Power Outlet & USB Ports,Wood Metal Nightstand,Sofa Side Tables for Bedroom, Living Room,Office,White',
    description: 'Simple and classic white+blackcolor texture design, pretty and elegant, can be perfectly matched with any indoor style you like. Sofa Side Table with Storage：The sofa side table is equipped with open shelves and hidden cabinets, providing you with sufficient storage space.Both as a end table in your bedroom and a sofa side table on your living room, with flexible and concealed storage space to keep your room organized and free of clutter. Farmhouse Coffee Table with a Barn Door:This farmhouse nightstand design with a special barn-door pattern on front and two sides, and a metal corner decoration on two corners and doors, bringing the atmosphere of a farmhouse to your bedroom and living room. Side Table with Charging Station: Never worry about not having enough power outlets again, our end table with 2 power outlets and 2 USB ports provide fast charging for laptops, iPads, smartphones, Bluetooth headphones, desk lamps, and other charging devices. Easy to Install:Overall dimensions: 14.2” W X 17.1” D X 25.1” H.The farmhouse end table comes with clear step-by-step illustrated instructions, easy to read and follow. All screws and part are labeled. 100% Satisfaction Service: We are committed to providing high quality bamboo products and professional customer service so you can live the life you deserved.Please feel free to contact us if you have any questions before or after the sale.',
    price: 78.46,
  },
  {
    Id: 'tables2',
    PId: 'tables',
    imageId: 'tables2',
    title: 'Bellemave Side Table with USB Charging Station, Vintage End Table with Cup Holders, Narrow Side Table for Small Spaces, Living Room, Couch, Nightstand with Storage（Antique Navy)',
    description: 'Low battery? Dont worry. This side table comes with 2 AC outlets, 2 USB ports and a power cord for your charging needs. This bedroom side table has two drawers, a top panel, and open storage space. Enhance your living space with our Side Table featuring a USB Charging Station and Storage, the perfect blend of functionality and modern design. This versatile piece of furniture offers convenient charging capabilities for your electronic devices while providing essential storage space for everyday items, making it an indispensable addition to any room. The simple structure, numbered parts, install manual and tools, allows you to finish the nightstand with Charging Station within 20 minutes.',
    price: 78.46,
  },
  {
    Id: 'tables3',
    PId: 'tables',
    imageId: 'tables3',
    title: 'Gymax 5 Piece Dining Set Glass Top Table & 4 Upholstered Chairs Kitchen Room Furniture',
    description: 'Our dining set is perfect to decor your dining room, and offers you and your guests a comfortable seating experience. The industrial painted iron frame makes the set rugged, corrosion-resistant and provides you years of durable use. Comfort as the goal, the seat and back are designed base on the principle of ergonomics. Coming with thick pad cushion seat, this chair holds an elegant form with no cost to comfort.',
    price: 78.46,
  },
  {
    Id: 'dairy1',
    PId: 'dairy',
    imageId: 'dairy1',
    title: 'Great Value Milk Whole Vitamin D Gallon Plastic Jug',
    description: 'Our guarantee is our promise that youll be fully satisfied with the quality of every Great Value product.',
    price: 2.92,
  },
  {
    Id: 'dairy2',
    PId: 'dairy',
    imageId: 'dairy2',
    title: 'Great Value Sweet Cream Salted Butter, 16 oz',
    description: "Great Value Sweet Cream Salted Butter is a smooth, creamy, and delicious butter that comes with the perfect savory flavor for all of your cooking needs. It's made with real ingredients like cream for rich flavor that is sure to enhance your cooking or baking. It is Real Seal certified and USDA officially graded AA. It is an all-purpose butter, perfect for spreading on breads, for topping veggies and pasta, for baking or pan-frying, and for using in a number of other recipes. Enjoy the deep, savory flavors and bring your foods to life every day with Great Value Sweet Cream Salted Butter.",
    price: 3.78,
  },
  {
    Id: 'dairy3',
    PId: 'dairy',
    imageId: 'dairy3',
    title: 'Great Value All Natural Sour Cream, 16 oz Tub',
    description: "Your next meal just got better with Great Value All Natural Sour Cream. You can take comfort in knowing our Grade A, all-natural sour cream has earned the REAL® Seal, assuring you are buying a genuine dairy product. Get creative in the kitchen and use our sour cream to make delicious ice cream and smoothies, creamy salad dressings, or zesty dips. Just one dollop of our smooth sour cream is perfect to cool down even the spiciest dishes. Make mealtime a culinary adventure with Great Value All Natural Sour Cream.Great Value products provide families with affordable, high quality grocery and household consumable options. With our wide range of product categories spanning grocery and household consumables, we offer you a variety of products for your family's needs.",
    price: 1.97,
  },
  {
    Id: 'dairy4',
    PId: 'dairy',
    imageId: 'dairy4',
    title: 'Frigo Cheese Heads Original Mozzarella String Cheese Snacks, 16 oz, 16 Count',
    description: "Frigo Cheese Heads® Original String Cheese. Frigo Cheese Heads® low moisture part skim mozzarella cheese is creamy and delicious. Frigo Cheese Heads® string cheese is individually plastic wrapped and is the perfect snack for the on-the-go family! Use them to make easy homemade snacks like mozzarella sticks. Frigo Cheese Heads® String cheese snack makes every break time fun. A good source of calcium. Contains milk. Keep refrigerated.",
    price: 5.62,
  },
  {
    Id: 'beans1',
    PId: 'beans',
    imageId: 'beans1',
    title: 'Great Value Black Beans, 15 oz Can',
    description: "Take your meal to the next level with Great Value Black Beans. Slow simmer these beans to mouth-watering perfection to enhance any savory meal. Try adding a spoonful to homemade tacos or add them to a hearty pot of soup. Preparing and serving Great Value Black Beans is easy on the stovetop or in the microwave and only takes a few minutes! Great Value Black Beans have earned our esteemed Good For You label, which means they have met rigorous nutrition criteria informed by the latest nutrition science and authoritative guidance from the 2010 Dietary Guidelines for Americans, U.S. Food and Drug Administration (FDA), U.S. Department of Agriculture (USDA), and Institute of Medicine (IOM). With only 110 calories per serving and no trans fats or cholesterol, you can enjoy these beans guilt-free. If you're looking to add a tasty touch to your signature dishes, use Great Value Black Beans!",
    price: 0.82
  },
  {
    Id: 'beans2',
    PId: 'beans',
    imageId: 'beans2',
    title: 'Great Value Pinto Beans, 15.5 oz Can',
    description: "Great Value Pinto Beans deliver a delicious and authentic taste of Mexican cuisine. The versatility of pinto beans make them great for dozens of dishes. Add them to any soup, chili and burrito or season and enjoy as a side. Use them to create a tasty bean dip and serve with a side of corn chips. They go great seasoned with chili powder, paprika, cumin, garlic, and dash of salt and pepper. Serve prepared beans with Mexican rice and enchiladas for a tasty meal. With only 100 calories per serving, these beans serve as a great source of dietary fiber and protein. Enjoy the wholesome taste of Great Value Pinto Beans.",
    price: 0.82
  },
  {
    Id: 'beans3',
    PId: 'beans',
    imageId: 'beans3',
    title: 'Great Value Dark Red Kidney Beans, 15.5 oz',
    description: "Great Value Dark Red Kidney Beans are the answer to your culinary prayers! These hearty, delicious, and versatile beans are quick and easy to heat up for any snack or meal. They can stand alone or be added to seemingly infinite savory dishes, from hearty chilis, to salads and soups. Serve them with seasoned rice and veggies for a tasty classic or pour them into your slow-simmered stew. Each half-cup serving boasts nearly 20% of your daily fiber needs and a portion of your recommended protein, iron, and potassium. The comfort food possibilities are truly endless with a can of Great Value Dark Red Kidney Beans!",
    price: 0.82
  },
  {
    Id: 'beans4',
    PId: 'beans',
    imageId: 'beans4',
    title: 'Great Value Light Red Kidney Beans, 15.5 oz',
    description: "Take your culinary creations to the next level with Great Value Light Red Kidney Beans. They're an excellent and delicious accompaniment to soups, salads, rice, stews, chili, and more! With only 120 calories, zero fat, and 7 grams of protein per serving, these beans have earned our esteemed 'Great For You' label. Get creative in the kitchen and enjoy the incredible taste of Great Value Light Red Kidney Beans in your next recipe.",
    price: 0.82
  },
  {
    Id: 'beans5',
    PId: 'beans',
    imageId: 'beans5',
    title: 'Great Value Great Northern Beans, 15.5 oz Can',
    description: "Great Value Great Northern Beans add heartiness and a smooth flavor to your next meal. Delicious in ham stews, chili, three bean salads, and much more, these beans can easily become a regular part of your day-to-day diet. They also pack a whopping 29 percent of your daily fiber requirement per serving as well as 7 grams of protein to help keep you active and on your toes. Great Northern beans are easy to prepare- simply heat in a saucepan on the stovetop or microwave them in a microwave-safe dish and they will be ready to eat in just minutes! Add Great Value Great Northern Beans to your favorite dishes for a boost of protein and fiber the whole family can enjoy.",
    price: 0.82
  },
  {
    Id: 'pasta1',
    PId: 'pasta',
    imageId: 'pasta1',
    title: 'Brami Fusilli Italian Protein Pasta, Lower Carb, High Fiber, Non-GMO, Made in Italy,Fortified with Heart Healthy Lupini Beans, Shelf-Stable, 12 oz Box',
    description: "At Brami, we believe that good quality ingredients are the key to a healthy diet that doesn't sacrifice on taste. Our Italian pasta’s take the great tradition and simply add the power of the Lupini Super Bean which delivers a delicious, non-GMO pasta that has 70% more protein, 3x more fiber, and 25% fewer carbs vs. regular pasta! Brami Fusilli Pasta is made with two real ingredients: Italian Semolina Wheat & Lupini Beans. It is High Protein & Fiber, Lower Carb, Made in Italy and Shelf-Stable. Available in 12oz Box.",
    price: 2.98
  },
  {
    Id: 'pasta2',
    PId: 'pasta',
    imageId: 'pasta2',
    title: 'Brami Spaghetti Italian Protein Pasta, Lower Carb, High Fiber, Made in Italy, Non-GMO, Fortified with Heart Healthy Lupini Beans, Shelf-Stable, 14.5 oz Box',
    description: "At Brami, we believe that good quality ingredients are the key to a healthy diet that doesn't sacrifice on taste. Our Italian pasta’s take the great tradition and simply add the power of the Lupini Super Bean which delivers a delicious, non-GMO pasta that has 70% more protein, 3x more fiber, and 25% fewer carbs vs. regular pasta! Brami Spaghetti Pasta is made with two real ingredients: Semolina Wheat & Lupini Beans. It is High Protein & Fiber, Low Carb, Made in Italy and Shelf-Stable. Available in 14.5oz Box.",
    price: 2.98
  },
  {
    Id: 'pasta3',
    PId: 'pasta',
    imageId: 'pasta3',
    title: 'Great Value Penne Pasta, 16 oz Box, (Shelf Stable)',
    description: "Great Value Penne 16oz 100% durum wheat semolina Great Value Penne Pasta, 16 oz Box, (Shelf Stable) Perfect for your family's favorite pasta dinner 8 servings per container Shelf Stable  Enriched macaroni product  Great for soups, salads, and casseroles 16 oz box of penne pasta Kosher",
    price: 0.98
  },
  {
    Id: 'paper_products1',
    PId: 'paper_products',
    imageId: 'paper_products1',
    title: 'Great Value Everyday Strong, Soak Proof, Microwave Safe, Disposable Paper Lunch Plates, 9 in, 100 Plates, Patterned',
    description: "Serve food with ease using Great Value Everyday Paper Plates. They're perfect for everyday use or for special occasions. These plates are extra-strong and soak proof. Use these plates at your next barbecue, birthday party, while you're watching the game, at your next pool party or any get together. They are suitable for barbecue dishes, snacks, dinner, lunch, desserts and more. They offer quick and easy disposal and clean-up for when the party is over. This package comes with 100 pleasantly decorated plates making it easy to stock up. These everyday plates are also microwave safe so you can easily re-heat food. Serve up your next meal with Great Value Everyday Paper Plates. Great Value products provide families with affordable, high quality grocery and household consumable options. With our wide range of product categories spanning grocery and household consumables, we offer you a variety of products for your family's needs. Our products are conveniently available online and in Walmart stores nationwide, allowing you to stock up and save money at the same time.",
    price: 5.54
  },
  {
    Id: 'paper_products2',
    PId: 'paper_products',
    imageId: 'paper_products2',
    title: 'Angel Soft Toilet Paper, 12 Mega Rolls, Soft and Strong Toilet Tissue',
    description: "Here’s something to harp on—Angel Soft® Mega Rolls last and last with rolls that are 4 times as big as our Regular Rolls. With 320 2-ply sheets on every Mega Roll, you’ll always have plenty of the softness and strength you love on hand. Plus, each generously sized bathroom tissue roll still fits harmoniously in most standard toilet paper holders. And like all your favorite Angel Soft® products, our Toilet Paper Rolls are flushable and septic safe in well-maintained sewer and septic systems. Angel Soft® Toilet Paper. Soft and strong. Simple.",
    price: 8.44
  },
  {
    Id: 'cleaning_supplies1',
    PId: 'cleaning_supplies',
    imageId: 'cleaning_supplies1',
    title: 'Clorox Toilet Bowl Cleaner Clinging Bleach Gel, Ocean Mist, 24 fl oz, 2 Pack',
    description: "Clorox™ Toilet Bowl Cleaner, Clinging Bleach Gel, kills 99.9% of germs and whitens and brightens your toilet bowl with the trusted power of Clorox™ Bleach. This powerful gel cleaner clings to your toilet bowl while it destroys tough stains, disinfects and eliminates odors with a fresh Ocean Mist scent. The only Toilet Bowl Cleaner with Clorox™ Bleach, this thick cleaning gel coats the bowl to provide a deep clean and rinses away for a sparkling clean. Uniquely angled, this dispensing nozzle makes it easy to tackle hard-to-reach areas under the bowl rim with a simple squeeze of the bottle. The clinging bleach action let’s you power through the toughest toilet stains with confidence. Clean, disinfect, and let your toilet sparkle with Clorox™ Toilet Bowl Cleaner, Clinging Bleach Gel in a Ocean Mist scent.",
    price: 5.18,
  },
  {
    Id: 'cleaning_supplies2',
    PId: 'cleaning_supplies',
    imageId: 'cleaning_supplies2',
    title: 'Scrubbing Bubbles Bathroom Mega Shower Foamer Spray, Rainshower, 32 fl oz',
    description: "Scrubbing Bubbles Mega Shower Foamer Spray is a foaming formula that works on contact to remove limescale for a powerful clean that smells amazing. This shower spray removes 100% of soap scum. It's the penetrating foam with our widest spray and our fastest clean that helps to quickly cover tough bathroom grime on your shower and bathtub. This soap scum remover is a great overall bathroom cleaner and can be used on surfaces such as shower walls, shower doors, glazed ceramic tile, glazed porcelain and much more. This foamer is known for more than its personality. Also available as an aerosol spray. Power through dirt and grime. Powerful clean with no harsh smell.",
    price: 4.88,
  },
  {
    Id: 'cleaning_supplies3',
    PId: 'cleaning_supplies',
    imageId: 'cleaning_supplies3',
    title: 'Lysol Automatic In-The-Bowl Toilet Cleaner, Cleans and Freshens Toilet Bowl, Mango & Hibiscus Scent, 2ct',
    description: "Lysol Brand New Day Automatic Toilet Bowl Cleaner, helps clean and freshen your toilet automatically with every flush. It hangs on the inside of the toilet bowl to help you maintain your toilet between deep cleaning your toilet bowl. It not only cleans your toilet bowl with every flush, but it also freshens your entire bathroom. It fights toilets rings, helps prevents stains and has new premium fragrances. They last for up to 8 weeks, and are easy to use.",
    price: 3.97,
  },
  {
    Id: 'desk1',
    PId: 'desk',
    imageId: 'desk1',
    title: 'Ktaxon Wood Computer Desk PC Laptop Study Table Workstation Home Office Furniture',
    description: "Warm Prompt:  Please confirm the product size before purchasing, and confirm that our product size is in line with your requirements Features: Spacious Tabletop and Sturdy Metal Frame:The tabletop is strong and spacious enough for you to work or study. The surface and edge of the tabletop are smooth so as to prevent your hands from being scratched. It is constructed of durable steel with exquisite white finish. Two horizontal metal bars ensure its stability and sturdiness Protective Foot Cap:Under each leg is there a protective foot pad which greatly stabilizes the table and protects the floor from being scratched. Superior adjustable leg pads make the table maintain stable even on uneven floor    Easy to Assemble and Move:The desk comes with detailed manual and complete accessories. Specific assembly steps are clearly listed for your reference. Although equipped with a powerful construction, the table is lightweight to be easily moved    Multifunctional Desk:This table can be placed in your home study, bedroom and office to play its practical use such as serving as a computer desk, office work station, study stable or writing desk. It provides sufficient space for computer, monitor, printer, writing and study. Underneath the tabletop is there much space for storage",
    price: 79.99
  },
  {
    Id: 'desk2',
    PId: 'desk',
    imageId: 'desk2',
    title: 'PayLessHere 47 inch Computer Desk Modern Writing Desk, Simple Study Table, Industrial Office Desk, Sturdy Laptop Table for Home Office, Vintage',
    description: "Are you looking for a multipurpose desk for new home or to refresh your house? PayLessHere gaming computer desk will be your best choice. Simple and modern design with warm feeling, this gaming desk is space-saving while providing plenty of space for studying, working, gaming, handcrafting and other desktop activities! This desk can be used as computer desk, office workstation, meeting desk, study table, writing table, gaming table etc. Great for home school students, colleague students, boys and girls. Suitable for bedroom, study room or apartments. desktop offers you super large space for writing, working and other home office activities, ensures that you have sufficient space to work and play with comfort.",
    price: 37.98
  },
  {
    Id: 'desk3',
    PId: 'desk',
    imageId: 'desk3',
    title: 'Computer Desk with Drawers and Storage Shelves, 48 inch Home Office Desk with Monitor Stand, Work Study PC Desk for Small Spaces, Rustic Brown',
    description: "Desk with 2 Fabric Drawers: Two storage drawers provide ample space to store books, files, headphone and other daily necessities; the drawers are made of non-woven fabrics(NOT WOOD DRAWER), its more convenient for assembling compared to traditional wooden drawers, it also can meet your storage needs, using your desktop space more freely. Multi-Functional Monitor Stand: This modern computer desk has an incredible multi-functional monitor stand. The size of this desk monitor stand allows you to have two monitors at the same level. This computer desk with monitor shelf not only allow you to have more storage space on the desktop and raises your screen for improved visibility, but also you can install the monitor stand under the desk to turn this monitor stand into an under table bookshelf. Scratch Resistance Surface: The home office desk top is made of medium-density fiberboard with two layers of a glossy finish which gives a smooth and high-end classic outlook to the work desk and this finish provides a great waterproof surface and scratch resistance. The adjustable footpads on the bottom can keep the desk stable on the uneven floor and prevent you scratch the floor by moving this wood computer desk.",
    price: 99.99
  },
  {
    Id: 'desk4',
    PId: 'desk',
    imageId: 'desk4',
    title: 'Homall L-Shaped Gaming Desk 51 Inches Corner Office Desk with Removable Monitor Riser, Black',
    description: "Homall L-shaped gaming desk and office desk has a spacious desktop that can meet various forms of use. Whether you use it to play computer games or use it for office work, we have carbon fiber and wooden table tops you can choose, it will definitely satisfy you here. L-shape can be well adapted to the corner environment to save enough space. The spacious desktop is enough to place all your electronic devices, and removable monitor stand could be installed on either the left or right side, convenient for you to use, let every gamer get the best gaming experience.",
    price: 63.99,
  },
  {
    Id: 'filing1',
    PId: 'filing',
    imageId: 'filing1',
    title: 'Pendaflex Reinforced 2" Expansion File Jackets, Assorted Colors, Letter, 10 per Pack',
    description: 'Expanding file jackets are the ideal product for organizing and storing files that contain a larger amount of sheets than a standard file can hold. The 2" expanding sides can accommodate up to 200 sheets of paper. Organization is imperative, especially when working with large, bulky files that contain important information.',
    price: 4.98
  },
  {
    Id: 'filing2',
    PId: 'filing',
    imageId: 'filing2',
    title: 'Sterilite Portable File Box Black',
    description: 'Keep your office and workspace neat and organized with Sterilites Portable File Box. This is an ideal solution for both storing and moving letter-size hanging file folders, whether you need to take your files into the next room or across town. Label folders to create a custom organization system to keep those important files sorted and easy to find, while reducing clutter around the home or office. The in-lid storage compartment is great for keeping small items, such as paper clips, post-its, pencils, calculator or even a 12" ruler, handy and easy to access. The durable latch ensures that the lid stays shut and the sturdy handle allows for comfortable carrying. The File Box accommodates a small padlock for added security. The overall assembled dimensions of this item are 15" L x 10 7/8" W x 11 1/2" H.',
    price: 13.28,
  },
  {
    Id: 'stationery_mailing1',
    PId: 'stationery_mailing',
    imageId: 'stationery_mailing1',
    title: 'Pen + Gear Legal Pads Pastel Color Paper, 50 Sheets, 3 Count',
    description: "Take care of all your writing needs with this classic Pen+Gear Legal Pads. This pack of legal pads are perfect for jotting down meeting notes, questions for interviewees, or writing down your notes for your next bestseller. The legal pads are five inches by eight inches. With 50 wide-ruled sheets of paper, you will be set for success. Keep them in your home for grocery lists or notes for your home improvement project. They come in a pack of three, so you can keep one at work, at home, or in you backpack or purse. The Pen+Gear Legal Pads are a great and versatile notetaking option.",
    price: 2.84
  },
  {
    Id: 'stationery_mailing2',
    PId: 'stationery_mailing',
    imageId: 'stationery_mailing2',
    title: '120 PCS Spiral Binding Coils Plastic Binder Binding Spirals Rings Multi Size Spiral Binding Wire Combs , 4:1 Pitch',
    description: "Only the above package content, other are not included. Note: Light reflection and different displays may cause the color of the item in the picture a little different from the real thing. The measurement allowed error is +/- 1-3cm.",
    price: 26.04
  },
  {
    Id: 'stationery_mailing3',
    PId: 'stationery_mailing',
    imageId: 'stationery_mailing3',
    title: '90 Piece Vintage Letter Writing Paper Set (60 Floral Stationery and 30 Matching Envelopes)',
    description: "Use this vintage paper and envelopes set to write letters, create custom party invitations, thank you notes, or save the dates for any special celebration. The stationery kit features a decorative gold ornate border that will add an elegant and festive touch to your handwritten letters or invitations for weddings, baby showers, garden parties, and bridal showers. Each blank love letter paper sheet in this stationery set measures 7.25 x 10.2 inches and has ample space to add stickers, stamps, or photo prints. Create a unique design on your computer or laptop; the printer-friendly paper is compatible with most printer types, designs, and prints!",
    price: 13.99
  },
  {
    Id: 'stationery_mailing4',
    PId: 'stationery_mailing',
    imageId: 'stationery_mailing4',
    title: 'BAZIC Security Self Seal Envelope 4 1/8" x 9 1/2" #10 Tint Mailing Envelopes, 40-Count',
    description: "Our goal is to provide each customer with long-lasting supplies at an affordable cost. Since 1998, we’ve delivered on this promise and will only continue to improve every year. We’ve built our brand on integrity and quality, so customers know exactly what to expect.",
    price: 7.98
  },
  {
    Id: 'shoes1',
    PId: 'shoes',
    imageId: 'shoes1',
    description: 'HOBIBEAR Kids Sneakers for Boys Running Shoes',
    title: "HOBIBEAR Kids Sneakers for Boys Running Shoes Lightweight Sport",
    price: 19.66
  },
  {
    Id: 'shoes2',
    PId: 'shoes',
    imageId: 'shoes2',
    title: 'Levis Womens Drive Hi Synthetic Leather Casual Hightop Sneaker Shoe',
    description: "Step up your style with these iconic high-top sneakers. Made with vegan leather uppers and soft, breathable mesh lining, these women’s lace-up sneakers are just what you need to keep your feet relaxed and your style on point. The durably stitched overlays create clean lines and a retro-inspired classic look so you can pair them with any outfit for some added flare. The clean, eye-catching rubber outsole not only keeps your style crisp and polished, but also creates next-level traction and support. Inside, you’ll find a lightweight, cushioned footbed to keep your feet extra relaxed. The added padding in the tongue and collar also creates long-lasting comfort while highlighting the vintage-inspired design. Whether you’re meeting up with friends or hitting the town with that special someone, these Levi’s sneakers are made to keep you feeling cool, comfortable, and relaxed while showing off your bold style to the world.",
    price: 34.99
  },
  {
    Id: 'shoes3',
    PId: 'shoes',
    imageId: 'shoes3',
    title: 'Interceptor Mens Force 6" Steel Toe Tactical Boots',
    description: "The Interceptor Men's Force Tactical Steel Toe Work Boots are protective, tactical boots specifically designed to handle high performance and physical jobs. This Interceptor Boot comes equipped with an ASTM rated steel toe and slip-resistant outsoles. Your feet are not only protected from the impact of falling objects or compression between two objects, but also from the rugged and slippery terrain that can be found on the job site or in the field. This tactical work boot's lace up design limits the chance of objects hooking on or causing any sort of disruption in your tasks. The Interceptor Men's Force Tactical Steel Toe Work Boot provides not only the safety needed for the line of duty but also the comfort to combat the long, demanding days and nights on the job. These tactical boots come fully equipped with full-grain genuine leather and a breathable nylon that not only keeps the foot snug in place, but also provides space to allow the foot to breathe. This tactical boot features a reinforced insert between the insole and outsole. The insert provides the much-needed arch support for the foot when the job demands physical activity. The Interceptor Force Tactical boot is a great option for police, military, or security.",
    price: 34.48
  },
  {
    Id: 'shoes4',
    PId: 'shoes',
    imageId: 'shoes4',
    title: 'ADQ Mens Slip on Shoes Casual Shoes Lightweight Breathable Anti-Slip Sneakers',
    description: "Pull-on Daily Shoes, Making Your Life Easier  Main Features：1.Pull-on Design -- The adult male shoes are designed without laces,which improves the speed and experience of wearing shoes,which is very suitable for indoors or situations that need to go out quickly.Slip-On and slip-off,Two steps make everything simple. 2. Breathable -- The upper of our casual shoes is a mesh cloth that breathes well,Have better breathability,don’t worry about sweating a lot.The sole uses high-quality rubber materials and uses a non-slip design to adapt to more wearing environments. 3.Lightweight -- The weight of 400 grams provides a better wearing experience. Even if it is worn for a long time,it will not feel heavy.At the same time, the elastic mesh cloth material can be compatible with more foot shapes.Won’t feel tired even if you walk or stand for a whole day. 4. Comfortable -- These are walking shoes that feel like you wearing socks with a soft cushioning base on the sole.Especially suitable for people who need to stand or walk for a long time. 5.Tips: Please choose the size according to your wearing habits,you can refer to the size of your other sports shoes to buy. If your feet are wide,please choose one size or half size up!",
    price: 23.99
  },
  {
    Id: 'shoes5',
    PId: 'shoes',
    imageId: 'shoes5',
    title: 'Time and Tru Womens Surf Moc Fashion Sneaker - Wide Width Available',
    description: "These Surf Moc Fashion Sneakers from Time and Tru are the definition of casual style—understated with a textured pattern to complete your style. These moccasin-inspired sneakers feature a Memory Foam insole to help you step into comfort no matter what’s on your agenda. A modern take on a classic moccasin shoe–coordinate with your well-loved skinny jeans for the perfect grab-and-go pair.",
    price: 9.98
  },
  {
    Id: 'socks1',
    PId: 'socks',
    imageId: 'socks1',
    title: 'AND1 Mens Lightweight Mid Crew Socks, 12-Pack',
    description: "Experience the ultimate in comfort with AND1 Adult Men's Lightweight Mid Crew Socks. Designed with the athlete in mind for superior comfort and fit, AND1 provides a performance sock that delivers. Constructed with a soft, plush footbed, this twelve-pack of socks adds as a safeguard for impact absorption and friction reduction. These durable sports socks offer the added benefit of a comfort stretch feature for a sustained, dependable fit. Money-saving twelve-pack lets you stock up with ease.",
    price: 12.48
  },
  {
    Id: 'socks2',
    PId: 'socks',
    imageId: 'socks2',
    title: 'Gildan Mens Crew Socks',
    description: "Designed for everyday comfort, Gildan’s Cotton Blend socks bring softness to your top drawer. Crafted with breathable cotton, moisture wicking technology, and a half cushion sole to provide the extra support you need, exactly where you need it. Plus, thanks to a smooth toe seam and reinforced heel and toe, these socks are the perfect mix of function and durability. Wear at home, work, or play for lasting comfort.",
    price: 4.97
  },
  {
    Id: 'socks3',
    PId: 'socks',
    imageId: 'socks3',
    title: '10-Pair Mystery Deal: Mens Moisture Wicking Low-Cut Socks Set of 10 Assorted',
    description: "10-Pair Mystery Deal: Mens Moisture Wicking Low-Cut Socks Set of 10 Assorted This 10-Pack of comfortable high-quality socks is perfect for any man. Made with a soft absorbent blend of polyester and spandex the Swift Dry knit helps keeps moisture off your feet.",
    price: 12.99
  },
  {
    Id: 'dresses1',
    PId: 'dresses',
    imageId: 'dresses1',
    title: 'Cupshe Womens A-ship Dress V-neck Knot Print Maxi Beachwear Dress',
    description: "Our Floral Print Knotted V-Neck Maxi Dress is the perfect choice for anyone who wants to embrace feminine charm and bohemian elegance. The captivating floral print adds a touch of romance to the design, while the stylish knotted detail at the waist creates a flattering silhouette.The V-neckline of the dress adds a hint of allure and sophistication, making it perfect for any special occasion or event. The maxi length of the dress exudes a sense of grace and elegance, while still maintaining a relaxed and bohemian feel.The lightweight and flowy fabric of the dress makes it comfortable to wear all day long, while the subtle slit on the side adds a touch of sultriness to the overall design. Whether you're attending a wedding, going on a date, or simply dressing up for a night out, this dress will make you feel confident and beautiful.",
    price: 45.00
  },
  {
    Id: 'dresses2',
    PId: 'dresses',
    imageId: 'dresses2',
    title: 'Scoop Womens Balloon Sleeve Poplin Shirtdress with Pockets, Sizes XS-XXL',
    description: "Just when you thought you couldn’t love the iconic shirtdress more, Scoop’s Poplin Shirtdress arrives with trendy balloon sleeves, a tie waist and two side-seam pockets (yay)—the new must-have for summer! Finished with a classic point collar and button front for endless styling options from meetings in the office to after-hours fun.",
    price: 28.00
  },
  {
    Id: 'dresses3',
    PId: 'dresses',
    imageId: 'dresses3',
    title: 'Girls Dress Purple Rose Flower Double Bow Tie Party Kids Sundress 4-5',
    description: "Machine washable. Full lined with cotton. Made in China. Following size means age ranges for girls, they are for general guidance only. For most accurate fit, we recommend checking detailed size measurement before purchase. Sunny Fashion is a brand specialized on flower girls dresses, everyday girls dresses, girls dancing dresses, formal girls dresses, pageant girls dresses, party girls dresses, wedding girls dresses, princess girls dresses and bridesmaid girls dresses. We also have special occasion girls dresses for Holidays, Easter, Christmas, Birthday Party and Halloween. Size Chart: The size age range is just for reference. If your girl's measurements is between two different sizes, the larger size is recommended.(Measurement in the size chart refer to the dress measurement not for body measurement)",
    price: 18.95
  },
  {
    Id: 'dresses4',
    PId: 'dresses',
    imageId: 'dresses4',
    title: 'OUSIMEN Womens Dresses Casual Summer Print Ruffle A Line Short Sleeve Mini Floral Dress for Women',
    description: "Women bohemian floral print dresses, soft and lightweight breathable fabrics provide you with a cool and comfortable wearing experience, but not see-through and won't make you feel stuffy, is definitely the first choice for summer wardrobe. ★Design:,off shoulder, ruffle hem, mini length, tiered design, lining, floral print dress, smocked design, open back, frill hem, ruched bust, high waist, a-line silhouette. ★Collocation: Cute mini smocked waist dress perfect to pair with necklace, cute head scarf, handbag, straw hat, mules, heels or sandals. ★Elegant flowy flared swing beach dress is great for party, vacation night out, cocktail, wedding and daily life. ★daily life Garment Care: Hand Wash In Gentle Cold Water/ Machine Wash / Do Not Bleach.",
    price: 20.99
  },
  {
    Id: 'dresses5',
    PId: 'dresses',
    imageId: 'dresses5',
    title: 'PXEVL Bride Wedding Dresses for Women Sexy Lace Shoulder See Through Evening Party Dress Formal Hi-Low Floor Maxi Dresses',
    description: "PXEVL Bride Wedding Dresses for Women Sexy Lace Shoulder See Through Evening Party Dress Formal Hi-Low Floor Maxi DressesHello, Dear Customer, ♔Welcome to PXEVL Store♔ (◕ˇ∀ˇ◕) Have a nice shopping time, thank you so much! (›´ω`‹ )【♔About us:】PXEVL is committed to providing high-quality women's clothing and accessories.Create a simple, stylish appearance!We providing a variety of the latest and most fashionable clothing for you.【♔Occasion:】Casual/Home/Beach/Party/Shopping/Work/School/Outside/Wedding/Holiday/Daily/Office/Travel/Running Style/Easter’s Day/Independence Day. The simple design makes it perfect for any casual occasions.",
    price: 30.17
  },
  {
    Id: 'dresses6',
    PId: 'dresses',
    imageId: 'dresses6',
    title: 'PatPat Dresses for Women 2024 Mommy and Me Allover Print Yellow Ruffle-sleeve Button Front Dresses Family Matching Outfits Mom and Me',
    description: "As a US-based Kids Clothing Brand, PatPat is devoted to providing Cute,Quality and Great Price baby and maternal products globally since 2014. PatPat's children's clothing has won unanimous praise from all over the world. we promise:*100% premium quality*The most favorable and value-for-money price PatPat is the common choice of mothers and children all over the world PatPat guarantees you only quality merchandise. Note: please add each size to your shopping cart separately",
    price: 14.99
  },
  {
    Id: 'jackets1',
    PId: 'jackets',
    imageId: 'jackets1',
    title: 'Lavnis Mens Bomber Jacket Sportwear Casual Full Zipper Coat Lightweight Autumn Outdoor Long Sleeve Khaki 2XL',
    description: "The perfect layering piece throughout the day. This men’s bomber jacket is easy to wear with its Full zipper for a secure fit and features eye- Catching stripes on its ribbed knit cuffs, hem and collar. Pair this men’s bomber with your favorite jeans and sneakers Slim Windbreaker Jacket Western Long Coat Men Circle S Mens Sports Coat House Coat Men Cotton Snow Coats",
    price: 29.99
  },
  {
    Id: 'jackets2',
    PId: 'jackets',
    imageId: 'jackets2',
    title: 'VISgogo Men Autumn Winter Fluffy Coat, Male Leisure Style Solid Color Long Sleeve Lapel Single-Breasted Loose Mid-Length Jacket',
    description: "This men coat is made of high quality polyester fabric for comfortable hand feeling, the casual style design makes it easier to match with everyday pants.",
    price: 35.99
  },
  {
    Id: 'jackets3',
    PId: 'jackets',
    imageId: 'jackets3',
    title: 'tklpehg Blazers for Women Long Sleeve Lapel Solid Color Button Pocket Recreational Long Sleeve Suit Coat Tops Hot Pink M',
    description: "We are Asian size, if you like loose clothes, you can choose a size larger.",
    price: 21.98
  },
  {
    Id: 'jackets4',
    PId: 'jackets',
    imageId: 'jackets4',
    title: 'P&L Mens Sport Coat Classic Fit JacketStretch Plaid Blazer Stretch Blazer',
    description: "P&L Jacket: Elevate your style with the P&L Men's Classic Fit Blazer Jacket. Crafted from a premium blend of Polyester, Viscose, and Spandex, this blazer offers comfort and breathability. With its 3D cutting, full shoulder design, and fine stitching, it provides a clean and sharp fit that enhances your overall style.",
    price: 74.99
  },
  {
    Id: 'shorts1',
    PId: 'shorts',
    imageId: 'shorts1',
    title: 'Celebrity Pink Juniors Utility Shorts',
    description: "Jump on the ulitity trend with these Celebrity Pink Juniors Utility Shorts. They feature a drawstring waist and are made of light weight material for that all day comfort. Made with a high rise elastic wasit and back flap pockets finished with stylish utility pockets. Pair these with your favorite Celebrity Pink body suit or crop top for that fashion forward look. These are sure to become your go to favorite this summer!",
    price: 12.50
  },
  {
    Id: 'shorts2',
    PId: 'shorts',
    imageId: 'shorts2',
    title: 'Wonder Nation Girls Pull On Shorts, Sizes 4-18 & Plus',
    description: "Her summer wardrobe just got a fashion upgrade! Right on trend, these girls' Denim Pull-On Shorts from Wonder Nation are designed with updated chop pockets and a relaxed fit she will just love to live in. Easygoing style with an elastic waistband for quick changes, she can wear these pull-on shorts with everything from her favorite graphic tees to the latest fashion tops.",
    price: 7.98
  },
  {
    Id: 'shorts3',
    PId: 'shorts',
    imageId: 'shorts3',
    title: 'Athletic Works Mens and Big Mens Active Mesh Shorts, 9" Inseam, Sizes XS-5XL',
    description: "Take on your daily activities with Active Mesh Shorts from Athletic Works, featuring a breathable mesh design for lightweight comfort. These men’s shorts have a drawstring and elastic waistband design for an adjustable fit while two side-seam pockets provide a convenient place to store small belongings. Moisture-wicking properties help keep you cool and dry—great for transitioning from high-intensity to low-intensity activities.",
    price: 6.98
  },
  {
    Id: 'shirts1',
    PId: 'shirts',
    imageId: 'shirts1',
    title: 'U.S. Polo Assn. Mens Short Sleeve V-Neck Tee',
    description: "The U.S. Polo Assn. Men's V-Neck T-Shirt is the ideal complement to your favorite standby jeans. Perfect to wear anytime for a relaxed look that has a distinctly laid back vibe. Complete your casual look with sneakers, or dress it up with a blazer for a more polished finish. The U.S. Polo Assn. Men's V-Neck T-Shirt is machine washable and very easy to maintain. And in 100% cotton jersey, it's the endlessly comfortable styling piece you'll want to wear every day.",
    price: 8.00
  },
  {
    Id: 'shirts2',
    PId: 'shirts',
    imageId: 'shirts2',
    title: 'MOSHU V-Neck Women T Shirts Short Sleeve Loose Summer Tops for Women with Pocket',
    description: "MOSHU V Neck Women T Shirts Short Sleeve Loose Casual Summer Tops with Pocket This womens t-shirts are made with skin-friendly and breathable fabric, making them perfect for wearing in hot summers. You'll feel cool and comfortable on various occasions. The v-neck design of summer t-shirts for women comes in different colors and is not too low, complementing your face and accentuating your collarbone to give you a cute and feminine look. The sleeves feature a unique color-block design that is loose and feminine, preventing them from riding up into your armpits and providing coverage for any excess skin.",
    price: 10.99
  },
  {
    Id: 'shirts3',
    PId: 'shirts',
    imageId: 'shirts3',
    title: 'Wrangler Mens Short Sleeve Western Shirt, Size S-5XL',
    description: "Wrangler Men's Short Sleeve Western Shirt, Size S-5XL. Whether you are at work or a night out on the town, you’ll be doing it in style in this short sleeve western shirt from Wrangler. Featuring a regular fit for all day comfort, this western style shirt comes loaded with all the authentic features you love including front and back yokes, two snap flap chest pockets and snap closure buttons down the front. Made with a soft cotton blend and available in a variety of plaid designs, this is one shirt you will never tire of wearing. Looks great tucked or untucked depending on the occasion. Pair with your favorite jeans or khakis to complete the look.",
    price: 14.99
  },
  {
    Id: 'shirts4',
    PId: 'shirts',
    imageId: 'shirts4',
    title: 'Cafe Luna Mens Short Sleeve Linen Cotton Panel Woven Shirt',
    description: "Cafe Luna's button-down shirt is classy yet relaxed. This breezy cotton-linen shirt with subtle tuck detail helps you stand out with style.",
    price: 16.92
  },
  {
    Id: 'shirts5',
    PId: 'shirts',
    imageId: 'shirts5',
    title: 'Bluey Toddler Boys 3 Pack T-Shirts Toddler to Big Kid',
    description: "Come meet Bluey the 6 year old Blue Heeler pup and her younger sister Bingo! Watch Bluey and Bingo come to life through your little one’s friendly and fun personality. Your child is going to love playing indoors or outdoors in their new Bluey 3 Pack Graphic T-Shirts.",
    price: 28.99
  },
  {
    Id: 'computers1',
    PId: 'computers',
    imageId: 'computers1',
    title: 'HP 15.6", Laptop Intel Pentium Processor 4GB RAM, 128GB UFS, Scarlet Red, Windows 11, 15-fd0083wm',
    description: 'Say hello to the most reliable PC that easily passes the vibe check. HP 15" Laptop is built with dependable technology, next-level power, and rock-solid performance that turns your to-do lists into to-done lists. Go from shopping to streaming to keeping up with friends all at the speed of fun. With HP PCs, you get more ‘oomph’ from your computer with less ‘oof’ from your wallet, so you can take on today with tech built for tomorrow. The HP 15.6" Laptop PC empowers you to do more with the reliable power of an Intel Processor, plus fast storage, and powerful graphics in a sleek, thoughtfully designed device. Created for wherever the day takes you and built with ocean-bound and post-consumer recycled plastics, it’s easy to show some love for the planet.',
    price: 219.00
  },
  {
    Id: 'computers2',
    PId: 'computers',
    imageId: 'computers2',
    title: 'HP Essential Laptop Computer 17.3" FHD Intel Core i7 16 GB memory; 1 TB HDD ;',
    description: "12th Gen Intel Core i7-1255U Processor @ 2.10GHz (10 Cores, 12 Threads, 12M Cache, up to 4.70 GHz)",
    price: 579.99
  },
  {
    Id: 'computers3',
    PId: 'computers',
    imageId: 'computers3',
    title: 'Acer Nitro 5 Gaming laptop, 15.6" Full HD IPS 144Hz Display, 12th Gen Intel Core i7-12650H, NVIDIA GeForce RTX 4050 Laptop GPU, 16GB DDR5, 1TB PCIe Gen 4 SSD, Windows 11 Home, AN515-58-75NM',
    description: "Fire it up then go full throttle faster and more effectively than ever with Acer's next evolution of its Nitro 5 gaming laptop. The new Nitro 5 soars to new levels of performance for gamers and creators, courtesy of its 12th Gen Intel Core processor and NVIDIA GeForce RTX 4050 laptop graphics—powered by Ada Lovelace NVIDIA's RTX architecture! Next, toss in the vivid, crystal-clear 15.6” Full HD display with a 144Hz IPS panel, ample cooling and a 4-zone RGB keyboard and you can see why the Nitro 5 is a knockout hit for gamers of every level! Enjoy PC games on Nitro 5 with one month of Game Pass included.",
    price: 899.00
  },
  {
    Id: 'computers4',
    PId: 'computers',
    imageId: 'computers4',
    title: '2022 Apple MacBook Pro Laptop with M2 chip: 13-inch Retina Display, 8GB RAM, 512GB SSD Storage, Touch Bar, Backlit Keyboard, FaceTime HD Camera. Works with iPhone and iPad; Space Gray',
    description: '2022 Apple MacBook Pro Laptop with M2 chip: 13-inch Retina Display, 8GB RAM, 512GB SSD Storage, Touch Bar, Backlit Keyboard, FaceTime HD Camera. Works with iPhone and iPad; Space Gray',
    price: 1479.99
  },
  {
    Id: 'computers5',
    PId: 'computers',
    imageId: 'computers5',
    title: '2022 Apple MacBook Air Laptop with M2 chip: 13.6-inch Liquid Retina Display, 8GB RAM, 256GB SSD Storage, Silver',
    description: "Apple MacBook Air 13.61, M2 8C CPU/8C GPU, 8GB, 256GB SSD, Silver, Mid 2022",
    price: 939.00
  },
  {
    Id: 'tv1',
    PId: 'tv',
    imageId: 'tv1',
    title: 'LG 70” 4K UHD Smart TV 2160p webOS, 70UQ7070ZUD',
    description: "Dive into a world of free content and personalized recommendations for everyone you share the remote with. Enhance your picture and sound with AI from the α5 Gen5 AI Processor 4K that is engineered to amaze by transforming your regular content into 4K for sharper definition and detail, even on our biggest screens*. Take binge-watching further by customizing your viewing experience with separate accounts and personalized recommendations for every member of your family with webOS 22. And enjoy binge-worthy streaming with built-in access to Netflix, the Apple TV app, Disney+, HBO Max** and to over 300+ free LG Channels*** with everything from comedy to movies to sports. For gamers, you can make it the best gaming experience by quickly adjusting all your game settings in one location with the LG Game Optimizer and Dashboard. Bring your content to life with LG UHD. See a vivid picture every time with LG UHD’s 4K resolution. *Image quality of upscaled content will vary based on the source resolution. **Internet connection and subscriptions to streaming services are required. HBO Max™ ©2022 Warner Media, LLC. All Rights Reserved. HBO Max is used under license. ***Number of LG Channels subject to change. with. *Number of LG Channels subject to change.",
    price: 558.00
  },
  {
    Id: 'tv2',
    PId: 'tv',
    imageId: 'tv2',
    title: 'Philips 32" Class HD (720P) Smart Roku Borderless LED TV',
    description: 'Deck out your entertainment room or even your bedroom with this new Philips 32" Class HD (720P) Smart Roku Borderless TV (32PFL6452/F7). Roku TV makes streaming a breeze, so you will always have your favorite show at your fingertips. Philips Roku TV brings you the top channels like Netflix, Hulu, YouTube, Google Play, and more. Access to 500,000+ movies and TV episodes across thousands of free or paid channels plus innovative features make finding your favorite entertainment fast and simple. It also has a built-in digital tuner so you can watch digital broadcasts when youre not streaming content.',
    price: 118.00
  },
  {
    Id: 'tv3',
    PId: 'tv',
    imageId: 'tv3',
    title: 'Hisense 58" Class 4K UHD LED LCD Roku Smart TV HDR R6 Series 58R6E3',
    description: "The Hisense Roku TV R6 Series packs incredible details into a 4K Ultra High Definition picture. The R6 series also features High Dynamic Range (HDR) that boosts color and contrast, and Motion Rate 120 technology which makes it easier to follow fast action scenes. Plus, with Roku TV operating system (OS), it's easier to watch what you love with access to thousands of streaming channels, apps, and live TV. Giving everyone in your household something to enjoy.",
    price: 278.00
  },
  {
    Id: 'phones1',
    PId: 'phones',
    imageId: 'phones1',
    title: 'OnePlus Open, 16GB RAM+512GB, Dual-SIM, Voyager Black, US Factory Unlocked Android Smartphone, 4805 mAh Battery, 67W Fast Charging, Hasselblad Camera, 120Hz Fluid Display',
    description: "Thin & Light Design: The OnePlus Open is the thinnest & lightest foldable in North America*. With aerospace-grade materials & a custom Flexion hinge design, the OnePlus Open delivers a ergonomic user experience. With carbon fiber support structures & titanium alloy, the Open is as durable as it is premium. *Comparison does not include flip-style foldable phones. Thinnest measurement excludes rear-facing camera.",
    price: 1499
  },
  {
    Id: 'phones2',
    PId: 'phones',
    imageId: 'phones2',
    title: 'Google Pixel 8 Pro - Unlocked Android Smartphone with Telephoto Lens and Super Actua Display - 24-Hour Battery - Obsidian - 128 GB',
    description: "Pixel 8 Pro is the all-pro phone engineered by Google; it’s super fast, powerful, and secure, with the new Google Tensor G3 chip that’s custom-designed with Google AI for cutting-edge photo and video features and smarter ways to help",
    price: 799.00
  },
  {
    Id: 'phones3',
    PId: 'phones',
    imageId: 'phones3',
    title: 'OnePlus 12R, 16GB RAM+256GB, Dual-SIM, US Factory Unlocked Android Smartphone, 5500 mAh Battery, 50MP Camera, 80W Fast Charging, 2024, Iron Gray',
    description: "Premium Display: Experience the 1.5k Super Fluid AMOLED display, powered by the cutting-edge 4th Gen LTPO, which dynamically adjusts your content from 1Hz up to 120Hz.",
    price: 529.00
  },
  {
    Id: 'phones4',
    PId: 'phones',
    imageId: 'phones4',
    title: 'Apple iPhone 15 Pro Max, 256GB, Natural Titanium',
    description: "6.7inch Super Retina XDR display. ProMotion technology. Always-On display. Titanium with textured matte glass back. Action button",
    price: 1041.77
  },
  {
    Id: 'sound_system1',
    PId: 'sound_system',
    imageId: 'sound_system1',
    title: 'Bose Smart Soundbar 600 TV Wireless Bluetooth Surround Sound Speaker System, Black',
    description: "Experience theater-like sound without ever leaving your home with the Bose Smart Soundbar 600. Featuring Dolby Atmos, proprietary Bose TrueSpace technology and upward-firing speakers, this TV speaker intelligently analyzes and separates instruments, dialogue and effects, then places them throughout the room – even overhead – for a fully immersive sound experience. Setup of your wireless soundbar is quick and easy. With just one connection to the TV via the included HDMI or optical audio cables and step-by-step instructions in the Bose Music app, you’ll be enjoying your favorite entertainment in no time. Plus, with Wi-Fi, Bluetooth, Apple AirPlay 2, Spotify Connect and Chromecast compatibility, you can stream whatever content you want, however you want. This Bluetooth soundbar also has Bose Voice4Video technology and Amazon Alexa built in, so you can control your soundbar, TV and cable box with just your voice. Go beyond simply watching and feel every moment with the Bose Smart Soundbar 600.",
    price: 499.00
  },
  {
    Id: 'sound_system2',
    PId: 'sound_system',
    imageId: 'sound_system2',
    title: 'ULTIMEA 4.1ch Sound Bars for TV with Subwoofer, 2-in-1 Detachable Soundbar for TV, Bluetooth 5.3 Sound Bar, 3 EQ Modes & BASSMX TV Speakers, ARC/Optical/Aux, Wall Mount, Apollo S50 Detachable Series',
    description: "Versatile and Space-Saving Shape - The soundbar's detachable design allows you to assemble it in a variety of styles to fit the layout and atmosphere of your room. The split design saves space while the unique 7° tilt design enriches the soundstage with exclusive details. Wired Subwoofer with Enhanced Bass - Featuring built-in 2 tweeters and woofers, this 4.1ch soundbar for TV reproduces a balanced sound enjoys richer lows, and indulges in crisper highs. Additionally, the Apollo S50 soundbar has an extra 7.2L large-volume wired subwoofer that enables the diaphragm's amplitude to reach 15mm, achieving a more powerful bass. Personalized Sound Experience - Elevate your audio with 3 EQ modes designed for music, movies, and games. Ultimea exclusive BassMX technology enriches the low frequencies, enabling adjustable bass for a rumble, pulse-pounding Bass. All of these modes are easily accessible with a touch of a button on the EQ settings. Fuller and Clearer Sound - The soundbar utilizes an upgraded DSP chip to reduce audio static. This ensures that every word and sound is heard exactly as it was intended.",
    price: 99.99
  },
  {
    Id: 'sound_system3',
    PId: 'sound_system',
    imageId: 'sound_system3',
    title: 'beFree Sound BFS-99X 2.1 Channel Multimedia Entertainment Shelf Bluetooth Speaker System in Red',
    description: "Enjoy the ultimate home theater experience with this beFree Sound BFS 99X 2.1 Channel Bluetooth Speaker System in Red. It's sophisticated design, features a sleek look and smooth, powerful and realistic sound, not to mention a sharp and vivid appearance. With Bluetooth, USB, SD and FM radio capability, the 2.1-channel speaker system offers the best possible set of listening options for your enjoyment. Two speakers and a remote control are included to fill the entire room with sound and make it easy to control from a distance. The compact size of this beFree Sound BFS 99X 2.1-Channel Bluetooth Speaker System in Red makes it easy to place just about anywhere, including on a desk or shelf or inside of a media center. Hook it up in your bedroom, living room, family room, dorm room or other space and gain maximum enjoyment of your favorite songs, movies, TV shows, video games and more.",
    price: 78.99
  },
  {
    Id: 'refrigerators1',
    PId: 'refrigerators',
    imageId: 'refrigerators1',
    title: 'Frigidaire 7.5 Cu. ft. Refrigerator, Platinum Series, Stainless Look (EFR780-6COM)',
    description: "Your Frigidaire 7.5 cu. ft. Top-Freezer Refrigerator with Platinum design look features upfront temperature controls that make it simple to regulate both the fresh food and freezer sections. Adjustable shelves provide flexibility to meet your food storage needs. Combines easy-to-use features with practical design to complement any kitchen. Maintenance is easy with the convenient cycle defrost system and finding your favorite beverages is a breeze due to the tall bottle storage in the door. There are three adjustable glass refrigerator shelves and one adjustable/removable wire freezer shelf to provide maximum and versatile storage space. Your vegetables will stay cool and easy to find in the glass cover crisper. Left or right-handed opening is your choice with the reversible door hinge and this sturdy refrigerator can be installed against a wall with its smooth back design.",
    price: 247.00
  },
  {
    Id: 'refrigerators2',
    PId: 'refrigerators',
    imageId: 'refrigerators2',
    title: 'KRIB BLING 3.5 Cu.ft Compact Refrigerator Mini Fridge with Freezer, 2 Door Small Refrigerator for Office, Silver',
    description: "KRIB BLING 3.5 cu.ft Compact Refrigerator Mini Fridge with Freezer, Small Refrigerator with 2 Door for Office, Silver Compact Refrigerator 3.5 Cu Ft 2 Door Mini Fridge with Freezer For Apartment, Dorm, Office, Family, Basement, Garage, Silver, FLS-80-SILVER Efficient & Compact Refrigerator The compact fridge has a double-door design with a separate freezer and refrigerator. The refrigerated section includes two removable glass shelves,you can freely adjust the height of the compartment in this area to meet your storage needs. The side door racks offer beverage storage, and the bottom of the area fits small beverage. Adjust the temperature according to different seasons In Summer, both indoor and outdoor temperatures are high, and we can adjust them to between 2 and 3 gear. If the temperature of the refrigerator is set too low and set to 4th or 5th gear, the compressor will continue to work and the load will be too heavy, affecting the lifespan of the Silver refrigerator. In Winter, we suggest adjusting the temperature between 4 and 5 levels to ensure fresh food and save. The Winter temperature is relatively low, and the temperature inside the refrigerator is relatively low. Therefore, we can increase the temperature of the silver mini fridge appropriately. ",
    price: 192.99
  },
  {
    Id: 'dishwashers1',
    PId: 'dishwashers',
    imageId: 'dishwashers1',
    title: 'BLACK+DECKER BCD6W Compact Countertop Dishwasher, 6 Place Settings, White',
    description: "You won’t ever have to spend countless hours washing dishes by hand again with the BLACK+DECKER 6 Place Setting Portable Dishwasher! This Energy Star appliance is ideal for small spaces with its stylish working countertop and thoughtfully equipped with an LED display featuring remaining cycle time and delay start time of 1 hour increments, up to 24 hours. Let this portable 17.2” high dishwasher do the washing for you while you can go about your day, assured your dishes are thoroughly sanitized and cleaned. With Hi Temp and Heated Dry options, you can leave your home to run errands and return with fully washed and dried dishes just in time for dinner. Its 6 place-setting capacity means you can clean far more dishes at once than you ever could by hand. Give your hands a break and select one of the featured 6 wash programs do the scrubbing for you.",
    price: 279.39
  },
  {
    Id: 'dishwashers2',
    PId: 'dishwashers',
    imageId: 'dishwashers2',
    title: 'AIRMSEN Portable Countertop Dishwasher with 5-Liter Built-in Water Tank and Air-Dry Function, 5 Washing Programs, AE-TDQR03',
    description: "Whether you’re putting together a meal in a tiny apartment, an RV, or an older home without a built-in dishwasher, portable dishwashers can help clean up your messes so you barely have to lift a finger. This appliance is a total time-saver, keeps the  eczema on your hands at bay, and allows you to kick up your feet after cooking a pasta dinner.",
    price: 259.99
  },
  {
    Id: 'microwaves1',
    PId: 'microwaves',
    imageId: 'microwaves1',
    title: 'Galanz 0.9 Cu ft Air Fry Countertop Microwave, 900 Watts, Stainless Steel, New',
    description: "Galanz thoughtful engineering brings the 0.9 Cu ft Air Fry 900 Watts Microwave in Stainless Steel – this unit provides 3-in-1 important cooking features: Microwave oven, Convection oven and Air Fryer. All 3 functions provide cooking versatility. Because it is 3-in-1, it saves countertop space. It also provides Combi-Speed Cooking – this combines both convection cooking and microwave cooking together – which makes it faster than each function alone. Air Fry technology lets you cook with little or no oil for healthier, crunchy fried favorites like chicken wings, popcorn shrimp, chicken nuggets and pizza bites. The unique easy clean air fry kit provides more frying surface area with better air circulation compared to traditional air fryers. Designed with an internal fan plus an additional heating element, the True Convection technology circulates heated air throughout the oven as food spins 360°, cooking your food faster and more evenly. The Auto-Cook and Auto-Reheat features ensure that your food is not under or overcooked.",
    price: 98.00
  },
  {
    Id: 'microwaves2',
    PId: 'microwaves',
    imageId: 'microwaves2',
    title: 'Hamilton Beach 1.6 Cu ft Sensor Cook Countertop Microwave Oven in Stainless Steel, New',
    description: "The Hamilton Beach 1.6 Cu ft Sensor Cook Countertop Microwave Oven in Stainless Steel is the essential appliance for any busy kitchen. This countertop microwave oven features seven preset Sensor Cook Options, a 30-second one touch button, easy-to-read digital LED display clock and timer, and a large 12.4-inch glass turntable that can accommodate a variety of dishes. This microwave oven makes it convenient and easy to serve your family all their favorite meals. The stylish black and stainless-steel design will fit perfect in any kitchen. The durable, scratch-resistant aluminum handle is built to last and makes it easy to open the door. It allows you to cook potatoes, popcorn, and reheat frozen dinners, pizza, or beverages with just one touch. Enjoy quick and easy meals with the Hamilton Beach 1.6 Cu ft Cook Countertop Microwave Oven in Stainless Steel.",
    price: 120.00
  },
  {
    Id: 'microwaves3',
    PId: 'microwaves',
    imageId: 'microwaves3',
    title: 'Hamilton Beach Sure-Crisp Air Fryer Toaster Oven, 6 Slice Capacity, Stainless Steel, 31196',
    description: "The Hamilton Beach® Sure-Crisp® Air Fryer Toaster Oven provides multifunctional cooking versatility while adding extra oven space on your countertop. You can replace your standalone air fryer and other small kitchen appliances with this one versatile air fryer oven. Using little to no oil, the Sure-Crisp® air fry mode evenly circulates air around all sides of food for tender, even cooking inside and golden crisping outside. It turns fresh or frozen fries, chicken wings, steaks, fish, vegetables and more into crispy deliciousness that you and your family will love. The oven's extra-large capacity fits a whole 8 lb. turkey, air fry 6 burgers or bake a 12 pizza. The oven lets you quickly bring a complete meal to the table in minutes and is great for cooking a complete meal. The oven has simple, manual controls that make it easy to select the right cooking mode and to adjust the time and temperature. It also has a timer with Stay On function and ready bell. The black and stainless steel exterior look great on the countertop. The oven comes with an air fry basket, oven rack, bake pan and slide-out crumb tray.",
    price: 99.99
  },
  {
    Id: 'washers1',
    PId: 'washers',
    imageId: 'washers1',
    title: 'GE GFW550S 28" Wide 4.8 Cu Ft. Front Loading Washing Machines Washer - White',
    description: "GE® GFW550S 28 4.8 cu. ft. Capacity Smart Front Load ENERGY STAR® Washer - White. GE GFW550SSNWW Overview This 28 Front Load Washer by GE offers 4.8 cu. ft. of capacity with up to 10 wash cycles to choose from. The washer also features UltraFresh Vent System, built-in WiFi and Dynamic Balancing Technology. ",
    price: 953.22
  },
  {
    Id: 'washers2',
    PId: 'washers',
    imageId: 'washers2',
    title: 'LG WM3400CW 4.5 Cu.Ft. White Electric Front Load Washer',
    description: "Fits in more places. Get extra capacity without taking up extra space, thanks to a 30  depth that easily fits into smaller spaces or second-floor closets. Get it all done in less time: Ultra-large capacity means you have the room to do more laundry in fewer loads Cold Wash Technology: Using the cold cycle on your washer doesn't have to mean compromising. Cold Wash Technology uses cold water and enhanced washing motions to penetrate deep into fabrics, giving you cold water savings with warm water performance For small loads that can't wait: Whether it's your kids' favorite shirt, yoga pants, or a school uniform, washing a full load seems wasteful for just a few pieces. Now you can wash small loads that just can't wait with the LG Sidekick Pedestal Washer or wash two loads at once to save time",
    price: 829.98
  },
  {
    Id: 'washers3',
    PId: 'washers',
    imageId: 'washers3',
    title: 'Kenmore 02620232 Top-Load Washer with Dual Action Agitator, 3.5 Cu. ft. Capacity, White',
    description: 'Get the powerful, customizable cleaning your laundry needs with the Kenmore Top-Load Washer. This laundry machine provides a deep, thorough clean for your laundry items and is large enough to clean 14 towels in a single load with its spacious 3.5 cubic foot capacity. Featuring a dual action agitator, the washer cleans in two different directions to ensure even washing for every cycle and efficiently clean ground-in dirt and tough stains. With 11 specialized wash cycles covering everything from bulky/bedding to jeans/towels and delicates along with 5 wash temperatures, its easy to customize each load for the right type of cleaning. The deep fill option allows you to increase the water level for your larger loads to keep your towels, clothing, linens, and more perfectly mixed up during the wash cycle. This powerful top-load clothes washer measures 27.5" W x 27" D x 43" H to top of cabinet and 46.5" H when the lid is open, and pairs perfectly with the Kenmore 60222 Electric Dryer or Kenmore 70222 Gas Dryer (sold separately) for a complete washer and dryer combo.',
    price: 438.00
  },
  {
    Id: 'dryers1',
    PId: 'dryers',
    imageId: 'dryers1',
    title: 'Simzlife 1.6 Cu. ft. Portable Clothes Dryer, Electric Laundry Dryer Machine, 19.5 in W, 23.6 in H',
    description: "Make drying laundry easy with Simzlife portable electric dryer. It has an 850W motor and efficient vent system, drying up to 10 pounds of wet laundry quickly. The transparent window and 105° door opening angle make it easy to monitor. For added safety, it has automatic shut-off. Enjoy the convenience and peace of mind that our electric clothes dryers bring to your laundry routine.",
    price: 159.99
  },
  {
    Id: 'dryers2',
    PId: 'dryers',
    imageId: 'dryers2',
    title: 'Kenmore Electric Dryer with SmartDry/Wrinkle Guard, 7 Cu. ft. Capacity, White, 43"H x 29"W x 28"D',
    description: 'Make laundry time simple and practical with the Kenmore Electric Dryer. This electric clothes dryer is large enough to take on almost any sized load with its spacious 7-cubic foot capacity. Featuring SmartDry technology, you can spend less time babysitting your laundry and more time focusing on the day. The drying sensors automatically customize and adjust drying temperatures and times to eliminate guesswork while using an integrated thermostat to monitor progress and prevent heat damage or re-drying. Keep your clothing, sheets, and more crisp and wrinkle-free with the convenient Wrinkle Guard option that gives loads a quick toss to prevent set-in wrinkles for up to 40 minutes. With 4 unique drying temperatures and an air dry option, its easy to dry all your wet laundry items from a mountain of towels to a bulky duvet. This powerful dryer measures 43"H x ‎29"W x 28"D and pairs perfectly with the Kenmore 20362 Top-Load Washer (sold separately).',
    price: 448.00
  },
  {
    Id: 'dryers3',
    PId: 'dryers',
    imageId: 'dryers3',
    title: 'Auertech 850W, 1.6 Cu.ft. Electric Portable Dryer Compact Cloth Dryer, Stainless Steel Tub LCD Panel',
    description: "Auertech gray 850W portable dryer, 1.6 Cu.ft. electric compact cloth dryer with stainless steel tub and LCD panel High-efficiency heating and powerful tumbling will make all your clothes dried in the shortest time, easy to operate. 5 drying modes are remarkable. You can select the specific mode depending on the material and the weight of your clothing. The stainless steel drum provides for long-lasting use which can also reduce wrinkles and multiple filtration system effectively removes the odors. No more worries about wet clothes on rainy days and for hours for your clothes to dry or dealing with the hassle of using communal laundry facilities.  ",
    price: 248.99
  },
]

const itemRoutes = Router();

itemRoutes.get('/departements', (req, res) => {
  setTimeout(
    () => res.json([
      {
        Id: 'furniture',
        imageId: 'Furniture',
        title: 'Furniture',
        description: 'Bookcases, Chairs, and Tables',
        categories: ["Bookcases", "Chairs", "Tables"]
      },
      {
        Id: 'grocery',
        imageId: 'Grocery',
        title: 'Grocery',
        description: 'Dairy, Beans, Pasta, Paper products, and cleaning supplies.',
        categories: ['Dairy', 'Beans', 'Pasta', 'Paper products', 'cleaning supplies']
      },
      {
        Id: 'office_supplies',
        imageId: 'OfficeSupplies',
        title: 'Office Supplies',
        description: 'Desk Supplies, Filing Supplies, Paper & Pads, Binding Supplies, and Stationery/mailing supplies',
        categories: ['Desk Supplies', 'Filing Supplies', 'Paper & Pads', 'Binding Supplies', 'Stationery/mailing supplies']
      },
      {
        Id: 'clothing',
        imageId: 'Clothing',
        title: 'Clothing',
        description: 'Shoes, Socks, Dresses, Jackets, Shorts and Shirts',
        categories: ['Shoes', 'Socks', 'Dresses', 'Jackets', 'Shorts', 'Shirts']
      },
      {
        Id: 'electronics',
        imageId: 'Electronics',
        title: 'Electronics',
        description: 'Computers, TV, Phones, and Sound System',
        categories: ['Computers', 'TV', 'Phones', 'Sound System']
      },
      {
        Id: 'appliances',
        imageId: 'Appliances',
        title: 'Appliances',
        description: 'Refrigerators, Dishwashers, Microwaves, Washers, Dryers',
        categories: ['Refrigerators', 'Dishwashers', 'Microwaves', 'Washers', 'Dryers']
      },
    ]),
    // Adds a fake server side delay
    10,
  );
});


itemRoutes.get('/categories', (req, res) => {

  setTimeout(
    () => res.json(categories),
    // Adds a fake server side delay
    10,
  );
});

itemRoutes.get('/products', (req, res) => {
  // const id = req.query.id;
  // setTimeout(
  //   () => res.json(products.filter((cat) => cat.PId===id)),
  //   // Adds a fake server side delay
  //   500,
  // );
  setTimeout(
    () => res.json(products),
    // Adds a fake server side delay
    10,
  );
});

module.exports = itemRoutes;
