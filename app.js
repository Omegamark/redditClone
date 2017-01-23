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
                  imageURL: vm.post.imageURL,
                  description: vm.post.description
                })
                vm.post.title = '',
                vm.post.author = '',
                vm.post.imageURL = '',
                vm.post.description = ''
              }

        }
        // title, author, imageURL, and description
        function setInitialPosts() {
          vm.posts.push({
            title: 'A Cliche',
            author: 'Jill Stack',
            imageURL: 'https://static.pexels.com/photos/7529/pexels-photo.jpeg',
            description: 'This was a good idea for a picture in the 60s.'
          }, {
            title: 'Boring Concert',
            author: 'Jack Stack',
            imageURL: 'https://static.pexels.com/photos/69212/pexels-photo-69212.jpeg',
            description: 'Why did I agree to do this???'
          })
          console.log(vm.posts);

        }

      },
      templateUrl: 'form.html'

    })
    
})()
