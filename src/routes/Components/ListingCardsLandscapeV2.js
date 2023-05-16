import React, {Component} from "react";
import TemplateDefault from '../../components/TemplateDefault';
import TemplateComponentBlock from '../../components/TemplateComponentBlock';


export default class ListingCardsLandscapeV2 extends Component {

  constructor(props) {
    super(props);

    this.elements = [
      `
      <div class="row pb-4">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h2 class="h2--simple h2--simple__black" tabindex="0">Landscape default</h2>
        </div>
      </div>

      <div class="row mb-5 pb-5">
        <div class="col col-12 mb-0 pb-0 text-left ">
        
	    	<!-- card--landscape v2 -->
	        <div class="cardv2--landscape selected">
	        	<div class="cardv2--landscape__select cardv2--landscape__select__on">
	        		<button role="button" class="btn btn--primary btn--small">Add to compare</button>
	        	</div>
	        	
	        	<!-- / card header -->	        	
	        	<div class="cardv2--landscape__header">	
	        		<div class="cardv2--landscape__header_agent">
	        			<div class="agent_signaturev2">
				            <a href="#0" class="agent_signaturev2__photo" title="View Michel Hayek's profile" style="background-image:url('https://pics.harstatic.com/agent/639324.jpg?ts=2016-03-18T15:37:007083');"></a>
				            <div class="agent_signaturev2__info flex-grow-0">
				              <a href="#1" class="agent_signaturev2__info__agent_name" title="View Michel Hayek's profile" aria-label="View Michel Hayek's profile">
				                Michel Hayek
				              </a>
				              <a href="#2" class="agent_signaturev2__info__broker_name" title="View Better Homes And Gardens Real's page" aria-label="View Better Homes And Gardens Real's page">
				                Berkshire Hathaway HomeServices Premier Properties
				              </a>
				            </div>
				        </div>
	        		</div>
	        		<div class="cardv2--landscape__header_controls">
						<button type="button" class="btn btn--icon--borderless btn--icon btn--icon--favorite btn--mobileonly"></button>
	        			
	        			<button role="button" class="btn btn--primary btn--medium btn--desktoponly">Add to compare</button>
	        			<button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--dislike btn--desktoponly" aria-label="Button"></button>
	        			<button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--favorited btn--desktoponly" aria-label="Button"></button>
	        			
	        			
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
	        	
	        	<div class="cardv2--landscape__content">		        	
		        	<div class="cardv2--landscape__content__body">
			        	<a href="https://www.har.com/homedetail/120-carnarvon-dr-houston-tx-77024/3144594">
				        	<!-- card img -->
				        	<div class="cardv2--landscape__content__body__image">
				        		<div class="cardv2--landscape__content__body__image__img" style="background-image:url(https://photos.harstatic.com/194227305/lr/img-1.jpeg?ts=2021-08-06T12:35:50.297);"></div>
				        		
				        		<!-- / card footer -->
						        <div class="cardv2--landscape__content__footer">
						        	<div class="cardv2--landscape__content__footer_dayson">
										<div class="circle_nimber">2</div>  Days on HAR
									</div>
									
									<div class="cardv2--landscape__content__footer_ph">
										39 Photos, 1 Video
									</div>							
						        </div>
						        <!-- / card footer -->
				        	</div>
				        	<!-- / card img -->
				        </a>
			        	<!-- card header -->
		        		
			        	<!-- card details -->
			        	<div class="cardv2--landscape__content__body__details">
				        	<a href="https://www.har.com/homedetail/120-carnarvon-dr-houston-tx-77024/3144594">
				        		<div class="cardv2--landscape__content__body__details_address">
				        			<div class="cardv2--landscape__content__body__details_address_left">	
				        				<div class="cardv2--landscape__content__body__details_address_left_add">	
				        					<div class="cardv2--landscape__content__body__details_address_left_add__title">3914 Normandy Ave</div>
											Highland Park, TX 5205
										</div>										
				        			</div>
				        			<div class="cardv2--landscape__content__body__details_address_right">	
				        				<div class="cardv2--landscape__content__body__details_price">$13,500,000</div>
										<div class="label label--forsale">Active</div>
									</div>
								</div>
								
								<div class="cardv2--landscape__content__body__details_address_left_info">
										Residential - Single Family Property<br>
										Style in Mount Vernon 01 & 03 Subdivision
									</div>
								
								<div class="cardv2--landscape__content__body__details_features">
									<div class="cardv2--landscape__content__body__details_features_item"><span>6</span> bedrooms</div>
									<div class="cardv2--landscape__content__body__details_features_item"><span>1986</span> year built</div>
									<div class="cardv2--landscape__content__body__details_features_item"><span>7</span> full & <span>1</span> half baths</div>
									<div class="cardv2--landscape__content__body__details_features_item"><span>0.47</span> Acres</div>		
									<div class="cardv2--landscape__content__body__details_features_item"><span>3</span> stories</div>
									<div class="cardv2--landscape__content__body__details_features_item">Private Pool</div>
									<div class="cardv2--landscape__content__body__details_features_item"><span>8,741</span> built sqft</div>
								</div>
							</a>
							
			        	</div>
			        	<!-- / card details -->
				    </div>
			        <!-- / card body -->
			    </div>
			    <!-- / card content -->	
	        </div>
			<!-- / card--landscape v2 -->
			
						        	
        </div>
      </div><!-- <div class="row"> -->
      

      
      
      
      
      <div class="row pb-4">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h2 class="h2--simple h2--simple__black" tabindex="0">W/ Schools</h2>
        </div>
      </div>

      <div class="row mb-5 pb-5">
        <div class="col col-12 mb-0 pb-0 text-left ">
        
	    	<!-- card--landscape v2 -->
	        <div class="cardv2--landscape">
	        	<!-- / card header -->	        	
	        	<div class="cardv2--landscape__header">	
	        		<div class="cardv2--landscape__header_agent">
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
	        		<div class="cardv2--landscape__header_controls">
	
	        			<button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--dislike btn--desktoponly" aria-label="Button"></button>
	        			<button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--favorited btn--desktoponly" aria-label="Button"></button>
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
	        	
	        	<div class="cardv2--landscape__content">		        	
		        	<div class="cardv2--landscape__content__body">
			        	<a href="https://www.har.com/homedetail/120-carnarvon-dr-houston-tx-77024/3144594">
				        	<!-- card img -->
				        	<div class="cardv2--landscape__content__body__image">
				        		<div class="cardv2--landscape__content__body__image__img" style="background-image:url(https://photos.harstatic.com/194227305/lr/img-1.jpeg?ts=2021-08-06T12:35:50.297);"></div>
				        		
				        		<!-- / card footer -->
						        <div class="cardv2--landscape__content__footer">
						        	<div class="cardv2--landscape__content__footer_dayson">
										<div class="circle_nimber">2</div>  Days on HAR
									</div>
									
									<div class="cardv2--landscape__content__footer_ph">
										39 Photos
									</div>							
						        </div>
						        <!-- / card footer -->
				        	</div>
				        	<!-- / card img -->
				        </a>
			        	<!-- card header -->
		        		
			        	<!-- card details -->
			        	<div class="cardv2--landscape__content__body__details">
				        	<a href="https://www.har.com/homedetail/120-carnarvon-dr-houston-tx-77024/3144594">
				        		<div class="cardv2--landscape__content__body__details_address">
				        			<div class="cardv2--landscape__content__body__details_address_left">	
				        				<div class="cardv2--landscape__content__body__details_address_left_add">	
				        					<div class="cardv2--landscape__content__body__details_address_left_add__title">3914 Normandy Ave</div>
											Highland Park, TX 5205
										</div>
										<div class="cardv2--landscape__content__body__details_address_left_info">
											<div class="pb-2">
												<div class="label label--forsale_type">For Sale</div>
											</div>
											Residential - Single Family Property<br>
											Style in Mount Vernon 01 & 03 Subdivision
										</div>
				        			</div>
				        			<div class="cardv2--landscape__content__body__details_address_right">	
				        				<div class="cardv2--landscape__content__body__details_price">$13,500,000</div>
										<div class="label label--forsale">Active</div>
									</div>
								</div>
								
								
								<div class="cardv2--landscape__content__body__details_features">
									<div class="cardv2--landscape__content__body__details_features_item"><span>6</span> bedrooms</div>
									<div class="cardv2--landscape__content__body__details_features_item"><span>1986</span> year built</div>
									<div class="cardv2--landscape__content__body__details_features_item"><span>7</span> full & <span>1</span> half baths</div>
									<div class="cardv2--landscape__content__body__details_features_item"><span>0.47</span> Acres</div>		
									<div class="cardv2--landscape__content__body__details_features_item"><span>3</span> stories</div>
									<div class="cardv2--landscape__content__body__details_features_item">Private Pool</div>
									<div class="cardv2--landscape__content__body__details_features_item"><span>8,741</span> built sqft</div>
								</div>
							</a>
							<div class="cardv2--landscape__content__body__details_impovement">
		                  		<span class="title">Zoned / Assigned Schools:</span><br>			                  		
						  		<a href="#">Settlers Way Elementary School</a><br>
						  		<a href="#">First Colony Middle School</a><br>
						  		<a href="#">Clements High School</a>
			                </div>
			        	</div>
			        	<!-- / card details -->
				    </div>
			        <!-- / card body -->
			    </div>
			    <!-- / card content -->	
	        </div>
			<!-- / card--landscape v2 -->
			
						        	
        </div>
      </div><!-- <div class="row"> -->
      
      
      
      
      
      <div class="row pb-4">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h2 class="h2--simple h2--simple__black" tabindex="0">Tax</h2>
        </div>
      </div>

      <div class="row mb-5 pb-5">
        <div class="col col-12 mb-0 pb-0 text-left ">
        
	    	<!-- card--landscape v2 -->
	        <div class="cardv2--landscape">
	        	<!-- / card header -->	        	
	        	<div class="cardv2--landscape__header">	
	        		<div class="cardv2--landscape__header_agent">
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
	        		<div class="cardv2--landscape__header_controls">
	
	        			<button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--dislike btn--desktoponly" aria-label="Button"></button>
	        			<button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--favorited btn--desktoponly" aria-label="Button"></button>
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
	        	
	        	<div class="cardv2--landscape__content">		        	
		        	<div class="cardv2--landscape__content__body">
			        	<a href="https://www.har.com/homedetail/120-carnarvon-dr-houston-tx-77024/3144594">
				        	<!-- card img -->
				        	<div class="cardv2--landscape__content__body__image">
				        		<div class="cardv2--landscape__content__body__image__img" style="background-image:url(https://photos.harstatic.com/194227305/lr/img-1.jpeg?ts=2021-08-06T12:35:50.297);"></div>
				        		
				        		<!-- / card footer -->
						        <div class="cardv2--landscape__content__footer">
						        	<div class="cardv2--landscape__content__footer_ph">
										39 Photos
									</div>							
						        </div>
						        <!-- / card footer -->
				        	</div>
				        	<!-- / card img -->
				        </a>
			        	<!-- card header -->
		        		
			        	<!-- card details -->
			        	<div class="cardv2--landscape__content__body__details">
				        	<a href="https://www.har.com/homedetail/120-carnarvon-dr-houston-tx-77024/3144594">
				        		<div class="cardv2--landscape__content__body__details_address">
				        			<div class="cardv2--landscape__content__body__details_address_left">	
				        				<div class="cardv2--landscape__content__body__details_address_left_add">	
				        					<div class="cardv2--landscape__content__body__details_address_left_add__title">3914 Normandy Ave</div>
											Highland Park, TX 5205
										</div>
										<div class="cardv2--landscape__content__body__details_address_left_info">
											<div class="pb-2">
												<div class="label label--forsale_type">For Sale</div>
											</div>
											Residential - Single Family Property<br>
											Style in Mount Vernon 01 & 03 Subdivision
										</div>
				        			</div>
				        			<div class="cardv2--landscape__content__body__details_address_right">	
				        				<div class="cardv2--landscape__content__body__details_price">$13,500,000</div>
										<div class="cardv2--landscape__content__body__details_address_right_txt">
											Market Value<br>
											Appraisal District
										</div>
									</div>
								</div>
								
								
								<div class="cardv2--landscape__content__body__details_features">
									<div class="cardv2--landscape__content__body__details_features_item"><span>6</span> bedrooms</div>
									<div class="cardv2--landscape__content__body__details_features_item"><span>1986</span> year built</div>
									<div class="cardv2--landscape__content__body__details_features_item"><span>7</span> full & <span>1</span> half baths</div>
									<div class="cardv2--landscape__content__body__details_features_item"><span>0.47</span> Acres</div>		
									<div class="cardv2--landscape__content__body__details_features_item"><span>3</span> stories</div>
									<div class="cardv2--landscape__content__body__details_features_item">Private Pool</div>
									<div class="cardv2--landscape__content__body__details_features_item"><span>8,741</span> built sqft</div>
								</div>
							</a>
							<div class="cardv2--landscape__content__body__details_impovement">
								<div class="border-bottom pb-2 mb-2">
			                  		<span class="title">Legal Description:</span> LT 19 BLK 1 HEARTHSTONE ESTATES<br>
							  		<span class="title">Part of Neighborhood:</span> <a href="#">Hearthstone Estates</a>
							  	</div>
							  	<a href="#" class="font_weight--semi_bold">View Nearby Homes For Sale -></a>
			                </div>
			        	</div>
			        	<!-- / card details -->
				    </div>
			        <!-- / card body -->
			    </div>
			    <!-- / card content -->	
	        </div>
			<!-- / card--landscape v2 -->
			
						        	
        </div>
      </div><!-- <div class="row"> -->      
      
      
      
      
      <div class="row pb-4">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h2 class="h2--simple h2--simple__black" tabindex="0">W/ Labels</h2>
        </div>
      </div>

      <div class="row mb-5 pb-5">
        <div class="col col-12 mb-0 pb-0 text-left ">
        
	    	<!-- card--landscape v2 -->
	        <div class="cardv2--landscape">
	        	<!-- / card header -->	        	
	        	<div class="cardv2--landscape__header">	
	        		<div class="cardv2--landscape__header_agent">
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
	        		<div class="cardv2--landscape__header_controls">
	
	        			<button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--dislike btn--desktoponly" aria-label="Button"></button>
	        			<button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--favorited btn--desktoponly" aria-label="Button"></button>
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
	        	
	        	<div class="cardv2--landscape__content">		        	
		        	<div class="cardv2--landscape__content__body">
			        	<a href="https://www.har.com/homedetail/120-carnarvon-dr-houston-tx-77024/3144594">
				        	<!-- card img -->
				        	<div class="cardv2--landscape__content__body__image">
				        		<div class="cardv2--landscape__content__body__image__img" style="background-image:url(https://photos.harstatic.com/194227305/lr/img-1.jpeg?ts=2021-08-06T12:35:50.297);"></div>
				        		
				        		<!-- / card footer -->
						        <div class="cardv2--landscape__content__footer">
						        	<div class="cardv2--landscape__content__footer_dayson">
										<div class="circle_nimber">2</div>  Days on HAR
									</div>
									
									<div class="cardv2--landscape__content__footer_ph">
										<div class="cardv2--landscape__content__footer_ph_3d">
											<img src="https://content.harstatic.com/media/icons/3d_toure.svg">
										</div>
										
										39 Photos, 1 Video
									</div>							
						        </div>
						        <!-- / card footer -->
				        	</div>
				        	<!-- / card img -->
				        </a>
			        	<!-- card header -->
		        		
			        	<!-- card details -->
			        	<div class="cardv2--landscape__content__body__details">
				        	<a href="https://www.har.com/homedetail/120-carnarvon-dr-houston-tx-77024/3144594">
				        		<div class="cardv2--landscape__content__body__details_address">
				        			<div class="cardv2--landscape__content__body__details_address_left">	
				        				<div class="cardv2--landscape__content__body__details_address_left_add">	
				        					<div class="cardv2--landscape__content__body__details_address_left_add__title">3914 Normandy Ave</div>
											Highland Park, TX 5205
										</div>
										<div class="cardv2--landscape__content__body__details_address_left_info">
											<div class="pb-2">
												<div class="label label--forsale_type">For Sale</div>
											</div>
											Residential - Single Family Property<br>
											Style in Mount Vernon 01 & 03 Subdivision
										</div>
				        			</div>
				        			<div class="cardv2--landscape__content__body__details_address_right">	
				        				<div class="cardv2--landscape__content__body__details_price">$13,500,000</div>
										<div class="label label--forsale">Active</div>
									</div>
								</div>
								
								
								<div class="cardv2--landscape__content__body__details_features">
									<div class="cardv2--landscape__content__body__details_features_item"><span>6</span> bedrooms</div>
									<div class="cardv2--landscape__content__body__details_features_item"><span>1986</span> year built</div>
									<div class="cardv2--landscape__content__body__details_features_item"><span>7</span> full & <span>1</span> half baths</div>
									<div class="cardv2--landscape__content__body__details_features_item"><span>0.47</span> Acres</div>		
									<div class="cardv2--landscape__content__body__details_features_item"><span>3</span> stories</div>
									<div class="cardv2--landscape__content__body__details_features_item">Private Pool</div>
									<div class="cardv2--landscape__content__body__details_features_item"><span>8,741</span> built sqft</div>
								</div>
							</a>
							<div class="cardv2--landscape__content__body__details_badges">
								<div class="listingbadges listingbadges--justlisted" style="background-image:url(https://content.harstatic.com/media/icons/icon-listing-just-listed.svg);">Just listed</div>
								<div class="listingbadges listingbadges--pricereduction" style="background-image:url(https://content.harstatic.com/media/icons/icon-price-reduction.svg);">Price Change</div>								
							</div>
			        	</div>
			        	<!-- / card details -->
				    </div>
			        <!-- / card body -->
			    </div>
			    <!-- / card content -->	
	        </div>
			<!-- / card--landscape v2 -->
			
						        	
        </div>
      </div><!-- <div class="row"> -->
      
      
      
      
      
      <div class="row pb-4">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h2 class="h2--simple h2--simple__black" tabindex="0">W/ Labels</h2>
        </div>
      </div>

      <div class="row mb-5 pb-5">
        <div class="col col-12 mb-0 pb-0 text-left ">
        
	    	<!-- card--landscape v2 -->
	        <div class="cardv2--landscape">
	        	<!-- / card header -->	        	
	        	<div class="cardv2--landscape__header">	
	        		<div class="cardv2--landscape__header_agent">
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
	        		<div class="cardv2--landscape__header_controls">
	
	        			<button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--dislike btn--desktoponly" aria-label="Button"></button>
	        			<button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--favorited btn--desktoponly" aria-label="Button"></button>
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
	        	
	        	<div class="cardv2--landscape__content">		        	
		        	<div class="cardv2--landscape__content__body">
			        	<a href="https://www.har.com/homedetail/120-carnarvon-dr-houston-tx-77024/3144594">
				        	<!-- card img -->
				        	<div class="cardv2--landscape__content__body__image">
				        		<div class="cardv2--landscape__content__body__image__img" style="background-image:url(https://photos.harstatic.com/194227305/lr/img-1.jpeg?ts=2021-08-06T12:35:50.297);"></div>
				        		
				        		<!-- / card footer -->
						        <div class="cardv2--landscape__content__footer">
						        	<div class="cardv2--landscape__content__footer_dayson">
										<div class="circle_nimber">2</div>  Days on HAR
									</div>
									
									<div class="cardv2--landscape__content__footer_ph">
										<div class="cardv2--landscape__content__footer_ph_3d">
											<img src="https://content.harstatic.com/media/icons/3d_toure.svg">
										</div>
										
										39 Photos, 1 Video
									</div>							
						        </div>
						        <!-- / card footer -->
				        	</div>
				        	<!-- / card img -->
				        </a>
			        	<!-- card header -->
		        		
			        	<!-- card details -->
			        	<div class="cardv2--landscape__content__body__details">
				        	<a href="https://www.har.com/homedetail/120-carnarvon-dr-houston-tx-77024/3144594">
				        		<div class="cardv2--landscape__content__body__details_address">
				        			<div class="cardv2--landscape__content__body__details_address_left">	
				        				<div class="cardv2--landscape__content__body__details_address_left_add">	
				        					<div class="cardv2--landscape__content__body__details_address_left_add__title">3914 Normandy Ave</div>
											Highland Park, TX 5205
										</div>
										<div class="cardv2--landscape__content__body__details_address_left_info">
											<div class="pb-2">
												<div class="label label--forsale_type">For Sale</div>
											</div>
											Residential - Single Family Property<br>
											Style in Mount Vernon 01 & 03 Subdivision
										</div>
				        			</div>
				        			<div class="cardv2--landscape__content__body__details_address_right">	
				        				<div class="cardv2--landscape__content__body__details_price">$13,500,000</div>
										<div class="label label--forsale">Active</div>
									</div>
								</div>
								
								
								<div class="cardv2--landscape__content__body__details_features">
									<div class="cardv2--landscape__content__body__details_features_item"><span>6</span> bedrooms</div>
									<div class="cardv2--landscape__content__body__details_features_item"><span>1986</span> year built</div>
									<div class="cardv2--landscape__content__body__details_features_item"><span>7</span> full & <span>1</span> half baths</div>
									<div class="cardv2--landscape__content__body__details_features_item"><span>0.47</span> Acres</div>		
									<div class="cardv2--landscape__content__body__details_features_item"><span>3</span> stories</div>
									<div class="cardv2--landscape__content__body__details_features_item">Private Pool</div>
									<div class="cardv2--landscape__content__body__details_features_item"><span>8,741</span> built sqft</div>
								</div>
							</a>
							<div class="cardv2--landscape__content__body__details_badges">
								<div class="listingbadges listingbadges--justlisted" style="background-image:url(https://content.harstatic.com/media/icons/icon-listing-just-listed.svg);">Just listed</div>
								<div class="listingbadges listingbadges--pricereduction" style="background-image:url(https://content.harstatic.com/media/icons/icon-price-reduction.svg);">Price Change</div>
								<div class="listingbadges listingbadges--foreclosure" style="background-image:url(https://content.harstatic.com/media/icons/icon-foreclosure.svg);">Foreclosure</div>
								<div class="listingbadges listingbadges--newconstruction" style="background-image:url(https://content.harstatic.com/media/icons/icon-new-construction.svg);">New construction</div>
								<div class="listingbadges listingbadges--openhouse_simple" style="background-image:url(https://content.harstatic.com/media/icons/icon-open-house.svg);">Open House</div>
							</div>
			        	</div>
			        	<!-- / card details -->
				    </div>
			        <!-- / card body -->
			    </div>
			    <!-- / card content -->	
	        </div>
			<!-- / card--landscape v2 -->
			
						        	
        </div>
      </div><!-- <div class="row"> -->
      
      
      
      
      <div class="row pb-4">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h2 class="h2--simple h2--simple__black" tabindex="0">Sold</h2>
        </div>
      </div>

      <div class="row mb-5 pb-5">
        <div class="col col-12 mb-0 pb-0 text-left ">
        
	    	<!-- card--landscape v2 -->
	        <div class="cardv2--landscape">
	        	<!-- / card header -->	        	
	        	<div class="cardv2--landscape__header">	
	        		<div class="cardv2--landscape__header_agent">
	        			<div class="cardv2--landscape__header_agent_title"><span class="font_weight--bold">Represented:</span> Buyer</div>
	        		</div>
	        		<div class="cardv2--landscape__header_controls">
	
	        			<button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--dislike btn--desktoponly" aria-label="Button"></button>
	        			<button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--favorited btn--desktoponly" aria-label="Button"></button>
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
	        	
	        	<div class="cardv2--landscape__content">		        	
		        	<div class="cardv2--landscape__content__body">
			        	<a href="https://www.har.com/homedetail/120-carnarvon-dr-houston-tx-77024/3144594">
				        	<!-- card img -->
				        	<div class="cardv2--landscape__content__body__image">
				        		<div class="cardv2--landscape__content__body__image__img" style="background-image:url(https://photos.harstatic.com/194227305/lr/img-1.jpeg?ts=2021-08-06T12:35:50.297);"></div>
				        		
				        		<!-- / card footer -->
						        <div class="cardv2--landscape__content__footer">
						        	<div class="cardv2--landscape__content__footer_dayson">
										<div class="circle_nimber">2</div>  Days on HAR
									</div>
									
									<div class="cardv2--landscape__content__footer_ph">
										39 Photos
									</div>							
						        </div>
						        <!-- / card footer -->
				        	</div>
				        	<!-- / card img -->
				        </a>
			        	<!-- card header -->
		        		
			        	<!-- card details -->
			        	<div class="cardv2--landscape__content__body__details">
				        	<a href="https://www.har.com/homedetail/120-carnarvon-dr-houston-tx-77024/3144594">
				        		<div class="cardv2--landscape__content__body__details_address">
				        			<div class="cardv2--landscape__content__body__details_address_left">	
				        				<div class="cardv2--landscape__content__body__details_address_left_add">	
				        					<div class="cardv2--landscape__content__body__details_address_left_add__title">14302 Laurus Estates Lane Laurus Estates Lane</div>
											Highland Park, TX 5205
										</div>
										<div class="cardv2--landscape__content__body__details_address_left_info">
											Residential - Single Family Property<br>
											Style in Mount Vernon 01 & 03 Subdivision
										</div>
				        			</div>
				        			<div class="cardv2--landscape__content__body__details_address_right">	
				        				<div class="cardv2--landscape__content__body__details_price">$285K - $325K</div>
										<div class="label label--sold">Sold</div>
										<div class="font_weight--bold color_sold pt-3">06/06/2021</div>
									</div>
								</div>
								
								
								<div class="cardv2--landscape__content__body__details_features">
									<div class="cardv2--landscape__content__body__details_features_item"><span>6</span> bedrooms</div>
									<div class="cardv2--landscape__content__body__details_features_item"><span>1986</span> year built</div>
									<div class="cardv2--landscape__content__body__details_features_item"><span>7</span> full & <span>1</span> half baths</div>
									<div class="cardv2--landscape__content__body__details_features_item"><span>0.47</span> Acres</div>		
									<div class="cardv2--landscape__content__body__details_features_item"><span>3</span> stories</div>
									<div class="cardv2--landscape__content__body__details_features_item">Private Pool</div>
									<div class="cardv2--landscape__content__body__details_features_item"><span>8,741</span> built sqft</div>
								</div>
							</a>
			        	</div>
			        	<!-- / card details -->
				    </div>
			        <!-- / card body -->
			    </div>
			    <!-- / card content -->	
	        </div>
			<!-- / card--landscape v2 -->
			
						        	
        </div>
      </div><!-- <div class="row"> -->
      
      
      
      
      
      <div class="row pb-4">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h2 class="h2--simple h2--simple__black" tabindex="0">W/ Open House</h2>
        </div>
      </div>

      <div class="row mb-5 pb-5">
        <div class="col col-12 mb-0 pb-0 text-left ">
        
	    	<!-- card--landscape v2 -->
	        <div class="cardv2--landscape">
	        	<!-- / card header -->	        	
	        	<div class="cardv2--landscape__header">	
	        		<div class="cardv2--landscape__header_agent">
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
	        		<div class="cardv2--landscape__header_controls">
	
	        			<button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--dislike btn--desktoponly" aria-label="Button"></button>
	        			<button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--favorited btn--desktoponly" aria-label="Button"></button>
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
	        	
	        	<div class="cardv2--landscape__content">		        	
		        	<div class="cardv2--landscape__content__body">
			        	<a href="https://www.har.com/homedetail/120-carnarvon-dr-houston-tx-77024/3144594">
				        	<!-- card img -->
				        	<div class="cardv2--landscape__content__body__image">
				        		<div class="cardv2--landscape__content__body__image__img" style="background-image:url(https://photos.harstatic.com/194227305/lr/img-1.jpeg?ts=2021-08-06T12:35:50.297);"></div>
				        		
				        		<!-- / card footer -->
						        <div class="cardv2--landscape__content__footer">
						        	<div class="cardv2--landscape__content__footer_dayson">
										<div class="circle_nimber">2</div>  Days on HAR
									</div>
									
									<div class="cardv2--landscape__content__footer_ph">
										39 Photos
									</div>							
						        </div>
						        <!-- / card footer -->
				        	</div>
				        	<!-- / card img -->
				        </a>
			        	<!-- card header -->
		        		
			        	<!-- card details -->
			        	<div class="cardv2--landscape__content__body__details">
				        	<a href="https://www.har.com/homedetail/120-carnarvon-dr-houston-tx-77024/3144594">
				        		<div class="cardv2--landscape__content__body__details_address">
				        			<div class="cardv2--landscape__content__body__details_address_left">	
				        				<div class="cardv2--landscape__content__body__details_address_left_add">	
				        					3914 Normandy Ave<br>
											Highland Park, TX 5205
										</div>
										<div class="cardv2--landscape__content__body__details_address_left_info">
											<div class="pb-2">
												<div class="label label--forsale_type">For Sale</div>
											</div>
											Residential - Single Family Property<br>
											Style in Mount Vernon 01 & 03 Subdivision
										</div>
				        			</div>
				        			<div class="cardv2--landscape__content__body__details_address_right">	
				        				<div class="cardv2--landscape__content__body__details_price">$13,500,000</div>
										<div class="label label--forsale">Active</div>
									</div>
								</div>
								
								
								<div class="cardv2--landscape__content__body__details_features">
									<div class="cardv2--landscape__content__body__details_features_item"><span>6</span> bedrooms</div>
									<div class="cardv2--landscape__content__body__details_features_item"><span>1986</span> year built</div>
									<div class="cardv2--landscape__content__body__details_features_item"><span>7</span> full & <span>1</span> half baths</div>
									<div class="cardv2--landscape__content__body__details_features_item"><span>0.47</span> Acres</div>		
									<div class="cardv2--landscape__content__body__details_features_item"><span>3</span> stories</div>
									<div class="cardv2--landscape__content__body__details_features_item">Private Pool</div>
									<div class="cardv2--landscape__content__body__details_features_item"><span>8,741</span> built sqft</div>
								</div>
							</a>
							<div class="cardv2--landscape__content__body__details_badges">
								<div class="cardv2--landscape__content__body__details_badges_openhouse">
						        	<div class="label label--openhouse">Open House</div>
						        	<div class="pl-2">
						        		<div class="font_weight--bold">Aug 11</div>
										11:00 AM – 6:00 PM
									</div>
						        </div>
							</div>
			        	</div>
			        	<!-- / card details -->
				    </div>
			        <!-- / card body -->
			    </div>
			    <!-- / card content -->	
	        </div>
			<!-- / card--landscape v2 -->
			
						        	
        </div>
      </div><!-- <div class="row"> -->
      
            
      
      
      
      
      
      <div class="row pb-4">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h2 class="h2--simple h2--simple__black" tabindex="0">W/ Labels + Tax</h2>
        </div>
      </div>

      <div class="row mb-5 pb-5">
        <div class="col col-12 mb-0 pb-0 text-left ">
        
	    	<!-- card--landscape v2 -->
	        <div class="cardv2--landscape">
	        	<!-- / card header -->	        	
	        	<div class="cardv2--landscape__header">	
	        		<div class="cardv2--landscape__header_agent">
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
	        		<div class="cardv2--landscape__header_controls">
	
	        			<button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--dislike btn--desktoponly" aria-label="Button"></button>
	        			<button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--favorited btn--desktoponly" aria-label="Button"></button>
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
	        	
	        	<div class="cardv2--landscape__content">		        	
		        	<div class="cardv2--landscape__content__body">
			        	<a href="https://www.har.com/homedetail/120-carnarvon-dr-houston-tx-77024/3144594">
				        	<!-- card img -->
				        	<div class="cardv2--landscape__content__body__image">
				        		<div class="cardv2--landscape__content__body__image__img" style="background-image:url(https://photos.harstatic.com/194227305/lr/img-1.jpeg?ts=2021-08-06T12:35:50.297);"></div>
				        		
				        		<!-- / card footer -->
						        <div class="cardv2--landscape__content__footer">
						        	<div class="cardv2--landscape__content__footer_dayson">
										<div class="circle_nimber">2</div>  Days on HAR
									</div>
									
									<div class="cardv2--landscape__content__footer_ph">
										<div class="cardv2--landscape__content__footer_ph_3d">
											<img src="https://content.harstatic.com/media/icons/3d_toure.svg">
										</div>
										
										39 Photos, 1 Video
									</div>							
						        </div>
						        <!-- / card footer -->
				        	</div>
				        	<!-- / card img -->
				        </a>
			        	<!-- card header -->
		        		
			        	<!-- card details -->
			        	<div class="cardv2--landscape__content__body__details">
				        	<a href="https://www.har.com/homedetail/120-carnarvon-dr-houston-tx-77024/3144594">
				        		<div class="cardv2--landscape__content__body__details_address">
				        			<div class="cardv2--landscape__content__body__details_address_left">	
				        				<div class="cardv2--landscape__content__body__details_address_left_add">	
				        					<div class="cardv2--landscape__content__body__details_address_left_add__title">3914 Normandy Ave</div>
											Highland Park, TX 5205
										</div>
										<div class="cardv2--landscape__content__body__details_address_left_info">
											<div class="pb-2">
												<div class="label label--forsale_type">For Sale</div>
											</div>
											Residential - Single Family Property<br>
											Style in Mount Vernon 01 & 03 Subdivision
										</div>
				        			</div>
				        			<div class="cardv2--landscape__content__body__details_address_right">	
				        				<div class="cardv2--landscape__content__body__details_price">$13,500,000</div>
										<div class="cardv2--landscape__content__body__details_address_right_txt">
											Market Value<br>
											Appraisal District
										</div>
									</div>
								</div>
								
								
								<div class="cardv2--landscape__content__body__details_features">
									<div class="cardv2--landscape__content__body__details_features_item"><span>6</span> bedrooms</div>
									<div class="cardv2--landscape__content__body__details_features_item"><span>1986</span> year built</div>
									<div class="cardv2--landscape__content__body__details_features_item"><span>7</span> full & <span>1</span> half baths</div>
									<div class="cardv2--landscape__content__body__details_features_item"><span>0.47</span> Acres</div>		
									<div class="cardv2--landscape__content__body__details_features_item"><span>3</span> stories</div>
									<div class="cardv2--landscape__content__body__details_features_item">Private Pool</div>
									<div class="cardv2--landscape__content__body__details_features_item"><span>8,741</span> built sqft</div>
								</div>
							</a>
							<div class="cardv2--landscape__content__body__details_impovement">
								<div class="border-bottom pb-2 mb-2">
			                  		<span class="title">Legal Description:</span> LT 19 BLK 1 HEARTHSTONE ESTATES<br>
							  		<span class="title">Part of Neighborhood:</span> <a href="#">Hearthstone Estates</a>
							  	</div>
							  	<a href="#" class="font_weight--semi_bold">View Nearby Homes For Sale -></a>
			                </div>
			                <div class="cardv2--landscape__content__body__details_badges">
								<div class="listingbadges listingbadges--justlisted" style="background-image:url(https://content.harstatic.com/media/icons/icon-listing-just-listed.svg);">Just listed</div>
								<div class="listingbadges listingbadges--pricereduction" style="background-image:url(https://content.harstatic.com/media/icons/icon-price-reduction.svg);">Price Change</div>
							</div>
			        	</div>
			        	<!-- / card details -->
				    </div>
			        <!-- / card body -->
			    </div>
			    <!-- / card content -->	
	        </div>
			<!-- / card--landscape v2 -->
			
						        	
        </div>
      </div><!-- <div class="row"> --> 
      
      
      
      
      <div class="row pb-4">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h2 class="h2--simple h2--simple__black" tabindex="0">Highrise Finder</h2>
        </div>
      </div>

      <div class="row mb-5 pb-5">
        <div class="col col-12 mb-0 pb-0 text-left ">
        
	    	<!-- card--landscape v2 -->
	        <div class="cardv2--landscape">
	        	<!-- / card header -->	        	
	        	<div class="cardv2--landscape__header">	
	        		<div class="cardv2--landscape__header_agent">
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
	        		<div class="cardv2--landscape__header_controls">
	
	        			<button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--dislike btn--desktoponly" aria-label="Button"></button>
	        			<button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--favorited btn--desktoponly" aria-label="Button"></button>
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
	        	
	        	<div class="cardv2--landscape__content">		        	
		        	<div class="cardv2--landscape__content__body">
			        	<a href="https://www.har.com/homedetail/120-carnarvon-dr-houston-tx-77024/3144594">
				        	<!-- card img -->
				        	<div class="cardv2--landscape__content__body__image">
				        		<div class="cardv2--landscape__content__body__image__img bg__bottom" style="background-image: url(https://content.harstatic.com/high_rise/lr/196_1.jpg);"></div>
				        		
				        		<!-- / card footer -->
						        <div class="cardv2--landscape__content__footer">
						        	<div class="cardv2--landscape__content__footer_dayson">
										<div class="circle_nimber">2</div>  Days on HAR
									</div>
									
									<div class="cardv2--landscape__content__footer_ph">
										39 Photos, 1 Video
									</div>							
						        </div>
						        <!-- / card footer -->
				        	</div>
				        	<!-- / card img -->
				        </a>
			        	<!-- card header -->
		        		
			        	<!-- card details -->
			        	<div class="cardv2--landscape__content__body__details">
				        	<a href="https://www.har.com/homedetail/120-carnarvon-dr-houston-tx-77024/3144594">
				        		<div class="cardv2--landscape__content__body__details_address">
				        			<div class="cardv2--landscape__content__body__details_address_left">	
				        				<div class="cardv2--landscape__content__body__details_address_left_add">	
				        					<div class="cardv2--landscape__content__body__details_address_left_add__title">3914 Normandy Ave</div>
											Highland Park, TX 5205
										</div>
										<div class="cardv2--landscape__content__body__details_address_left_info">
											<div class="pb-2">
												<div class="label label--forsale_type">For Sale</div>
											</div>
											Residential - Single Family Property<br>
											Style in Mount Vernon 01 & 03 Subdivision
										</div>
				        			</div>
				        			<div class="cardv2--landscape__content__body__details_address_right">	
				        				<div class="cardv2--landscape__content__body__details_price">$13,500,000</div>
										<div class="label label--forsale">Active</div>
									</div>
								</div>
								
								
								<div class="cardv2--landscape__content__body__details_features">
									<div class="cardv2--landscape__content__body__details_features_item"><span>6</span> bedrooms</div>
									<div class="cardv2--landscape__content__body__details_features_item"><span>1986</span> year built</div>
									<div class="cardv2--landscape__content__body__details_features_item"><span>7</span> full & <span>1</span> half baths</div>
									<div class="cardv2--landscape__content__body__details_features_item"><span>0.47</span> Acres</div>		
									<div class="cardv2--landscape__content__body__details_features_item"><span>3</span> stories</div>
									<div class="cardv2--landscape__content__body__details_features_item">Private Pool</div>
									<div class="cardv2--landscape__content__body__details_features_item"><span>8,741</span> built sqft</div>
								</div>
							</a>
							
			        	</div>
			        	<!-- / card details -->
				    </div>
			        <!-- / card body -->
			    </div>
			    <!-- / card content -->	
	        </div>
			<!-- / card--landscape v2 -->
			
						        	
        </div>
      </div><!-- <div class="row"> -->
      
      
      
      
      
      <div class="row pb-4">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h2 class="h2--simple h2--simple__black" tabindex="0">Mini card</h2>
        </div>
      </div>

      <div class="row mb-5 pb-5">
        <div class="col col-12 mb-0 pb-0 text-left ">
        <div style="max-width:343px;">
	    	
	    	
	    	<!-- card--mini v2 -->
	        <div class="cardv2--mini">
	        	<div class="cardv2--mini__content">		        	
		        	<div class="cardv2--mini__content__body">
			        	<a href="https://www.har.com/homedetail/120-carnarvon-dr-houston-tx-77024/3144594">
				        	<!-- card img -->
				        	<div class="cardv2--mini__content__body__image">
				        		<div class="cardv2--mini__content__body__image__img bg__bottom" style="background-image: url(https://content.harstatic.com/high_rise/lr/196_1.jpg);"></div>				        		
				        	</div>
				        	<!-- / card img -->
				        </a>
			        	<!-- card header -->
		        		
			        	<!-- card details -->
			        	<div class="cardv2--mini__content__body__details">
				        	<a href="https://www.har.com/homedetail/120-carnarvon-dr-houston-tx-77024/3144594">
				        		<div class="cardv2--mini__content__body__details_address">
				        			<div class="cardv2--mini__content__body__details_address_left">	
				        				<div class="cardv2--mini__content__body__details_price">$7,009,00</div>
				        			</div>
				        			<div class="cardv2--mini__content__body__details_address_right">				        				
										<div class="label label--forsale">Active</div>
									</div>
								</div>
								
								<div class="">
									<div class="cardv2--mini__content__body__details_address_left_add">			        					
										9 West Lane<br>
										Houston, TX 77019
									</div>
									<div class="cardv2--mini__content__body__details_features">
										<ul>
											<li>5 beds</li>
											<li>5 baths</li>
											<li>7,551 sqft</li>
										</ul>
									</div>
									
									<div class="cardv2--mini__content__body__details_dayson">
										<div class="circle_nimber">2</div>  Days on HAR
									</div>
								</div>
							</a>
							
			        	</div>
			        	<!-- / card details -->
				    </div>
			        <!-- / card body -->
			    </div>
			    <!-- / card content -->	
	        </div>
			<!-- / card--mini v2 -->
			
			
			
			
			
			<!-- card--mini v2 -->
	        <div class="cardv2--mini">
	        	<div class="cardv2--mini__content">		        	
		        	<div class="cardv2--mini__content__body">
			        	<a href="https://www.har.com/homedetail/120-carnarvon-dr-houston-tx-77024/3144594">
				        	<!-- card img -->
				        	<div class="cardv2--mini__content__body__image">
				        		<div class="cardv2--mini__content__body__image__img bg__bottom" style="background-image: url(https://content.harstatic.com/high_rise/lr/196_1.jpg);"></div>				        		
				        	</div>
				        	<!-- / card img -->
				        </a>
			        	<!-- card header -->
		        		
			        	<!-- card details -->
			        	<div class="cardv2--mini__content__body__details">
				        	<a href="https://www.har.com/homedetail/120-carnarvon-dr-houston-tx-77024/3144594">
				        		<div class="cardv2--mini__content__body__details_address">
				        			<div class="cardv2--mini__content__body__details_address_left">	
				        				<div class="cardv2--mini__content__body__details_price">$7,009,00</div>
				        			</div>
				        			<div class="cardv2--mini__content__body__details_address_right">				        				
										<div class="label label--sold">Sold</div>
									</div>
								</div>
								
								<div class="">
									<div class="cardv2--mini__content__body__details_address_left_add">			        					
										9 West Lane<br>
										Houston, TX 77019
									</div>
									<div class="cardv2--mini__content__body__details_features">
										<ul>
											<li>5 beds</li>
											<li>5 baths</li>
											<li>7,551 sqft</li>
										</ul>
									</div>
									
									<div class="font_weight--semi_bold color_sold text-right pt-2">Sold: 06 June, 2021</div>
								</div>
							</a>
							
			        	</div>
			        	<!-- / card details -->
				    </div>
			        <!-- / card body -->
			    </div>
			    <!-- / card content -->	
	        </div>
			<!-- / card--mini v2 -->
			
			
		</div>			        	
        </div>
      </div><!-- <div class="row"> -->
      
      
      
      
      <div class="row pb-4">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h2 class="h2--simple h2--simple__black" tabindex="0">Highrise Finder</h2>
        </div>
      </div>

      <div class="row mb-5 pb-5">
        <div class="col col-12 mb-0 pb-0 text-left ">        
			<div class="highrise_card">
				<a href="#" class="highrise_card__img" style="background-image:url(https://content.harstatic.com/high_rise/hr/1074_1.jpg);"></a>
				<div class="highrise_card__cont">
					<a href="#">
						<h4 tabindex="0">1011 STUDEMONT</h4>
						
						<div class="highrise_card__cont__loca d-flex">
							<img src="https://content.harstatic.com/media/icons/map_carbon.svg" class="mr-2">
							<span>1011 Studemont St, Houston, TX 77077</span>
						</div>
						<div class="highrise_card__cont__labels">
							<div class="label label--forsale_round">2 units for sale</div>
							<div class="label label--forrent_round">2 units for rent</div>
						</div>
						
						<div class="highrise_card__cont__feat">
							<div class="card--listing__body__content__description_row">
			                    <span class="font_weight--semi_bold color_carbon pr-1">11</span> floors
			                </div>
			                
			                <div class="card--listing__body__content__description_row">
			                    <span class="font_weight--semi_bold color_carbon pr-1">60</span> units
			                </div>
			                
			                <div class="card--listing__body__content__description_row">
			                    <span class="font_weight--semi_bold color_carbon pr-1">N/A</span> penthouses
			                </div>
			                
			                <div class="card--listing__body__content__description_row">
			                    <span class="font_weight--semi_bold color_carbon pr-1">2002</span> year built
			                </div>
			                
			                <div class="clearfix"></div>
		                </div>
		                
		                <div class="highrise_card__cont__desc">
		                The Bayou Bend Towers are located on Westcott St. and wedged between Memorial Park and the Buffalo Bayou. With 3+ acres of private gardens and walking trails along the Buffalo Bayou, residents feel the private estate-like setting not often found in urban living.
	
	The high-rise sits adjacent to a bird sanctuary and the Houston Museum of Fine Arts. Residents enjoy the walkability to Memorial Park and the Buffalo Bayou Trails. While the high-rise is set back from busy streets, the Bayou Bend Towers also enjoy easy access to Houston and offer amazing views of the Buffalo Bayou, River Oaks Country Club, and Downtown Houston.
	
	If you are interested in relocating to Houston and looking for a high-rise, search and filter to find Houston high-rises and a licensed agent who works in, and is familiar with, the Houston Area neighborhoods.
						</div>
					</a>
				</div>
			</div>
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
