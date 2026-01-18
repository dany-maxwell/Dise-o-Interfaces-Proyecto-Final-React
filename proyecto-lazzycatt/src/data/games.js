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
        category: "Survival"
    },
    {
        id: 3,
        name: "Battelfield VI",
        img: getImage("battelfield-6.jpg"),
        price: 39.99,
        featured: true,
        category: "Shooter"
    },
    {
        id: 4,
        name: "Black Desert",
        img: getImage("black-desert.jpg"),
        price: 29.99,
        featured: false,
        category: "MMORPG"
    },
    {
        id: 5,
        name: "Black Myth: Wukong",
        img: getImage("black-myth-wukong.jpg"),
        price: 59.99,
        featured: true,
        category: "Action RPG"
    },
    {
        id: 6,
        name: "Blasphemous",
        img: getImage("blasphemous.jpg"),
        price: 24.99,
        featured: false,
        category: "Metroidvania"
    },
    {
        id: 7,
        name: "Dark Souls II",
        img: getImage("dark-souls-2.jpg"),
        price: 39.99,
        featured: false,
        category: "Action RPG"
    },
    {
        id: 8,
        name: "Dark Souls III",
        img: getImage("darksouls3.jpg"),
        price: 59.99,
        featured: true,
        category: "Action RPG"
    },
    {
        id: 9,
        name: "Dead by Daylight",
        img: getImage("dead-by-daylight.jpg"),
        price: 19.99,
        featured: false,
        category: "Survival Horror"
    },
    {
        id: 10,
        name: "Detroit: Become Human",
        img: getImage("detroit-become-human.jpg"),
        price: 39.99,
        featured: true,
        category: "Interactive Drama"
    },
    {
        id: 11,
        name: "Devil May Cry 5",
        img: getImage("devil_may_cry_5.jpg"),
        price: 49.99,
        featured: false,
        category: "Hack and Slash"
    },
    {
        id: 12,
        name: "Don't Starve Together",
        img: getImage("dont-starve-together.jpg"),
        price: 14.99,
        featured: false,
        category: "Survival"
    },
    {
        id: 13,
        name: "FlatOut",
        img: getImage("flatword.jpg"),
        price: 9.99,
        featured: false,
        category: "Racing"
    },
    {
        id: 14,
        name: "Ghost of Tsushima",
        img: getImage("ghost-of-tsushima.jpg"),
        price: 59.99,
        featured: true,
        category: "Action Adventure"
    },
    {
        id: 15,
        name: "God of War",
        img: getImage("god-of-war.jpg"),
        price: 49.99,
        featured: true,
        category: "Action Adventure"
    },
    {
        id: 16,
        name: "GTA V",
        img: getImage("gta.jpg"),
        price: 29.99,
        featured: false,
        category: "Open World"
    },
    {
        id: 17,
        name: "Jedi: Fallen Order",
        img: getImage("jedi-fallen-order.jpg"),
        price: 39.99,
        featured: false,
        category: "Action Adventure"
    },
    {
        id: 18,
        name: "Jedi Survivor",
        img: getImage("jedi-survivor.jpg"),
        price: 69.99,
        featured: true,
        category: "Action Adventure"
    },
    {
        id: 19,
        name: "Lies of P",
        img: getImage("lies-of-p.jpg"),
        price: 59.99,
        featured: true,
        category: "Soulslike"
    },
    {
        id: 20,
        name: "Marvel Rivals",
        img: getImage("marvel-rivals.jpg"),
        price: 0.0,
        featured: false,
        category: "Hero Shooter"
    },
    {
        id: 21,
        name: "Ori",
        img: getImage("ori.jpg"),
        price: 19.99,
        featured: false,
        category: "Platformer"
    },
    {
        id: 22,
        name: "Path of Exile 2",
        img: getImage("path-of-exile-2.jpg"),
        price: 0.0,
        featured: true,
        category: "ARPG"
    },
    {
        id: 23,
        name: "Red Dead Redemption II",
        img: getImage("red-dead-2.jpg"),
        price: 59.99,
        featured: true,
        category: "Open World"
    },
    {
        id: 24,
        name: "Resident Evil: Requiem",
        img: getImage("resident-evil-requiem.jpg"),
        price: 49.99,
        featured: false,
        category: "Survival Horror"
    },
    {
        id: 25,
        name: "Sekiro",
        img: getImage("sekiro.jpg"),
        price: 59.99,
        featured: true,
        category: "Action RPG"
    },
    {
        id: 26,
        name: "Shinobi: Art of Vengeance",
        img: getImage("shinobi-art-vengeance.jpg"),
        price: 39.99,
        featured: false,
        category: "Action"
    },
    {
        id: 27,
        name: "Solo Leveling",
        img: getImage("solo-leveling.jpg"),
        price: 49.99,
        featured: false,
        category: "Action RPG"
    },
    {
        id: 28,
        name: "Space Marine",
        img: getImage("space-marin.jpg"),
        price: 39.99,
        featured: false,
        category: "Shooter"
    },
    {
        id: 29,
        name: "Split Fiction",
        img: getImage("split-fiction.jpg"),
        price: 29.99,
        featured: false,
        category: "Adventure"
    },
    {
        id: 30,
        name: "The Finals",
        img: getImage("the-finals.jpg"),
        price: 0.0,
        featured: true,
        category: "FPS"
    },
    {
        id: 31,
        name: "The Witcher 3",
        img: getImage("the-witcher-3.jpg"),
        price: 39.99,
        featured: true,
        category: "RPG"
    },
    {
        id: 32,
        name: "Thymesia",
        img: getImage("thymesia.jpg"),
        price: 29.99,
        featured: false,
        category: "Soulslike"
    },
    {
        id: 33,
        name: "Uncharted Collection",
        img: getImage("uncharted-collection.jpg"),
        price: 49.99,
        featured: true,
        category: "Action Adventure"
    },
    {
        id: 34,
        name: "Warframe",
        img: getImage("warframe.jpg"),
        price: 0.0,
        featured: false,
        category: "Shooter"
    },
    {
        id: 35,
        name: "Where Winds Meet",
        img: getImage("where-winds-meet.jpg"),
        price: 59.99,
        featured: true,
        category: "Action RPG"
    }
]
