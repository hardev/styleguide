import React, {Component} from "react";
import TemplateDefault from '../../components/TemplateDefault';
import TemplateComponentBlock from '../../components/TemplateComponentBlock';


export default class ListingCards extends Component {

  constructor(props) {
    super(props);

    this.elements = [
      `<div class="row">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 tabindex="0">Landscape small</h4>
        </div>
      </div>

      <div class="row">
        <div class="col col-sm-7 col-12 mb-0 pb-0 ">

          <!-- card--listing -->
          <div class="card card--listing card--listing--small">

            <!-- card--listing__body -->
	          <div class="card--listing__body">
              <a href="#">

                <div class="card--listing__body__image_content">
                  <div class="card--listing__body__image_content_image" style="background-image: url(https://photos.harstatic.com/153440342/hr/img-1.jpeg?ts=2018-09-13T14:59:06.353);"></div>
                </div>
                <div class="card--listing__body__content">
                  <div class="row no-gutters">
                    <div class="col-8">
                      <div class="color_available font_weight--semi_bold pb-2">20 days at har.com</div>
                    </div>
                    <div class="col-4 text-right">
                      <div class="tag_status tag_status--available">for sale</div>
  	              	</div>
  	              </div>

  	              <div class="row no-gutters pb-2">
  	              	<div class="col-7">
  	              		<h4>Bartlett Street #4 Long Title Goes Here</h4>
  	              		<span class="color_slate_light">Houston TX 77098</span>
  	              	</div>
  	              	<div class="col-5 text-right">
  	              		<div class="font_size font_size--medium font_weight--bold color_carbon">$420,995</div>
                      <div class="color_available">
                        <span class="icon icon--16x16 icon--price_reduced mr-0"></span>
                        reduced -5%
                      </div>
  	              	</div>
  	              </div>

                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">2</span> beds
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">2</span> full baths
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">16,300</span> sqft.
                  </div>
                  <div class="clearfix"></div>
  	            </div>

              </a>
	          </div>
            <!-- /card--listing__body -->

          </div>
          <!-- /card--listing -->

        </div>
      </div>

      <hr />

      <div class="row">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 tabindex="0">Landscape large</h4>
        </div>
      </div>

      <div class="row">
        <div class="col col-sm-12 col-12 mb-0 pb-0 ">

          <!-- card--listing -->
          <div class="card card--listing">

            <!-- card--listing__header -->
            <div class="row no-gutters card--listing__header">
              <div class="col-7">
                <div class="agent_signature">
                  <div class="agent_signature agent_signature__photo">
                    <a tabindex="-1" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Shadrick Bogany's profile" style="background-image:url('https://pics.harstatic.com/agent/312961.jpg');"></a>
                  </div>
                  <div class="agent_signature agent_signature__info">
                    <a class="agent_signature agent_signature__info agent_signature__info__agent_name" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Shadrick Bogany's profile" aria-label="View Shadrick Bogany's profile">
                      Shadrick Bogany
                    </a>
                    <br />
                    <a class="agent_signature agent_signature__info agent_signature__info__broker_name" href="https://www.har.com/better-homes-and-gardens-real-estate-gary-greene/broker_GGPR11" title="View Better Homes And Gardens Real's page" aria-label="View Better Homes And Gardens Real's page">
                      Better Homes And Gardens Real
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-5 text-right">
                <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--favorite btn--small-extra" aria-label="Save Bartlett Street #4 Houston TX 77098 as favorite">Save</button>
                <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--dot_dot_dot btn--small-extra" aria-label="More options for Bartlett Street #4 Houston TX 77098"></button>
              </div>
            </div>
            <!-- /card--listing__header -->

            <!-- card--listing__body -->
	          <div class="card--listing__body">
              <a href="#">

                <div class="card--listing__body__image_content">
                  <div class="card--listing__body__image_content_image" style="background-image: url(https://photos.harstatic.com/153440342/hr/img-1.jpeg?ts=2018-09-13T14:59:06.353);"></div>
                </div>
                <div class="card--listing__body__content">
                  <div class="row no-gutters">
                    <div class="col-8">
                      <div class="color_available font_weight--semi_bold pb-3">20 days at har.com</div>
                    </div>
                    <div class="col-4 text-right">
                      <div class="tag_status tag_status--available">for sale</div>
  	              	</div>
  	              </div>

  	              <div class="row no-gutters pb-4">
  	              	<div class="col-8">
  	              		<h4>Bartlett Street #4 Long Title Goes Here</h4>
  	              		<span class="color_slate_light">Houston TX 77098</span>
  	              	</div>
  	              	<div class="col-4 text-right">
  	              		<div class="font_size font_size--large font_weight--bold color_carbon">$420,995</div>
  	              	</div>
  	              </div>

  	              <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">Townhouse Condo</span>
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">Townhouse Condo</span>
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">2</span> bedrooms
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">8</span>Full & <span class="font_weight--semi_bold color_carbon pr-1">4</span> Half Bath(s)
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">3</span> Stories
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">5,056</span> Building Sqft.
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">2,282.19 </span> Acre(s)
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">2012 </span> Built Year
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">Road Frontage: </span> Highway
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	Has Private Pool
                  </div>
                  <div class="clearfix"></div>
  	            </div>

              </a>
	          </div>
            <!-- /card--listing__body -->

          </div>
          <!-- /card--listing -->

        </div>
      </div>
      `,

      `<div class="row">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 tabindex="0">Portrait large</h4>
        </div>
      </div>

      <div class="row">
        <div class="col col-sm-6 col-12 mb-0 pb-0 ">

          <!-- card--listing -->
          <div class="card card--listing card--listing--portrait">

            <!-- card--listing__header -->
            <div class="row no-gutters card--listing__header">
              <div class="col-7">
                <div class="agent_signature">
                  <div class="agent_signature agent_signature__photo">
                    <a tabindex="-1" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Shadrick Bogany's profile" style="background-image:url('https://pics.harstatic.com/agent/312961.jpg');"></a>
                  </div>
                  <div class="agent_signature agent_signature__info">
                    <a class="agent_signature agent_signature__info agent_signature__info__agent_name" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Shadrick Bogany's profile" aria-label="View Shadrick Bogany's profile">
                      Shadrick Bogany
                    </a>
                    <br />
                    <a class="agent_signature agent_signature__info agent_signature__info__broker_name" href="https://www.har.com/better-homes-and-gardens-real-estate-gary-greene/broker_GGPR11" title="View Better Homes And Gardens Real's page" aria-label="View Better Homes And Gardens Real's page">
                      Better Homes And Gardens Real
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-5 text-right">
                <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--favorite btn--small-extra" aria-label="Save Bartlett Street #4 Houston TX 77098 as favorite">Save</button>
                <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--dot_dot_dot btn--small-extra" aria-label="More options for Bartlett Street #4 Houston TX 77098"></button>
              </div>
            </div>
            <!-- /card--listing__header -->

            <!-- card--listing__body -->
	          <div class="card--listing__body">
              <a href="#">

                <div class="card--listing__body__image_content">
                  <div class="card--listing__body__image_content_image" style="background-image: url(https://photos.harstatic.com/153440342/hr/img-1.jpeg?ts=2018-09-13T14:59:06.353);"></div>
                </div>
                <div class="card--listing__body__content">
                  <div class="row no-gutters">
                    <div class="col-8">
                      <div class="color_available font_weight--semi_bold pb-3">20 days at har.com</div>
                    </div>
                    <div class="col-4 text-right">
                      <div class="tag_status tag_status--available">for sale</div>
  	              	</div>
  	              </div>

  	              <div class="row no-gutters pb-4">
  	              	<div class="col-8">
  	              		<h4>Bartlett Street #4 Long Title Goes Here</h4>
  	              		<span class="color_slate_light">Houston TX 77098</span>
  	              	</div>
  	              	<div class="col-4 text-right">
  	              		<div class="font_size font_size--large font_weight--bold color_carbon">$420,995</div>
  	              	</div>
  	              </div>

  	              <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">Townhouse Condo</span>
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">Townhouse Condo</span>
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">2</span> bedrooms
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">8</span>Full & <span class="font_weight--semi_bold color_carbon pr-1">4</span> Half Bath(s)
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">3</span> Stories
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">5,056</span> Building Sqft.
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">2,282.19 </span> Acre(s)
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">2012 </span> Built Year
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">Road Frontage: </span> Highway
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	Has Private Pool
                  </div>
                  <div class="clearfix"></div>
  	            </div>

              </a>
	          </div>
            <!-- /card--listing__body -->

          </div>
          <!-- /card--listing -->

        </div>
      </div>
      `,
    ];


    this.codeSnippets = [

`<!-- Small Landscape Listing Card -->
<div class="card card--listing card--listing--small">

  <!-- card--listing__body -->
  <div class="card--listing__body">
    <a href="#">

      <div class="card--listing__body__image_content">
        <div class="card--listing__body__image_content_image" style="background-image: url(https://photos.harstatic.com/153440342/hr/img-1.jpeg?ts=2018-09-13T14:59:06.353);"></div>
      </div>
      <div class="card--listing__body__content">
        <div class="row no-gutters">
          <div class="col-8">
            <div class="color_available font_weight--semi_bold pb-2">20 days at har.com</div>
          </div>
          <div class="col-4 text-right">
            <div class="tag_status tag_status--available">for sale</div>
          </div>
        </div>

        <div class="row no-gutters pb-2">
          <div class="col-7">
            <h4>Bartlett Street #4 Long Title Goes Here</h4>
            <span class="color_slate_light">Houston TX 77098</span>
          </div>
          <div class="col-5 text-right">
            <div class="font_size font_size--medium font_weight--bold color_carbon">$420,995</div>
            <div class="color_available">
              <span class="icon icon--16x16 icon--price_reduced mr-0"></span>
              reduced -5%
            </div>
          </div>
        </div>

        <div class="card--listing__body__content__description_row">
          <span class="font_weight--semi_bold color_carbon pr-1">2</span> beds
        </div>
        <div class="card--listing__body__content__description_row">
          <span class="font_weight--semi_bold color_carbon pr-1">2</span> full baths
        </div>
        <div class="card--listing__body__content__description_row">
          <span class="font_weight--semi_bold color_carbon pr-1">16,300</span> sqft.
        </div>
        <div class="clearfix"></div>
      </div>

    </a>
  </div>
  <!-- /card--listing__body -->

</div>
<!-- /card--listing -->


<!-- Large Landscape Listing Card -->
<div class="card card--listing">

  <!-- card--listing__header -->
  <div class="row no-gutters card--listing__header">
    <div class="col-7">
      <div class="agent_signature">
        <div class="agent_signature agent_signature__photo">
          <a tabindex="-1" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Shadrick Bogany's profile" style="background-image:url('https://pics.harstatic.com/agent/312961.jpg');"></a>
        </div>
        <div class="agent_signature agent_signature__info">
          <a class="agent_signature agent_signature__info agent_signature__info__agent_name" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Shadrick Bogany's profile" aria-label="View Shadrick Bogany's profile">
            Shadrick Bogany
          </a>
          <br />
          <a class="agent_signature agent_signature__info agent_signature__info__broker_name" href="https://www.har.com/better-homes-and-gardens-real-estate-gary-greene/broker_GGPR11" title="View Better Homes And Gardens Real's page" aria-label="View Better Homes And Gardens Real's page">
            Better Homes And Gardens Real
          </a>
        </div>
      </div>
    </div>
    <div class="col-5 text-right">
      <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--favorite btn--small-extra" aria-label="Save Bartlett Street #4 Houston TX 77098 as favorite">Save</button>
      <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--dot_dot_dot btn--small-extra" aria-label="More options for Bartlett Street #4 Houston TX 77098"></button>
    </div>
  </div>
  <!-- /card--listing__header -->

  <!-- card--listing__body -->
  <div class="card--listing__body">
    <a href="#">

      <div class="card--listing__body__image_content">
        <div class="card--listing__body__image_content_image" style="background-image: url(https://photos.harstatic.com/153440342/hr/img-1.jpeg?ts=2018-09-13T14:59:06.353);"></div>
      </div>
      <div class="card--listing__body__content">
        <div class="row no-gutters">
          <div class="col-8">
            <div class="color_available font_weight--semi_bold pb-3">20 days at har.com</div>
          </div>
          <div class="col-4 text-right">
            <div class="tag_status tag_status--available">for sale</div>
          </div>
        </div>

        <div class="row no-gutters pb-4">
          <div class="col-8">
            <h4>Bartlett Street #4 Long Title Goes Here</h4>
            <span class="color_slate_light">Houston TX 77098</span>
          </div>
          <div class="col-4 text-right">
            <div class="font_size font_size--large font_weight--bold color_carbon">$420,995</div>
          </div>
        </div>

        <div class="card--listing__body__content__description_row">
          <span class="font_weight--semi_bold color_carbon pr-1">Townhouse Condo</span>
        </div>
        <div class="card--listing__body__content__description_row">
          <span class="font_weight--semi_bold color_carbon pr-1">Townhouse Condo</span>
        </div>
        <div class="card--listing__body__content__description_row">
          <span class="font_weight--semi_bold color_carbon pr-1">2</span> bedrooms
        </div>
        <div class="card--listing__body__content__description_row">
          <span class="font_weight--semi_bold color_carbon pr-1">8</span>Full & <span class="font_weight--semi_bold color_carbon pr-1">4</span> Half Bath(s)
        </div>
        <div class="card--listing__body__content__description_row">
          <span class="font_weight--semi_bold color_carbon pr-1">3</span> Stories
        </div>
        <div class="card--listing__body__content__description_row">
          <span class="font_weight--semi_bold color_carbon pr-1">5,056</span> Building Sqft.
        </div>
        <div class="card--listing__body__content__description_row">
          <span class="font_weight--semi_bold color_carbon pr-1">2,282.19 </span> Acre(s)
        </div>
        <div class="card--listing__body__content__description_row">
          <span class="font_weight--semi_bold color_carbon pr-1">2012 </span> Built Year
        </div>
        <div class="card--listing__body__content__description_row">
          <span class="font_weight--semi_bold color_carbon pr-1">Road Frontage: </span> Highway
        </div>
        <div class="card--listing__body__content__description_row">
          Has Private Pool
        </div>
        <div class="clearfix"></div>
      </div>

    </a>
  </div>
  <!-- /card--listing__body -->

</div>
<!-- /card--listing -->`,

`
<!-- IMPORTANT: Notice this has almost the same HTML code as the landscape one.
Just need to add the class "card--listing--portrait" in the card component
and place it inside a narrow content

Therefore, DO NOT place it inside a container wider than 400 pixels.-->

<div class="row">
  <div class="col col-sm-6 col-12 mb-0 pb-0 ">

    <!-- card--listing -->
    <div class="card card--listing card--listing--portrait">

      <!-- card--listing__header -->
      <div class="row no-gutters card--listing__header">
        <div class="col-7">
          <div class="agent_signature">
            <div class="agent_signature agent_signature__photo">
              <a tabindex="-1" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Shadrick Bogany's profile">
                <img src="https://pics.harstatic.com/agent/312961.jpg" alt="Shadrick Bogany">
              </a>
            </div>
            <div class="agent_signature agent_signature__info">
              <a class="agent_signature agent_signature__info agent_signature__info__agent_name" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Shadrick Bogany's profile" aria-label="View Shadrick Bogany's profile">
                Shadrick Bogany
              </a>
              <br />
              <a class="agent_signature agent_signature__info agent_signature__info__broker_name" href="https://www.har.com/better-homes-and-gardens-real-estate-gary-greene/broker_GGPR11" title="View Better Homes And Gardens Real's page" aria-label="View Better Homes And Gardens Real's page">
                Better Homes And Gardens Real
              </a>
            </div>
          </div>
        </div>
        <div class="col-5 text-right">
          <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--favorite btn--small-extra" aria-label="Save Bartlett Street #4 Houston TX 77098 as favorite">Save</button>
          <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--dot_dot_dot btn--small-extra" aria-label="More options for Bartlett Street #4 Houston TX 77098"></button>
        </div>
      </div>
      <!-- /card--listing__header -->

      <!-- card--listing__body -->
      <div class="card--listing__body">
        <a href="#">

          <div class="card--listing__body__image_content">
            <div class="card--listing__body__image_content_image" style="background-image: url(https://photos.harstatic.com/153440342/hr/img-1.jpeg?ts=2018-09-13T14:59:06.353);"></div>
          </div>
          <div class="card--listing__body__content">
            <div class="row no-gutters">
              <div class="col-8">
                <div class="color_available font_weight--semi_bold pb-3">20 days at har.com</div>
              </div>
              <div class="col-4 text-right">
                <div class="tag_status tag_status--available">for sale</div>
              </div>
            </div>

            <div class="row no-gutters pb-4">
              <div class="col-8">
                <h4>Bartlett Street #4 Long Title Goes Here</h4>
                <span class="color_slate_light">Houston TX 77098</span>
              </div>
              <div class="col-4 text-right">
                <div class="font_size font_size--large font_weight--bold color_carbon">$420,995</div>
              </div>
            </div>

            <div class="card--listing__body__content__description_row">
              <span class="font_weight--semi_bold color_carbon pr-1">Townhouse Condo</span>
            </div>
            <div class="card--listing__body__content__description_row">
              <span class="font_weight--semi_bold color_carbon pr-1">Townhouse Condo</span>
            </div>
            <div class="card--listing__body__content__description_row">
              <span class="font_weight--semi_bold color_carbon pr-1">2</span> bedrooms
            </div>
            <div class="card--listing__body__content__description_row">
              <span class="font_weight--semi_bold color_carbon pr-1">8</span>Full & <span class="font_weight--semi_bold color_carbon pr-1">4</span> Half Bath(s)
            </div>
            <div class="card--listing__body__content__description_row">
              <span class="font_weight--semi_bold color_carbon pr-1">3</span> Stories
            </div>
            <div class="card--listing__body__content__description_row">
              <span class="font_weight--semi_bold color_carbon pr-1">5,056</span> Building Sqft.
            </div>
            <div class="card--listing__body__content__description_row">
              <span class="font_weight--semi_bold color_carbon pr-1">2,282.19 </span> Acre(s)
            </div>
            <div class="card--listing__body__content__description_row">
              <span class="font_weight--semi_bold color_carbon pr-1">2012 </span> Built Year
            </div>
            <div class="card--listing__body__content__description_row">
              <span class="font_weight--semi_bold color_carbon pr-1">Road Frontage: </span> Highway
            </div>
            <div class="card--listing__body__content__description_row">
              Has Private Pool
            </div>
            <div class="clearfix"></div>
          </div>

        </a>
      </div>
      <!-- /card--listing__body -->

    </div>
    <!-- /card--listing -->

  </div>
</div>
`
    ];

  }

  render(){
    return (
      <TemplateDefault
        pageTitle="Listing Cards"
        activeParent="components"
        activeChild="listing_cards">

        <TemplateComponentBlock blockTitle="Landscape" elements={this.elements[0]} codeSnippets={this.codeSnippets[0]} />
        <TemplateComponentBlock blockTitle="Portrait" elements={this.elements[1]} codeSnippets={this.codeSnippets[1]} />


      </TemplateDefault>
    )
  }

}
