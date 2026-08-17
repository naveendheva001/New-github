# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ipt.spec.js >> myntra
- Location: tests\ipt.spec.js:36:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
Call log:
  - navigating to "https://www.myntra.com/boy-tshirts", waiting until "load"

```

# Test source

```ts
  1  | // import {test} from "@playwright/test";
  2  | 
  3  | // test ('myntra',async({page})=>{
  4  | //      await page.goto('https://www.myntra.com/boy-tshirts');
  5  | 
  6  | //     let tshirt=await page.locator('//div[@class="product-price"]').allTextContents();
  7  | //    let tshirt=await page.locator("//span[@class='product-discountedPrice']").allTextContents();
  8  | //     console.log(tshirt);
  9  | //    let amount= tshirt.map(product=>Number(product.match(/\d+/g)[1]));
  10 | //    console.log(amount);
  11 | //    console.log(amount.sort((a,b)=>a-b));
  12 | //    console.log(amount[0]);
  13 | // const price =Math.min(...amount);
  14 | // console.log(price);
  15 | 
  16 | // })
  17 | 
  18 | // import {test} from "@playwright/test";
  19 | 
  20 | // test ('myntra',async({page})=>{
  21 | //      await page.goto('https://www.myntra.com/boy-tshirts');
  22 | 
  23 | //     // let tshirt=await page.locator('//div[@class="product-price"]').allTextContents();
  24 | //     // let tshirt=await page.locator('//li[@class="product-base"]/descendant::div[@class="product-price"]/span/span[@class="product-discountedPrice"]').allTextContents();
  25 | //    let tshirt=await page.locator('//li[@class="product-base"]/descendant::div[@class="product-price"]/span[span[@class="product-discountedPrice"] or text() and not (@class)]').allTextContents();
  26 | //     console.log(tshirt);
  27 | //    let amount= tshirt.map(product=>Number(product.match(/\d+/g)[0]));
  28 | //    console.log(amount);
  29 | //   let min = Math.amount(...amount);
  30 | //       console.log(amount);
  31 | //  })
  32 | 
  33 | 
  34 | import { test } from '@playwright/test';
  35 | 
  36 | test('myntra', async ({ page }) => {
> 37 |   await page.goto('https://www.myntra.com/boy-tshirts');
     |              ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
  38 | 
  39 |   let price = await page.locator('//li[@class="product-base"]/descendant::div[@class="product-price"]/span[span[@class="product-discountedPrice"] or text() and not (@class)]').allTextContents();
  40 |   // console.log(await price);
  41 | 
  42 |   let amount = price.map(product => Number(product.match(/\d+/g)[0]));
  43 |  // console.log(amount);
  44 | 
  45 |   let min = Math.min(...amount);
  46 |   console.log(min);
  47 | 
  48 |   let min_price_title = await page.locator(`//li[@class="product-base"]/descendant::div[@class="product-price"]/span[
  49 |         span[@class="product-discountedPrice" and contains(., "${min}")] or
  50 |         (contains(., "${min}") and not(@class)) ]/ancestor::li/descendant::h4[@class="product-product"]`).allTextContents();
  51 |       
  52 |           console.log( min_price_title);
  53 | 
  54 | })
  55 | 
  56 | // import { test } from "@playwright/test";
  57 | 
  58 | // test("Myntra", async({page}) => {
  59 | 
  60 | //     await page.goto("https://www.myntra.com/");
  61 | //     await page.waitForLoadState();
  62 | 
  63 | //     await page.locator('//div[@data-group="kids"]').hover();
  64 | //     await page.locator('//a[@href="/boy-tshirts"]').click();
  65 | 
  66 | //     let total_products = await page.locator('//li[@class="product-base"]');
  67 | //     console.log(total_products.count());
  68 | 
  69 | //     let price = await page.locator("//li[@class='product-base']/descendant::div[@class='product-price']/span[span[@class='product-discountedPrice'] or text() and not (@class)]").allTextContents();
  70 | //     console.log(await price);
  71 | 
  72 | //     let num_price = price.map(price => { return Number(price.match(/\d+/g)[0]) });
  73 | //     console.log(num_price);
  74 | 
  75 | //     let min_price = Math.min(...num_price);
  76 | //     async function min_price_function(min_price) {
  77 | 
  78 | //         let product_name = await page.locator('//li[@class="product-base"]/descendant::div[@class="product-price"]/span[span[@class="product-discountedPrice" and contains(., "${min_price}")] or (contains(., "${min_price}") and not(@class))]/ancestor::li/descendant::h3').allTextContents();
  79 | //         return product_name;
  80 | //     }
  81 | 
  82 | //     let min_price_product = await min_price_function(min_price);
  83 | //     console.log(min_price_product);
  84 | 
  85 | // })
  86 | 
  87 | 
  88 | 
  89 | 
  90 | 
  91 | 
```