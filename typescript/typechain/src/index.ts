import crypto from "crypto";

interface BlockShape {
  hash: string;
  prevHash: string;
  height: number;
  data: string;
}

class Block implements BlockShape {
  public hash: string;
  constructor(
    public prevHash: string,
    public height: number,
    public data: string
  ) {
    this.hash = Block.calculateHash(prevHash, height, data);
  }

  static calculateHash(prevHash: string, height: number, data: string): string {
    const tohash = `${prevHash}${height}${data}`;
    return crypto.createHash("sha256").update(tohash).digest("hex");
  }
}

class Blockchain {
  private blocks: Block[];
  constructor() {
    this.blocks = [];
  }

  private getPrevHash() {
    return 0 === this.blocks.length
      ? ""
      : this.blocks[this.blocks.length - 1].hash;
  }

  public addBlock(data: string) {
    const newBlock = new Block(
      this.getPrevHash(),
      this.blocks.length + 1,
      data
    );
    this.blocks.push(newBlock);
  }

  public getBlocks() {
    return [...this.blocks];
  }
}

const bchain = new Blockchain();

bchain.addBlock("first");
bchain.addBlock("two");
bchain.addBlock("three");

bchain.getBlocks().push(new Block("aaaaa", 111, "aaaa"));

console.log(bchain.getBlocks());
