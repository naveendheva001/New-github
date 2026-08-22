// import{test} from "@playwright/test";

// test("amazon",async({page})=>{

//     await page.goto("https://www.amazon.com/");
//    await page.locator("#twotabsearchtextbox").fill("iphone");
//    await page.waitForTimeout(4000);

// })

import { test } from '@playwright/test';

test('myntra', async ({ page }) => {
  await page.goto('https://www.myntra.com/boy-tshirts');

  let counts = await page.locator('//li[@class="product-base"]');
  let total_count =await counts.count();  

console.log(await total_count);

})
