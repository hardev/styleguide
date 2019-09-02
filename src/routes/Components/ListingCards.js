import React, {Component} from "react";
import TemplateDefault from '../../components/TemplateDefault';
import TemplateComponentBlock from '../../components/TemplateComponentBlock';


export default class ListingCards extends Component {

  constructor(props) {
    super(props);

    this.elements = [
      `<div class="row">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 tabindex="0">Landscape large</h4>
        </div>
      </div>

      <div class="row">
        <div class="col col-sm-12 col-12 mb-0 pb-0 ">

          <!-- card--listing_landscape_medium -->
          <div class="card card--listing_landscape_medium">

            <!-- card--listing_landscape_medium__header -->
            <div class="row no-gutters card--listing_landscape_medium__header">
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
            <!-- /card--listing_landscape_medium__header -->

            <!-- card--listing_landscape_medium__body -->
	          <div class="card--listing_landscape_medium__body">
              <a href="#">

                <div class="card--listing_landscape_medium__body__image_content">
                  <div class="card--listing_landscape_medium__body__image_content_image" style="background-image: url(https://photos.harstatic.com/153440342/hr/img-1.jpeg?ts=2018-09-13T14:59:06.353);"></div>
                </div>
                <div class="card--listing_landscape_medium__body__content">
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
  	              		<h4>Bartlett Street #4</h4>
  	              		<span class="color_slate_light">Houston TX 77098</span>
  	              	</div>
  	              	<div class="col-4 text-right">
  	              		<div class="font_size font_size--large font_weight--bold color_carbon">$420,995</div>
  	              	</div>
  	              </div>

  	              <div class="card--listing_landscape_medium__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">Townhouse Condo</span>
                  </div>
                  <div class="card--listing_landscape_medium__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">Townhouse Condo</span>
                  </div>
                  <div class="card--listing_landscape_medium__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">2</span> bedrooms
                  </div>
                  <div class="card--listing_landscape_medium__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">8</span>Full & <span class="font_weight--semi_bold color_carbon pr-1">4</span> Half Bath(s)
                  </div>
                  <div class="card--listing_landscape_medium__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">3</span> Stories
                  </div>
                  <div class="card--listing_landscape_medium__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">5,056</span> Building Sqft.
                  </div>
                  <div class="card--listing_landscape_medium__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">2,282.19 </span> Acre(s)
                  </div>
                  <div class="card--listing_landscape_medium__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">2012 </span> Built Year
                  </div>
                  <div class="card--listing_landscape_medium__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">Road Frontage: </span> Highway
                  </div>
                  <div class="card--listing_landscape_medium__body__content__description_row">
                	 	Has Private Pool
                  </div>
                  <div class="clearfix"></div>
  	            </div>

              </a>
	          </div>
            <!-- /card--listing_landscape_medium__body -->

          </div>
          <!-- /card--listing_landscape_medium -->

        </div>
      </div>
      `,

      `<div class="row">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 tabindex="0">Portrait</h4>
        </div>
      </div>

      <div class="row">
        <div class="col col-12 col-md-6 mb-0 pb-0 ">

          <div class="card card--listing_vertical">
		  	<div class="row no-gutters card--listing_vertical__header">
		  	    <div class="col-8">
		          	<div class="agent_signature">
					  <div class="agent_signature agent_signature__photo">
					    <a tabindex="-1" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Shadrick Bogany's profile" title="View Shadrick Bogany's profile">
					      <img src="https://pics.harstatic.com/agent/312961.jpg" alt="Shadrick Bogany">
					    </a>
					  </div>
					  <div class="agent_signature agent_signature__info">
					    <a class="agent_signature agent_signature__info agent_signature__info__agent_name" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Shadrick Bogany's profile" aria-label="View Shadrick Bogany's profile">
					      Shadrick Bogany
					    </a>
					    <br />
					    <a class="agent_signature agent_signature__info agent_signature__info__broker_name" href="https://www.har.com/better-homes-and-gardens-real-estate-gary-greene/broker_GGPR11" title="View Shadrick Better Homes And Gardens Real's page" aria-label="View Shadrick Better Homes And Gardens Real's page">
					      Better Homes And Gardens Real
					    </a>
					  </div>
					</div>
				</div>
				<div class="col-4 text-right">
          <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--favorite btn--small-extra" aria-label="Save Bartlett Street #4 Houston TX 77098 as favorite">Save</button>
          <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--dot_dot_dot btn--small-extra" aria-label="More options for Bartlett Street #4 Houston TX 77098"></button>
				</div>
			</div> <!-- / card--listing_vertical__header -->

	          <div class="card--listing_vertical__body">
			  	<div class="card--listing_vertical__body__image_content">
	              	<div class="card--listing_vertical__body__image_content_image" style="background-image: url(https://photos.harstatic.com/153440342/hr/img-1.jpeg?ts=2018-09-13T14:59:06.353);">
	                	<a tabindex="-1" href="#" title="Home prices are so high, pending sales have dropped for 7 months in a row"></a>
					</div>
	            </div>
	            <div class="card--listing_vertical__body__content">
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
	              		<a tabindex="0" href="#" class="font_size font_size--large font_weight--bold color_carbon d-block">Bartlett Street #4</a>
	              		<span class="color_slate_light">Houston TX 77098</span>
	              	</div>
	              	<div class="col-4 text-right">
	              		<div class="font_size font_size--large font_weight--bold color_carbon">$420,995</div>
	              	</div>
	              </div>

	              <div class="card--listing_landscape_medium__body__content__description_row">
              	 	<span class="font_weight--semi_bold color_carbon pr-1">Townhouse Condo</span>
              	  </div>
              	  <div class="card--listing_landscape_medium__body__content__description_row">
              	 	<span class="font_weight--semi_bold color_carbon pr-1">Townhouse Condo</span>
              	  </div>
              	  <div class="card--listing_landscape_medium__body__content__description_row">
              	 	<span class="font_weight--semi_bold color_carbon pr-1">2</span> bedrooms
              	  </div>
              	  <div class="card--listing_landscape_medium__body__content__description_row">
              	 	<span class="font_weight--semi_bold color_carbon pr-1">8</span>Full & <span class="font_weight--semi_bold color_carbon pr-1">4</span> Half Bath(s)
              	  </div>
              	  <div class="card--listing_landscape_medium__body__content__description_row">
              	 	<span class="font_weight--semi_bold color_carbon pr-1">3</span> Stories
              	  </div>
              	  <div class="card--listing_landscape_medium__body__content__description_row">
              	 	<span class="font_weight--semi_bold color_carbon pr-1">5,056</span> Building Sqft.
              	  </div>
              	  <div class="card--listing_landscape_medium__body__content__description_row">
              	 	<span class="font_weight--semi_bold color_carbon pr-1">2,282.19 </span> Acre(s)
              	  </div>
              	  <div class="card--listing_landscape_medium__body__content__description_row">
              	 	<span class="font_weight--semi_bold color_carbon pr-1">2012 </span> Built Year
              	  </div>
              	  <div class="card--listing_landscape_medium__body__content__description_row">
              	 	<span class="font_weight--semi_bold color_carbon pr-1">Road Frontage: </span> Highway
              	  </div>
              	  <div class="card--listing_landscape_medium__body__content__description_row">
              	 	Has Private Pool
              	  </div>
              	  <div class="clearfix"></div>
	            </div><!-- / card--listing_vertical__body__content -->
	          </div>
          </div><!-- / card card--listing_vertical -->

        </div>
      </div>
      `,
    ];


    this.codeSnippets = [

`<!-- card--listing_landscape_medium -->
<div class="card card--listing_landscape_medium">

  <!-- card--listing_landscape_medium__header -->
  <div class="row no-gutters card--listing_landscape_medium__header">
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
  <!-- /card--listing_landscape_medium__header -->

  <!-- card--listing_landscape_medium__body -->
  <div class="card--listing_landscape_medium__body">
    <a href="#">

      <div class="card--listing_landscape_medium__body__image_content">
        <div class="card--listing_landscape_medium__body__image_content_image" style="background-image: url(https://photos.harstatic.com/153440342/hr/img-1.jpeg?ts=2018-09-13T14:59:06.353);"></div>
      </div>
      <div class="card--listing_landscape_medium__body__content">
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
            <h4>Bartlett Street #4</h4>
            <span class="color_slate_light">Houston TX 77098</span>
          </div>
          <div class="col-4 text-right">
            <div class="font_size font_size--large font_weight--bold color_carbon">$420,995</div>
          </div>
        </div>

        <div class="card--listing_landscape_medium__body__content__description_row">
          <span class="font_weight--semi_bold color_carbon pr-1">Townhouse Condo</span>
        </div>
        <div class="card--listing_landscape_medium__body__content__description_row">
          <span class="font_weight--semi_bold color_carbon pr-1">Townhouse Condo</span>
        </div>
        <div class="card--listing_landscape_medium__body__content__description_row">
          <span class="font_weight--semi_bold color_carbon pr-1">2</span> bedrooms
        </div>
        <div class="card--listing_landscape_medium__body__content__description_row">
          <span class="font_weight--semi_bold color_carbon pr-1">8</span>Full & <span class="font_weight--semi_bold color_carbon pr-1">4</span> Half Bath(s)
        </div>
        <div class="card--listing_landscape_medium__body__content__description_row">
          <span class="font_weight--semi_bold color_carbon pr-1">3</span> Stories
        </div>
        <div class="card--listing_landscape_medium__body__content__description_row">
          <span class="font_weight--semi_bold color_carbon pr-1">5,056</span> Building Sqft.
        </div>
        <div class="card--listing_landscape_medium__body__content__description_row">
          <span class="font_weight--semi_bold color_carbon pr-1">2,282.19 </span> Acre(s)
        </div>
        <div class="card--listing_landscape_medium__body__content__description_row">
          <span class="font_weight--semi_bold color_carbon pr-1">2012 </span> Built Year
        </div>
        <div class="card--listing_landscape_medium__body__content__description_row">
          <span class="font_weight--semi_bold color_carbon pr-1">Road Frontage: </span> Highway
        </div>
        <div class="card--listing_landscape_medium__body__content__description_row">
          Has Private Pool
        </div>
        <div class="clearfix"></div>
      </div>

    </a>
  </div>
  <!-- /card--listing_landscape_medium__body -->

</div>
<!-- /card--listing_landscape_medium -->`,

`
<!-- card card--listing_vertical -->
<div class="card card--listing_vertical">
		  	<div class="row no-gutters card--listing_vertical__header">
		  	    <div class="col-8">
		          	<div class="agent_signature">
					  <div class="agent_signature agent_signature__photo">
					    <a tabindex="-1" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Shadrick Bogany's profile">
					      <img src="https://pics.harstatic.com/agent/312961.jpg" alt="Shadrick Bogany">
					    </a>
					  </div>
					  <div class="agent_signature agent_signature__info">
					    <a class="agent_signature agent_signature__info agent_signature__info__agent_name" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Shadrick Bogany's profile">
					      Shadrick Bogany
					    </a>
					    <br />
					    <a class="agent_signature agent_signature__info agent_signature__info__broker_name" href="https://www.har.com/better-homes-and-gardens-real-estate-gary-greene/broker_GGPR11" title="View Shadrick Better Homes And Gardens Real's page">
					      Better Homes And Gardens Real
					    </a>
					  </div>
					</div>
				</div>
				<div class="col-4 text-right">
					<button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--favorite btn--small-extra">Save</button>
					<button role="button" class="btn btn--ordinary btn--medium btn--small-extra">...</button>
				</div>
			</div> <!-- / card--listing_vertical__header -->

	          <div class="card--listing_vertical__body">
			  	<div class="card--listing_vertical__body__image_content">
	              	<div class="card--listing_vertical__body__image_content_image" style="background-image: url(https://photos.harstatic.com/153440342/hr/img-1.jpeg?ts=2018-09-13T14:59:06.353);">
	                	<a tabindex="-1" href="#" title="Home prices are so high, pending sales have dropped for 7 months in a row"></a>
					</div>
	            </div>
	            <div class="card--listing_vertical__body__content">
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
	              		<a tabindex="0" href="#" class="font_size font_size--large font_weight--bold color_carbon d-block">Bartlett Street #4</a>
	              		<span class="color_slate_light">Houston TX 77098</span>
	              	</div>
	              	<div class="col-4 text-right">
	              		<div class="font_size font_size--large font_weight--bold color_carbon">$420,995</div>
	              	</div>
	              </div>

	              <div class="description_row">
              	 	<span class="font_weight--semi_bold color_carbon pr-1">Townhouse Condo</span>
              	  </div>
              	  <div class="description_row">
              	 	<span class="font_weight--semi_bold color_carbon pr-1">Townhouse Condo</span>
              	  </div>
              	  <div class="description_row">
              	 	<span class="font_weight--semi_bold color_carbon pr-1">2</span> bedrooms
              	  </div>
              	  <div class="description_row">
              	 	<span class="font_weight--semi_bold color_carbon pr-1">8</span>Full & <span class="font_weight--semi_bold color_carbon pr-1">4</span> Half Bath(s)
              	  </div>
              	  <div class="description_row">
              	 	<span class="font_weight--semi_bold color_carbon pr-1">3</span> Stories
              	  </div>
              	  <div class="description_row">
              	 	<span class="font_weight--semi_bold color_carbon pr-1">5,056</span> Building Sqft.
              	  </div>
              	  <div class="description_row">
              	 	<span class="font_weight--semi_bold color_carbon pr-1">2,282.19 </span> Acre(s)
              	  </div>
              	  <div class="description_row">
              	 	<span class="font_weight--semi_bold color_carbon pr-1">2012 </span> Built Year
              	  </div>
              	  <div class="description_row">
              	 	<span class="font_weight--semi_bold color_carbon pr-1">Road Frontage: </span> Highway
              	  </div>
              	  <div class="description_row">
              	 	Has Private Pool
              	  </div>
              	  <div class="clearfix"></div>
	            </div><!-- / card--listing_vertical__body__content -->
	          </div>
          </div><!-- / card card--listing_vertical -->`
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
