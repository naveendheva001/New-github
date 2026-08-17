# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: playwright.spec.js >> myntra
- Location: tests\playwright.spec.js:211:5

# Error details

```
ReferenceError: count is not defined
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
  - generic [ref=e45]:
    - main [ref=e46]:
      - list [ref=e49]:
        - listitem [ref=e50]:
          - link "Home" [ref=e51] [cursor=pointer]:
            - /url: /?src=bc
          - text: /
        - listitem [ref=e52]:
          - link "Clothing" [ref=e53] [cursor=pointer]:
            - /url: /clothing?src=bc
          - text: /
        - listitem [ref=e54]:
          - link "Tshirts" [ref=e55] [cursor=pointer]:
            - /url: /tshirts?src=bc
          - text: /
        - listitem [ref=e56]: Boy Tshirts
      - generic [ref=e58]:
        - heading "Boy Tshirts" [level=1] [ref=e59]
        - generic [ref=e60]: "- 73981 items"
      - generic [ref=e61]:
        - generic [ref=e64]:
          - generic [ref=e65]: FILTERS
          - generic [ref=e66]:
            - generic [ref=e67]: Brand
            - list [ref=e70]:
              - listitem [ref=e71]:
                - generic [ref=e72] [cursor=pointer]:
                  - text: Arvesa
                  - generic [ref=e73]: (4973)
              - listitem [ref=e75]:
                - generic [ref=e76] [cursor=pointer]:
                  - text: BAESD
                  - generic [ref=e77]: (3520)
              - listitem [ref=e79]:
                - generic [ref=e80] [cursor=pointer]:
                  - text: YK
                  - generic [ref=e81]: (1688)
              - listitem [ref=e83]:
                - generic [ref=e84] [cursor=pointer]:
                  - text: Pantaloons Junior
                  - generic [ref=e85]: (1571)
              - listitem [ref=e87]:
                - generic [ref=e88] [cursor=pointer]:
                  - text: Cute Pals
                  - generic [ref=e89]: (1376)
              - listitem [ref=e91]:
                - generic [ref=e92] [cursor=pointer]:
                  - text: NUSYL
                  - generic [ref=e93]: (1345)
              - listitem [ref=e95]:
                - generic [ref=e96] [cursor=pointer]:
                  - text: U.S. Polo Assn. Kids
                  - generic [ref=e97]: (1341)
              - listitem [ref=e99]:
                - generic [ref=e100] [cursor=pointer]:
                  - text: CODEZ
                  - generic [ref=e101]: (1217)
            - generic [ref=e103] [cursor=pointer]: + 669 more
          - generic [ref=e104]:
            - generic [ref=e105]: Price
            - generic [ref=e107]:
              - generic [ref=e108]:
                - button [ref=e111]
                - button [ref=e113]
              - generic [ref=e115]: ₹0 - ₹6,600+
          - generic [ref=e116]:
            - generic [ref=e117]: Color
            - list [ref=e120]:
              - listitem [ref=e121]:
                - generic [ref=e122] [cursor=pointer]:
                  - text: White
                  - generic [ref=e124]: (11658)
              - listitem [ref=e126]:
                - generic [ref=e127] [cursor=pointer]:
                  - text: Blue
                  - generic [ref=e129]: (9675)
              - listitem [ref=e131]:
                - generic [ref=e132] [cursor=pointer]:
                  - text: Black
                  - generic [ref=e134]: (7643)
              - listitem [ref=e136]:
                - generic [ref=e137] [cursor=pointer]:
                  - text: Yellow
                  - generic [ref=e139]: (6739)
              - listitem [ref=e141]:
                - generic [ref=e142] [cursor=pointer]:
                  - text: Green
                  - generic [ref=e144]: (6209)
              - listitem [ref=e146]:
                - generic [ref=e147] [cursor=pointer]:
                  - text: Red
                  - generic [ref=e149]: (5357)
              - listitem [ref=e151]:
                - generic [ref=e152] [cursor=pointer]:
                  - text: Navy Blue
                  - generic [ref=e154]: (3543)
            - generic [ref=e156] [cursor=pointer]: + 40 more
          - generic [ref=e158]:
            - generic [ref=e159]: Discount Range
            - list [ref=e160]:
              - listitem [ref=e161]:
                - generic [ref=e162] [cursor=pointer]: 10% and above
              - listitem [ref=e163]:
                - generic [ref=e164] [cursor=pointer]: 20% and above
              - listitem [ref=e165]:
                - generic [ref=e166] [cursor=pointer]: 30% and above
              - listitem [ref=e167]:
                - generic [ref=e168] [cursor=pointer]: 40% and above
              - listitem [ref=e169]:
                - generic [ref=e170] [cursor=pointer]: 50% and above
              - listitem [ref=e171]:
                - generic [ref=e172] [cursor=pointer]: 60% and above
              - listitem [ref=e173]:
                - generic [ref=e174] [cursor=pointer]: 70% and above
              - listitem [ref=e175]:
                - generic [ref=e176] [cursor=pointer]: 80% and above
        - generic [ref=e178]:
          - generic [ref=e181]:
            - generic [ref=e182]: "Sort by : Recommended"
            - list [ref=e188]:
              - listitem [ref=e189] [cursor=pointer]:
                - heading "Add-Ons" [level=4] [ref=e191]
              - listitem [ref=e193] [cursor=pointer]:
                - heading "Age" [level=4] [ref=e195]
              - listitem [ref=e197] [cursor=pointer]:
                - heading "Bundles" [level=4] [ref=e199]
              - listitem [ref=e201] [cursor=pointer]:
                - heading "Character" [level=4] [ref=e203]
              - listitem [ref=e205] [cursor=pointer]:
                - heading "Closure" [level=4] [ref=e207]
              - listitem [ref=e209] [cursor=pointer]:
                - heading "Country of Origin" [level=4] [ref=e211]
              - listitem [ref=e213] [cursor=pointer]:
                - heading "Fabric Types" [level=4] [ref=e215]
              - listitem [ref=e217] [cursor=pointer]:
                - generic [ref=e218]: + 26 more
          - generic [ref=e221]:
            - list [ref=e222]:
              - listitem [ref=e223]:
                - generic [ref=e224]: AD
                - link "Guugly Wuugly Boys Regular Round Neck Cotton Beast Arctic Printed T-shirt Guugly Wuugly Boys GO-DRY Printed T-shirt Rs. 634Rs. 799(21% OFF)" [ref=e225] [cursor=pointer]:
                  - /url: tshirts/guugly+wuugly/guugly-wuugly-boys-regular-round-neck-cotton-beast-arctic-printed-t-shirt/31251195/buy
                  - img "Guugly Wuugly Boys Regular Round Neck Cotton Beast Arctic Printed T-shirt" [ref=e231]
                  - generic [ref=e232]:
                    - heading "Guugly Wuugly" [level=3] [ref=e233]
                    - heading "Boys GO-DRY Printed T-shirt" [level=4] [ref=e234]
                    - generic [ref=e235]:
                      - generic [ref=e236]:
                        - generic [ref=e237]: Rs. 634
                        - generic [ref=e238]: Rs. 799
                      - text: (21% OFF)
              - listitem [ref=e239]:
                - generic [ref=e240]: AD
                - link "Guugly Wuugly Boys Icybear Super Soft Combed Compact Printed Cotton T-shirt Guugly Wuugly Boys Printed Cotton T-shirt Rs. 634Rs. 799(21% OFF)" [ref=e241] [cursor=pointer]:
                  - /url: tshirts/guugly+wuugly/guugly-wuugly-boys-icybear-super-soft-combed-compact-printed-cotton-t-shirt/35764584/buy
                  - img "Guugly Wuugly Boys Icybear Super Soft Combed Compact Printed Cotton T-shirt" [ref=e247]
                  - generic [ref=e248]:
                    - heading "Guugly Wuugly" [level=3] [ref=e249]
                    - heading "Boys Printed Cotton T-shirt" [level=4] [ref=e250]
                    - generic [ref=e251]:
                      - generic [ref=e252]:
                        - generic [ref=e253]: Rs. 634
                        - generic [ref=e254]: Rs. 799
                      - text: (21% OFF)
              - listitem [ref=e255]:
                - generic [ref=e256]:
                  - generic [ref=e257]: "3.4"
                  - generic [ref=e259]:
                    - generic [ref=e260]: "|"
                    - text: "221"
                - link "VP TEXX Boys 4 Printed T-shirt VP TEXX Boys Printed T-shirt Rs. 461Rs. 1699(73% OFF)" [ref=e261] [cursor=pointer]:
                  - /url: tshirts/vp+texx/vp-texx-boys-4-printed-t-shirt/44073995/buy
                  - img "VP TEXX Boys 4 Printed T-shirt" [ref=e267]
                  - generic [ref=e268]:
                    - heading "VP TEXX" [level=3] [ref=e269]
                    - heading "Boys Printed T-shirt" [level=4] [ref=e270]
                    - generic [ref=e271]:
                      - generic [ref=e272]:
                        - generic [ref=e273]: Rs. 461
                        - generic [ref=e274]: Rs. 1699
                      - text: (73% OFF)
              - listitem [ref=e275]:
                - generic [ref=e276]:
                  - generic [ref=e277]: "4.7"
                  - generic [ref=e279]:
                    - generic [ref=e280]: "|"
                    - text: "42"
                - link "Decathlon Kipsta - Kids Blue Essential Moisture Managing Football Jersey Decathlon Kids Knitted T-shirts Rs. 349Rs. 549(36% OFF)" [ref=e281] [cursor=pointer]:
                  - /url: tshirts/decathlon/decathlon-kipsta---kids-blue-essential-moisture-managing-football-jersey/39714997/buy
                  - img "Decathlon Kipsta - Kids Blue Essential Moisture Managing Football Jersey" [ref=e287]
                  - generic [ref=e288]:
                    - heading "Decathlon" [level=3] [ref=e289]
                    - heading "Kids Knitted T-shirts" [level=4] [ref=e290]
                    - generic [ref=e291]:
                      - generic [ref=e292]:
                        - generic [ref=e293]: Rs. 349
                        - generic [ref=e294]: Rs. 549
                      - text: (36% OFF)
              - listitem [ref=e295]:
                - generic [ref=e296]:
                  - generic [ref=e297]: "3"
                  - generic [ref=e299]:
                    - generic [ref=e300]: "|"
                    - text: "5"
                - generic [ref=e301]: AD
                - link "Guugly Wuugly Boys Round neck Graphic printed Applique Cotton Tshirt Guugly Wuugly Boys Printed Applique T-shirt Rs. 634Rs. 799(21% OFF)" [ref=e302] [cursor=pointer]:
                  - /url: tshirts/guugly+wuugly/guugly-wuugly-boys-round-neck-graphic-printed-applique-cotton-tshirt/33017564/buy
                  - img "Guugly Wuugly Boys Round neck Graphic printed Applique Cotton Tshirt" [ref=e308]
                  - generic [ref=e309]:
                    - heading "Guugly Wuugly" [level=3] [ref=e310]
                    - heading "Boys Printed Applique T-shirt" [level=4] [ref=e311]
                    - generic [ref=e312]:
                      - generic [ref=e313]:
                        - generic [ref=e314]: Rs. 634
                        - generic [ref=e315]: Rs. 799
                      - text: (21% OFF)
              - listitem [ref=e316]:
                - generic [ref=e317]:
                  - generic [ref=e318]: "4.1"
                  - generic [ref=e320]:
                    - generic [ref=e321]: "|"
                    - text: 13.7k
                - 'link "HELLCAT Boys Pack Of 3 Printed Cotton T-shirt HELLCAT Boys Pack Of 3 Printed Cotton T-shirt HELLCAT Boys Pack Of 3 Printed Cotton T-shirt HELLCAT Boys Pack Of 3 Printed Cotton T-shirt HELLCAT Boys Pack Of 3 Printed Cotton T-shirt HELLCAT Boys Pack Of 3 Printed Cotton T-shirt HELLCAT Boys Pack Of 3 Printed Cotton T-shirt HELLCAT Boys Pack Of 3 Printed Cotton T-shirt HELLCAT Boys Pack Of 3 Printed Cotton T-shirt HELLCAT Boys Pack Of 3 Printed Cotton T-shirt HELLCAT Boys Pack Of 3 Printed Cotton T-shirt HELLCAT Sizes: 7-8Y Rs. 391Rs. 3897(90% OFF)" [ref=e322] [cursor=pointer]':
                  - /url: tshirts/hellcat/hellcat-boys-pack-of-3-printed-cotton-t-shirt/22204272/buy
                  - generic [ref=e325]:
                    - generic [ref=e327]:
                      - img "HELLCAT Boys Pack Of 3 Printed Cotton T-shirt" [ref=e332]
                      - img "HELLCAT Boys Pack Of 3 Printed Cotton T-shirt" [ref=e337]
                      - img "HELLCAT Boys Pack Of 3 Printed Cotton T-shirt" [ref=e342]
                      - img "HELLCAT Boys Pack Of 3 Printed Cotton T-shirt" [ref=e347]
                      - img "HELLCAT Boys Pack Of 3 Printed Cotton T-shirt" [ref=e352]
                      - img "HELLCAT Boys Pack Of 3 Printed Cotton T-shirt" [ref=e357]
                      - img "HELLCAT Boys Pack Of 3 Printed Cotton T-shirt" [ref=e362]
                      - img "HELLCAT Boys Pack Of 3 Printed Cotton T-shirt" [ref=e367]
                      - img "HELLCAT Boys Pack Of 3 Printed Cotton T-shirt" [ref=e372]
                      - img "HELLCAT Boys Pack Of 3 Printed Cotton T-shirt" [ref=e377]
                      - img "HELLCAT Boys Pack Of 3 Printed Cotton T-shirt" [ref=e382]
                    - list [ref=e383]:
                      - listitem [ref=e384]
                      - listitem [ref=e385]
                      - listitem [ref=e386]
                      - listitem [ref=e387]
                      - listitem [ref=e388]
                      - listitem [ref=e389]
                      - listitem [ref=e390]
                      - listitem [ref=e391]
                      - listitem [ref=e392]
                  - generic [ref=e393]:
                    - heading "HELLCAT" [level=3] [ref=e394]
                    - 'heading "Sizes: 7-8Y" [level=4] [ref=e395]'
                    - generic [ref=e396]:
                      - generic [ref=e397]:
                        - generic [ref=e398]: Rs. 391
                        - generic [ref=e399]: Rs. 3897
                      - text: (90% OFF)
                - generic [ref=e402]: wishlist
              - listitem [ref=e405]:
                - link "CODEZ Boys Typography Printed T-shirt CODEZ Boys Typography Printed T-shirt Rs. 572Rs. 1899(70% OFF)" [ref=e406] [cursor=pointer]:
                  - /url: tshirts/codez/codez-boys-typography-printed-t-shirt/43119937/buy
                  - img "CODEZ Boys Typography Printed T-shirt" [ref=e412]
                  - generic [ref=e413]:
                    - heading "CODEZ" [level=3] [ref=e414]
                    - heading "Boys Typography Printed T-shirt" [level=4] [ref=e415]
                    - generic [ref=e416]:
                      - generic [ref=e417]:
                        - generic [ref=e418]: Rs. 572
                        - generic [ref=e419]: Rs. 1899
                      - text: (70% OFF)
              - listitem [ref=e420]:
                - generic [ref=e421]: AD
                - link "Guugly Wuugly Infant Boys Graphic Printed Round Neck Cotton T-shirt Guugly Wuugly Boys Cotton Tshirts Rs. 701Rs. 799(12% OFF)" [ref=e422] [cursor=pointer]:
                  - /url: tshirts/guugly+wuugly/guugly-wuugly-infant-boys-graphic-printed-round-neck-cotton-t-shirt/42314437/buy
                  - img "Guugly Wuugly Infant Boys Graphic Printed Round Neck Cotton T-shirt" [ref=e428]
                  - generic [ref=e429]:
                    - heading "Guugly Wuugly" [level=3] [ref=e430]
                    - heading "Boys Cotton Tshirts" [level=4] [ref=e431]
                    - generic [ref=e432]:
                      - generic [ref=e433]:
                        - generic [ref=e434]: Rs. 701
                        - generic [ref=e435]: Rs. 799
                      - text: (12% OFF)
              - listitem [ref=e436]:
                - link "AYVINA Kids Printed T-shirt AYVINA Kids Printed T-shirt Rs. 459Rs. 1090(58% OFF)" [ref=e437] [cursor=pointer]:
                  - /url: tshirts/ayvina/ayvina-kids-printed-t-shirt/44713801/buy
                  - img "AYVINA Kids Printed T-shirt" [ref=e443]
                  - generic [ref=e444]:
                    - heading "AYVINA" [level=3] [ref=e445]
                    - heading "Kids Printed T-shirt" [level=4] [ref=e446]
                    - generic [ref=e447]:
                      - generic [ref=e448]:
                        - generic [ref=e449]: Rs. 459
                        - generic [ref=e450]: Rs. 1090
                      - text: (58% OFF)
              - listitem [ref=e451]:
                - generic [ref=e452]:
                  - generic [ref=e453]: "4.5"
                  - generic [ref=e455]:
                    - generic [ref=e456]: "|"
                    - text: 4.3k
                - link "H&M Printed Cotton T-shirt H&M Printed Cotton T-shirt Rs. 399" [ref=e457] [cursor=pointer]:
                  - /url: tshirts/h%26m/hm-printed-cotton-t-shirt/41419111/buy
                  - img "H&M Printed Cotton T-shirt" [ref=e463]
                  - generic [ref=e464]:
                    - heading "H&M" [level=3] [ref=e465]
                    - heading "Printed Cotton T-shirt" [level=4] [ref=e466]
                    - generic [ref=e467]: Rs. 399
              - listitem [ref=e469]:
                - generic [ref=e470]: AD
                - link "Guugly Wuugly Girls Solid Regular Round neck Cotton T-shirt Guugly Wuugly Boys Solid Cotton T-shirt Rs. 634Rs. 799(21% OFF) Only Few Left!" [ref=e471] [cursor=pointer]:
                  - /url: tshirts/guugly+wuugly/guugly-wuugly-girls-solid-regular-round-neck-cotton-t-shirt-/32761495/buy
                  - img "Guugly Wuugly Girls Solid Regular Round neck Cotton T-shirt" [ref=e477]
                  - generic [ref=e478]:
                    - heading "Guugly Wuugly" [level=3] [ref=e479]
                    - heading "Boys Solid Cotton T-shirt" [level=4] [ref=e480]
                    - generic [ref=e481]:
                      - generic [ref=e482]:
                        - generic [ref=e483]: Rs. 634
                        - generic [ref=e484]: Rs. 799
                      - text: (21% OFF)
                    - generic [ref=e485]: Only Few Left!
              - listitem [ref=e486]:
                - generic [ref=e487]:
                  - generic [ref=e488]: "4.5"
                  - generic [ref=e490]:
                    - generic [ref=e491]: "|"
                    - text: "516"
                - link "U.S. Polo Assn. Kids Boys Pure Cotton T-shirt Rs. 769Rs. 1399(45% OFF)" [ref=e492] [cursor=pointer]:
                  - /url: tshirts/u.s.+polo+assn.+kids/us-polo-assn-kids-boys-striped-polo-collar-pure-cotton-t-shirt/30462782/buy
                  - generic [ref=e497]:
                    - heading "U.S. Polo Assn. Kids" [level=3] [ref=e498]
                    - heading "Boys Pure Cotton T-shirt" [level=4] [ref=e499]
                    - generic [ref=e500]:
                      - generic [ref=e501]:
                        - generic [ref=e502]: Rs. 769
                        - generic [ref=e503]: Rs. 1399
                      - text: (45% OFF)
              - listitem [ref=e504]:
                - link "YK Boys Printed T-shirt Rs. 455Rs. 1899(76% OFF)" [ref=e505] [cursor=pointer]:
                  - /url: tshirts/yk/yk-boys-5-printed-t-shirt/44612665/buy
                  - generic [ref=e510]:
                    - heading "YK" [level=3] [ref=e511]
                    - heading "Boys Printed T-shirt" [level=4] [ref=e512]
                    - generic [ref=e513]:
                      - generic [ref=e514]:
                        - generic [ref=e515]: Rs. 455
                        - generic [ref=e516]: Rs. 1899
                      - text: (76% OFF)
              - listitem [ref=e517]:
                - generic [ref=e518]: AD
                - link "Guugly Wuugly Boys Printed T-shirt Rs. 634Rs. 799(21% OFF)" [ref=e519] [cursor=pointer]:
                  - /url: tshirts/guugly+wuugly/guugly-wuugly-boys-regular-round-neck-cotton-milano-graphic-printed-t-shirt/39745252/buy
                  - generic [ref=e524]:
                    - heading "Guugly Wuugly" [level=3] [ref=e525]
                    - heading "Boys Printed T-shirt" [level=4] [ref=e526]
                    - generic [ref=e527]:
                      - generic [ref=e528]:
                        - generic [ref=e529]: Rs. 634
                        - generic [ref=e530]: Rs. 799
                      - text: (21% OFF)
              - listitem [ref=e531]:
                - generic [ref=e532]:
                  - generic [ref=e533]: "4.8"
                  - generic [ref=e535]:
                    - generic [ref=e536]: "|"
                    - text: "104"
                - link "Puma ESSENTIAL Ultrabreathe Tee Rs. 674Rs. 1499(55% OFF)" [ref=e537] [cursor=pointer]:
                  - /url: tshirts/puma/puma-essential-ultrabreathe-boys-slim-fit-training-tee/40370315/buy
                  - generic [ref=e542]:
                    - heading "Puma" [level=3] [ref=e543]
                    - heading "ESSENTIAL Ultrabreathe Tee" [level=4] [ref=e544]
                    - generic [ref=e545]:
                      - generic [ref=e546]:
                        - generic [ref=e547]: Rs. 674
                        - generic [ref=e548]: Rs. 1499
                      - text: (55% OFF)
              - listitem [ref=e549]:
                - link "BAESD Boys Pack Of 2 Cotton T-shirts Rs. 740Rs. 3998(81% OFF)" [ref=e550] [cursor=pointer]:
                  - /url: tshirts/baesd/baesd-boys-pack-of-2-printed-drop-shoulder-sleeves-oversized-pure-cotton-t-shirts/37531651/buy
                  - generic [ref=e555]:
                    - heading "BAESD" [level=3] [ref=e556]
                    - heading "Boys Pack Of 2 Cotton T-shirts" [level=4] [ref=e557]
                    - generic [ref=e558]:
                      - generic [ref=e559]:
                        - generic [ref=e560]: Rs. 740
                        - generic [ref=e561]: Rs. 3998
                      - text: (81% OFF)
              - listitem [ref=e562]:
                - generic [ref=e563]:
                  - generic [ref=e564]: "4.6"
                  - generic [ref=e566]:
                    - generic [ref=e567]: "|"
                    - text: "163"
                - generic [ref=e568]: AD
                - link "NEW H&M Boys Brand Logo Polo Collar T-shirt Rs. 799" [ref=e569] [cursor=pointer]:
                  - /url: tshirts/h%26m/hm-boys-brand-logo-polo-collar-t-shirt/43354277/buy
                  - generic [ref=e570]: NEW
                  - generic [ref=e575]:
                    - heading "H&M" [level=3] [ref=e576]
                    - heading "Boys Brand Logo Polo Collar T-shirt" [level=4] [ref=e577]
                    - generic [ref=e578]: Rs. 799
              - listitem [ref=e580]:
                - generic [ref=e581]:
                  - generic [ref=e582]: "4.4"
                  - generic [ref=e584]:
                    - generic [ref=e585]: "|"
                    - text: "75"
                - link "H&M Print-Motif T-shirt Rs. 799" [ref=e586] [cursor=pointer]:
                  - /url: tshirts/h%26m/hm-print-motif-t-shirt/41515729/buy
                  - generic [ref=e591]:
                    - heading "H&M" [level=3] [ref=e592]
                    - heading "Print-Motif T-shirt" [level=4] [ref=e593]
                    - generic [ref=e594]: Rs. 799
              - listitem [ref=e596]:
                - link "LACKii DOLL Lackii Doll Cotton T-Shirt Rs. 305Rs. 699(56% OFF)" [ref=e597] [cursor=pointer]:
                  - /url: tshirts/lackii+doll/lackii-doll-kids-printed-t-shirt/44998250/buy
                  - generic [ref=e602]:
                    - heading "LACKii DOLL" [level=3] [ref=e603]
                    - heading "Lackii Doll Cotton T-Shirt" [level=4] [ref=e604]
                    - generic [ref=e605]:
                      - generic [ref=e606]:
                        - generic [ref=e607]: Rs. 305
                        - generic [ref=e608]: Rs. 699
                      - text: (56% OFF)
              - listitem [ref=e609]:
                - generic [ref=e610]:
                  - generic [ref=e611]: "4.4"
                  - generic [ref=e613]:
                    - generic [ref=e614]: "|"
                    - text: 3.6k
                - generic [ref=e615]: AD
                - link "H&M Cotton T-shirt Rs. 399" [ref=e616] [cursor=pointer]:
                  - /url: tshirts/h%26m/hm-cotton-t-shirt/41712718/buy
                  - generic [ref=e621]:
                    - heading "H&M" [level=3] [ref=e622]
                    - heading "Cotton T-shirt" [level=4] [ref=e623]
                    - generic [ref=e624]: Rs. 399
              - listitem [ref=e626]:
                - generic [ref=e627]:
                  - generic [ref=e628]: "4.5"
                  - generic [ref=e630]:
                    - generic [ref=e631]: "|"
                    - text: "15"
                - link "YK Boys Pack of 5 Printed Tshirts Rs. 698Rs. 1899(63% OFF)" [ref=e632] [cursor=pointer]:
                  - /url: tshirts/yk/yk-boys-5-printed-t-shirt/41815344/buy
                  - generic [ref=e637]:
                    - heading "YK" [level=3] [ref=e638]
                    - heading "Boys Pack of 5 Printed Tshirts" [level=4] [ref=e639]
                    - generic [ref=e640]:
                      - generic [ref=e641]:
                        - generic [ref=e642]: Rs. 698
                        - generic [ref=e643]: Rs. 1899
                      - text: (63% OFF)
              - listitem [ref=e644]:
                - generic [ref=e645]:
                  - generic [ref=e646]: "4"
                  - generic [ref=e648]:
                    - generic [ref=e649]: "|"
                    - text: "81"
                - link "BAESD Boys Pack Of 3 Printed T-shirt Rs. 670Rs. 2997(78% OFF) Only Few Left!" [ref=e650] [cursor=pointer]:
                  - /url: tshirts/baesd/baesd-boys-pack-of-3-typography-printed-pure-cotton-t-shirt/25132628/buy
                  - generic [ref=e655]:
                    - heading "BAESD" [level=3] [ref=e656]
                    - heading "Boys Pack Of 3 Printed T-shirt" [level=4] [ref=e657]
                    - generic [ref=e658]:
                      - generic [ref=e659]:
                        - generic [ref=e660]: Rs. 670
                        - generic [ref=e661]: Rs. 2997
                      - text: (78% OFF)
                    - generic [ref=e662]: Only Few Left!
              - listitem [ref=e663]:
                - generic [ref=e664]:
                  - generic [ref=e665]: "4.5"
                  - generic [ref=e667]:
                    - generic [ref=e668]: "|"
                    - text: "11"
                - generic [ref=e669]: AD
                - link "Campana Boys Solid Cotton T-shirt Rs. 399Rs. 499(20% OFF) Only Few Left!" [ref=e670] [cursor=pointer]:
                  - /url: tshirts/campana/campana-boys-solid-round-neck-cotton-t-shirt/34170604/buy
                  - generic [ref=e675]:
                    - heading "Campana" [level=3] [ref=e676]
                    - heading "Boys Solid Cotton T-shirt" [level=4] [ref=e677]
                    - generic [ref=e678]:
                      - generic [ref=e679]:
                        - generic [ref=e680]: Rs. 399
                        - generic [ref=e681]: Rs. 499
                      - text: (20% OFF)
                    - generic [ref=e682]: Only Few Left!
              - listitem [ref=e683]:
                - generic [ref=e684]:
                  - generic [ref=e685]: "4.2"
                  - generic [ref=e687]:
                    - generic [ref=e688]: "|"
                    - text: "329"
                - link "Grand Max Pack of 3 Cotton T-shirts Rs. 478Rs. 2999(84% OFF)" [ref=e689] [cursor=pointer]:
                  - /url: tshirts/grand+max/grand-max-boys-pack-of-3-graphic-printed-round-neck-pure-cotton-t-shirts/36565224/buy
                  - generic [ref=e694]:
                    - heading "Grand Max" [level=3] [ref=e695]
                    - heading "Pack of 3 Cotton T-shirts" [level=4] [ref=e696]
                    - generic [ref=e697]:
                      - generic [ref=e698]:
                        - generic [ref=e699]: Rs. 478
                        - generic [ref=e700]: Rs. 2999
                      - text: (84% OFF)
              - listitem [ref=e701]:
                - link "max Boys Printed T-shirt Rs. 169" [ref=e702] [cursor=pointer]:
                  - /url: tshirts/max/max-boys-printed-t-shirt/44652231/buy
                  - generic [ref=e707]:
                    - heading "max" [level=3] [ref=e708]
                    - heading "Boys Printed T-shirt" [level=4] [ref=e709]
                    - generic [ref=e710]: Rs. 169
              - listitem [ref=e712]:
                - generic [ref=e713]:
                  - generic [ref=e714]: "4.5"
                  - generic [ref=e716]:
                    - generic [ref=e717]: "|"
                    - text: 4.3k
                - generic [ref=e718]: AD
                - link "H&M Printed cotton T-shirt Rs. 399" [ref=e719] [cursor=pointer]:
                  - /url: tshirts/h%26m/hm-printed-cotton-t-shirt/42039179/buy
                  - generic [ref=e724]:
                    - heading "H&M" [level=3] [ref=e725]
                    - heading "Printed cotton T-shirt" [level=4] [ref=e726]
                    - generic [ref=e727]: Rs. 399
              - listitem [ref=e729]:
                - generic [ref=e730]:
                  - generic [ref=e731]: "4.3"
                  - generic [ref=e733]:
                    - generic [ref=e734]: "|"
                    - text: "11"
                - link "DAMN GUD DG Unisex Black Tshirts Rs. 476Rs. 1000(52% OFF)" [ref=e735] [cursor=pointer]:
                  - /url: tshirts/damn+gud+dg/damn-gud-dg-unisex-black-tshirts/35458641/buy
                  - generic [ref=e740]:
                    - heading "DAMN GUD DG" [level=3] [ref=e741]
                    - heading "Unisex Black Tshirts" [level=4] [ref=e742]
                    - generic [ref=e743]:
                      - generic [ref=e744]:
                        - generic [ref=e745]: Rs. 476
                        - generic [ref=e746]: Rs. 1000
                      - text: (52% OFF)
              - listitem [ref=e747]:
                - generic [ref=e748]:
                  - generic [ref=e749]: "3.7"
                  - generic [ref=e751]:
                    - generic [ref=e752]: "|"
                    - text: "42"
                - link "Wear Your Mind Boys Printed Regular T-shirt Rs. 351Rs. 899(61% OFF)" [ref=e753] [cursor=pointer]:
                  - /url: tshirts/wear+your+mind/wear-your-mind-boys-printed-round-neck-short-sleeves-regular-fit-t-shirt/28410138/buy
                  - generic [ref=e758]:
                    - heading "Wear Your Mind" [level=3] [ref=e759]
                    - heading "Boys Printed Regular T-shirt" [level=4] [ref=e760]
                    - generic [ref=e761]:
                      - generic [ref=e762]:
                        - generic [ref=e763]: Rs. 351
                        - generic [ref=e764]: Rs. 899
                      - text: (61% OFF)
              - listitem [ref=e765]:
                - generic [ref=e766]: AD
                - link "TeeSlix kid's Graphic Tshirt Rs. 447Rs. 899(50% OFF)" [ref=e767] [cursor=pointer]:
                  - /url: tshirts/teeslix/teeslix-boys-printed-drop-shoulder-sleeves-t-shirt/45019639/buy
                  - generic [ref=e772]:
                    - heading "TeeSlix" [level=3] [ref=e773]
                    - heading "kid's Graphic Tshirt" [level=4] [ref=e774]
                    - generic [ref=e775]:
                      - generic [ref=e776]:
                        - generic [ref=e777]: Rs. 447
                        - generic [ref=e778]: Rs. 899
                      - text: (50% OFF)
              - listitem [ref=e779]:
                - generic [ref=e780]:
                  - generic [ref=e781]: "4.4"
                  - generic [ref=e783]:
                    - generic [ref=e784]: "|"
                    - text: "65"
                - link "KEESOR Boys Pack of 3 Cotton T-shirt Rs. 436Rs. 899(52% OFF)" [ref=e785] [cursor=pointer]:
                  - /url: tshirts/keesor/keesor-boys-pack-of-3-cotton-t-shirt/41244688/buy
                  - generic [ref=e790]:
                    - heading "KEESOR" [level=3] [ref=e791]
                    - heading "Boys Pack of 3 Cotton T-shirt" [level=4] [ref=e792]
                    - generic [ref=e793]:
                      - generic [ref=e794]:
                        - generic [ref=e795]: Rs. 436
                        - generic [ref=e796]: Rs. 899
                      - text: (52% OFF)
              - listitem [ref=e797]:
                - link "BAESD Boys Printed Cotton T-shirt Rs. 201Rs. 999(80% OFF) Only Few Left!" [ref=e798] [cursor=pointer]:
                  - /url: tshirts/baesd/baesd-boys-typography-printed-t-shirt/43397889/buy
                  - generic [ref=e803]:
                    - heading "BAESD" [level=3] [ref=e804]
                    - heading "Boys Printed Cotton T-shirt" [level=4] [ref=e805]
                    - generic [ref=e806]:
                      - generic [ref=e807]:
                        - generic [ref=e808]: Rs. 201
                        - generic [ref=e809]: Rs. 999
                      - text: (80% OFF)
                    - generic [ref=e810]: Only Few Left!
              - listitem [ref=e811]:
                - generic [ref=e812]:
                  - generic [ref=e813]: "4.8"
                  - generic [ref=e815]:
                    - generic [ref=e816]: "|"
                    - text: "10"
                - generic [ref=e817]: AD
                - link "Arvesa Kids Typography Printed Applique T-shirt Rs. 362Rs. 699(48% OFF)" [ref=e818] [cursor=pointer]:
                  - /url: tshirts/arvesa/arvesa-first-rakhi-printed-kids-unisex-t-shirt/32821041/buy
                  - generic [ref=e823]:
                    - heading "Arvesa" [level=3] [ref=e824]
                    - heading "Kids Typography Printed Applique T-shirt" [level=4] [ref=e825]
                    - generic [ref=e826]:
                      - generic [ref=e827]:
                        - generic [ref=e828]: Rs. 362
                        - generic [ref=e829]: Rs. 699
                      - text: (48% OFF)
              - listitem [ref=e830]:
                - generic [ref=e831]:
                  - generic [ref=e832]: "4.4"
                  - generic [ref=e834]:
                    - generic [ref=e835]: "|"
                    - text: "48"
                - link "Marks & Spencer Boys Pure Cotton Tshirt Rs. 727Rs. 799(9% OFF) Only Few Left!" [ref=e836] [cursor=pointer]:
                  - /url: tshirts/marks+%26+spencer/marks--spencer-pure-cotton-plain-t-shirt/40651844/buy
                  - generic [ref=e841]:
                    - heading "Marks & Spencer" [level=3] [ref=e842]
                    - heading "Boys Pure Cotton Tshirt" [level=4] [ref=e843]
                    - generic [ref=e844]:
                      - generic [ref=e845]:
                        - generic [ref=e846]: Rs. 727
                        - generic [ref=e847]: Rs. 799
                      - text: (9% OFF)
                    - generic [ref=e848]: Only Few Left!
              - listitem [ref=e849]:
                - generic [ref=e850]:
                  - generic [ref=e851]: "4.5"
                  - generic [ref=e853]:
                    - generic [ref=e854]: "|"
                    - text: "6"
                - link "JACKBOY Boys 2 Pcs Printed Tshirts Rs. 382Rs. 899(58% OFF)" [ref=e855] [cursor=pointer]:
                  - /url: tshirts/jackboy/jackboy-boys-pack-of-2-printed-polyester-polo-collar-tshirts/38962890/buy
                  - generic [ref=e860]:
                    - heading "JACKBOY" [level=3] [ref=e861]
                    - heading "Boys 2 Pcs Printed Tshirts" [level=4] [ref=e862]
                    - generic [ref=e863]:
                      - generic [ref=e864]:
                        - generic [ref=e865]: Rs. 382
                        - generic [ref=e866]: Rs. 899
                      - text: (58% OFF)
              - listitem [ref=e867]:
                - generic [ref=e868]:
                  - generic [ref=e869]: "4.9"
                  - generic [ref=e871]:
                    - generic [ref=e872]: "|"
                    - text: "9"
                - generic [ref=e873]: AD
                - link "NEXT Boys Colourblocked T-shirt Rs. 539Rs. 899(40% OFF)" [ref=e874] [cursor=pointer]:
                  - /url: tshirts/next/next-boys-colourblocked-drop-shoulder-sleeves-pure-cotton-t-shirt/39069077/buy
                  - generic [ref=e879]:
                    - heading "NEXT" [level=3] [ref=e880]
                    - heading "Boys Colourblocked T-shirt" [level=4] [ref=e881]
                    - generic [ref=e882]:
                      - generic [ref=e883]:
                        - generic [ref=e884]: Rs. 539
                        - generic [ref=e885]: Rs. 899
                      - text: (40% OFF)
              - listitem [ref=e886]:
                - generic [ref=e887]:
                  - generic [ref=e888]: "4"
                  - generic [ref=e890]:
                    - generic [ref=e891]: "|"
                    - text: 1.6k
                - link "HELLCAT Boys Pack Of 5 Printed T-shirt Rs. 685Rs. 6495(89% OFF)" [ref=e892] [cursor=pointer]:
                  - /url: tshirts/hellcat/hellcat-boys-pack-of-5-typography-printed-cotton-t-shirt/22204502/buy
                  - generic [ref=e897]:
                    - heading "HELLCAT" [level=3] [ref=e898]
                    - heading "Boys Pack Of 5 Printed T-shirt" [level=4] [ref=e899]
                    - generic [ref=e900]:
                      - generic [ref=e901]:
                        - generic [ref=e902]: Rs. 685
                        - generic [ref=e903]: Rs. 6495
                      - text: (89% OFF)
              - listitem [ref=e904]:
                - link "Triptee Boys Printed T-shirt Rs. 287Rs. 999(71% OFF)" [ref=e905] [cursor=pointer]:
                  - /url: tshirts/triptee/triptee-boys-donald-duck-printed-round-neck-long-sleeves-t-shirt/44092192/buy
                  - generic [ref=e910]:
                    - heading "Triptee" [level=3] [ref=e911]
                    - heading "Boys Printed T-shirt" [level=4] [ref=e912]
                    - generic [ref=e913]:
                      - generic [ref=e914]:
                        - generic [ref=e915]: Rs. 287
                        - generic [ref=e916]: Rs. 999
                      - text: (71% OFF)
              - listitem [ref=e917]:
                - generic [ref=e918]:
                  - generic [ref=e919]: "4.5"
                  - generic [ref=e921]:
                    - generic [ref=e922]: "|"
                    - text: "8"
                - generic [ref=e923]: AD
                - link "H&M Cotton T-shirt Rs. 399" [ref=e924] [cursor=pointer]:
                  - /url: tshirts/h%26m/hm-cotton-t-shirt/41712358/buy
                  - generic [ref=e929]:
                    - heading "H&M" [level=3] [ref=e930]
                    - heading "Cotton T-shirt" [level=4] [ref=e931]
                    - generic [ref=e932]: Rs. 399
              - listitem [ref=e934]:
                - generic [ref=e935]:
                  - generic [ref=e936]: "4.4"
                  - generic [ref=e938]:
                    - generic [ref=e939]: "|"
                    - text: "95"
                - link "KEESOR Boys Pack of 3 Cotton T-shirt Rs. 445Rs. 899(51% OFF)" [ref=e940] [cursor=pointer]:
                  - /url: tshirts/keesor/keesor-boys-pack-of-3-cotton-t-shirt/41333786/buy
                  - generic [ref=e945]:
                    - heading "KEESOR" [level=3] [ref=e946]
                    - heading "Boys Pack of 3 Cotton T-shirt" [level=4] [ref=e947]
                    - generic [ref=e948]:
                      - generic [ref=e949]:
                        - generic [ref=e950]: Rs. 445
                        - generic [ref=e951]: Rs. 899
                      - text: (51% OFF)
              - listitem [ref=e952]:
                - generic [ref=e953]:
                  - generic [ref=e954]: "4.5"
                  - generic [ref=e956]:
                    - generic [ref=e957]: "|"
                    - text: "407"
                - link "HRX by Hrithik Roshan Boys Printed T-shirt Rs. 341Rs. 999(66% OFF) Only Few Left!" [ref=e958] [cursor=pointer]:
                  - /url: tshirts/hrx+by+hrithik+roshan/hrx-by-hrithik-roshan-boys-u-17-printed-t-shirt/37741560/buy
                  - generic [ref=e963]:
                    - heading "HRX by Hrithik Roshan" [level=3] [ref=e964]
                    - heading "Boys Printed T-shirt" [level=4] [ref=e965]
                    - generic [ref=e966]:
                      - generic [ref=e967]:
                        - generic [ref=e968]: Rs. 341
                        - generic [ref=e969]: Rs. 999
                      - text: (66% OFF)
                    - generic [ref=e970]: Only Few Left!
              - listitem [ref=e971]:
                - generic [ref=e972]:
                  - generic [ref=e973]: "4.5"
                  - generic [ref=e975]:
                    - generic [ref=e976]: "|"
                    - text: "115"
                - generic [ref=e977]: AD
                - link "Purple United Kids Boys Beige Ombre Tshirt Rs. 799Rs. 1699(53% OFF)" [ref=e978] [cursor=pointer]:
                  - /url: tshirts/purple+united+kids/purple-united-kids-boys-beige-ombre-cotton-regular-fit-half-sleeve-tshirt/41879645/buy
                  - generic [ref=e983]:
                    - heading "Purple United Kids" [level=3] [ref=e984]
                    - heading "Boys Beige Ombre Tshirt" [level=4] [ref=e985]
                    - generic [ref=e986]:
                      - generic [ref=e987]:
                        - generic [ref=e988]: Rs. 799
                        - generic [ref=e989]: Rs. 1699
                      - text: (53% OFF)
              - listitem [ref=e990]:
                - generic [ref=e991]:
                  - generic [ref=e992]: "4.4"
                  - generic [ref=e994]:
                    - generic [ref=e995]: "|"
                    - text: "24"
                - link "BAESD Boys Solid Polo T-shirt Rs. 305Rs. 1199(75% OFF)" [ref=e996] [cursor=pointer]:
                  - /url: tshirts/baesd/baesd-boys-solid-polo-collar-t-shirt/30186594/buy
                  - generic [ref=e1001]:
                    - heading "BAESD" [level=3] [ref=e1002]
                    - heading "Boys Solid Polo T-shirt" [level=4] [ref=e1003]
                    - generic [ref=e1004]:
                      - generic [ref=e1005]:
                        - generic [ref=e1006]: Rs. 305
                        - generic [ref=e1007]: Rs. 1199
                      - text: (75% OFF)
              - listitem [ref=e1008]:
                - link "NEW KiddoPanti Boys Printed T-shirt Rs. 457Rs. 599(24% OFF) Only Few Left!" [ref=e1009] [cursor=pointer]:
                  - /url: tshirts/kiddopanti/kiddopanti-boys-printed-t-shirt/44346252/buy
                  - generic [ref=e1010]: NEW
                  - generic [ref=e1015]:
                    - heading "KiddoPanti" [level=3] [ref=e1016]
                    - heading "Boys Printed T-shirt" [level=4] [ref=e1017]
                    - generic [ref=e1018]:
                      - generic [ref=e1019]:
                        - generic [ref=e1020]: Rs. 457
                        - generic [ref=e1021]: Rs. 599
                      - text: (24% OFF)
                    - generic [ref=e1022]: Only Few Left!
              - listitem [ref=e1023]:
                - generic [ref=e1024]: AD
                - link "Kids Ville Spider-Man Tshirts Rs. 639Rs. 799(20% OFF)" [ref=e1025] [cursor=pointer]:
                  - /url: tshirts/kids+ville/kids-ville-boys-spider-man-printed-regular-fit-tshirt/44350619/buy
                  - generic [ref=e1030]:
                    - heading "Kids Ville" [level=3] [ref=e1031]
                    - heading "Spider-Man Tshirts" [level=4] [ref=e1032]
                    - generic [ref=e1033]:
                      - generic [ref=e1034]:
                        - generic [ref=e1035]: Rs. 639
                        - generic [ref=e1036]: Rs. 799
                      - text: (20% OFF)
              - listitem [ref=e1037]:
                - generic [ref=e1038]:
                  - generic [ref=e1039]: "4.5"
                  - generic [ref=e1041]:
                    - generic [ref=e1042]: "|"
                    - text: "407"
                - link "HRX by Hrithik Roshan Boys Printed T-shirt Rs. 341Rs. 999(66% OFF)" [ref=e1043] [cursor=pointer]:
                  - /url: tshirts/hrx+by+hrithik+roshan/hrx-by-hrithik-roshan-boys-u-17-typography-printed-t-shirt/37741553/buy
                  - generic [ref=e1048]:
                    - heading "HRX by Hrithik Roshan" [level=3] [ref=e1049]
                    - heading "Boys Printed T-shirt" [level=4] [ref=e1050]
                    - generic [ref=e1051]:
                      - generic [ref=e1052]:
                        - generic [ref=e1053]: Rs. 341
                        - generic [ref=e1054]: Rs. 999
                      - text: (66% OFF)
              - listitem [ref=e1055]:
                - link "V-Mart Boys Batman Printed T-shirt Rs. 226Rs. 229(1% OFF)" [ref=e1056] [cursor=pointer]:
                  - /url: tshirts/v-mart/v-mart-boys-batman-printed-t-shirt/44165005/buy
                  - generic [ref=e1061]:
                    - heading "V-Mart" [level=3] [ref=e1062]
                    - heading "Boys Batman Printed T-shirt" [level=4] [ref=e1063]
                    - generic [ref=e1064]:
                      - generic [ref=e1065]:
                        - generic [ref=e1066]: Rs. 226
                        - generic [ref=e1067]: Rs. 229
                      - text: (1% OFF)
              - listitem [ref=e1068]:
                - generic [ref=e1069]:
                  - generic [ref=e1070]: "4.7"
                  - generic [ref=e1072]:
                    - generic [ref=e1073]: "|"
                    - text: 2.6k
                - generic [ref=e1074]: AD
                - link "NEW H&M Boys Typography Printed T-shirt Rs. 399" [ref=e1075] [cursor=pointer]:
                  - /url: tshirts/h%26m/hm-boys-typography-printed-t-shirt/43745387/buy
                  - generic [ref=e1076]: NEW
                  - generic [ref=e1081]:
                    - heading "H&M" [level=3] [ref=e1082]
                    - heading "Boys Typography Printed T-shirt" [level=4] [ref=e1083]
                    - generic [ref=e1084]: Rs. 399
              - listitem [ref=e1086]:
                - generic [ref=e1087]:
                  - generic [ref=e1088]: "4.9"
                  - generic [ref=e1090]:
                    - generic [ref=e1091]: "|"
                    - text: "10"
                - link "YK X Minute Mirth Boys Cotton Tshirts Rs. 262Rs. 649(60% OFF) Only Few Left!" [ref=e1092] [cursor=pointer]:
                  - /url: tshirts/yk+x+minute+mirth/yk-x-minute-mirth-boys-cotton-tshirts/39032367/buy
                  - generic [ref=e1097]:
                    - heading "YK X Minute Mirth" [level=3] [ref=e1098]
                    - heading "Boys Cotton Tshirts" [level=4] [ref=e1099]
                    - generic [ref=e1100]:
                      - generic [ref=e1101]:
                        - generic [ref=e1102]: Rs. 262
                        - generic [ref=e1103]: Rs. 649
                      - text: (60% OFF)
                    - generic [ref=e1104]: Only Few Left!
              - listitem [ref=e1105]:
                - link "NEW R&B Boys Printed T-shirt Rs. 199" [ref=e1106] [cursor=pointer]:
                  - /url: tshirts/r%26b/rb-boys-printed-tropical-pure-cotton-t-shirt/44958267/buy
                  - generic [ref=e1107]: NEW
                  - generic [ref=e1112]:
                    - heading "R&B" [level=3] [ref=e1113]
                    - heading "Boys Printed T-shirt" [level=4] [ref=e1114]
                    - generic [ref=e1115]: Rs. 199
              - listitem [ref=e1117]:
                - generic [ref=e1118]:
                  - generic [ref=e1119]: "4.7"
                  - generic [ref=e1121]:
                    - generic [ref=e1122]: "|"
                    - text: "6"
                - generic [ref=e1123]: AD
                - link "NEW NEXT Boys Typography T-shirt Rs. 599 Only Few Left!" [ref=e1124] [cursor=pointer]:
                  - /url: tshirts/next/next-boys-typography-print-t-shirt/43113671/buy
                  - generic [ref=e1125]: NEW
                  - generic [ref=e1130]:
                    - heading "NEXT" [level=3] [ref=e1131]
                    - heading "Boys Typography T-shirt" [level=4] [ref=e1132]
                    - generic [ref=e1133]: Rs. 599
                    - generic [ref=e1135]: Only Few Left!
              - listitem [ref=e1136]
              - listitem [ref=e1137]
              - listitem
              - listitem
              - listitem
            - list [ref=e1139]:
              - listitem: Page 1
              - listitem: Previous
              - listitem [ref=e1140]: Page 1 of 1480
              - listitem [ref=e1141] [cursor=pointer]: Next
            - generic [ref=e1145]:
              - generic [ref=e1146]: Similar Products
              - generic [ref=e1147] [cursor=pointer]: ✕
    - paragraph [ref=e1152] [cursor=pointer]: UPTO ₹300 OFF
  - contentinfo [ref=e1156]:
    - generic [ref=e1157]:
      - generic [ref=e1158]:
        - generic [ref=e1159]:
          - paragraph [ref=e1160]:
            - link "ONLINE SHOPPING" [ref=e1161] [cursor=pointer]:
              - /url: /?src=onlineShopping
          - link "Men" [ref=e1162] [cursor=pointer]:
            - /url: /shop/men
          - link "Women" [ref=e1163] [cursor=pointer]:
            - /url: /shop/women
          - link "Kids" [ref=e1164] [cursor=pointer]:
            - /url: /shop/kids
          - link "Home" [ref=e1165] [cursor=pointer]:
            - /url: /shop/home-living
          - link "Beauty" [ref=e1166] [cursor=pointer]:
            - /url: /personal-care
          - link "Genz" [ref=e1167] [cursor=pointer]:
            - /url: /shop/fwd-women
          - link "Gift Cards" [ref=e1168] [cursor=pointer]:
            - /url: /giftcard
          - link "Myntra Insider" [ref=e1169] [cursor=pointer]:
            - /url: /myntrainsider?cache=false
          - paragraph [ref=e1170]: USEFUL LINKS
          - link "Blog" [ref=e1171] [cursor=pointer]:
            - /url: http://blog.myntra.com/
          - link "Careers" [ref=e1172] [cursor=pointer]:
            - /url: https://careers.myntra.com
          - link "Site Map" [ref=e1173] [cursor=pointer]:
            - /url: /sitemap
          - link "Corporate Information" [ref=e1174] [cursor=pointer]:
            - /url: /corp-info
          - link "Whitehat" [ref=e1175] [cursor=pointer]:
            - /url: /security/whitehat
          - link "Cleartrip" [ref=e1176] [cursor=pointer]:
            - /url: https://www.cleartrip.com/
          - link "Myntra Global" [ref=e1177] [cursor=pointer]:
            - /url: https://www.myntraglobal.com/
        - generic [ref=e1178]:
          - paragraph [ref=e1179]: CUSTOMER POLICIES
          - link "Contact Us" [ref=e1180] [cursor=pointer]:
            - /url: /contactus
          - link "FAQ" [ref=e1181] [cursor=pointer]:
            - /url: /faqs
          - link "T&C" [ref=e1182] [cursor=pointer]:
            - /url: /tac
          - link "Terms Of Use" [ref=e1183] [cursor=pointer]:
            - /url: /termsofuse
          - link "Track Orders" [ref=e1184] [cursor=pointer]:
            - /url: /my/orders
          - link "Shipping" [ref=e1185] [cursor=pointer]:
            - /url: /faqs#shipping
          - link "Cancellation" [ref=e1186] [cursor=pointer]:
            - /url: /faqs#cancel
          - link "Privacy policy" [ref=e1187] [cursor=pointer]:
            - /url: /privacypolicy
          - link "Grievance Redressal" [ref=e1188] [cursor=pointer]:
            - /url: /grievanceredressal
          - link "FSSAI Food Safety Connect app" [ref=e1189] [cursor=pointer]:
            - /url: https://fssai.gov.in/cms/food-safety-connect.php
        - generic [ref=e1190]:
          - paragraph [ref=e1191]: EXPERIENCE MYNTRA APP ON MOBILE
          - generic:
            - link:
              - /url: https://play.google.com/store/apps/details?id=com.myntra.android
            - link:
              - /url: https://itunes.apple.com/in/app/myntra-indias-fashion-store/id907394059
          - generic [ref=e1192]: KEEP IN TOUCH
          - link [ref=e1193] [cursor=pointer]:
            - /url: https://www.facebook.com/myntra
          - link:
            - /url: https://twitter.com/myntra
          - link:
            - /url: https://www.youtube.com/user/myntradotcom
          - link:
            - /url: https://www.instagram.com/myntra
        - generic [ref=e1195]:
          - generic [ref=e1199]:
            - strong [ref=e1200]: 100% ORIGINAL
            - text: guarantee for all products at myntra.com
          - generic [ref=e1204]:
            - strong [ref=e1205]: Return within 14days
            - text: of receiving your order
      - generic [ref=e1207]:
        - separator [ref=e1208]
        - generic [ref=e1209]: POPULAR SEARCHES
        - generic [ref=e1210]:
          - link "Adidas |" [ref=e1211] [cursor=pointer]:
            - /url: /adidas
          - link "Arrow |" [ref=e1212] [cursor=pointer]:
            - /url: /arrow
          - link "Fila |" [ref=e1213] [cursor=pointer]:
            - /url: /fila
          - link "Online Shopping |" [ref=e1214] [cursor=pointer]:
            - /url: /
          - link "Nike |" [ref=e1215] [cursor=pointer]:
            - /url: /nike
          - link "Pepe Jeans |" [ref=e1216] [cursor=pointer]:
            - /url: /pepe-jeans
          - link "Puma |" [ref=e1217] [cursor=pointer]:
            - /url: /puma
          - link "United Colors of Benetton |" [ref=e1218] [cursor=pointer]:
            - /url: /united-colors-of-benetton
          - link "Fastrack |" [ref=e1219] [cursor=pointer]:
            - /url: /fastrack
          - link "Shorts |" [ref=e1220] [cursor=pointer]:
            - /url: /men-shorts
          - link "Being Human |" [ref=e1221] [cursor=pointer]:
            - /url: /being-human
          - link "Skirts |" [ref=e1222] [cursor=pointer]:
            - /url: /women-shorts-skirts
          - link "Woodland |" [ref=e1223] [cursor=pointer]:
            - /url: /woodland
          - link "Supra |" [ref=e1224] [cursor=pointer]:
            - /url: /supra
          - link "Dresses |" [ref=e1225] [cursor=pointer]:
            - /url: /dresses
          - link "Clothing |" [ref=e1226] [cursor=pointer]:
            - /url: /clothing
          - link "Jewellery |" [ref=e1227] [cursor=pointer]:
            - /url: /jewellery
          - link "T-shirts |" [ref=e1228] [cursor=pointer]:
            - /url: /tshirts
          - link "Shoes |" [ref=e1229] [cursor=pointer]:
            - /url: /shoes
          - link "Bags |" [ref=e1230] [cursor=pointer]:
            - /url: /bags
          - link "Watches |" [ref=e1231] [cursor=pointer]:
            - /url: /watches
          - link "Caps |" [ref=e1232] [cursor=pointer]:
            - /url: /caps
          - link "Shirts |" [ref=e1233] [cursor=pointer]:
            - /url: /shirts
          - link "Backpacks |" [ref=e1234] [cursor=pointer]:
            - /url: /backpacks
          - link "Flip Flops |" [ref=e1235] [cursor=pointer]:
            - /url: /flip-flops
          - link "Sunglasses |" [ref=e1236] [cursor=pointer]:
            - /url: /sunglasses
          - link "Kurtas |" [ref=e1237] [cursor=pointer]:
            - /url: /kurtas
          - link "Lingerie |" [ref=e1238] [cursor=pointer]:
            - /url: /lingerie
          - link "Jackets |" [ref=e1239] [cursor=pointer]:
            - /url: /jackets
          - link "Skechers |" [ref=e1240] [cursor=pointer]:
            - /url: /skechers
          - link "Saree |" [ref=e1241] [cursor=pointer]:
            - /url: /saree
          - link "Sandals |" [ref=e1242] [cursor=pointer]:
            - /url: /sandals
          - link "Puma Tshirts |" [ref=e1243] [cursor=pointer]:
            - /url: /puma-tshirts
          - link "Woodland Shoes |" [ref=e1244] [cursor=pointer]:
            - /url: /woodland-shoes
          - link "Titan Watches |" [ref=e1245] [cursor=pointer]:
            - /url: /titan-watches
          - link "Fastrack Watches |" [ref=e1246] [cursor=pointer]:
            - /url: /fastrack-watches
          - link "Wrangler Shirts |" [ref=e1247] [cursor=pointer]:
            - /url: /wrangler-shirts
          - link "Adidas Tshirts |" [ref=e1248] [cursor=pointer]:
            - /url: /adidas-tshirts
          - link "Nike Shoes |" [ref=e1249] [cursor=pointer]:
            - /url: /nike-shoes
          - link "Roadster Shirts |" [ref=e1250] [cursor=pointer]:
            - /url: /roadster-shirts
          - link "Casual Shoes |" [ref=e1251] [cursor=pointer]:
            - /url: /casual-shoes
          - link "Running Shoes |" [ref=e1252] [cursor=pointer]:
            - /url: /running-shoes
          - link "Nike Sports Shoes |" [ref=e1253] [cursor=pointer]:
            - /url: /nike-sports-shoes
          - link "Jeans |" [ref=e1254] [cursor=pointer]:
            - /url: /jeans
          - link "Being Human Tshirts |" [ref=e1255] [cursor=pointer]:
            - /url: /being-human-tshirts
          - link "Converse Shoes |" [ref=e1256] [cursor=pointer]:
            - /url: /converse-shoes
          - link "Cricket Shoes" [ref=e1257] [cursor=pointer]:
            - /url: /cricket-shoes
      - generic [ref=e1258]:
        - generic [ref=e1259]:
          - text: In case of any concern,
          - link "Contact Us" [ref=e1260] [cursor=pointer]:
            - /url: /contactus
        - generic [ref=e1261]: © 2026 www.myntra.com. All rights reserved.
        - link "A Flipkart company" [ref=e1263] [cursor=pointer]:
          - /url: https://www.flipkart.com/
```

