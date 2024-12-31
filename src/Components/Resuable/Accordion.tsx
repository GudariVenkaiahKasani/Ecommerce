import React, { useState } from "react";
const accordionData = [
  {
    id: 1,
    title: "Eco-Friendly Plants",
    content:
      "Transform your home and office with our beautiful selection of **eco-friendly plants** that are perfect for improving air quality and bringing nature indoors. Whether you're new to plants or a seasoned plant parent, we offer a wide variety of **indoor plants** such as **snake plants**, **peace lilies**, **spider plants**, and more. These plants are known for their ability to purify the air by removing toxins like formaldehyde and benzene. In addition to their health benefits, our plants are carefully selected from trusted nurseries that prioritize sustainable growing practices. Make a positive environmental impact and enjoy the benefits of cleaner, fresher air every day. Each plant comes with personalized care instructions to help it thrive in your space.",
    image: "https://example.com/images/plants.jpg",
  },
  {
    id: 2,
    title: "Sustainable Gardening Tools",
    content:
      "Gardening doesn't have to harm the planet. With our **sustainable gardening tools**, you can enjoy your hobby while reducing your environmental footprint. Our collection includes tools made from **recycled materials**, **bamboo handles**, and **biodegradable plant pots**. Whether you’re planting flowers, growing vegetables, or caring for your backyard, these tools are designed to help you garden in an eco-friendly way. We also offer **natural pest control** solutions, such as non-toxic sprays and **compostable plant tags**, making your garden as environmentally friendly as possible. Gardening is more than just planting – it’s about creating a sustainable ecosystem. Our products are designed to minimize waste and support organic gardening practices.",
    image: "https://example.com/images/tools.jpg",
  },
  {
    id: 3,
    title: "Zero Waste Products",
    content:
      "Join the movement towards a more sustainable lifestyle with our **zero waste products**. Every product in this collection is designed to help reduce your environmental impact, from **reusable shopping bags** to **stainless steel straws** and **biodegradable dish sponges**. By making small, mindful changes, you can help eliminate single-use plastics and reduce waste. Our zero waste products are crafted from **natural materials** like bamboo, stainless steel, and organic cotton, all of which are long-lasting and compostable. Make a big impact on the planet by switching to sustainable alternatives for your everyday needs. Every purchase helps reduce your carbon footprint, leading to a healthier, cleaner planet for future generations.",
    image: "https://example.com/images/zerowaste.jpg",
  },
  {
    id: 4,
    title: "Eco-Friendly Home Decor",
    content:
      "Create a stylish and sustainable living space with our selection of **eco-friendly home decor**. Our collection features pieces made from **recycled materials**, **organic fabrics**, and **upcycled goods**. You’ll find everything from **recycled glass vases**, **handcrafted wooden furniture**, and **organic cotton throw blankets**. These items not only add charm and character to your home, but they also support sustainable living by repurposing materials and reducing waste. Whether you’re looking to furnish your home or add eco-friendly touches to your current decor, each piece has been carefully selected to promote environmental responsibility and enhance the beauty of your living space. Make your home a reflection of your commitment to the planet with our sustainable decor items.",
    image: "https://example.com/images/homedecor.jpg",
  },
  {
    id: 5,
    title: "Organic Gardening Supplies",
    content:
      "Grow your own food sustainably with our range of **organic gardening supplies**. Whether you're a seasoned gardener or just starting out, our eco-friendly products help you cultivate a healthy garden without harmful chemicals. We offer **organic fertilizers**, **compostable seed starters**, **natural insect repellents**, and **biodegradable pots**. These products are designed to nurture your plants while protecting the environment. Organic gardening not only improves soil health but also fosters biodiversity and reduces the harmful effects of synthetic pesticides. By choosing organic, you're making a choice that benefits both your plants and the planet. Start your organic gardening journey with us and grow healthier, greener crops!",
    image: "https://example.com/images/organicgardening.jpg",
  },
  {
    id: 6,
    title: "Compostable Products",
    content:
      "Help reduce waste and improve soil quality with our **compostable products**. These products are designed to decompose naturally, returning valuable nutrients to the earth. We offer **compostable plates**, **cutlery**, **bags**, and **to-go containers**, all made from renewable plant-based materials such as **cornstarch** and **sugarcane**. Unlike conventional plastic products, these items will break down in composting environments, leaving no harmful residues behind. By using compostable products, you’re reducing plastic waste and supporting a circular economy where waste turns into valuable compost for gardens and farms. Go green with our eco-friendly, biodegradable alternatives and make a positive contribution to reducing landfill waste.",
    image: "https://example.com/images/compostable.jpg",
  },
  {
    id: 7,
    title: "Eco-Friendly Clothing & Accessories",
    content:
      "Step into a more sustainable wardrobe with our collection of **eco-friendly clothing and accessories**. From **organic cotton t-shirts** to **recycled polyester jackets**, our clothing is made from natural and repurposed materials that minimize environmental impact. We also offer **biodegradable phone cases**, **bamboo sunglasses**, and **recycled fabric bags** that make eco-friendly fashion choices stylish and functional. Our pieces are designed with the planet in mind, reducing waste and promoting ethical fashion. Choosing eco-friendly clothing not only supports sustainable manufacturing practices but also helps reduce your carbon footprint. Embrace fashion that’s good for the Earth while looking great!",
    image: "https://example.com/images/ecofashion.jpg",
  },
];

function Accordion() {
  const [isOpenId, setIsopenId] = useState(null);
  const toggleId = (id) => {
    if (isOpenId === id) {
      setIsopenId(null);
    } else {
      setIsopenId(id);
    }
  };
  return (
    <div className="flex flex-col ">
      <div>
        {accordionData.map((item) => {
          return (
            <div>
              <div
                onClick={() => toggleId(item.id)}
                className="p-4 bg-green-500 m-1 cursor-pointer"
              >
                {item.title}
              </div>
              {isOpenId === item.id && (
                <div className="w-full bg-green-200 p-2">{item.content}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Accordion;
