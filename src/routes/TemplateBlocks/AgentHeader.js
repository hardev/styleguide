import React, {Component} from "react";
import TemplateExpanded from '../../components/TemplateExpanded';
import TemplateComponentBlock from '../../components/TemplateComponentBlock';

export default class AgentHeader extends Component {

  constructor(props) {
    super(props);

    this.elements = [
      `<!-- Agent Header block -->
      <section class="agentheader">
      	<div class="agentheader__photo" style="background-image:url(https://content.harstatic.com/img/member/heroimages/Agent_Website_Image_11.jpg);">
      		<div class="agentheader__photo__inner">
	      		<div class="agentheader__photo__inner_share">
					<a href="#"><img alt="Facebook" src="https://content.harstatic.com/media/icons/social/white/facebook.svg"></a>
					<a href="#"><img alt="LinkedIn" src="https://content.harstatic.com/media/icons/social/white/linkedin.svg"></a>
					<a href="#"><img alt="twitter" src="https://content.harstatic.com/media/icons/social/white/twitter.svg"></a>
					<a class="pl-2" href="#"><span>Share</span></a>
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
			
			<div class="agentheader__agrow__links d-md-block d-none">
				<button tabindex="0" class="btn btn--ordinary mb-2">Recommend this Agent</button>
				<button tabindex="0" class="btn btn--prominent ml-3 mb-2">Request callback</button>
				<div class="agentheader__agrow__links_more">
					<button tabindex="0" class="btn btn--ordinary btn--small mr-3">View phone</button>
					<button tabindex="0" class="btn btn--ordinary btn--small">Send email</button>
				</div>
			</div><!-- agentheader__links -->
			
			<div class="agentheader__agrow__linksresp d-md-none d-block">
				<button tabindex="0" class="btn btn--prominent btn--medium w-100 mb-2">Request callback</button>
				<div class="row no-gutters">
					<div class="col pb-2 pr-2">
						<button tabindex="0" class="btn btn--ordinary mr-3 w-100">Recommend</button>
					</div>
					<div class="col-auto pb-2">
						<button tabindex="0" class="btn btn--ordinary w-100">Phone</button>
					</div>
					<div class="col pb-2 pl-2">
						<button tabindex="0" class="btn btn--ordinary w-100">Email</button>
					</div>
				</div>
			</div><!-- agentheader__agrow__links_resp -->
						
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
					<a class="agentheader__certi__list__link" href="#"><span>Share</span></a>
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
			
			<div class="agentheader__agrow__links d-md-block d-none">
				<button tabindex="0" class="btn btn--ordinary mb-2">Recommend this Agent</button>
				<button tabindex="0" class="btn btn--prominent ml-3 mb-2">Request callback</button>
				<div class="agentheader__agrow__links_more">
					<button tabindex="0" class="btn btn--ordinary btn--small mr-3">View phone</button>
					<button tabindex="0" class="btn btn--ordinary btn--small">Send email</button>
				</div>
			</div><!-- agentheader__links -->
			
			<div class="agentheader__agrow__linksresp d-md-none d-block">
				<button tabindex="0" class="btn btn--prominent btn--medium w-100 mb-2">Request callback</button>
				<div class="row no-gutters">
					<div class="col pb-2 pr-2">
						<button tabindex="0" class="btn btn--ordinary mr-3 w-100">Recommend</button>
					</div>
					<div class="col-auto pb-2">
						<button tabindex="0" class="btn btn--ordinary w-100">Phone</button>
					</div>
					<div class="col pb-3 pl-2">
						<button tabindex="0" class="btn btn--ordinary w-100">Email</button>
					</div>
				</div>
			</div><!-- agentheader__agrow__links_resp -->

					
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
					<a class="pl-2" href="#"><span>Share</span></a>
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
					<div class="agentheader__agrow__links d-md-block d-none">
						<button tabindex="0" class="btn btn--prominent mb-2">Send email</button>
						<div class="agentheader__agrow__links_more">
							<button tabindex="0" class="btn btn--ordinary btn--small mr-3">View phone</button>
							<button tabindex="0" class="btn btn--ordinary btn--small">Visit website ↗</button>
						</div>
					</div><!-- agentheader__links -->
				</div>
			</div>
			
			<div class="agentheader__agrow__linksresp d-md-none d-block">
				<button tabindex="0" class="btn btn--prominent btn--medium w-100 mb-2">Request callback</button>
				<div class="row no-gutters">
					<div class="col pb-2 pr-2">
						<button tabindex="0" class="btn btn--ordinary mr-3 w-100">Recommend</button>
					</div>
					<div class="col-auto pb-2">
						<button tabindex="0" class="btn btn--ordinary w-100">Phone</button>
					</div>
					<div class="col pb-2 pl-2">
						<button tabindex="0" class="btn btn--ordinary w-100">Email</button>
					</div>
				</div>
			</div><!-- agentheader__agrow__links_resp -->
			
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
			
			<div class="agentheader__agrow__links d-md-block d-none">
				<div class="agentheader__photo__inner_share">
					<a href="#"><img alt="Facebook" src="https://content.harstatic.com/media/icons/facebook_auxiliary.svg"></a>
					<a href="#"><img alt="LinkedIn" src="https://content.harstatic.com/media/icons/linkedin_auxiliary.svg"></a>
					<a href="#"><img alt="twitter" src="https://content.harstatic.com/media/icons/twitter_auxiliary.svg"></a>
					<a class="pl-2" href="#"><span>Share</span></a>
				</div>
				<button tabindex="0" class="btn btn--prominent ml-3 mb-2">Request callback</button>
				<div class="agentheader__agrow__links_more">
					<button tabindex="0" class="btn btn--ordinary btn--small mr-3">View phone</button>
					<button tabindex="0" class="btn btn--ordinary btn--small">Send email</button>
				</div>
			</div><!-- agentheader__links -->
			
			<div class="agentheader__agrow__linksresp d-md-none d-block">
				<button tabindex="0" class="btn btn--prominent btn--medium w-100 mb-2">Request callback</button>
				<div class="row no-gutters">
					<div class="col pb-2 pr-2">
						<button tabindex="0" class="btn btn--ordinary mr-3 w-100">Recommend</button>
					</div>
					<div class="col-auto pb-2">
						<button tabindex="0" class="btn btn--ordinary w-100">Phone</button>
					</div>
					<div class="col pb-3 pl-2">
						<button tabindex="0" class="btn btn--ordinary w-100">Email</button>
					</div>
				</div>
			</div><!-- agentheader__agrow__links_resp -->

					
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
			
			<div class="agentheader__agrow__links d-md-block d-none">
				<div class="agentheader__photo__inner_share">
					<a href="#"><img alt="Facebook" src="https://content.harstatic.com/media/icons/facebook_auxiliary.svg"></a>
					<a href="#"><img alt="LinkedIn" src="https://content.harstatic.com/media/icons/linkedin_auxiliary.svg"></a>
					<a href="#"><img alt="twitter" src="https://content.harstatic.com/media/icons/twitter_auxiliary.svg"></a>
					<a class="pl-2" href="#"><span>Share</span></a>
				</div>
				<button tabindex="0" class="btn btn--prominent ml-3 mb-2">Request callback</button>
				<div class="agentheader__agrow__links_more">
					<button tabindex="0" class="btn btn--ordinary btn--small mr-3">View phone</button>
					<button tabindex="0" class="btn btn--ordinary btn--small">Send email</button>
				</div>
			</div><!-- agentheader__links -->
			
			<div class="agentheader__agrow__linksresp d-md-none d-block">
				<button tabindex="0" class="btn btn--prominent btn--medium w-100 mb-2">Request callback</button>
				<div class="row no-gutters">
					<div class="col pb-2 pr-2">
						<button tabindex="0" class="btn btn--ordinary mr-3 w-100">Recommend</button>
					</div>
					<div class="col-auto pb-2">
						<button tabindex="0" class="btn btn--ordinary w-100">Phone</button>
					</div>
					<div class="col pb-3 pl-2">
						<button tabindex="0" class="btn btn--ordinary w-100">Email</button>
					</div>
				</div>
			</div><!-- agentheader__agrow__links_resp -->

					
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

      </TemplateExpanded>
    )
  }

}
