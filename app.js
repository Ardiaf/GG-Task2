function popUp(){
    window.alert("Submitted, Thanks :)");
}

const getTodoAsyncAwait = async (resource) => {
    const response = await fetch(resource);
    const data = await response.json();

    return data;
    };
getTodoAsyncAwait("https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json")
.then(data => console.log('resolved:', data))
.catch(err => console.log('rejected:', window.alert("cannot fetch data")));
