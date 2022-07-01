import puppeteer from "puppeteer";
async function getVideoUrl() {
  const browser = await puppeteer.launch({
    headless: false,
  }); // 打开浏览器
  const page = await browser.newPage();
  // await page.emulate(puppeteer.devices['iPhone 6'])
  await page.goto("https://www.douyin.com/user/MS4wLjABAAAA_D6YhAxL5z-qCvKKu0caFPv-zd25J4c_gFZssHpHHcBSlGWKr5N1QtEn3Lrw0tdW"); // 跳转到指定页面
  await page.waitForTimeout(4000); // 延时2s加载页面 puppeteer2.1.1使用 waitFor ^13.0.1以上使用 waitForTimeout
  const pageHtml = await page.content(); // 获取页面html Gets the full HTML contents of the page, including the doctype.

  let ul = await page.$$(".ECMy_Zdt", (el) => {
    console.log(el.length);
    return el;
  });
  console.log(ul.length);
  //   const videoSrc = await page.$eval("video source", (el) => {
  //     let src = "";
  //     if (el && el.src) {
  //       src = el.src;
  //     }
  //     return src;
  //   });
  //   console.log(videoSrc);
  await page.close();
}
getVideoUrl();
