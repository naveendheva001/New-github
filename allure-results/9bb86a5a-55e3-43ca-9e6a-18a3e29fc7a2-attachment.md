# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api_automation.spec.js >> api_testing
- Location: tests\api_automation.spec.js:3:5

# Error details

```
TypeError: (0 , _test.expact) is not a function
```

# Test source

```ts
  1  | import {test,expact} from "@playwright/test";
  2  | 
  3  | test ('api_testing',async({request})=>{
  4  |      const response=await request.get('https://jsonplaceholder.typicode.com/posts');
> 5  |      expact(response.status()).toBe(200);
     |            ^ TypeError: (0 , _test.expact) is not a function
  6  |      const resposeBody= await response.json();
  7  |      console.log(resposeBody);
  8  | 
  9  | 
  10 | })
```