// import{test} from '@playwright/test'
// test ("amazon", async ({page})=>{
//     await page.goto("https://www.amazon.com/");
//     await page.screenshot ({path:'./screen_shot'});
// })

//  import {test} from '@playwright/test'

//  test ('amazon', async({page})=>{
//     await page.goto ('https://www.amazon.com/');
//     await page.locator('#twotabsearchtextbox').fill('mobile');
//     await page.locator('#nav-search-submit-button').click();
//  })

// import {test} from '@playwright/test'

// test ('demoqa', async ({page})=>{
//     await page.goto ('https://demoqa.com/text-box')
//    let url = await page.url();
//     let title = await page.title();
//     console.log(url);
//     console.log(title);
//     await page.locator ('#userName').fill('Naveen');
//     await page.locator ('#userEmail').fill('naveendheva001@gmail.com');
//     await page.locator ('#currentAddress').fill('porur,chennai');
//     await page.locator ('#permanentAddress').fill('chennai');
//     await page.screenshot({path:'./screen_shot.png'})
//     await page.locator ('#submit').click();
//     await page.waitForTimeout(4000);
//     await page.screenshot({path:'./screen_shot1.png'})

// }
// )

// import {test,chromium} from '@playwright/test';

// test ('launch browser', async()=>{
// const browser=await chromium.launch();
// const context1 = await browser.newContext();
// const page1 = await context1.newPage();
// await page1. goto ('https://www.testautomationcentral.com/demo/dropdown.html');
// await page1. locator('button[data-target="multi-select-dropdown"]').click();
// await page1. selectOption('[name ="url"]',{value:"option value=option1"}) ;
// await page1. waitForTimeout(4000);
// })

// import {test,chromium} from '@playwright/test';

// test ('launch browser', async()=>{
// const browser=await chromium.launch();
// const context1 = await browser.newContext();
// const page1 = await context1.newPage();
// await page1. goto ('https://www.testautomationcentral.com/demo/dropdown.html');
// await page1. locator('[data-target="simple-dropdown"]');
// await page1. selectOption('//select[@class="form-select block w-full mt-1"])[1]',[{index:2}]);
// await page1. waitForTimeout(4000);
// })

// import {test} from '@playwright/test';
// test('Test',async({page})=>{
//     await page.goto('https://www.testautomationcentral.com/demo/dropdown.html');
//     await page.getByRole('button',{name:'Multi-Select'}).click();
//     await page.selectOption('//select[@class="form-multiselect block w-full mt-1"]',['Option 1','Option 3','Option 4']);
//     await page.waitForTimeout(3000);
// })

// import {test} from '@playwright/test';
// test('js alerts',async({page})=>{
//     await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
//     page.on('dialog',(dialog)=>{
//         console.log(dialog.type());
//         console.log (dialog.message());
//         if(dialog.type()==='alert'){
//             dialog.accept();
//         }
//         else if(dialog.type()==='confirm'){
//            dialog.dismiss();
//         }
//         else if(dialog.accept('Naveen'));

//     })
//     await page.locator ('//button[@onclick="jsAlert()"]').click();
//     await page.locator ('//button[@onclick="jsConfirm()"]').click();
//     await page.locator ('//button[@onclick="jsPrompt()"]').click();
//     await page.waitForTimeout(3000);

// })

// import{test} from '@playwright/test';
// test  ('multi select',async({page})=>{
//     await page.goto('https://www.testautomationcentral.com/demo/dropdown.html');
//     await page.locator('//button[@data-target="multi-select-dropdown"]').click();
//     await page.selectOption('//select[@class="form-multiselect block w-full mt-1"]',['Option 1','Option 4','Option 5']);
//     await page.waitForTimeout(3000);
// })

// import{test} from '@playwright/test';
// test ('dom page',async ({page})=>{
//     await page.goto('https://www.makemytrip.com/');
//     try{
//         await page.waitForSelector('[class="commonModal__close"]');
//         await page.locator('[class="commonModal__close"]').click();
//     }
//     catch{
//         console.log('popup not appeared');
//     }
// })/

