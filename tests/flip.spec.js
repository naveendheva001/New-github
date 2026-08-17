import{test} from '@playwright/test'
 test ('flipkart',async ({page})=>{
   await page.goto ("https://www.flipkart.com/");
   let url= await page.url();
   let title= await page.title();
   console.log(url);
   console.log(title);
   await page. goto("https://www.instagram.com/");
  //   let u= await page. url();
  //   let t= await page.title();
  //  console.log(u);
  //  console.log(t);
   await page.goBack();
   await page. reload();
   await page . goForward();
  await page.waitForTimeout(50000);
  });




// import{test} from "@playwright/test";
// test ("red_bus", async ({page})=>{
//     await page.goto("https://www.redbus.in/");

// })


