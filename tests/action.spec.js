// import {test} from'@playwright/test';

// test('mouse action',async({page})=>{
//     await page.goto('https://jqueryui.com/droppable/');
//     const frame=await page.frameLocator('[class="demo-frame"]');
//     await frame.locator('#draggable').dragTo(await frame.locator('#droppable'))
//     await page.waitForTimeout(1000);
// })

// import{test}from'@playwright/test';

// test('window',async({page})=>{
//     await page .goto('https://www.flipkart.com/');
//     await page.locator('//button[@class="XFwMiH"]/following-sibling::div/child::input[class="nw1UBF v1zwn25"]').fill(camera).press();
// })

// import{test} from'@playwright/test';

// test ('myntra',async({page})=>{
//       await page.goto('https://www.myntra.com/boy-tshirts');

//       let text=await page.locator('//div[@class="product-productMetaInfo"]/descendant::h4[@class="product-product"]').allTextContents();
//       let price=await page.locator('//li[@class="product-base"]/descendant::div[@class="product-price"]/span[span[@class="product-discountedPrice"] or text() and not (@class)]').allTextContents();
//       console.log(await price);
//      let amount= price.map(product=>Number(product.match(/\d+/g)[0]));
//     console.log(amount);
//      let min = Math.min(...amount);
    // console.log(amount.sort((a,b)=>a-b));
//   let min=amount[0];
//    console.log(min);
//     // let title = await page.locator('//span[@class="product-discountedPrice"]/ancestor::div[@class="product-productMetaInfo"]/descendant::h4[@class="product-product"]').allTextContents();
//     let min_price=await locator('//li[@class="product-base"]/descendant::div[@class="product-price"]/span[span[@class="product-discountedPrice"] or text() and not (@class)]/ancestor::li/descendant::h3').allTextContents();
    //   console.log(await min_price);
//    let index = amount.indexOf(min);
//    console.log(index);
//     console.log(text);
//     console.log("Minimum Price:", min);
//     console.log("Product Name:", text[index]);

      // let text=await page.locator('//div[@class="product-productMetaInfo"]/descendant::h4[@class="product-product"]').allTextContents();



      import{test} from'@playwright/test';

test ('myntra',async({page})=>{
      await page.goto('https://www.myntra.com/boy-tshirts');

      let price=await page.locator('//li[@class="product-base"]/descendant::div[@class="product-price"]/span[span[@class="product-discountedPrice"] or text() and not (@class)]').allTextContents();
      console.log(await price);
     let amount= price.map(product=>Number(product.match(/\d+/g)[0]));
    console.log(amount);
     let min = Math.min(...amount);
  console.log(min);
    let min_price=await page.locator(`//li[@class="product-base"]/descendant::div[@class="product-price"]/span[span[@class="product-discountedPrice"and contains(., "${min}")] or (contains(., "${min}") and not (@class))]/ancestor::li/descendant::h4[@class="product-product"]`).allTextContents();

      console.log(await min_price);

})