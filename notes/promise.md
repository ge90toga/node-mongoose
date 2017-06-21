
### Promise note
```
// then catch also returns promise, if you want the first catch to be executed but stop at that point,
// you need this trick:return Promise.reject(); Promise Code
// notice the last catch does nothing but without it you have a unhandled promise warning
testP(3).then(() => {
    console.log(a.b)
}).catch((err) => {
    console.log(err);
    return Promise.reject();
}).then(() => {
    console.log('go second');
}).catch(()=>{});
```