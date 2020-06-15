const myFetch = (url, char, cb) => {
   setTimeout(() => {
    cb(url + '$');
   }, 3000)
}

const variableExample = 'someVal';
const variableArray = [ 1, 2, 3, 4];

export { myFetch, variableExample, variableArray };

// export default myFetch;