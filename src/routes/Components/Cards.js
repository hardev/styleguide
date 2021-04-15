import React, {Component} from "react";
import TemplateDefault from '../../components/TemplateDefault';
import TemplateComponentBlock from '../../components/TemplateComponentBlock';

export default class ListingCards extends Component {

  constructor(props) {
    super(props);

    this.elements = [
      `<div class="row">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 tabindex="0">Landscape Small</h4>
        </div>
      </div>
      <div class="row">
        <div class="col col-sm-4 col-12 mb-0">
          <div class="card card--landscape_small">
            <a href="#">Drive Time</a>
          </div>
        </div>
        <div class="col col-sm-4 col-12 mb-0">
          <a href="#" class="d-block card card--hover text-decoration-none p-2 font_weight--bold mb-0"><img class="border_radius--mini mr-2 d-inline-block" style="width:38px;height:25px;" src="https://content.harstatic.com/resources/images/find_a_pro/flags_mini/af.jpg"> Afrikaans <span class="font_weight--regular color_auxiliary">(34)</span></a>
        </div>
        <div class="col col-sm-4 col-12 mb-0">
          <a href="#" class="d-block card card--hover text-decoration-none p-2 font_weight--bold mb-0">Arabic <span class="font_weight--regular color_auxiliary">(34)</span></a>
        </div>        
        <div class="clear_both"></div>
      </div>

      <hr />

      <div class="row">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 tabindex="0">Landscape Small with Icon</h4>
        </div>
      </div>
      <div class="row">
        <div class="col col-sm-4 col-12 mb-0">
          <div class="card card--landscape_small card--landscape_small--with_icon card--landscape_small--with_icon--facebook">
            <a href="#">Share on Facebook</a>
          </div>
        </div>
      </div>

      <hr />
	  
	  <div class="row">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 tabindex="0">Agent Card Small</h4>
        </div>
      </div>
      <div class="row">
        <div class="col col-sm-6 col-12 mb-0 pb-0">
          <div class="card card--agent">
            <a href="#" class="card--agent__image" style="background-image: url(https://pics.harstatic.com/agent/716096.jpg?ts=2019-01-18T17:12:001099);"></a>            
            <div class="card--agent__content ">
              <a class="card--agent__content_name  align-self-center" href="#">Leslie Avila</a>
              <div class="card--agent__content_stars  align-self-center">
					<img alt="" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg"><img alt="" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg"><img alt="" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg"><img alt="" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg"><img alt="" src="https://content.harstatic.com/media/icons/stars_16by16_gray.svg">
			   </div>
			   <div class="card--agent__content_desc  align-self-center"><img alt="" src="https://content.harstatic.com/resource_2019/imgs/icons/platenium_p.svg"> Platinum Agent</div>
            </div>
          </div>
        </div>
        
        <div class="col col-sm-6 col-12 mb-0 pb-0">
          <div class="card card--agent">
          	<div class="card--agent__badge">Designated REALTOR®</div>
            <a href="#" class="card--agent__image" style="background-image: url(https://pics.harstatic.com/agent/716096.jpg?ts=2019-01-18T17:12:001099);"></a>            
            <div class="card--agent__content">
              <a class="card--agent__content_name" href="#">Leslie Avila</a>
              <div class="card--agent__content_stars">
					<img alt="" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg"><img alt="" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg"><img alt="" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg"><img alt="" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg"><img alt="" src="https://content.harstatic.com/media/icons/stars_16by16_gray.svg">
			   </div>
			   <div class="card--agent__content_desc"><img alt="" src="https://content.harstatic.com/resource_2019/imgs/icons/platenium_p.svg"> Platinum Agent</div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      
      
      <div class="row">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 tabindex="0">Agent Card Portrait</h4>
        </div>
      </div>
      <div class="row">
        <div class="col-auto mb-0 pb-0">
          <div class="card card--agent_portrait" style="width:182px;">
            <a href="#" class="card--agent_portrait__image" style="background-image: url(https://pics.harstatic.com/agent/716096.jpg?ts=2019-01-18T17:12:001099);"></a>            
            <div class="card--agent_portrait__content ">
              <a class="card--agent_portrait__content_name  align-self-center" href="#">Leslie Avila</a>
              <div class="card--agent_portrait__content_stars  align-self-center">
					<img alt="" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg"><img alt="" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg"><img alt="" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg"><img alt="" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg"><img alt="" src="https://content.harstatic.com/media/icons/stars_16by16_gray.svg">
			   </div>
			   <div class="card--agent_portrait__content_desc  align-self-center">Greenwood King Properties - Kirby Real Estate</div>
			   <button tabindex="0" class="btn btn--primary btn--small-extra">Connect to agent</button>
            </div>
          </div>
        </div>
        
        <div class="col-auto mb-0 pb-0">
          <div class="card card--agent_portrait" style="width:182px;">
            <a href="#" class="card--agent_portrait__image" style="background-image: url(https://pics.harstatic.com/agent/716096.jpg?ts=2019-01-18T17:12:001099);"></a>            
            <div class="card--agent_portrait__content ">
              <a class="card--agent_portrait__content_name  align-self-center" href="#">Leslie Avila</a>
              <div class="card--agent_portrait__content_stars  align-self-center">
					<img alt="" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg"><img alt="" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg"><img alt="" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg"><img alt="" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg"><img alt="" src="https://content.harstatic.com/media/icons/stars_16by16_gray.svg">
			   </div>
			   <div class="card--agent_portrait__content_desc  align-self-center">Greenwood King Properties - Kirby Real Estate</div>
			   <button tabindex="0" class="btn btn--primary btn--small-extra">Connect to agent</button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      
      
      <div class="row">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 tabindex="0">Agent Card Large</h4>
        </div>
      </div>
      <div class="row">
        <div class="col-12 mb-0 pb-0">
          <div class="card card--agent_large">
          	<div class="card--agent_large__badge">Designated REALTOR®</div>
          	<div class="card--agent_large__profile">
	            <a href="#" class="card--agent_large__image" style="background-image: url(https://pics.harstatic.com/agent/716096.jpg?ts=2019-01-18T17:12:001099);"></a>            
	            <div class="card--agent_large__content">
	              <div class="card--agent_large__content_desc"><img alt="" src="https://content.harstatic.com/resource_2019/imgs/icons/platenium_p.svg"> Platinum Agent<div class="clearfix"></div></div>
	              <a class="card--agent_large__content_name" href="#">Aneeka Chauhan</a>
	              <div class="card--agent_large__content_stars">
						<img alt="" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg"><img alt="" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg"><img alt="" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg"><img alt="" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg"><img alt="" src="https://content.harstatic.com/media/icons/stars_16by16_gray.svg">
						<span class="font_weight--bold ml-1 align-middle">4.0</span> / <span class="mr-2 align-middle">5.0</span><span class=" color_auxiliary_light">70 surveys</span>
				   </div>
		 		   <div class="font_weight--bold pt-2 font_size--small_extra d-none d-md-block overflow-ellipsis overflow-hidden">John Daugherty Broker Propert…</div>
	            </div>
	        </div>
	        <div class="card--agent_large__certifi pt-4 pt-md-0">
	        	<div class="pb-4 mb-3 text-md-right d-none d-md-block">
	        		<a class="font_size--small font_weight--bold pr-4" href="#">Profile</a>
	        		<a class="font_size--small font_weight--bold" href="#">Contact</a>	        		
	        	</div>
	        	<div class="row no-gutters">
					<div class="col-4">
						<div class="text-uppercase font_size--small_extra pb-md-2 pb-1">Languages</div>
						<div class="font_weight--bold mr-1 float-left overflow-hidden overflow-ellipsis" style="width:50px;">Portuguese</div>
						<a href="#" class="card--agent_large__more_btn" style="">+2</a>
					</div>
					<div class="col-4 border-left pl-3">
						<div class="text-uppercase font_size--small_extra pb-md-2 pb-1">Cultures</div>								
						<span class="card--agent_large__flag" data-toggle="tooltip" data-placement="top" title="" data-original-title="Brazil">
							<img alt="Brazil" class="img-fluid" src="https://content.harstatic.com/resources/images/find_a_pro/flags_mini/br.jpg">
						</span>										
						
						<a href="#" class="card--agent_large__more_btn" style="">+5</a>
					</div>
					<div class="col-4 pl-3 border-left">
						<div class="text-uppercase font_size--small_extra pb-md-2 pb-1 overflow-hidden overflow-ellipsis">Certifications</div>								
						<a href="javascript:void(0);" class="card--agent_large__certificate" data-toggle="popover" data-trigger="focus" data-placement="bottom" title="" data-content="The Certified Negotiation Expert (CNE)">
							CSMS
						</a>
						
						<a href="#" class="card--agent_large__more_btn">+3</a>
					</div>
				</div>
	        </div>
          </div>
        </div>
        
      </div>
      
      <hr />
      
      
      <div class="row">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 tabindex="0">Agent Card Long info</h4>
        </div>
      </div>
      <div class="row">
        <div class="col-12 mb-0 pb-0">
          <a href="#" class="card card--agent_longinfo">
          	<div class="card--agent_longinfo__profile">
	            <div class="card--agent_longinfo__image" style="background-image: url(https://pics.harstatic.com/agent/716096.jpg?ts=2019-01-18T17:12:001099);"></div>
	            <div class="card--agent_longinfo__content">
	              <div class="card--agent_longinfo__content_desc"><img alt="" src="https://content.harstatic.com/media/icons/label-platinum.svg"><div class="clearfix"></div></div>
	              <div class="card--agent_longinfo__content_name">Aneeka Chauhan</div>
	              <div class="card--agent_longinfo__content_stars">
						<img alt="" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg"><img alt="" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg"><img alt="" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg"><img alt="" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg"><img alt="" src="https://content.harstatic.com/media/icons/stars_16by16_gray.svg">
						<span class="font_weight--bold ml-1 align-middle">4.0</span> / <span class="mr-2 align-middle">5.0</span><span class=" color_auxiliary_light">70 surveys</span>
				   </div>
		 		   <div class="pt-2 font_size--small_extra d-none d-md-block overflow-ellipsis overflow-hidden">John Daugherty Broker Propert…</div>
	            </div>
	        </div>
	        <div class="card--agent_longinfo__certifi pt-4 pt-md-0">
	        	<div class="border-bottom mb-3 pb-1 ml-md-auto" style="max-width:240px;">
		        	<div class="d-flex justify-content-md-end bd-highlight">
					  <div class="pr-3 bd-highlight">
					  		<div class="font_weight--bold color_carbon">23</div>
							<div class="pb-2 color_auxiliary">For Sale</div>
					  </div>
					  <div class="pl-3 pr-3 bd-highlight">
					  		<div class="font_weight--bold color_carbon">35</div>
							<div class="pb-2 color_auxiliary">For Rent</div>
					  </div>
					  <div class="pl-3 pr-3 bd-highlight">
					  		<div class="font_weight--bold color_carbon">19</div>
							<div class="pb-2 color_auxiliary">Sold</div>
					  </div>
					  <div class="pl-3 bd-highlight">
					  		<div class="font_weight--bold color_carbon">41</div>
							<div class="pb-2 color_auxiliary">Leased</div>
					  </div>
					</div>
					
		        	<div class="font_size--small_extra_extra text-right" style="opacity:0.6;">Based on past 12 mos.</div>
				</div>
				
	        	<div class="d-flex justify-content-md-end bd-highlight">
				  <div class="pr-3 bd-highlight">
				  		<div class="font_weight--bold mr-1 float-left overflow-hidden overflow-ellipsis">Portuguese</div>
						<div class="card--agent_longinfo__more_btn" style="">+2</div>
				  </div>
				  <div class="pl-3 bd-highlight">
				  		<span class="card--agent_longinfo__flag" data-toggle="tooltip" data-placement="top" title="" data-original-title="Brazil">
							<img alt="Brazil" class="img-fluid" src="https://content.harstatic.com/resources/images/find_a_pro/flags_mini/br.jpg">
						</span>
						<span class="card--agent_longinfo__certificate" data-toggle="popover" data-trigger="focus" data-placement="bottom" title="" data-content="The Certified Negotiation Expert (CNE)">
							CSMS
						</span>			
						<div class="card--agent_longinfo__more_btn" style="">+5</div>
				  </div>
				</div>
	        </div>
	        <div class="card--agent_longinfo__arrowlink color_har_blue font_size--medium text-decoration-none align-self-center float-right">
	        	<div class="d-flex justify-content-end">
	        		<div><span class="font_weight--bold">View profile</span> and<br>have her assistance</div>
	        		<div class="align-self-center ml-3"><img style="height:20px;" src="https://content.harstatic.com/media/icons/arrow_right_blue.svg"></div>
	        	</div>
			</div>
          </a>
        </div>
        
      </div>
      
      
      <div class="row">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 tabindex="0">Agent Card Long info Small</h4>
        </div>
      </div>
      <div class="row">
        <div class="col-12 mb-0 pb-0">
          <a href="#" class="card card--agent_longinfo  card--agent_longinfo_small" style="max-width:520px;">
          	<div class="card--agent_longinfo__profile">
	            <div class="card--agent_longinfo_small__image" style="background-image: url(https://pics.harstatic.com/agent/716096.jpg?ts=2019-01-18T17:12:001099);"></div>            
	            <div class="card--agent_longinfo__content">
	              <div class="card--agent_longinfo__content_desc pb-1 pt-0"><img alt="" src="https://content.harstatic.com/media/icons/label-platinum.svg"><div class="clearfix"></div></div>
	              <div class="font_weight--bold color_carbon pb-2" href="#">Aneeka Chauhan</div>
	              <div class="card--agent_longinfo__content_stars">
						<img style="width:12px;" alt="" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg"><img style="width:12px;" alt="" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg"><img style="width:12px;" alt="" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg"><img style="width:12px;" alt="" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg"><img style="width:12px;" alt="" src="https://content.harstatic.com/media/icons/stars_16by16_gray.svg">						
				   </div>
		 		   <div class="pt-1 d-none d-md-block overflow-ellipsis overflow-hidden">John Daugherty Broker Propert…</div>
	            </div>
	        </div>
	        <div class="card--agent_longinfo__certifi pt-4 pt-md-0">
	        	<div class="border-bottom mb-3 pb-1 ml-md-auto" style="max-width:240px;">
		        	<div class="d-flex justify-content-md-end bd-highlight">
					  <div class="pr-3 bd-highlight">
					  		<div class="font_weight--bold font_size--small_extra color_carbon">23</div>
							<div class="pb-2 color_auxiliary font_size--small_extra_extra">FOR SALE</div>
					  </div>
					  <div class="pl-3 pr-3 bd-highlight">
					  		<div class="font_weight--bold font_size--small_extra color_carbon">35</div>
							<div class="pb-2 color_auxiliary font_size--small_extra_extra">FOR RENT</div>
					  </div>
					  <div class="pl-3 pr-3 bd-highlight">
					  		<div class="font_weight--bold font_size--small_extra color_carbon">19</div>
							<div class="pb-2 color_auxiliary font_size--small_extra_extra">SOLD</div>
					  </div>
					  <div class="pl-3 bd-highlight">
					  		<div class="font_weight--bold font_size--small_extra color_carbon">41</div>
							<div class="pb-2 color_auxiliary font_size--small_extra_extra">LEASED</div>
					  </div>
					</div>
				</div>
				
	        	<div class="d-flex justify-content-md-end bd-highlight">
				  <div class="pr-3 bd-highlight">
				  		<div class="font_weight--bold mr-1 float-left overflow-hidden overflow-ellipsis">Portuguese</div>
						<div class="card--agent_longinfo__more_btn" style="">+2</div>
				  </div>
				  <div class="pl-3 bd-highlight">
				  		<span class="card--agent_longinfo__flag" data-toggle="tooltip" data-placement="top" title="" data-original-title="Brazil">
							<img alt="Brazil" class="img-fluid" src="https://content.harstatic.com/resources/images/find_a_pro/flags_mini/br.jpg">
						</span>						
						<div class="card--agent_longinfo__more_btn" style="">+5</div>
				  </div>
				</div>
	        </div>
	        <div class="card--agent_longinfo__arrowlink color_har_blue font_size--medium text-decoration-none align-self-center float-right">
	        	<div class="d-flex justify-content-end">
	        		<div><span class="font_weight--bold">View profile</span> and<br>have her assistance</div>
	        		<div class="align-self-center ml-3"><img style="height:20px;" src="https://content.harstatic.com/media/icons/arrow_right_blue.svg"></div>
	        	</div>
			</div>
          </a>
        </div>        
      </div>
      
      <hr />
      
      
      <div class="row">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 tabindex="0">Broker Card</h4>
        </div>
      </div>
      <div class="row">
        <div class="col-12 mb-0 pb-0">
          <a href="#" class="card card--broker_longinfo">
          	<div class="card--broker_longinfo__profile">          		
	            <div class="card--broker_longinfo__image"><div class="align-self-center"><img src="https://pics.harstatic.com/office/975041.gif?ts=1612799615"></div></div>
	            <div class="card--broker_longinfo__content">
	              <div class="card--broker_longinfo__content_name">Martha Turner Sotheby's International Realty</div>
	              <div class="pt-2 font_size--small_extra">50 Briar Hollow Ln Ste 700W Houston, TX 77027</div>
	            </div>
	            <div class="clearfix"></div>
	        </div>
	        <div class="card--broker_longinfo__certifi pt-4 pt-md-0">
	        	<div class="border-bottom mb-3 pb-1 ml-md-auto" style="max-width:240px;">
		        	<div class="d-flex justify-content-md-end bd-highlight">
					  <div class="pr-3 bd-highlight">
					  		<div class="font_weight--bold color_carbon">23</div>
							<div class="pb-2 color_auxiliary">For Sale</div>
					  </div>
					  <div class="pl-3 pr-3 bd-highlight">
					  		<div class="font_weight--bold color_carbon">35</div>
							<div class="pb-2 color_auxiliary">For Rent</div>
					  </div>
					  <div class="pl-3 pr-3 bd-highlight">
					  		<div class="font_weight--bold color_carbon">19</div>
							<div class="pb-2 color_auxiliary">Sold</div>
					  </div>
					  <div class="pl-3 bd-highlight">
					  		<div class="font_weight--bold color_carbon">41</div>
							<div class="pb-2 color_auxiliary">Leased</div>
					  </div>
					</div>
					
		        	<div class="font_size--small_extra_extra text-right" style="opacity:0.6;">Based on past 12 mos.</div>
				</div>
				
	        	<div class="d-flex justify-content-md-end bd-highlight">
				  <div class="pr-3 bd-highlight">
				  		<div class="font_weight--bold mr-1 float-left overflow-hidden overflow-ellipsis">Portuguese</div>
						<div class="card--broker_longinfo__more_btn" style="">+2</div>
				  </div>
				  <div class="pl-3 bd-highlight">
				  		<span class="card--agent_longinfo__flag" data-toggle="tooltip" data-placement="top" title="" data-original-title="Brazil">
							<img alt="Brazil" class="img-fluid" src="https://content.harstatic.com/resources/images/find_a_pro/flags_mini/br.jpg">
						</span>						
						<div class="card--broker_longinfo__more_btn" style="">+5</div>
				  </div>
				</div>
	        </div>
	        <div class="card--broker_longinfo__arrowlink color_har_blue font_size--medium text-decoration-none align-self-center float-right">
	        	<div class="d-flex justify-content-end">
	        		<div><span class="font_weight--bold">View profile</span> and<br>have her assistance</div>
	        		<div class="align-self-center ml-3"><img style="height:20px;" src="https://content.harstatic.com/media/icons/arrow_right_blue.svg"></div>
	        	</div>
			</div>
          </a>
        </div>
        
      </div>
      
      
      
      <hr />
	  <div class="row">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 tabindex="0">Team Card</h4>
        </div>
      </div>
	  <div class="row">
        <div class="col-12 col-md-6 mb-0 pb-0">	
	  		<div class="card card--team">
            <div class=""><a href="#" class="card--team__logo_image" style="background-image: url(https://pics.harstatic.com/office/608300.jpg?ts=1608743551);"></a></div>
            <div class="card--team__content ">
              <a class="card--team__content_name  align-self-center" href="#">The Kink Team</a>              
			   <div class="card--team__content_desc  align-self-center color_auxiliary">Keller Williams Realty The Woodlands</div>
			   <div class="d-flex pt-2">
			   		<div class="card--team__content_agents" style="background-image: url(https://pics.harstatic.com/agent/674895.jpg?ts=2020-07-25T16:48:005068);"></div>
			   		<div class="color_slate align-self-center pl-2">2 members</div>
			   </div>
            </div>
          </div>
        </div>
      </div>
      
      <hr />
	  <div class="row">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 tabindex="0">Team Broker</h4>
        </div>
      </div>
	  <div class="row">
        <div class="col-12 col-md-6 mb-0 pb-0">	
	  		<div class="card card--broker">
            <a href="#" class="card--broker__logo"><img src="https://pics.harstatic.com/office/975041.gif?ts=1612799615"></a>
            <div class="card--broker__content ">
              <a class="card--broker__content_name  align-self-center" href="#">Martha Turner Sotheby's International Realty</a>              
			   <div class="card--broker__content_desc  align-self-center color_auxiliary">50 Briar Hollow Ln Ste 700W Houston, TX 77027</div>
            </div>
          </div>
        </div>
      </div>
     
     
      <hr />
	  <div class="row">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 tabindex="0">Service Provider Card</h4>
        </div>
      </div>
	  <div class="row">
        <div class="col-12 col-md-6 mb-0 pb-0">	
	  		<div class="card card--provider">
            <a href="#" class="card--provider__logo" style="background-image:url(https://pics.harstatic.com/agent/95510316.jpg);"></a>
            <div class="card--provider__content align-self-center">
            	<div class="card--provider__content_tage">Photography</div>
                <a class="card--provider__content_name" href="#">Tiberon Systems</a>              
			    <div class="card--provider__content_desc">
			   		<div class="font_weight--semi_bold">Navy Federal Credit Union</div>
			   		<div>Corpus Christi, TX 78413</div>
			    </div>			   
            </div>
          </div>
        </div>
      </div>
      
       
       <hr />    
      <div class="row">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 tabindex="0">Landscape medium</h4>
        </div>
      </div>

      <div class="row">
        <div class="col col-sm-6 col-12 mb-0 pb-0">
          <a href="#" class="card card--landscape_medium">
            <div class="card--landscape_medium__image_content">
              <div class="card--landscape_medium__image_content__image" style="background-image: url(https://content.harstatic.com/resource_2019/imgs/temprary/badges.jpg);"></div>
            </div>
            <div class="card--landscape_medium__content">
              <h5 tabindex="0">Open House</h5>
              <div class="card--landscape_medium__text">Pay a visit to several properties open for you</div>
            </div>
          </a>
        </div>
      </div>

      <hr />

      <div class="row">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 tabindex="0">Landscape large</h4>
        </div>
      </div>
      <div class="row">
        <div class="col col-sm-12 col-12 mb-0 pb-0">
          <div class="card card--landscape_large">
            <div class="card--landscape_large__image_content">
              <div class="card--landscape_large__image_content__image" style="background-image: url(https://content.harstatic.com/resource_2019/imgs/temprary/badges.jpg);">
                <a tabindex="-1" href="#" title="Home prices are so high, pending sales have dropped for 7 months in a row"></a>
              </div>
            </div>
            <div class="card--landscape_large__content">
              <h5 tabindex="0"><a tabindex="0" href="#">Home prices are so high, pending sales have dropped for 7 months in a row</a></h5>
              <div class="card--landscape_large__text pt-3">The National Association of Realtors blames years of inadequate housing supply and consistent home price growth in hot job markets. Pending home sales dropped 0.7 percent month-over-month and 2.3 percent year-over-year to 106.2. the seventh consecutive month of... <a href="#"  tabindex="-1" class="font_weight--semi_bold">Read more</a></div>
            </div>
          </div>
        </div>
      </div>

	  <hr />

      <div class="row">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 tabindex="0">Blog Post</h4>
        </div>
      </div>
      <div class="row">
        <div class="col col-md-9 col-12 mb-0 pb-0">
          <a href="#" class="text-decoration-none hover--color-slate-light color-slate-light">
          <div class="card card--blog_post">
          	<div class="card--blog_post__content">
              <h5 tabindex="0">What's new in Legislation for Homeowners?</h5>
              <div class="card--blog_post__date pt-1">Nov 04, 2019</div>
              <div class="card--blog_post__text pt-2">This home creates a great entertaining atmosphere with Open spaces. Your new home is a Smart Home. The Thermostat and Front door are programmable and… <span class="font_weight--bold">read more</span></div>
            </div>
            <div class="card--blog_post__image_content">
              <div class="card--blog_post__image_content__image" style="background-image: url(https://content.harstatic.com/resource_2019/imgs/temprary/badges.jpg);">
                <div title="Home prices are so high, pending sales have dropped for 7 months in a row"></div>
              </div>
            </div>            
          </div>
          </a>
        </div>
      </div>
      
	  </div>`,

      `<div class="row">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 tabindex="0">Portrait medium (Variation 1)</h4>
        </div>
      </div>

      <div class="row card_portrait_medium_container">
        <div class="col col-7 col-sm-5 col-md-5 col-lg-3 mb-0 pb-0">
          <a href="#" class="card card--portrait_medium">
            <div class="card--portrait_medium__image_content">
              <div class="card--portrait_medium__image_content__image" style="background-image:url(https://media.istockphoto.com/photos/man-using-dslr-camera-picture-id1018589116?s=2048x2048);"></div>
            </div>
            <div class="card--portrait_medium__content card--portrait_medium__content--two_lines_height">
              <h5 tabindex="0">Photographer <span class="font_size font_size--small color_auxiliary font_weight--regular">(376)</span></h5>
            </div>
          </a>
        </div>
      </div>

      <hr />

      <div class="row">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 tabindex="0">Portrait medium (Variation 2)</h4>
        </div>
      </div>

      <div class="row card_portrait_medium_container">
        <div class="col col-7 col-sm-5 col-md-5 col-lg-3 mb-0 pb-0">
          <a href="#" class="card card--portrait_medium">
            <div class="card--portrait_medium__image_content">
              <div class="card--portrait_medium__image_content__image" style="background-image:url(https://content.harstatic.com/resource_2019/imgs/temprary/city_badge2.jpg);"></div>
            </div>
            <div class="card--portrait_medium__content">
              <h5 class="mb-2">Houston</h5>
              <div class="card--portrait_medium__text">
                <span class="color_carbon font_weight--bold">5,803</span> Homes for Sale<br />
                <span class="color_carbon font_weight--bold">$506K</span> Avg. price
              </div>
            </div>
          </a>
        </div>
      </div>

      <hr />

      <div class="row">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 tabindex="0">Portrait medium (Variation 3)</h4>
        </div>
      </div>

      <div class="row card_portrait_medium_container">
        <div class="col col-12 col-md-4 mb-0 pb-0">
          <a href="#" class="card card--portrait_medium">
            <div class="card--portrait_medium__image_content card--portrait_medium__image_content--large">
              <div class="card--portrait_medium__image_content__image" style="background-image:url(http://d1marr3m5x4iac.cloudfront.net/images/block250/I0-001/017/640/416-4.jpeg_/monster-jam-16.jpeg);"></div>
            </div>
            <div class="card--portrait_medium__content text-left">
              <h5 tabindex="0">NRG Stadium</h5>
              <span class="font_size font_size--small color_auxiliary font_weight--regular">January 26, 2019 at 07:00 PM</span>
            </div>
          </a>
        </div>
      </div>

      <hr />

      <div class="row">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 tabindex="0">Portrait medium (Variation 4)</h4>
        </div>
      </div>

      <div class="row card_portrait_medium_container">
        <div class="col col-12 col-md-4 mb-0 pb-0">
          <a href="#" class="card card--portrait_medium">
            <div class="card--portrait_medium__image_content card--portrait_medium__image_content--large">
              <div class="card--portrait_medium__image_content__image" style="background-image:url(https://www.billboard.com/files/styles/article_main_image/public/media/justin-timberlake-eurovision-performance-2016-billboard-1548.jpg);"></div>
            </div>
            <div class="card--portrait_medium__content text-left">
              <h5 tabindex="0">Justin Timberlake</h5>
              <hr class="mt-3 mb-3" />
              <span class="font_size font_size--small color_auxiliary font_weight--regular"><strong>Apr 29, 2019 at 07:30 PM</strong></span><br />
              <span class="font_size font_size--small color_auxiliary font_weight--regular">The Pavilion at Toyota<br/>Music Factory</span>
            </div>
          </a>
        </div>

        <div class="col col-12 col-md-4 mb-0 pb-0">
          <a href="#" class="card card--portrait_medium">
            <div class="card--portrait_medium__image_content card--portrait_medium__image_content--large">
              <div class="card--portrait_medium__image_content__image" style="background-image:url(https://content.harstatic.com/masterplanned/large/100_304.jpg);"></div>
            </div>
            <div class="card--portrait_medium__content text-left">
              <h5 tabindex="0">Wildwood at Northpointe</h5>
              <hr class="mt-3 mb-3" />
              <span class="font_size font_size--small color_auxiliary font_weight--regular">Located just of SH 249 in Tomball, Wildwood at North Pointe offers residents a prime...</span>
            </div>
          </a>
        </div>
      </div>

      <hr />

      <div class="row">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 tabindex="0">Portrait medium (Variation 5)</h4>
        </div>
      </div>

      <div class="row card_portrait_medium_container">
        <div class="col col-12 col-md-4 mb-0 pb-0">
          <a href="#" class="card card--portrait_medium">
            <div class="card--portrait_medium__image_content card--portrait_medium__image_content--small">
              <div class="card--portrait_medium__image_content__image" style="background-image:url(https://media.istockphoto.com/photos/white-plow-displaying-a-sale-spending-sign-picture-id172249691?s=2048x2048);"></div>
            </div>
            <div class="card--portrait_medium__content text-left">
              <h5 class="mb-3">Home prices are so high, pending sales have dropped for 7 months</h5>

              <div class="mb-3">
                <span class="font_size font_size--small color_auxiliary font_weight--regular">The National Association of Realtors blames years of inadequate housing supply and consistent...</span>
                <span class="font_size font_size--small color_har_blue font_weight--bold">Read more</span><br />
              </div>

              <div class="color_auxiliary_light">
                <span class="mr-3">G.M Filisk</span>
                <span>Dec 30, 2016</span>
              </div>
            </div>
          </a>
        </div>
      </div>
      
      <hr />

      <div class="row">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 tabindex="0">Portrait School Card</h4>
        </div>
      </div>

      <div class="row card_portrait_medium_container">
        <div class="col col-12 col-md-4 mb-0 pb-0">
        
          <a href="#" class="card card--portrait_school">
            <div class="card--portrait_school__label">Elementary</div>
            <div class="card--portrait_school__content">
            	<h3 tabindex="0">Nueces Canyon Elementary School</h3>
            	<div class="pb-3">
            	<img alt="" class="pb-1" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg" style="width:16px;"><img alt="" class="pb-1" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg" style="width:16px;"><img alt="" class="pb-1" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg" style="width:16px;"><img alt="" class="pb-1" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg" style="width:16px;"><img alt="" class="pb-1" src="https://content.harstatic.com/media/icons/stars_16by16_gray.svg" style="width:16px;">
				</div>
				<div class="label label--grade label--grade_d">D</div><span class="">Below Average</span>
				<div class="pt-3">
					<img src="https://content.harstatic.com/media/icons/school-grade-medal.svg">
				</div>
			</div>            
          </a>
          
        </div>
      </div>
      `,
    ];


    this.codeSnippets = [

`
<!-- Landscape-oriented card small -->
<div class="card card--landscape_small">
	<a href="#">Drive Time</a>
</div>

<!-- Landscape-oriented card small with icon -->
<div class="card card--landscape_small card--landscape_small--with_icon card--landscape_small--with_icon--facebook">
	<a href="#">Share on Facebook</a>
</div>

<!-- Agent Card -->
<div class="card card--agent">
    <a href="#" class="card--agent__image" style="background-image: url(https://pics.harstatic.com/agent/716096.jpg?ts=2019-01-18T17:12:001099);"></a>            
    <div class="card--agent__content">
      <a class="card--agent__content_name" href="#">Leslie Avila</a>
      <div class="card--agent__content_stars">
			<img alt="" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg"><img alt="" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg"><img alt="" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg"><img alt="" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg"><img alt="" src="https://content.harstatic.com/media/icons/stars_16by16_gray.svg">
	   </div>
	   <div class="card--agent__content_desc"><img alt="" src="https://content.harstatic.com/resource_2019/imgs/icons/platenium_p.svg"> Platinum Agent</div>
    </div>
</div>


<!-- Agent Card with Designated Badge -->
<div class="card card--agent">
	<div class="card--agent__badge">Designated REALTOR®</div>
	<a href="#" class="card--agent__image" style="background-image: url(https://pics.harstatic.com/agent/716096.jpg?ts=2019-01-18T17:12:001099);"></a>            
	<div class="card--agent__content">
		  <a class="card--agent__content_name" href="#">Leslie Avila</a>
		  <div class="card--agent__content_stars">
				<img alt="" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg"><img alt="" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg"><img alt="" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg"><img alt="" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg"><img alt="" src="https://content.harstatic.com/media/icons/stars_16by16_gray.svg">
	   </div>
	   <div class="card--agent__content_desc"><img alt="" src="https://content.harstatic.com/resource_2019/imgs/icons/platenium_p.svg"> Platinum Agent</div>
	</div>
</div>

<!-- Landscape-oriented card medium -->
<a href="#" class="card card--landscape_medium">
  <div class="card--landscape_medium__image_content">
    <div class="card--landscape_medium__image_content__image" style="background-image: url(https://content.harstatic.com/resource_2019/imgs/temprary/badges.jpg);"></div>
  </div>
  <div class="card--landscape_medium__content">
    <h5 tabindex="0">Open House</h5>
    <div class="card--landscape_medium__text">Pay a visit to several properties open for you</div>
  </div>
</a>

<!-- Landscape-oriented card large -->
<div class="card card--landscape_large">
  <div class="card--landscape_large__image_content">
    <div class="card--landscape_large__image_content__image" style="background-image: url(https://content.harstatic.com/resource_2019/imgs/temprary/badges.jpg);">
      <a tabindex="-1" href="#" title="Home prices are so high, pending sales have dropped for 7 months in a row"></a>
    </div>
  </div>
  <div class="card--landscape_large__content">
    <h5 tabindex="0"><a tabindex="0" href="#">Home prices are so high, pending sales have dropped for 7 months in a row</a></h5>
    <div class="card--landscape_large__text pt-3">The National Association of Realtors blames years of inadequate housing supply and consistent home price growth in hot job markets. Pending home sales dropped 0.7 percent month-over-month and 2.3 percent year-over-year to 106.2. the seventh consecutive month of... <a href="#"  tabindex="-1" class="font_weight--semi_bold">Read more</a></div>
  </div>
</div>

<!-- Landscape-oriented post blog -->
<a href="#" class="text-decoration-none hover--color-slate-light color-slate-light">
<div class="card card--blog_post">
	<div class="card--blog_post__content">
	  <h5 tabindex="0">What's new in Legislation for Homeowners?</h5>
	  <div class="card--blog_post__date pt-1">Nov 04, 2019</div>
	  <div class="card--blog_post__text pt-2">This home creates a great entertaining atmosphere with Open spaces. Your new home is a Smart Home. The Thermostat and Front door are programmable and… <span class="font_weight--bold">read more</span></div>
	</div>
	<div class="card--blog_post__image_content">
	  <div class="card--blog_post__image_content__image" style="background-image: url(https://content.harstatic.com/resource_2019/imgs/temprary/badges.jpg);">
	    <div title="Home prices are so high, pending sales have dropped for 7 months in a row"></div>
	  </div>
	</div>            
</div>
</a>      
`,

`<!--
Variation 1

Notice that there is a specific container that changes gutter size
"card_portrait_medium_container"
-->
<div class="row card_portrait_medium_container">
  <div class="col col-7 col-sm-5 col-md-5 col-lg-3 mb-0 pb-0">
    <a href="#" class="card card--portrait_medium">
      <div class="card--portrait_medium__image_content">
        <div class="card--portrait_medium__image_content__image" style="background-image:url(https://media.istockphoto.com/photos/man-using-dslr-camera-picture-id1018589116?s=2048x2048);"></div>
      </div>
      <div class="card--portrait_medium__content card--portrait_medium__content--two_lines_height">
        <h5 tabindex="0">Photographer <span class="font_size font_size--small color_auxiliary font_weight--regular">(376)</span></h5>
      </div>
    </a>
  </div>
</div>

<!--
Variation 2

Notice that there is a specific container that changes gutter size
"card_portrait_medium_container"
-->
<div class="row card_portrait_medium_container">
  <div class="col col-7 col-sm-5 col-md-5 col-lg-3 mb-0 pb-0">
    <a href="#" class="card card--portrait_medium">
      <div class="card--portrait_medium__image_content">
        <div class="card--portrait_medium__image_content__image" style="background-image:url(https://content.harstatic.com/resource_2019/imgs/temprary/city_badge2.jpg);"></div>
      </div>
      <div class="card--portrait_medium__content">
        <h5 class="mb-2">Houston</h5>
        <div class="card--portrait_medium__text">
          <span class="color_carbon font_weight--bold">5,803</span> Homes for Sale<br />
          <span class="color_carbon font_weight--bold">$506K</span> Avg. price
        </div>
      </div>
    </a>
  </div>
</div>

<!-- Variation 3 -->
<div class="row card_portrait_medium_container">
  <div class="col col-12 col-md-3 mb-0 pb-0">
    <a href="#" class="card card--portrait_medium">
      <div class="card--portrait_medium__image_content card--portrait_medium__image_content--large">
        <div class="card--portrait_medium__image_content__image" style="background-image:url(http://d1marr3m5x4iac.cloudfront.net/images/block250/I0-001/017/640/416-4.jpeg_/monster-jam-16.jpeg);"></div>
      </div>
      <div class="card--portrait_medium__content text-left">
        <h5 tabindex="0">NRG Stadium</h5>
        <span class="font_size font_size--small color_auxiliary font_weight--regular">January 26, 2019 at 07:00 PM</span>
      </div>
    </a>
  </div>
</div>

<!-- Variation 4 -->
<div class="row card_portrait_medium_container">
  <div class="col col-12 col-md-3 mb-0 pb-0">
    <a href="#" class="card card--portrait_medium">
      <div class="card--portrait_medium__image_content card--portrait_medium__image_content--large">
        <div class="card--portrait_medium__image_content__image" style="background-image:url(https://www.billboard.com/files/styles/article_main_image/public/media/justin-timberlake-eurovision-performance-2016-billboard-1548.jpg);"></div>
      </div>
      <div class="card--portrait_medium__content text-left">
        <h5 tabindex="0">Justin Timberlake</h5>
        <hr class="mt-3 mb-3" />
        <span class="font_size font_size--small color_auxiliary font_weight--regular"><strong>Apr 29, 2019 at 07:30 PM</strong></span><br />
        <span class="font_size font_size--small color_auxiliary font_weight--regular">The Pavilion at Toyota<br/>Music Factory</span>
      </div>
    </a>
  </div>

  <div class="col col-12 col-md-4 mb-0 pb-0">
    <a href="#" class="card card--portrait_medium">
      <div class="card--portrait_medium__image_content card--portrait_medium__image_content--large">
        <div class="card--portrait_medium__image_content__image" style="background-image:url(https://content.harstatic.com/masterplanned/large/100_304.jpg);"></div>
      </div>
      <div class="card--portrait_medium__content text-left">
        <h5 tabindex="0">Wildwood at Northpointe</h5>
        <hr class="mt-3 mb-3" />
        <span class="font_size font_size--small color_auxiliary font_weight--regular">Located just of SH 249 in Tomball, Wildwood at North Pointe offers residents a prime...</span>
      </div>
    </a>
  </div>
</div>

<!-- Variation 5 -->
<div class="row card_portrait_medium_container">
  <div class="col col-12 col-md-4 mb-0 pb-0">
    <a href="#" class="card card--portrait_medium">
      <div class="card--portrait_medium__image_content card--portrait_medium__image_content--small">
        <div class="card--portrait_medium__image_content__image" style="background-image:url(https://media.istockphoto.com/photos/white-plow-displaying-a-sale-spending-sign-picture-id172249691?s=2048x2048);"></div>
      </div>
      <div class="card--portrait_medium__content text-left">
        <h5 class="mb-3">Home prices are so high, pending sales have dropped for 7 months</h5>

        <div class="mb-3">
          <span class="font_size font_size--small color_auxiliary font_weight--regular">The National Association of Realtors blames years of inadequate housing supply and consistent...</span>
          <span class="font_size font_size--small color_har_blue font_weight--bold">Read more</span><br />
        </div>

        <div class="color_auxiliary_light">
          <span class="mr-3">G.M Filisk</span>
          <span>Dec 30, 2016</span>
        </div>
      </div>
    </a>
  </div>`,
    ];

  }

  render(){
    return (
      <TemplateDefault
        pageTitle="Cards (Others)"
        activeParent="components"
        activeChild="cards">

        <TemplateComponentBlock blockTitle="Landscape-Oriented Cards" elements={this.elements[0]} codeSnippets={this.codeSnippets[0]} />
        <TemplateComponentBlock blockTitle="Portrait-Oriented Cards" elements={this.elements[1]} codeSnippets={this.codeSnippets[1]} />

      </TemplateDefault>
    )
  }

}
