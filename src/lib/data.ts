import { colors } from "./colors";

export interface Playlist {
  id: string;
  albumId: number;
  title: string;
  color: (typeof colors)[keyof typeof colors];
  cover: string;
  artists: string[];
}

export const playlists: Playlist[] = [
  {
    id: '1',
    albumId: 1,
    title: "Sauce Boyz 2",
    color: colors.green,
    cover:
      "https://i.scdn.co/image/ab67616d0000b27302b1465a8e6b21d3308c18f4",
    artists: ["Eladio Carrión"],
  },
  {
    id: '2',
    albumId: 2,
    title: "YHLQMDLG",
    color: colors.blue,
    cover:
      "https://i.scdn.co/image/ab67616d0000b273548f7ec52da7313de0c5e4a0",
    artists: ["Bad Bunny", "Tainy"],
  },
  {
    id: '3',
    albumId: 3,
    title: "Study Session",
    color: colors.rose,
    cover:
      "https://f4.bcbits.com/img/a1435058381_65.jpg",
    artists: ["Tenno", "xander", "Team Astro"],
  },
  {
    id: '4',
    albumId: 4,
    title: "Blue Note Study Time",
    color: colors.blue,
    cover:
      "https://f4.bcbits.com/img/a1962013209_16.jpg",
    artists: ["Raimu", "Yasumu"],
  },
  {
    id: '5',
    albumId: 5,
    title: "Chau Saura Session",
    color: colors.purple,
    cover:
      "https://f4.bcbits.com/img/a2793859494_16.jpg",
    artists: ["Chau Saura", "amies", "kyu"],
  },
  {
    id: '6',
    albumId: 6,
    title: "Like a Necessity",
    color: colors.orange,
    cover:
      "https://f4.bcbits.com/img/a0363730459_16.jpg",
    artists: ["WFS", "Nadav Cohen"],
  },
];

export const morePlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_more",
}))

export const sidebarPlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_side",
}))

export const allPlaylists = [
  ...playlists,
  ...morePlaylists,
  ...sidebarPlaylists,
]

export interface Song {
  id: number;
  albumId: number;
  title: string;
  image: string;
  artists: string[];
  album: string;
  duration: string;
}

