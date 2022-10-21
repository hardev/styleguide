import React, {Component} from "react";
import TemplateExpanded from '../../components/TemplateExpanded';
import TemplateComponentBlock from '../../components/TemplateComponentBlock';

export default class FindProBlock extends Component {

  constructor(props) {
    super(props);

    this.elements = [      
      `
      <!-- Find a pro block -->
      <div class="cardv2 cardv2--fpro">
      	<div class="cardv2--fpro__info">
      		<a class="agent_signaturev2 agent_signaturev2__large" href="https://www.har.com/shadrick-bogany/agent_BOGANYS">
	            <div class="agent_signaturev2__large__photo" title="View Amy Nabors's profile" style="background-image:url('https://pics.harstatic.com/agent/593161.jpg?ts=2021-03-04T16:45:004981');"></div>
	            <div class="agent_signaturev2__info">
	              <img alt="" style="width:51px;" src="https://content.harstatic.com/media/icons/label-platinum.svg">
	              <div class="agent_signaturev2__info__agent_name" title="View Amy Nabors's profile" aria-label="View Amy Nabors's profile">
	                Amy Nabors
	              </div>	              
	              <div class="agent_signaturev2__info__broker_name" title="View Better Homes And Gardens Real's page" aria-label="View Better Homes And Gardens Real's page">
	                Greenwood King Properties
	              </div>
	            </div>
	        </a>
	        
	        <div class="pro_name">About Robert</div>
	        <div class="pro_pera">Robert Villanueva is a bi-lingual Texas real estate broker with his own firm, Surge Realty. Raised in Queens New York and now living in Houston TX, Robert has an effective combination of Southern charisma and East Coast tenacity. These traits lend him an upper hand in all facets he oversees in residential… <a href="#">Read more</a>
	        </div>
	        
	        <div class="pro_navs">
	        	<button role="button" class="btn btn--primary btn--large pro_navs_item">View profile</button>
	        	<button role="button" class="btn btn--ordinary btn--large pro_navs_item">Ordinary</button>
	        	<div class="btn-group btn-group-toggle pro_navs_item" data-toggle="buttons" style="width:auto;">
	              <label class="btn btn-secondary btn--large active">
	                <input type="radio" name="options" id="option1" autocomplete="off"> Ordinary
	              </label>
	              <label class="btn btn-secondary btn--large text-nowrap">
	                <input type="radio" name="options" id="option2" autocomplete="off"> Listings on Map
	              </label>
	            </div>
			</div>
      	</div>
      	<!--info-->
      	
      	<div class="cardv2--fpro__glns">
      		<div class="glns__title">Homes For Sale</div>
	  		<div class="glns__valvue">3</div>
	  		
	  		<div class="glns__title">Homes For Rent</div>
	  		<div class="glns__valvue">3</div>
	  		
	  		<div class="glns__title">Showings</div>
	  		<div class="glns__valvue">58</div>
	  		
	  		<div class="glns__title">Homes Sold in the last 5 years</div>
	  		<div class="glns__valvue">64</div>
	  		
	  		<div class="glns__title">Homes Leased in the last 5 years</div>
	  		<div class="glns__valvue">93</div>
      	</div>
      	<!--glns: glance-->
      	
      	<div class="cardv2--fpro__rtg">
      		<div class="glns__title pb-4">Client Ratings</div>
      		<div class="font_size--large_extra_extra"><span class="font_weight--bold">4.99</span> / 5</div>
      		<div class="pb-3 mb-4 border-bottom border-color--cloudy-sky-light">
        		<img alt="" class="pb-1 mr-1" src="https://content.harstatic.com/media/icons/stars/star_full.svg" style="width:26px;"><img alt="" class="pb-1 mr-1" src="https://content.harstatic.com/media/icons/stars/star_half_and_quarter.svg" style="width:26px;"><img alt="" class="pb-1 mr-1" src="https://content.harstatic.com/media/icons/stars/star_half.svg" style="width:26px;"><img alt="" class="pb-1 mr-1" src="https://content.harstatic.com/media/icons/stars/star_quarter.svg" style="width:26px;"><img alt="" class="pb-1 mr-1" src="https://content.harstatic.com/media/icons/stars/star_gray.svg" style="width:26px;">
        		<span class="color_auxiliary font_size--small">4.97/5 (44 surveys)</span>
			</div>
      		
      		<div class="color_cement_dark font_size--small mb-2">Seller's feedback on De Palma Lane</div>
      		<div class="color_cement_dark">
      			“Robert has been our guiding light in all of our real estate adventures. His calming demeanor and...” 
      			<br>
      			<a class="color_black font_weight--semi_bold" href="#">View more ratings</a>
      		</div>
      	</div>
      	<!--rtg: ratings-->
      	
      	
      	<div class="pro_navs__resp">
        	<button role="button" class="btn btn--primary btn--large pro_navs_item">View profile</button>
        	<button role="button" class="btn btn--ordinary btn--large pro_navs_item">Ordinary</button>
        	<div class="btn-group btn-group-toggle pro_navs_item" data-toggle="buttons" style="width:auto;">
              <label class="btn btn-secondary btn--large active">
                <input type="radio" name="options" id="option1" autocomplete="off"> Ordinary
              </label>
              <label class="btn btn-secondary btn--large text-nowrap">
                <input type="radio" name="options" id="option2" autocomplete="off"> Listings on Map
              </label>
            </div>
		</div>
      </div>
      <!-- /Find a pro block -->      
      
      
      
      
      
      
      <!-- Find a pro block -->
      <div class="cardv2 cardv2--fpro">
      	<div class="cardv2--fpro__info">
      		<a class="agent_signaturev2 agent_signaturev2__large" href="https://www.har.com/shadrick-bogany/agent_BOGANYS">
	            <div class="agent_signaturev2__large__photo" title="View Amy Nabors's profile" style="background-image:url('https://pics.harstatic.com/agent/593161.jpg?ts=2021-03-04T16:45:004981');"></div>
	            <div class="agent_signaturev2__info">
	              <img alt="" style="width:51px;" src="https://content.harstatic.com/media/icons/label-platinum.svg">
	              <div class="agent_signaturev2__info__agent_name" title="View Amy Nabors's profile" aria-label="View Amy Nabors's profile">
	                Amy Nabors
	              </div>	              
	              <div class="agent_signaturev2__info__broker_name" title="View Better Homes And Gardens Real's page" aria-label="View Better Homes And Gardens Real's page">
	                Greenwood King Properties
	              </div>
	            </div>
	        </a>
	        
	        <div class="pro_name">About Robert</div>
	        <div class="pro_pera">Robert Villanueva is a bi-lingual Texas real estate broker with his own firm, Surge Realty. Raised in Queens New York and now living in Houston TX, Robert has an effective combination of Southern charisma and East Coast tenacity. These traits lend him an upper hand in all facets he oversees in residential… <a href="#">Read more</a>
	        </div>
	        
	        <div class="pro_navs">
	        	<button role="button" class="btn btn--primary btn--large pro_navs_item">View profile</button>
	        	<button role="button" class="btn btn--ordinary btn--large pro_navs_item">Ordinary</button>
	        	<div class="btn-group btn-group-toggle pro_navs_item" data-toggle="buttons" style="width:auto;">
	              <label class="btn btn-secondary btn--large active">
	                <input type="radio" name="options" id="option1" autocomplete="off"> Ordinary
	              </label>
	              <label class="btn btn-secondary btn--large text-nowrap">
	                <input type="radio" name="options" id="option2" autocomplete="off"> Listings on Map
	              </label>
	            </div>
			</div>
      	</div>
      	<!--info-->
      	
      	<div class="cardv2--fpro__glns">
      		<div class="glns__title">Homes For Sale</div>
	  		<div class="glns__valvue">3</div>
	  		
	  		<div class="glns__title">Homes For Rent</div>
	  		<div class="glns__valvue">3</div>
	  		
	  		<div class="glns__title">Showings</div>
	  		<div class="glns__valvue">58</div>
	  		
	  		<div class="glns__title">Homes Sold in the last 5 years</div>
	  		<div class="glns__valvue">64</div>
	  		
	  		<div class="glns__title">Homes Leased in the last 5 years</div>
	  		<div class="glns__valvue">93</div>
      	</div>
      	<!--glns: glance-->
      	
      	<div class="cardv2--fpro__rtg">
      		<div class="glns__title pb-4">Client Ratings</div>
      		<div class="font_size--large_extra_extra"><span class="font_weight--bold">4.99</span> / 5</div>
      		<div class="pb-3 mb-4 border-bottom border-color--cloudy-sky-light">
        		<img alt="" class="pb-1 mr-1" src="https://content.harstatic.com/media/icons/stars/star_full.svg" style="width:26px;"><img alt="" class="pb-1 mr-1" src="https://content.harstatic.com/media/icons/stars/star_half_and_quarter.svg" style="width:26px;"><img alt="" class="pb-1 mr-1" src="https://content.harstatic.com/media/icons/stars/star_half.svg" style="width:26px;"><img alt="" class="pb-1 mr-1" src="https://content.harstatic.com/media/icons/stars/star_quarter.svg" style="width:26px;"><img alt="" class="pb-1 mr-1" src="https://content.harstatic.com/media/icons/stars/star_gray.svg" style="width:26px;">
        		<span class="color_auxiliary font_size--small">4.97/5 (44 surveys)</span>
			</div>
      		
      		<div class="color_cement_dark font_size--small mb-2">Seller's feedback on De Palma Lane</div>
      		<div class="color_cement_dark">
      			“Robert has been our guiding light in all of our real estate adventures. His calming demeanor and...” 
      			<br>
      			<a class="color_black font_weight--semi_bold" href="#">View more ratings</a>
      		</div>
      	</div>
      	<!--rtg: ratings-->
      	
      	
      	<div class="pro_navs__resp">
        	<button role="button" class="btn btn--primary btn--large pro_navs_item">View profile</button>
        	<button role="button" class="btn btn--ordinary btn--large pro_navs_item">Ordinary</button>
        	<div class="btn-group btn-group-toggle pro_navs_item" data-toggle="buttons" style="width:auto;">
              <label class="btn btn-secondary btn--large active">
                <input type="radio" name="options" id="option1" autocomplete="off"> Ordinary
              </label>
              <label class="btn btn-secondary btn--large text-nowrap">
                <input type="radio" name="options" id="option2" autocomplete="off"> Listings on Map
              </label>
            </div>
		</div>
      </div>
      <!-- /Find a pro block -->
      
      `,
    ];


    this.codeSnippets = [
`<!-- hero_landing_page -->
`,

    ];

  }

  render() {

    return (
      <TemplateExpanded
        pageTitle="Broker Header"
        activeParent="template_blocks"
        activeChild="find_pro_block">

        <TemplateComponentBlock hasContainer={false} blockTitle="Find a Pro" elements={this.elements[0]} codeSnippets={this.codeSnippets[0]} />

      </TemplateExpanded>
    )
  }

}
