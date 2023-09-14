<template>
  
  <div class="about">
    <div class="first" >
    <div  id="margin" class="container one d-flex justify-content-center align-content-center">
  <div class="row">
    <div class="col-6"><img class="beans" src="https://i.postimg.cc/76ByTFD3/photo-1597816792530-f6d57bd2bf9e.jpg" style="height:500px;" alt="ourBeans"></div>
    <div class="col-6"> <h5 class="grow up">Our Beans</h5> <p>Our journey begins with a deep-rooted dedication to responsible sourcing. We believe that every cup of coffee tells a story, and that story begins at the source. That's why we meticulously curate our beans from local, responsible sources, nurturing relationships with farmers who share our passion for excellence and ethical practices.</p>

<p>By sourcing our beans locally, we not only support the livelihoods of hardworking farmers in our community but also reduce our carbon footprint, contributing to a healthier planet. Our commitment to sustainability extends beyond just our products; it's a core principle that guides every aspect of our business.</p></div>
  </div>
</div> 
<img class="border" src="https://i.postimg.cc/Bv3f5cBh/ed379674-8a22-4517-9c15-d6966228fc6f-removebg-preview.png" alt="">
    </div>
    
    <div class="container one d-flex justify-content-center align-content-center">
  <div class="row">
    <div class="col-6"> <h5 class="grow">Our Packaging</h5><p>Our packaging journey begins with a careful selection of materials. We've gone the extra mile to choose eco-friendly packaging options that reduce waste and minimize our environmental impact. From compostable bags to recyclable labels, every element is designed with the planet in mind.</p>

<p>But our commitment doesn't stop there. We believe that freshness is the heart of a remarkable coffee experience. Our airtight, resealable bags are engineered to lock in the tantalizing aroma and flavor of our freshly roasted beans. This means that when you open a bag of Roast & Revelry coffee, you're greeted with the same vibrant taste that our expert roasters intended.</p></div>
    <div class="col-6"><img class="pack" src="https://i.postimg.cc/WbfbyfDY/istockphoto-1303762852-612x612.jpg" style="width:500px;" alt="packing"></div>
  </div>
</div>
    <div class="container two d-flex justify-content-center align-content-center">
  <div class="row">
    <div class="col-6"><img class="equip" src="https://i.postimg.cc/02GhM6vY/istockphoto-618340264-2048x2048-transformed.jpg" style="height:350px;" alt="ourBeans"></div>
    <div class="col-6"> <h5 class="grow">Our Equipment</h5> <p>Craftsmanship meets innovation in our range of coffee-making tools. From state-of-the-art espresso machines that deliver the perfect crema to pour-over kits that allow you to savor every nuanced flavor note, we've scoured the globe to bring you equipment that embodies excellence.</p>

<p>Our commitment to quality extends beyond just the final brew. Each piece in the Roast & Revelry Equipment Collection is built to stand the test of time, ensuring that your coffee-making rituals are consistently exceptional. We understand that the art of coffee requires precision, and our equipment empowers you to create brews that reflect your unique taste and style.</p></div>
  </div>
</div>


  </div>

</template>

<script>
export default {

}

</script>

<style scoped>

* {
  background-color: #E4C2A2;
}
.container.one, .container.two.d-flex.justify-content-center.align-content-center {
  padding-top: 2%;
  padding-bottom: 5%;
  text-align: center;
}

.beans, .grow-up {
  margin-top: 4em;
}

.beans {
  border: 8px solid #3C6866;
}
.pack {
  border: 8px solid #995C23;
}
.equip {
  border: 8px solid #462507;
}

.first {
  display: flex;
}

.border {
  /* float: right; */
  border: none !important;
  height: 75%;
  width: auto;
}

.container.two.d-flex.justify-content-center.align-content-center {
  padding-bottom: 2em;
}

.grow, .grow.up {
  color: #995C23;
text-align: center;
font-family: Inter;
font-size: 40px;
font-weight: 600;
line-height: normal;
-webkit-text-stroke: 1px #5a3009;
}

p{
  color: #462507;
text-align: center;
font-family: Inter;
font-size: 20px;
font-weight: 600;
line-height: normal;
-webkit-text-stroke: 0.5px #995C23;
}

.grow.up {
  padding-top: 4em;
}

@media screen and (max-width: 320px) {
            div.col-6 {
                flex:  0 100%;
                max-width: 100%;
            }
            .grow, .grow up {
                text-align: center;
            }
            .beans, .pack, .equip {
                width: 100% !important;
                /* height: auto; */
            }

            img.border {
              display: none;
            }

            img.equip {
              display: none;
            }

            img.pack {
              width: 100% !important;
            }

            img.beans {
              margin: 0;
            }

            h5.grow.up {
              padding: 30px 0 0 0;
            }
        }

        @media screen and (max-width: 768px) {
          div.col-6 {
                flex:  50% 50%;
                /* max-width: 100%; */
                align-items: center;
                justify-content: center;
            }

            img.border {
              display: none;
            }

            img.beans {
              margin: 0;
            }

            img.pack {
              width: 100% !important;
              margin-top: 100px;
            }

            img.equip {
            width: 100% !important;
            height: auto !important;
            margin-top: 100px;
          }

            h5.grow.up {
              padding: 20px !important;
            }

        }

        @media screen and (max-width: 1024px) {
          div.col-6 {
            flex:  50% 50%;
          }

          img.pack {
            width: 100% !important;
          }
          img.equip {
            width: 100% !important;
            height: auto !important;
          }

          h5.grow.up {
            padding: 55px 0 22px 0;
          }

        }

</style>
