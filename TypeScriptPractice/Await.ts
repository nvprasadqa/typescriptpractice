// await wait for a Promise to complete

async function getUser(){
    return "veera";
}

async function test(){
    const user = await getUser();
    console.log(user);
}
test();

// output: veera

//withotu await
const user = getUser();
console.log(user);
//output: Promise {<pending>}

// Playwright example

await page.goto("http:url.com");
//Await says wait for Navigation add before moving to next step