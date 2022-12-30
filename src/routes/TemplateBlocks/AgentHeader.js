import React, {Component} from "react";
import TemplateExpanded from '../../components/TemplateExpanded';
import TemplateComponentBlock from '../../components/TemplateComponentBlock';

export default class AgentHeader extends Component {

  constructor(props) {
    super(props);

    this.elements = [
      `<!-- Agent Header block -->      <section class="agentheader">
      	<div class="agentheader__photo" style="background-image:url(https://content.harstatic.com/img/member/heroimages/Agent_Website_Image_11.jpg);">
      		<div class="agentheader__photo__inner d-flex">
      			<div class="mr-auto"><a href="#" data-toggle="tooltip" data-placement="top" title="Tooltip on top"><img alt="Facebook" src="https://content.harstatic.com/media/icons/edit_agent_header.svg"></a></div>
	      		<div class="agentheader__photo__inner_share align-self-start">
					<a href="#"><img alt="Facebook" src="https://content.harstatic.com/media/icons/social/white/facebook.svg"></a>
					<a href="#"><img alt="LinkedIn" src="https://content.harstatic.com/media/icons/social/white/linkedin.svg"></a>
					<a href="#"><img alt="twitter" src="https://content.harstatic.com/media/icons/social/white/twitter.svg"></a>
					<a href="#"><img alt="Share" src="https://content.harstatic.com/media/icons/header_share.svg"></a>
				</div>
			</div>
        </div>
        <div class="agentheader__agrow">
        	<div class="agentheader__agrow__ag">
        		<div class="agentheader__agrow__ag__ph">
        			<a class="agentheader__agrow__ag__ph__img" href="#" style="background-image: url('https://pics.harstatic.com/agent/480696.jpg?ts=2018-12-03T10:20:001063');"></a>
        			<!-- note: if agent have no photo then need to use this : <a class="agentheader__agrow__ag__ph__img noimg" href="#" style=""></a> -->
        		</div>
        		<div class="agentheader__agrow__ag__info  text-truncate">
        			<div class="agentheader__agrow__ag__info_title">
        				<span class="d-md-none d-inline-block mr-2" style="width:22px;"><img style="width:22px;" src="https://content.harstatic.com/media/icons/platinum-p_medium.svg"></span>
        				<h1 tabindex="0">Mich Scheffer</h1>
						<span class="d-md-inline-block d-none mr-2"><img src="https://content.harstatic.com/media/icons/platinum.svg"></span>
					</div>
        			<div class="agentheader__agrow__ag__info_rating">
        				<div>
            				<img src="https://content.harstatic.com/media/icons/stars/star_full.svg">
							<img src="https://content.harstatic.com/media/icons/stars/star_full.svg">
							<img src="https://content.harstatic.com/media/icons/stars/star_full.svg">
							<img src="https://content.harstatic.com/media/icons/stars/star_full.svg">
							<img src="https://content.harstatic.com/media/icons/stars/star_gray.svg">
						</div>
						<span>4.0/5.0 (70 surveys)</span>
            	    </div>
        			<div class="row no-gutters agentheader__agrow__ag__info_text justify-content-md-start justify-content-center">
        				<div class="col text-truncate">Better Homes and Gardens Real Estate Gary</div>
        				<div class="col-auto">(<a class="font_weight--semi_bold" href="#">view firm</a>)</div>
        			</div>
        			<div class="row no-gutters agentheader__agrow__ag__info_text justify-content-md-start justify-content-center">
        				<div class="col text-truncate">Lead of A to Z Houston Real</div>
        				<div class="col-auto">(<a class="font_weight--semi_bold" href="#">view team</a>)</div>
        			</div>
					
        		</div>
			</div><!-- /agentheader__agent -->
			
			<div class="agentheader__agrow__links text-center text-md-right pt-5">				
				
				<button tabindex="0" class="agent_btn_contact btn btn--prominent mb-2 btn--large mr-3">Contact</button>
				
				<div class="dropdown dropdown--custom d-inline-block agent_btn_more agent_btn_more">
				 <button tabindex="0" class="btn btn--ordinary mb-2 btn--large" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">More</button>
				  <div class="dropdown-menu dropdown-menu__withicons dropdown-menu-right pt-2 pb-2" aria-labelledby="dropdownMenuButton" x-placement="bottom-end">
				    <a class="dropdown-item pt-1 pb-1" href="#">
				    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/agent_icon_recive.svg"></div>
				    	<div class="dropdown-item__text align-self-center pl-3">
				    		<div class="dropdown-item__text__title">Receive callback</div>
				    	</div>
				    </a>
				    <a class="dropdown-item pt-1 pb-1" href="#">
				    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/agent_icon_calander.svg"></div>
				    	<div class="dropdown-item__text align-self-center pl-3">
				    		<div class="dropdown-item__text__title">Schedule an appointment</div>
				    	</div>
				    </a>
				    <a class="dropdown-item pt-1 pb-1" href="#">
				    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/agent_icon_phone.svg"></div>
				    	<div class="dropdown-item__text align-self-center pl-3">
				    		<div class="dropdown-item__text__title">View phone number</div>
				    	</div>
				    </a>
				    <a class="dropdown-item pt-1 pb-1" href="#">
				    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/agent_icon_sendemail.svg"></div>
				    	<div class="dropdown-item__text align-self-center pl-3">
				    		<div class="dropdown-item__text__title">Send email</div>
				    	</div>
				    </a>
				    <a class="dropdown-item pt-1 pb-1" href="#">
				    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/agent_icon_recommand.svg"></div>
				    	<div class="dropdown-item__text align-self-center pl-3">
				    		<div class="dropdown-item__text__title">Recommend</div>
				    	</div>
				    </a>
				  </div>
				</div>
				
			</div><!-- agentheader__links -->
			
						
        </div><!-- agentheader__agent -->
        <div class="agentheader__certi">
        	<div class="agentheader__certi__lang">
        		<div class="agentheader__certi__title">2 Languages</div>
        		<div class="agentheader__certi__list">
        			<a href="#">Portuguese</a>, <a href="#">Italian</a>, <a class="agentheader__certi__list__link" href="#">+1</a>
        		</div>
        	</div>
        	<div class="agentheader__certi__cul">
        		<div class="agentheader__certi__title">8 Cultures</div>
        		<div class="agentheader__certi__list">
        			<a href="#"><img class="flag flag--small" src="https://content.harstatic.com/resources/images/find_a_pro/flags_mini/uk.jpg"></a>
					<a href="#"><img class="flag flag--small" src="https://content.harstatic.com/resources/images/find_a_pro/flags_mini/kr.jpg"></a>
					<a href="#"><img class="flag flag--small" src="https://content.harstatic.com/resources/images/find_a_pro/flags_mini/dk.jpg"></a>
        			<a class="agentheader__certi__list__link" href="#">+5</a>
        		</div>
        	</div>
        	<div class="agentheader__certi__cert">
        		<div class="agentheader__certi__title">6 Certifications</div>
        		<div class="agentheader__certi__list">
        			<a href="#" class="certificate certificate--small">CSMS</a>
					<a href="#" class="certificate certificate--small">GRI</a>
					<a href="#" class="certificate certificate--small">SMP</a>
        			<a class="agentheader__certi__list__link" href="#">+3</a>
        		</div>
        	</div>
        	
        	<div class="qoutetion ml-auto">
    			<div class="qoutetion__text">        				
					<span>The greatest compliment you can give me is a referral!<img class="qoutetion__text_endqoute" src="https://content.harstatic.com/media/icons/quote-end.svg"><span>
				</div>
				<a class="qoutetion__readmore" href="">read more</a>
    		</div>
        </div>
      </section>
      <!-- /Agent Header block -->
      
      <br><br><br><br><br>
      `,
      `
      <!-- Agent Header block -->
      <section class="agentheader agentheader__small">
      	<div class="agentheader__photo" style="background-image:url(https://content.harstatic.com/img/member/heroimages/Agent_Website_Image_11.jpg);">
      		<div class="agentheader__photo__inner">
	      		<div class="agentheader__photo__inner_share">
					<a href="#"><img alt="Facebook" src="https://content.harstatic.com/media/icons/social/white/facebook.svg"></a>
					<a href="#"><img alt="LinkedIn" src="https://content.harstatic.com/media/icons/social/white/linkedin.svg"></a>
					<a href="#"><img alt="twitter" src="https://content.harstatic.com/media/icons/social/white/twitter.svg"></a>
					<a href="#"><img alt="Share" src="https://content.harstatic.com/media/icons/header_share.svg"></a>
				</div>
			</div>
        </div>
        <div class="agentheader__agrow">
        	<div class="agentheader__agrow__ag">
        		<div class="agentheader__agrow__ag__ph">
        			<a class="agentheader__agrow__ag__ph__img" href="#" style="background-image: url('https://pics.harstatic.com/agent/480696.jpg?ts=2018-12-03T10:20:001063');"></a>
        		</div>
        		<div class="agentheader__agrow__ag__info  text-truncate">
        			<div class="agentheader__agrow__ag__info_title">
        				<span class="d-md-none d-inline-block mr-2" style="width:22px;"><img style="width:22px;" src="https://content.harstatic.com/media/icons/platinum-p_medium.svg"></span>
        				<h1 tabindex="0">Mich Scheffer</h1>
						<span class="d-md-inline-block d-none mr-2"><img src="https://content.harstatic.com/media/icons/platinum.svg"></span>
					</div>
        			<div class="agentheader__agrow__ag__info_rating">
        				<div>
            				<img src="https://content.harstatic.com/media/icons/stars/star_full.svg">
							<img src="https://content.harstatic.com/media/icons/stars/star_full.svg">
							<img src="https://content.harstatic.com/media/icons/stars/star_full.svg">
							<img src="https://content.harstatic.com/media/icons/stars/star_full.svg">
							<img src="https://content.harstatic.com/media/icons/stars/star_gray.svg">
						</div>
						<span>4.0/5.0 (70 surveys)</span>
            	    </div>
        			<div class="row no-gutters agentheader__agrow__ag__info_text justify-content-md-start justify-content-center">
        				<div class="col text-truncate">Better Homes and Gardens Real Estate Gary</div>
        				<div class="col-auto">(<a class="font_weight--semi_bold" href="#">view firm</a>)</div>
        			</div>
        			<div class="row no-gutters agentheader__agrow__ag__info_text justify-content-md-start justify-content-center">
        				<div class="col text-truncate">Lead of A to Z Houston Real</div>
        				<div class="col-auto">(<a class="font_weight--semi_bold" href="#">view team</a>)</div>
        			</div>
					
        		</div>
			</div><!-- /agentheader__agent -->
			
			<div class="agentheader__agrow__links text-center text-md-right pt-5">				
				
				<button tabindex="0" class="agent_btn_contact btn btn--prominent mb-2 btn--large mr-3">Contact</button>
				
				<div class="dropdown dropdown--custom d-inline-block agent_btn_more agent_btn_more">
				 <button tabindex="0" class="btn btn--ordinary mb-2 btn--large" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">More</button>
				  <div class="dropdown-menu dropdown-menu__withicons dropdown-menu-right pt-2 pb-2" aria-labelledby="dropdownMenuButton" x-placement="bottom-end">
				    <a class="dropdown-item pt-1 pb-1" href="#">
				    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/agent_icon_recive.svg"></div>
				    	<div class="dropdown-item__text align-self-center pl-3">
				    		<div class="dropdown-item__text__title">Receive callback</div>
				    	</div>
				    </a>
				    <a class="dropdown-item pt-1 pb-1" href="#">
				    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/agent_icon_calander.svg"></div>
				    	<div class="dropdown-item__text align-self-center pl-3">
				    		<div class="dropdown-item__text__title">Schedule an appointment</div>
				    	</div>
				    </a>
				    <a class="dropdown-item pt-1 pb-1" href="#">
				    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/agent_icon_phone.svg"></div>
				    	<div class="dropdown-item__text align-self-center pl-3">
				    		<div class="dropdown-item__text__title">View phone number</div>
				    	</div>
				    </a>
				    <a class="dropdown-item pt-1 pb-1" href="#">
				    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/agent_icon_sendemail.svg"></div>
				    	<div class="dropdown-item__text align-self-center pl-3">
				    		<div class="dropdown-item__text__title">Send email</div>
				    	</div>
				    </a>
				    <a class="dropdown-item pt-1 pb-1" href="#">
				    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/agent_icon_recommand.svg"></div>
				    	<div class="dropdown-item__text align-self-center pl-3">
				    		<div class="dropdown-item__text__title">Recommend</div>
				    	</div>
				    </a>
				  </div>
				</div>
				
			</div><!-- agentheader__links -->
								
        </div><!-- agentheader__agent -->
        <div class="agentheader__certi">
        	<div class="agentheader__certi__lang">
        		<div class="agentheader__certi__title">2 Languages</div>
        		<div class="agentheader__certi__list">
        			<a href="#">Portuguese</a>, <a href="#">Italian</a>, <a class="agentheader__certi__list__link" href="#">+1</a>
        		</div>
        	</div>
        	<div class="agentheader__certi__cul">
        		<div class="agentheader__certi__title">8 Cultures</div>
        		<div class="agentheader__certi__list">
        			<a href="#"><img class="flag flag--small" src="https://content.harstatic.com/resources/images/find_a_pro/flags_mini/uk.jpg"></a>
					<a href="#"><img class="flag flag--small" src="https://content.harstatic.com/resources/images/find_a_pro/flags_mini/kr.jpg"></a>
					<a href="#"><img class="flag flag--small" src="https://content.harstatic.com/resources/images/find_a_pro/flags_mini/dk.jpg"></a>
        			<a class="agentheader__certi__list__link" href="#">+5</a>
        		</div>
        	</div>
        	<div class="agentheader__certi__cert">
        		<div class="agentheader__certi__title">6 Certifications</div>
        		<div class="agentheader__certi__list">
        			<a href="#" class="certificate certificate--small">CSMS</a>
					<a href="#" class="certificate certificate--small">GRI</a>
					<a href="#" class="certificate certificate--small">SMP</a>
        			<a class="agentheader__certi__list__link" href="#">+3</a>
        		</div>
        	</div>
        </div>
      </section>
      <!-- /Agent Header block -->
      
      <br><br><br><br><br>
      `,
      `
      <!-- Agent Header (without background) block -->
      <section class="agentheader agentheader__nobackground">
      	<div class="agentheader__agrow">
        	<div class="agentheader__agrow__ag">
        		<div class="agentheader__agrow__ag__ph">
        			<a class="agentheader__agrow__ag__ph__img" href="#" style="background-image: url('https://pics.harstatic.com/agent/480696.jpg?ts=2018-12-03T10:20:001063');"></a>
        		</div>        		
			</div><!-- /agentheader__broker -->
			
			<div class="agentheader__agrow__inner">
				<div class="agentheader__photo__inner_share">
					<a href="#"><img alt="Facebook" src="https://content.harstatic.com/media/icons/facebook_auxiliary.svg"></a>
					<a href="#"><img alt="LinkedIn" src="https://content.harstatic.com/media/icons/linkedin_auxiliary.svg"></a>
					<a href="#"><img alt="twitter" src="https://content.harstatic.com/media/icons/twitter_auxiliary.svg"></a>
					<a href="#"><img alt="Share" src="https://content.harstatic.com/media/icons/header_share_auxilary.svg"></a>
				</div>
				<div class="agentheader__agrow__inner__cols">
					<div class="agentheader__agrow__ag__info  text-truncate">
	        			<div class="agentheader__agrow__ag__info_title">
	        				<h1 tabindex="0">John Daugherty Realtors</h1>
						</div>
	        			
	        			<div class="row no-gutters brokerheader__agrow__ag__info_text d-none d-md-flex">
	        				<div class="col-auto pr-2"><img src="https://content.harstatic.com/media/icons/location_icon_auxiliary.svg"></div>
	        				<div class="col text-truncate">520 Post Oak Blvd Fl 6 – Houston, TX 77027</div>
	        				<div class="col-auto"><a class="font_weight--semi_bold" href="#">Get directions</a></div>
	        			</div>
	        			
	        			<div class="row no-gutters brokerheader__agrow__ag__info_textres d-block d-md-none">
	        				<img src="https://content.harstatic.com/media/icons/location_icon_auxiliary.svg">
	        				520 Post Oak Blvd Fl 6<br>Houston, TX 77027
	        				<a class="font_weight--semi_bold" href="#">Get directions</a>
	        			</div>
	        		</div>
					
					<div class="agentheader__share__resp d-md-none d-block">
						<div class="agentheader__photo__inner_share ">
							<a href="#"><img alt="Facebook" src="https://content.harstatic.com/media/icons/facebook_auxiliary.svg"></a>
							<a href="#"><img alt="LinkedIn" src="https://content.harstatic.com/media/icons/linkedin_auxiliary.svg"></a>
							<a href="#"><img alt="twitter" src="https://content.harstatic.com/media/icons/twitter_auxiliary.svg"></a>
							<a href="#"><img alt="Share" src="https://content.harstatic.com/media/icons/header_share_auxilary.svg"></a>
						</div>
					</div>
						
					<div class="agentheader__agrow__links text-center text-md-right pt-md-5">				
						<button tabindex="0" class="agent_btn_contact btn btn--prominent btn--large mb-2 mr-3">Contact</button>
						
						<div class="dropdown dropdown--custom d-inline-block agent_btn_more agent_btn_more">
						 <button tabindex="0" class="btn btn--ordinary mb-2 btn--large" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">More</button>
						  <div class="dropdown-menu dropdown-menu__withicons dropdown-menu-right pt-2 pb-2" aria-labelledby="dropdownMenuButton" x-placement="bottom-end">
						    <a class="dropdown-item pt-1 pb-1" href="#">
						    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/agent_icon_recive.svg"></div>
						    	<div class="dropdown-item__text align-self-center pl-3">
						    		<div class="dropdown-item__text__title">Receive callback</div>
						    	</div>
						    </a>
						    <a class="dropdown-item pt-1 pb-1" href="#">
						    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/agent_icon_calander.svg"></div>
						    	<div class="dropdown-item__text align-self-center pl-3">
						    		<div class="dropdown-item__text__title">Schedule an appointment</div>
						    	</div>
						    </a>
						    <a class="dropdown-item pt-1 pb-1" href="#">
						    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/agent_icon_phone.svg"></div>
						    	<div class="dropdown-item__text align-self-center pl-3">
						    		<div class="dropdown-item__text__title">View phone number</div>
						    	</div>
						    </a>
						    <a class="dropdown-item pt-1 pb-1" href="#">
						    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/agent_icon_sendemail.svg"></div>
						    	<div class="dropdown-item__text align-self-center pl-3">
						    		<div class="dropdown-item__text__title">Send email</div>
						    	</div>
						    </a>
						    <a class="dropdown-item pt-1 pb-1" href="#">
						    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/agent_icon_recommand.svg"></div>
						    	<div class="dropdown-item__text align-self-center pl-3">
						    		<div class="dropdown-item__text__title">Recommend</div>
						    	</div>
						    </a>
						  </div>
						</div>
						
					</div><!-- agentheader__links -->
					
				</div>
			</div>
			
			
        </div><!-- agentheader__broker -->
              </section>
      <!-- /broker Header block -->
      
      <br><br><br><br><br>
      `,
      `
      <!-- Agent Header block -->
      <section class="agentheader agentheader__small_nobg">
      	<div class="agentheader__agrow">
        	<div class="agentheader__agrow__ag">
        		<div class="agentheader__agrow__ag__ph">
        			<a class="agentheader__agrow__ag__ph__img" href="#" style="background-image: url('https://pics.harstatic.com/agent/480696.jpg?ts=2018-12-03T10:20:001063');"></a>
        		</div>
        		<div class="agentheader__agrow__ag__info  text-truncate">
        			<div class="agentheader__agrow__ag__info_title">
        				<span class="d-md-none d-inline-block mr-2" style="width:22px;"><img style="width:22px;" src="https://content.harstatic.com/media/icons/platinum-p_medium.svg"></span>
        				<h1 tabindex="0">Mich Scheffer</h1>
						<span class="d-md-inline-block d-none mr-2"><img src="https://content.harstatic.com/media/icons/platinum.svg"></span>
					</div>
        			<div class="agentheader__agrow__ag__info_rating">
        				<div>
            				<img src="https://content.harstatic.com/media/icons/stars/star_full.svg">
							<img src="https://content.harstatic.com/media/icons/stars/star_full.svg">
							<img src="https://content.harstatic.com/media/icons/stars/star_full.svg">
							<img src="https://content.harstatic.com/media/icons/stars/star_full.svg">
							<img src="https://content.harstatic.com/media/icons/stars/star_gray.svg">
						</div>
						<span>4.0/5.0 (70 surveys)</span>
            	    </div>
        			<div class="row no-gutters agentheader__agrow__ag__info_text justify-content-md-start justify-content-center">
        				<div class="col text-truncate">Better Homes and Gardens Real Estate Gary</div>
        				<div class="col-auto">(<a class="font_weight--semi_bold" href="#">view firm</a>)</div>
        			</div>
        			<div class="row no-gutters agentheader__agrow__ag__info_text justify-content-md-start justify-content-center">
        				<div class="col text-truncate">Lead of A to Z Houston Real</div>
        				<div class="col-auto">(<a class="font_weight--semi_bold" href="#">view team</a>)</div>
        			</div>
					
        		</div>
			</div><!-- /agentheader__agent -->
			
			<div class="agentheader__agrow__links">
				<div class="agentheader__photo__inner_share">
					<a href="#"><img alt="Facebook" src="https://content.harstatic.com/media/icons/facebook_auxiliary.svg"></a>
					<a href="#"><img alt="LinkedIn" src="https://content.harstatic.com/media/icons/linkedin_auxiliary.svg"></a>
					<a href="#"><img alt="twitter" src="https://content.harstatic.com/media/icons/twitter_auxiliary.svg"></a>
					<a href="#"><img alt="Share" src="https://content.harstatic.com/media/icons/header_share_auxilary.svg"></a>
				</div>
				
				<div class="agentheader__agrow__links_btns">
				
						<button tabindex="0" class="agent_btn_contact btn btn--prominent btn--large mb-2 mr-3">Contact</button>
						
						<div class="dropdown dropdown--custom d-inline-block agent_btn_more agent_btn_more">
						 <button tabindex="0" class="btn btn--ordinary mb-2 btn--large" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">More</button>
						  <div class="dropdown-menu dropdown-menu__withicons dropdown-menu-right pt-2 pb-2" aria-labelledby="dropdownMenuButton" x-placement="bottom-end">
						    <a class="dropdown-item pt-1 pb-1" href="#">
						    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/agent_icon_recive.svg"></div>
						    	<div class="dropdown-item__text align-self-center pl-3">
						    		<div class="dropdown-item__text__title">Receive callback</div>
						    	</div>
						    </a>
						    <a class="dropdown-item pt-1 pb-1" href="#">
						    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/agent_icon_calander.svg"></div>
						    	<div class="dropdown-item__text align-self-center pl-3">
						    		<div class="dropdown-item__text__title">Schedule an appointment</div>
						    	</div>
						    </a>
						    <a class="dropdown-item pt-1 pb-1" href="#">
						    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/agent_icon_phone.svg"></div>
						    	<div class="dropdown-item__text align-self-center pl-3">
						    		<div class="dropdown-item__text__title">View phone number</div>
						    	</div>
						    </a>
						    <a class="dropdown-item pt-1 pb-1" href="#">
						    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/agent_icon_sendemail.svg"></div>
						    	<div class="dropdown-item__text align-self-center pl-3">
						    		<div class="dropdown-item__text__title">Send email</div>
						    	</div>
						    </a>
						    <a class="dropdown-item pt-1 pb-1" href="#">
						    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/agent_icon_recommand.svg"></div>
						    	<div class="dropdown-item__text align-self-center pl-3">
						    		<div class="dropdown-item__text__title">Recommend</div>
						    	</div>
						    </a>
						  </div>
						</div>
						
				</div>
				
				
			</div><!-- agentheader__links -->
								
        </div><!-- agentheader__agent -->
        <div class="agentheader__certi">
        	<div class="agentheader__certi__lang">
        		<div class="agentheader__certi__title">2 Languages</div>
        		<div class="agentheader__certi__list">
        			<a href="#">Portuguese</a>, <a href="#">Italian</a>, <a class="agentheader__certi__list__link" href="#">+1</a>
        		</div>
        	</div>
        	<div class="agentheader__certi__cul">
        		<div class="agentheader__certi__title">8 Cultures</div>
        		<div class="agentheader__certi__list">
        			<a href="#"><img class="flag flag--small" src="https://content.harstatic.com/resources/images/find_a_pro/flags_mini/uk.jpg"></a>
					<a href="#"><img class="flag flag--small" src="https://content.harstatic.com/resources/images/find_a_pro/flags_mini/kr.jpg"></a>
					<a href="#"><img class="flag flag--small" src="https://content.harstatic.com/resources/images/find_a_pro/flags_mini/dk.jpg"></a>
        			<a class="agentheader__certi__list__link" href="#">+5</a>
        		</div>
        	</div>
        	<div class="agentheader__certi__cert">
        		<div class="agentheader__certi__title">6 Certifications</div>
        		<div class="agentheader__certi__list">
        			<a href="#" class="certificate certificate--small">CSMS</a>
					<a href="#" class="certificate certificate--small">GRI</a>
					<a href="#" class="certificate certificate--small">SMP</a>
        			<a class="agentheader__certi__list__link" href="#">+3</a>
        		</div>
        	</div>
        </div>
      </section>
      <!-- /Agent Header block -->
      
      <br><br><br><br><br>
      `,
      `
      <!-- Agent Header block -->
      <section class="agentheader agentheader__small_nobg">
      	<div class="agentheader__agrow">
        	<div class="agentheader__agrow__ag">
        		<div class="agentheader__agrow__ag__ph">
        			<!-- <a class="agentheader__agrow__ag__ph__img" href="#" style="background-image: url('https://pics.harstatic.com/agent/480696.jpg?ts=2018-12-03T10:20:001063');"></a> -->
        			<a class="agentheader__agrow__ag__ph__img noimg" href="#" style=""></a>
        		</div>
        		<div class="agentheader__agrow__ag__info  text-truncate">
        			<div class="agentheader__agrow__ag__info_title">
        				<span class="d-md-none d-inline-block mr-2" style="width:22px;"><img style="width:22px;" src="https://content.harstatic.com/media/icons/platinum-p_medium.svg"></span>
        				<h1 tabindex="0">Mich Scheffer</h1>
						<span class="d-md-inline-block d-none mr-2"><img src="https://content.harstatic.com/media/icons/platinum.svg"></span>
					</div>
        			<div class="agentheader__agrow__ag__info_rating">
        				<div>
            				<img src="https://content.harstatic.com/media/icons/stars/star_gray.svg">
							<img src="https://content.harstatic.com/media/icons/stars/star_gray.svg">
							<img src="https://content.harstatic.com/media/icons/stars/star_gray.svg">
							<img src="https://content.harstatic.com/media/icons/stars/star_gray.svg">
							<img src="https://content.harstatic.com/media/icons/stars/star_gray.svg">
						</div>
						<span>4.0/5.0 (70 surveys)</span>
            	    </div>
        			<div class="row no-gutters agentheader__agrow__ag__info_text justify-content-md-start justify-content-center">
        				<div class="col text-truncate">Better Homes and Gardens Real Estate Gary</div>
        				<div class="col-auto">(<a class="font_weight--semi_bold" href="#">view firm</a>)</div>
        			</div>
					
        		</div>
			</div><!-- /agentheader__agent -->
			
			<div class="agentheader__agrow__links">
				<div class="agentheader__photo__inner_share">
					<a href="#"><img alt="Facebook" src="https://content.harstatic.com/media/icons/facebook_auxiliary.svg"></a>
					<a href="#"><img alt="LinkedIn" src="https://content.harstatic.com/media/icons/linkedin_auxiliary.svg"></a>
					<a href="#"><img alt="twitter" src="https://content.harstatic.com/media/icons/twitter_auxiliary.svg"></a>
					<a href="#"><img alt="Share" src="https://content.harstatic.com/media/icons/header_share_auxilary.svg"></a>
				</div>
				
				<div class="agentheader__agrow__links_btns">
				
						<button tabindex="0" class="agent_btn_contact btn btn--prominent btn--large mb-2 mr-3">Contact</button>
						
						<div class="dropdown dropdown--custom d-inline-block agent_btn_more agent_btn_more">
						 <button tabindex="0" class="btn btn--ordinary mb-2 btn--large" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">More</button>
						  <div class="dropdown-menu dropdown-menu__withicons dropdown-menu-right pt-2 pb-2" aria-labelledby="dropdownMenuButton" x-placement="bottom-end">
						    <a class="dropdown-item pt-1 pb-1" href="#">
						    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/agent_icon_recive.svg"></div>
						    	<div class="dropdown-item__text align-self-center pl-3">
						    		<div class="dropdown-item__text__title">Receive callback</div>
						    	</div>
						    </a>
						    <a class="dropdown-item pt-1 pb-1" href="#">
						    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/agent_icon_calander.svg"></div>
						    	<div class="dropdown-item__text align-self-center pl-3">
						    		<div class="dropdown-item__text__title">Schedule an appointment</div>
						    	</div>
						    </a>
						    <a class="dropdown-item pt-1 pb-1" href="#">
						    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/agent_icon_phone.svg"></div>
						    	<div class="dropdown-item__text align-self-center pl-3">
						    		<div class="dropdown-item__text__title">View phone number</div>
						    	</div>
						    </a>
						    <a class="dropdown-item pt-1 pb-1" href="#">
						    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/agent_icon_sendemail.svg"></div>
						    	<div class="dropdown-item__text align-self-center pl-3">
						    		<div class="dropdown-item__text__title">Send email</div>
						    	</div>
						    </a>
						    <a class="dropdown-item pt-1 pb-1" href="#">
						    	<div class="dropdown-item__icon"><img src="https://content.harstatic.com/media/icons/dropdownmenu/agent_icon_recommand.svg"></div>
						    	<div class="dropdown-item__text align-self-center pl-3">
						    		<div class="dropdown-item__text__title">Recommend</div>
						    	</div>
						    </a>
						  </div>
						</div>
						
				</div>
				
				
			</div><!-- agentheader__links -->

					
        </div><!-- agentheader__agent -->
        <div class="agentheader__certi">
        	<div class="agentheader__certi__lang">
        		<div class="agentheader__certi__title">2 Languages</div>
        		<div class="agentheader__certi__list">
        			<a href="#">Portuguese</a>, <a href="#">Italian</a>, <a class="agentheader__certi__list__link" href="#">+1</a>
        		</div>
        	</div>
        	<div class="agentheader__certi__cul">
        		<div class="agentheader__certi__title">8 Cultures</div>
        		<div class="agentheader__certi__list">
        			<a href="#"><img class="flag flag--small" src="https://content.harstatic.com/resources/images/find_a_pro/flags_mini/uk.jpg"></a>
					<a href="#"><img class="flag flag--small" src="https://content.harstatic.com/resources/images/find_a_pro/flags_mini/kr.jpg"></a>
					<a href="#"><img class="flag flag--small" src="https://content.harstatic.com/resources/images/find_a_pro/flags_mini/dk.jpg"></a>
        			<a class="agentheader__certi__list__link" href="#">+5</a>
        		</div>
        	</div>
        	<div class="agentheader__certi__cert">
        		<div class="agentheader__certi__title">6 Certifications</div>
        		<div class="agentheader__certi__list">
        			<a href="#" class="certificate certificate--small">CSMS</a>
					<a href="#" class="certificate certificate--small">GRI</a>
					<a href="#" class="certificate certificate--small">SMP</a>
        			<a class="agentheader__certi__list__link" href="#">+3</a>
        		</div>
        	</div>
        </div>
      </section>
      <!-- /Agent Header block -->
      
      <br><br><br><br><br>
      `,`
      <!-- Agent Header (without background) block -->
      <section class="agentheader agentheader__nobackground">
      	<div class="agentheader__agrow">
        	<div class="agentheader__agrow__ag">
        		<div class="agentheader__agrow__ag__ph">
        			<a class="agentheader__agrow__ag__ph__img noimg claim_profile" href="#"></a>
        		</div>        		
			</div><!-- /agentheader__broker -->
			
			<div class="agentheader__agrow__inner">
				<div class="agentheader__photo__inner_share">
					<a href="#"><img alt="Share" src="https://content.harstatic.com/media/icons/header_share_auxilary.svg"></a>
				</div>
				<div class="agentheader__agrow__inner__cols">
					<div class="agentheader__agrow__ag__info  text-truncate">
	        			<div class="agentheader__agrow__ag__info_title">
	        				<h1 tabindex="0">Stephen Gossett</h1>
						</div>
	        			
	        			<div class="agentheader__agrow__ag__info_text ml-auto mr-auto ml-md-0 mr-md-0">
	        				ERA Newlin & Company
	        			</div>
	        			
	        			<div class="agentheader__descbox ml-auto mr-auto ml-md-0 mr-md-0" style="max-width:412px;">
							<a href="#" class="font_weight--bold">
								Get your profile on HAR.com for free ->								
							</a>
							<div>Over 10K realtors across Texas have claimed their profile.</div>
						</div>
	        		</div>
					
					
					<div class="agentheader__share__resp d-md-none d-block">
						<div class="agentheader__photo__inner_share ">
							<a href="#"><img alt="Share" src="https://content.harstatic.com/media/icons/header_share_auxilary.svg"></a>
						</div>
					</div>
						
					<div class="agentheader__agrow__links text-center text-md-right pt-md-5">				
						<button tabindex="0" class="agent_btn_contact btn btn--prominent btn--large mb-2 mr-3">Send Email</button>
						<div class="ml-auto">
							<a class="btn btn--text btn--medium btn--medium__inline d-inline-flex" href="#">
						    	<img style="width:24px;" src="https://content.harstatic.com/media/icons/phone_icon_small.svg">
						    	<div class="dropdown-item__text align-self-center pl-3">
						    		<div>See Phone</div>
						    	</div>
						    </a>
						</div>
						
					</div><!-- agentheader__links -->
					
				</div>
			</div>
			
			
        </div><!-- agentheader__broker -->
              </section>
      <!-- /broker Header block -->
      
      <br><br><br><br><br>
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
        pageTitle="Agent Header"
        activeParent="template_blocks"
        activeChild="agent_header">

        <TemplateComponentBlock hasContainer={false} blockTitle="Agent Header" elements={this.elements[0]} codeSnippets={this.codeSnippets[0]} />
        <TemplateComponentBlock hasContainer={false} blockTitle="Agent Header smaller" elements={this.elements[1]} codeSnippets={this.codeSnippets[1]} />
        <TemplateComponentBlock hasContainer={false} blockTitle="Agent Header (no image)" elements={this.elements[2]} codeSnippets={this.codeSnippets[2]} />
        <TemplateComponentBlock hasContainer={false} blockTitle="Agent Header (no image + small )" elements={this.elements[3]} codeSnippets={this.codeSnippets[3]} />
        <TemplateComponentBlock hasContainer={false} blockTitle="Agent Header (no image + small + no agent photo shorter info )" elements={this.elements[4]} codeSnippets={this.codeSnippets[4]} />
        <TemplateComponentBlock hasContainer={false} blockTitle="Agent Header (Claim your profile )" elements={this.elements[5]} codeSnippets={this.codeSnippets[5]} />

      </TemplateExpanded>
    )
  }

}
