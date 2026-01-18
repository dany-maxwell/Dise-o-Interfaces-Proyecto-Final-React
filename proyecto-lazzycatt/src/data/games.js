const images = import.meta.glob(
  "../assets/games/*.{jpg,png,webp}",
  { eager: true }
)

const getImage = (filename) => {
  const path = `../assets/games/${filename}`
  return images[path]?.default
}


export const games = [
    {
        id: 1,
        name: "Arc Riders",
        img: getImage("arc-riders.jpg"),
        price: 39.99,
        featured: true,
        category: "Extraction Shooter"
    },
    {
        id: 2,
        name: "Ark Survival Evolved",
        img: getImage("ark-surival-evolved.jpg"),
        price: 39.99,
        featured: true,
        category: "Extraction Shooter"
    },
    {
        id: 3,
        name: "Battelfield VI",
        img: getImage("battelfield-6.jpg"),
        price: 39.99,
        featured: true,
        category: "Extraction Shooter"
    },
    {
        id: 4,
        name: "Arc Riders",
        img: "",
        price: 39.99,
        featured: false,
        category: "Extraction Shooter"
    },
    {
        id: 5,
        name: "Arc Riders",
        img: "",
        price: 39.99,
        featured: false,
        category: "Extraction Shooter"
    },
    {
        id: 6,
        name: "Arc Riders",
        img: "",
        price: 39.99,
        featured: false,
        category: "Extraction Shooter"
    },
    {
        id: 7,
        name: "Arc Riders",
        img: "",
        price: 39.99,
        featured: false,
        category: "Extraction Shooter"
    },
    {
        id: 8,
        name: "Arc Riders",
        img: "",
        price: 39.99,
        featured: false,
        category: "Extraction Shooter"
    },
    {
        id: 9,
        name: "Arc Riders",
        img: "",
        price: 39.99,
        featured: false,
        category: "Extraction Shooter"
    },
    {
        id: 10,
        name: "Arc Riders",
        img: "",
        price: 39.99,
        featured: false,
        category: "Extraction Shooter"
    },
    {
        id: 11,
        name: "Arc Riders",
        img: "",
        price: 39.99,
        featured: false,
        category: "Extraction Shooter"
    },
    {
        id: 12,
        name: "Arc Riders",
        img: "",
        price: 39.99,
        featured: false,
        category: "Extraction Shooter"
    },
    {
        id: 13,
        name: "Arc Riders",
        img: "",
        price: 39.99,
        featured: false,
        category: "Extraction Shooter"
    },
    {
        id: 14,
        name: "Arc Riders",
        img: "",
        price: 39.99,
        featured: false,
        category: "Extraction Shooter"
    }
]