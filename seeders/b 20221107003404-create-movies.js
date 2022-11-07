'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('movies', 
      [{
        "id": 1,
        "title": "Two-Lane Blacktop",
        "genre": "Drama",
        "rating": 5,
        "release_date": "2022-08-01 11:35:25",
        "age_rating": "R-Rated",
        "createdAt": "2022-06-14 19:15:59",
        "updatedAt": "2021-12-16 03:07:03",
        "id_article": 1
      }, {
        "id": 2,
        "title": "Careful",
        "genre": "Comedy|Horror",
        "rating": 3,
        "release_date": "2022-08-28 00:04:50",
        "age_rating": "M-Rated",
        "createdAt": "2022-03-16 08:20:38",
        "updatedAt": "2022-09-14 04:51:52",
        "id_article": 2
      }, {
        "id": 3,
        "title": "Windfall",
        "genre": "Documentary",
        "rating": 2,
        "release_date": "2022-08-29 08:00:59",
        "age_rating": "M-Rated",
        "createdAt": "2021-12-26 12:18:39",
        "updatedAt": "2022-07-03 02:36:00",
        "id_article": 3
      }, {
        "id": 4,
        "title": "Making Plans for Lena (Non ma fille, tu n'iras pas danser)",
        "genre": "Drama",
        "rating": 4,
        "release_date": "2022-02-06 06:27:44",
        "age_rating": "R-Rated",
        "createdAt": "2022-07-03 08:29:57",
        "updatedAt": "2022-03-19 14:37:57",
        "id_article": 4
      }, {
        "id": 5,
        "title": "Odd Girl Out",
        "genre": "Drama",
        "rating": 1,
        "release_date": "2022-05-26 18:59:53",
        "age_rating": "M-Rated",
        "createdAt": "2022-05-05 11:32:41",
        "updatedAt": "2022-09-19 17:27:54",
        "id_article": 5
      }, {
        "id": 6,
        "title": "Dante's Peak",
        "genre": "Action|Thriller",
        "rating": 4,
        "release_date": "2022-11-06 03:59:33",
        "age_rating": "R-Rated",
        "createdAt": "2021-11-27 00:57:51",
        "updatedAt": "2022-05-19 16:10:23",
        "id_article": 6
      }, {
        "id": 7,
        "title": "Free Money",
        "genre": "Comedy|Crime",
        "rating": 3,
        "release_date": "2022-08-18 06:11:30",
        "age_rating": "M-Rated",
        "createdAt": "2022-01-16 21:09:33",
        "updatedAt": "2022-09-16 20:55:51",
        "id_article": 7
      }, {
        "id": 8,
        "title": "Back to School with Franklin",
        "genre": "Animation|Children",
        "rating": 4,
        "release_date": "2022-04-23 21:36:39",
        "age_rating": "R-Rated",
        "createdAt": "2022-05-27 13:48:12",
        "updatedAt": "2022-05-19 06:03:53",
        "id_article": 8
      }, {
        "id": 9,
        "title": "Noi the Albino (Nói albinói)",
        "genre": "Drama",
        "rating": 3,
        "release_date": "2022-08-02 04:03:33",
        "age_rating": "R-Rated",
        "createdAt": "2022-10-22 10:09:01",
        "updatedAt": "2022-08-07 20:37:32",
        "id_article": 9
      }, {
        "id": 10,
        "title": "Little Caesar",
        "genre": "Crime|Drama",
        "rating": 4,
        "release_date": "2021-12-01 23:50:20",
        "age_rating": "R-Rated",
        "createdAt": "2021-12-13 09:15:01",
        "updatedAt": "2021-12-04 05:12:06",
        "id_article": 10
      }, {
        "id": 11,
        "title": "Zouzou",
        "genre": "Comedy",
        "rating": 4,
        "release_date": "2022-03-02 02:46:21",
        "age_rating": "R-Rated",
        "createdAt": "2021-12-22 09:00:41",
        "updatedAt": "2022-03-18 10:15:19",
        "id_article": 11
      }, {
        "id": 12,
        "title": "Whole Nine Yards, The",
        "genre": "Comedy|Crime",
        "rating": 1,
        "release_date": "2022-11-05 13:29:04",
        "age_rating": "M-Rated",
        "createdAt": "2021-12-01 18:55:50",
        "updatedAt": "2021-12-25 19:53:19",
        "id_article": 12
      }, {
        "id": 13,
        "title": "Murder Over New York",
        "genre": "Comedy|Crime|Mystery|Thriller",
        "rating": 1,
        "release_date": "2022-09-28 22:52:19",
        "age_rating": "R-Rated",
        "createdAt": "2022-06-01 11:38:31",
        "updatedAt": "2022-06-03 14:17:45",
        "id_article": 13
      }, {
        "id": 14,
        "title": "Bill Burr: Let It Go",
        "genre": "Comedy",
        "rating": 3,
        "release_date": "2022-05-30 10:08:46",
        "age_rating": "M-Rated",
        "createdAt": "2022-04-04 00:43:02",
        "updatedAt": "2022-04-14 06:40:13",
        "id_article": 14
      }, {
        "id": 15,
        "title": "WarGames: The Dead Code",
        "genre": "Drama|Sci-Fi|Thriller",
        "rating": 5,
        "release_date": "2022-06-16 06:23:26",
        "age_rating": "M-Rated",
        "createdAt": "2022-06-17 14:02:20",
        "updatedAt": "2022-08-22 04:43:27",
        "id_article": 15
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
