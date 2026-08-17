// import{test,expect} from '@playwright/test';

// test('test_enable',async({page})=>{
//     await page.goto('https://demoqa.com/text-box');
//     await expect(page.locator('//button[@class="btn btn-primary"]')).toBeEnabled();

//     await expect(page.locator('#userName')).toBeEditable();
//     await page.locator('#userName').fill('naveen');
    
//     await expect(page.locator('#userName')).toHaveValue('naveen');

// })

// import{test} from '@playwright/test';

// test ('web_table',async({page})=>{
//     await page.goto('https://demoqa.com/webtables');
//     let row=await page.locator('table tbody tr ');
//             await page.locator('')
//     for(let i=0; i<await row.count(); i++){
//        let table= await row.nth(i).textContent();

//       if (table.)

//     }

// })

import { test } from '@playwright/test';

test('myntra', async ({ page }) => {
  await page.goto('https://www.myntra.com/boy-tshirts');

  let price = await page.locator('//li[@class="product-base"]/descendant::div[@class="product-price"]/span[span[@class="product-discountedPrice"] or text() and not (@class)]').allTextContents();
  console.log(await price);

  let amount = price.map(product => Number(product.match(/\d+/g)[0]));
  console.log(amount);

  let min = Math.min(...amount);
  console.log(min);
})