# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api_automation.spec.js >> api_test_delete
- Location: tests\api_automation.spec.js:55:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 204
Received: 200
```

# Test source

```ts
  1  | import {test,expect} from "@playwright/test";
  2  | 
  3  | test ('API Testing - Get Post by ID',async({request})=>{
  4  |      const response=await request.get('https://jsonplaceholder.typicode.com/posts/1');
  5  | 
  6  |      expect(response.status()).toBe(200);
  7  | 
  8  |      const responseBody= await response.json();
  9  | 
  10 |      console.log(responseBody);
  11 | 
  12 |      expect(responseBody.id).toBe(1);
  13 |      expect(responseBody.userId).toBe(1);
  14 | 
  15 | })
  16 | 
  17 | 
  18 | 
  19 | test ('api_test_post',async({request})=>{
  20 | 
  21 |     const response= await request.post('https://jsonplaceholder.typicode.com/posts',{
  22 |     data: {
  23 |          "userId": 1,
  24 |   "id": 1,
  25 |   "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  26 |   "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  27 |     }
  28 | })
  29 |       expect(response.status()).toBe(201);
  30 |     const responseBody = await response.json();
  31 |  
  32 |      console.log(responseBody);
  33 | })
  34 | 
  35 | 
  36 | 
  37 | test ('api_test_put',async({request})=>{
  38 | 
  39 |     const response= await request.put('https://jsonplaceholder.typicode.com/posts/3',{
  40 |     data: {
  41 |          "userId": 5,
  42 |   "id": 106,
  43 |   "title": "api testing put",
  44 |   "body": "put"
  45 |     }
  46 | })
  47 |       expect(response.status()).toBe(200);
  48 |     const responseBody = await response.json();
  49 |  
  50 |      console.log(responseBody);
  51 | })
  52 | 
  53 | 
  54 | 
  55 | test ('api_test_delete',async({request})=>{
  56 | 
  57 |     const response= await request.delete('https://jsonplaceholder.typicode.com/posts/3')
> 58 |       expect(response.status()).toBe(204);
     |                                 ^ Error: expect(received).toBe(expected) // Object.is equality
  59 | 
  60 |     })
  61 |  
  62 | 
  63 |     test ('api_test_patch',async({request})=>{
  64 | 
  65 |     const response= await request.patch('https://jsonplaceholder.typicode.com/posts/3',{
  66 |     data: {
  67 |         "age":28 
  68 |     }
  69 | })
  70 |       expect(response.status()).toBe(200);
  71 |     const responseBody = await response.json();
  72 |  
  73 |      console.log(responseBody);
  74 | })
```