(function() {
  'use strict'
  angular
    .module('app', ['ngMessages'])
    .component('redditClone', {
      controller: function() {
        const vm = this
        vm.post = {};
        vm.posts = [];
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
            comments: []
          }, {
            title: 'Boring Concert',
            author: 'Jack Stack',
            imageURL: 'https://static.pexels.com/photos/69212/pexels-photo-69212.jpeg',
            description: 'Why did I agree to do this???',
            comments: []
          })
          console.log(vm.posts);

        }


        //Show comment textarea when the "Post a comment" button is clicked
        vm.showCommentTextArea = function (post) {
          post.toggleCommentArea = !post.toggleCommentArea
          console.log('clicked comment button');
        }

        vm.submitComment = function (post) {
          console.log(vm.post.newComment);
          console.log('submitting comment');

          post.comments.push(vm.post.newComment)
          console.log(post);
          console.log(post.comments);

          // comment = {
                    console.log(vm.post.newComment.author)
                    console.log(vm.post.newComment.comment)
          //           }
          // vm.posts.comments.push(comment)
          // console.log(vm.posts.comments);
          // console.log(comment);
          // post.comments.push(comment)
        }

        // vm.cancelPost = function () {
        //   vm.showCommentTextArea()
        //   console.log('clicked the cancel button');
        // };

      },
      templateUrl: 'form.html'

    })

})()
