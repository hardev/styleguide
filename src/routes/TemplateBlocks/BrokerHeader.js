import React, {Component} from "react";
import TemplateExpanded from '../../components/TemplateExpanded';
import TemplateComponentBlock from '../../components/TemplateComponentBlock';

export default class BrokerHeader extends Component {

  constructor(props) {
    super(props);

    this.elements = [      
      `
      <!-- Broker Header block -->
      <section class="brokerheader">
      	<div class="brokerheader__photo" style="background-image:url(https://content.harstatic.com/img/member/heroimages/Agent_Website_Image_11.jpg);">
      		<div class="brokerheader__photo__inner">
	      		<div class="brokerheader__photo__inner_share">
					<a href="#"><img alt="Facebook" src="https://content.harstatic.com/media/icons/social/white/facebook.svg"></a>
					<a href="#"><img alt="LinkedIn" src="https://content.harstatic.com/media/icons/social/white/linkedin.svg"></a>
					<a href="#"><img alt="twitter" src="https://content.harstatic.com/media/icons/social/white/twitter.svg"></a>
					<a href="#"><img alt="Share" src="https://content.harstatic.com/media/icons/header_share.svg"></a>
				</div>
			</div>
        </div>
        <div class="brokerheader__agrow">
        	<div class="brokerheader__agrow__ag">
        		<div class="brokerheader__agrow__ag__ph">
        			<a class="brokerheader__agrow__ag__ph__img" href="#">
        				<img src="https://pics.harstatic.com/office/14600.gif">
        				<!-- if no image for agent company <img src="https://content.harstatic.com/media/icons/broker_building.svg"> -->
        			</a>
        		</div>
        		<div class="brokerheader__agrow__ag__info  text-truncate">
        			<div class="brokerheader__agrow__ag__info_title">
        				<h1 tabindex="0">Keller Williams Realty Southwest</h1>
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
			</div><!-- /brokerheader__broker -->
			
			<div class="agentheader__agrow__links d-md-flex ml-md-auto mr-md-0 d-none text-center text-md-right pt-5">				
				
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
					
        </div><!-- brokerheader__broker -->
        
        <div class="brokerheader__details">
	        <div class="brokerheader__details__list">
	        	<div class="pr-md-3 mr-md-3 border-md-right">
		        	<a href="#" tabindex="-1" class="agent_signature--mini" title="View Amy Nabors 's profile">
	      				<div class="agent_signature--mini__photo" style="background-image:url('https://pics.harstatic.com/agent/593161.jpg?ts=2021-03-04T16:45:004981');"></div>
		  				<div class="agent_signature--mini__name font_weight--bold text-truncate">Laura Mayer</div>
		  			</a>
		  		</div>
		  		<a href="#" tabindex="-1" class="agent_signature--mini mr-2" title="View Amy Nabors 's profile">
      				<div class="agent_signature--mini__photo" style="background-image:url('https://pics.harstatic.com/agent/666089.jpg?ts=2021-02-09T16:56:006690');"></div>
	  				<div class="agent_signature--mini__name text-truncate">Laura</div>
	  			</a>
	  			<a href="#" tabindex="-1" class="agent_signature--mini mr-2" title="View Amy Nabors 's profile">
      				<div class="agent_signature--mini__photo" style="background-image:url('https://content.harstatic.com/media/icons/agent_placeholder.svg');"></div>
	  				<div class="agent_signature--mini__name text-truncate">Neil</div>
	  			</a>
	  			
	  			<a href="#" tabindex="-1" class="agent_signature--mini mr-2" title="View Amy Nabors 's profile">
      				<div class="agent_signature--mini__photo" style="background-image:url('https://pics.harstatic.com/agent/488012.jpg?ts=2020-01-17T13:30:002828');"></div>
	  				<div class="agent_signature--mini__name text-truncate">Cynthia</div>
	  			</a>
	  			<a href="#" tabindex="-1" class="agent_signature--mini mr-2" title="View Amy Nabors 's profile">
      				<div class="agent_signature--mini__photo" style="background-image:url('https://pics.harstatic.com/agent/659960.jpg?ts=2018-07-26T02:05:002897');"></div>
	  				<div class="agent_signature--mini__name text-truncate">Alex Narvaez</div>
	  			</a>
	  			<a href="#" tabindex="-1" class="agent_signature--mini mr-2" title="View Amy Nabors 's profile">
      				<div class="agent_signature--mini__photo" style="background-image:url('https://pics.harstatic.com/agent/199394.jpg?ts=2018-02-08T08:20:007353');"></div>
	  				<div class="agent_signature--mini__name text-truncate">Ronnie</div>
	  			</a>
	  			<a href="#" tabindex="-1" class="agent_signature--mini mr-2" title="View Amy Nabors 's profile">
      				<div class="agent_signature--mini__photo" style="background-image:url('https://pics.harstatic.com/agent/650268.jpg?ts=2020-08-16T08:41:006234');"></div>
	  				<div class="agent_signature--mini__name text-truncate">Neil</div>
	  			</a>
	  			
	  			<a href="#" tabindex="-1" class="agent_signature--mini" title="View Amy Nabors 's profile" style="width:80px;">
      				<div class="agent_signature--mini__photo"><span>7+</span></div>
	  				<div class="agent_signature--mini__name font_weight--bold color_har_blue">Full Roster ↓</div>
	  			</a>
	        </div>
	        
	        
	        <div class="brokerheader__details__listresp">
	        	<div class="row small-gutters">
	        		<div class="col-auto">
			        	<a href="#" tabindex="-1" class="agent_signature--mini" title="View Amy Nabors 's profile">
			      			<div class="agent_signature--mini__photo" style="background-image:url('https://pics.harstatic.com/agent/593161.jpg?ts=2021-03-04T16:45:004981');"></div>
				  			<div class="agent_signature--mini__name font_weight--bold text-truncate">Laura Mayer</div>
				  		</a>
				  		<a href="#" tabindex="-1" class="agent_signature--mini mr-2" title="View Amy Nabors 's profile">
		      				<div class="agent_signature--mini__photo" style="background-image:url('https://pics.harstatic.com/agent/666089.jpg?ts=2021-02-09T16:56:006690');"></div>
			  				<div class="agent_signature--mini__name text-truncate">Laura</div>
			  			</a>
			  			<a href="#" tabindex="-1" class="agent_signature--mini mr-2" title="View Amy Nabors 's profile">
		      				<div class="agent_signature--mini__photo" style="background-image:url('https://pics.harstatic.com/agent/650268.jpg?ts=2020-08-16T08:41:006234');"></div>
			  				<div class="agent_signature--mini__name text-truncate">Neil</div>
			  			</a>
			  		</div>
			  		<div class="col font_weight--medium font_weight--bold align-self-center">
			  			Charles, Carole, Sally<br>
			  			and more <a href="#">14 agents ↓</a>
			  		</div>
			  	</div>
	        </div>
	        
	        
	        <div class="agentheader__agrow__linksresp d-md-none d-block">
				<div class="agentheader__agrow__links text-center text-md-right pt-md-5">				
				
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
			</div><!-- agentheader__agrow__links_resp -->
	        
	        <div class="brokerheader__details__certi">
	        	<div class="brokerheader__details__certi__lang">
	        		<div class="brokerheader__details__certi__title">2 Languages</div>
	        		<div class="brokerheader__details__certi__list">
	        			<a href="#">Portuguese</a>, <a href="#">Italian</a>, <a class="agentheader__certi__list__link" href="#">+1</a>
	        		</div>
	        	</div>
	        	<div class="brokerheader__details__certi__cul">
	        		<div class="brokerheader__details__certi__title">8 Cultures</div>
	        		<div class="brokerheader__details__certi__list">
	        			<a href="#"><img class="flag flag--small" src="https://content.harstatic.com/resources/images/find_a_pro/flags_mini/uk.jpg"></a>
						<a href="#"><img class="flag flag--small" src="https://content.harstatic.com/resources/images/find_a_pro/flags_mini/kr.jpg"></a>
						<a href="#"><img class="flag flag--small" src="https://content.harstatic.com/resources/images/find_a_pro/flags_mini/dk.jpg"></a>
	        			<a class="agentheader__certi__list__link" href="#">+5</a>
	        		</div>
	        	</div>
	        	<div class="brokerheader__details__certi__cert">
	        		<div class="brokerheader__details__certi__title">6 Certifications</div>
	        		<div class="brokerheader__details__certi__list">
	        			<a href="#" class="certificate certificate--small">CSMS</a>
						<a href="#" class="certificate certificate--small">GRI</a>
						<a href="#" class="certificate certificate--small">SMP</a>
	        			<a class="agentheader__certi__list__link" href="#">+3</a>
	        		</div>
	        	</div>
	        	
	        </div>
	    </div>
      </section>
      <!-- /broker Header block -->
      
      <br><br><br><br><br>
      `,
      `
      <!-- Broker Header block -->
      <section class="brokerheader brokerheader__small">
      	<div class="brokerheader__photo" style="background-image:url(https://content.harstatic.com/img/member/heroimages/Agent_Website_Image_11.jpg);">
      		<div class="brokerheader__photo__inner">
	      		<div class="brokerheader__photo__inner_share">
					<a href="#"><img alt="Facebook" src="https://content.harstatic.com/media/icons/social/white/facebook.svg"></a>
					<a href="#"><img alt="LinkedIn" src="https://content.harstatic.com/media/icons/social/white/linkedin.svg"></a>
					<a href="#"><img alt="twitter" src="https://content.harstatic.com/media/icons/social/white/twitter.svg"></a>
					<a href="#"><img alt="Share" src="https://content.harstatic.com/media/icons/header_share.svg"></a>
				</div>
			</div>
        </div>
        <div class="brokerheader__agrow">
        	<div class="brokerheader__agrow__ag">
        		<div class="brokerheader__agrow__ag__ph">
        			<a class="brokerheader__agrow__ag__ph__img" href="#">
        				<img src="https://pics.harstatic.com/office/14600.gif">
        				<!-- if no image for agent company <img src="https://content.harstatic.com/media/icons/broker_building.svg"> -->
        			</a>
        		</div>
        		<div class="brokerheader__agrow__ag__info  text-truncate">
        			<div class="brokerheader__agrow__ag__info_title">
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
        			
        			
        				<div class="brokerheader__details">
					        <div class="brokerheader__details__list">
					        	<div class="pr-2 mr-2 border-right">
						        	<a href="#" tabindex="-1" class="agent_signature--mini__extra" title="View Amy Nabors 's profile">
					      				<div class="agent_signature--mini__extra__photo" style="background-image:url('https://pics.harstatic.com/agent/593161.jpg?ts=2021-03-04T16:45:004981');"></div>
						  			</a>
						  		</div>
						  		<a href="#" tabindex="-1" class="agent_signature--mini__extra mr-2" title="View Amy Nabors 's profile">
				      				<div class="agent_signature--mini__extra__photo" style="background-image:url('https://pics.harstatic.com/agent/666089.jpg?ts=2021-02-09T16:56:006690');"></div>
					  			</a>
					  			<a href="#" tabindex="-1" class="agent_signature--mini__extra mr-2" title="View Amy Nabors 's profile">
				      				<div class="agent_signature--mini__extra__photo" style="background-image:url('https://pics.harstatic.com/agent/650268.jpg?ts=2020-08-16T08:41:006234');"></div>
					  			</a>
					  			<a href="#" tabindex="-1" class="agent_signature--mini__extra mr-2" title="View Amy Nabors 's profile">
				      				<div class="agent_signature--mini__extra__photo" style="background-image:url('https://pics.harstatic.com/agent/488012.jpg?ts=2020-01-17T13:30:002828');"></div>
					  			</a>
					  			<a href="#" tabindex="-1" class="agent_signature--mini__extra mr-2" title="View Amy Nabors 's profile">
				      				<div class="agent_signature--mini__extra__photo" style="background-image:url('https://pics.harstatic.com/agent/659960.jpg?ts=2018-07-26T02:05:002897');"></div>
					  			</a>
					  			<a href="#" tabindex="-1" class="agent_signature--mini__extra mr-2" title="View Amy Nabors 's profile">
				      				<div class="agent_signature--mini__extra__photo" style="background-image:url('https://pics.harstatic.com/agent/199394.jpg?ts=2018-02-08T08:20:007353');"></div>
					  			</a>
					  			<a href="#" tabindex="-1" class="agent_signature--mini__extra mr-2" title="View Amy Nabors 's profile">
				      				<div class="agent_signature--mini__extra__photo" style="background-image:url('https://pics.harstatic.com/agent/650268.jpg?ts=2020-08-16T08:41:006234');"></div>
					  			</a>
					  			
					  			<a href="#" tabindex="-1" class="agent_signature--mini__extra" title="View Amy Nabors 's profile">
				      				<div class="agent_signature--mini__extra__photo"><span>7+</span></div>
					  			</a>
					        </div>
					    </div>
					    
					    <div class="brokerheader__details__listresp">
				        	<div class="row small-gutters">
				        		<div class="col-auto">
						        	<a href="#" tabindex="-1" class="agent_signature--mini" title="View Amy Nabors 's profile">
						      			<div class="agent_signature--mini__photo" style="background-image:url('https://pics.harstatic.com/agent/593161.jpg?ts=2021-03-04T16:45:004981');"></div>
							  			<div class="agent_signature--mini__name font_weight--bold text-truncate">Laura Mayer</div>
							  		</a>
							  		<a href="#" tabindex="-1" class="agent_signature--mini mr-2" title="View Amy Nabors 's profile">
					      				<div class="agent_signature--mini__photo" style="background-image:url('https://pics.harstatic.com/agent/666089.jpg?ts=2021-02-09T16:56:006690');"></div>
						  				<div class="agent_signature--mini__name text-truncate">Laura</div>
						  			</a>
						  			<a href="#" tabindex="-1" class="agent_signature--mini mr-2" title="View Amy Nabors 's profile">
					      				<div class="agent_signature--mini__photo" style="background-image:url('https://pics.harstatic.com/agent/650268.jpg?ts=2020-08-16T08:41:006234');"></div>
						  				<div class="agent_signature--mini__name text-truncate">Neil</div>
						  			</a>
						  		</div>
						  		<div class="col font_weight--medium font_weight--bold align-self-center">
						  			Charles, Carole, Sally<br>
						  			and more <a href="#">14 agents ↓</a>
						  		</div>
						  	</div>
				        </div>
						
						
				        
        		</div>
			</div><!-- /brokerheader__broker -->
			
			
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
			
						
        </div><!-- brokerheader__broker -->
        
        
      </section>
      <!-- /broker Header block -->
      
      <br><br><br><br><br>
      `,
      `
      <!-- Broker Header (without background) block -->
      <section class="brokerheader brokerheader__nobackground">
      	<div class="brokerheader__agrow">
        	<div class="brokerheader__agrow__ag">
        		<div class="brokerheader__agrow__ag__ph">
        			<a class="brokerheader__agrow__ag__ph__img" href="#">
        				<img src="https://pics.harstatic.com/office/14600.gif">
        				<!-- if no image for agent company <img src="https://content.harstatic.com/media/icons/broker_building.svg"> -->
        			</a>
        		</div>        		
			</div><!-- /brokerheader__broker -->
			
			<div class="brokerheader__agrow__inner">
				<div class="brokerheader__photo__inner_share">
					<a href="#"><img alt="Facebook" src="https://content.harstatic.com/media/icons/facebook_auxiliary.svg"></a>
					<a href="#"><img alt="LinkedIn" src="https://content.harstatic.com/media/icons/linkedin_auxiliary.svg"></a>
					<a href="#"><img alt="twitter" src="https://content.harstatic.com/media/icons/twitter_auxiliary.svg"></a>
					<a href="#"><img alt="Share" src="https://content.harstatic.com/media/icons/header_share_auxilary.svg"></a>
				</div>
				<div class="brokerheader__agrow__inner__cols">
					<div class="brokerheader__agrow__ag__info  text-truncate">
	        			<div class="brokerheader__agrow__ag__info_title">
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
					<div class="agentheader__agrow__links text-center d-md-flex ml-md-auto mr-md-0 d-none text-md-right pt-md-5">				
				
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
				</div>
			</div>
			
        </div><!-- brokerheader__broker -->
        
        <div class="brokerheader__details">
	        <div class="brokerheader__details__list">
	        	<div class="pr-md-3 mr-md-3 border-md-right">
		        	<a href="#" tabindex="-1" class="agent_signature--mini" title="View Amy Nabors 's profile">
	      				<div class="agent_signature--mini__photo" style="background-image:url('https://pics.harstatic.com/agent/593161.jpg?ts=2021-03-04T16:45:004981');"></div>
		  				<div class="agent_signature--mini__name font_weight--bold text-truncate">Laura Mayer</div>
		  			</a>
		  		</div>
		  		<a href="#" tabindex="-1" class="agent_signature--mini mr-2" title="View Amy Nabors 's profile">
      				<div class="agent_signature--mini__photo" style="background-image:url('https://pics.harstatic.com/agent/666089.jpg?ts=2021-02-09T16:56:006690');"></div>
	  				<div class="agent_signature--mini__name text-truncate">Laura</div>
	  			</a>
	  			<a href="#" tabindex="-1" class="agent_signature--mini mr-2" title="View Amy Nabors 's profile">
      				<div class="agent_signature--mini__photo" style="background-image:url('https://pics.harstatic.com/agent/650268.jpg?ts=2020-08-16T08:41:006234');"></div>
	  				<div class="agent_signature--mini__name text-truncate">Neil</div>
	  			</a>
	  			
	        </div>
	        
	        
	        <div class="brokerheader__details__listresp">
	        	<div class="row small-gutters">
	        		<div class="col-auto">
			        	<a href="#" tabindex="-1" class="agent_signature--mini" title="View Amy Nabors 's profile">
			      			<div class="agent_signature--mini__photo" style="background-image:url('https://pics.harstatic.com/agent/593161.jpg?ts=2021-03-04T16:45:004981');"></div>
				  			<div class="agent_signature--mini__name font_weight--bold text-truncate">Laura Mayer</div>
				  		</a>
				  		<a href="#" tabindex="-1" class="agent_signature--mini mr-2" title="View Amy Nabors 's profile">
		      				<div class="agent_signature--mini__photo" style="background-image:url('https://pics.harstatic.com/agent/666089.jpg?ts=2021-02-09T16:56:006690');"></div>
			  				<div class="agent_signature--mini__name text-truncate">Laura</div>
			  			</a>
			  			<a href="#" tabindex="-1" class="agent_signature--mini mr-2" title="View Amy Nabors 's profile">
		      				<div class="agent_signature--mini__photo" style="background-image:url('https://pics.harstatic.com/agent/650268.jpg?ts=2020-08-16T08:41:006234');"></div>
			  				<div class="agent_signature--mini__name text-truncate">Neil</div>
			  			</a>
			  		</div>
			  		<div class="col font_weight--medium font_weight--bold align-self-center">
			  			Charles, Carole, Sally<br>
			  			and more <a href="#">14 agents ↓</a>
			  		</div>
			  	</div>
	        </div>
	        
	        <div class="agentheader__share__resp">
				<div class="agentheader__photo__inner_share justify-content-center pt-4 d-md-none d-flex">
					<a href="#"><img alt="Facebook" src="https://content.harstatic.com/media/icons/facebook_auxiliary.svg"></a>
					<a href="#"><img alt="LinkedIn" src="https://content.harstatic.com/media/icons/linkedin_auxiliary.svg"></a>
					<a href="#"><img alt="twitter" src="https://content.harstatic.com/media/icons/twitter_auxiliary.svg"></a>
					<a href="#"><img alt="Share" src="https://content.harstatic.com/media/icons/header_share_auxilary.svg"></a>
				</div>
			</div>

	        <div class="agentheader__agrow__linksresp d-md-none d-block pt-0">
				<div class="agentheader__agrow__links text-center text-md-right pt-md-5">				
				
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
			</div><!-- agentheader__agrow__links_resp -->
	        
	        <div class="brokerheader__details__certi justify-content-end">
	        	<div class="brokerheader__details__certi__cul">
	        		<div class="brokerheader__details__certi__title">8 Cultures</div>
	        		<div class="brokerheader__details__certi__list">
	        			<a href="#"><img class="flag flag--small" src="https://content.harstatic.com/resources/images/find_a_pro/flags_mini/uk.jpg"></a>
						<a href="#"><img class="flag flag--small" src="https://content.harstatic.com/resources/images/find_a_pro/flags_mini/kr.jpg"></a>
	        		</div>
	        	</div>
	        	<div class="brokerheader__details__certi__cert">
	        		<div class="brokerheader__details__certi__title">6 Certifications</div>
	        		<div class="brokerheader__details__certi__list">
	        			<a href="#" class="certificate certificate--small">CSMS</a>
						<a href="#" class="certificate certificate--small">GRI</a>
	        		</div>
	        	</div>
	        </div>
	    </div>
      </section>
      <!-- /broker Header block -->
      
      <br><br><br><br><br>
      `,
      `
      <!-- Broker Header block -->
      <section class="brokerheader brokerheader__small_nobg">
      	<div class="brokerheader__agrow">
        	<div class="brokerheader__agrow__ag">
        		<div class="brokerheader__agrow__ag__ph">
        			<a class="brokerheader__agrow__ag__ph__img" href="#">
        				<img src="https://pics.harstatic.com/office/14600.gif">
        				<!-- if no image for agent company <img src="https://content.harstatic.com/media/icons/broker_building.svg"> -->
        			</a>
        		</div>
        		<div class="brokerheader__agrow__ag__info  text-truncate">
        			<div class="brokerheader__agrow__ag__info_title">
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
        			
        			
        				<div class="brokerheader__details">
					        <div class="brokerheader__details__list">
					        	<div class="pr-2 mr-2 border-right">
						        	<a href="#" tabindex="-1" class="agent_signature--mini__extra" title="View Amy Nabors 's profile">
					      				<div class="agent_signature--mini__extra__photo" style="background-image:url('https://pics.harstatic.com/agent/593161.jpg?ts=2021-03-04T16:45:004981');"></div>
						  			</a>
						  		</div>
						  		<a href="#" tabindex="-1" class="agent_signature--mini__extra mr-2" title="View Amy Nabors 's profile">
				      				<div class="agent_signature--mini__extra__photo" style="background-image:url('https://pics.harstatic.com/agent/666089.jpg?ts=2021-02-09T16:56:006690');"></div>
					  			</a>
					  			<a href="#" tabindex="-1" class="agent_signature--mini__extra mr-2" title="View Amy Nabors 's profile">
				      				<div class="agent_signature--mini__extra__photo" style="background-image:url('https://pics.harstatic.com/agent/650268.jpg?ts=2020-08-16T08:41:006234');"></div>
					  			</a>
					  			<a href="#" tabindex="-1" class="agent_signature--mini__extra mr-2" title="View Amy Nabors 's profile">
				      				<div class="agent_signature--mini__extra__photo" style="background-image:url('https://pics.harstatic.com/agent/488012.jpg?ts=2020-01-17T13:30:002828');"></div>
					  			</a>
					        </div>
					    </div>
					    
					    <div class="brokerheader__details__listresp">
				        	<div class="row small-gutters">
				        		<div class="col-auto">
						        	<a href="#" tabindex="-1" class="agent_signature--mini" title="View Amy Nabors 's profile">
						      			<div class="agent_signature--mini__photo" style="background-image:url('https://pics.harstatic.com/agent/593161.jpg?ts=2021-03-04T16:45:004981');"></div>
							  			<div class="agent_signature--mini__name font_weight--bold text-truncate">Laura Mayer</div>
							  		</a>
							  		<a href="#" tabindex="-1" class="agent_signature--mini mr-2" title="View Amy Nabors 's profile">
					      				<div class="agent_signature--mini__photo" style="background-image:url('https://pics.harstatic.com/agent/666089.jpg?ts=2021-02-09T16:56:006690');"></div>
						  				<div class="agent_signature--mini__name text-truncate">Laura</div>
						  			</a>
						  			<a href="#" tabindex="-1" class="agent_signature--mini mr-2" title="View Amy Nabors 's profile">
					      				<div class="agent_signature--mini__photo" style="background-image:url('https://pics.harstatic.com/agent/650268.jpg?ts=2020-08-16T08:41:006234');"></div>
						  				<div class="agent_signature--mini__name text-truncate">Neil</div>
						  			</a>
						  		</div>
						  		<div class="col font_weight--medium font_weight--bold align-self-center">
						  			Charles, Carole, Sally<br>
						  			and more <a href="#">14 agents ↓</a>
						  		</div>
						  	</div>
				        </div>
						
				        
        		</div>
			
				
			</div><!-- /brokerheader__broker -->
			
			<div class="agentheader__agrow__links">
				<div class="agentheader__photo__inner_share pb-3">
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
        </div><!-- brokerheader__broker -->
        
        
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
        pageTitle="Broker Header"
        activeParent="template_blocks"
        activeChild="broker_header">

        <TemplateComponentBlock hasContainer={false} blockTitle="Broker Header" elements={this.elements[0]} codeSnippets={this.codeSnippets[0]} />
        <TemplateComponentBlock hasContainer={false} blockTitle="Broker Header smaller" elements={this.elements[1]} codeSnippets={this.codeSnippets[1]} />
        <TemplateComponentBlock hasContainer={false} blockTitle="Broker Header (no image)" elements={this.elements[2]} codeSnippets={this.codeSnippets[2]} />
        <TemplateComponentBlock hasContainer={false} blockTitle="Broker Header" elements={this.elements[3]} codeSnippets={this.codeSnippets[3]} />
        

      </TemplateExpanded>
    )
  }

}
