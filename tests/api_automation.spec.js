import {test,expect} from "@playwright/test";

test ('api_testing',async({request})=>{
     const response=await request.get('https://jsonplaceholder.typicode.com/posts/1');

     expect(response.status()).toBe(200);

     const responseBody= await response.json();

     console.log(responseBody);

     expect(responseBody.id).toBe(1);
     expect(responseBody.userId).toBe(1);

})



test ('api_test_post',async({request})=>{

    const response= await request.post('https://jsonplaceholder.typicode.com/posts',{
    data: {
         "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }
})
      expect(response.status()).toBe(201);
    const responseBody = await response.json();
 
     console.log(responseBody);
})



test ('api_test_put',async({request})=>{

    const response= await request.put('https://jsonplaceholder.typicode.com/posts/3',{
    data: {
         "userId": 5,
  "id": 1000,
  "title": "api testing put",
  "body": "put"
    }
})
      expect(response.status()).toBe(200);
    const responseBody = await response.json();
 
     console.log(responseBody);
})



test ('api_test_delete',async({request})=>{

    const response= await request.delete('https://jsonplaceholder.typicode.com/posts/3')
      expect(response.status()).toBe(200);

    })
 

    test ('api_test_patch',async({request})=>{

    const response= await request.patch('https://jsonplaceholder.typicode.com/posts/3',{
    data: {
        "age":28 
    }
})
      expect(response.status()).toBe(200);
    const responseBody = await response.json();
 
     console.log(responseBody);
})