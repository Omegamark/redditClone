(function() {
  'use strict'
  angular
    .module('app', ['ngMessages'])
    .component('redditClone', {
      controller: function() {
        const vm = this
        vm.post = {};
        vm.posts = [];

        vm.$onInit = function () {
          console.log('Hello Hi!!!');
            setInitialPosts();


              vm.$onInit = function () {
                console.log('Hello Hi!');

              }

              //submit the form with ng-submit
              vm.createPost = function () {
                console.log('submitting')
                vm.posts.push({
                  title: vm.post.title,
                  author: vm.post.author,
                  image: vm.post.image,
                  description: vm.post.description
                })
                vm.post.title = '',
                vm.post.author = '',
                vm.post.image = '',
                vm.post.description = ''
              }

        }
        // title, author, image, and description
        function setInitialPosts() {
          vm.posts.push({
            title: 'Mark',
            author: 'poop',
            image: 'grant.mark@gmail.com',
            description: '80203'
          }, {
            title: 'Jack',
            author: 'thestack',
            image: 'fullstackjack@gmail.com',
            description: '80808'
          })
          console.log(vm.posts);
    }
      },
      templateUrl: 'form.html'


    })

})()
