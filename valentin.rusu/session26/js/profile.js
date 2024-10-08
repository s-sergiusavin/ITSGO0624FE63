// Get the news feed container
const newsFeed = document.getElementById("newsFeed");

// Function to create a new post
function createPost() {
  const postContent = document.getElementById("postContent").value;

  if (postContent.trim() === "") {
    alert("Post content cannot be empty!");
    return;
  }

  // Create a new post element
  const post = document.createElement("div");
  post.classList.add("post");

  post.innerHTML = `
    <div class="post-author">
      <strong>User Name</strong>
      <p>${postContent}</p>
    </div>
    <div class="post-actions">
      <button onclick="likePost(this)">Like</button>
      <span class="like-count">0 Likes</span>
      <button onclick="commentPost(this)">Comment</button>
    </div>
  `;

  // Append the post to the news feed
  newsFeed.insertBefore(post, newsFeed.firstChild);

  // Clear the post textarea after submission
  document.getElementById("postContent").value = "";
}

// Function to like a post
function likePost(button) {
  const likeCountElement = button.nextElementSibling;
  let likeCount = parseInt(likeCountElement.textContent);

  // Increment the like count
  likeCount++;
  likeCountElement.textContent = `${likeCount} Likes`;
}

// Function to add a comment (to be expanded)
function commentPost(button) {
  alert("Comment feature to be added soon!");
}
