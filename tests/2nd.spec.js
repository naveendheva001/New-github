// import{test} from '@playwright/test';

// test ('amazon',async({page})=>{
//     await page.goto('https://www.amazon.com/');
//     await page.locator('#nav-link-accountList')
//     let list=await page.locator('#nav-al-container');
  
//     console.log(await list.allInnerTexts());
// })


 import{test} from '@playwright/test';

 test ('txet_table',async({page})=>{
    await page.goto('https://demoqa.com/webtables');
    await page.locator('#addNewRecordButton').click();
    let table=await page.locator('[class="modal-body"]');
     await table.locator('#firstName').fill('Naveen');
     await table.locator('#lastName').fill('V');
    await table.locator('#userEmail').fill('naveendheva001@gmail.com');
    await table.locator('#age').fill('28');
    await table.locator('#salary').fill('15000');
    await table.locator('#department').fill('testing');
    await table.locator('#submit').click();
    let row=await page.locator('table tbody tr');
    console.log(await row.count());

    for (let i=0;i<await row.count();i++){
          let row_text= await row.nth(i).textContent();

          if (row_text.includes('Vega')){
           
            await row.nth(i).locator('[title="Edit"]').click();
            await page.locator('#age').fill('45');
            await page .locator('#submit').click();
          }

          if (row_text.includes('Cantrell')){
            await row.nth(i).locator('[title="Delete"]').click();

          }
          console.log(await row_text);
    }


    await page.waitForTimeout(4000);
 })