# Test source

```ts
  115 | //     }
  116 | //     catch{
  117 | //         console.log('popup not appeared');
  118 | //     }
  119 | // })
  120 | 
  121 | // import {test} from "@playwright/test";
  122 | 
  123 | // test ('amazon',async({page})=>{
  124 | //     await page.goto('https://www.amazon.com/');
  125 | //     await page.locator('(//input[@class="nav-input nav-progressive-attribute"])[1]');
  126 | //     await page.locator(' So twenty times twenty times so specific in the image so parents in the simple slash. For example, grandparent in the image descendant descendant slash descendant descendant minimum total')
  127 | // })
  128 | 
  129 | //span[text()='Shoes under $50']/ancestor::div[@class="_Zmx1a_fluidQuadImageLabelBody_3tld0"]/child::div[@class="a-section a-spacing-small _Zmx1a_gridRowOne_1t0zL"]/decendant::div[@class="a-section a-spacing-none _Zmx1a_imageLabel_3ANSV aok-inline-block aok-align-center"]
  130 | //img[@draggable="false"]
  131 | // /span[@class="product-discountedPri
  132 | // const tshirtcount= await page.locator('//div[@class="product-productMetaInfo"]').count("");
  133 | 
  134 | // import {test} from "@playwright/test";
  135 | 
  136 | // test ('myntra',async({page})=>{
  137 | //      await page.goto('https://www.myntra.com/boy-tshirts');
  138 |     
  139 | //     let tshirt=await page.locator('//div[@class="product-price"]').allTextContents();
  140 | //     console.log(tshirt);
  141 | //     let amount=tshirt.map(tshirt=>Number(tshirt.Number()));
  142 | //      console.log(amount);
  143 | // })
  144 | 
  145 | // import {test} from "@playwright/test";
  146 | 
  147 | // test ('upload',async({page})=>{
  148 | //      await page.goto('https://www.file.io/');
  149 | //      await  page.setInputFiles('#select-files-input','./screen_shot.png','/screen_shot1.png');
  150 | //      await page. waitForTimeout(4000);
  151 | //      await page.setInputFiles('#select-files-input',[]);
  152 | //      await page.waitForTimeout(5000);
  153 | // })
  154 | 
  155 | // import {test} from "@playwright/test";
  156 | // test ('upload_files',async({page})=>{
  157 | //      await page.goto ('https://demoqa.com/upload-download')
  158 | //      const [image] =await Promise.all([
  159 | //           page.waitForEvent('download'),
  160 | //           page.locator('#downloadButton').click()
  161 | 
  162 | //      ]);
  163 | //     console.log('image');
  164 | //     await image.saveAs('./download/img.png');
  165 | // })
  166 | 
  167 | 
  168 |      // import{test} from "@playwright/test";
  169 | 
  170 |      // test('frame',async({page})=>{
  171 |      //      await page.goto('https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame');
  172 |      //      const frame = await page.frameLocator('iframe[class=" lazyloaded"]');
  173 |      //      // await frame.locator('[alt="SAP Hybris Training"]').click();
  174 |      //      await frame.getByText('SAP Hybris Training').click();
  175 |      //      await page.waitForTimeout(3000);
  176 |      //      await page.locator('#menu-item-2806').click();
  177 |      //      await page.waitForTimeout(3000);
  178 |      // })
  179 | 
  180 | 
  181 |      // import{test} from "@playwright/test";
  182 | 
  183 |      // test ('nested_frame',async({page})=>{
  184 |      //      await page.goto('https://www.hyrtutorials.com/p/frames-practice.html');
  185 |      //      const frame2=await page.frameLocator ('#frm2');
  186 |      //      await frame2.locator("#firstName").fill('NAVEEN');
  187 |      //      await frame2.locator('#lastName').fill('v');
  188 |      //      await frame2.locator('#englishchbx').click();
  189 |           
  190 |      //      const frame3=await page.frameLocator('#frm3');
  191 | //      //      const frame3_2=await frame3.frameLocator ('#frm2');
  192 | //      //      await frame3_2.locator("#firstName").fill('NAVEEN');
  193 | //      //      await frame3_2.locator('#lastName').fill('v');
  194 | //      //      await frame3_2.locator('#englishchbx').click();
  195 | //      // })
  196 | 
  197 | 
  198 | // import {test} from "@playwright/test";
  199 | 
  200 | // test ('myntra',async({page})=>{
  201 | //      await page.goto('https://www.myntra.com/boy-tshirts');
  202 |     
  203 | //     let tshirt=await page.locator('//div[@class="product-price"]').allTextContents();
  204 | //     console.log(tshirt);
  205 | // //     let amount=tshirt.map(
  206 | // //      console.log(amount);
  207 | // })
  208 | 
  209 | import { test } from '@playwright/test';
  210 | 
  211 | test('myntra', async ({ page }) => {
  212 |   await page.goto('https://www.myntra.com/boy-tshirts');
  213 | 
  214 |   let price = await page.locator('//li[@class="product-base"]/descendant::div[@class="product-price"]/span/span[@class="product-discountedPrice"]').allTextContents();
> 215 |   let total_count =await count(price);
      |                    ^ ReferenceError: count is not defined
  216 |   console.log(await price);
  217 | 
  218 |   let amount = price.map(product => Number(product.match(/\d+/g)[0]));
  219 |   console.log(amount);
  220 | 
  221 |   let min = Math.min(...amount);
  222 |   console.log(min);
  223 | })
```