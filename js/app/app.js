angular
    .module('app', ['ui.router'])
    .config(function($stateProvider){
      $stateProvider
        .state('top', {
          url: '/top',
          templateUrl: 'templates/stories.html',
          controller: 'StoriesController as ctrl',
          resolve: {
              topStories: function (storyService) {
                  return storyService.getStories();
              }
          }
        })
        .state('post', {
          url: '/post/:id',
          templateUrl: 'story.html'
        });

    });