// import{test} from '@playwright/test';
// test ('dom page',async ({page})=>{
//     await page.goto('https://www.makemytrip.com/');
//     try{
//         await page.waitForSelector('[class="commonModal__close"]');
//         await page.locator('[class="commonModal__close"]').click();
//     }
//     catch{
//         console.log('popup not appeared');
//     }
// })

// import {test} from "@playwright/test";

// test ('amazon',async({page})=>{
//     await page.goto('https://www.amazon.com/');
//     await page.locator('(//input[@class="nav-input nav-progressive-attribute"])[1]');
//     await page.locator(' So twenty times twenty times so specific in the image so parents in the simple slash. For example, grandparent in the image descendant descendant slash descendant descendant minimum total')
// })

//span[text()='Shoes under $50']/ancestor::div[@class="_Zmx1a_fluidQuadImageLabelBody_3tld0"]/child::div[@class="a-section a-spacing-small _Zmx1a_gridRowOne_1t0zL"]/decendant::div[@class="a-section a-spacing-none _Zmx1a_imageLabel_3ANSV aok-inline-block aok-align-center"]
//img[@draggable="false"]
// /span[@class="product-discountedPri
// const tshirtcount= await page.locator('//div[@class="product-productMetaInfo"]').count("");

// import {test} from "@playwright/test";

// test ('myntra',async({page})=>{
//      await page.goto('https://www.myntra.com/boy-tshirts');
    
//     let tshirt=await page.locator('//div[@class="product-price"]').allTextContents();
//     console.log(tshirt);
//     let amount=tshirt.map(tshirt=>Number(tshirt.Number()));
//      console.log(amount);
// })

// import {test} from "@playwright/test";

// test ('upload',async({page})=>{
//      await page.goto('https://www.file.io/');
//      await  page.setInputFiles('#select-files-input','./screen_shot.png','/screen_shot1.png');
//      await page. waitForTimeout(4000);
//      await page.setInputFiles('#select-files-input',[]);
//      await page.waitForTimeout(5000);
// })

// import {test} from "@playwright/test";
// test ('upload_files',async({page})=>{
//      await page.goto ('https://demoqa.com/upload-download')
//      const [image] =await Promise.all([
//           page.waitForEvent('download'),
//           page.locator('#downloadButton').click()

//      ]);
//     console.log('image');
//     await image.saveAs('./download/img.png');
// })


     // import{test} from "@playwright/test";

     // test('frame',async({page})=>{
     //      await page.goto('https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame');
     //      const frame = await page.frameLocator('iframe[class=" lazyloaded"]');
     //      // await frame.locator('[alt="SAP Hybris Training"]').click();
     //      await frame.getByText('SAP Hybris Training').click();
     //      await page.waitForTimeout(3000);
     //      await page.locator('#menu-item-2806').click();
     //      await page.waitForTimeout(3000);
     // })


     // import{test} from "@playwright/test";

     // test ('nested_frame',async({page})=>{
     //      await page.goto('https://www.hyrtutorials.com/p/frames-practice.html');
     //      const frame2=await page.frameLocator ('#frm2');
     //      await frame2.locator("#firstName").fill('NAVEEN');
     //      await frame2.locator('#lastName').fill('v');
     //      await frame2.locator('#englishchbx').click();
          
     //      const frame3=await page.frameLocator('#frm3');
//      //      const frame3_2=await frame3.frameLocator ('#frm2');
//      //      await frame3_2.locator("#firstName").fill('NAVEEN');
//      //      await frame3_2.locator('#lastName').fill('v');
//      //      await frame3_2.locator('#englishchbx').click();
//      // })


// import {test} from "@playwright/test";

// test ('myntra',async({page})=>{
//      await page.goto('https://www.myntra.com/boy-tshirts');
    
//     let tshirt=await page.locator('//div[@class="product-price"]').allTextContents();
//     console.log(tshirt);
// //     let amount=tshirt.map(
// //      console.log(amount);
// })

import { test } from '@playwright/test';

test('myntra', async ({ page }) => {
  await page.goto('https://www.myntra.com/boy-tshirts');

  let counts = await page.locator('//li[@class="product-base"]');
  let total_count =await counts.count();  

console.log(await total_count);

})