export const songs: Song[] = [
  {
    "id": 1,
    "albumId": 1,
    "title": "Par de Tenis",
    "image": `https://i.scdn.co/image/ab67616d0000b27302b1465a8e6b21d3308c18f4`,
    "artists": ["Eladio Carrión"],
    "album": "Sauce Boyz 2",
    "duration": "3:02"
  },
  {
    "id": 2,
    "albumId": 1,
    "title": "Claro Cristal",
    "image": `https://i.scdn.co/image/ab67616d0000b27302b1465a8e6b21d3308c18f4`,
    "artists": ["Eladio Carrión"],
    "album": "Sauce Boyz 2",
    "duration": "2:42"
  },
  {
    "id": 3,
    "albumId": 1,
    "title": "No Te Deseo el Mal",
    "image": `https://i.scdn.co/image/ab67616d0000b27302b1465a8e6b21d3308c18f4`,
    "artists": ["Eladio Carrión","Karol G"],
    "album": "Sauce Boyz 2",
    "duration": "3:53"
  },
  {
    "id": 4,
    "albumId": 1,
    "title": "Flores en Anónimo",
    "image": `https://i.scdn.co/image/ab67616d0000b27302b1465a8e6b21d3308c18f4`,
    "artists": ["Eladio Carrión"],
    "album": "Sauce Boyz 2",
    "duration": "2:53"
  },
  {
    "id": 5,
    "albumId": 1,
    "title": "Fuego",
    "image": `https://i.scdn.co/image/ab67616d0000b27302b1465a8e6b21d3308c18f4`,
    "artists": ["Eladio Carrión"],
    "album": "Sauce Boyz 2",
    "duration": "2:36"
  },
  {
    "id": 6,
    "albumId": 1,
    "title": "Miradas Raras",
    "image": `https://i.scdn.co/image/ab67616d0000b27302b1465a8e6b21d3308c18f4`,
    "artists": ["Eladio Carrión","Sech"],
    "album": "Sauce Boyz 2",
    "duration": "3:14"
  },{
    "id": 7,
    "albumId": 1,
    "title": "Me Gustas Natural",
    "image": `https://i.scdn.co/image/ab67616d0000b27302b1465a8e6b21d3308c18f4`,
    "artists": ["Eladio Carrión","Rels B"],
    "album": "Sauce Boyz 2",
    "duration": "2:50"
  },{
    "id": 8,
    "albumId": 1,
    "title": "Quiénes Son Ustedes",
    "image": `https://i.scdn.co/image/ab67616d0000b27302b1465a8e6b21d3308c18f4`,
    "artists": ["Eladio Carrión"],
    "album": "Sauce Boyz 2",
    "duration": "2:22"
  },
  {
    "id": 9,
    "albumId": 1,
    "title": "Alejarme de Ti",
    "image": `https://i.scdn.co/image/ab67616d0000b27302b1465a8e6b21d3308c18f4`,
    "artists": ["Eladio Carrión","Jay Wheeler"],
    "album": "Sauce Boyz 2",
    "duration": "3:55"
  },{
    "id": 10,
    "albumId": 1,
    "title": "Gastar",
    "image": `https://i.scdn.co/image/ab67616d0000b27302b1465a8e6b21d3308c18f4`,
    "artists": ["Eladio Carrión"],
    "album": "Sauce Boyz 2",
    "duration": "2:29"
  },{
    "id": 11,
    "albumId": 1,
    "title": "Hola Cómo Vas",
    "image": `https://i.scdn.co/image/ab67616d0000b27302b1465a8e6b21d3308c18f4`,
    "artists": ["Eladio Carrión"],
    "album": "Sauce Boyz 2",
    "duration": "3:18"
  },{
    "id": 12,
    "albumId": 1,
    "title": "Sin Frenos",
    "image": `https://i.scdn.co/image/ab67616d0000b27302b1465a8e6b21d3308c18f4`,
    "artists": ["Eladio Carrión","Duki","Bizarrap"],
    "album": "Sauce Boyz 2",
    "duration": "3:32"
  },{
    "id": 13,
    "albumId": 1,
    "title": "Socio",
    "image": `https://i.scdn.co/image/ab67616d0000b27302b1465a8e6b21d3308c18f4`,
    "artists": ["Eladio Carrión","Luar La L"],
    "album": "Sauce Boyz 2",
    "duration": "4:14"
  },{
    "id": 14,
    "albumId": 1,
    "title": "Jovenes Millonarios",
    "image": `https://i.scdn.co/image/ab67616d0000b27302b1465a8e6b21d3308c18f4`,
    "artists": ["Eladio Carrión","Myke Towers"],
    "album": "Sauce Boyz 2",
    "duration": "2:50"
  },{
    "id": 15,
    "albumId": 1,
    "title": "No Me Importa Un Carajo",
    "image": `https://i.scdn.co/image/ab67616d0000b27302b1465a8e6b21d3308c18f4`,
    "artists": ["Eladio Carrión","Ovi"],
    "album": "Sauce Boyz 2",
    "duration": "3:10"
  },{
    "id": 16,
    "albumId": 1,
    "title": "Mami Dijo",
    "image": `https://i.scdn.co/image/ab67616d0000b27302b1465a8e6b21d3308c18f4`,
    "artists": ["Eladio Carrión"],
    "album": "Sauce Boyz 2",
    "duration": "2:14"
  },{
    "id": 17,
    "albumId": 1,
    "title": "Cheque",
    "image": `https://i.scdn.co/image/ab67616d0000b27302b1465a8e6b21d3308c18f4`,
    "artists": ["Eladio Carrión","Jon Z","Noriel"],
    "album": "Sauce Boyz 2",
    "duration": "3:33"
  },{
    "id": 18,
    "albumId": 1,
    "title": "Como Sea",
    "image": `https://i.scdn.co/image/ab67616d0000b27302b1465a8e6b21d3308c18f4`,
    "artists": ["Eladio Carrión","Arcangel"],
    "album": "Sauce Boyz 2",
    "duration": "3:21"
  },{
    "id": 19,
    "albumId": 1,
    "title": "La Primera Vez",
    "image": `https://i.scdn.co/image/ab67616d0000b27302b1465a8e6b21d3308c18f4`,
    "artists": ["Eladio Carrión", "Nicky Jam"],
    "album": "Sauce Boyz 2",
    "duration": "3:11"
  },{
    "id": 20,
    "albumId": 1,
    "title": "Cuarentena",
    "image": `https://i.scdn.co/image/ab67616d0000b27302b1465a8e6b21d3308c18f4`,
    "artists": ["Eladio Carrión"],
    "album": "Sauce Boyz 2",
    "duration": "2:15"
  },
  {
    "id": 20,
    "albumId": 1,
    "title": "Touch Your Body",
    "image": `https://i.scdn.co/image/ab67616d0000b27302b1465a8e6b21d3308c18f4`,
    "artists": ["Eladio Carrión"],
    "album": "Sauce Boyz 2",
    "duration": "2:27"
  },{
    "id": 22,
    "albumId": 1,
    "title": "Sauce Boy Freestyle 5",
    "image": `https://i.scdn.co/image/ab67616d0000b27302b1465a8e6b21d3308c18f4`,
    "artists": ["Eladio Carrión"],
    "album": "Sauce Boyz 2",
    "duration": "2:57"
  },
  {
    "id": 1,
    "albumId": 2,
    "title": "Silent Rain",
    "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    "artists": ["Urban Nocturne"],
    "album": "Midnight Tales",
    "duration": "2:38"
  },
  {
    "id": 2,
    "albumId": 2,
    "title": "Lost Pages",
    "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    "artists": ["Urban Nocturne"],
    "album": "Midnight Tales",
    "duration": "2:40"
  },
  {
    "id": 3,
    "albumId": 2,
    "title": "Midnight Tales",
    "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    "artists": ["Urban Nocturne"],
    "album": "Midnight Tales",
    "duration": "2:53"
  },
  {
    "id": 4,
    "albumId": 2,
    "title": "City Lights",
    "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    "artists": ["Urban Nocturne"],
    "album": "Midnight Tales",
    "duration": "3:11"
  },
  {
    "id": 5,
    "albumId": 2,
    "title": "Night Drive",
    "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    "artists": ["Urban Nocturne"],
    "album": "Midnight Tales",
    "duration": "2:58"
  },
  {
    "id": 1,
    "albumId": 3,
    "title": "Lunar",
    "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "3:06"
  },
  {
    "id": 2,
    "albumId": 3,
    "title": "Go go go!",
    "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "1:30"
  },
  {
    "id": 3,
    "albumId": 3,
    "title": "Keep focus!",
    "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "1:59"
  },
  {
    "id": 4,
    "albumId": 3,
    "title": "JavaScript is the way",
    "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "3:56"
  },
  {
    "id": 5,
    "albumId": 3,
    "title": "No more TypeScript for me",
    "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "2:30"
  },
  {
    "id": 1,
    "albumId": 4,
    "title": "Lunar",
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "2:59"
  },
  {
    "id": 2,
    "albumId": 4,
    "title": "Go go go!",
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "2:12"
  },
  {
    "id": 3,
    "albumId": 4,
    "title": "Keep focus!",
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "3:02"
  },
  {
    "id": 4,
    "albumId": 4,
    "title": "JavaScript is the way",
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "2:29"
  },
  {
    "id": 5,
    "albumId": 4,
    "title": "No more TypeScript for me",
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "2:29"
  },
  {
    "id": 1,
    "albumId": 5,
    "title": "Moonlit Walk",
    "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
    "artists": ["LoFi Dreamer"],
    "album": "Sauce Boyz 2",
    "duration": "3:49"
  },
  {
    "id": 2,
    "albumId": 5,
    "title": "Coffee Daze",
    "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
    "artists": ["LoFi Dreamer"],
    "album": "Sauce Boyz 2",
    "duration": "1:52"
  },
  {
    "id": 3,
    "albumId": 5,
    "title": "Skyline Serenade",
    "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
    "artists": ["LoFi Dreamer"],
    "album": "Sauce Boyz 2",
    "duration": "2:15"
  },
  {
    "id": 4,
    "albumId": 5,
    "title": "Urban Echoes",
    "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
    "artists": ["LoFi Dreamer"],
    "album": "Sauce Boyz 2",
    "duration": "4:06"
  },
  {
    "id": 5,
    "albumId": 5,
    "title": "Night's End",
    "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
    "artists": ["LoFi Dreamer"],
    "album": "Sauce Boyz 2",
    "duration": "2:54"
  },
]