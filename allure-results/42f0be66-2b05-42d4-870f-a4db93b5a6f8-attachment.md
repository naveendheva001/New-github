# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ipt.spec.js >> Myntra
- Location: tests\ipt.spec.js:58:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://www.myntra.com/", waiting until "load"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e3]:
    - text: "| | |"
    - generic:
      - link [ref=e5] [cursor=pointer]:
        - /url: /
      - navigation [ref=e6]:
        - generic [ref=e7]:
          - link "Men" [ref=e10] [cursor=pointer]:
            - /url: /shop/men
          - link "Women" [ref=e13] [cursor=pointer]:
            - /url: /shop/women
          - link "Kids" [ref=e16] [cursor=pointer]:
            - /url: /shop/kids
          - link "Home" [ref=e19] [cursor=pointer]:
            - /url: /shop/home-living
          - link "Beauty" [ref=e22] [cursor=pointer]:
            - /url: /personal-care
          - link "Genz" [ref=e25] [cursor=pointer]:
            - /url: /shop/fwd-women
          - generic [ref=e27]:
            - link "Studio" [ref=e28] [cursor=pointer]:
              - /url: /studio/home
            - superscript [ref=e30]: new
      - generic [ref=e31]:
        - generic [ref=e32]: Profile
        - link "Wishlist":
          - /url: /wishlist
        - link "Bag":
          - /url: /checkout/cart
      - textbox "Search for products, brands and more" [ref=e41]
  - main [ref=e46]:
    - generic [ref=e47]:
      - generic [ref=e61]:
        - generic:
          - generic:
            - link:
              - /url: https://www.myntra.com/nu-best-seller-styles
      - generic [ref=e65]:
        - generic [ref=e67]:
          - generic [ref=e76]:
            - generic:
              - generic:
                - link:
                  - /url: https://www.myntra.com/mens-sports-apparel?rf=Discount%20Range%3A40.0_100.0_40.0%20TO%20100.0
          - generic [ref=e85]:
            - generic:
              - generic:
                - link:
                  - /url: https://www.myntra.com/accessories?f=Brand%3ACaprese%3A%3ACategories%3AClutches%2CHandbags%2CWallets%3A%3AGender%3Amen%20women%2Cwomen&rf=Discount%20Range%3A60.0_100.0_60.0%20TO%20100.0
          - generic [ref=e94]:
            - generic:
              - generic:
                - link:
                  - /url: https://www.myntra.com/mens-apparel?f=Brand%3AU.S.%20Polo%20Assn.%2CU.S.%20Polo%20Assn.%20Denim%20Co.%2CU.S.%20Polo%20Assn.%20Tailored&rf=Discount%20Range%3A10.0_100.0_10.0%20TO%20100.0
          - generic [ref=e103]:
            - generic:
              - generic:
                - link:
                  - /url: https://www.myntra.com/fwdgenzcollection?rf=Price%3A0.0_1000.0_0.0%20TO%201000.0&storeContext=fwd
          - generic [ref=e112]:
            - generic:
              - generic:
                - link:
                  - /url: https://www.myntra.com/mens-sports-apparel?rf=Discount%20Range%3A40.0_100.0_40.0%20TO%20100.0
          - generic [ref=e121]:
            - generic:
              - generic:
                - link:
                  - /url: https://www.myntra.com/accessories?f=Brand%3ACaprese%3A%3ACategories%3AClutches%2CHandbags%2CWallets%3A%3AGender%3Amen%20women%2Cwomen&rf=Discount%20Range%3A60.0_100.0_60.0%20TO%20100.0
        - list [ref=e122]:
          - listitem [ref=e123] [cursor=pointer]:
            - button "• 1" [ref=e124]
          - listitem [ref=e125] [cursor=pointer]:
            - button "• 2" [ref=e126]
          - listitem [ref=e127] [cursor=pointer]:
            - button "• 3" [ref=e128]
          - listitem [ref=e129] [cursor=pointer]:
            - button "• 4" [ref=e130]
      - generic [ref=e139]:
        - generic:
          - generic:
            - link:
              - /url: https://www.myntra.com/shop/seasonsstylefest
      - generic [ref=e141]:
        - heading "Shop By Category" [level=4] [ref=e142]
        - heading [level=4]
      - generic [ref=e147]:
        - link [ref=e154] [cursor=pointer]:
          - /url: https://www.myntra.com/fusion-wear?rf=Discount%20Range%3A50.0_100.0_50.0%20TO%20100.0
        - link [ref=e162] [cursor=pointer]:
          - /url: https://www.myntra.com/men-casual-wear?plaEnabled=false&rf=Discount%20Range%3A40.0_100.0_40.0%20TO%20100.0
        - link [ref=e170] [cursor=pointer]:
          - /url: https://www.myntra.com/sports-wear?f=Gender%3Amen%2Cmen%20women&rawQuery=sports%20wear&rf=Discount%20Range%3A30.0_100.0_30.0%20TO%20100.0
        - link [ref=e178] [cursor=pointer]:
          - /url: https://www.myntra.com/wsa-all-new?rf=Discount%20Range%3A30.0_100.0_30.0%20TO%20100.0
        - link [ref=e186] [cursor=pointer]:
          - /url: https://www.myntra.com/womens-western-wear?rf=Discount%20Range%3A50.0_100.0_50.0%20TO%20100.0
        - link [ref=e194] [cursor=pointer]:
          - /url: https://www.myntra.com/sport-apparel-?rawQuery=sport%20apparel%20
      - generic [ref=e200]:
        - link [ref=e207] [cursor=pointer]:
          - /url: https://www.myntra.com/loungewear?plaEnabled=false&rf=Discount%20Range%3A30.0_100.0_30.0%20TO%20100.0
        - link [ref=e215] [cursor=pointer]:
          - /url: https://www.myntra.com/men-innerwear?rf=Discount%20Range%3A10.0_100.0_10.0%20TO%20100.0
        - link [ref=e223] [cursor=pointer]:
          - /url: https://www.myntra.com/lingerie?rf=Discount%20Range%3A40.0_100.0_40.0%20TO%20100.0
        - link [ref=e231] [cursor=pointer]:
          - /url: https://www.myntra.com/watches?rf=Discount%20Range%3A40.0_100.0_40.0%20TO%20100.0
        - link [ref=e239] [cursor=pointer]:
          - /url: https://www.myntra.com/beauty-page-appliances?rf=Discount%20Range%3A10.0_100.0_10.0%20TO%20100.0
        - link [ref=e247] [cursor=pointer]:
          - /url: https://www.myntra.com/grooming?f=Brand%3ABeardhood%2CBombay%20Shaving%20Company%2CFoolzy%2CTHE%20MAN%20COMPANY%2CUstraa&rf=Discount%20Range%3A10.0_100.0_10.0%20TO%20100.0
      - generic [ref=e253]:
        - link [ref=e260] [cursor=pointer]:
          - /url: https://www.myntra.com/kids?plaEnabled=false&rf=Discount%20Range%3A50.0_100.0_50.0%20TO%20100.0
        - link [ref=e268] [cursor=pointer]:
          - /url: https://www.myntra.com/footwear?f=Gender%3Amen%2Cmen%20women&plaEnabled=false&rf=Discount%20Range%3A40.0_100.0_40.0%20TO%20100.0
        - link [ref=e276] [cursor=pointer]:
          - /url: https://www.myntra.com/footwear-new?f=Gender%3Amen%20women%2Cwomen&plaEnabled=false&rf=Discount%20Range%3A40.0_100.0_40.0%20TO%20100.0
        - link [ref=e284] [cursor=pointer]:
          - /url: https://www.myntra.com/men-accessories?f=Categories%3ABelts%2CWallets&plaEnabled=false&rf=Discount%20Range%3A40.0_100.0_40.0%20TO%20100.0
        - link [ref=e292] [cursor=pointer]:
          - /url: https://www.myntra.com/office-wear-men-and-women?rawQuery=office%20wear%20men%20and%20women
        - link [ref=e300] [cursor=pointer]:
          - /url: https://www.myntra.com/men-ethnic-wear?plaEnabled=false&rf=Discount%20Range%3A50.0_100.0_50.0%20TO%20100.0
      - generic [ref=e306]:
        - link [ref=e313] [cursor=pointer]:
          - /url: https://www.myntra.com/home-furnishing-menu?plaEnabled=false&rf=Discount%20Range%3A40.0_100.0_40.0%20TO%20100.0
        - link [ref=e321] [cursor=pointer]:
          - /url: https://www.myntra.com/handbags-and-bags?f=Categories%3AClutches%2CHandbags%2CWallets%3A%3AGender%3Amen%20women%2Cwomen&plaEnabled=false&rf=Discount%20Range%3A40.0_100.0_40.0%20TO%20100.0
        - link [ref=e329] [cursor=pointer]:
          - /url: https://www.myntra.com/gadgets?f=Categories%3AHeadphones%2CSpeakers&rf=Discount%20Range%3A10.0_100.0_10.0%20TO%20100.0
        - link [ref=e337] [cursor=pointer]:
          - /url: https://www.myntra.com/women-jewellery?rf=Discount%20Range%3A10.0_100.0_10.0%20TO%20100.0
        - link [ref=e345] [cursor=pointer]:
          - /url: https://www.myntra.com/plus-size-all?f=Gender%3Amen%20women%2Cwomen&rf=Discount%20Range%3A50.0_100.0_50.0%20TO%20100.0&sort=new
        - link [ref=e353] [cursor=pointer]:
          - /url: https://www.myntra.com/plus-size-all?f=Gender%3Amen%2Cmen%20women&rf=Discount%20Range%3A50.0_100.0_50.0%20TO%20100.0&sort=new
      - generic [ref=e359]:
        - link [ref=e366] [cursor=pointer]:
          - /url: https://www.myntra.com/watches?rawQuery=Watches&rf=Discount%20Range%3A30.0_100.0_30.0%20TO%20100.0
        - link [ref=e374] [cursor=pointer]:
          - /url: https://www.myntra.com/loungewear?f=Gender%3Amen%20women%2Cwomen&plaEnabled=false&rf=Discount%20Range%3A30.0_100.0_30.0%20TO%20100.0
        - link [ref=e382] [cursor=pointer]:
          - /url: https://www.myntra.com/work-wear-men?extra_search_param=isautosuggestentry%3atrue%3a%3aid%3a2297-work-wear-men&rawQuery=Work%20Wear%20Men
        - link [ref=e390] [cursor=pointer]:
          - /url: https://www.myntra.com/eyewear?rf=Discount%20Range%3A30.0_100.0_30.0%20TO%20100.0
        - link [ref=e398] [cursor=pointer]:
          - /url: https://www.myntra.com/work-wear-women?extra_search_param=isautosuggestentry%3atrue%3a%3aid%3a2297-work-wear-women&rawQuery=Work%20Wear%20Women
        - link [ref=e406] [cursor=pointer]:
          - /url: https://www.myntra.com/casual-wear-women-dress?extra_search_param=isautosuggestentry%3atrue%3a%3aid%3a2297-casual-wear-women-dress&rawQuery=Casual%20Wear%20Women%20Dress
      - generic [ref=e412]:
        - link [ref=e419] [cursor=pointer]:
          - /url: https://www.myntra.com/trolley-bags?plaEnabled=false&rf=Discount%20Range%3A30.0_100.0_30.0%20TO%20100.0
        - link [ref=e427] [cursor=pointer]:
          - /url: https://www.myntra.com/accessories?f=Categories%3ABackpacks&rf=Discount%20Range%3A30.0_100.0_30.0%20TO%20100.0
        - link [ref=e435] [cursor=pointer]:
          - /url: https://www.myntra.com/trolley-bags?plaEnabled=false&rf=Discount%20Range%3A30.0_100.0_30.0%20TO%20100.0
        - link [ref=e443] [cursor=pointer]:
          - /url: https://www.myntra.com/flipflop?f=Gender%3Amen%20women%2Cwomen&rf=Discount%20Range%3A30.0_100.0_30.0%20TO%20100.0
        - link [ref=e451] [cursor=pointer]:
          - /url: https://www.myntra.com/flipflop?f=Gender%3Amen%20women%2Cwomen&rf=Discount%20Range%3A30.0_100.0_30.0%20TO%20100.0
  - contentinfo [ref=e456]:
    - generic [ref=e457]:
      - generic [ref=e458]:
        - generic [ref=e459]:
          - paragraph [ref=e460]:
            - link "ONLINE SHOPPING" [ref=e461] [cursor=pointer]:
              - /url: /?src=onlineShopping
          - link "Men" [ref=e462] [cursor=pointer]:
            - /url: /shop/men
          - link "Women" [ref=e463] [cursor=pointer]:
            - /url: /shop/women
          - link "Kids" [ref=e464] [cursor=pointer]:
            - /url: /shop/kids
          - link "Home" [ref=e465] [cursor=pointer]:
            - /url: /shop/home-living
          - link "Beauty" [ref=e466] [cursor=pointer]:
            - /url: /personal-care
          - link "Genz" [ref=e467] [cursor=pointer]:
            - /url: /shop/fwd-women
          - link "Gift Cards" [ref=e468] [cursor=pointer]:
            - /url: /giftcard
          - link "Myntra Insider" [ref=e469] [cursor=pointer]:
            - /url: /myntrainsider?cache=false
          - paragraph [ref=e470]: USEFUL LINKS
          - link "Blog" [ref=e471] [cursor=pointer]:
            - /url: http://blog.myntra.com/
          - link "Careers" [ref=e472] [cursor=pointer]:
            - /url: https://careers.myntra.com
          - link "Site Map" [ref=e473] [cursor=pointer]:
            - /url: /sitemap
          - link "Corporate Information" [ref=e474] [cursor=pointer]:
            - /url: /corp-info
          - link "Whitehat" [ref=e475] [cursor=pointer]:
            - /url: /security/whitehat
          - link "Cleartrip" [ref=e476] [cursor=pointer]:
            - /url: https://www.cleartrip.com/
          - link "Myntra Global" [ref=e477] [cursor=pointer]:
            - /url: https://www.myntraglobal.com/
        - generic [ref=e478]:
          - paragraph [ref=e479]: CUSTOMER POLICIES
          - link "Contact Us" [ref=e480] [cursor=pointer]:
            - /url: /contactus
          - link "FAQ" [ref=e481] [cursor=pointer]:
            - /url: /faqs
          - link "T&C" [ref=e482] [cursor=pointer]:
            - /url: /tac
          - link "Terms Of Use" [ref=e483] [cursor=pointer]:
            - /url: /termsofuse
          - link "Track Orders" [ref=e484] [cursor=pointer]:
            - /url: /my/orders
          - link "Shipping" [ref=e485] [cursor=pointer]:
            - /url: /faqs#shipping
          - link "Cancellation" [ref=e486] [cursor=pointer]:
            - /url: /faqs#cancel
          - link "Privacy policy" [ref=e487] [cursor=pointer]:
            - /url: /privacypolicy
          - link "Grievance Redressal" [ref=e488] [cursor=pointer]:
            - /url: /grievanceredressal
          - link "FSSAI Food Safety Connect app" [ref=e489] [cursor=pointer]:
            - /url: https://fssai.gov.in/cms/food-safety-connect.php
        - generic [ref=e490]:
          - paragraph [ref=e491]: EXPERIENCE MYNTRA APP ON MOBILE
          - generic:
            - link:
              - /url: https://play.google.com/store/apps/details?id=com.myntra.android
            - link:
              - /url: https://itunes.apple.com/in/app/myntra-indias-fashion-store/id907394059
          - generic [ref=e492]: KEEP IN TOUCH
          - link [ref=e493] [cursor=pointer]:
            - /url: https://www.facebook.com/myntra
          - link:
            - /url: https://twitter.com/myntra
          - link:
            - /url: https://www.youtube.com/user/myntradotcom
          - link:
            - /url: https://www.instagram.com/myntra
        - generic [ref=e495]:
          - generic [ref=e499]:
            - strong [ref=e500]: 100% ORIGINAL
            - text: guarantee for all products at myntra.com
          - generic [ref=e504]:
            - strong [ref=e505]: Return within 14days
            - text: of receiving your order
      - generic [ref=e507]:
        - separator [ref=e508]
        - generic [ref=e509]: POPULAR SEARCHES
        - generic [ref=e510]:
          - link "Makeup |" [ref=e511] [cursor=pointer]:
            - /url: /makeup
          - link "Dresses For Girls |" [ref=e512] [cursor=pointer]:
            - /url: /girls-dresses
          - link "T-Shirts |" [ref=e513] [cursor=pointer]:
            - /url: /tshirts
          - link "Sandals |" [ref=e514] [cursor=pointer]:
            - /url: /sandals
          - link "Headphones |" [ref=e515] [cursor=pointer]:
            - /url: /headphones
          - link "Babydolls |" [ref=e516] [cursor=pointer]:
            - /url: /babydolls
          - link "Blazers For Men |" [ref=e517] [cursor=pointer]:
            - /url: /men-blazers
          - link "Handbags |" [ref=e518] [cursor=pointer]:
            - /url: /handbags
          - link "Ladies Watches |" [ref=e519] [cursor=pointer]:
            - /url: /women-watches
          - link "Bags |" [ref=e520] [cursor=pointer]:
            - /url: /bags
          - link "Sport Shoes |" [ref=e521] [cursor=pointer]:
            - /url: /sports-shoes
          - link "Reebok Shoes |" [ref=e522] [cursor=pointer]:
            - /url: /reebok-shoes
          - link "Puma Shoes |" [ref=e523] [cursor=pointer]:
            - /url: /puma-shoes
          - link "Boxers |" [ref=e524] [cursor=pointer]:
            - /url: /men-boxers
          - link "Wallets |" [ref=e525] [cursor=pointer]:
            - /url: /wallets
          - link "Tops |" [ref=e526] [cursor=pointer]:
            - /url: /women-shirts-tops-tees
          - link "Earrings |" [ref=e527] [cursor=pointer]:
            - /url: /earrings
          - link "Fastrack Watches |" [ref=e528] [cursor=pointer]:
            - /url: /fastrack-watches
          - link "Kurtis |" [ref=e529] [cursor=pointer]:
            - /url: /women-kurtas-kurtis-suits
          - link "Nike |" [ref=e530] [cursor=pointer]:
            - /url: /nike
          - link "Smart Watches |" [ref=e531] [cursor=pointer]:
            - /url: /smart-watches
          - link "Titan Watches |" [ref=e532] [cursor=pointer]:
            - /url: /titan-watches
          - link "Designer Blouse |" [ref=e533] [cursor=pointer]:
            - /url: /saree-blouse
          - link "Gowns |" [ref=e534] [cursor=pointer]:
            - /url: /gown
          - link "Rings |" [ref=e535] [cursor=pointer]:
            - /url: /rings
          - link "Cricket Shoes |" [ref=e536] [cursor=pointer]:
            - /url: /cricket-shoes
          - link "Forever 21 |" [ref=e537] [cursor=pointer]:
            - /url: /forever-21
          - link "Eye Makeup |" [ref=e538] [cursor=pointer]:
            - /url: /eye-makeup
          - link "Photo Frames |" [ref=e539] [cursor=pointer]:
            - /url: /photo-frames
          - link "Punjabi Suits |" [ref=e540] [cursor=pointer]:
            - /url: /punjabi-suits
          - link "Bikini |" [ref=e541] [cursor=pointer]:
            - /url: /bikini
          - link "Myntra Fashion Show |" [ref=e542] [cursor=pointer]:
            - /url: /shop/myntra-fashion-superstar
          - link "Lipstick |" [ref=e543] [cursor=pointer]:
            - /url: /lipstick
          - link "Saree |" [ref=e544] [cursor=pointer]:
            - /url: /saree
          - link "Watches |" [ref=e545] [cursor=pointer]:
            - /url: /watches
          - link "Dresses |" [ref=e546] [cursor=pointer]:
            - /url: /dresses
          - link "Lehenga |" [ref=e547] [cursor=pointer]:
            - /url: /lehengas
          - link "Nike Shoes |" [ref=e548] [cursor=pointer]:
            - /url: /nike-shoes
          - link "Goggles |" [ref=e549] [cursor=pointer]:
            - /url: /goggles
          - link "Bras |" [ref=e550] [cursor=pointer]:
            - /url: /bra
          - link "Suit |" [ref=e551] [cursor=pointer]:
            - /url: /men-suits
          - link "Chinos |" [ref=e552] [cursor=pointer]:
            - /url: /chinos
          - link "Shoes |" [ref=e553] [cursor=pointer]:
            - /url: /shoes
          - link "Adidas Shoes |" [ref=e554] [cursor=pointer]:
            - /url: /adidas-shoes
          - link "Woodland Shoes |" [ref=e555] [cursor=pointer]:
            - /url: /woodland-shoes
          - link "Jewellery |" [ref=e556] [cursor=pointer]:
            - /url: /jewellery
          - link "Designers Sarees" [ref=e557] [cursor=pointer]:
            - /url: /designer-saree
      - generic [ref=e558]:
        - generic [ref=e559]:
          - text: In case of any concern,
          - link "Contact Us" [ref=e560] [cursor=pointer]:
            - /url: /contactus
        - generic [ref=e561]: © 2026 www.myntra.com. All rights reserved.
        - link "A Flipkart company" [ref=e563] [cursor=pointer]:
          - /url: https://www.flipkart.com/
      - generic [ref=e564]:
        - paragraph [ref=e565]: Registered Office Address
        - generic [ref=e566]:
          - generic [ref=e567]: Buildings Alyssa, Begonia and Clover situated in Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village, Varthur Hobli, Bengaluru – 560103, India
          - generic [ref=e568]:
            - paragraph [ref=e569]: "CIN: U72300KA2007PTC041799"
            - paragraph [ref=e570]:
              - text: "Telephone:"
              - link "080‑40011450" [ref=e571] [cursor=pointer]:
                - /url: tel:080‑40011450
      - generic [ref=e572]:
        - heading [level=1] [ref=e573]:
          - strong [ref=e574]: ONLINE SHOPPING MADE EASY AT MYNTRA
        - paragraph [ref=e575]:
          - text: If you would like to experience the best of online shopping for men, women and kids in India, you are at the right place. Myntra is the ultimate destination for fashion and lifestyle, being host to a wide array of merchandise including
          - link "clothing" [ref=e576] [cursor=pointer]:
            - /url: /clothing
          - text: ", footwear, accessories, jewellery, personal care products and more. It is time to redefine your style statement with our treasure-trove of trendy items. Our online store brings you the latest in designer products straight out of fashion houses. You can shop online at Myntra from the comfort of your home and get your favourites delivered right to your doorstep."
        - heading [level=3] [ref=e577]:
          - strong [ref=e578]: BEST ONLINE SHOPPING SITE IN INDIA FOR FASHION
        - paragraph [ref=e579]: Be it clothing, footwear or accessories, Myntra offers you the ideal combination of fashion and functionality for men, women and kids. You will realise that the sky is the limit when it comes to the types of outfits that you can purchase for different occasions.
        - list [ref=e580]:
          - listitem [ref=e581]:
            - strong [ref=e582]: Smart men’s clothing
            - text: "- At Myntra you will find myriad options in smart formal shirts and trousers, cool T-shirts and jeans, or kurta and pyjama combinations for men. Wear your attitude with printed T-shirts. Create the back-to-campus vibe with varsity T-shirts and distressed jeans. Be it gingham, buffalo, or window-pane style, checked shirts are unbeatably smart. Team them up with chinos, cuffed jeans or cropped trousers for a smart casual look. Opt for a stylish layered look with biker jackets. Head out in cloudy weather with courage in water-resistant jackets. Browse through our innerwear section to find supportive garments which would keep you confident in any outfit."
          - listitem [ref=e583]:
            - strong [ref=e584]: Trendy women’s clothing
            - text: "-"
            - link "Online shopping for women" [ref=e585] [cursor=pointer]:
              - /url: /shop/women
            - text: at Myntra is a mood-elevating experience. Look hip and stay comfortable with chinos and printed shorts this summer. Look hot on your date dressed in a little black dress, or opt for red dresses for a sassy vibe. Striped dresses and T-shirts represent the classic spirit of nautical fashion. Choose your favourites from among Bardot, off-shoulder, shirt-style, blouson, embroidered and peplum tops, to name a few. Team them up with skinny-fit jeans, skirts or palazzos. Kurtis and jeans make the perfect fusion-wear combination for the cool urbanite. Our grand
            - link "sarees" [ref=e586] [cursor=pointer]:
              - /url: /saree
            - text: and lehenga-choli selections are perfect to make an impression at big social events such as weddings. Our salwar-kameez sets, kurtas and Patiala suits make comfortable options for regular wear.
          - listitem [ref=e587]:
            - strong [ref=e588]: Fashionable footwear
            - text: "- While clothes maketh the man, the type of footwear you wear reflects your personality. We bring you an exhaustive lineup of options in casual shoes for men, such as sneakers and loafers. Make a power statement at work dressed in brogues and oxfords. Practice for your marathon with running shoes for men and women. Choose shoes for individual games such as tennis, football, basketball, and the like. Or step into the casual style and comfort offered by sandals, sliders, and flip-flops. Explore our lineup of fashionable footwear for ladies, including pumps, heeled boots, wedge-heels, and pencil-heels. Or enjoy the best of comfort and style with embellished and metallic flats."
          - listitem [ref=e589]:
            - strong [ref=e590]: Stylish accessories
            - text: "- Myntra is one of the best online shopping sites for classy accessories that perfectly complement your outfits. You can select smart analogue or digital watches and match them up with belts and ties. Pick up spacious bags, backpacks, and wallets to store your essentials in style. Whether you prefer minimal jewellery or grand and sparkling pieces, our online jewellery collection offers you many impressive options."
          - listitem [ref=e591]:
            - strong [ref=e592]: Fun and frolic
            - text: "- Online shopping for kids at Myntra is a complete joy. Your little princess is going to love the wide variety of pretty dresses, ballerina shoes, headbands and clips. Delight your son by picking up sports shoes, superhero T-shirts, football jerseys and much more from our online store. Check out our lineup of toys with which you can create memories to cherish."
          - listitem [ref=e593]:
            - strong [ref=e594]: Beauty begins here
            - text: "- You can also refresh, rejuvenate and reveal beautiful skin with personal care, beauty and grooming products from Myntra. Our soaps, shower gels, skin care creams, lotions and other ayurvedic products are specially formulated to reduce the effect of aging and offer the ideal cleansing experience. Keep your scalp clean and your hair uber-stylish with shampoos and hair care products. Choose makeup to enhance your natural beauty."
        - paragraph [ref=e595]:
          - text: Myntra is one of the best online shopping sites in India which could help transform your living spaces completely. Add colour and personality to your bedrooms with bed linen and curtains. Use smart tableware to impress your guest. Wall decor, clocks,
          - link "photo frames" [ref=e596] [cursor=pointer]:
            - /url: /photo-frames
          - text: and artificial plants are sure to breathe life into any corner of your home.
        - heading [level=3] [ref=e597]:
          - strong [ref=e598]: AFFORDABLE FASHION AT YOUR FINGERTIPS
        - paragraph [ref=e599]: Myntra is one of the unique online shopping sites in India where fashion is accessible to all. Check out our new arrivals to view the latest designer clothing, footwear and accessories in the market. You can get your hands on the trendiest style every season in western wear. You can also avail the best of ethnic fashion during all Indian festive occasions. You are sure to be impressed with our seasonal discounts on footwear, trousers, shirts, backpacks and more. The end-of-season sale is the ultimate experience when fashion gets unbelievably affordable.
        - heading [level=3] [ref=e600]:
          - strong [ref=e601]: MYNTRA INSIDER
        - paragraph [ref=e602]:
          - text: Every online shopping experience is precious. Hence, a cashless reward-based customer loyalty program called
          - link "Myntra Insider" [ref=e603] [cursor=pointer]:
            - /url: /myntrainsider
          - text: was introduced to enhance your online experience. The program is applicable to every registered customer and measures rewards in the form of Insider Points.
        - paragraph [ref=e604]: There are four levels to achieve in the program, as the Insider Points accumulate. They are - Insider, Select, Elite or Icon. Apart from offering discounts on Myntra and partner platform coupons, each tier comes with its own special perks.
        - paragraph [ref=e605]:
          - strong [ref=e606]: Insider
        - list [ref=e607]:
          - listitem [ref=e608]: Opportunity to master any domain in fashion with tips from celebrity stylists at Myntra Masterclass sessions.
          - listitem [ref=e609]: Curated collections from celeb stylists.
        - paragraph [ref=e610]:
          - strong [ref=e611]: Elite
        - list [ref=e612]:
          - listitem [ref=e613]: VIP access to special sale events such as the End of Reason Sale (EORS) and product launches.
          - listitem [ref=e614]: Exclusive early access to Limited Edition products
        - paragraph [ref=e615]:
          - strong [ref=e616]: Icon
        - list [ref=e617]:
          - listitem [ref=e618]: Chance to get on guest lists for special events.
        - heading [level=3] [ref=e619]:
          - strong [ref=e620]: Myntra Studio - The Personalised Fashion Feed You Wouldn’t Want To Miss Out On
        - paragraph [ref=e621]: The world wide web is evolving at a relentless pace, and with an accelerated growth each passing year, there is bound to be an overwhelming surge of online content. It was for this very reason that personalisation of search feeds was proposed as a solution to combat the overload of irrelevant information.
        - paragraph [ref=e622]: Several social media platforms such as Facebook and Instagram along with various online shopping websites have chosen to help filter content, increasing user engagement, retention and customer loyalty.
        - paragraph [ref=e623]:
          - text: Myntra is one such online shopping website that joins the list of platforms that help curate a personalised fashion feed. Named the
          - link "Myntra Studio" [ref=e624] [cursor=pointer]:
            - /url: /studio/home
          - text: ", this personalised search feed brings you the latest men and women’s fashion trends, celebrity styles, branded content and daily updates from your favourite fashion labels."
        - paragraph [ref=e625]: If you are wondering how impactful Myntra Studio can be, we are listing out five perks of having a rich, meaningful, and personalised fashion feed in your life.
        - list [ref=e626]:
          - listitem [ref=e627]:
            - strong [ref=e628]: Keep Up With What Your Favourite Fashion Icons Are Upto
          - paragraph [ref=e629]: "The #OOTD, AKA outfit of the day hashtag trend has been a rage among fashion bloggers and stylists. The whole concept of building an outfit from scratch and showcasing it to a huge community of enthusiasts using the hashtag has helped individuals with understanding trends and making suitable for daily wear."
          - paragraph [ref=e630]: Imagine if you could keep up with every piece of clothing and accessory worn by the fashion icons you look upto. From Sonam Kapoor to Hailey Baldwin Bieber, Myntra Studio has a ‘Stories’ feature to help track celebrity fashion trends, exploring details such as their outfit of the day. This way, you would not ever miss out on the latest celebrity fashion trends, from all around the world.
          - listitem [ref=e631]:
            - strong [ref=e632]: Quick Fashion Tip And Tricks
          - paragraph [ref=e633]: Whether it is draping a saree into a dhoti style, wearing the right lingerie under certain dresses or discovering multiple uses out of heavy ethnic wear, Myntra Studio will help you acquire some unique and useful fashion hacks. Each hack is designed with the intention to help you get the best wear out of everything in your wardrobe.
          - listitem [ref=e634]:
            - strong [ref=e635]: Updates on What Is Trending and New Product Launches
          - paragraph [ref=e636]: Since fast fashion seems to be extremely hard to keep up with these days, a quick update on what is trending in accessories, clothing and footwear would certainly be of great help. Myntra Studio helps you stay connected to the most beloved and sought after brands such as Puma, Coverstory, The Label Life and so many more.
          - paragraph [ref=e637]: Your feed keeps you updated with stories of what the brands are creating including clothing, footwear and jewellery, along with their new seasonal collections.
          - listitem [ref=e638]:
            - strong [ref=e639]: Explicit Step-By-Step Beauty Routines From Experts
          - paragraph [ref=e640]: Just like fashion, the beauty community keeps on growing, and with brands such as Huda Beauty, MAC and the latest Kay Beauty by Katrina Kaif, are constantly coming up with mind-blowing products. Whether it is creating a no-makeup look, different winged eyeliners, do-it-yourself facial masks and other personal care beauty routines, Myntra Studio is here for you.
          - listitem [ref=e641]:
            - strong [ref=e642]: Celebrity Confessions And A Look Into Their Lives
          - paragraph [ref=e643]: A bonus feature that Myntra Studio has in store for you is celebrity confessions and a peek into their lives. So, Myntra helps you stay connected to your most beloved celebrities in a matter of clicks.
          - paragraph [ref=e644]: If you are very particular when it comes to the content you wish to view and engage with on social media, the ability to intricately filter content helps achieve that. Applying the same formula for hardcore fashion lovers and shoppers, Myntra Studio brings you a daily fashion fix incorporating everything that you love, all at one place. Sign up on Myntra today and start organising your fashion feed, just the way you want to.
        - heading [level=3] [ref=e645]:
          - strong [ref=e646]: MYNTRA APP
        - paragraph [ref=e647]:
          - text: Myntra, India’s no. 1 online fashion destination justifies its fashion relevance by bringing something new and chic to the table on the daily. Fashion trends seem to change at lightning speed, yet the Myntra shopping app has managed to keep up without any hiccups. In addition, Myntra has vowed to serve customers to the best of its ability by introducing its first-ever loyalty program, The Myntra Insider. Gain access to priority delivery, early sales, lucrative deals and other special perks on all your shopping with the Myntra app. Download the Myntra app on your
          - link "Android" [ref=e648] [cursor=pointer]:
            - /url: https://play.google.com/store/apps/details?id=com.myntra.android
          - text: or
          - link "IOS" [ref=e649] [cursor=pointer]:
            - /url: https://itunes.apple.com/in/app/myntra-indias-fashion-store/id907394059
          - text: device today and experience shopping like never before!
        - heading [level=3] [ref=e650]:
          - strong [ref=e651]: HISTORY OF MYNTRA
        - paragraph [ref=e652]:
          - text: Becoming India’s no. 1 fashion destination is not an easy feat. Sincere efforts, digital enhancements and a team of dedicated personnel with an equally loyal customer base have made Myntra the online platform that it is today. The original B2B venture for personalized
          - link "gifts" [ref=e653] [cursor=pointer]:
            - /url: /gifts
          - text: was conceived in 2007 but transitioned into a full-fledged ecommerce giant within a span of just a few years. By 2012, Myntra had introduced 350 Indian and international brands to its platform, and this has only grown in number each passing year. Today Myntra sits on top of the online fashion game with an astounding social media following, a loyalty program dedicated to its customers, and tempting, hard-to-say-no-to deals.
        - paragraph [ref=e654]: The Myntra shopping app came into existence in the year 2015 to further encourage customers’ shopping sprees. Download the app on your Android or IOS device this very minute to experience fashion like never before
        - heading [level=3] [ref=e655]:
          - strong [ref=e656]: SHOP ONLINE AT MYNTRA WITH COMPLETE CONVENIENCE
        - paragraph [ref=e657]: Another reason why Myntra is the best of all online stores is the complete convenience that it offers. You can view your favourite brands with price options for different products in one place. A user-friendly interface will guide you through your selection process. Comprehensive size charts, product information and high-resolution images help you make the best buying decisions. You also have the freedom to choose your payment options, be it card or cash-on-delivery. The 14-day returns policy gives you more power as a buyer. Additionally, the try-and-buy option for select products takes customer-friendliness to the next level.
        - paragraph [ref=e658]: Enjoy the hassle-free experience as you shop comfortably from your home or your workplace. You can also shop for your friends, family and loved-ones and avail our gift services for special occasions.
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
  34 | // import { test } from '@playwright/test';
  35 | 
  36 | // test('myntra', async ({ page }) => {
  37 | //   await page.goto('https://www.myntra.com/boy-tshirts');
  38 | 
  39 | //   let price = await page.locator('//li[@class="product-base"]/descendant::div[@class="product-price"]/span[span[@class="product-discountedPrice"] or text() and not (@class)]').allTextContents();
  40 | //   // console.log(await price);
  41 | 
  42 | //   let amount = price.map(product => Number(product.match(/\d+/g)[0]));
  43 | //  // console.log(amount);
  44 | 
  45 | //   let min = Math.min(...amount);
  46 | //   console.log(min);
  47 | 
  48 | //   let min_price_title = await page.locator(`//li[@class="product-base"]/descendant::div[@class="product-price"]/span[
  49 | //         span[@class="product-discountedPrice" and contains(., "${min}")] or
  50 | //         (contains(., "${min}") and not(@class)) ]/ancestor::li/descendant::h4[@class="product-product"]`).allTextContents();
  51 |       
  52 | //           console.log( min_price_title);
  53 | 
  54 | // })
  55 | 
  56 | import { test } from "@playwright/test";
  57 | 
  58 | test("Myntra", async({page}) => {
  59 | 
> 60 |     await page.goto("https://www.myntra.com/");
     |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
  61 |     await page.waitForLoadState();
  62 | 
  63 |     await page.locator('//div[@data-group="kids"]').hover();
  64 |     await page.locator('//a[@href="/boy-tshirts"]').click();
  65 | 
  66 |     let total_products = await page.locator('//li[@class="product-base"]');
  67 |     console.log(total_products.count());
  68 | 
  69 |     let price = await page.locator("//li[@class='product-base']/descendant::div[@class='product-price']/span[span[@class='product-discountedPrice'] or text() and not (@class)]").allTextContents();
  70 |     console.log(await price);
  71 | 
  72 |     let num_price = price.map(price => { return Number(price.match(/\d+/g)[0]) });
  73 |     console.log(num_price);
  74 | 
  75 |     let min_price = Math.min(...num_price);
  76 |     async function min_price_function(min_price) {
  77 | 
  78 |         let product_name = await page.locator('//li[@class="product-base"]/descendant::div[@class="product-price"]/span[span[@class="product-discountedPrice" and contains(., "${min_price}")] or (contains(., "${min_price}") and not(@class))]/ancestor::li/descendant::h3').allTextContents();
  79 |         return product_name;
  80 |     }
  81 | 
  82 |     let min_price_product = await min_price_function(min_price);
  83 |     console.log(min_price_product);
  84 | 
  85 | })
  86 | 
  87 | 
  88 | 
  89 | 
  90 | 
  91 | 
```