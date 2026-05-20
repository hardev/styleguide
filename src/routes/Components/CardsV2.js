import React, {Component} from "react";
import TemplateDefault from '../../components/TemplateDefault';
import TemplateComponentBlock from '../../components/TemplateComponentBlock';

export default class CardsV2 extends Component {

  constructor(props) {
    super(props);

    this.elements = [
      `<div class="row">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 tabindex="0">Home Screen Cards Buttons</h4>
          <br><br>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-12 mb-0">
          <a href="#" class="cardv2 cardv2--bigbuttons" style="background-image:url(https://content.harstatic.com/media/artwork/artwork_home_buy.svg);">
            <h3 tabindex="0">Buy a Home</h3>
            <div class="cardv2--area__desc">
            	Ready to find your new home? Browse Texas property listings with HAR’s powerful search tool.
			</div>
			<div class="cardv2--area__link">Search Homes →</div>
          </a>
        </div>
        
        <div class="col col-md-6 col-12 mb-0">
          <a href="#" class="cardv2 cardv2--bigbuttons" style="background-image:url(https://content.harstatic.com/media/artwork/artwork_home_rent.svg);">
            <h3 tabindex="0">Rent a Home</h3>
            <div class="cardv2--area__desc">
            	Looking for a home but not ready to buy? Search HAR for hundreds of rental opportunities. 
			</div>
			<div class="cardv2--area__link">Find Rentals →</div>
          </a>
        </div>
        
        <div class="col-md-6 col-12 mb-0">
          <a href="#" class="cardv2 cardv2--bigbuttons" style="background-image:url(https://content.harstatic.com/media/artwork/artwork_home_browsing.svg);">
            <h3 tabindex="0">Just Browsing</h3>
            <div class="cardv2--area__desc">
            	HAR has tools to help you find local agents, home listings, and rental opportunities.
			</div>
			<div class="cardv2--area__link">Start Browsing →</div>
          </a>
        </div>
        
        <div class="col col-md-6 col-12 mb-0">
          <a href="#" class="cardv2 cardv2--bigbuttons" style="background-image:url(https://content.harstatic.com/media/artwork/artwork_home_finance.svg);">
            <h3 tabindex="0">Finance a Home</h3>
            <div class="cardv2--area__desc">
            	Looking for a home mortgage? HAR offers online tools to help you finance your next home.  
			</div>
			<div class="cardv2--area__link">Start Financing →</div>
          </a>
        </div>
                
        <div class="clear_both"></div>
      </div>
      
      
      
      <div class="row">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 tabindex="0">Aria Cards</h4>
        </div>
      </div>
      <div class="row">
        <div class="col col-12 mb-0">
          <a href="#" class="cardv2 cardv2--area">
            <h3 tabindex="0">Woodlands - Village Of Cochrans Crossing</h3>
            <div class="cardv2--area__desc">
            	5,282 homes for sale
            	<br>
				$353k average price
			</div>
			<div class="cardv2--area__link">Listings in this nbhd →</div>
			<div class="cardv2--area__map" style="background-image:url(https://content.harstatic.com/media/temprary/screenshot_drawed2.jpg);"></div>
          </a>
        </div>
        <div class="col col-sm-4 col-12 mb-0">
          
        </div>
        <div class="col col-sm-4 col-12 mb-0">
          
        </div>        
        <div class="clear_both"></div>
      </div>
      `,
	  `<div class="row">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 tabindex="0">Bages Cards</h4>
        </div>
      </div>
      <div class="row">
        <div class="col col-6 mb-0">
          <a href="#" class="cardv2 cardv2--badges">
            <div class="label label--badges label--badges__justlisted">Just Listed</div>
            <div class="cardv2--badges__desc">
            	Check out just listed<br>real estate in HAR
			</div>
			<div class="cardv2--badges__link">View listings →</div>
          </a>
        </div>
        <div class="col col-6 mb-0">
          <a href="#" class="cardv2 cardv2--badges">
            <div class="label label--badges label--badges__openhouse">Open House</div>
            <div class="cardv2--badges__desc">
            	Pay a visit to several houses<br>ready for you to visit
			</div>
			<div class="cardv2--badges__link">View listings →</div>
          </a>
        </div>
        
        
        
        <div class="clear_both"></div>
      </div>
      
      
      <div class="row">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 tabindex="0">Bages Cards</h4>
        </div>
      </div>
      <div class="row">
        <div class="col col-6 mb-0">
          <a href="#" class="cardv2 cardv2--badges cardv2--badges__mini">
            <div class="cardv2--badges__mini__title">Inspectors</div>
            <div class="cardv2--badges__mini__number">704 providers</div>
          </a>
        </div>
        <div class="col col-6 mb-0">
          <a href="#" class="cardv2 cardv2--badges cardv2--badges__mini">
            <div class="cardv2--badges__mini__title">Photography</div>
            <div class="cardv2--badges__mini__number">151 providers</div>
          </a>
        </div>
        
        
        
        <div class="clear_both"></div>
      </div>
      
      
      
      
      <div class="row">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 tabindex="0">Listings Provided by Card</h4>
        </div>
      </div>
      
      <div class="row">
        <div class="col col-4 mb-0">
          <a href="#" class="cardv2 cardv2--providedby">
            <div class="cardv2--providedby__image"><img src="https://pics.harstatic.com/office/984310.jpg"></div>
            <div class="cardv2--providedby__desc">
            	eXp Realty LLC
			</div>
          </a>
        </div>
        
        <div class="col col-4 mb-0">
          <a href="#" class="cardv2 cardv2--providedby">
            <div class="cardv2--providedby__image"><img src="https://pics.harstatic.com/office/990028.jpg"></div>
            <div class="cardv2--providedby__desc">
            	Houston, Compass RE Texas, LLC
			</div>
          </a>
        </div>
        
        <div class="col col-4 mb-0">
          <a href="#" class="cardv2 cardv2--providedby">
            <div class="cardv2--providedby__image"><img src="https://pics.harstatic.com/office/987301.jpg"></div>
            <div class="cardv2--providedby__desc">
            	HomeSmart Fine Properties
			</div>
          </a>
        </div>
        
        <div class="clear_both"></div>
      </div>
      
      
      `,
      `<div class="row">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 tabindex="0">Neighborhood Cards</h4>
        </div>
      </div>
      <div class="row">
        <div class="col col-12 mb-0">
          <a href="#" class="cardv2 cardv2--neighbors">            
            <div class="cardv2--neighbors__address text-truncate">1 Of West 20 3rd Street Piazza</div>
            <div class="cardv2--neighbors__subdiv"><div class="label label--typeahead  label--typeahead_neighborhood">Neighborhood</div></div>
            <div class="cardv2--neighbors__zip">77008</div>
            <div class="cardv2--neighbors__city">Harris</div>
            <div class="cardv2--neighbors__state">Houston, TX</div>
          </a>
        </div>
        <div class="col col-sm-4 col-12 mb-0">
          
        </div>
        <div class="col col-sm-4 col-12 mb-0">
          
        </div>        
        <div class="clear_both"></div>
      </div>
      `,
      `<div class="row">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 tabindex="0">Ratings Cards</h4>
        </div>
      </div>
      <div class="row">
        <div class="col col-12 mb-0">
          <!-- rating card -->
          <a href="#" class="cardv2 cardv2--rating">
          	<div class="cardv2--rating__header">          	
	          	<!-- Basic agent signature -->
				<div class="agent_signature cursor--pointer mb-0" onclick="location.href='https://www.har.com/shadrick-bogany/agent_BOGANYS'; return false;">
					<div class="agent_signature agent_signature__photo">
					  <div title="View Shadrick Bogany's profile" style="background-image:url('https://pics.harstatic.com/agent/312961.jpg');"></div>
					</div>
					<div class="agent_signature agent_signature__info">
					  <div class="agent_signature agent_signature__info agent_signature__info__agent_name"  title="View Shadrick Bogany's profile" aria-label="View Shadrick Bogany's profile">
					    Shadrick Bogany
					  </div>
					  <div class="agent_signature agent_signature__info agent_signature__info__broker_name" title="View Better Homes And Gardens Real's page" aria-label="View Better Homes And Gardens Real's page">
					    Better Homes And Gardens Real
					  </div>
					</div>
				</div>  
	          
	          	<div class="cardv2--rating__header__icons">
	          		<div onclick="location.href='#'; return false;" class="cardv2--rating__icons_icon" data-toggle="tooltip" data-placement="top" title="Report issue"><img style="width:18px;" src="https://content.harstatic.com/media/icons/icon-info_auxiliary.svg"></div>
	          		<div onclick="location.href='#'; return false;" class="cardv2--rating__icons_icon" data-toggle="tooltip" data-placement="top" title="Print"><img style="width:18px;" src="https://content.harstatic.com/media/icons/icon-print_auxiliary.svg"></div>
	          		<div onclick="location.href='#'; return false;" class="cardv2--rating__icons_icon" data-toggle="tooltip" data-placement="top" title="Share"><img style="width:20px;" src="https://content.harstatic.com/media/icons/share_gray.svg"></div>
	          	</div>
          	</div>
            <div class="cardv2--rating__prop">
            	<div class="cardv2--rating__prop_img" style="background-image: url(https://photos.harstatic.com/153440342/hr/img-1.jpeg?ts=2018-09-13T14:59:06.353);"></div>
            	<div class="cardv2--rating__prop_text">
            		<h4 tabindex="0">Southlake Drive</h4>
            		<div class="cardv2--rating__prop_text_desc"><span>Survey on Nov 12, 2018</span></div>            		
            	</div>
            	<div class="label label--badges label--badges__small label--badges__justlisted mb-0 ml-md-auto mt-3 mt-md-0 h-auto">Represented the Buyer</div>
            </div>
        	<div class="cardv2--rating__chart">
            	<div class="cardv2--rating__chart__outof">
            		<div class="cardv2--rating__chart__outof--inner">
            			<span>4.4</span>
						Out of 5.0
            		</div>
            		<div class="cardv2--rating__chart__outof--stars">
            			<img src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg">
            			<img src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg">
            			<img src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg">
            			<img src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg">
            			<img src="https://content.harstatic.com/media/icons/stars_16by16_gray.svg">
            	    </div>
            	</div>
            	<div class="cardv2--rating__chart__ratings">
            		<div class="ratingbar">
            			<div class="ratingbar__title">Competency</div>
            			<div class="ratingbar__bar"><div class="ratingbar__bar_filled" style="width:80%;"></div></div>
            			<div class="ratingbar__number"><strong>5.0</strong>/50</div>
            		</div>
        		
            		<div class="ratingbar">
            			<div class="ratingbar__title">Knowledge</div>
            			<div class="ratingbar__bar"><div class="ratingbar__bar_filled" style="width:30%;"></div></div>
            			<div class="ratingbar__number"><strong>4.0</strong>/50</div>
            		</div>
            		
            		<div class="ratingbar">
            			<div class="ratingbar__title">Communication</div>
            			<div class="ratingbar__bar"><div class="ratingbar__bar_filled" style="width:60%;"></div></div>
            			<div class="ratingbar__number"><strong>4.0</strong>/50</div>
            		</div>
        		
            		<div class="ratingbar">
            			<div class="ratingbar__title">Experience</div>
            			<div class="ratingbar__bar"><div class="ratingbar__bar_filled" style="width:80%;"></div></div>
            			<div class="ratingbar__number"><strong>5.0</strong>/50</div>
            		</div>
            	</div>
			</div>
			
			<p>“Mathews is always professional and goes over and above her job description. Wouldn't never use think to use anyone other than her as my agent.”</p>
			
			          
          </a>          
          <!-- / rating card -->
        </div>
        <div class="col col-sm-4 col-12 mb-0">
          
        </div>
        <div class="col col-sm-4 col-12 mb-0">
          
        </div>        
        <div class="clear_both"></div>
      </div>
      `,
      `<div class="row">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 tabindex="0">Appraisers Cards</h4>
        </div>
      </div>
      <div class="row">
        <div class="col col-12 mb-0">
          <div class="cardv2 cardv2--appraisers">          	
          	<div class="cardv2--appraisers__links">
          		<h3 tabindex="0">Abilene</h3>
				<a href="#">19 Certified Residential Appraiser in Abilene</a>
				<a href="#">17 Certified General Appraiser in Abilene</a>
				<a href="#">7 Appraiser Trainee in Abilene</a>
				<a href="#">1 Licensed Residential Appraiser in Abilene</a>
          	</div>
            <div class="cardv2--appraisers__viewall"><a href="#">All appraisers in Abilene -></a></div>
          </div>
        </div>
        <div class="col col-sm-4 col-12 mb-0">
          
        </div>
        <div class="col col-sm-4 col-12 mb-0">
          
        </div>        
        <div class="clear_both"></div>
      </div>
      `,
      `<div class="row">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 tabindex="0">School Cards</h4>
        </div>
      </div>
      <div class="row">
        <div class="col col-12 mb-0">
          <div class="cardv2 cardv2--school">
          	<div class="cardv2--school__image_content">
              <a href="#" class="cardv2--school__image_content__image" style="background-image:url('https://content.harstatic.com/media/temprary/oak_forest_temp_map.png');"></a>
            </div>          	
          	<div class="cardv2--school__content">
          		<a href="#">
        		<h4 tabindex="0" class="color_carbon mb-2">Nueces Canyon Lorem Ipsum Dolor School Elementary School</h4>
        		<div class="pb-2">Grade Span: <span class=" font_weight--bold">PK - 05</span></div>
            	<div class="pb-3">
	            		<img alt="" class="pb-1 mr-1" src="https://content.harstatic.com/media/icons/stars/star_full.svg" style="width:16px;"><img alt="" class="pb-1 mr-1" src="https://content.harstatic.com/media/icons/stars/star_half_and_quarter.svg" style="width:16px;"><img alt="" class="pb-1 mr-1" src="https://content.harstatic.com/media/icons/stars/star_half.svg" style="width:16px;"><img alt="" class="pb-1 mr-1" src="https://content.harstatic.com/media/icons/stars/star_quarter.svg" style="width:16px;"><img alt="" class="pb-1 mr-1" src="https://content.harstatic.com/media/icons/stars/star_gray.svg" style="width:16px;">
					</div>
				<div class="label label--grade label--grade_a">A</div><span class="font_size--medium color_auxiliary">Excellent</span>
				<div class="pt-3">
					<img src="https://content.harstatic.com/media/icons/school-grade-medal.svg">
					<img src="https://content.harstatic.com/media/icons/school-grade-medal.svg">
					<img src="https://content.harstatic.com/media/icons/school-grade-medal.svg">
					<img src="https://content.harstatic.com/media/icons/school-grade-medal.svg">
				</div>
				</a>
            </div>
          </div>
        </div>
        <div class="col col-12 mb-0">
          <div class="cardv2 cardv2--school">
          	<div class="cardv2--school__image_content">
              <a href="#" class="cardv2--school__image_content__image" style="background-image:url('https://content.harstatic.com/media/temprary/oak_forest_temp_map.png');"></a>
            </div>          	
          	<div class="cardv2--school__content">
          		<a href="#">
	        		<h4 tabindex="0" class="color_carbon mb-2">Nueces Canyon Lorem Ipsum Dolor School Elementary School</h4>
	        		<div class="pb-2">Grade Span: <span class=" font_weight--bold">PK - 05</span></div>
	            	<div class="pb-3">
	            		<img alt="" class="pb-1 mr-1" src="https://content.harstatic.com/media/icons/stars/star_full.svg" style="width:16px;"><img alt="" class="pb-1 mr-1" src="https://content.harstatic.com/media/icons/stars/star_half_and_quarter.svg" style="width:16px;"><img alt="" class="pb-1 mr-1" src="https://content.harstatic.com/media/icons/stars/star_half.svg" style="width:16px;"><img alt="" class="pb-1 mr-1" src="https://content.harstatic.com/media/icons/stars/star_quarter.svg" style="width:16px;"><img alt="" class="pb-1 mr-1" src="https://content.harstatic.com/media/icons/stars/star_gray.svg" style="width:16px;">
					</div>
					<div class="label label--grade label--grade_a">A</div><span class="font_size--medium color_auxiliary">Excellent</span>
					<div class="pt-3">
						<img src="https://content.harstatic.com/media/icons/school-grade-medal.svg">
						<img src="https://content.harstatic.com/media/icons/school-grade-medal.svg">
						<img src="https://content.harstatic.com/media/icons/school-grade-medal.svg">
						<img src="https://content.harstatic.com/media/icons/school-grade-medal.svg">
					</div>
				</a>
				<div class="cardv2--school__content__impovement">
				  	<a href="#" class="font_weight--semi_bold">View Nearby Homes For Sale -&gt;</a>
                </div>
            </div>
          </div>
        </div>
        <div class="clear_both"></div>
      </div>
      `,
      `<div class="row">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 tabindex="0">School Cards Portrait</h4>
        </div>
      </div>
      <div class="row">
        <div class="col col-12 col-md-6 mb-0">
          <div class="cardv2 cardv2--school cardv2--school__portrait">
          	<div class="cardv2--school__image_content">
              <a href="#" class="cardv2--school__image_content__image" style="background-image:url('https://content.harstatic.com/media/temprary/oak_forest_temp_map.png');"></a>
            </div>          	
          	<div class="cardv2--school__portrait__content">
          		<a href="#">
        		<h4 tabindex="0" class="color_carbon mb-2">Nueces Canyon Lorem Ipsum Dolor School Elementary School</h4>
        		<div class="pb-2">Grade Span: <span class=" font_weight--bold">PK - 05</span></div>
            	<div class="pb-3">
	            		<img alt="" class="pb-1 mr-1" src="https://content.harstatic.com/media/icons/stars/star_full.svg" style="width:16px;"><img alt="" class="pb-1 mr-1" src="https://content.harstatic.com/media/icons/stars/star_half_and_quarter.svg" style="width:16px;"><img alt="" class="pb-1 mr-1" src="https://content.harstatic.com/media/icons/stars/star_half.svg" style="width:16px;"><img alt="" class="pb-1 mr-1" src="https://content.harstatic.com/media/icons/stars/star_quarter.svg" style="width:16px;"><img alt="" class="pb-1 mr-1" src="https://content.harstatic.com/media/icons/stars/star_gray.svg" style="width:16px;">
					</div>
				<div class="label label--grade label--grade_a">A</div><span class="font_size--medium color_auxiliary">Excellent</span>
				<div class="pt-3">
					<img src="https://content.harstatic.com/media/icons/school-grade-medal.svg">
					<img src="https://content.harstatic.com/media/icons/school-grade-medal.svg">
					<img src="https://content.harstatic.com/media/icons/school-grade-medal.svg">
					<img src="https://content.harstatic.com/media/icons/school-grade-medal.svg">
				</div>
				</a>
            </div>
          </div>
        </div>
        <div class="col col-12 col-md-6 mb-0">
          <div class="cardv2 cardv2--school cardv2--school__portrait">
          	<div class="cardv2--school__image_content">
              <a href="#" class="cardv2--school__image_content__image" style="background-image:url('https://content.harstatic.com/media/temprary/oak_forest_temp_map.png');"></a>
            </div>          	
          	<div class="cardv2--school__portrait__content">
          		<a href="#">
	        		<h4 tabindex="0" class="color_carbon mb-2">Nueces Canyon Lorem Ipsum Dolor School Elementary School</h4>
	        		<div class=" pb-2">Grade Span: <span class=" font_weight--bold">PK - 05</span></div>
	            	<div class="pb-3">
	            		<img alt="" class="pb-1 mr-1" src="https://content.harstatic.com/media/icons/stars/star_full.svg" style="width:16px;"><img alt="" class="pb-1 mr-1" src="https://content.harstatic.com/media/icons/stars/star_half_and_quarter.svg" style="width:16px;"><img alt="" class="pb-1 mr-1" src="https://content.harstatic.com/media/icons/stars/star_half.svg" style="width:16px;"><img alt="" class="pb-1 mr-1" src="https://content.harstatic.com/media/icons/stars/star_quarter.svg" style="width:16px;"><img alt="" class="pb-1 mr-1" src="https://content.harstatic.com/media/icons/stars/star_gray.svg" style="width:16px;">
					</div>
					<div class="label label--grade label--grade_a">A</div><span class="font_size--medium color_auxiliary">Excellent</span>
					<div class="pt-3">
						<img src="https://content.harstatic.com/media/icons/school-grade-medal.svg">
						<img src="https://content.harstatic.com/media/icons/school-grade-medal.svg">
						<img src="https://content.harstatic.com/media/icons/school-grade-medal.svg">
						<img src="https://content.harstatic.com/media/icons/school-grade-medal.svg">
					</div>
				</a>
				<div class="cardv2--school__content__impovement">
				  	<a href="#" class="font_weight--semi_bold">View Nearby Homes For Sale -&gt;</a>
                </div>
            </div>
          </div>
        </div>
        <div class="clear_both"></div>
      </div>
      `,
      `
      <div class="row">
        
	        <div class="col col-12 col-md-10 mb-0 text-left">
				<div class="border_radius--default depth h-100 p-4">
					<div class="color_auxiliary">Review of <span class="font_weight--bold">Neighborhoods</span></div>
					<h4 tabindex="0" class="color_carbon font-weight-bold mt-2 mb-2">Afton Oaks / River Oaks</h4>
					<div class="d-inline-block color_slate font_size--small_extra mb-2">
						<img alt="" class="pb-1" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg"><img alt="" class="pb-1" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg"><img alt="" class="pb-1" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg"><img alt="" class="pb-1" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg"><img alt="" class="pb-1" src="https://content.harstatic.com/media/icons/stars_16by16_gray.svg">
						<span class="font_weight--bold ml-1 align-middle">4.0</span> / <span class="mr-2 align-middle">5.0</span> <span class="color_slate_light align-middle">1 year ago</span>
					</div>
					<p class="mb-0 pb-0 color_slate font_size--medium">“It was extremely easy working with Michele. She was knowledgeable and professional and the whole process could not have went any smoother.”</p>
					<div class="row small-gutters pt-3">
						<div class="col-3">
							<div class="bg--image border_radius--default w-100" style="background-image: url('https://content.harstatic.com/subdivision/hr/3500-289999347.jpg');padding-bottom:70%;"></div>
						</div>
						<div class="col-3">
							<div class="bg--image border_radius--default w-100" style="background-image: url('https://content.harstatic.com/subdivision/hr/3500-288788345.jpg');padding-bottom:70%;"></div>
						</div>
						<div class="col-3">
							<div class="bg--image border_radius--default w-100" style="background-image: url('https://content.harstatic.com/subdivision/hr/3500-288788346.jpg');padding-bottom:70%;"></div>
						</div>
						<div class="col-3">
							<div class="bg--image border_radius--default w-100" style="background-image: url('https://content.harstatic.com/subdivision/hr/3500-289999351.jpg');padding-bottom:70%;"></div>
						</div>
					</div>
				</div>
			</div>
			
			<div class="col col-12 col-md-10 mb-0 text-left">
				<div class="border_radius--default depth h-100 p-4">
					<div class="color_auxiliary">Review of <span class="font_weight--bold">Master Planned Community</span></div>
					<h4 tabindex="0" class="color_carbon font-weight-bold mt-2 mb-2">Cane Island</h4>
					<div class="d-inline-block color_slate font_size--small_extra mb-2">
						<img alt="" class="pb-1" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg"><img alt="" class="pb-1" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg"><img alt="" class="pb-1" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg"><img alt="" class="pb-1" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg"><img alt="" class="pb-1" src="https://content.harstatic.com/media/icons/stars_16by16_gray.svg">
						<span class="font_weight--bold ml-1 align-middle">4.0</span> / <span class="mr-2 align-middle">5.0</span> <span class="color_slate_light align-middle">1 year ago</span>
					</div>
					<p class="mb-0 pb-0 color_slate font_size--medium">“It was extremely easy working with Michele. She was knowledgeable and professional and the whole process could not have went any smoother.”</p>
					<div class="row small-gutters pt-3">
						<div class="col-3">
							<div class="bg--image border_radius--default w-100" style="background-image: url('https://content.harstatic.com/masterplanned/large/116_1061.jpg');padding-bottom:70%;"></div>
						</div>
						<div class="col-3">
							<div class="bg--image border_radius--default w-100" style="background-image: url('https://content.harstatic.com/masterplanned/large/116_1055.jpg');padding-bottom:70%;"></div>
						</div>
						<div class="col-3">
							<div class="bg--image border_radius--default w-100" style="background-image: url('https://content.harstatic.com/masterplanned/large/116_1063.jpg');padding-bottom:70%;"></div>
						</div>
					</div>
				</div>
			</div>
			
			<div class="col col-12 col-md-10 mb-0 text-left">
				<div class="border_radius--default depth h-100 p-4">
					<div class="color_auxiliary">Review of <span class="font_weight--bold">Master Planned Community</span></div>
					<h4 tabindex="0" class="color_carbon font-weight-bold mt-2 mb-2">Aliana</h4>
					<div class="d-inline-block color_slate font_size--small_extra mb-2">
						<img alt="" class="pb-1" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg"><img alt="" class="pb-1" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg"><img alt="" class="pb-1" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg"><img alt="" class="pb-1" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg"><img alt="" class="pb-1" src="https://content.harstatic.com/media/icons/stars_16by16_gray.svg">
						<span class="font_weight--bold ml-1 align-middle">4.0</span> / <span class="mr-2 align-middle">5.0</span> <span class="color_slate_light align-middle">1 year ago</span>
					</div>
					<p class="mb-0 pb-0 color_slate font_size--medium">“It was extremely easy working with Michele. She was knowledgeable and professional and the whole process could not have went any smoother.”</p>
					
				</div>
			</div>
		
	        
        </div>        
        <div class="clear_both"></div>
      </div>
      `,
      
      `
      	<div class="row">
        	<div class="col col-12 col-md-10 mb-0 text-left">  
        	  
        	  <div class="card p-4 mb-5">
				  <div class="row">
					  <div class="col-lg-5 pb-3 pb-md-0">
						  <div class="font_size--large_extra font_weight--bold_extra pb-3">Austin Park (77479)</div>
						  <div class="label label--typeahead mb-3  label--typeahead_subdivision">Subdivision</div>
						  <div class="font_size--large">County Fortbend<br>Sugar Land, TX 77479</div>
					  </div>
					  <div class="col-lg-7">
						  <div class="border_radius--pudgy overflow-hidden">
							  <div class="row no-gutters">
								  <div class="col-6 pr-2">
									  <div class="bg--image" style="background-image: url(https://listingmedia7.harstatic.com/442609401/hr/1.jpeg?ts=2024-07-30T17:12:41.613); padding-bottom:120%;"></div>
							      </div>
								  <div class="col-6">
									  <div class="bg--image mb-2" style="background-image: url(https://listingmedia7.harstatic.com/442609401/hr/2.jpeg?ts=2024-07-30T17:12:41.613); padding-bottom:calc(60% - 0.5rem);"></div>
									  <div class="bg--image mt-2" style="background-image: url(https://listingmedia7.harstatic.com/442609401/hr/3.jpeg?ts=2024-07-30T17:12:41.613); padding-bottom:calc(60% - 0.5rem);"></div>
								  </div>
							  </div>
						   </div>
					  </div>
				  </div>
			  </div>
	        
	        </div>
	        
	        <div class="col col-12 col-md-10 mb-0 text-left">
	        	<div class="card p-4">
				  <div class="row">
					  <div class="col-lg-5 pb-3 pb-md-0">
						  <div class="font_size--large_extra font_weight--bold_extra pb-3">Lake Pointe (77479)</div>
						  <div class="label label--typeahead mb-3  label--typeahead_subdivision">Subdivision</div>
						  <div class="font_size--large">County Fortbend<br>Sugar Land, TX 77479</div>
					  </div>
					  <div class="col-lg-7">
						  <div class="border_radius--pudgy overflow-hidden">
							  <a href="/mapsearch/?nid=37199">
								   <div class="mb-3 border_radius--pudgy image" style="height:240px; width: 100%; background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url(&quot;https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/path-1+0000ff-0.45+0000ff-0.45(sr%7CtDzaleQ%7EAC%3FyAcB%3F)/auto/570x460?access_token=pk.eyJ1IjoiaGFyZGV2ZXJpY2siLCJhIjoiY2w5Y3h1aGdxMXRrZzNwbDltMXAwMjlwZyJ9.WvBLDoZQnZlozgGqlCij-A&quot;);">
								      <img class="img-fluid img-loader" alt="loading" src="https://content.harstatic.com/img/common/loading1.gif" style="display: none;">
								   </div>
								   <script type="text/javascript">
								      /*! domready (c) Dustin Diaz 2014 - License MIT */
								      ;!function(e,t){"undefined"!=typeof module?module.exports=t():"function"==typeof define&&"object"==typeof define.amd?define(t):this.domready=t()}(0,function(){var e,t=[],o="object"==typeof document&&document,n=o&&o.documentElement.doScroll,d=o&&(n?/^loaded|^c/:/^loaded|^i|^c/).test(o.readyState);return!d&&o&&o.addEventListener("DOMContentLoaded",e=function(){for(o.removeEventListener("DOMContentLoaded",e),d=1;e=t.shift();)e()}),function(e){d?setTimeout(e,0):t.push(e)}});
								      
								   </script>
								   <script>
								      window.loadbreak = 30;
								      window.map_load_1210798090 = function (){    
								          window.loadbreak--;
								          if(window.loadbreak && typeof harload !='undefined'){
								              harload('harmapLoader', 'ready').then(function() {
								                          HARMap.load().then(function(module) {
								                          var componentId = 'image1210798090';
								                          var polygon = 'POLYGON ((-95.42189568167296 29.806661648438137, -95.42187690620986 29.80618453576902, -95.42142897730437 29.80618453576902, -95.42142629509536 29.80668259479585, -95.42189568167296 29.806661648438137))';
								                          var node = $('.' + componentId).removeClass(componentId);
								                          var token = "marketarea";
								                          var result = module.StaticMap.custom.withPolygon(node.width(), node.height(), polygon,{token:token})
								                          result.backgroundImage(node);            
								                      });
								              });
								          } else{
								              window.setTimeout(window.map_load_1210798090, 1000);
								          }
								      };
								      window.map_load_1210798090();
								   </script>
								</a>
						   </div>
					  </div>
				  </div>
			  </div>
	        </div>
	        
	        
        </div>        
        <div class="clear_both"></div>
      </div>
      `,
    ];


    this.codeSnippets = [

`
`,
  
  
    ];

  }

