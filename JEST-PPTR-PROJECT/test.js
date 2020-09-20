"use strict";
const puppeteer = require('puppeteer');

async function printPDF(){
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    await page.goto('file://D:/Amit/Front-End/Puppeteer/JEST-PPTR-PROJECT/test.html');

    const buffer = await page.pdf({
        printBackground: true,
        margin: {
            left: '2px',
            top: '4px',
            right: '2px',
            bottom: '2px'

        },
        preferCSSPageSize: true
    })
    //await page.emulateMedia('screen');
  
  const pdf = await page.pdf({  path: 'p_DOC2059064_formated_Komal.pdf', landscape: false, printBackground: true, margin: {top: '4px', left: '4px', right: '4px', bottom: '4px'}, PreferCSSPageSize: true ,displayHeaderFooter: true, printBackground: true});
 
  await browser.close();
  return pdf
}printPDF()
