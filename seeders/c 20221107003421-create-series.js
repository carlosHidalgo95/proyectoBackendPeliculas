'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('series', 
[{
  "id": 1,
  "title": "Chucky",
  "genre": "Crime | Sci-Fi | Fantasy | Action | Adventure",
  "rating": 4,
  "release_date": "2022-08-05 00:06:52",
  "age_rating": "TV-MA",
  "id_article": 26,
  "createdAt": "2021-12-16 20:57:09",
  "updatedAt": "2022-05-14 14:33:39",
  "theater_release": false,
  "synopsis": "After a vintage Chucky doll turns up at a suburban yard sale, an idyllic American town is thrown into chaos as a series of horrifying murders begin to expose the town’s hypocrisies and secrets. Meanwhile, the arrival of enemies — and allies — from Chucky’s past threatens to expose the truth behind the killings, as well as the demon doll’s untold origins.",
  "url_img":"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kY0BogCM8SkNJ0MNiHB3VTM86Tz.jpg",
  "actors":"Brad Dourif | Zackary Arthur | Björgvin Arnarson"
}, {
  "id": 2,
  "title": "1899",
  "genre": "Mystery | Drama",
  "rating": 4,
  "release_date": "2022-09-17 18:18:10",
  "age_rating": "TV-MA",
  "id_article": 27,
  "createdAt": "2022-04-24 01:14:53",
  "updatedAt": "2021-11-17 17:03:41",
  "theater_release": true,
  "synopsis": "Passengers on an immigrant ship traveling to the new continent get caught in a mysterious riddle when they find a second vessel adrift on the open sea.",
  "url_img":"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8KGvYHQNOamON6ufQGjyhkiVn1V.jpg",
  "actors":"Emily Beecham | Andreas Pietschmann | Aneurin Barnard"
}, {
  "id": 3,
  "title": "The Walking Dead",
  "genre": "Action | Adventure | Drama | Sci-Fi | Fantasy",
  "rating": 3,
  "release_date": "2010-05-14 07:09:02",
  "age_rating": "TV-MA",
  "id_article": 28,
  "createdAt": "2022-09-12 15:50:30",
  "updatedAt": "2022-03-06 10:45:36",
  "theater_release": false,
  "synopsis": "Sheriff's deputy Rick Grimes awakens from a coma to find a post-apocalyptic world dominated by flesh-eating zombies. He sets out to find his family and encounters many other survivors along the way.",
  "url_img":"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xf9wuDcqlUPWABZNeDKPbZUjWx0.jpg",
  "actors":"Norman Reedus | Andrew Lincoln | Melissa McBride"
}, {
  "id": 4,
  "title": "Rick and Morty",
  "genre": "Animation | Comedy | Sci-Fi | Fantasy | Action | Adventure",
  "rating": 5,
  "release_date": "2013-03-19 10:06:29",
  "age_rating": "TV-14",
  "id_article": 29,
  "createdAt": "2022-07-08 16:25:12",
  "updatedAt": "2022-09-24 09:48:56",
  "theater_release": false,
  "synopsis": "Rick is a mentally-unbalanced but scientifically gifted old man who has recently reconnected with his family. He spends most of his time involving his young grandson Morty in dangerous, outlandish adventures throughout space and alternate universes. Compounded with Morty's already unstable family life, these events cause Morty much distress at home and school.",
  "url_img":"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/cvhNj9eoRBe5SxjCbQTkh05UP5K.jpg",
  "actors":"Justin Roiland | Spencer Grammer | Chris Parnell | Sarah Chalke"
}, {
  "id": 5,
  "title": "Wednesday",
  "genre": "Sci-Fi | Fantasy | Mystery | Comedy",
  "rating": 1,
  "release_date": "2022-09-23 23:23:29",
  "age_rating": "TV-14",
  "id_article": 30,
  "createdAt": "2021-12-03 11:09:30",
  "updatedAt": "2022-09-01 18:07:24",
  "theater_release": true,
  "synopsis": "Wednesday Addams is sent to Nevermore Academy, a bizarre boarding school where she attempts to master her psychic powers, stop a monstrous killing spree of the town citizens, and solve the supernatural mystery that affected her family 25 years ago — all while navigating her new relationships.",
  "url_img":"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jeGtaMwGxPmQN5xM4ClnwPQcNQz.jpg",
  "actors":"Jenna Ortega | Gwendoline Christie | Percy Hynes White"
}, {
  "id": 6,
  "title": "House of the Dragon",
  "genre": "Sci-Fi | Fantasy | Drama | Action | Adventure",
  "rating": 1,
  "release_date": "2022-08-21 21:50:42",
  "age_rating": "TV-MA",
  "id_article": 31,
  "createdAt": "2022-08-03 12:13:41",
  "updatedAt": "2022-04-16 05:56:54",
  "theater_release": false,
  "synopsis": "The Targaryen dynasty is at the absolute apex of its power, with more than 15 dragons under their yoke. Most empires crumble from such heights. In the case of the Targaryens, their slow fall begins when King Viserys breaks with a century of tradition by naming his daughter Rhaenyra heir to the Iron Throne. But when Viserys later fathers a son, the court is shocked when Rhaenyra retains her status as his heir, and seeds of division sow friction across the realm.",
  "url_img":"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1X4h40fcB4WWUmIBK0auT4zRBAV.jpg",
  "actors":"Paddy Considine | Matt Smith | Emma D'Arcy"
}, {
  "id": 7,
  "title": "American Horror Story ",
  "genre": "Drama | Mystery | Sci-Fi | Fantasy",
  "rating": 4,
  "release_date": "2011-01-15 02:27:18",
  "age_rating": "TV-MA",
  "id_article": 32,
  "createdAt": "2022-06-25 21:33:13",
  "updatedAt": "2022-10-04 22:32:53",
  "theater_release": true,
  "synopsis": "An anthology horror drama series centering on different characters and locations, including a house with a murderous past, an asylum, a witch coven, a freak show, a hotel, a farmhouse in Roanoke, a cult, the apocalypse and a summer camp.",
  "url_img":"https://www.themoviedb.org/t/p/original/7htwyZzjIUFIIkGQ6HhMgv2kVmM.jpg",
  "actors":"Evan Peters | Sarah Paulson | Jessica Lange | Emma Roberts | Lily Rabe"
}, {
  "id": 8,
  "title": "Family Guy",
  "genre": "Animation | Comedy",
  "rating": 4,
  "release_date": "1999-11-22 04:54:08",
  "age_rating": "TV-16",
  "id_article": 33,
  "createdAt": "2022-07-14 17:45:25",
  "updatedAt": "2021-12-11 10:34:42",
  "theater_release": true,
  "synopsis": "Sick, twisted, politically incorrect and Freakin' Sweet animated series featuring the adventures of the dysfunctional Griffin family. Bumbling Peter and long-suffering Lois have three kids. Stewie (a brilliant but sadistic baby bent on killing his mother and taking over the world), Meg (the oldest, and is the most unpopular girl in town) and Chris (the middle kid, he's not very bright but has a passion for movies). The final member of the family is Brian - a talking dog and much more than a pet, he keeps Stewie in check whilst sipping Martinis and sorting through his own life issues.",
  "url_img":"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/eWWCRjBfLyePh2tfZdvNcIvKSJe.jpg",
  "actors":"Seth MacFarlane | Mila Kunis | Seth Green | Alex Borstein"
}, {
  "id": 9,
  "title": "Titans",
  "genre": "Action | Adventure | Sci-Fi | Fantasy | Drama",
  "rating": 4,
  "release_date": "2018-08-24 22:21:01",
  "age_rating": "TV-MA",
  "id_article": 34,
  "createdAt": "2022-07-01 14:29:36",
  "updatedAt": "2022-03-07 01:51:19",
  "theater_release": true,
  "synopsis": "A team of young superheroes led by Nightwing (formerly Batman's first Robin) form to combat evil and other perils.",
  "url_img":"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/oE23sq7mAiiDzmCIkPdFQAEuqsd.jpg",
  "actors":"Brenton Thwaites | Anna Diop  | Teagan Croft"
}, {
  "id": 10,
  "title": "Naruto Shippūden",
  "genre": "Animation | Action | Adventure | Sci-Fi | Fantasy",
  "rating": 3,
  "release_date": "2007-12-24 06:12:19",
  "age_rating": "TV-PG",
  "id_article": 35,
  "createdAt": "2022-08-14 04:24:57",
  "updatedAt": "2022-11-01 09:55:10",
  "theater_release": true,
  "synopsis": "Naruto Shippuuden is the continuation of the original animated TV series Naruto.The story revolves around an older and slightly more matured Uzumaki Naruto and his quest to save his friend Uchiha Sasuke from the grips of the snake-like Shinobi, Orochimaru. After 2 and a half years Naruto finally returns to his village of Konoha, and sets about putting his ambitions to work, though it will not be easy, as He has amassed a few (more dangerous) enemies, in the likes of the shinobi organization; Akatsuki.",
  "url_img":"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kV27j3Nz4d5z8u6mN3EJw9RiLg2.jpg",
  "actors":"Jouji Nakata | Junko Takeuchi | Chie Nakamura"
}, {
  "id": 11,
  "title": "Squid Game ",
  "genre": "Action | Adventure | Mystery | Drama",
  "rating": 5,
  "release_date": "2021-11-17 10:59:38",
  "age_rating": "TV-MA",
  "id_article": 36,
  "createdAt": "2022-10-05 20:55:58",
  "updatedAt": "2022-07-30 01:35:05",
  "theater_release": false,
  "synopsis": "Hundreds of cash-strapped players accept a strange invitation to compete in children's games—with high stakes. But, a tempting prize awaits the victor.",
  "url_img":"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
  "actors":"Lee Jung-jae | Park Hae-soo | Jung Ho-yeon"
}, {
  "id": 12,
  "title": "The Big Bang Theory ",
  "genre": "Comedy",
  "rating": 5,
  "release_date": "2007-07-27 17:39:56",
  "age_rating": "TV-14",
  "id_article": 37,
  "createdAt": "2022-04-10 15:22:49",
  "updatedAt": "2022-08-03 02:02:37",
  "theater_release": true,
  "synopsis": "The sitcom is centered on five characters living in Pasadena, California: roommates Leonard Hofstadter and Sheldon Cooper; Penny, a waitress and aspiring actress who lives across the hall; and Leonard and Sheldon's equally geeky and socially awkward friends and co-workers, mechanical engineer Howard Wolowitz and astrophysicist Raj Koothrappali. The geekiness and intellect of the four guys is contrasted for comic effect with Penny's social skills and common sense.",
  "url_img":"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ooBGRQBdbGzBxAVfExiO8r7kloA.jpg",
  "actors":"Johnny Galecki | Jim Parsons | Kaley Cuoco"
}, {
  "id": 13,
  "title": "Pokémon",
  "genre": "Animation | Action | Adventure | Sci-Fi | Fantasy",
  "rating": 3,
  "release_date": "1997-01-13 00:40:41",
  "age_rating": "TV-Y7",
  "id_article": 38,
  "createdAt": "2022-09-13 00:03:22",
  "updatedAt": "2022-06-08 09:07:22",
  "theater_release": true,
  "synopsis": "Join Ash accompanied by his partner Pikachu, as he travels through many regions, meets new friends and faces new challenges on his quest to become a Pokémon Master.",
  "url_img":"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rOuGm07PxBhEsK9TaGPRQVJQm1X.jpg",
  "actors":"Rica Matsumoto | Ikue Otani"
}, {
  "id": 14,
  "title": "Scream Queens",
  "genre": "Mystery | Crime | Comedy",
  "rating": 5,
  "release_date": "2015-09-12 13:43:56",
  "age_rating": "TV-14",
  "id_article": 39,
  "createdAt": "2022-10-25 21:59:30",
  "updatedAt": "2022-03-27 20:55:07",
  "theater_release": true,
  "synopsis": "The super-charged comedy-horror series is a modern take on the classic whodunit with a killer cast.",
  "url_img":"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yeayXZYSU8xdmC8i5g5jTdxeggp.jpg",
  "actors":"Emma Roberts | Ariana Grande | Lea Michele"
}, {
  "id": 15,
  "title": "Dark",
  "genre": "Sci-Fi | Fantasy | Drama | Mystery | Crime",
  "rating": 4,
  "release_date": "2017-02-03 18:02:18",
  "age_rating": "TV-MA",
  "id_article": 40,
  "createdAt": "2022-07-02 04:20:08",
  "updatedAt": "2022-01-31 16:10:55",
  "theater_release": true,
  "synopsis": "A missing child causes four families to help each other for answers. What they could not imagine is that this mystery would be connected to innumerable other secrets of the small town.",
  "url_img":"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7yQyDCqSazrYTnmxdQLAZ8YDH87.jpg",
  "actors":"Louis Hofmann | Lisa Vicari | Andreas Pietschmann"
}]
    , {});
},

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
