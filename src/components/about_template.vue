<template>
<div class="col-md-12">
        <div class="row newhome">
           <p class="aboutus">About</p>
        </div>
        <div class="col-md-12 featureabout">
           <img src="http://ischool-project.s3-website-us-east-1.amazonaws.com/aboutcopy.png" alt="" class="featurepic">
        </div>
        <div class="row">
           <h2 class="newwayofc">We’re revolutionizing education.</h2>
           <div class="paragraph">
              <p class="paracontent">
                 We are passiniate for about building the nation with future citizens.
                 The best way to do this is to inculcate some of the best habits of successful people at early stage.
                 We have a team on board with experience in working international schools.
              </p>
           </div>
        </div>
        <div class="row founderheading">
        <div class="col-md-6 col-md-offset-3 cofounder">
            <h3 class="cofounder">Our Co-Founders</h3>
            </div>
           <div class="col-md-8 col-md-offset-3 paragraphone">
              <div class="field-name">
                 <div class="field__item">
                    <img src="http://ischool-project.s3-website-us-east-1.amazonaws.com/teacher2.jpg" alt="Ronen Lazar" class="founderimage" style="display: block;">
                 </div>
              </div>
              <div class="aboutfounder">
                 <p class=""><strong>Gayatri Mamidi</strong><br>
                    CEO and Co-founder<br>
                    <em class="business">Business Development</em>
                 </p>
                 <p class="Ronen">Gayatri is a serial entrepreneur who currently serves as the Co-Founder &amp;
                    Chief Executive Officer of iSchool. Prior to iSchool, Gayatri co-founded startups
                    to innovate in the non-profit, entertainment and web directory industries.
                    Gayatri and his wife live in New York with their three children. 
                    They are actively involved in numerous charitable causes and community initiatives. 
                    Gayatri graduated from Yeshiva University with a degree in economics.
                 </p>
              </div>
           </div>
           <div class="col-md-8 col-md-offset-3 paragraphone">
              <div class="field-name">
                 <img src="http://ischool-project.s3-website-us-east-1.amazonaws.com/teacher1.jpg" alt="Ronen Lazar" class="founderimage" style="display: block;">
              </div>
              <div class="aboutfounder">
                 <p class=""><strong>Isabella Chris</strong><br>
                    CTO and Co-founder<br>
                    <em class="business">Engineering</em>
                 </p>
                 <p class="Ronen">Isabella is a serial entrepreneur who currently serves as the Co-Founder &amp;
                    Chief Executive Officer of iSchool. Prior to iSchool, Isabella co-founded startups
                    to innovate in the non-profit, entertainment and web directory industries.
                    Isabella and his wife live in New York with their three children. 
                    They are actively involved in numerous charitable causes and community initiatives. 
                    Isabella graduated from Yeshiva University with a degree in economics.
                 </p>
              </div>
           </div>
        </div>
     </div>
</template>
<script>
export default{
    name:'About'
}
</script>
<style scoped>
.newhome{
  background-color: #eef7fe;
     padding-top: 120px!important;
}
.aboutus{
  background-color: #eef7fe;
  padding: 70px 8%;
  text-align: center;
  margin-top: 8px;
  color: #43566a;
  font-weight: 300;
  font-size: 45px;
  line-height: 55px;
  margin: 0 auto;
}
.featureabout{
  margin: -74px auto 0;
  text-align: center;
}
.featurepic{
  width:240px;
}
.newwayofc{ 
  color: #03bdd6;
font-weight: 300;
font-size: 30px;
line-height: 30px;
margin: -50px auto 20px;
text-align: center;
width: 770px;
max-width: 100%;
padding: 80px 20px 20px;
margin-bottom: 0;
}
.paracontent{
  max-width: 560px;
  margin: 0 auto;
  text-align: center;
  color: #43566a;
}
.founderheading{
  margin-top: 70px;
  color: #43566a;
}
.founderheading {
    background: #f5f6f8;
}
.cofounder{
padding-top: 56px;
padding-bottom: 60px;
margin-bottom: 0;
color: #43566a;
text-align: center;


}
.paragraphone{
max-width: 800px;
padding: 0 20px 68px 45px!important;

}
.field-name{
float: left;
margin-right: 34px;
max-width: 210px;
}
.founderimage{
width: 200px;
height: 220px;
}
.aboutfounder{
padding-right: 35px;
margin-left: 244px;
}
.business{
  font-style: normal;
  color: #a1a9b3;
  line-height: .5
}
.Ronen{
  color: #43566a
}

</style>