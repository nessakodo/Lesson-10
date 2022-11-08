import { expect } from "chai";
import { ethers } from "hardhat";
import { TokenSale } from "../typechain-types";
import { ERC20 } from "../typechain-types";
import { ERC721 } from "../typechain-types";

const TEST_RATIO = 1;

describe("NFT Shop", async () => {
  let tokenSalecontract: TokenSale;

  beforeEach(async () => {
    const tokenSaleContractFactory = await ethers.getContractFactory(
      "TokenSale"
      );
    tokenSalecontract = await tokenSaleContractFactory.deploy(TEST_RATIO) as TokenSale;
    await tokenSalecontract.deployed();
  });

  describe("When the Shop contract is deployed", async () => {
    it("defines the ratio as provided in parameters", async () => {
      const ratio = await tokenSalecontract.ratio();
      expect(ratio).to.eq(TEST_RATIO);
    });

    it("uses a valid ERC20 as payment token", async () => {
      throw new Error("Not implemented");
    });
  });

  describe("When a user purchase an ERC20 from the Token contract", async () => {
    beforeEach(async () => {});

    it("charges the correct amount of ETH", async () => {
      throw new Error("Not implemented");
    });

    it("gives the correct amount of tokens", async () => {
      throw new Error("Not implemented");
    });
  });

  describe("When a user burns an ERC20 at the Token contract", async () => {
    it("gives the correct amount of ETH", async () => {
      throw new Error("Not implemented");
    });

    it("burns the correct amount of tokens", async () => {
      throw new Error("Not implemented");
    });
  });

  describe("When a user purchase a NFT from the Shop contract", async () => {
    it("charges the correct amount of ETH", async () => {
      throw new Error("Not implemented");
    });

    it("updates the owner account correctly", async () => {
      throw new Error("Not implemented");
    });

    it("update the pool account correctly", async () => {
      throw new Error("Not implemented");
    });

    it("favors the pool with the rounding", async () => {
      throw new Error("Not implemented");
    });
  });

  describe("When a user burns their NFT at the Shop contract", async () => {
    it("gives the correct amount of ERC20 tokens", async () => {
      throw new Error("Not implemented");
    });
    it("updates the pool correctly", async () => {
      throw new Error("Not implemented");
    });
  });

  describe("When the owner withdraw from the Shop contract", async () => {
    it("recovers the right amount of ERC20 tokens", async () => {
      throw new Error("Not implemented");
    });

    it("updates the owner account correctly", async () => {
      throw new Error("Not implemented");
    });
  });
});