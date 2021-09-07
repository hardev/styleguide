import React, {Component} from "react";
import TemplateDefault from '../../components/TemplateDefault';
import TemplateComponentBlock from '../../components/TemplateComponentBlock';


export default class ListingCardsLandscapeV2 extends Component {

  constructor(props) {
    super(props);

    this.elements = [
      `<div class="row pb-4">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h2 class="h2--simple h2--simple__black" tabindex="0">Landscape – List view</h2>
        </div>
      </div>

      <div class="row">
        <div class="col col-12 mb-0 pb-0 text-left ">
        	<!-- card--portrait v2 -->
	        <div class="cardv2 cardv2--landscape">
	        	<a href="https://www.har.com/homedetail/120-carnarvon-dr-houston-tx-77024/3144594">
		        	<!-- card img -->
		        	<div class="cardv2--landscape__image" style="background-image:url(https://photos.harstatic.com/194227305/lr/img-1.jpeg?ts=2021-08-06T12:35:50.297);"></div>
		        	<!-- / card img -->
		        </a>
	        	<!-- card header -->
	        	<div class="cardv2--landscape__content">
	        	<div class="cardv2--landscape__content__header">	
	        		<div class="cardv2--landscape__content__header_agent">
	        			<a class="agent_signaturev2" href="https://www.har.com/shadrick-bogany/agent_BOGANYS">
				            <div class="agent_signaturev2__photo" title="View Michel Hayek's profile" style="background-image:url('https://pics.harstatic.com/agent/639324.jpg?ts=2016-03-18T15:37:007083');"></div>
				            <div class="agent_signaturev2__info">
				              <div class="agent_signaturev2__info__agent_name" title="View Michel Hayek's profile" aria-label="View Michel Hayek's profile">
				                Michel Hayek
				              </div>
				              <div class="agent_signaturev2__info__broker_name" title="View Better Homes And Gardens Real's page" aria-label="View Better Homes And Gardens Real's page">
				                Better Homes And Gardens Real
				              </div>
				            </div>
				        </a>
	        		</div>
	        		<div class="cardv2--landscape__content__header_controls">
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
	        	<a href="https://www.har.com/homedetail/120-carnarvon-dr-houston-tx-77024/3144594">
		        	<!-- card body -->
		        	<div class="cardv2--landscape__content__body">
		        		<div class="cardv2--landscape__content__body_flexrow">
		        			<div class="cardv2--landscape__content__body_price">$7,009,00</div>
							<div class="cardv2--landscape__content__body_status"><div class="label label--forsale">for sale</div></div>
						</div>
						<div class="cardv2--landscape__content__body_address">
							9 West Lane<br>
							Houston, TX 77019
						</div>
						<div class="cardv2--landscape__content__body_features">
							5 beds · 5 baths · 2 stories<br>
							7,551 built sqft · 1932 year built
						</div>
						<div class="cardv2--landscape__content__body_dayson">
							<div class="circle_nimber">2</div>  Days on HAR
						</div>
		        	</div>
		        	<!-- / card body -->
		        </a>	
		        </div>
	        	<!-- / card conetent -->
	        </div>
			<!-- / card--portrait v2 -->
			        	
        </div>
      </div>
      
      
      
      
      <div class="row pb-4 pt-5">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h2 class="h2--simple h2--simple__black" tabindex="0">Landscape – List view w/ labels</h2>
          <h4 class="mb-0" tabindex="0">Just Listed</h4>
        </div>
      </div>

      <div class="row">
        <div class="col col-12 mb-0 pb-0 text-left ">
        	<!-- cardv2--landscape v2 -->
	        <div class="cardv2 cardv2--landscape mb-2">
	        	<a href="https://www.har.com/homedetail/120-carnarvon-dr-houston-tx-77024/3144594">
		        	<!-- card img -->
		        	<div class="cardv2--landscape__image" style="background-image:url(https://photos.harstatic.com/194227305/lr/img-1.jpeg?ts=2021-08-06T12:35:50.297);"></div>
		        	<!-- / card img -->
		        </a>
	        	<!-- card header -->
	        	<div class="cardv2--landscape__content">
	        	<div class="cardv2--landscape__content__header">	
	        		<div class="cardv2--landscape__content__header_agent">
	        			<a class="agent_signaturev2" href="https://www.har.com/shadrick-bogany/agent_BOGANYS">
				            <div class="agent_signaturev2__photo" title="View Michel Hayek's profile" style="background-image:url('https://pics.harstatic.com/agent/639324.jpg?ts=2016-03-18T15:37:007083');"></div>
				            <div class="agent_signaturev2__info">
				              <div class="agent_signaturev2__info__agent_name" title="View Michel Hayek's profile" aria-label="View Michel Hayek's profile">
				                Michel Hayek
				              </div>
				              <div class="agent_signaturev2__info__broker_name" title="View Better Homes And Gardens Real's page" aria-label="View Better Homes And Gardens Real's page">
				                Better Homes And Gardens Real
				              </div>
				            </div>
				        </a>
	        		</div>
	        		<div class="cardv2--landscape__content__header_controls">
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
	        	<a href="https://www.har.com/homedetail/120-carnarvon-dr-houston-tx-77024/3144594">
		        	<!-- card body -->
		        	<div class="cardv2--landscape__content__body">
		        		<div class="cardv2--landscape__content__body_flexrow">
		        			<div class="cardv2--landscape__content__body_price">$7,009,00</div>
							<div class="cardv2--landscape__content__body_status"><div class="label label--forsale">for sale</div></div>
						</div>
						<div class="cardv2--landscape__content__body_address">
							9 West Lane<br>
							Houston, TX 77019
						</div>
						<div class="cardv2--landscape__content__body_features">
							5 beds · 5 baths · 2 stories<br>
							7,551 built sqft · 1932 year built
						</div>
						<div class="cardv2--landscape__content__body_dayson">
							<div class="circle_nimber">2</div>  Days on HAR
						</div>
		        	</div>
		        	<!-- / card body -->
		        </a>	
		        </div>
	        	<!-- / cardv2 conetent -->
	        </div>
	        <div class="cardv2--landscape__footer">
	        	<div class="listingbadges listingbadges--justlisted" style="background-image:url(https://content.harstatic.com/media/icons/icon-listing-just-listed.svg);">Just listed</div>
	        </div>
			<!-- / card--portrait v2 -->
			        	
        </div>
      </div>
      
      
      
      
      
      
      <div class="row pb-4 pt-5">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 class="mb-0" tabindex="0">Price Change</h4>
        </div>
      </div>

      <div class="row">
        <div class="col col-12 mb-0 pb-0 text-left ">
        	<!-- cardv2--landscape v2 -->
	        <div class="cardv2 cardv2--landscape mb-2">
	        	<a href="https://www.har.com/homedetail/120-carnarvon-dr-houston-tx-77024/3144594">
		        	<!-- card img -->
		        	<div class="cardv2--landscape__image" style="background-image:url(https://photos.harstatic.com/194227305/lr/img-1.jpeg?ts=2021-08-06T12:35:50.297);"></div>
		        	<!-- / card img -->
		        </a>
	        	<!-- card header -->
	        	<div class="cardv2--landscape__content">
	        	<div class="cardv2--landscape__content__header">	
	        		<div class="cardv2--landscape__content__header_agent">
	        			<a class="agent_signaturev2" href="https://www.har.com/shadrick-bogany/agent_BOGANYS">
				            <div class="agent_signaturev2__photo" title="View Michel Hayek's profile" style="background-image:url('https://pics.harstatic.com/agent/639324.jpg?ts=2016-03-18T15:37:007083');"></div>
				            <div class="agent_signaturev2__info">
				              <div class="agent_signaturev2__info__agent_name" title="View Michel Hayek's profile" aria-label="View Michel Hayek's profile">
				                Michel Hayek
				              </div>
				              <div class="agent_signaturev2__info__broker_name" title="View Better Homes And Gardens Real's page" aria-label="View Better Homes And Gardens Real's page">
				                Better Homes And Gardens Real
				              </div>
				            </div>
				        </a>
	        		</div>
	        		<div class="cardv2--landscape__content__header_controls">
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
	        	<a href="https://www.har.com/homedetail/120-carnarvon-dr-houston-tx-77024/3144594">
		        	<!-- card body -->
		        	<div class="cardv2--landscape__content__body">
		        		<div class="cardv2--landscape__content__body_flexrow">
		        			<div class="cardv2--landscape__content__body_price">$7,009,00 <span class="price_changed" id="PricePopover" data-trigger="focus" data-custom-class="price_popover" data-toggle="popover" class="color_pending d-inline-block"><img src="https://content.harstatic.com/media/icons/icon-price-reduction.svg">1.24%</span>								
		        			</div>
							<div class="cardv2--landscape__content__body_status"><div class="label label--forsale">for sale</div></div>
						</div>
						<div class="cardv2--landscape__content__body_address">
							9 West Lane<br>
							Houston, TX 77019
						</div>
						<div class="cardv2--landscape__content__body_features">
							5 beds · 5 baths · 2 stories<br>
							7,551 built sqft · 1932 year built
						</div>
						<div class="cardv2--landscape__content__body_dayson">
							<div class="circle_nimber">2</div>  Days on HAR
						</div>
		        	</div>
		        	<!-- / card body -->
		        </a>	
		        </div>
	        	<!-- / cardv2 conetent -->
	        </div>
	        <div class="cardv2--landscape__footer">
	        	<div class="listingbadges listingbadges--pricereduction" style="background-image:url(https://content.harstatic.com/media/icons/icon-price-reduction.svg);">Price Reduction</div>
	        </div>
			<!-- / card--portrait v2 -->
			        	
        </div>
      </div>      
    
    
    
    
    
    
	  <div class="row pb-4 pt-5">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 class="mb-0" tabindex="0">W/ all labels</h4>
        </div>
      </div>

      <div class="row">
        <div class="col col-12 mb-0 pb-0 text-left ">
        	<!-- card--portrait v2 -->
	        <div class="cardv2 cardv2--landscape mb-2">
	        	<a href="https://www.har.com/homedetail/120-carnarvon-dr-houston-tx-77024/3144594">
		        	<!-- card img -->
		        	<div class="cardv2--landscape__image" style="background-image:url(https://photos.harstatic.com/194227305/lr/img-1.jpeg?ts=2021-08-06T12:35:50.297);"></div>
		        	<!-- / card img -->
		        </a>
	        	<!-- card header -->
	        	<div class="cardv2--landscape__content">
	        	<div class="cardv2--landscape__content__header">	
	        		<div class="cardv2--landscape__content__header_agent">
	        			<a class="agent_signaturev2" href="https://www.har.com/shadrick-bogany/agent_BOGANYS">
				            <div class="agent_signaturev2__photo" title="View Michel Hayek's profile" style="background-image:url('https://pics.harstatic.com/agent/639324.jpg?ts=2016-03-18T15:37:007083');"></div>
				            <div class="agent_signaturev2__info">
				              <div class="agent_signaturev2__info__agent_name" title="View Michel Hayek's profile" aria-label="View Michel Hayek's profile">
				                Michel Hayek
				              </div>
				              <div class="agent_signaturev2__info__broker_name" title="View Better Homes And Gardens Real's page" aria-label="View Better Homes And Gardens Real's page">
				                Better Homes And Gardens Real
				              </div>
				            </div>
				        </a>
	        		</div>
	        		<div class="cardv2--landscape__content__header_controls">
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
	        	<a href="https://www.har.com/homedetail/120-carnarvon-dr-houston-tx-77024/3144594">
		        	<!-- card body -->
		        	<div class="cardv2--landscape__content__body">
		        		<div class="cardv2--landscape__content__body_flexrow">
		        			<div class="cardv2--landscape__content__body_price">$7,009,00</div>
							<div class="cardv2--landscape__content__body_status"><div class="label label--forsale">for sale</div></div>
						</div>
						<div class="cardv2--landscape__content__body_address">
							9 West Lane<br>
							Houston, TX 77019
						</div>
						<div class="cardv2--landscape__content__body_features">
							5 beds · 5 baths · 2 stories<br>
							7,551 built sqft · 1932 year built
						</div>
						<div class="cardv2--landscape__content__body_dayson">
							<div class="circle_nimber">2</div>  Days on HAR
						</div>
		        	</div>
		        	<!-- / card body -->
		        </a>	
		        </div>
	        	<!-- / card conetent -->
	        </div>
	        <div class="cardv2--landscape__footer">	        	
	        	<div class="listingbadges listingbadges--justlisted" style="background-image:url(https://content.harstatic.com/media/icons/icon-listing-just-listed.svg);">Just listed</div>
	        	<div class="listingbadges listingbadges--pricereduction" style="background-image:url(https://content.harstatic.com/media/icons/icon-price-reduction.svg);">Price Reduction</div>
	        	<div class="listingbadges listingbadges--newconstruction" style="background-image:url(https://content.harstatic.com/media/icons/icon-new-construction.svg);">New construction</div>
	        	<div class="listingbadges listingbadges--openhouse_simple" style="background-image:url(https://content.harstatic.com/media/icons/icon-open-house.svg);">Open House</div>
	        	<div class="listingbadges listingbadges--foreclosure" style="background-image:url(https://content.harstatic.com/media/icons/icon-foreclosure.svg);">Foreclosure</div>
	        </div>	        
			<!-- / card--portrait v2 -->
			        	
        </div>
      </div>
      
      
      
      
      
      
      <div class="row pb-4 pt-5">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 class="mb-0" tabindex="0">W/ assigned schools info</h4>
        </div>
      </div>

      <div class="row">
        <div class="col col-12 mb-0 pb-0 text-left ">
        	<!-- card--portrait v2 -->
	        <div class="cardv2 cardv2--landscape">
	        	<a href="https://www.har.com/homedetail/120-carnarvon-dr-houston-tx-77024/3144594">
		        	<!-- card img -->
		        	<div class="cardv2--landscape__image" style="background-image:url(https://photos.harstatic.com/194227305/lr/img-1.jpeg?ts=2021-08-06T12:35:50.297);"></div>
		        	<!-- / card img -->
		        </a>
	        	<!-- card header -->
	        	<div class="cardv2--landscape__content">
	        	<div class="cardv2--landscape__content__header">	
	        		<div class="cardv2--landscape__content__header_agent">
	        			<a class="agent_signaturev2" href="https://www.har.com/shadrick-bogany/agent_BOGANYS">
				            <div class="agent_signaturev2__photo" title="View Michel Hayek's profile" style="background-image:url('https://pics.harstatic.com/agent/639324.jpg?ts=2016-03-18T15:37:007083');"></div>
				            <div class="agent_signaturev2__info">
				              <div class="agent_signaturev2__info__agent_name" title="View Michel Hayek's profile" aria-label="View Michel Hayek's profile">
				                Michel Hayek
				              </div>
				              <div class="agent_signaturev2__info__broker_name" title="View Better Homes And Gardens Real's page" aria-label="View Better Homes And Gardens Real's page">
				                Better Homes And Gardens Real
				              </div>
				            </div>
				        </a>
	        		</div>
	        		<div class="cardv2--landscape__content__header_controls">
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
	        	<a href="https://www.har.com/homedetail/120-carnarvon-dr-houston-tx-77024/3144594">
		        	<!-- card body -->
		        	<div class="cardv2--landscape__content__body">
		        		<div class="cardv2--landscape__content__body_flexrow">
		        			<div class="cardv2--landscape__content__body_price">$7,009,00</div>
							<div class="cardv2--landscape__content__body_status"><div class="label label--forsale">for sale</div></div>
						</div>
						<div class="cardv2--landscape__content__body_address">
							9 West Lane<br>
							Houston, TX 77019
						</div>
						<div class="cardv2--landscape__content__body_features">
							5 beds · 5 baths · 2 stories<br>
							7,551 built sqft · 1932 year built
						</div>
						<div class="cardv2--landscape__content__body_flexrow">
							<div class="cardv2--landscape__content__body_impovement" onclick="location.href='http://har.com'; return false;">								
			                  	<span class="title">Zone / Assigned schools:</span> Settlers Way Elementary School, First Colony Middle School, ClementsSchool
			                </div>
							<div class="cardv2--landscape__content__body_dayson">
								<div class="circle_nimber">2</div>  Days on HAR
							</div>
						</div>
		        	</div>
		        	<!-- / card body -->
		        </a>	
		        </div>
	        	<!-- / card conetent -->
	        </div>   
			<!-- / card--portrait v2 -->
			        	
        </div>
      </div>





	<div class="row pb-4 pt-5">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 class="mb-0" tabindex="0">Sold Listings</h4>
        </div>
      </div>

      <div class="row">
        <div class="col col-12 mb-0 pb-0 text-left ">
        	<!-- card--portrait v2 -->
	        <div class="cardv2 cardv2--landscape">
	        	<a href="https://www.har.com/homedetail/120-carnarvon-dr-houston-tx-77024/3144594">
		        	<!-- card img -->
		        	<div class="cardv2--landscape__image" style="background-image:url(https://photos.harstatic.com/194227305/lr/img-1.jpeg?ts=2021-08-06T12:35:50.297);"></div>
		        	<!-- / card img -->
		        </a>
	        	<!-- card header -->
	        	<div class="cardv2--landscape__content">
	        	<div class="cardv2--landscape__content__header">	
	        		<div class="cardv2--landscape__content__header_agent">
	        			<a class="agent_signaturev2" href="https://www.har.com/shadrick-bogany/agent_BOGANYS">
				            <div class="agent_signaturev2__photo" title="View Michel Hayek's profile" style="background-image:url('https://pics.harstatic.com/agent/639324.jpg?ts=2016-03-18T15:37:007083');"></div>
				            <div class="agent_signaturev2__info">
				              <div class="agent_signaturev2__info__agent_name" title="View Michel Hayek's profile" aria-label="View Michel Hayek's profile">
				                Michel Hayek
				              </div>
				              <div class="agent_signaturev2__info__broker_name" title="View Better Homes And Gardens Real's page" aria-label="View Better Homes And Gardens Real's page">
				                Better Homes And Gardens Real
				              </div>
				            </div>
				        </a>
	        		</div>
	        		<div class="cardv2--landscape__content__header_controls">
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
	        	<a href="https://www.har.com/homedetail/120-carnarvon-dr-houston-tx-77024/3144594">
		        	<!-- card body -->
		        	<div class="cardv2--landscape__content__body">
		        		<div class="cardv2--landscape__content__body_flexrow">
		        			<div class="cardv2--landscape__content__body_price">$7,009,00</div>
							<div class="cardv2--landscape__content__body_status"><div class="label label--sold">Sold</div></div>
						</div>
						<div class="cardv2--landscape__content__body_address">
							9 West Lane<br>
							Houston, TX 77019
						</div>
						<div class="cardv2--landscape__content__body_features">
							5 beds · 5 baths · 2 stories<br>
							7,551 built sqft · 1932 year built
						</div>
						<div class="cardv2--landscape__content__body_flexrow">
							<div class="cardv2--landscape__content__body_soldtext">Sold: 06 June, 2021</div>
							<div class="cardv2--landscape__content__body_dayson">
								<div class="circle_nimber">2</div>  Days on HAR
							</div>
						</div>
		        	</div>
		        	<!-- / card body -->
		        </a>	
		        </div>
	        	<!-- / card conetent -->
	        </div>   
			<!-- / card--portrait v2 -->
			        	
        </div>
      </div>




	  <div class="row pb-4 pt-5">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 class="mb-0" tabindex="0">Without agent</h4>
        </div>
      </div>

      <div class="row">
        <div class="col col-12 mb-0 pb-0 text-left ">
        	<!-- card--portrait v2 -->
	        <div class="cardv2 cardv2--landscape without_agent">
	        	<a href="https://www.har.com/homedetail/120-carnarvon-dr-houston-tx-77024/3144594">
		        	<!-- card img -->
		        	<div class="cardv2--landscape__image" style="background-image:url(https://photos.harstatic.com/194227305/lr/img-1.jpeg?ts=2021-08-06T12:35:50.297);"></div>
		        	<!-- / card img -->
		        </a>
	        	<!-- card header -->
	        	<div class="cardv2--landscape__content">
	        	<div class="cardv2--landscape__content__header pb-0">	
	        		<div class="cardv2--landscape__content__header_agent">
	        			<div class="cardv2--landscape__content__body_price">$7,009,00</div>
	        		</div>
	        		<div class="cardv2--landscape__content__header_controls">
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
	        	<a href="https://www.har.com/homedetail/120-carnarvon-dr-houston-tx-77024/3144594">
		        	<!-- card body -->
		        	<div class="cardv2--landscape__content__body border-0 pt-1">
		        		<div class="cardv2--landscape__content__body_flexrow">
		        			<div class="cardv2--landscape__content__body_address pt-0">
								9 West Lane<br>
								Houston, TX 77019
							</div>
							<div class="cardv2--landscape__content__body_status pt-3"><div class="label label--forsale">for sale</div></div>
						</div>						
						<div class="cardv2--landscape__content__body_features">
							5 beds · 5 baths · 2 stories<br>
							7,551 built sqft · 1932 year built
						</div>
						<div class="pb-md-5 pb-2"><!-- this block will be only if no agent signature --></div>
						<div class="cardv2--landscape__content__body_flexrow">
							<div class="cardv2--landscape__content__body_dayson">
								<div class="circle_nimber">2</div>  Days on HAR
							</div>
						</div>
		        	</div>
		        	<!-- / card body -->
		        </a>	
		        </div>
	        	<!-- / card conetent -->
	        </div>   
			<!-- / card--portrait v2 -->
			        	
        </div>
      </div>


    `,
    ];


    this.codeSnippets = [

`
------------------------------------------------------------
Portraut Large
------------------------------------------------------------
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
        pageTitle="Listing Cards Landscape V2"
        activeParent="components"
        activeChild="listing_cards_landscape_v2">

        <TemplateComponentBlock blockTitle="Landscape" elements={this.elements[0]} codeSnippets={this.codeSnippets[0]} />
        

      </TemplateDefault>
    )
  }

}
