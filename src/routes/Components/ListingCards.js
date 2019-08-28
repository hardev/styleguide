import React, {Component} from "react";
import TemplateDefault from '../../components/TemplateDefault';
import TemplateComponentBlock from '../../components/TemplateComponentBlock';


export default class ListingCards extends Component {

  constructor(props) {
    super(props);

    this.elements = [
      `<div class="row">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 tabindex="0">Listing Card(horizental)</h4>
        </div>
      </div>

      <div class="row">
        <div class="col col-sm-12 col-12 mb-0 pb-0 ">
          
          <div class="card card--listing_horizental">
		  	<div class="row no-gutters card--listing_horizental__header">
		  	    <div class="col-7">
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
				<div class="col-5 text-right">
					<button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--heart btn--small-extra">Save</button>
					<button role="button" class="btn btn--ordinary btn--medium btn--small-extra">...</button>
				</div>
			</div> <!-- / card--listing_horizental__header -->
          
	          <div class="card--listing_horizental__body">
			  	<div class="card--listing_horizental__body__image_content">                	
	              	<div class="card--listing_horizental__body__image_content_image" style="background-image: url(https://photos.harstatic.com/153440342/hr/img-1.jpeg?ts=2018-09-13T14:59:06.353);">
	                	<a tabindex="-1" href="#" title="Home prices are so high, pending sales have dropped for 7 months in a row"></a>
					</div>
	            </div>
	            <div class="card--listing_horizental__body__content">
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
	            </div><!-- / card--listing_horizental__body__content -->
	          </div>
          </div><!-- / card card--listing_horizental -->
          
        </div>
      </div>
      `,
    ];


    this.codeSnippets = [

`<!-- Listing Card(horizental) -->
<div class="card card--listing_horizental">
    <div class="row no-gutters card--listing_horizental__header">
        <div class="col-7">
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
        <div class="col-5 text-right">
            <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--heart btn--small-extra">Save</button>
            <button role="button" class="btn btn--ordinary btn--medium btn--small-extra">...</button>
        </div>
    </div>
    <!-- / card--listing_horizental__header -->

    <div class="card--listing_horizental__body">
        <div class="card--listing_horizental__body__image_content">
            <div class="card--listing_horizental__body__image_content_image" style="background-image: url(https://photos.harstatic.com/153440342/hr/img-1.jpeg?ts=2018-09-13T14:59:06.353);">
                <a tabindex="-1" href="#" title="Home prices are so high, pending sales have dropped for 7 months in a row"></a>
            </div>
        </div>
        <div class="card--listing_horizental__body__content">
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
        </div>
        <!-- / card--listing_horizental__body__content -->
    </div>
</div>
<!-- / card card--listing_horizental -->
`,
    ];

  }

  render(){
    return (
      <TemplateDefault
        pageTitle="Listing Cards"
        activeParent="components"
        activeChild="listing_cards">

        <TemplateComponentBlock blockTitle="Listing Cards(horizental)" elements={this.elements[0]} codeSnippets={this.codeSnippets[0]} />
        

      </TemplateDefault>
    )
  }

}
