import React, {Component} from "react";
import TemplateDefault from '../../components/TemplateDefault';
import TemplateComponentBlock from '../../components/TemplateComponentBlock';


export default class ListingCardsPortraitV2 extends Component {

  constructor(props) {
    super(props);

    this.elements = [
      `<div class="row pb-4">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 tabindex="0">Portrait large</h4>
        </div>
      </div>

      <div class="row">
        <div class="col col-md-6 col-12 mb-0 pb-0 text-left ">
        	<!-- card--portrait v2 -->
	        <div class="cardv2 cardv2--portrait" onclick="location.href='http://har.com'; return false;">
	        	<!-- card header -->
	        	<div class="cardv2--portrait__header">
	        		<div class="cardv2--portrait__header_agent">
	        			<a class="agent_signaturev2" href="https://www.har.com/shadrick-bogany/agent_BOGANYS">
				            <div class="agent_signaturev2__photo" title="View Shadrick Bogany's profile" style="background-image:url('https://pics.harstatic.com/agent/312961.jpg');"></div>
				            <div class="agent_signaturev2__info">
				              <div class="agent_signaturev2__info__agent_name" title="View Shadrick Bogany's profile" aria-label="View Shadrick Bogany's profile">
				                Shadrick Bogany
				              </div>
				              <div class="agent_signaturev2__info__broker_name" title="View Better Homes And Gardens Real's page" aria-label="View Better Homes And Gardens Real's page">
				                Better Homes And Gardens Real
				              </div>
				            </div>
				        </a>
	        		</div>
	        		<div class="cardv2--portrait__header_controls">
	        			<a href="#"><img src="https://content.harstatic.com/media/icons/icon-bookmark-off.svg"></a>
	        			<div class="dropdown d-inline-block">
						 <a href="#" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="https://content.harstatic.com/media/icons/icon-more-options.svg"></a>
						  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton" x-placement="bottom-start" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(434px, 41px, 0px);">
						    <a class="dropdown-item" href="#">Action one</a>
						    <a class="dropdown-item" href="#">Action two</a>
						    <a class="dropdown-item" href="#">Action three</a>
						  </div>
						</div>	        			
	        		</div>
	        	</div>
	        	<!-- / card header -->
	        	
	        	<!-- card img -->
	        	<div class="cardv2--portrait__img" style="background-image:url(https://photos.harstatic.com/194227305/lr/img-1.jpeg?ts=2021-08-06T12:35:50.297);"></div>
	        	<!-- / card img -->
	        	
	        	<!-- card body -->
	        	<div class="cardv2--portrait__body">
	        		<div class="cardv2--portrait__body_flexrow">
	        			<div class="cardv2--portrait__body_price">$7,009,00</div>
						<div class="cardv2--portrait__body_status"><div class="label label--forsale">for sale</div></div>
					</div>
					<div class="cardv2--portrait__body_flexrow">
						<div class="cardv2--portrait__body_address">
							9 West Lane<br>
							Houston, TX 77019
						</div>
						<div class="cardv2--portrait__body_dayson">
							<div class="circle_nimber">2</div>  Days on HAR
						</div>
					</div>
					<div class="cardv2--portrait__body_features">
						5 beds · 5 baths · 2 stories<br>
						7,551 built sqft · 1932 year built
					</div>
	        	</div>
	        	<!-- / card img -->
	        </div>
			<!-- / card--portrait v2 -->
			        	
        </div>
      </div>`,
    ];


    this.codeSnippets = [

`
------------------------------------------------------------
Portraut Large
------------------------------------------------------------
<!-- card--portrait v2 -->
<div class="cardv2 cardv2--portrait" onclick="location.href='http://har.com'; return false;">
	<!-- card header -->
	<div class="cardv2--portrait__header">
		<div class="cardv2--portrait__header_agent">
			<a class="agent_signaturev2" href="https://www.har.com/shadrick-bogany/agent_BOGANYS">
	            <div class="agent_signaturev2__photo" title="View Shadrick Bogany's profile" style="background-image:url('https://pics.harstatic.com/agent/312961.jpg');"></div>
	            <div class="agent_signaturev2__info">
	              <div class="agent_signaturev2__info__agent_name" title="View Shadrick Bogany's profile" aria-label="View Shadrick Bogany's profile">
	                Shadrick Bogany
	              </div>
	              <div class="agent_signaturev2__info__broker_name" title="View Better Homes And Gardens Real's page" aria-label="View Better Homes And Gardens Real's page">
	                Better Homes And Gardens Real
	              </div>
	            </div>
	        </a>
		</div>
		<div class="cardv2--portrait__header_controls">
			<a href="#"><img src="https://content.harstatic.com/media/icons/icon-bookmark-off.svg"></a>
			<div class="dropdown d-inline-block">
			 <a href="#" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="https://content.harstatic.com/media/icons/icon-more-options.svg"></a>
			  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton" x-placement="bottom-start" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(434px, 41px, 0px);">
			    <a class="dropdown-item" href="#">Action one</a>
			    <a class="dropdown-item" href="#">Action two</a>
			    <a class="dropdown-item" href="#">Action three</a>
			  </div>
			</div>	        			
		</div>
	</div>
	<!-- / card header -->	
	<!-- card img -->
	<div class="cardv2--portrait__img" style="background-image:url(https://photos.harstatic.com/194227305/lr/img-1.jpeg?ts=2021-08-06T12:35:50.297);"></div>
	<!-- / card img -->	
	<!-- card body -->
	<div class="cardv2--portrait__body">
		<div class="cardv2--portrait__body_flexrow">
			<div class="cardv2--portrait__body_price">$7,009,00</div>
			<div class="cardv2--portrait__body_status"><div class="label label--forsale">for sale</div></div>
		</div>
		<div class="cardv2--portrait__body_flexrow">
			<div class="cardv2--portrait__body_address">
				9 West Lane<br>
				Houston, TX 77019
			</div>
			<div class="cardv2--portrait__body_dayson">
				<div class="circle_nimber">2</div>  Days on HAR
			</div>
		</div>
		<div class="cardv2--portrait__body_features">
			5 beds · 5 baths · 2 stories<br>
			7,551 built sqft · 1932 year built
		</div>
	</div>
	<!-- / card img -->
</div>
<!-- / card--portrait v2 -->

`,
`

`,
`
[you can copy element by element expecter. we will add code here one final version as page is going too scrollable.]
`
    ];

  }

  render(){
    return (
      <TemplateDefault
        pageTitle="Listing Cards Portrait V2"
        activeParent="components"
        activeChild="listing_cards_portrait_v2">

        <TemplateComponentBlock blockTitle="Portrait" elements={this.elements[0]} codeSnippets={this.codeSnippets[0]} />
        

      </TemplateDefault>
    )
  }

}
