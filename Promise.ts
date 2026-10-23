const myPromise :Promise<string>= new Promise((resolve, reject) => {
    const success = false;
    if (success){
        resolve("operation successful");
    }
    else{
        reject(new Error("operation failed"));
    }
});

console.log(myPromise);
