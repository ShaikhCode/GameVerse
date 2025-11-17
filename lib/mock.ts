export interface Game {
  id: string
  title: string
  rank: number
  platform: string
  image: string
  year: number
  genres: string[]
  rating: number
  hoursPlayed: number
  completionPercentage: number
  developer: string
  description: string
}
export const allGamesData: Game[] = [
  {
    id: "1",
    title: "GTA V",
    rank: 1,
    platform: "PC",
    image: "/games/1/1.jpg",
    year: 2013,
    genres: ["Action", "Open World", "Adventure"],
    rating: 9.2,
    hoursPlayed: 150,
    completionPercentage: 80,
    developer: "Rockstar Games",
    description: "An open-world action adventure set in Los Santos featuring three protagonists and endless sandbox chaos."
  },
  {
    id: "2",
    title: "Red Dead Redemption 2",
    rank: 2,
    platform: "PC",
    image: "/games/2/1.jpg",
    year: 2018,
    genres: ["Action", "Open World", "Story Rich"],
    rating: 9.8,
    hoursPlayed: 120,
    completionPercentage: 75,
    developer: "Rockstar Games",
    description: "Step into the boots of Arthur Morgan in a fully immersive, cinematic, western open-world journey."
  },
  {
    id: "3",
    title: "Cyberpunk 2077",
    rank: 3,
    platform: "PC",
    image: "/games/3/1.jpg",
    year: 2020,
    genres: ["Sci-Fi", "Action RPG", "Open World"],
    rating: 8.7,
    hoursPlayed: 90,
    completionPercentage: 60,
    developer: "CD Projekt Red",
    description: "A dark, futuristic open-world RPG set in Night City where body modification and neon chaos rule."
  },
  {
    id: "4",
    title: "Valorant",
    rank: 4,
    platform: "PC",
    image: "/games/4/1.jpg",
    year: 2020,
    genres: ["FPS", "Competitive", "Multiplayer"],
    rating: 8.5,
    hoursPlayed: 300,
    completionPercentage: 100,
    developer: "Riot Games",
    description: "A tactical 5v5 hero-based shooter focused on precision gunplay and strategy."
  },
  {
    id: "5",
    title: "The Last of Us Part 1",
    rank: 5,
    platform: "PlayStation",
    image: "/games/5/1.jpg",
    year: 2013,
    genres: ["Action", "Story Rich", "Survival"],
    rating: 9.5,
    hoursPlayed: 20,
    completionPercentage: 100,
    developer: "Naughty Dog",
    description: "Experience the emotional journey of Joel and Ellie in a post-pandemic world."
  },
  {
    id: "6",
    title: "The Last of Us Part 2",
    rank: 6,
    platform: "PlayStation",
    image: "/games/6/1.jpg",
    year: 2020,
    genres: ["Action", "Story Rich", "Survival"],
    rating: 9.6,
    hoursPlayed: 25,
    completionPercentage: 100,
    developer: "Naughty Dog",
    description: "A brutally emotional and intense continuation of Ellie’s story of revenge and survival."
  },
  {
    id: "7",
    title: "God of War (2018)",
    rank: 7,
    platform: "PlayStation",
    image: "/games/7/1.jpg",
    year: 2018,
    genres: ["Action", "Adventure", "Mythology"],
    rating: 9.7,
    hoursPlayed: 50,
    completionPercentage: 80,
    developer: "Santa Monica Studio",
    description: "Kratos and Atreus embark on a mythological journey across the Norse realms."
  },
  {
    id: "8",
    title: "God of War Ragnarok",
    rank: 8,
    platform: "PlayStation",
    image: "/games/8/1.jpg",
    year: 2022,
    genres: ["Action", "Adventure", "Mythology"],
    rating: 9.8,
    hoursPlayed: 60,
    completionPercentage: 85,
    developer: "Santa Monica Studio",
    description: "The epic conclusion to the Norse saga featuring deeper combat and emotional storytelling."
  },
  {
    id: "9",
    title: "Elden Ring",
    rank: 9,
    platform: "PC",
    image: "/games/9/1.jpg",
    year: 2022,
    genres: ["Action RPG", "Fantasy", "Open World"],
    rating: 9.8,
    hoursPlayed: 140,
    completionPercentage: 70,
    developer: "FromSoftware",
    description: "Explore the Lands Between in a brutally challenging open-world action RPG."
  },
  {
    id: "10",
    title: "Spider-Man 2",
    rank: 10,
    platform: "PlayStation",
    image: "/games/10/1.jpg",
    year: 2023,
    genres: ["Action", "Superhero", "Open World"],
    rating: 9.0,
    hoursPlayed: 30,
    completionPercentage: 90,
    developer: "Insomniac Games",
    description: "Swing through New York as Peter Parker and Miles Morales in a high-speed superhero adventure."
  },
  {
    id: "11",
    title: "Ghost of Tsushima",
    rank: 11,
    platform: "PlayStation",
    image: "/games/11/1.jpg",
    year: 2020,
    genres: ["Action", "Open World", "Samurai"],
    rating: 9.4,
    hoursPlayed: 45,
    completionPercentage: 80,
    developer: "Sucker Punch",
    description: "Become a samurai or the Ghost as you defend Tsushima from Mongol invasion."
  },
  {
    id: "12",
    title: "Silent Hill F",
    rank: 12,
    platform: "PC",
    image: "/games/12/1.jpg",
    year: 2025,
    genres: ["Horror", "Psychological", "Story Rich"],
    rating: 0, // upcoming
    hoursPlayed: 0,
    completionPercentage: 0,
    developer: "Konami",
    description: "A new psychological horror experience set in 1960s Japan, filled with mystery and dread."
  },
  {
    id: "13",
    title: "Hollow Knight",
    rank: 13,
    platform: "PC",
    image: "/games/13/1.jpg",
    year: 2017,
    genres: ["Metroidvania", "Action", "Indie"],
    rating: 9.0,
    hoursPlayed: 80,
    completionPercentage: 95,
    developer: "Team Cherry",
    description: "Explore Hallownest — a deep, dark, interconnected kingdom filled with secrets."
  },
  {
    id: "14",
    title: "Only Up",
    rank: 14,
    platform: "PC",
    image: "/games/14/1.jpg",
    year: 2023,
    genres: ["Parkour", "Climbing", "Indie"],
    rating: 7.0,
    hoursPlayed: 10,
    completionPercentage: 30,
    developer: "SCKR Games",
    description: "A vertical climbing challenge where every mistake means falling all the way down."
  }
]
export const getGameById = (id: string): Game | undefined => {
  return allGamesData.find((game) => game.id === id)
}

export const getGamesByIds = (ids: string[]): Game[] => {
  return ids
    .map((id) => getGameById(id))
    .filter((g): g is Game => Boolean(g))
}
