import React, {Component} from "react";
import TemplateDefault from '../../components/TemplateDefault';
import TemplateComponentBlock from '../../components/TemplateComponentBlock';


export default class ListingCardsPortraitV2 extends Component {

  constructor(props) {
    super(props);

    this.elements = [
      `<div class="row">
        <div class="col col-md-6 col-12 mb-0 pb-0 text-left ">
        	<h4 tabindex="0">Portrait Default</h4>
        
        
        	<!-- card--portrait v2 -->
	        <div class="cardv2 cardv2--portrait">
	        	<!-- card select -->
	        	<div class="cardv2--portrait__select">
	        		<button role="button" class="btn btn--primary btn--small">Add to compare</button>
	        	</div>
	        	<!-- card header -->
	        	<div class="cardv2--portrait__header">
	        		<div class="cardv2--portrait__header_agent">
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
	        		<div class="cardv2--portrait__header_controls">
	        			<button type="button" class="btn btn--icon--borderless btn--icon btn--icon--favorite"></button>
	        			<!-- dropdown with icons -->
			    		<div class="dropdown dropdown--custom  d-inline-block">
						 <button type="button" class="btn btn--icon--borderless btn--icon btn--icon--dot_dot_dot" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
						  <div class="dropdown-menu dropdown-menu__withicons dropdown-menu-right" aria-labelledby="dropdownMenuButton" x-placement="bottom-start">
						    <a class="dropdown-item" href="#">
						    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/dropdown_copy.svg"></div>
						    	<div class="dropdown-item__text">
						    		<div class="dropdown-item__text__title">Copy link</div>
						    	</div>
						    </a>
						    <a class="dropdown-item" href="#">
						    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/dropdown_share.svg"></div>
						    	<div class="dropdown-item__text">
						    		<div class="dropdown-item__text__title">Share listing</div>
						    		<div class="dropdown-item__text__desc">Share listing</div>
						    	</div>
						    </a>
						    <a class="dropdown-item" href="#">
						    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/dropdown_hide.svg"></div>
						    	<div class="dropdown-item__text">
						    		<div class="dropdown-item__text__title">Hide listing</div>
						    		<div class="dropdown-item__text__desc">See fewer listings like this</div>
						    	</div>
						    </a>
						    <a class="dropdown-item" href="#">
						    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/dropdown_report.svg"></div>
						    	<div class="dropdown-item__text">
						    		<div class="dropdown-item__text__title">Report this listing</div>
						    		<div class="dropdown-item__text__desc">Report this listing</div>
						    	</div>
						    </a>
						  </div>
						</div>
						<!-- / dropdown with icons -->	        			
	        		</div>
	        	</div>
	        	<!-- / card header -->
	        	
	        	<!-- card img -->
	        	<a href="#">
	        		<div class="cardv2--portrait__img" style="background-image:url(https://photos.harstatic.com/194227305/lr/img-1.jpeg?ts=2021-08-06T12:35:50.297);"></div>
				</a>
	        	<!-- / card img -->
	        	
	        	<!-- card body -->
	        	<a href="#">
	        	<div class="cardv2--portrait__body">
	        		<div class="cardv2--portrait__body_flexrow">
	        			<div class="cardv2--portrait__body_price">$7,009,00</div>
						<div class="cardv2--portrait__body_status"><div class="label label--forsale">Active</div></div>
					</div>
					<div class="cardv2--portrait__body_flexrow">
						<div class="cardv2--portrait__body_address">
							14302 Laurus Estates Lane<br>
							Cypress, TX 77429
						</div>						
					</div>
					<div class="cardv2--portrait__body_features">
						<ul>
							<li>Residential - Single Family</li>
							<li><span>6</span> beds</li>
							<li><span>1</span> full & <span>4</span> half baths</li>
							<li><span>3</span> stories</li>
							<li><span>8,741</span> built sqft</li>
							<li><span>1986</span> year built</li>
						</ul>
					</div>
					<div class="cardv2--portrait__body_dayson">
						<div class="circle_nimber">2</div>  Days on HAR
					</div>
	        	</div>
	        	</a>
	        	<!-- / card img -->
	        </div>
			<!-- / card--portrait v2 -->
			
			<br><br>
			
			
			<h4 tabindex="0">W/ Labels</h4>
			<!-- card--portrait v2 -->
	        <div class="cardv2 cardv2--portrait mb-2">
	        	<!-- card select -->
	        	<div class="cardv2--portrait__select">
	        		<button role="button" class="btn btn--primary btn--small">Add to compare</button>
	        	</div>
	        	<!-- card header -->
	        	<div class="cardv2--portrait__header">
	        		<div class="cardv2--portrait__header_agent">
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
	        		<div class="cardv2--portrait__header_controls">
	        			<button type="button" class="btn btn--icon--borderless btn--icon btn--icon--favorited"></button>
	        			<!-- dropdown with icons -->
			    		<div class="dropdown dropdown--custom  d-inline-block">
						 <button type="button" class="btn btn--icon--borderless btn--icon btn--icon--dot_dot_dot" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
						  <div class="dropdown-menu dropdown-menu__withicons dropdown-menu-right" aria-labelledby="dropdownMenuButton" x-placement="bottom-start">
						    <a class="dropdown-item" href="#">
						    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/dropdown_copy.svg"></div>
						    	<div class="dropdown-item__text">
						    		<div class="dropdown-item__text__title">Copy link</div>
						    	</div>
						    </a>
						    <a class="dropdown-item" href="#">
						    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/dropdown_share.svg"></div>
						    	<div class="dropdown-item__text">
						    		<div class="dropdown-item__text__title">Share listing</div>
						    		<div class="dropdown-item__text__desc">Share listing</div>
						    	</div>
						    </a>
						    <a class="dropdown-item" href="#">
						    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/dropdown_hide.svg"></div>
						    	<div class="dropdown-item__text">
						    		<div class="dropdown-item__text__title">Hide listing</div>
						    		<div class="dropdown-item__text__desc">See fewer listings like this</div>
						    	</div>
						    </a>
						    <a class="dropdown-item" href="#">
						    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/dropdown_report.svg"></div>
						    	<div class="dropdown-item__text">
						    		<div class="dropdown-item__text__title">Report this listing</div>
						    		<div class="dropdown-item__text__desc">Report this listing</div>
						    	</div>
						    </a>
						  </div>
						</div>
						<!-- / dropdown with icons -->	        			
	        		</div>
	        	</div>
	        	<!-- / card header -->
	        	
	        	<!-- card img -->
	        	<a href="#">
	        		<div class="cardv2--portrait__img" style="background-image:url(https://photos.harstatic.com/194227305/lr/img-1.jpeg?ts=2021-08-06T12:35:50.297);"></div>
				</a>
	        	<!-- / card img -->
	        	
	        	<!-- card body -->
	        	<a href="#">
	        	<div class="cardv2--portrait__body">
	        		<div class="cardv2--portrait__body_flexrow">
	        			<div class="cardv2--portrait__body_price">$7,009,00</div>
						<div class="cardv2--portrait__body_status"><div class="label label--forsale">Active</div></div>
					</div>
					<div class="cardv2--portrait__body_flexrow">
						<div class="cardv2--portrait__body_address">
							3914 Normandy Ave<br>
							Highland Park, TX 75205
						</div>						
					</div>
					<div class="cardv2--portrait__body_features">
						<ul>
							<li>Residential - Single Family</li>
							<li><span>6</span> beds</li>
							<li><span>1</span> full & <span>4</span> half baths</li>
							<li><span>3</span> stories</li>
							<li><span>8,741</span> built sqft</li>
							<li><span>1986</span> year built</li>
						</ul>
					</div>
					<div class="cardv2--portrait__body_dayson">
						<div class="circle_nimber">2</div>  Days on HAR
					</div>
					<div class="cardv2--portrait__body_badges">	        	
			        	<div class="listingbadges listingbadges--justlisted" style="background-image:url(https://content.harstatic.com/media/icons/icon-listing-just-listed.svg);">Just listed</div>
			        	<div class="listingbadges listingbadges--pricereduction" style="background-image:url(https://content.harstatic.com/media/icons/icon-price-reduction.svg);">Price Change</div>
			        	<div class="listingbadges listingbadges--newconstruction" style="background-image:url(https://content.harstatic.com/media/icons/icon-new-construction.svg);">New construction</div>
			        </div>
	        	</div>
	        	</a>
	        	<!-- / card img -->
	        </div>	        
			<!-- / card--portrait v2 -->
			
			
			<br><br>
			
			
			<h4 tabindex="0">W/ Schools</h4>
			
			
			<!-- card--portrait v2 -->
	        <div class="cardv2 cardv2--portrait">
	        	<!-- card select -->
	        	<div class="cardv2--portrait__select">
	        		<button role="button" class="btn btn--primary btn--small">Add to compare</button>
	        	</div>	        	
	        	<!-- card header -->
	        	<div class="cardv2--portrait__header">
	        		<div class="cardv2--portrait__header_agent">
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
	        		<div class="cardv2--portrait__header_controls">
	        			<button type="button" class="btn btn--icon--borderless btn--icon btn--icon--favorite"></button>
	        			<!-- dropdown with icons -->
			    		<div class="dropdown dropdown--custom  d-inline-block">
						 <button type="button" class="btn btn--icon--borderless btn--icon btn--icon--dot_dot_dot" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
						  <div class="dropdown-menu dropdown-menu__withicons dropdown-menu-right" aria-labelledby="dropdownMenuButton" x-placement="bottom-start">
						    <a class="dropdown-item" href="#">
						    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/dropdown_copy.svg"></div>
						    	<div class="dropdown-item__text">
						    		<div class="dropdown-item__text__title">Copy link</div>
						    	</div>
						    </a>
						    <a class="dropdown-item" href="#">
						    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/dropdown_share.svg"></div>
						    	<div class="dropdown-item__text">
						    		<div class="dropdown-item__text__title">Share listing</div>
						    		<div class="dropdown-item__text__desc">Share listing</div>
						    	</div>
						    </a>
						    <a class="dropdown-item" href="#">
						    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/dropdown_hide.svg"></div>
						    	<div class="dropdown-item__text">
						    		<div class="dropdown-item__text__title">Hide listing</div>
						    		<div class="dropdown-item__text__desc">See fewer listings like this</div>
						    	</div>
						    </a>
						    <a class="dropdown-item" href="#">
						    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/dropdown_report.svg"></div>
						    	<div class="dropdown-item__text">
						    		<div class="dropdown-item__text__title">Report this listing</div>
						    		<div class="dropdown-item__text__desc">Report this listing</div>
						    	</div>
						    </a>
						  </div>
						</div>
						<!-- / dropdown with icons -->		        			
	        		</div>
	        	</div>
	        	<!-- / card header -->
	        	
	        	<!-- card img -->
	        	<a href="https://www.har.com/homedetail/120-carnarvon-dr-houston-tx-77024/3144594">
	        		<div class="cardv2--portrait__img" style="background-image:url(https://photos.harstatic.com/194227305/lr/img-1.jpeg?ts=2021-08-06T12:35:50.297);"></div>
				</a>
	        	<!-- / card img -->
	        	
	        	<!-- card body -->
	        	<a href="https://www.har.com/homedetail/120-carnarvon-dr-houston-tx-77024/3144594">
	        	<div class="cardv2--portrait__body">
	        		<div class="cardv2--portrait__body_flexrow">
	        			<div class="cardv2--portrait__body_price">$7,009,00</div>
						<div class="cardv2--portrait__body_status"><div class="label label--forsale">Active</div></div>
					</div>
					<div class="cardv2--portrait__body_flexrow">
						<div class="cardv2--portrait__body_address">
							3914 Normandy Ave<br>
							Highland Park, TX 75205
						</div>
					</div>
					<div class="cardv2--portrait__body_features">
						<div class="cardv2--portrait__body_features">
							<ul>
								<li>Residential - Single Family</li>
								<li><span>6</span> beds</li>
								<li><span>1</span> full & <span>4</span> half baths</li>
								<li><span>3</span> stories</li>
								<li><span>8,741</span> built sqft</li>
								<li><span>1986</span> year built</li>
							</ul>
						</div>
						<div class="cardv2--portrait__body_dayson">
							<div class="circle_nimber">2</div>  Days on HAR
						</div>
					</div>					
	        	</div>
	        	</a>
	        	<div class="cardv2--portrait_impovement" onclick="location.href='http://har.com'; return false;">								
                  	<div class="title">Zone / Assigned schools:</div> 
                  	<a href="#1" class="d-block color_har_blue">Settlers Way Elementary School</a>
                  	<a href="#2" class="d-block color_har_blue">First Colony Middle School</a>
                  	<a href="#3" class="d-block color_har_blue">ClementsSchool</a>
                </div>	        	
	        	<!-- / card img -->
	        </div>
			<!-- / card--portrait v2 -->
			
			<br><br>
			
			
			
			<!-- card--portrait v2 -->
	        <div class="cardv2 cardv2--portrait">
	        	<!-- card select -->
	        	<div class="cardv2--portrait__select">
	        		<button role="button" class="btn btn--primary btn--small">Add to compare</button>
	        	</div>	        	
	        	<!-- card header -->
	        	<div class="cardv2--portrait__header">
	        		<div class="cardv2--portrait__header_title text-truncate font_size--medium">
	        			Cosmopolitan: <span class=" font_weight--regular">Buyer</span>
	        		</div>
	        		<div class="cardv2--portrait__header_controls">
	        			<button type="button" class="btn btn--icon--borderless btn--icon btn--icon--favorite"></button>
	        			<!-- dropdown with icons -->
			    		<div class="dropdown dropdown--custom  d-inline-block">
						 <button type="button" class="btn btn--icon--borderless btn--icon btn--icon--dot_dot_dot" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
						  <div class="dropdown-menu dropdown-menu__withicons dropdown-menu-right" aria-labelledby="dropdownMenuButton" x-placement="bottom-start">
						    <a class="dropdown-item" href="#">
						    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/dropdown_copy.svg"></div>
						    	<div class="dropdown-item__text">
						    		<div class="dropdown-item__text__title">Copy link</div>
						    	</div>
						    </a>
						    <a class="dropdown-item" href="#">
						    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/dropdown_share.svg"></div>
						    	<div class="dropdown-item__text">
						    		<div class="dropdown-item__text__title">Share listing</div>
						    		<div class="dropdown-item__text__desc">Share listing</div>
						    	</div>
						    </a>
						    <a class="dropdown-item" href="#">
						    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/dropdown_hide.svg"></div>
						    	<div class="dropdown-item__text">
						    		<div class="dropdown-item__text__title">Hide listing</div>
						    		<div class="dropdown-item__text__desc">See fewer listings like this</div>
						    	</div>
						    </a>
						    <a class="dropdown-item" href="#">
						    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/dropdown_report.svg"></div>
						    	<div class="dropdown-item__text">
						    		<div class="dropdown-item__text__title">Report this listing</div>
						    		<div class="dropdown-item__text__desc">Report this listing</div>
						    	</div>
						    </a>
						  </div>
						</div>
						<!-- / dropdown with icons -->		        			
	        		</div>
	        	</div>
	        	<!-- / card header -->
	        	
	        	<!-- card img -->
	        	<a href="#">
	        		<div class="cardv2--portrait__img" style="background-image:url(https://photos.harstatic.com/194227305/lr/img-1.jpeg?ts=2021-08-06T12:35:50.297);"></div>
				</a>
	        	<!-- / card img -->
	        	
	        	<!-- card body -->
	        	<a href="#">
	        	<div class="cardv2--portrait__body">
	        		<div class="cardv2--portrait__body_flexrow">
	        			<div class="cardv2--portrait__body_price">$285K - $325K</div>
						<div class="cardv2--portrait__body_status"><div class="label label--sold">Sold</div></div>
					</div>
					<div class="cardv2--portrait__body_flexrow">
						<div class="cardv2--portrait__body_address">
							9 West Lane<br>
							Houston, TX 77019
						</div>
					</div>
					<div class="cardv2--portrait__body_features">
						<div class="cardv2--portrait__body_features">
							<ul>
								<li>Residential - Single Family</li>
								<li><span>6</span> beds</li>
								<li><span>1</span> full & <span>4</span> half baths</li>
								<li><span>3</span> stories</li>
								<li><span>8,741</span> built sqft</li>
								<li><span>1986</span> year built</li>
							</ul>
							<div class="cardv2--portrait__body_soldtext">Sold: 06 June, 2021</div>
						</div>
						<div class="cardv2--portrait__body_dayson">
							<div class="circle_nimber">2</div>  Days on HAR
						</div>
					</div>
					
	        	</div>
	        	</a>
	        	<!-- / card img -->
	        </div>
			<!-- / card--portrait v2 -->
			
			<br><br>
			
			
			
			<h4 tabindex="0">W/ Lotinformation</h4>
			
			
			<!-- card--portrait v2 -->
	        <div class="cardv2 cardv2--portrait">
	        	<!-- card select -->
	        	<div class="cardv2--portrait__select">
	        		<button role="button" class="btn btn--primary btn--small">Add to compare</button>
	        	</div>	        	
	        	<!-- card header -->
	        	<div class="cardv2--portrait__header">
	        		<div class="cardv2--portrait__header_agent">
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
	        		<div class="cardv2--portrait__header_controls">
	        			<button type="button" class="btn btn--icon--borderless btn--icon btn--icon--favorite"></button>
	        			<!-- dropdown with icons -->
			    		<div class="dropdown dropdown--custom  d-inline-block">
						 <button type="button" class="btn btn--icon--borderless btn--icon btn--icon--dot_dot_dot" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
						  <div class="dropdown-menu dropdown-menu__withicons dropdown-menu-right" aria-labelledby="dropdownMenuButton" x-placement="bottom-start">
						    <a class="dropdown-item" href="#">
						    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/dropdown_copy.svg"></div>
						    	<div class="dropdown-item__text">
						    		<div class="dropdown-item__text__title">Copy link</div>
						    	</div>
						    </a>
						    <a class="dropdown-item" href="#">
						    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/dropdown_share.svg"></div>
						    	<div class="dropdown-item__text">
						    		<div class="dropdown-item__text__title">Share listing</div>
						    		<div class="dropdown-item__text__desc">Share listing</div>
						    	</div>
						    </a>
						    <a class="dropdown-item" href="#">
						    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/dropdown_hide.svg"></div>
						    	<div class="dropdown-item__text">
						    		<div class="dropdown-item__text__title">Hide listing</div>
						    		<div class="dropdown-item__text__desc">See fewer listings like this</div>
						    	</div>
						    </a>
						    <a class="dropdown-item" href="#">
						    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/dropdown_report.svg"></div>
						    	<div class="dropdown-item__text">
						    		<div class="dropdown-item__text__title">Report this listing</div>
						    		<div class="dropdown-item__text__desc">Report this listing</div>
						    	</div>
						    </a>
						  </div>
						</div>
						<!-- / dropdown with icons -->		        			
	        		</div>
	        	</div>
	        	<!-- / card header -->
	        	
	        	<!-- card img -->
	        	<a href="https://www.har.com/homedetail/120-carnarvon-dr-houston-tx-77024/3144594">
	        		<div class="cardv2--portrait__img" style="background-image:url(https://photos.harstatic.com/194227305/lr/img-1.jpeg?ts=2021-08-06T12:35:50.297);"></div>
				</a>
	        	<!-- / card img -->
	        	
	        	<!-- card body -->
	        	<a href="https://www.har.com/homedetail/120-carnarvon-dr-houston-tx-77024/3144594">
	        	<div class="cardv2--portrait__body">
	        		<div class="cardv2--portrait__body_flexrow">
	        			<div class="cardv2--portrait__body_price">$7,009,00</div>
						<div class="cardv2--portrait__body_status"><div class="label label--forsale">Active</div></div>
					</div>
					<div class="cardv2--portrait__body_flexrow">
						<div class="cardv2--portrait__body_address">
							3914 Normandy Ave<br>
							Highland Park, TX 75205
						</div>
					</div>
					<div class="cardv2--portrait__body_features">
						<div class="cardv2--portrait__body_features">
							<ul>
								<li>Residential - Single Family</li>
								<li><span>6</span> beds</li>
								<li><span>1</span> full & <span>4</span> half baths</li>
								<li><span>3</span> stories</li>
								<li><span>8,741</span> built sqft</li>
								<li><span>1986</span> year built</li>
							</ul>
						</div>
						<div class="cardv2--portrait__body_dayson">
							<div class="circle_nimber">2</div>  Days on HAR
						</div>
					</div>					
	        	</div>
	        	</a>
	        	<div class="cardv2--portrait_impovement" onclick="location.href='http://har.com'; return false;">								
                  	<div class="title">Lot information:</div> 
                  	<div>Lots Property, in Bbb & C Ry in Fort Bend South/Richmond (Market Area)</div>
                  	<div class="font_weight--bold">28.17 Acre(s)</div>
                </div>	        	
	        	<!-- / card img -->
	        </div>
			<!-- / card--portrait v2 -->
			
			<br><br>
			
			
        </div><!-- left col ended -->
        
        
        
        <div class="col col-md-6 col-12 mb-0 pb-0 text-left ">
        
        	<h4 tabindex="0">Highrise</h4>

        	<!-- card--portrait v2 -->
	        <div class="cardv2 cardv2--portrait cardv2--portrait__highrise" onclick="location.href='http://har.com'; return false;">
	        	<!-- card select -->
	        	<div class="cardv2--portrait__select">
	        		<button role="button" class="btn btn--primary btn--small">Add to compare</button>
	        	</div>
	        	<!-- card header -->
	        	<div class="cardv2--portrait__header">
	        		<div class="cardv2--portrait__header_title text-truncate">
	        			Cosmopolitan
	        		</div>
	        		<div class="cardv2--portrait__header_controls">
	        			<button type="button" class="btn btn--icon--borderless btn--icon btn--icon--favorited"></button>
	        			<!-- dropdown with icons -->
			    		<div class="dropdown dropdown--custom  d-inline-block">
						 <button type="button" class="btn btn--icon--borderless btn--icon btn--icon--dot_dot_dot" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
						  <div class="dropdown-menu dropdown-menu__withicons dropdown-menu-right" aria-labelledby="dropdownMenuButton" x-placement="bottom-start">
						    <a class="dropdown-item" href="#">
						    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/dropdown_copy.svg"></div>
						    	<div class="dropdown-item__text">
						    		<div class="dropdown-item__text__title">Copy link</div>
						    	</div>
						    </a>
						    <a class="dropdown-item" href="#">
						    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/dropdown_share.svg"></div>
						    	<div class="dropdown-item__text">
						    		<div class="dropdown-item__text__title">Share listing</div>
						    		<div class="dropdown-item__text__desc">Share listing</div>
						    	</div>
						    </a>
						    <a class="dropdown-item" href="#">
						    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/dropdown_hide.svg"></div>
						    	<div class="dropdown-item__text">
						    		<div class="dropdown-item__text__title">Hide listing</div>
						    		<div class="dropdown-item__text__desc">See fewer listings like this</div>
						    	</div>
						    </a>
						    <a class="dropdown-item" href="#">
						    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/dropdown_report.svg"></div>
						    	<div class="dropdown-item__text">
						    		<div class="dropdown-item__text__title">Report this listing</div>
						    		<div class="dropdown-item__text__desc">Report this listing</div>
						    	</div>
						    </a>
						  </div>
						</div>
						<!-- / dropdown with icons -->		        			
	        		</div>
	        	</div>
	        	<!-- / card header -->
	        	
	        	<!-- card img -->
	        	<div class="cardv2--portrait__img cardv2--portrait__img_heighrise" style="background-image:url(https://content.harstatic.com/high_rise/hr/1072_1.jpg);"></div>
	        	<!-- / card img -->
	        	
	        	<!-- card body -->
	        	<div class="cardv2--portrait__body">
	        		<div class="cardv2--portrait__body_flexrow">
						<div class="cardv2--portrait__body_address">
							1600 Post Oak Blvd<br>Houston, TX 77056
						</div>
					</div>
					<div class="cardv2--portrait__body_features">
						<ul>
							<li><span>23</span> floors</li>
							<li><span>80</span> units</li>
							<li><span>10</span> penthouses</li>
						</ul>
						
					</div>
					<div class="cardv2--portrait__body_ratings">
						<div class="stars">
							<img src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg">
							<img src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg">
							<img src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg">
							<img src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg">
							<img src="https://content.harstatic.com/media/icons/stars_16by16_gray.svg">
						</div>
						<div class="rating">19</div>
					</div>
	        	</div>
	        	<!-- / card img -->
	        </div>
			<!-- / card--portrait v2 -->
			
			
			
			<h4 tabindex="0">Apartment</h4>
        
        
        	<!-- card--portrait v2 -->
    	    <div class="cardv2 cardv2--portrait">
	        	<!-- card select -->
	        	<div class="cardv2--portrait__select">
	        		<button role="button" class="btn btn--primary btn--small">Add to compare</button>
	        	</div>
	        	<!-- card header -->
	        	<div class="cardv2--portrait__header">
	        		<div class="cardv2--portrait__header_title text-truncate">
	        			Cabochon At River Cabochon At River
	        		</div>
	        		<div class="cardv2--portrait__header_controls">
	        			<button type="button" class="btn btn--icon--borderless btn--icon btn--icon--favorite"></button>
	        			<!-- dropdown with icons -->
			    		<div class="dropdown dropdown--custom  d-inline-block">
						 <button type="button" class="btn btn--icon--borderless btn--icon btn--icon--dot_dot_dot" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
						  <div class="dropdown-menu dropdown-menu__withicons dropdown-menu-right" aria-labelledby="dropdownMenuButton" x-placement="bottom-start">
						    <a class="dropdown-item" href="#">
						    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/dropdown_copy.svg"></div>
						    	<div class="dropdown-item__text">
						    		<div class="dropdown-item__text__title">Copy link</div>
						    	</div>
						    </a>
						    <a class="dropdown-item" href="#">
						    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/dropdown_share.svg"></div>
						    	<div class="dropdown-item__text">
						    		<div class="dropdown-item__text__title">Share listing</div>
						    		<div class="dropdown-item__text__desc">Share listing</div>
						    	</div>
						    </a>
						    <a class="dropdown-item" href="#">
						    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/dropdown_hide.svg"></div>
						    	<div class="dropdown-item__text">
						    		<div class="dropdown-item__text__title">Hide listing</div>
						    		<div class="dropdown-item__text__desc">See fewer listings like this</div>
						    	</div>
						    </a>
						    <a class="dropdown-item" href="#">
						    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/dropdown_report.svg"></div>
						    	<div class="dropdown-item__text">
						    		<div class="dropdown-item__text__title">Report this listing</div>
						    		<div class="dropdown-item__text__desc">Report this listing</div>
						    	</div>
						    </a>
						  </div>
						</div>
						<!-- / dropdown with icons -->		        			
	        		</div>
	        	</div>
	        	<!-- / card header -->
	        	
	        	<!-- card img -->
	        	<a href="#">
	        		<div class="cardv2--portrait__img" style="background-image:url(https://photos.harstatic.com/194227305/lr/img-1.jpeg?ts=2021-08-06T12:35:50.297);"></div>
				</a>
	        	<!-- / card img -->
	        	
	        	<!-- card body -->
	        	<a href="#">
	        	<div class="cardv2--portrait__body">
	        		<div class="cardv2--portrait__body_flexrow">
	        			<div class="cardv2--portrait__body_price">$904 - $2,282</div>
					</div>
					<div class="cardv2--portrait__body_flexrow">
						<div class="cardv2--portrait__body_address">
							2828 Bammel<br>Houston, TX 77098
						</div>
					</div>
					<div class="cardv2--portrait__body_features">
						<ul>
							<li>Studio - <span>3</span> beds</li>
							<li><span>1 - 3</span> baths</li>
							<li><span>550 - 2,000</span> sqft</li>
						</ul>
					</div>
					<div class="cardv2--portrait__body_ratings">
						<div class="stars">
							<img src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg">
							<img src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg">
							<img src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg">
							<img src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg">
							<img src="https://content.harstatic.com/media/icons/stars_16by16_gray.svg">
						</div>
						<div class="rating">19</div>
					</div>

	        	</div>
	        	</a>
	        	<!-- / card img -->
	        </div>
			<!-- / card--portrait v2 -->
			
			<br><br>
			
			
			<h4 tabindex="0">Open House</h4>        
        
        	<!-- card--portrait v2 -->
        	<div class="cardv2_outer">		    
		        <div class="cardv2 cardv2--portrait">
		        	<!-- card select -->
		        	<div class="cardv2--portrait__select">
		        		<button role="button" class="btn btn--primary btn--small">Add to compare</button>
		        	</div>
		        	<!-- card header -->
		        	<div class="cardv2--portrait__header">
		        		<div class="cardv2--portrait__header_agent">
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
		        		<div class="cardv2--portrait__header_controls">
		        			<button type="button" class="btn btn--icon--borderless btn--icon btn--icon--favorite"></button>
							<!-- dropdown with icons -->
			    		<div class="dropdown dropdown--custom  d-inline-block">
						 <button type="button" class="btn btn--icon--borderless btn--icon btn--icon--dot_dot_dot" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
						  <div class="dropdown-menu dropdown-menu__withicons dropdown-menu-right" aria-labelledby="dropdownMenuButton" x-placement="bottom-start">
						    <a class="dropdown-item" href="#">
						    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/dropdown_copy.svg"></div>
						    	<div class="dropdown-item__text">
						    		<div class="dropdown-item__text__title">Copy link</div>
						    	</div>
						    </a>
						    <a class="dropdown-item" href="#">
						    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/dropdown_share.svg"></div>
						    	<div class="dropdown-item__text">
						    		<div class="dropdown-item__text__title">Share listing</div>
						    		<div class="dropdown-item__text__desc">Share listing</div>
						    	</div>
						    </a>
						    <a class="dropdown-item" href="#">
						    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/dropdown_hide.svg"></div>
						    	<div class="dropdown-item__text">
						    		<div class="dropdown-item__text__title">Hide listing</div>
						    		<div class="dropdown-item__text__desc">See fewer listings like this</div>
						    	</div>
						    </a>
						    <a class="dropdown-item" href="#">
						    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/dropdown_report.svg"></div>
						    	<div class="dropdown-item__text">
						    		<div class="dropdown-item__text__title">Report this listing</div>
						    		<div class="dropdown-item__text__desc">Report this listing</div>
						    	</div>
						    </a>
						  </div>
						</div>
						<!-- / dropdown with icons -->		        			
		        		</div>
		        	</div>
		        	<!-- / card header -->
		        	
		        	<!-- card img -->
		        	<a href="#">
		        		<div class="cardv2--portrait__img" style="background-image:url(https://photos.harstatic.com/194227305/lr/img-1.jpeg?ts=2021-08-06T12:35:50.297);"></div>
					</a>
		        	<!-- / card img -->
		        	
		        	<!-- card body -->
		        	<a href="#">
		        	<div class="cardv2--portrait__body">
		        		<div class="cardv2--portrait__body_flexrow">
		        			<div class="cardv2--portrait__body_price">$7,009,00</div>
							<div class="cardv2--portrait__body_status"><div class="label label--forsale">Active</div></div>
						</div>
						<div class="cardv2--portrait__body_flexrow">
							<div class="cardv2--portrait__body_address">
								9 West Lane<br>
								Houston, TX 77019
							</div>
						</div>
						<div class="cardv2--portrait__body_features">
							<ul>
								<li>Residential - Single Family</li>
								<li><span>6</span> beds</li>
								<li><span>1</span> full & <span>4</span> half baths</li>
								<li><span>3</span> stories</li>
								<li><span>8,741</span> built sqft</li>
								<li><span>1986</span> year built</li>
							</ul>
						</div>
						<div class="cardv2--portrait__body_dayson">
							<div class="circle_nimber">2</div>  Days on HAR
						</div>
		        	</div>
		        	</a>
		        	<!-- / card img -->
		        </div>
		    
		        <div class="cardv2--footer">
		        	<div class="label label--openhouse">Open House</div>
		        	<div class="">
		        		<div class="font_weight--bold">Aug 11</div>
						11:00 AM – 6:00 PM
					</div>
		        </div>
		    </div>
			<!-- / card--portrait v2 -->
			
			<br><br>
				        	
        </div><!-- end of right half column -->
        
        
      </div>
      
      
      
      
      <hr>
      
      <div class="row">
        <div class="col col-md-6 col-12 mb-0 pb-0 text-left ">
        	<h4 class="mb-4" tabindex="0">Favorite w/ notes</h4>
        
	        <!-- card--portrait v2 -->
	        <div class="cardv2 cardv2--portrait">
	        	<!-- card select -->
	        	<div class="cardv2--portrait__select">
	        		<button role="button" class="btn btn--primary btn--small">Add to compare</button>
	        	</div>
	        	<!-- card header -->
	        	<div class="cardv2--portrait__header">
	        		<div class="cardv2--portrait__header_agent">
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
	        		<div class="cardv2--portrait__header_controls">
	        			<button type="button" class="btn btn--icon--borderless btn--icon btn--icon--favorite"></button>
	        			<!-- dropdown with icons -->
			    		<div class="dropdown dropdown--custom  d-inline-block">
						 <button type="button" class="btn btn--icon--borderless btn--icon btn--icon--dot_dot_dot" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
						  <div class="dropdown-menu dropdown-menu__withicons dropdown-menu-right" aria-labelledby="dropdownMenuButton" x-placement="bottom-start">
						    <a class="dropdown-item" href="#">
						    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/dropdown_copy.svg"></div>
						    	<div class="dropdown-item__text">
						    		<div class="dropdown-item__text__title">Copy link</div>
						    	</div>
						    </a>
						    <a class="dropdown-item" href="#">
						    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/dropdown_share.svg"></div>
						    	<div class="dropdown-item__text">
						    		<div class="dropdown-item__text__title">Share listing</div>
						    		<div class="dropdown-item__text__desc">Share listing</div>
						    	</div>
						    </a>
						    <a class="dropdown-item" href="#">
						    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/dropdown_hide.svg"></div>
						    	<div class="dropdown-item__text">
						    		<div class="dropdown-item__text__title">Hide listing</div>
						    		<div class="dropdown-item__text__desc">See fewer listings like this</div>
						    	</div>
						    </a>
						    <a class="dropdown-item" href="#">
						    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/dropdown_report.svg"></div>
						    	<div class="dropdown-item__text">
						    		<div class="dropdown-item__text__title">Report this listing</div>
						    		<div class="dropdown-item__text__desc">Report this listing</div>
						    	</div>
						    </a>
						  </div>
						</div>
						<!-- / dropdown with icons -->		        			
	        		</div>
	        	</div>
	        	<!-- / card header -->
	        	
	        	<!-- card img -->
	        	<a href="#">
	        		<div class="cardv2--portrait__img" style="background-image:url(https://photos.harstatic.com/194227305/lr/img-1.jpeg?ts=2021-08-06T12:35:50.297);"></div>
				</a>
	        	<!-- / card img -->
	        	
	        	<!-- card body -->
	        	<a href="#">
	        	<div class="cardv2--portrait__body">
	        		<div class="cardv2--portrait__body_flexrow">
	        			<div class="cardv2--portrait__body_price">$7,009,00</div>
						<div class="cardv2--portrait__body_status"><div class="label label--forsale">Active</div></div>
					</div>
					<div class="cardv2--portrait__body_flexrow">
						<div class="cardv2--portrait__body_address">
							14302 Laurus Estates Lane<br>
							Cypress, TX 77429
						</div>						
					</div>
					<div class="cardv2--portrait__body_features">
						<ul>
							<li>Residential - Single Family</li>
							<li><span>6</span> beds</li>
							<li><span>1</span> full & <span>4</span> half baths</li>
							<li><span>3</span> stories</li>
							<li><span>8,741</span> built sqft</li>
							<li><span>1986</span> year built</li>
						</ul>
					</div>
					<div class="cardv2--portrait__body_dayson">
						<div class="circle_nimber">2</div>  Days on HAR
					</div>
	        	</div>
	        	</a>
	        	<!-- / card img -->
	        	
	        	<!-- / card fav_container -->
	        	<div class="cardv2--portrait__folder">
	        		<div class="cardv2--portrait__folder__controls">
	        			<a class="btn btn--outline" href="#">For my family</a>
	        			<a class="btn btn--outline" href="#">+1</a>
	        			<a href="#" class="btn btn--outline editfolder"><img style="height:14px;" src="https://content.harstatic.com/media/icons/edit_outline_blue_.svg">Folders</a>
	        		</div>
	        		<div class="cardv2--portrait__folder__notes folder__notes">
	        			<div class="folder__notes__inner">
	        				<textarea class="form-control folder__notes__inner__textarea" placeholder="Write some notes..."></textarea>
						</div>
	        		</div>
	        	</div>
	        </div>
			<!-- / card--portrait v2 -->

		</div>
		<div class="col col-md-6 col-12 mb-0 pb-0 text-left ">
			<h4 class="mb-4" tabindex="0">&nbsp;</h4>
			
			<!-- card--portrait v2 -->
	        <div class="cardv2 cardv2--portrait mb-2">
	        	<!-- card select -->
	        	<div class="cardv2--portrait__select">
	        		<button role="button" class="btn btn--ordinary btn--small btn btn--icon btn--icon--close">Remove</button>
	        	</div>
	        	<!-- card header -->
	        	<div class="cardv2--portrait__header">
	        		<div class="cardv2--portrait__header_agent">
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
	        		<div class="cardv2--portrait__header_controls">
	        			<button type="button" class="btn btn--icon--borderless btn--icon btn--icon--favorited"></button>
	        			<!-- dropdown with icons -->
			    		<div class="dropdown dropdown--custom  d-inline-block">
						 <button type="button" class="btn btn--icon--borderless btn--icon btn--icon--dot_dot_dot" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
						  <div class="dropdown-menu dropdown-menu__withicons dropdown-menu-right" aria-labelledby="dropdownMenuButton" x-placement="bottom-start">
						    <a class="dropdown-item" href="#">
						    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/dropdown_copy.svg"></div>
						    	<div class="dropdown-item__text">
						    		<div class="dropdown-item__text__title">Copy link</div>
						    	</div>
						    </a>
						    <a class="dropdown-item" href="#">
						    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/dropdown_share.svg"></div>
						    	<div class="dropdown-item__text">
						    		<div class="dropdown-item__text__title">Share listing</div>
						    		<div class="dropdown-item__text__desc">Share listing</div>
						    	</div>
						    </a>
						    <a class="dropdown-item" href="#">
						    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/dropdown_hide.svg"></div>
						    	<div class="dropdown-item__text">
						    		<div class="dropdown-item__text__title">Hide listing</div>
						    		<div class="dropdown-item__text__desc">See fewer listings like this</div>
						    	</div>
						    </a>
						    <a class="dropdown-item" href="#">
						    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/dropdown_report.svg"></div>
						    	<div class="dropdown-item__text">
						    		<div class="dropdown-item__text__title">Report this listing</div>
						    		<div class="dropdown-item__text__desc">Report this listing</div>
						    	</div>
						    </a>
						  </div>
						</div>
						<!-- / dropdown with icons -->		        			
	        		</div>
	        	</div>
	        	<!-- / card header -->
	        	
	        	<!-- card img -->
	        	<a href="#">
	        		<div class="cardv2--portrait__img" style="background-image:url(https://photos.harstatic.com/194227305/lr/img-1.jpeg?ts=2021-08-06T12:35:50.297);"></div>
				</a>
	        	<!-- / card img -->
	        	
	        	<!-- card body -->
	        	<a href="#">
	        	<div class="cardv2--portrait__body">
	        		<div class="cardv2--portrait__body_flexrow">
	        			<div class="cardv2--portrait__body_price">$7,009,00</div>
						<div class="cardv2--portrait__body_status"><div class="label label--forsale">Active</div></div>
					</div>
					<div class="cardv2--portrait__body_flexrow">
						<div class="cardv2--portrait__body_address">
							3914 Normandy Ave<br>
							Highland Park, TX 75205
						</div>						
					</div>
					<div class="cardv2--portrait__body_features">
						<ul>
							<li>Residential - Single Family</li>
							<li><span>6</span> beds</li>
							<li><span>1</span> full & <span>4</span> half baths</li>
							<li><span>3</span> stories</li>
							<li><span>8,741</span> built sqft</li>
							<li><span>1986</span> year built</li>
						</ul>
					</div>
					<div class="cardv2--portrait__body_dayson">
						<div class="circle_nimber">2</div>  Days on HAR
					</div>
	        	</div>
	        	</a>
	        	<!-- / card body -->
	        	
	        	<!-- / card fav_container -->
	        	<div class="cardv2--portrait__folder">
	        		<div class="cardv2--portrait__folder__controls">
	        			<a class="btn btn--outline" href="#">For my family</a>
	        			<a class="btn btn--outline" href="#">+1</a>
	        			<a href="#" class="btn btn--outline editfolder"><img style="height:14px;" src="https://content.harstatic.com/media/icons/edit_outline_blue_.svg">Folders</a>
	        		</div>
	        		<div class="cardv2--portrait__folder__notes folder__notes">
	        			<div class="folder__notes__inner">
	        				<textarea class="form-control folder__notes__inner__textarea" placeholder="Write some notes...">This house is so beautiful… look at those texture… however, I’m not sure if it’s too modern to my family, because they are a little bit old fashioned. Anyway, I like the whole place and it seems to be quite good to live at… or not.</textarea>
						</div>
	        		</div>
	        	</div>

	        </div>	        
			<!-- / card--portrait v2 -->
      
      </div>
      
      </div>
      
      <hr>
      
      <div class="row">
        <div class="col col-md-6 col-12 mb-0 pb-0 text-left ">
        	<h4 class="mb-4" tabindex="0">Select Feature</h4>
        
	        <!-- card--portrait v2 -->
	        <div class="cardv2 cardv2--portrait">
	        	<!-- card select -->
	        	<div class="cardv2--portrait__select cardv2--portrait__select__on">
	        		<button role="button" class="btn btn--primary btn--small">Add to compare</button>
	        	</div>
	        	<!-- card header -->
	        	<div class="cardv2--portrait__header">
	        		<div class="cardv2--portrait__header_agent">
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
	        		<div class="cardv2--portrait__header_controls">
	        			<button type="button" class="btn btn--icon--borderless btn--icon btn--icon--favorite"></button>
	        			<!-- dropdown with icons -->
			    		<div class="dropdown dropdown--custom  d-inline-block">
						 <button type="button" class="btn btn--icon--borderless btn--icon btn--icon--dot_dot_dot" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
						  <div class="dropdown-menu dropdown-menu__withicons dropdown-menu-right" aria-labelledby="dropdownMenuButton" x-placement="bottom-start">
						    <a class="dropdown-item" href="#">
						    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/dropdown_copy.svg"></div>
						    	<div class="dropdown-item__text">
						    		<div class="dropdown-item__text__title">Copy link</div>
						    	</div>
						    </a>
						    <a class="dropdown-item" href="#">
						    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/dropdown_share.svg"></div>
						    	<div class="dropdown-item__text">
						    		<div class="dropdown-item__text__title">Share listing</div>
						    		<div class="dropdown-item__text__desc">Share listing</div>
						    	</div>
						    </a>
						    <a class="dropdown-item" href="#">
						    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/dropdown_hide.svg"></div>
						    	<div class="dropdown-item__text">
						    		<div class="dropdown-item__text__title">Hide listing</div>
						    		<div class="dropdown-item__text__desc">See fewer listings like this</div>
						    	</div>
						    </a>
						    <a class="dropdown-item" href="#">
						    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/dropdown_report.svg"></div>
						    	<div class="dropdown-item__text">
						    		<div class="dropdown-item__text__title">Report this listing</div>
						    		<div class="dropdown-item__text__desc">Report this listing</div>
						    	</div>
						    </a>
						  </div>
						</div>
						<!-- / dropdown with icons -->		        			
	        		</div>
	        	</div>
	        	<!-- / card header -->
	        	
	        	<!-- card img -->
	        	<a href="#">
	        		<div class="cardv2--portrait__img" style="background-image:url(https://photos.harstatic.com/194227305/lr/img-1.jpeg?ts=2021-08-06T12:35:50.297);"></div>
				</a>
	        	<!-- / card img -->
	        	
	        	<!-- card body -->
	        	<a href="#">
	        	<div class="cardv2--portrait__body">
	        		<div class="cardv2--portrait__body_flexrow">
	        			<div class="cardv2--portrait__body_price">$7,009,00</div>
						<div class="cardv2--portrait__body_status"><div class="label label--forsale">Active</div></div>
					</div>
					<div class="cardv2--portrait__body_flexrow">
						<div class="cardv2--portrait__body_address">
							14302 Laurus Estates Lane<br>
							Cypress, TX 77429
						</div>						
					</div>
					<div class="cardv2--portrait__body_features">
						<ul>
							<li>Residential - Single Family</li>
							<li><span>6</span> beds</li>
							<li><span>1</span> full & <span>4</span> half baths</li>
							<li><span>3</span> stories</li>
							<li><span>8,741</span> built sqft</li>
							<li><span>1986</span> year built</li>
						</ul>
					</div>
					<div class="cardv2--portrait__body_dayson">
						<div class="circle_nimber">2</div>  Days on HAR
					</div>
	        	</div>
	        	</a>
	        	<!-- / card img -->
	        	
	        </div>
			<!-- / card--portrait v2 -->

		</div>
		<div class="col col-md-6 col-12 mb-0 pb-0 text-left ">
			<h4 class="mb-4" tabindex="0">&nbsp;</h4>
			
			<!-- card--portrait v2 -->
	        <div class="cardv2 cardv2--portrait cardv2--portrait__selected mb-2">
	        	<!-- card select -->
	        	<div class="cardv2--portrait__select cardv2--portrait__select__on">
	        		<button role="button" class="btn btn--ordinary btn--small btn btn--icon btn--icon--close">Remove</button>
	        	</div>
	        	<!-- card header -->
	        	<div class="cardv2--portrait__header">
	        		<div class="cardv2--portrait__header_agent">
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
	        		<div class="cardv2--portrait__header_controls">
	        			<button type="button" class="btn btn--icon--borderless btn--icon btn--icon--favorited"></button>
	        			<!-- dropdown with icons -->
			    		<div class="dropdown dropdown--custom  d-inline-block">
						 <button type="button" class="btn btn--icon--borderless btn--icon btn--icon--dot_dot_dot" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
						  <div class="dropdown-menu dropdown-menu__withicons dropdown-menu-right" aria-labelledby="dropdownMenuButton" x-placement="bottom-start">
						    <a class="dropdown-item" href="#">
						    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/dropdown_copy.svg"></div>
						    	<div class="dropdown-item__text">
						    		<div class="dropdown-item__text__title">Copy link</div>
						    	</div>
						    </a>
						    <a class="dropdown-item" href="#">
						    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/dropdown_share.svg"></div>
						    	<div class="dropdown-item__text">
						    		<div class="dropdown-item__text__title">Share listing</div>
						    		<div class="dropdown-item__text__desc">Share listing</div>
						    	</div>
						    </a>
						    <a class="dropdown-item" href="#">
						    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/dropdown_hide.svg"></div>
						    	<div class="dropdown-item__text">
						    		<div class="dropdown-item__text__title">Hide listing</div>
						    		<div class="dropdown-item__text__desc">See fewer listings like this</div>
						    	</div>
						    </a>
						    <a class="dropdown-item" href="#">
						    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/dropdown_report.svg"></div>
						    	<div class="dropdown-item__text">
						    		<div class="dropdown-item__text__title">Report this listing</div>
						    		<div class="dropdown-item__text__desc">Report this listing</div>
						    	</div>
						    </a>
						  </div>
						</div>
						<!-- / dropdown with icons -->		        			
	        		</div>
	        	</div>
	        	<!-- / card header -->
	        	
	        	<!-- card img -->
	        	<a href="#">
	        		<div class="cardv2--portrait__img" style="background-image:url(https://photos.harstatic.com/194227305/lr/img-1.jpeg?ts=2021-08-06T12:35:50.297);"></div>
				</a>
	        	<!-- / card img -->
	        	
	        	<!-- card body -->
	        	<a href="#">
	        	<div class="cardv2--portrait__body">
	        		<div class="cardv2--portrait__body_flexrow">
	        			<div class="cardv2--portrait__body_price">$7,009,00</div>
						<div class="cardv2--portrait__body_status"><div class="label label--forsale">Active</div></div>
					</div>
					<div class="cardv2--portrait__body_flexrow">
						<div class="cardv2--portrait__body_address">
							3914 Normandy Ave<br>
							Highland Park, TX 75205
						</div>						
					</div>
					<div class="cardv2--portrait__body_features">
						<ul>
							<li>Residential - Single Family</li>
							<li><span>6</span> beds</li>
							<li><span>1</span> full & <span>4</span> half baths</li>
							<li><span>3</span> stories</li>
							<li><span>8,741</span> built sqft</li>
							<li><span>1986</span> year built</li>
						</ul>
					</div>
					<div class="cardv2--portrait__body_dayson">
						<div class="circle_nimber">2</div>  Days on HAR
					</div>
	        	</div>
	        	</a>
	        	<!-- / card body -->
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
