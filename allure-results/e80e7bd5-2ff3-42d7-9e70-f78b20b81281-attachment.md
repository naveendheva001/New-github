# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api_automation.spec.js >> api_test_post
- Location: tests\api_automation.spec.js:16:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 201
Received: 404
```

# Test source

```ts
  1  | import {test,expect} from "@playwright/test";
  2  | 
  3  | test ('api_testing',async({request})=>{
  4  |      const response=await request.get('https://jsonplaceholder.typicode.com/posts/1');
  5  | 
  6  |      expect(response.status()).toBe(200);
  7  | 
  8  |      const responseBody= await response.json();
  9  | 
  10 |      console.log(responseBody);
  11 | 
  12 |      expect(responseBody.id).toBe(1);
  13 | 
  14 | })
  15 | 
  16 | test ('api_test_post',async({request})=>{
  17 | 
  18 |     const response= await request.post('https://jsonplaceholder.typicode.com/posts/1',{
  19 |     data: {
  20 |          "userId": 1,
  21 |   "id": 1,
  22 |   "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  23 |   "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  24 |     }
  25 | })
> 26 |       expect(response.status()).toBe(201);
     |                                 ^ Error: expect(received).toBe(expected) // Object.is equality
  27 |     const responseBody = await response.json();
  28 |  
  29 |      console.log(responseBody);
  30 | })
```