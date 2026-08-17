// import { test } from '@playwright/test';

// test('Deserialization', async ({ page }) => {

//     const jsonData = `{
//         "empName": "Naveen",
//         "id": 1023,
//         "phone": {
//             "mobile1": "8822993451",
//             "mobile2": "9994352390"
//         },
//         "skills": [
//             "manual",
//             "automation_testing",
//             "api_testing"
//         ]
//     }`;
//     const employee = JSON.parse(jsonData);
//     console.log(employee.phone.mobile2);
// });


// import { test } from '@playwright/test';
// import fs from 'fs';

// test('Serialization', async () => {

//     const employee = {
//         empName: "Naveen",
//         id: 1023,
//         phone: {
//             mobile1: "8822993451",
//             mobile2: "9994352390"
//         },
//         skills: [
//             "manual",
//             "automation_testing",
//             "api_testing"
//         ]
//     };

//     const jsonData = JSON.stringify(employee, null, 2);

//     fs.writeFileSync('employee.json', jsonData);

// });


import { test, expect } from '@playwright/test';
import fs from 'fs';

test('Deserialization', async () => {

    const jsonData = fs.readFileSync('employee.json', 'utf-8');

    const employee = JSON.parse(jsonData);

    console.log("Second Mobile Number:", employee.phone.mobile2);

    expect(employee.skills).toContain('api_testing');

});