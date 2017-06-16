### subdocument

#### subdocument insert
```
// This is how to remove subdocuments
const post = user.posts[0];
// Note: this is not raw js array's slice
// array slice is not efficient
post.remove();
return user.save();
```
#### subdocument remove
- simply use array push
