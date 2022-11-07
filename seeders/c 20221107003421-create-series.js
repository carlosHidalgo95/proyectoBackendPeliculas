'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('series', 
[{
  "id": 1,
  "title": "Diaries Notes and Sketches (Walden)",
  "genre": "Documentary",
  "rating": 2,
  "release_date": "2022-09-05 00:06:52",
  "age_rating": "R-Rated",
  "id_article": 16,
  "createdAt": "2021-12-16 20:57:09",
  "updatedAt": "2022-05-14 14:33:39",
  "theater_release": false
}, {
  "id": 2,
  "title": "Cousin Angelica (La prima Angélica)",
  "genre": "Drama",
  "rating": 2,
  "release_date": "2022-07-09 18:18:10",
  "age_rating": "R-Rated",
  "id_article": 17,
  "createdAt": "2022-04-24 01:14:53",
  "updatedAt": "2021-11-17 17:03:41",
  "theater_release": true
}, {
  "id": 3,
  "title": "Passion of the Christ, The",
  "genre": "Drama",
  "rating": 4,
  "release_date": "2022-02-01 07:09:02",
  "age_rating": "R-Rated",
  "id_article": 18,
  "createdAt": "2022-09-12 15:50:30",
  "updatedAt": "2022-03-06 10:45:36",
  "theater_release": false
}, {
  "id": 4,
  "title": "Underworld U.S.A.",
  "genre": "Crime|Drama",
  "rating": 2,
  "release_date": "2022-03-19 10:06:29",
  "age_rating": "M-Rated",
  "id_article": 19,
  "createdAt": "2022-07-08 16:25:12",
  "updatedAt": "2022-09-24 09:48:56",
  "theater_release": false
}, {
  "id": 5,
  "title": "Bruno (Dress Code, The)",
  "genre": "Comedy|Drama",
  "rating": 1,
  "release_date": "2022-09-29 23:23:29",
  "age_rating": "R-Rated",
  "id_article": 20,
  "createdAt": "2021-12-03 11:09:30",
  "updatedAt": "2022-09-01 18:07:24",
  "theater_release": true
}, {
  "id": 6,
  "title": "Begone Dull Care",
  "genre": "Animation",
  "rating": 1,
  "release_date": "2022-07-16 21:50:42",
  "age_rating": "M-Rated",
  "id_article": 21,
  "createdAt": "2022-08-03 12:13:41",
  "updatedAt": "2022-04-16 05:56:54",
  "theater_release": false
}, {
  "id": 7,
  "title": "Tango",
  "genre": "Drama|Musical",
  "rating": 2,
  "release_date": "2022-01-15 02:27:18",
  "age_rating": "M-Rated",
  "id_article": 22,
  "createdAt": "2022-06-25 21:33:13",
  "updatedAt": "2022-10-04 22:32:53",
  "theater_release": true
}, {
  "id": 8,
  "title": "11 Harrowhouse",
  "genre": "Comedy|Crime",
  "rating": 4,
  "release_date": "2022-11-22 04:54:08",
  "age_rating": "M-Rated",
  "id_article": 23,
  "createdAt": "2022-07-14 17:45:25",
  "updatedAt": "2021-12-11 10:34:42",
  "theater_release": true
}, {
  "id": 9,
  "title": "Diary of a Lost Girl (Tagebuch einer Verlorenen)",
  "genre": "Drama",
  "rating": 4,
  "release_date": "2022-08-24 22:21:01",
  "age_rating": "M-Rated",
  "id_article": 24,
  "createdAt": "2022-07-01 14:29:36",
  "updatedAt": "2022-03-07 01:51:19",
  "theater_release": true
}, {
  "id": 10,
  "title": "Alaska: Spirit of the Wild",
  "genre": "Documentary|IMAX",
  "rating": 3,
  "release_date": "2021-12-24 06:12:19",
  "age_rating": "M-Rated",
  "id_article": 25,
  "createdAt": "2022-08-14 04:24:57",
  "updatedAt": "2022-11-01 09:55:10",
  "theater_release": true
}, {
  "id": 11,
  "title": "Berlin Calling",
  "genre": "Comedy|Drama",
  "rating": 5,
  "release_date": "2021-11-17 10:59:38",
  "age_rating": "R-Rated",
  "id_article": 26,
  "createdAt": "2022-10-05 20:55:58",
  "updatedAt": "2022-07-30 01:35:05",
  "theater_release": false
}, {
  "id": 12,
  "title": "Evil Bong",
  "genre": "Comedy|Horror",
  "rating": 4,
  "release_date": "2022-07-27 17:39:56",
  "age_rating": "M-Rated",
  "id_article": 27,
  "createdAt": "2022-04-10 15:22:49",
  "updatedAt": "2022-08-03 02:02:37",
  "theater_release": true
}, {
  "id": 13,
  "title": "Cobra Verde",
  "genre": "Adventure|Drama",
  "rating": 2,
  "release_date": "2022-01-13 00:40:41",
  "age_rating": "M-Rated",
  "id_article": 28,
  "createdAt": "2022-09-13 00:03:22",
  "updatedAt": "2022-06-08 09:07:22",
  "theater_release": true
}, {
  "id": 14,
  "title": "Dr. Horrible's Sing-Along Blog",
  "genre": "Comedy|Drama|Musical|Sci-Fi",
  "rating": 5,
  "release_date": "2022-09-12 13:43:56",
  "age_rating": "M-Rated",
  "id_article": 29,
  "createdAt": "2022-10-25 21:59:30",
  "updatedAt": "2022-03-27 20:55:07",
  "theater_release": true
}, {
  "id": 15,
  "title": "Real Men",
  "genre": "Comedy|Sci-Fi",
  "rating": 3,
  "release_date": "2022-02-03 18:02:18",
  "age_rating": "R-Rated",
  "id_article": 30,
  "createdAt": "2022-07-02 04:20:08",
  "updatedAt": "2022-01-31 16:10:55",
  "theater_release": true
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
