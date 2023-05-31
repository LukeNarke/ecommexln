import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const productData: Prisma.ProductCreateInput[] = [
  {
    title: "Men Fashion Title 1",
    price: 10,
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/11/29/01/34/man-1866572_960_720.jpg",
    category: "Men",
    description: "Men Fashion Pic 1",
  },
  {
    title: "Men Fashion Title 2",
    price: 15,
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/11/29/09/41/bag-1868758_960_720.jpg",
    category: "Men",
    description: "Men Fashion Pic 2",
  },
  {
    title: "Men Fashion Title 3",
    price: 20,
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/11/29/01/34/man-1866574_960_720.jpg",
    category: "Men",
    description: "Men Fashion Pic 3",
  },
  {
    title: "Men Fashion Title 4",
    price: 25,
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/02/19/12/59/man-642063_960_720.jpg",
    category: "Men",
    description: "Men Fashion Pic 4",
  },
  {
    title: "Men Fashion Title 5",
    price: 50,
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/11/29/07/16/balancing-1868051_960_720.jpg",
    category: "Men",
    description: "Men Fashion Pic 5",
  },
  {
    title: "Men Fashion Title 6",
    price: 62,
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/08/05/04/25/people-875617_960_720.jpg",
    category: "Men",
    description: "Men Fashion Pic 6",
  },
  {
    title: "Men Fashion Title 7",
    price: 71,
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/09/08/17/35/man-930397_960_720.jpg",
    category: "Men",
    description: "Men Fashion Pic 7",
  },
  {
    title: "Men Fashion Title 8",
    price: 83,
    imageUrl:
      "https://cdn.pixabay.com/photo/2017/03/20/15/13/wrist-watch-2159351_960_720.jpg",
    category: "Men",
    description: "Men Fashion Pic 8",
  },
  {
    title: "Men Fashion Title 9",
    price: 94,
    imageUrl:
      "https://cdn.pixabay.com/photo/2017/03/20/15/13/wrist-watch-2159351_960_720.jpg",
    category: "Men",
    description: "Men Fashion Pic 9",
  },
  {
    title: "Men Fashion Title 10",
    price: 106,
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/03/27/22/05/necktie-1284463_960_720.jpg",
    category: "Men",
    description: "Men Fashion Pic 10",
  },
  {
    title: "Women Fashion Title 1",
    price: 9,
    imageUrl:
      "https://cdn.pixabay.com/photo/2020/12/27/14/37/woman-5864279_960_720.jpg",
    category: "Women",
    description: "Women Fashion Pic 1",
  },
  {
    title: "Women Fashion Title 2",
    price: 17,
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/11/23/17/30/girls-1853958_960_720.jpg",
    category: "Women",
    description: "Women Fashion Pic 2",
  },
  {
    title: "Women Fashion Title 3",
    price: 21,
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/10/15/05/02/girls-1741925_960_720.jpg",
    category: "Women",
    description: "Women Fashion Pic 3",
  },
  {
    title: "Women Fashion Title 4",
    price: 26,
    imageUrl:
      "https://cdn.pixabay.com/photo/2018/04/01/17/00/mother-and-daughter-3281388_960_720.jpg",
    category: "Women",
    description: "Women Fashion Pic 4",
  },
  {
    title: "Women Fashion Title 5",
    price: 52,
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/11/21/16/55/high-heels-1846436_960_720.jpg",
    category: "Women",
    description: "Women Fashion Pic 5",
  },
  {
    title: "Women Fashion Title 6",
    price: 67,
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/11/29/07/34/beach-1868130_960_720.jpg",
    category: "Women",
    description: "Women Fashion Pic 6",
  },
  {
    title: "Women Fashion Title 7",
    price: 78,
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/03/27/22/16/fashion-1284496_960_720.jpg",
    category: "Women",
    description: "Women Fashion Pic 7",
  },
  {
    title: "Women Fashion Title 8",
    price: 89,
    imageUrl:
      "https://cdn.pixabay.com/photo/2020/04/23/19/15/face-5083690_960_720.jpg",
    category: "Women",
    description: "Women Fashion Pic 8",
  },
  {
    title: "Women Fashion Title 9",
    price: 95,
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/11/14/05/24/adult-1822695_960_720.jpg",
    category: "Women",
    description: "Women Fashion Pic 9",
  },
  {
    title: "Women Fashion Title 10",
    price: 202,
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/11/19/11/33/women-1838768_960_720.jpg",
    category: "Women",
    description: "Women Fashion Pic 10",
  },
];
// npx prisma db seed
async function main() {
  console.log(`Start seeding ...`);
  for (const u of productData) {
    const product = await prisma.product.create({
      data: u,
    });
    console.log(`Created product with id: ${product.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
