var Joke = Backbone.Model.extend({

});

//collections

var Jokes = Backbone.Model.extend({
    url: 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten',
    model: Joke
});

//actionsCollection instances

var filteredJokes = new Jokes();
filteredJokes.fetch();
