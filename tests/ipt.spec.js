// import {test} from "@playwright/test";

// test ('myntra',async({page})=>{
//      await page.goto('https://www.myntra.com/boy-tshirts');

//     let tshirt=await page.locator('//div[@class="product-price"]').allTextContents();
//    let tshirt=await page.locator("//span[@class='product-discountedPrice']").allTextContents();
//     console.log(tshirt);
//    let amount= tshirt.map(product=>Number(product.match(/\d+/g)[1]));
//    console.log(amount);
//    console.log(amount.sort((a,b)=>a-b));
//    console.log(amount[0]);
// const price =Math.min(...amount);
// console.log(price);

// })

// import {test} from "@playwright/test";

// test ('myntra',async({page})=>{
//      await page.goto('https://www.myntra.com/boy-tshirts');

//     // let tshirt=await page.locator('//div[@class="product-price"]').allTextContents();
//     // let tshirt=await page.locator('//li[@class="product-base"]/descendant::div[@class="product-price"]/span/span[@class="product-discountedPrice"]').allTextContents();
//    let tshirt=await page.locator('//li[@class="product-base"]/descendant::div[@class="product-price"]/span[span[@class="product-discountedPrice"] or text() and not (@class)]').allTextContents();
//     console.log(tshirt);
//    let amount= tshirt.map(product=>Number(product.match(/\d+/g)[0]));
//    console.log(amount);
//   let min = Math.amount(...amount);
//       console.log(amount);
//  })


// import { test } from '@playwright/test';

// test('myntra', async ({ page }) => {
//   await page.goto('https://www.myntra.com/boy-tshirts');

//   let price = await page.locator('//li[@class="product-base"]/descendant::div[@class="product-price"]/span[span[@class="product-discountedPrice"] or text() and not (@class)]').allTextContents();
//   // console.log(await price);

//   let amount = price.map(product => Number(product.match(/\d+/g)[0]));
//  // console.log(amount);

//   let min = Math.min(...amount);
//   console.log(min);

//   let min_price_title = await page.locator(`//li[@class="product-base"]/descendant::div[@class="product-price"]/span[
//         span[@class="product-discountedPrice" and contains(., "${min}")] or
//         (contains(., "${min}") and not(@class)) ]/ancestor::li/descendant::h4[@class="product-product"]`).allTextContents();
      
//           console.log( min_price_title);

// })

// import { test } from "@playwright/test";

// test("Myntra", async({page}) => {

//     await page.goto("https://www.myntra.com/");
//     await page.waitForLoadState();

//     await page.locator('//div[@data-group="kids"]').hover();
//     await page.locator('//a[@href="/boy-tshirts"]').click();

//     let total_products = await page.locator('//li[@class="product-base"]');
//     console.log(total_products.count());

//     let price = await page.locator("//li[@class='product-base']/descendant::div[@class='product-price']/span[span[@class='product-discountedPrice'] or text() and not (@class)]").allTextContents();
//     console.log(await price);

//     let num_price = price.map(price => { return Number(price.match(/\d+/g)[0]) });
//     console.log(num_price);

//     let min_price = Math.min(...num_price);
//     async function min_price_function(min_price) {

//         let product_name = await page.locator('//li[@class="product-base"]/descendant::div[@class="product-price"]/span[span[@class="product-discountedPrice" and contains(., "${min_price}")] or (contains(., "${min_price}") and not(@class))]/ancestor::li/descendant::h3').allTextContents();
//         return product_name;
//     }

//     let min_price_product = await min_price_function(min_price);
//     console.log(min_price_product);

// })

// import { test } from '@playwright/test';

// test('myntra', async ({ page }) => {
//   await page.goto('https://www.myntra.com/boy-tshirts');

//   let price = await page.locator('//li[@class="product-base"]/descendant::div[@class="product-price"]/span[span[@class="product-discountedPrice"] or text() and not (@class)]').allTextContents();
//   // console.log(await price);

//   let amount = price.map(product => Number(product.match(/\d+/g)[0]));
//  // console.log(amount);

//   let min = Math.min(...amount);
//   console.log(min);

//   let min_price_title = await page.locator(`//li[@class="product-base"]/descendant::div[@class="product-price"]/span[
//         span[@class="product-discountedPrice" and contains(., "${min}")] or
//         (contains(., "${min}") and not(@class)) ]/ancestor::li/descendant::h4[@class="product-product"]`).allTextContents();
      
//           console.log( min_price_title);

// })

import { test } from '@playwright/test';

test('myntra', async ({ page }) => {
  await page.goto('https://www.myntra.com/boy-tshirts');

  let price = await page.locator('//li[@class="product-base"]/descendant::div[@class="product-price"]/span[span[@class="product-discountedPrice"] or text() and not (@class)]').allTextContents();
  // console.log(await price);

  let amount = price.map(product => Number(product.match(/\d+/g)[0]));
 // console.log(amount);

  let min = Math.min(...amount);
  console.log(min);

  let min_price_title = await page.locator(`//li[@class="product-base"]/descendant::div[@class="product-price"]/span[
        span[@class="product-discountedPrice" and contains(., "${min}")] or
        (contains(., "${min}") and not(@class)) ]/ancestor::li/descendant::h4[@class="product-product"]`).allTextContents();
      
          console.log( min_price_title);

})



