
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('fighter').del()
    .then(function () {
      // Inserts seed entries
      return knex('fighter').insert([
        {name: 'Brian Ortega', bio:'Brazilian jiu jitsu black belt under Rorion Gracie. Ranked number 1 in the UFC Featherweight division. Currently undefeated.', style:'Gracie Jiu-jitsu', img:'https://usatmmajunkie.files.wordpress.com/2016/01/brian-ortega-diego-brandao-ufc-195.jpg', strength:'87'},
        {name: 'Fedor Emelianenko', bio:'Russian Sambo champion. Former Pride Heavyweight Champinon. Went unbeaten for 10 straight years.', style:'Sambo', img:'https://www.jiujitsutimes.com/wp-content/uploads/Fedor-Emelianenko-vs-Hong-Man-Choi.jpg', strength:'91'},
        {name: 'Tony Ferguson', bio:'Former iterim UFC Lightweight Champion. Currently number 2 ranked Lightweight in the UFC.', style:'Wrestiling/Jiujitsu', img:'https://s.yimg.com/ny/api/res/1.2/N3MZeGvhzvc8zKREpKHCVA--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/9339f60e0e8869fefc6f4bb151f5991b', strength:'79'}
      ]);
    });
};
