(function() {
  'use strict'


  angular
    .module('app', ['ngMessages'])
    .component('redditClone', {
      controller: function() {
        const vm = this
        vm.post = {};
        vm.posts = [];
        // vm.commentBool = true;
        // vm.comments = [];
        // vm.newComment = {};

        vm.$onInit = function () {
          console.log('Hello Hi!!!');
            setInitialPosts();




        //submit the form with ng-submit
        vm.createPost = function () {
          vm.posts.push({
            title: vm.post.title,
            author: vm.post.author,
            imageURL: vm.post.imageURL,
            description: vm.post.description,
            date: new Date(),
            votes: vm.post.votes,
            comment: {},
            comments: []

          //   {
          //     author: vm.comment.author,
          //     comment: vm.comment.comment
          //   }, {
          //     author: vm.comment.author,
          //     comment: vm.comment.comment
          // }]
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
            description: 'This was a good idea for a picture in the 60s.',
            date: moment('2000-10-10').format('LLLL'),
            votes: 2,
            comments: []
          }, {
            title: 'Boring Concert',
            author: 'Jack Stack',
            imageURL: 'https://static.pexels.com/photos/69212/pexels-photo-69212.jpeg',
            description: 'Why did I agree to do this???',
            date: moment('10-19-1981').format('LLLL'),
            votes: 15,
            comments: []
          })
        };


        //Show comment textarea when the "Post a comment" button is clicked
        vm.showCommentTextArea = function (post) {
          post.toggleCommentArea = !post.toggleCommentArea
        };


        vm.submitComment = function (post) {
          post.comments.push(vm.post.newComment)
          vm.post.newComment = {};
          vm.showCommentTextArea(post);
        };


        vm.cancelPost = function (post) {
          vm.post.newComment = {};
          vm.showCommentTextArea(post);
        };

        vm.upVoteClass = function () {

        }


        //* Was trying to hide comments, but was taking far too long to do with an ngIf.
        // vm.showComments = function () {
        //
        // }
        // vm.hideComments = function () {
        //   console.log('clicked hideComments button');
        //   // vm.commentBool = !vm.commentBool
        // }

      },
      templateUrl: 'form.html'
    })

})()
