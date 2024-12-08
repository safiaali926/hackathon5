import Image from "next/image";   
import { Heart, ShoppingCart, ZoomIn } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LatestProduct() {
  return (
    <div className="m-9">
      {/* Featured Products Title centered */}
      <div className="text-[#151875] text-3xl font-bold text-center mb-8">
        Latest Products
      </div>

      <Tabs defaultValue="new arrival" className="w-full">
        <TabsList className="bg-white flex justify-center space-x-8">
          <TabsTrigger value="new arrival" className="hover:text-pink-500 hover:underline text-[#151875]">New Arrival</TabsTrigger>
          <TabsTrigger value="best seller" className="hover:text-pink-500 hover:underline text-[#151875]">Best Seller</TabsTrigger>
          <TabsTrigger value="featured" className="hover:text-pink-500 hover:underline text-[#151875]">Featured</TabsTrigger>
          <TabsTrigger value="special offer" className="hover:text-pink-500 hover:underline text-[#151875]">Special Offer</TabsTrigger>
        </TabsList>

        {/* Content for New Arrival Tab */}
        <TabsContent value="new arrival">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 m-9">
            {/* Product 1 */}
            <div className="relative group">
              {/* Product Image */}
              <div className="relative">
                <Image
                  src="/p5.png"
                  alt="Comfort Handy Craft"
                  width={250}  // Decreased width
                  height={250} // Decreased height
                  className="border-2 border-gray-100 w-full h-full bg-gray-100 hover:bg-white"
                />
                {/* Sale Tag - Appear only on hover */}
                <div className="absolute top-2 left-2 bg-blue-900 text-white text-xs px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Sale
                </div>
                {/* Hover Icons at Bottom Left */}
                <div className="absolute bottom-2 left-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all">
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <Heart className="w-5 h-5 text-sky-500" /> {/* Smaller size */}
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <ShoppingCart className="w-5 h-5 text-blue-800" /> {/* Smaller size */}
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <ZoomIn className="w-5 h-5 text-sky-500" /> {/* Smaller size */}
                  </button>
                </div>
              </div>
              {/* Product Title - Link added */}
              <div className="mt-4 flex items-center">
                <a href="/product/comfort-handy-craft" className="border-b-2 border-gray-200 text-[#151875] font-semibold text-sm pr-2">
                  Comfort Handy Craft
                </a>
              </div>
              {/* Product Price - Positioned at the bottom right */}
              <div className="absolute bottom-2 right-2 text-sm text-[#151875] font-semibold">
                <p>
                  $42.00
                  <span className="line-through text-red-500 text-sm px-1">
                    $65.00
                  </span>
                </p>
              </div>
            </div>

            {/* Product 2 */}
            <div className="relative group">
              <div className="relative">
                <Image
                  src="/p6.png"
                  alt="Comfort Handy Craft"
                  width={250}  // Decreased width
                  height={250} // Decreased height
                  className="border-2 border-gray-100 w-full h-full bg-gray-100 hover:bg-white"
                />
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Sale
                </div>
                <div className="absolute bottom-2 left-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all">
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <Heart className="w-5 h-5 text-sky-500" />
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <ShoppingCart className="w-5 h-5 text-blue-800" />
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <ZoomIn className="w-5 h-5 text-sky-500" />
                  </button>
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <a href="/product/comfort-handy-craft" className="border-b-2 border-gray-200 text-[#151875] font-semibold text-sm pr-2">
                  Comfort Handy Craft
                </a>
              </div>
              <div className="absolute bottom-2 right-2 text-sm text-[#151875] font-semibold">
                <p>
                  $42.00
                  <span className="line-through text-red-500 text-sm px-1">
                    $65.00
                  </span>
                </p>
              </div>
            </div>

            {/* Product 3 */}
            <div className="relative group">
              <div className="relative">
                <Image
                  src="/p7.png"
                  alt="Comfort Handy Craft"
                  width={250}  // Decreased width
                  height={250} // Decreased height
                  className="border-2 border-gray-100 w-full h-full bg-gray-100 hover:bg-white"
                />
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Sale
                </div>
                <div className="absolute bottom-2 left-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all">
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <Heart className="w-5 h-5 text-sky-500" />
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <ShoppingCart className="w-5 h-5 text-blue-800" />
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <ZoomIn className="w-5 h-5 text-sky-500" />
                  </button>
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <a href="/product/comfort-handy-craft" className="border-b-2 border-gray-200 text-[#151875] font-semibold text-sm pr-2">
                  Comfort Handy Craft
                </a>
              </div>
              <div className="absolute bottom-2 right-2 text-sm text-[#151875] font-semibold">
                <p>
                  $42.00
                  <span className="line-through text-red-500 text-sm px-1">
                    $65.00
                  </span>
                </p>
              </div>
            </div>



             {/* Product 4 */}
             <div className="relative group">
              {/* Product Image */}
              <div className="relative">
                <Image
                  src="/p1.png"
                  alt="Comfort Handy Craft"
                  width={250}  // Decreased width
                  height={250} // Decreased height
                  className="border-2 border-gray-100 w-full p-5 h-full bg-gray-100 hover:bg-white"
                />
                {/* Sale Tag - Appear only on hover */}
                <div className="absolute top-2 left-2 bg-blue-900 text-white text-xs px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Sale
                </div>
                {/* Hover Icons at Bottom Left */}
                <div className="absolute bottom-2 left-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all">
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <Heart className="w-5 h-5 text-sky-500" /> {/* Smaller size */}
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <ShoppingCart className="w-5 h-5 text-blue-800" /> {/* Smaller size */}
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <ZoomIn className="w-5 h-5 text-sky-500" /> {/* Smaller size */}
                  </button>
                </div>
              </div>
              {/* Product Title - Link added */}
              <div className="mt-4 flex items-center">
                <a href="/product/comfort-handy-craft" className="border-b-2 border-gray-200 text-[#151875] font-semibold text-sm pr-2">
                  Comfort Handy Craft
                </a>
              </div>
              {/* Product Price - Positioned at the bottom right */}
              <div className="absolute bottom-2 right-2 text-sm text-[#151875] font-semibold">
                <p>
                  $42.00
                  <span className="line-through text-red-500 text-sm px-1">
                    $65.00
                  </span>
                </p>
              </div>
            </div>


             {/* Product 5 */}
             <div className="relative group">
              {/* Product Image */}
              <div className="relative">
                <Image
                  src="/p3.png"
                  alt="Comfort Handy Craft"
                  width={250}  // Decreased width
                  height={250} // Decreased height
                  className="border-2 border-gray-100 w-full p-2 h-full bg-gray-100 hover:bg-white"
                />
                {/* Sale Tag - Appear only on hover */}
                <div className="absolute top-2 left-2 bg-blue-900 text-white text-xs px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Sale
                </div>
                {/* Hover Icons at Bottom Left */}
                <div className="absolute bottom-2 left-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all">
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <Heart className="w-5 h-5 text-sky-500" /> {/* Smaller size */}
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <ShoppingCart className="w-5 h-5 text-blue-800" /> {/* Smaller size */}
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <ZoomIn className="w-5 h-5 text-sky-500" /> {/* Smaller size */}
                  </button>
                </div>


                
              </div>
              {/* Product Title - Link added */}
              <div className="mt-4 flex items-center">
                <a href="/product/comfort-handy-craft" className=" border-b-2 border-gray-200 text-[#151875] font-semibold text-sm pr-2">
                  Comfort Handy Craft
                </a>
              </div>
              {/* Product Price - Positioned at the bottom right */}
              <div className="absolute bottom-2 right-2 text-sm text-[#151875] font-semibold">
                <p>
                  $42.00
                  <span className="line-through text-red-500 text-sm px-1">
                    $65.00
                  </span>
                </p>
              </div>
            </div>


 {/* Product 6 */}
 <div className="relative group">
              {/* Product Image */}
              <div className="relative">
                <Image
                  src="/p10.png"
                  alt="Comfort Handy Craft"
                  width={250}  // Decreased width
                  height={250} // Decreased height
                  className="border-2 border-gray-100 w-full p-2 h-full bg-gray-100 hover:bg-white"
                />
                {/* Sale Tag - Appear only on hover */}
                <div className="absolute top-2 left-2 bg-blue-900 text-white text-xs px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Sale
                </div>
                {/* Hover Icons at Bottom Left */}
                <div className="absolute bottom-2 left-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all">
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <Heart className="w-5 h-5 text-sky-500" /> {/* Smaller size */}
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <ShoppingCart className="w-5 h-5 text-blue-800" /> {/* Smaller size */}
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <ZoomIn className="w-5 h-5 text-sky-500" /> {/* Smaller size */}
                  </button>
                </div>


                
              </div>
              {/* Product Title - Link added */}
              <div className="mt-4 flex items-center">
                <a href="/product/comfort-handy-craft" className="border-b-2 border-gray-200 text-[#151875] font-semibold text-sm pr-2">
                  Comfort Handy Craft
                </a>
              </div>
              {/* Product Price - Positioned at the bottom right */}
              <div className="absolute bottom-2 right-2 text-sm text-[#151875] font-semibold">
                <p>
                  $42.00
                  <span className="line-through text-red-500 text-sm px-1">
                    $65.00
                  </span>
                </p>
              </div>
            </div>


          </div>
        </TabsContent>

        {/* Other Tab Contents */}
        <TabsContent value="best seller">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 m-9">
            {/* Product 1 */}
            <div className="relative group">
              {/* Product Image */}
              <div className="relative">
                <Image
                  src="/p11.png"
                  alt="Comfort Handy Craft"
                  width={250}  // Decreased width
                  height={250} // Decreased height
                  className="border-2 border-gray-100 w-full h-full bg-gray-100 hover:bg-white"
                />
                {/* Sale Tag - Appear only on hover */}
                <div className="absolute top-2 left-2 bg-blue-900 text-white text-xs px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Sale
                </div>
                {/* Hover Icons at Bottom Left */}
                <div className="absolute bottom-2 left-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all">
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <Heart className="w-5 h-5 text-sky-500" /> {/* Smaller size */}
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <ShoppingCart className="w-5 h-5 text-blue-800" /> {/* Smaller size */}
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <ZoomIn className="w-5 h-5 text-sky-500" /> {/* Smaller size */}
                  </button>
                </div>
              </div>
              {/* Product Title - Link added */}
              <div className="mt-4 flex items-center">
                <a href="/product/comfort-handy-craft" className="border-b-2 border-gray-200 text-[#151875] font-semibold text-sm pr-2">
                  Comfort Handy Craft
                </a>
              </div>
              {/* Product Price - Positioned at the bottom right */}
              <div className="absolute bottom-2 right-2 text-sm text-[#151875] font-semibold">
                <p>
                  $42.00
                  <span className="line-through text-red-500 text-sm px-1">
                    $65.00
                  </span>
                </p>
              </div>
            </div>

            {/* Product 2 */}
            <div className="relative group">
              <div className="relative">
                <Image
                  src="/p12.png"
                  alt="Comfort Handy Craft"
                  width={250}  // Decreased width
                  height={250} // Decreased height
                  className="border-2 border-gray-100 w-full h-full bg-gray-100 hover:bg-white"
                />
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Sale
                </div>
                <div className="absolute bottom-2 left-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all">
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <Heart className="w-5 h-5 text-sky-500" />
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <ShoppingCart className="w-5 h-5 text-blue-800" />
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <ZoomIn className="w-5 h-5 text-sky-500" />
                  </button>
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <a href="/product/comfort-handy-craft" className="border-b-2 border-gray-200 text-[#151875] font-semibold text-sm pr-2">
                  Comfort Handy Craft
                </a>
              </div>
              <div className="absolute bottom-2 right-2 text-sm text-[#151875] font-semibold">
                <p>
                  $42.00
                  <span className="line-through text-red-500 text-sm px-1">
                    $65.00
                  </span>
                </p>
              </div>
            </div>

            {/* Product 3 */}
            <div className="relative group">
              <div className="relative">
                <Image
                  src="/p9.png"
                  alt="Comfort Handy Craft"
                  width={250}  // Decreased width
                  height={250} // Decreased height
                  className="border-2 border-gray-100 w-full h-full bg-gray-100 hover:bg-white"
                />
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Sale
                </div>
                <div className="absolute bottom-2 left-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all">
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <Heart className="w-5 h-5 text-sky-500" />
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <ShoppingCart className="w-5 h-5 text-blue-800" />
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <ZoomIn className="w-5 h-5 text-sky-500" />
                  </button>
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <a href="/product/comfort-handy-craft" className="border-b-2 border-gray-200 text-[#151875] font-semibold text-sm pr-2">
                  Comfort Handy Craft
                </a>
              </div>
              <div className="absolute bottom-2 right-2 text-sm text-[#151875] font-semibold">
                <p>
                  $42.00
                  <span className="line-through text-red-500 text-sm px-1">
                    $65.00
                  </span>
                </p>
              </div>
            </div>



             {/* Product 4 */}
             <div className="relative group">
              {/* Product Image */}
              <div className="relative">
                <Image
                  src="/p6.png"
                  alt="Comfort Handy Craft"
                  width={250}  // Decreased width
                  height={250} // Decreased height
                  className="border-2 border-gray-100 w-full p-5 h-full bg-gray-100 hover:bg-white"
                />
                {/* Sale Tag - Appear only on hover */}
                <div className="absolute top-2 left-2 bg-blue-900 text-white text-xs px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Sale
                </div>
                {/* Hover Icons at Bottom Left */}
                <div className="absolute bottom-2 left-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all">
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <Heart className="w-5 h-5 text-sky-500" /> {/* Smaller size */}
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <ShoppingCart className="w-5 h-5 text-blue-800" /> {/* Smaller size */}
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <ZoomIn className="w-5 h-5 text-sky-500" /> {/* Smaller size */}
                  </button>
                </div>
              </div>
              {/* Product Title - Link added */}
              <div className="mt-4 flex items-center">
                <a href="/product/comfort-handy-craft" className="border-b-2 border-gray-200 text-[#151875] font-semibold text-sm pr-2">
                  Comfort Handy Craft
                </a>
              </div>
              {/* Product Price - Positioned at the bottom right */}
              <div className="absolute bottom-2 right-2 text-sm text-[#151875] font-semibold">
                <p>
                  $42.00
                  <span className="line-through text-red-500 text-sm px-1">
                    $65.00
                  </span>
                </p>
              </div>
            </div>


             {/* Product 5 */}
             <div className="relative group">
              {/* Product Image */}
              <div className="relative">
                <Image
                  src="/p3.png"
                  alt="Comfort Handy Craft"
                  width={250}  // Decreased width
                  height={250} // Decreased height
                  className="border-2 border-gray-100 w-full p-2 h-full bg-gray-100 hover:bg-white"
                />
                {/* Sale Tag - Appear only on hover */}
                <div className="absolute top-2 left-2 bg-blue-900 text-white text-xs px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Sale
                </div>
                {/* Hover Icons at Bottom Left */}
                <div className="absolute bottom-2 left-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all">
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <Heart className="w-5 h-5 text-sky-500" /> {/* Smaller size */}
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <ShoppingCart className="w-5 h-5 text-blue-800" /> {/* Smaller size */}
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <ZoomIn className="w-5 h-5 text-sky-500" /> {/* Smaller size */}
                  </button>
                </div>


                
              </div>
              {/* Product Title - Link added */}
              <div className="mt-4 flex items-center">
                <a href="/product/comfort-handy-craft" className=" border-b-2 border-gray-200 text-[#151875] font-semibold text-sm pr-2">
                  Comfort Handy Craft
                </a>
              </div>
              {/* Product Price - Positioned at the bottom right */}
              <div className="absolute bottom-2 right-2 text-sm text-[#151875] font-semibold">
                <p>
                  $42.00
                  <span className="line-through text-red-500 text-sm px-1">
                    $65.00
                  </span>
                </p>
              </div>
            </div>


 {/* Product 6 */}
 <div className="relative group">
              {/* Product Image */}
              <div className="relative">
                <Image
                  src="/p10.png"
                  alt="Comfort Handy Craft"
                  width={250}  // Decreased width
                  height={250} // Decreased height
                  className="border-2 border-gray-100 w-full p-2 h-full bg-gray-100 hover:bg-white"
                />
                {/* Sale Tag - Appear only on hover */}
                <div className="absolute top-2 left-2 bg-blue-900 text-white text-xs px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Sale
                </div>
                {/* Hover Icons at Bottom Left */}
                <div className="absolute bottom-2 left-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all">
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <Heart className="w-5 h-5 text-sky-500" /> {/* Smaller size */}
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <ShoppingCart className="w-5 h-5 text-blue-800" /> {/* Smaller size */}
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <ZoomIn className="w-5 h-5 text-sky-500" /> {/* Smaller size */}
                  </button>
                </div>


                
              </div>
              {/* Product Title - Link added */}
              <div className="mt-4 flex items-center">
                <a href="/product/comfort-handy-craft" className="border-b-2 border-gray-200 text-[#151875] font-semibold text-sm pr-2">
                  Comfort Handy Craft
                </a>
              </div>
              {/* Product Price - Positioned at the bottom right */}
              <div className="absolute bottom-2 right-2 text-sm text-[#151875] font-semibold">
                <p>
                  $42.00
                  <span className="line-through text-red-500 text-sm px-1">
                    $65.00
                  </span>
                </p>
              </div>
            </div>


          </div>
        </TabsContent>
       
        <TabsContent value="featured">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 m-9">
            {/* Product 1 */}
            <div className="relative group">
              {/* Product Image */}
              <div className="relative">
                <Image
                  src="/p5.png"
                  alt="Comfort Handy Craft"
                  width={250}  // Decreased width
                  height={250} // Decreased height
                  className="border-2 border-gray-100 w-full h-full bg-gray-100 hover:bg-white"
                />
                {/* Sale Tag - Appear only on hover */}
                <div className="absolute top-2 left-2 bg-blue-900 text-white text-xs px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Sale
                </div>
                {/* Hover Icons at Bottom Left */}
                <div className="absolute bottom-2 left-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all">
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <Heart className="w-5 h-5 text-sky-500" /> {/* Smaller size */}
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <ShoppingCart className="w-5 h-5 text-blue-800" /> {/* Smaller size */}
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <ZoomIn className="w-5 h-5 text-sky-500" /> {/* Smaller size */}
                  </button>
                </div>
              </div>
              {/* Product Title - Link added */}
              <div className="mt-4 flex items-center">
                <a href="/product/comfort-handy-craft" className="border-b-2 border-gray-200 text-[#151875] font-semibold text-sm pr-2">
                  Comfort Handy Craft
                </a>
              </div>
              {/* Product Price - Positioned at the bottom right */}
              <div className="absolute bottom-2 right-2 text-sm text-[#151875] font-semibold">
                <p>
                  $42.00
                  <span className="line-through text-red-500 text-sm px-1">
                    $65.00
                  </span>
                </p>
              </div>
            </div>

            {/* Product 2 */}
            <div className="relative group">
              <div className="relative">
                <Image
                  src="/p6.png"
                  alt="Comfort Handy Craft"
                  width={250}  // Decreased width
                  height={250} // Decreased height
                  className="border-2 border-gray-100 w-full h-full bg-gray-100 hover:bg-white"
                />
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Sale
                </div>
                <div className="absolute bottom-2 left-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all">
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <Heart className="w-5 h-5 text-sky-500" />
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <ShoppingCart className="w-5 h-5 text-blue-800" />
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <ZoomIn className="w-5 h-5 text-sky-500" />
                  </button>
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <a href="/product/comfort-handy-craft" className="border-b-2 border-gray-200 text-[#151875] font-semibold text-sm pr-2">
                  Comfort Handy Craft
                </a>
              </div>
              <div className="absolute bottom-2 right-2 text-sm text-[#151875] font-semibold">
                <p>
                  $42.00
                  <span className="line-through text-red-500 text-sm px-1">
                    $65.00
                  </span>
                </p>
              </div>
            </div>

            {/* Product 3 */}
            <div className="relative group">
              <div className="relative">
                <Image
                  src="/p7.png"
                  alt="Comfort Handy Craft"
                  width={250}  // Decreased width
                  height={250} // Decreased height
                  className="border-2 border-gray-100 w-full h-full bg-gray-100 hover:bg-white"
                />
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Sale
                </div>
                <div className="absolute bottom-2 left-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all">
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <Heart className="w-5 h-5 text-sky-500" />
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <ShoppingCart className="w-5 h-5 text-blue-800" />
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <ZoomIn className="w-5 h-5 text-sky-500" />
                  </button>
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <a href="/product/comfort-handy-craft" className="border-b-2 border-gray-200 text-[#151875] font-semibold text-sm pr-2">
                  Comfort Handy Craft
                </a>
              </div>
              <div className="absolute bottom-2 right-2 text-sm text-[#151875] font-semibold">
                <p>
                  $42.00
                  <span className="line-through text-red-500 text-sm px-1">
                    $65.00
                  </span>
                </p>
              </div>
            </div>



             {/* Product 4 */}
             <div className="relative group">
              {/* Product Image */}
              <div className="relative">
                <Image
                  src="/p1.png"
                  alt="Comfort Handy Craft"
                  width={250}  // Decreased width
                  height={250} // Decreased height
                  className="border-2 border-gray-100 w-full p-5 h-full bg-gray-100 hover:bg-white"
                />
                {/* Sale Tag - Appear only on hover */}
                <div className="absolute top-2 left-2 bg-blue-900 text-white text-xs px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Sale
                </div>
                {/* Hover Icons at Bottom Left */}
                <div className="absolute bottom-2 left-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all">
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <Heart className="w-5 h-5 text-sky-500" /> {/* Smaller size */}
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <ShoppingCart className="w-5 h-5 text-blue-800" /> {/* Smaller size */}
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <ZoomIn className="w-5 h-5 text-sky-500" /> {/* Smaller size */}
                  </button>
                </div>
              </div>
              {/* Product Title - Link added */}
              <div className="mt-4 flex items-center">
                <a href="/product/comfort-handy-craft" className="border-b-2 border-gray-200 text-[#151875] font-semibold text-sm pr-2">
                  Comfort Handy Craft
                </a>
              </div>
              {/* Product Price - Positioned at the bottom right */}
              <div className="absolute bottom-2 right-2 text-sm text-[#151875] font-semibold">
                <p>
                  $42.00
                  <span className="line-through text-red-500 text-sm px-1">
                    $65.00
                  </span>
                </p>
              </div>
            </div>


             {/* Product 5 */}
             <div className="relative group">
              {/* Product Image */}
              <div className="relative">
                <Image
                  src="/p3.png"
                  alt="Comfort Handy Craft"
                  width={250}  // Decreased width
                  height={250} // Decreased height
                  className="border-2 border-gray-100 w-full p-2 h-full bg-gray-100 hover:bg-white"
                />
                {/* Sale Tag - Appear only on hover */}
                <div className="absolute top-2 left-2 bg-blue-900 text-white text-xs px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Sale
                </div>
                {/* Hover Icons at Bottom Left */}
                <div className="absolute bottom-2 left-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all">
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <Heart className="w-5 h-5 text-sky-500" /> {/* Smaller size */}
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <ShoppingCart className="w-5 h-5 text-blue-800" /> {/* Smaller size */}
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <ZoomIn className="w-5 h-5 text-sky-500" /> {/* Smaller size */}
                  </button>
                </div>


                
              </div>
              {/* Product Title - Link added */}
              <div className="mt-4 flex items-center">
                <a href="/product/comfort-handy-craft" className=" border-b-2 border-gray-200 text-[#151875] font-semibold text-sm pr-2">
                  Comfort Handy Craft
                </a>
              </div>
              {/* Product Price - Positioned at the bottom right */}
              <div className="absolute bottom-2 right-2 text-sm text-[#151875] font-semibold">
                <p>
                  $42.00
                  <span className="line-through text-red-500 text-sm px-1">
                    $65.00
                  </span>
                </p>
              </div>
            </div>


 {/* Product 6 */}
 <div className="relative group">
              {/* Product Image */}
              <div className="relative">
                <Image
                  src="/p10.png"
                  alt="Comfort Handy Craft"
                  width={250}  // Decreased width
                  height={250} // Decreased height
                  className="border-2 border-gray-100 w-full p-2 h-full bg-gray-100 hover:bg-white"
                />
                {/* Sale Tag - Appear only on hover */}
                <div className="absolute top-2 left-2 bg-blue-900 text-white text-xs px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Sale
                </div>
                {/* Hover Icons at Bottom Left */}
                <div className="absolute bottom-2 left-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all">
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <Heart className="w-5 h-5 text-sky-500" /> {/* Smaller size */}
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <ShoppingCart className="w-5 h-5 text-blue-800" /> {/* Smaller size */}
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <ZoomIn className="w-5 h-5 text-sky-500" /> {/* Smaller size */}
                  </button>
                </div>


                
              </div>
              {/* Product Title - Link added */}
              <div className="mt-4 flex items-center">
                <a href="/product/comfort-handy-craft" className="border-b-2 border-gray-200 text-[#151875] font-semibold text-sm pr-2">
                  Comfort Handy Craft
                </a>
              </div>
              {/* Product Price - Positioned at the bottom right */}
              <div className="absolute bottom-2 right-2 text-sm text-[#151875] font-semibold">
                <p>
                  $42.00
                  <span className="line-through text-red-500 text-sm px-1">
                    $65.00
                  </span>
                </p>
              </div>
            </div>


          </div>
        </TabsContent>


         {/* Other Tab Contents */}
         <TabsContent value="special offer">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 m-9">
            {/* Product 1 */}
            <div className="relative group">
              {/* Product Image */}
              <div className="relative">
                <Image
                  src="/p11.png"
                  alt="Comfort Handy Craft"
                  width={250}  // Decreased width
                  height={250} // Decreased height
                  className="border-2 border-gray-100 w-full h-full bg-gray-100 hover:bg-white"
                />
                {/* Sale Tag - Appear only on hover */}
                <div className="absolute top-2 left-2 bg-blue-900 text-white text-xs px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Sale
                </div>
                {/* Hover Icons at Bottom Left */}
                <div className="absolute bottom-2 left-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all">
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <Heart className="w-5 h-5 text-sky-500" /> {/* Smaller size */}
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <ShoppingCart className="w-5 h-5 text-blue-800" /> {/* Smaller size */}
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <ZoomIn className="w-5 h-5 text-sky-500" /> {/* Smaller size */}
                  </button>
                </div>
              </div>
              {/* Product Title - Link added */}
              <div className="mt-4 flex items-center">
                <a href="/product/comfort-handy-craft" className="border-b-2 border-gray-200 text-[#151875] font-semibold text-sm pr-2">
                  Comfort Handy Craft
                </a>
              </div>
              {/* Product Price - Positioned at the bottom right */}
              <div className="absolute bottom-2 right-2 text-sm text-[#151875] font-semibold">
                <p>
                  $42.00
                  <span className="line-through text-red-500 text-sm px-1">
                    $65.00
                  </span>
                </p>
              </div>
            </div>

            {/* Product 2 */}
            <div className="relative group">
              <div className="relative">
                <Image
                  src="/p12.png"
                  alt="Comfort Handy Craft"
                  width={250}  // Decreased width
                  height={250} // Decreased height
                  className="border-2 border-gray-100 w-full h-full bg-gray-100 hover:bg-white"
                />
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Sale
                </div>
                <div className="absolute bottom-2 left-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all">
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <Heart className="w-5 h-5 text-sky-500" />
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <ShoppingCart className="w-5 h-5 text-blue-800" />
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <ZoomIn className="w-5 h-5 text-sky-500" />
                  </button>
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <a href="/product/comfort-handy-craft" className="border-b-2 border-gray-200 text-[#151875] font-semibold text-sm pr-2">
                  Comfort Handy Craft
                </a>
              </div>
              <div className="absolute bottom-2 right-2 text-sm text-[#151875] font-semibold">
                <p>
                  $42.00
                  <span className="line-through text-red-500 text-sm px-1">
                    $65.00
                  </span>
                </p>
              </div>
            </div>

            {/* Product 3 */}
            <div className="relative group">
              <div className="relative">
                <Image
                  src="/p9.png"
                  alt="Comfort Handy Craft"
                  width={250}  // Decreased width
                  height={250} // Decreased height
                  className="border-2 border-gray-100 w-full h-full bg-gray-100 hover:bg-white"
                />
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Sale
                </div>
                <div className="absolute bottom-2 left-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all">
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <Heart className="w-5 h-5 text-sky-500" />
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <ShoppingCart className="w-5 h-5 text-blue-800" />
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <ZoomIn className="w-5 h-5 text-sky-500" />
                  </button>
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <a href="/product/comfort-handy-craft" className="border-b-2 border-gray-200 text-[#151875] font-semibold text-sm pr-2">
                  Comfort Handy Craft
                </a>
              </div>
              <div className="absolute bottom-2 right-2 text-sm text-[#151875] font-semibold">
                <p>
                  $42.00
                  <span className="line-through text-red-500 text-sm px-1">
                    $65.00
                  </span>
                </p>
              </div>
            </div>



             {/* Product 4 */}
             <div className="relative group">
              {/* Product Image */}
              <div className="relative">
                <Image
                  src="/p6.png"
                  alt="Comfort Handy Craft"
                  width={250}  // Decreased width
                  height={250} // Decreased height
                  className="border-2 border-gray-100 w-full p-5 h-full bg-gray-100 hover:bg-white"
                />
                {/* Sale Tag - Appear only on hover */}
                <div className="absolute top-2 left-2 bg-blue-900 text-white text-xs px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Sale
                </div>
                {/* Hover Icons at Bottom Left */}
                <div className="absolute bottom-2 left-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all">
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <Heart className="w-5 h-5 text-sky-500" /> {/* Smaller size */}
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <ShoppingCart className="w-5 h-5 text-blue-800" /> {/* Smaller size */}
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <ZoomIn className="w-5 h-5 text-sky-500" /> {/* Smaller size */}
                  </button>
                </div>
              </div>
              {/* Product Title - Link added */}
              <div className="mt-4 flex items-center">
                <a href="/product/comfort-handy-craft" className="border-b-2 border-gray-200 text-[#151875] font-semibold text-sm pr-2">
                  Comfort Handy Craft
                </a>
              </div>
              {/* Product Price - Positioned at the bottom right */}
              <div className="absolute bottom-2 right-2 text-sm text-[#151875] font-semibold">
                <p>
                  $42.00
                  <span className="line-through text-red-500 text-sm px-1">
                    $65.00
                  </span>
                </p>
              </div>
            </div>


             {/* Product 5 */}
             <div className="relative group">
              {/* Product Image */}
              <div className="relative">
                <Image
                  src="/p3.png"
                  alt="Comfort Handy Craft"
                  width={250}  // Decreased width
                  height={250} // Decreased height
                  className="border-2 border-gray-100 w-full p-2 h-full bg-gray-100 hover:bg-white"
                />
                {/* Sale Tag - Appear only on hover */}
                <div className="absolute top-2 left-2 bg-blue-900 text-white text-xs px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Sale
                </div>
                {/* Hover Icons at Bottom Left */}
                <div className="absolute bottom-2 left-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all">
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <Heart className="w-5 h-5 text-sky-500" /> {/* Smaller size */}
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <ShoppingCart className="w-5 h-5 text-blue-800" /> {/* Smaller size */}
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <ZoomIn className="w-5 h-5 text-sky-500" /> {/* Smaller size */}
                  </button>
                </div>


                
              </div>
              {/* Product Title - Link added */}
              <div className="mt-4 flex items-center">
                <a href="/product/comfort-handy-craft" className=" border-b-2 border-gray-200 text-[#151875] font-semibold text-sm pr-2">
                  Comfort Handy Craft
                </a>
              </div>
              {/* Product Price - Positioned at the bottom right */}
              <div className="absolute bottom-2 right-2 text-sm text-[#151875] font-semibold">
                <p>
                  $42.00
                  <span className="line-through text-red-500 text-sm px-1">
                    $65.00
                  </span>
                </p>
              </div>
            </div>


 {/* Product 6 */}
 <div className="relative group">
              {/* Product Image */}
              <div className="relative">
                <Image
                  src="/p10.png"
                  alt="Comfort Handy Craft"
                  width={250}  // Decreased width
                  height={250} // Decreased height
                  className="border-2 border-gray-100 w-full p-2 h-full bg-gray-100 hover:bg-white"
                />
                {/* Sale Tag - Appear only on hover */}
                <div className="absolute top-2 left-2 bg-blue-900 text-white text-xs px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Sale
                </div>
                {/* Hover Icons at Bottom Left */}
                <div className="absolute bottom-2 left-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all">
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <Heart className="w-5 h-5 text-sky-500" /> {/* Smaller size */}
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <ShoppingCart className="w-5 h-5 text-blue-800" /> {/* Smaller size */}
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <ZoomIn className="w-5 h-5 text-sky-500" /> {/* Smaller size */}
                  </button>
                </div>


                
              </div>
              {/* Product Title - Link added */}
              <div className="mt-4 flex items-center">
                <a href="/product/comfort-handy-craft" className="border-b-2 border-gray-200 text-[#151875] font-semibold text-sm pr-2">
                  Comfort Handy Craft
                </a>
              </div>
              {/* Product Price - Positioned at the bottom right */}
              <div className="absolute bottom-2 right-2 text-sm text-[#151875] font-semibold">
                <p>
                  $42.00
                  <span className="line-through text-red-500 text-sm px-1">
                    $65.00
                  </span>
                </p>
              </div>
            </div>


          </div>
        </TabsContent>
        
      </Tabs>
    </div>
  );
}
