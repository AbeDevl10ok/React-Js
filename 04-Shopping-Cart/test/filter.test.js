import { it, describe, expect } from "vitest";
let filter = {
  category: "all",
  minPrice: 0,
};

const handleChangeMinPrice = (price) => {
  filter = {
    ...filter,
    minPrice: price,
  };
};

const handleChangeCategory = (cat) => {
  filter = {
    ...filter,
    category: cat,
  };
}



  describe("handle filters", () => { 
    it("change price", () => {
      handleChangeMinPrice(20);
      expect(filter.minPrice).toBe(20);
    });


    it("change category", () => {
        handleChangeCategory('iphone');
        expect(filter.category).toBe('iphone');
      });
  });
