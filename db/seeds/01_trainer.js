exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('trainer').del()
    .then(function() {
      // Inserts seed entries
      return knex('trainer').insert([

        {
          name: 'Troy Amelotte',
          email: 'troy@amelotte.com',
          password: 'troy',
          bio: 'Troy is an ex Navy Seal who has trained for years to keep his body in top physical shape. He has a degree in nutrition and utilizes his expertise in this area to help bring your body to the next level',
          img_url: "https://media.licdn.com/dms/image/C5103AQH7WcSg8TQsmA/profile-displayphoto-shrink_200_200/0?e=1537401600&v=beta&t=8OFIeXzRVc_g3ncKkpPLuhX7qlk1yLE7wWD0cwtBXDg"
        }
      ]);
    });
};
