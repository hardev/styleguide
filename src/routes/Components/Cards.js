import React, {Component} from "react";
import TemplateDefault from '../../components/TemplateDefault';
import TemplateComponentBlock from '../../components/TemplateComponentBlock';

export default class ListingCards extends Component {

  constructor(props) {
    super(props);

    this.elements = [
      `<div class="row">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 tabindex="0">Landscape Small</h4>
        </div>
      </div>
      <div class="row">
        <div class="col col-sm-4 col-12 mb-0">
          <div class="card card--landscape_small">
            <a href="#">Drive Time</a>
          </div>
        </div>
        <div class="clear_both"></div>
      </div>

      <hr />

      <div class="row">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 tabindex="0">Landscape Small with Icon</h4>
        </div>
      </div>
      <div class="row">
        <div class="col col-sm-4 col-12 mb-0">
          <div class="card card--landscape_small card--landscape_small--with_icon card--landscape_small--with_icon--facebook">
            <a href="#">Share on Facebook</a>
          </div>
        </div>
      </div>

      <hr />

      <div class="row">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 tabindex="0">Landscape medium</h4>
        </div>
      </div>

      <div class="row">
        <div class="col col-sm-6 col-12 mb-0 pb-0">
          <a href="#" class="card card--landscape_medium">
            <div class="card--landscape_medium__image_content">
              <div class="card--landscape_medium__image_content__image" style="background-image: url(https://content.harstatic.com/resource_2019/imgs/temprary/badges.jpg);"></div>
            </div>
            <div class="card--landscape_medium__content">
              <h5>Open House</h5>
              <div class="card--landscape_medium__text">Pay a visit to several properties open for you</div>
            </div>
          </a>
        </div>
      </div>

      <hr />

      <div class="row">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 tabindex="0">Landscape large</h4>
        </div>
      </div>
      <div class="row">
        <div class="col col-sm-12 col-12 mb-0 pb-0">
          <div class="card card--landscape_large">
            <div class="card--landscape_large__image_content">
              <div class="card--landscape_large__image_content__image" style="background-image: url(https://content.harstatic.com/resource_2019/imgs/temprary/badges.jpg);">
                <a tabindex="-1" href="#" title="Home prices are so high, pending sales have dropped for 7 months in a row"></a>
              </div>
            </div>
            <div class="card--landscape_large__content">
              <h5><a tabindex="0" href="#">Home prices are so high, pending sales have dropped for 7 months in a row</a></h5>
              <div class="card--landscape_large__text pt-3">The National Association of Realtors blames years of inadequate housing supply and consistent home price growth in hot job markets. Pending home sales dropped 0.7 percent month-over-month and 2.3 percent year-over-year to 106.2. the seventh consecutive month of... <a href="#"  tabindex="-1" class="font_weight--semi_bold">Read more</a></div>
            </div>
          </div>
        </div>
      </div>

	  <hr />

      <div class="row">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 tabindex="0">Blog Post</h4>
        </div>
      </div>
      <div class="row">
        <div class="col col-md-9 col-12 mb-0 pb-0">
          <div class="card card--blog_post">
          	<div class="card--blog_post__content">
              <h5><a tabindex="0" href="#">What's new in Legislation for Homeowners?</a></h5>
              <div class="card--blog_post__date pt-1">Nov 04, 2019</div>
              <div class="card--blog_post__text pt-2">This home creates a great entertaining atmosphere with Open spaces. Your new home is a Smart Home. The Thermostat and Front door are programmable and… <a href="#"  tabindex="-1" class="font_weight--semi_bold">read more</a></div>
            </div>
            <div class="card--blog_post__image_content">
              <div class="card--blog_post__image_content__image" style="background-image: url(https://content.harstatic.com/resource_2019/imgs/temprary/badges.jpg);">
                <a tabindex="-1" href="#" title="Home prices are so high, pending sales have dropped for 7 months in a row"></a>
              </div>
            </div>            
          </div>
        </div>
      </div>
      
	  </div>`,

      `<div class="row">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 tabindex="0">Portrait medium (Variation 1)</h4>
        </div>
      </div>

      <div class="row card_portrait_medium_container">
        <div class="col col-7 col-sm-5 col-md-5 col-lg-3 mb-0 pb-0">
          <a href="#" class="card card--portrait_medium">
            <div class="card--portrait_medium__image_content">
              <div class="card--portrait_medium__image_content__image" style="background-image:url(https://media.istockphoto.com/photos/man-using-dslr-camera-picture-id1018589116?s=2048x2048);"></div>
            </div>
            <div class="card--portrait_medium__content card--portrait_medium__content--two_lines_height">
              <h5>Photographer <span class="font_size font_size--small color_auxiliary font_weight--regular">(376)</span></h5>
            </div>
          </a>
        </div>
      </div>

      <hr />

      <div class="row">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 tabindex="0">Portrait medium (Variation 2)</h4>
        </div>
      </div>

      <div class="row card_portrait_medium_container">
        <div class="col col-7 col-sm-5 col-md-5 col-lg-3 mb-0 pb-0">
          <a href="#" class="card card--portrait_medium">
            <div class="card--portrait_medium__image_content">
              <div class="card--portrait_medium__image_content__image" style="background-image:url(https://content.harstatic.com/resource_2019/imgs/temprary/city_badge2.jpg);"></div>
            </div>
            <div class="card--portrait_medium__content">
              <h5 class="mb-2">Houston</h5>
              <div class="card--portrait_medium__text">
                <span class="color_carbon font_weight--bold">5,803</span> Homes for Sale<br />
                <span class="color_carbon font_weight--bold">$506K</span> Avg. price
              </div>
            </div>
          </a>
        </div>
      </div>

      <hr />

      <div class="row">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 tabindex="0">Portrait medium (Variation 3)</h4>
        </div>
      </div>

      <div class="row card_portrait_medium_container">
        <div class="col col-12 col-md-4 mb-0 pb-0">
          <a href="#" class="card card--portrait_medium">
            <div class="card--portrait_medium__image_content card--portrait_medium__image_content--large">
              <div class="card--portrait_medium__image_content__image" style="background-image:url(http://d1marr3m5x4iac.cloudfront.net/images/block250/I0-001/017/640/416-4.jpeg_/monster-jam-16.jpeg);"></div>
            </div>
            <div class="card--portrait_medium__content text-left">
              <h5>NRG Stadium</h5>
              <span class="font_size font_size--small color_auxiliary font_weight--regular">January 26, 2019 at 07:00 PM</span>
            </div>
          </a>
        </div>
      </div>

      <hr />

      <div class="row">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 tabindex="0">Portrait medium (Variation 4)</h4>
        </div>
      </div>

      <div class="row card_portrait_medium_container">
        <div class="col col-12 col-md-4 mb-0 pb-0">
          <a href="#" class="card card--portrait_medium">
            <div class="card--portrait_medium__image_content card--portrait_medium__image_content--large">
              <div class="card--portrait_medium__image_content__image" style="background-image:url(https://www.billboard.com/files/styles/article_main_image/public/media/justin-timberlake-eurovision-performance-2016-billboard-1548.jpg);"></div>
            </div>
            <div class="card--portrait_medium__content text-left">
              <h5>Justin Timberlake</h5>
              <hr class="mt-3 mb-3" />
              <span class="font_size font_size--small color_auxiliary font_weight--regular"><strong>Apr 29, 2019 at 07:30 PM</strong></span><br />
              <span class="font_size font_size--small color_auxiliary font_weight--regular">The Pavilion at Toyota<br/>Music Factory</span>
            </div>
          </a>
        </div>

        <div class="col col-12 col-md-4 mb-0 pb-0">
          <a href="#" class="card card--portrait_medium">
            <div class="card--portrait_medium__image_content card--portrait_medium__image_content--large">
              <div class="card--portrait_medium__image_content__image" style="background-image:url(https://content.harstatic.com/masterplanned/large/100_304.jpg);"></div>
            </div>
            <div class="card--portrait_medium__content text-left">
              <h5>Wildwood at Northpointe</h5>
              <hr class="mt-3 mb-3" />
              <span class="font_size font_size--small color_auxiliary font_weight--regular">Located just of SH 249 in Tomball, Wildwood at North Pointe offers residents a prime...</span>
            </div>
          </a>
        </div>
      </div>

      <hr />

      <div class="row">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 tabindex="0">Portrait medium (Variation 5)</h4>
        </div>
      </div>

      <div class="row card_portrait_medium_container">
        <div class="col col-12 col-md-4 mb-0 pb-0">
          <a href="#" class="card card--portrait_medium">
            <div class="card--portrait_medium__image_content card--portrait_medium__image_content--small">
              <div class="card--portrait_medium__image_content__image" style="background-image:url(https://media.istockphoto.com/photos/white-plow-displaying-a-sale-spending-sign-picture-id172249691?s=2048x2048);"></div>
            </div>
            <div class="card--portrait_medium__content text-left">
              <h5 class="mb-3">Home prices are so high, pending sales have dropped for 7 months</h5>

              <div class="mb-3">
                <span class="font_size font_size--small color_auxiliary font_weight--regular">The National Association of Realtors blames years of inadequate housing supply and consistent...</span>
                <span class="font_size font_size--small color_har_blue font_weight--bold">Read more</span><br />
              </div>

              <div class="color_auxiliary_light">
                <span class="mr-3">G.M Filisk</span>
                <span>Dec 30, 2016</span>
              </div>
            </div>
          </a>
        </div>
      </div>`,
    ];


    this.codeSnippets = [

`
<!-- Landscape-oriented card small -->
<div class="card card--landscape_small">
	<a href="#">Drive Time</a>
</div>

<!-- Landscape-oriented card small with icon -->
<div class="card card--landscape_small card--landscape_small--with_icon card--landscape_small--with_icon--facebook">
	<a href="#">Share on Facebook</a>
</div>

<!-- Landscape-oriented card medium -->
<a href="#" class="card card--landscape_medium">
  <div class="card--landscape_medium__image_content">
    <div class="card--landscape_medium__image_content__image" style="background-image: url(https://content.harstatic.com/resource_2019/imgs/temprary/badges.jpg);"></div>
  </div>
  <div class="card--landscape_medium__content">
    <h5>Open House</h5>
    <div class="card--landscape_medium__text">Pay a visit to several properties open for you</div>
  </div>
</a>

<!-- Landscape-oriented card large -->
<div class="card card--landscape_large">
  <div class="card--landscape_large__image_content">
    <div class="card--landscape_large__image_content__image" style="background-image: url(https://content.harstatic.com/resource_2019/imgs/temprary/badges.jpg);">
      <a tabindex="-1" href="#" title="Home prices are so high, pending sales have dropped for 7 months in a row"></a>
    </div>
  </div>
  <div class="card--landscape_large__content">
    <h5><a tabindex="0" href="#">Home prices are so high, pending sales have dropped for 7 months in a row</a></h5>
    <div class="card--landscape_large__text pt-3">The National Association of Realtors blames years of inadequate housing supply and consistent home price growth in hot job markets. Pending home sales dropped 0.7 percent month-over-month and 2.3 percent year-over-year to 106.2. the seventh consecutive month of... <a href="#"  tabindex="-1" class="font_weight--semi_bold">Read more</a></div>
  </div>
</div>

<!-- Landscape-oriented post blog -->
<div class="card card--blog_post">
	<div class="card--blog_post__content">
  <h5><a tabindex="0" href="#">What's new in Legislation for Homeowners?</a></h5>
  <div class="card--blog_post__date pt-1">Nov 04, 2019</div>
  <div class="card--blog_post__text pt-2">This home creates a great entertaining atmosphere with Open spaces. Your new home is a Smart Home. The Thermostat and Front door are programmable and… <a href="#"  tabindex="-1" class="font_weight--semi_bold">read more</a></div>
</div>
<div class="card--blog_post__image_content">
  <div class="card--blog_post__image_content__image" style="background-image: url(https://content.harstatic.com/resource_2019/imgs/temprary/badges.jpg);">
    <a tabindex="-1" href="#" title="Home prices are so high, pending sales have dropped for 7 months in a row"></a>
  </div>
</div>            
</div>
        
`,

`<!--
Variation 1

Notice that there is a specific container that changes gutter size
"card_portrait_medium_container"
-->
<div class="row card_portrait_medium_container">
  <div class="col col-7 col-sm-5 col-md-5 col-lg-3 mb-0 pb-0">
    <a href="#" class="card card--portrait_medium">
      <div class="card--portrait_medium__image_content">
        <div class="card--portrait_medium__image_content__image" style="background-image:url(https://media.istockphoto.com/photos/man-using-dslr-camera-picture-id1018589116?s=2048x2048);"></div>
      </div>
      <div class="card--portrait_medium__content card--portrait_medium__content--two_lines_height">
        <h5>Photographer <span class="font_size font_size--small color_auxiliary font_weight--regular">(376)</span></h5>
      </div>
    </a>
  </div>
</div>

<!--
Variation 2

Notice that there is a specific container that changes gutter size
"card_portrait_medium_container"
-->
<div class="row card_portrait_medium_container">
  <div class="col col-7 col-sm-5 col-md-5 col-lg-3 mb-0 pb-0">
    <a href="#" class="card card--portrait_medium">
      <div class="card--portrait_medium__image_content">
        <div class="card--portrait_medium__image_content__image" style="background-image:url(https://content.harstatic.com/resource_2019/imgs/temprary/city_badge2.jpg);"></div>
      </div>
      <div class="card--portrait_medium__content">
        <h5 class="mb-2">Houston</h5>
        <div class="card--portrait_medium__text">
          <span class="color_carbon font_weight--bold">5,803</span> Homes for Sale<br />
          <span class="color_carbon font_weight--bold">$506K</span> Avg. price
        </div>
      </div>
    </a>
  </div>
</div>

<!-- Variation 3 -->
<div class="row card_portrait_medium_container">
  <div class="col col-12 col-md-3 mb-0 pb-0">
    <a href="#" class="card card--portrait_medium">
      <div class="card--portrait_medium__image_content card--portrait_medium__image_content--large">
        <div class="card--portrait_medium__image_content__image" style="background-image:url(http://d1marr3m5x4iac.cloudfront.net/images/block250/I0-001/017/640/416-4.jpeg_/monster-jam-16.jpeg);"></div>
      </div>
      <div class="card--portrait_medium__content text-left">
        <h5>NRG Stadium</h5>
        <span class="font_size font_size--small color_auxiliary font_weight--regular">January 26, 2019 at 07:00 PM</span>
      </div>
    </a>
  </div>
</div>

<!-- Variation 4 -->
<div class="row card_portrait_medium_container">
  <div class="col col-12 col-md-3 mb-0 pb-0">
    <a href="#" class="card card--portrait_medium">
      <div class="card--portrait_medium__image_content card--portrait_medium__image_content--large">
        <div class="card--portrait_medium__image_content__image" style="background-image:url(https://www.billboard.com/files/styles/article_main_image/public/media/justin-timberlake-eurovision-performance-2016-billboard-1548.jpg);"></div>
      </div>
      <div class="card--portrait_medium__content text-left">
        <h5>Justin Timberlake</h5>
        <hr class="mt-3 mb-3" />
        <span class="font_size font_size--small color_auxiliary font_weight--regular"><strong>Apr 29, 2019 at 07:30 PM</strong></span><br />
        <span class="font_size font_size--small color_auxiliary font_weight--regular">The Pavilion at Toyota<br/>Music Factory</span>
      </div>
    </a>
  </div>

  <div class="col col-12 col-md-4 mb-0 pb-0">
    <a href="#" class="card card--portrait_medium">
      <div class="card--portrait_medium__image_content card--portrait_medium__image_content--large">
        <div class="card--portrait_medium__image_content__image" style="background-image:url(https://content.harstatic.com/masterplanned/large/100_304.jpg);"></div>
      </div>
      <div class="card--portrait_medium__content text-left">
        <h5>Wildwood at Northpointe</h5>
        <hr class="mt-3 mb-3" />
        <span class="font_size font_size--small color_auxiliary font_weight--regular">Located just of SH 249 in Tomball, Wildwood at North Pointe offers residents a prime...</span>
      </div>
    </a>
  </div>
</div>

<!-- Variation 5 -->
<div class="row card_portrait_medium_container">
  <div class="col col-12 col-md-4 mb-0 pb-0">
    <a href="#" class="card card--portrait_medium">
      <div class="card--portrait_medium__image_content card--portrait_medium__image_content--small">
        <div class="card--portrait_medium__image_content__image" style="background-image:url(https://media.istockphoto.com/photos/white-plow-displaying-a-sale-spending-sign-picture-id172249691?s=2048x2048);"></div>
      </div>
      <div class="card--portrait_medium__content text-left">
        <h5 class="mb-3">Home prices are so high, pending sales have dropped for 7 months</h5>

        <div class="mb-3">
          <span class="font_size font_size--small color_auxiliary font_weight--regular">The National Association of Realtors blames years of inadequate housing supply and consistent...</span>
          <span class="font_size font_size--small color_har_blue font_weight--bold">Read more</span><br />
        </div>

        <div class="color_auxiliary_light">
          <span class="mr-3">G.M Filisk</span>
          <span>Dec 30, 2016</span>
        </div>
      </div>
    </a>
  </div>`,
    ];

  }

  render(){
    return (
      <TemplateDefault
        pageTitle="Cards (Others)"
        activeParent="components"
        activeChild="cards">

        <TemplateComponentBlock blockTitle="Landscape-Oriented Cards" elements={this.elements[0]} codeSnippets={this.codeSnippets[0]} />
        <TemplateComponentBlock blockTitle="Portrait-Oriented Cards" elements={this.elements[1]} codeSnippets={this.codeSnippets[1]} />

      </TemplateDefault>
    )
  }

}
