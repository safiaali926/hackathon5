import React from "react";

const products = [
  {
    id: 1,
    title: "Vel elit euismod",
    price: "$29.99",
    imgSrc: "/p5.png",
    colors: ["Red", "Blue", "Green"],
  },
  {
    id: 2,
    title: "Vel elit euismod",
    price: "$49.99",
    imgSrc: "/p6.png",
    colors: ["Black", "White", "Gray"],
  },
  {
    id: 3,
    title: "Vel elit euismod",
    price: "$69.99",
    imgSrc: "/p7.png",
    colors: ["Purple", "Yellow", "Pink"],
  },
  {
    id: 4,
    title: "Vel elit euismod",
    price: "$39.99",
    imgSrc: "/p8.png",
    colors: ["Orange", "Blue", "White"],
  },
  {
    id: 5,
    title: "Vel elit euismod",
    price: "$59.99",
    imgSrc: "/p9.png",
    colors: ["Red", "Black", "Yellow"],
  },
  {
    id: 6,
    title: "Vel elit euismod",
    price: "$89.99",
    imgSrc: "/p11.png",
    colors: ["Green", "Gray", "Blue"],
  },
  {
    id: 7,
    title: "Vel elit euismod",
    price: "$19.99",
    imgSrc: "/p12.png",
    colors: ["Pink", "White", "Black"],
  },
  {
    id: 8,
    title: "Vel elit euismod",
    price: "$79.99",
    imgSrc: "/p4.png",
    colors: ["Brown", "Blue", "Gray"],
  },
  {
    id: 9,
    title: "Vel elit euismod",
    price: "$99.99",
    imgSrc: "/p3.png",
    colors: ["Red", "Purple", "Black"],
  },
  {
    id: 10,
    title: "Vel elit euismod",
    price: "$199.99",
    imgSrc: "/p1.png",
    colors: ["Gold", "Silver", "White"],
  },
  {
    id: 11,
    title: "Vel elit euismod",
    price: "$129.99",
    imgSrc: "/p11.png",
    colors: ["Black", "Red", "Blue"],
  },
  {
    id: 12,
    title: "Vel elit euismod",
    price: "$159.99",
    imgSrc: "/p7.png",
    colors: ["White", "Gray", "Yellow"],
  },
];

const ProductGrid: React.FC = () => {
  return (
    <>
      {/* Header Section */}
      <div className="relative w-full h-[200px] bg-[#F6F5FF] text-left px-6 md:px-9 flex items-center justify-start mx-auto">
        <div className="max-w-xl w-full">
          <h1 className="text-[#151875] font-bold text-xl md:text-2xl">
            Shop Grid Default
          </h1>
          <p>
            Home . Page . <span className="text-pink-500">Shop Grid Default</span>
          </p>
        </div>
      </div>

      {/* Products Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-center text-2xl md:text-3xl font-bold text-blue-900 mb-8">
          Our Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="text-center">
              {/* Image Container */}
              <div
                className="bg-gray-100 rounded-md p-4 mx-auto"
                style={{ height: "200px" }}
              >
                <img
                  src={product.imgSrc}
                  alt={product.title}
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Content Outside the Box */}
              <div className="mt-4">
                <h2 className="text-md font-semibold text-[#151875]">
                  {product.title}
                </h2>
                <p className="text-md  text-[#151875]">
                  {product.price}
                  <span className="line-through text-pink-500 px-2">$42.00</span>
                </p>
                <div className="flex justify-center gap-2 mt-2">
                  {product.colors.map((color, index) => (
                    <button
                      key={index}
                      className="w-4 h-4 rounded-full border"
                      style={{ backgroundColor: color.toLowerCase() }}
                    ></button>
                  ))}
                </div>
                <button className="text-[#151875] hover:text-pink-500 underline mt-4">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProductGrid;
