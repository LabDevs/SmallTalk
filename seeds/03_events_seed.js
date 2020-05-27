exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('events')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {
          category_id: 1,
          user_id: 1,
          title: 'Anyone Up To Practice?',
          description:
            "I just found out about this app from a friend, and I thought it sounded really cool! I'm looking for someone to practice networking with, no starter topics or anything!",
          date: '2020-10-19 09:45:00-04'
        },
        {
          category_id: 5,
          user_id: 1,
          title: 'Cooking!',
          description:
            "Hi! I'm trying to learn how to cook, and if anyone wanted to just talk about some of the best ways to make certain dishes I'd be happy to talk about it!",
          date: '2020-10-19 21:50:00-04'
        },
        {
          category_id: 4,
          user_id: 2,
          title: 'Did Anyone See the Game?',
          description:
            "I was watching the football game last night, and I'm still stunned by the play! I was wondering if anyone else felt the same way!",
          date: '2020-10-5 20:00:00-04'
        },
        {
          category_id: 5,
          user_id: 2,
          title: "What's Your Favorite Food?",
          description:
            "It's a good conversation starter I think, but I'm also just curious since I love all kinds of food and I can't really choose a favorite!",
          date: '2020-10-4 12:10:00-04'
        },
        {
          category_id: 2,
          user_id: 3,
          title: 'Animal Crossing Fans?',
          description:
            "I've been playing Animal Crossing New Horizons for months now, and I have never seen the Animal Crossing fandom act so poorly. Was wondering if someone could explain why that is!",
          date: '2020-10-3 10:29:00-04'
        },
        {
          category_id: 1,
          user_id: 4,
          title: 'Dealing With COVID',
          description:
            "It's hard dealing with something unknown and seeing the world go into disarray, so I'm holding this event for someone who just wants to talk about how they're feeling :)",
          date: '2020-10-2 18:33:00-04'
        },
        {
          category_id: 2,
          user_id: 5,
          title: 'Super Smash Is Getting Boring',
          description:
            "I don't really know why, I've always loved Smash as a kid. Perhaps I need someone who shares the same passion about it as I do to find it fun again?",
          date: '2020-10-2 20:30:00-04'
        }
      ])
    })
}
