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


              vm.$onInit = function () {
                console.log('Hello Hi!');

              }

        //submit the form with ng-submit
        vm.createPost = function () {
          console.log('submitting')
          console.log(vm.post.title);
          vm.posts.push({
            title: vm.post.title,
            author: vm.post.author,
            imageURL: vm.post.imageURL,
            description: vm.post.description,
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
            date: new Date(),
            comments: []
          }, {
            title: 'Boring Concert',
            author: 'Jack Stack',
            imageURL: 'https://static.pexels.com/photos/69212/pexels-photo-69212.jpeg',
            description: 'Why did I agree to do this???',
            date: new Date(),
            comments: []
          })
          console.log(vm.posts);

        }


        //Show comment textarea when the "Post a comment" button is clicked
        vm.showCommentTextArea = function (post) {
          console.log('this is post', post);
          console.log('clicked comment button');
          post.toggleCommentArea = !post.toggleCommentArea
        }

        //Counts the number of comments when users submit them to each post.
        var commentCount = 0;

        vm.submitComment = function (post) {
          console.log('submitting comment');

          vm.commentBool = !vm.commentBool

          post.comments.push({
            author: vm.post.newComment.author,
            comment: vm.post.newComment.comment,
            counter: commentCount + 1});
          vm.post.newComment = {};
          vm.showCommentTextArea(post);
          // console.log('comment Array', post.comments);
          commentCount = post.comments.length;
          console.log(commentCount);
        };

        console.log('comments', commentCount);



        vm.cancelPost = function (post) {
          console.log('clicked the cancel button');
          console.log(post);
          vm.post.newComment = {};
          vm.showCommentTextArea(post);
        };




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
