import React, {Component} from "react";
import TemplateDefault from '../../components/TemplateDefault';
import TemplateComponentBlock from '../../components/TemplateComponentBlock';

export default class ListingCards extends Component {

  constructor(props) {
    super(props);

    this.elements = [
      `<div class="row">
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
      
      <br>
      <div class="row">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 tabindex="0">Landscape Small</h4>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4 col-12">
          <div class="card card--landscape_small">
              <a href="#" class="card--landscape_small__text" tabindex="0">Drive Time</a>
          </div>
        </div>
        <div class="col-sm-4 col-12">
          <div class="card card--landscape_small">
              <a href="#" class="card--landscape_small__text" tabindex="0">Neighborhoods</a>
          </div>
        </div>
        <div class="col-sm-4 col-12">
          <div class="card card--landscape_small">
              <a href="#" class="card--landscape_small__text" tabindex="0">Foreclosures</a>
          </div>
        </div>
      </div>
      
      <br>
      <div class="row">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 tabindex="0">Landscape Small</h4>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4 col-12">
          <div class="card card--landscape_with_icon card--landscape_with_icon--email">
              <a href="#" class="card--landscape_with_icon__text" tabindex="0">Share via Email</a>
          </div>
        </div>
        <div class="col-sm-4 col-12">
          <div class="card card--landscape_with_icon card--landscape_with_icon--facebook">
              <a href="#" class="card--landscape_with_icon__text" tabindex="0">Share on Facebook</a>
          </div>
        </div>
        <div class="col-sm-4 col-12">
          <div class="card card--landscape_with_icon card--landscape_with_icon--twitter">
              <a href="#" class="card--landscape_with_icon__text" tabindex="0">Share on Twitter</a>
          </div>
        </div>
      </div>

	  <div class="row">
        <div class="col-sm-4 col-12">
          <div class="card card--landscape_with_icon card--landscape_with_icon--tumblr">
              <a href="#" class="card--landscape_with_icon__text" tabindex="0">Share on Tumblr</a>
          </div>
        </div>
        <div class="col-sm-4 col-12">
          <div class="card card--landscape_with_icon card--landscape_with_icon--microsoft">
              <a href="#" class="card--landscape_with_icon__text" tabindex="0">Share on Microsoft Live</a>
          </div>
        </div>
        <div class="col-sm-4 col-12">
          <div class="card card--landscape_with_icon card--landscape_with_icon--linkedin">
              <a href="#" class="card--landscape_with_icon__text" tabindex="0">Share on LinkedIn</a>
          </div>
        </div>
      </div>
      
      <div class="row">
        <div class="col-sm-4 col-12">
          <div class="card card--landscape_with_icon card--landscape_with_icon--digg">
              <a href="#" class="card--landscape_with_icon__text" tabindex="0">Share on Digg</a>
          </div>
        </div>
        <div class="col-sm-4 col-12">
          <div class="card card--landscape_with_icon card--landscape_with_icon--reddit">
              <a href="#" class="card--landscape_with_icon__text" tabindex="0">Share on Reddit</a>
          </div>
        </div>
        <div class="col-sm-4 col-12">
          <div class="card card--landscape_with_icon card--landscape_with_icon--delicious">
              <a href="#" class="card--landscape_with_icon__text" tabindex="0">Share on Delicious</a>
          </div>
        </div>
      </div>

      
      
      `,

      `<div class="row">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 tabindex="0">Portrait medium</h4>
        </div>
      </div>

      <div class="row card_portrait_medium_container">
        <div class="col col-7 col-sm-5 col-md-5 col-lg-3 mb-0 pb-0">
          <a href="#" class="card card--portrait_medium">
            <div class="card--portrait_medium__image_content">
              <div class="card--portrait_medium__image_content__image" style="background-image:url(https://content.harstatic.com/resource_2019/imgs/temprary/city_badge2.jpg);"></div>
            </div>
            <div class="card--portrait_medium__content">
              <h5>Houston</h5>
              <div class="card--portrait_medium__text">
                <span class="color_carbon font_weight--bold">5,803</span> Homes for Sale<br />
                <span class="color_carbon font_weight--bold">$506K</span> Avg. price
              </div>
            </div>
          </a>
        </div>
      </div>`,
    ];


    this.codeSnippets = [

`<!-- Landscape-oriented card medium -->
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

<!-- Landscape-oriented card Small -->
<div class="card card--landscape_small_with">
  <a href="#" class="card--landscape_mini__text" tabindex="0">Drive Time</a>
</div>

<!-- Landscape-oriented card with icon -->
<div class="card card--landscape_with_icon card--landscape_with_icon--email">
  <a href="#" class="card--landscape_with_icon__text" tabindex="0">Share via Email</a>
</div>
`,

`<!--
Noticed that there is a specific container that changes gutter size
"card_portrait_medium_container"
-->
<div class="row card_portrait_medium_container">
  <div class="col col-7 col-sm-5 col-md-5 col-lg-3 mb-0 pb-0">

    <a href="#" class="card card--portrait_medium">
      <div class="card--portrait_medium__image_content">
        <div class="card--portrait_medium__image_content__image" style="background-image:url(https://content.harstatic.com/resource_2019/imgs/temprary/city_badge2.jpg);"></div>
      </div>
      <div class="card--portrait_medium__content">
        <h5>Houston</h5>
        <div class="card--portrait_medium__text">
          <span class="color_carbon font_weight--bold">5,803</span> Homes for Sale<br />
          <span class="color_carbon font_weight--bold">$506K</span> Avg. price
        </div>
      </div>
    </a>

  </div>
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