  render(){
    return (
      <TemplateDefault
        pageTitle="Cards V2"
        activeParent="components"
        activeChild="cardsv2">

        <TemplateComponentBlock blockTitle="Aria Cards" elements={this.elements[0]} codeSnippets={this.codeSnippets[0]} />
        <TemplateComponentBlock blockTitle="Badges Card" elements={this.elements[1]} codeSnippets={this.codeSnippets[1]} />
        <TemplateComponentBlock blockTitle="Neighborhoods Cards" elements={this.elements[2]} codeSnippets={this.codeSnippets[2]} />
        <TemplateComponentBlock blockTitle="Ratings Cards" elements={this.elements[3]} codeSnippets={this.codeSnippets[3]} />
        <TemplateComponentBlock blockTitle="Appraisers Cards" elements={this.elements[4]} codeSnippets={this.codeSnippets[4]} />
        <TemplateComponentBlock blockTitle="School Cards" elements={this.elements[5]} codeSnippets={this.codeSnippets[5]} />
        <TemplateComponentBlock blockTitle="School Cards Portrait" elements={this.elements[6]} codeSnippets={this.codeSnippets[6]} />
        <TemplateComponentBlock blockTitle="Review Cards" elements={this.elements[7]} codeSnippets={this.codeSnippets[7]} />
        <TemplateComponentBlock blockTitle="Neighborhood Cards" elements={this.elements[8]} codeSnippets={this.codeSnippets[8]} />

      </TemplateDefault>
    )
  }

}
