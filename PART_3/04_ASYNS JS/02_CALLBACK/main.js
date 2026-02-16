// function abc(callback) {
//     callback()
// }
// function xyz() {
//     console.log("i am a callback !");
// }

// abc(xyz)

// Callback pattern
// function fetchData(callback) {
//   setTimeout(() => {
//     console.log("Data fetched");
//     callback();
//   }, 2000);
// }

// fetchData(() => {
//   console.log("Process data");
// });

// Callback hell
function loginUser(username, callback) {
  setTimeout(() => {
    console.log("User logged in:", username);
    callback({ userId: 101 });
  }, 1000);
}

function getUserData(userId, callback) {
  setTimeout(() => {
    console.log("Fetched user data for:", userId);
    callback({ postId: 555 });
  }, 1000);
}

function getUserPosts(postId, callback) {
  setTimeout(() => {
    console.log("Fetched posts:", postId);
    callback("Post saved successfully");
  }, 1000);
}

function savePost(message, callback) {
  setTimeout(() => {
    console.log(message);
    callback();
  }, 1000);
}


// call 
loginUser("Pratik", function(user) {

  getUserData(user.userId, function(data) {

    getUserPosts(data.postId, function(message) {

      savePost(message, function() {

        console.log("All tasks completed");

      });

    });

  });

});
