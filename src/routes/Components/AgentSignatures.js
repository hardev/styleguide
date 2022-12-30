import React, {Component} from "react";
import TemplateDefault from '../../components/TemplateDefault';
import TemplateComponentBlock from '../../components/TemplateComponentBlock';

export default class AgentSignatures extends Component {

  constructor(props) {
    super(props);

    this.elements = [
      `
      <div class="row justify-content-center pt-5">
		<div class="col col-sm-6 col-12">
		 	<h2 class="mb-0 h2--simple">Small simple</h2>
		 	<div class="font_size_small_extra text-left color_cement_dark mb-5">e.g., landscape listing card</div>
		 	
	        <a class="agent_signaturev2" href="https://www.har.com/shadrick-bogany/agent_BOGANYS">
	            <div class="agent_signaturev2__photo" title="View Amy Nabors's profile" style="background-image:url('https://pics.harstatic.com/agent/593161.jpg?ts=2021-03-04T16:45:004981');"></div>
	            <div class="agent_signaturev2__info">
	              <div class="agent_signaturev2__info__agent_name" title="View Amy Nabors's profile" aria-label="View Amy Nabors's profile">
	                Amy Nabors
	              </div>
	              <div class="agent_signaturev2__info__broker_name" title="View Better Homes And Gardens Real's page" aria-label="View Better Homes And Gardens Real's page">
	                Better Homes And Gardens Real
	              </div>
	            </div>
	        </a>	
		</div>
	  </div>
	  
	  <hr>
	  
	   
	    
	  <div class="row justify-content-center pt-5">
		<div class="col col-sm-6 col-12">
		 	<h2 class="mb-0 h2--simple">Small in tight place</h2>
		 	<div class="font_size_small_extra text-left color_cement_dark mb-5">e.g., portrait listing card</div>
		 	
		 	<div style="max-width:177px;">
		 	
	        <a class="agent_signaturev2" href="https://www.har.com/shadrick-bogany/agent_BOGANYS">
	            <div class="agent_signaturev2__photo" title="View Amy Nabors's profile" style="background-image:url('https://pics.harstatic.com/agent/593161.jpg?ts=2021-03-04T16:45:004981');"></div>
	            <div class="agent_signaturev2__info">
	              <div class="agent_signaturev2__info__agent_name" title="View Amy Nabors's profile" aria-label="View Amy Nabors's profile">
	                Amy Nabors
	              </div>
	              <div class="agent_signaturev2__info__broker_name" title="View Better Homes And Gardens Real's page" aria-label="View Better Homes And Gardens Real's page">
	                Better Homes And Gardens Real Better Homes And Gardens Real
	              </div>
	            </div>
	        </a>	
	        
	        </div>
		</div>
		
	  </div>
	  
	  <hr>
	  
	  <div class="row justify-content-center pt-5">
		<div class="col col-sm-6 col-12">
		 	<h2 class="mb-0 h2--simple">Medium full</h2>
		 	<div class="font_size_small_extra text-left color_cement_dark mb-5">e.g., listing details</div>
		 	
	        <a class="agent_signaturev2 agent_signaturev2__medium" href="https://www.har.com/shadrick-bogany/agent_BOGANYS">
	            <div class="agent_signaturev2__medium__photo" title="View Amy Nabors's profile" style="background-image:url('https://pics.harstatic.com/agent/593161.jpg?ts=2021-03-04T16:45:004981');"></div>
	            <div class="agent_signaturev2__info">
	              <div class="agent_signaturev2__info__agent_name" title="View Amy Nabors's profile" aria-label="View Amy Nabors's profile">
	                Amy Nabors
	              </div>
	              <div class="agent_signaturev2__info__stars">
	            		<img alt="" src="https://content.harstatic.com/media/icons/stars/star_full.svg"><img alt="" src="https://content.harstatic.com/media/icons/stars/star_half_and_quarter.svg"><img alt="" src="https://content.harstatic.com/media/icons/stars/star_half.svg"><img alt="" src="https://content.harstatic.com/media/icons/stars/star_quarter.svg"><img alt="" src="https://content.harstatic.com/media/icons/stars/star_gray.svg">
	            		<span>4.98 / 5 <span class="lighter">(24 surveys)</span></span>
					</div>
	              <div class="agent_signaturev2__info__broker_name" title="View Better Homes And Gardens Real's page" aria-label="View Better Homes And Gardens Real's page">
	                Greenwood King Properties
	              </div>
	            </div>
	        </a>	
		</div>
	  </div>
	  
	  <hr>
	  
	  <div class="row justify-content-center pt-5">
		<div class="col col-sm-6 col-12">
		 	<h2 class="mb-0 h2--simple">Medium w/ Platinum</h2>
		 	<div class="font_size_small_extra text-left color_cement_dark mb-5">e.g., listing details</div>
		 	
	        <a class="agent_signaturev2 agent_signaturev2__medium" href="https://www.har.com/shadrick-bogany/agent_BOGANYS">
	            <div class="agent_signaturev2__medium__photo" title="View Amy Nabors's profile" style="background-image:url('https://pics.harstatic.com/agent/593161.jpg?ts=2021-03-04T16:45:004981');"></div>
	            <div class="agent_signaturev2__info">
	              <div class="agent_signaturev2__info__agent_name" title="View Amy Nabors's profile" aria-label="View Amy Nabors's profile">
	                Amy Nabors <img alt="" class="ml-1" style="width:51px;" src="https://content.harstatic.com/media/icons/label-platinum.svg">
	              </div>
	              <div class="agent_signaturev2__info__stars">
	            		<img alt="" src="https://content.harstatic.com/media/icons/stars/star_full.svg"><img alt="" src="https://content.harstatic.com/media/icons/stars/star_half_and_quarter.svg"><img alt="" src="https://content.harstatic.com/media/icons/stars/star_half.svg"><img alt="" src="https://content.harstatic.com/media/icons/stars/star_quarter.svg"><img alt="" src="https://content.harstatic.com/media/icons/stars/star_gray.svg">
	            		<span>4.98 / 5 <span class="lighter">(24 surveys)</span></span>
					</div>
	              <div class="agent_signaturev2__info__broker_name" title="View Better Homes And Gardens Real's page" aria-label="View Better Homes And Gardens Real's page">
	                Greenwood King Properties
	              </div>
	            </div>
	        </a>	
		</div>
	  </div>
	  
	  <hr>
	  
	  <div class="row justify-content-center pt-5">
		<div class="col col-sm-6 col-12">
		 	<h2 class="mb-0 h2--simple">Medium in tight place</h2>
		 	<div class="font_size_small_extra text-left color_cement_dark mb-5">e.g., landscape listing card</div>
		 	
	        <a class="agent_signaturev2 agent_signaturev2__medium" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" style="max-width:183px;">
	            <div class="agent_signaturev2__medium__photo" title="View Amy Nabors's profile" style="background-image:url('https://pics.harstatic.com/agent/593161.jpg?ts=2021-03-04T16:45:004981');"></div>
	            <div class="agent_signaturev2__info">
	              <div class="agent_signaturev2__info__agent_name" title="View Amy Nabors's profile" aria-label="View Amy Nabors's profile">
	                Amy Nabors
	              </div>
	              <div class="agent_signaturev2__info__stars">
	            		<img alt="" src="https://content.harstatic.com/media/icons/stars/star_full.svg"><img alt="" src="https://content.harstatic.com/media/icons/stars/star_half_and_quarter.svg"><img alt="" src="https://content.harstatic.com/media/icons/stars/star_half.svg"><img alt="" src="https://content.harstatic.com/media/icons/stars/star_quarter.svg"><img alt="" src="https://content.harstatic.com/media/icons/stars/star_gray.svg">
	            		<span>4.98 / 5</span>
					</div>
	              <div class="agent_signaturev2__info__broker_name" title="View Better Homes And Gardens Real's page" aria-label="View Better Homes And Gardens Real's page">
	                Greenwood King Properties
	              </div>
	            </div>
	        </a>	
	        
	       
		</div>
	  </div>
	  
	  
	  <hr>
	  
	  <div class="row justify-content-center pt-5">
		<div class="col col-sm-6 col-12">
		 	<h2 class="mb-0 h2--simple">Large full</h2>
		 	<div class="font_size_small_extra text-left color_cement_dark mb-5">e.g., Find a Pro page</div>
		 	
	        <a class="agent_signaturev2 agent_signaturev2__large" href="https://www.har.com/shadrick-bogany/agent_BOGANYS">
	            <div class="agent_signaturev2__large__photo" title="View Amy Nabors's profile" style="background-image:url('https://pics.harstatic.com/agent/593161.jpg?ts=2021-03-04T16:45:004981');"></div>
	            <div class="agent_signaturev2__info">
	              <img alt="" style="width:51px;" src="https://content.harstatic.com/media/icons/label-platinum.svg">
	              <div class="agent_signaturev2__info__agent_name" title="View Amy Nabors's profile" aria-label="View Amy Nabors's profile">
	                Amy Nabors
	              </div>
	              <div class="agent_signaturev2__info__stars">
	            		<img alt="" src="https://content.harstatic.com/media/icons/stars/star_full.svg"><img alt="" src="https://content.harstatic.com/media/icons/stars/star_half_and_quarter.svg"><img alt="" src="https://content.harstatic.com/media/icons/stars/star_half.svg"><img alt="" src="https://content.harstatic.com/media/icons/stars/star_quarter.svg"><img alt="" src="https://content.harstatic.com/media/icons/stars/star_gray.svg">
	            		<span>4.98 / 5 <span class="lighter">(24 surveys)</span></span>
					</div>
	              <div class="agent_signaturev2__info__broker_name" title="View Better Homes And Gardens Real's page" aria-label="View Better Homes And Gardens Real's page">
	                Greenwood King Properties
	              </div>
	            </div>
	        </a>	
		</div>
	  </div>
	  
	  <hr>
	  
	  <div class="row justify-content-center pt-5">
		<div class="col col-sm-7 col-12">
		 	<h2 class="mb-0 h2--simple">Large full (card shape)</h2>
		 	<div class="font_size_small_extra text-left color_cement_dark mb-5">e.g., Find agents nearby</div>
		 	
	        <a class="agent_signaturev2 agent_signaturev2__large agent_signaturev2__card" href="https://www.har.com/shadrick-bogany/agent_BOGANYS">
	            <div class="agent_signaturev2__large__photo" title="View Amy Nabors's profile" style="background-image:url('https://pics.harstatic.com/agent/593161.jpg?ts=2021-03-04T16:45:004981');"></div>
	            <div class="agent_signaturev2__info">
	              <img alt="" style="width:51px;" src="https://content.harstatic.com/media/icons/label-platinum.svg">
	              <div class="agent_signaturev2__info__agent_name" title="View Amy Nabors's profile" aria-label="View Amy Nabors's profile">
	                Amy Nabors
	              </div>
	              <div class="agent_signaturev2__info__stars">
	            		<img alt="" src="https://content.harstatic.com/media/icons/stars/star_full.svg"><img alt="" src="https://content.harstatic.com/media/icons/stars/star_half_and_quarter.svg"><img alt="" src="https://content.harstatic.com/media/icons/stars/star_half.svg"><img alt="" src="https://content.harstatic.com/media/icons/stars/star_quarter.svg"><img alt="" src="https://content.harstatic.com/media/icons/stars/star_gray.svg">
	            		<span>4.98 / 5 <span class="lighter">(24 surveys)</span></span>
					</div>
	              <div class="agent_signaturev2__info__broker_name" title="View Better Homes And Gardens Real's page" aria-label="View Better Homes And Gardens Real's page">
	                Greenwood King Properties
	              </div>
	            </div>
	        </a>	
		</div>
	  </div>

	  <hr>
	  
	  <div class="row justify-content-center pt-5">
		<div class="col col-sm-7 col-12">
		 	<h2 class="mb-0 h2--simple">Large full (card shape)</h2>
		 	<div class="font_size_small_extra text-left color_cement_dark mb-5">e.g., Find agents nearby</div>
		 	
	        <a class="agent_signature_button" href="#">
	            <div class="agent_signature_button__photo" title="View Amy Nabors's profile" style="background-image:url('https://pics.harstatic.com/agent/593161.jpg?ts=2021-03-04T16:45:004981');"></div>
	            <div class="agent_signature_button__info">
	              <div class="agent_signature_button_name" title="View Amy Nabors's profile" aria-label="View Amy Nabors's profile">
	                Logged as Shadrick Bogany
	              </div>
	              <div class="agent_signature_button_link">
	                I’m not Shadrick. Logout ->
	              </div>
	            </div>
	        </a>	
		</div>
	  </div>
	  
	  
	  <hr>
	  
	  <div class="row justify-content-center pt-5">
		<div class="col col-sm-6 col-12">
		 	<h2 class="mb-0 h2--simple">MediumLarge simple</h2>
		 	<div class="font_size_small_extra text-left color_cement_dark mb-5">e.g., Advisory Group Leaders card</div>
		 	
	        <a class="agent_signaturev2 agent_signaturev2__mediumlarge" href="https://www.har.com/shadrick-bogany/agent_BOGANYS">
	            <div class="agent_signaturev2__mediumlarge__photo" title="View Amy Nabors's profile" style="background-image:url('https://pics.harstatic.com/agent/593161.jpg?ts=2021-03-04T16:45:004981');"></div>
	            <div class="agent_signaturev2__mediumlarge__info">
	              <div class="agent_signaturev2__mediumlarge__info__agent_name" title="View Amy Nabors's profile" aria-label="View Amy Nabors's profile">
	                Lejonta McGowan
	              </div>
	              <div class="agent_signaturev2__mediumlarge__info__broker_name" title="View Better Homes And Gardens Real's page" aria-label="View Better Homes And Gardens Real's page">
	                Chair
	              </div>
	            </div>
	        </a>	
		</div>
	  </div>
	  
	   
	   
	   


      `,
	  `<div  style="opacity:0.4;">
      <div class="row justify-content-center">
        <div class="col col-sm-6 col-12">

          <div class="agent_signature">
            <div class="agent_signature agent_signature__photo">
              <a tabindex="-1" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Amy Nabors

's profile" style="background-image:url('https://pics.harstatic.com/agent/593161.jpg?ts=2021-03-04T16:45:004981');"></a>
            </div>
            <div class="agent_signature agent_signature__info">
              <a class="agent_signature agent_signature__info agent_signature__info__agent_name" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Amy Nabors

's profile" aria-label="View Amy Nabors

's profile">
                Amy Nabors


              </a>
              <br />
              <a class="agent_signature agent_signature__info agent_signature__info__broker_name" href="https://www.har.com/better-homes-and-gardens-real-estate-gary-greene/broker_GGPR11" title="View Better Homes And Gardens Real's page" aria-label="View Better Homes And Gardens Real's page">
                Better Homes And Gardens Real
              </a>
            </div>
          </div>

          <div class="component_content__demo__description">Basic agent signature</div>
        </div>
      </div>
        
        <hr>
        
    <div class="row justify-content-center">
      <div class="col col-sm-5 col-12">
         <a href="#" class="agent_signature agent_signature__map" href="https://www.har.com/shadrick-bogany/agent_BOGANYS"  title="View Amy Nabors's profile" aria-label="View Amy Nabors's profile">
            <div class="agent_signature agent_signature__photo">              
              	<img class="agent_signature__photo__img" src="https://pics.harstatic.com/agent/593161.jpg?ts=2021-03-04T16:45:004981">              
            </div>
            <div class="agent_signature agent_signature__info">
              <div class="agent_signature__info__agent_name">
                <img src="https://content.harstatic.com/media/icons/platenium_small.svg"> Richard Ortiz
              </div>
              <div class="agent_signature__info__ratings"><img alt="" class="pb-1" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg"><img alt="" class="pb-1" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg"><img alt="" class="pb-1" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg"><img alt="" class="pb-1" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg"><img alt="" class="pb-1" src="https://content.harstatic.com/media/icons/stars_16by16_gray.svg">
			  </div>
              <div class="agent_signature__info__broker_name">
                Better Homes And Gardens Real
              </div>
            </div>
          </a>
          <div class="component_content__demo__description">Signature for map popup</div>
        </div>
      </div>
        
        <hr>
    
    <div class="row justify-content-center">
      <div class="col col-sm-5 col-12">
         <a href="#" class="agent_signature agent_signature__map agent_signature__map__withoutphoto" href="https://www.har.com/shadrick-bogany/agent_BOGANYS"  title="View Amy Nabors's profile" aria-label="View Amy Nabors's profile">
            <div class="agent_signature agent_signature__info">
              <div class="agent_signature__info__agent_name">
                <img src="https://content.harstatic.com/media/icons/platenium_small.svg"> Richard Ortiz
              </div>
              <div class="agent_signature__info__ratings"><img alt="" class="pb-1" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg"><img alt="" class="pb-1" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg"><img alt="" class="pb-1" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg"><img alt="" class="pb-1" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg"><img alt="" class="pb-1" src="https://content.harstatic.com/media/icons/stars_16by16_gray.svg">
			  </div>
              <div class="agent_signature__info__broker_name">
                Better Homes And Gardens Real
              </div>
            </div>
          </a>
          <div class="component_content__demo__description">Signature for map popup single</div>
        </div>
      </div>
                
        <hr>
      <div class="row justify-content-center">
        <div class="col col-sm-6 col-12">
          
          <div class="agent_signature--large">
            <div class="agent_signature agent_signature--large__photo">
              <a tabindex="-1" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Amy Nabors

's profile" style="background-image:url('https://pics.harstatic.com/agent/593161.jpg?ts=2021-03-04T16:45:004981');"></a>
            </div>
            <div class="agent_signature--large__info">
              <a class="agent_signature--large__info__agent_name" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Amy Nabors

's profile" aria-label="View Amy Nabors

's profile">
                Amy Nabors


              </a>
              <br />
              <a class="agent_signature--large__info__broker_name" href="https://www.har.com/better-homes-and-gardens-real-estate-gary-greene/broker_GGPR11" title="View Better Homes And Gardens Real's page" aria-label="View Better Homes And Gardens Real's page">
                Better Homes And Gardens Real
              </a>
            </div>
          </div>

          <div class="component_content__demo__description">Large agent signature</div>
          
        </div>
       </div>
       
       <hr>
      
      <div class="row justify-content-center">
        <div class="col col-sm-6 col-12">
          
          <div class="agent_signature--large_extra">
            <div class="agent_signature agent_signature--large_extra__photo">
              <a tabindex="-1" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Amy Nabors

's profile" style="background-image:url('https://pics.harstatic.com/agent/593161.jpg?ts=2021-03-04T16:45:004981');"></a>
            </div>
            <div class="agent_signature--large_extra__info">
            	<div class="pb-2"><img alt="" class="mr-2" style="width:51px;" src="https://content.harstatic.com/media/icons/label-platinum.svg"></div>
              <a class="agent_signature--large_extra__info__agent_name" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Amy Nabors

's profile" aria-label="View Amy Nabors

's profile">
                Amy Nabors


              </a>
              <div class=" font_size--small_extra">
								<img alt="" class="pb-1" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg"><img alt="" class="pb-1" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg"><img alt="" class="pb-1" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg"><img alt="" class="pb-1" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg"><img alt="" class="pb-1" src="https://content.harstatic.com/media/icons/stars_16by16_gray.svg">															
			  </div>
              <a class="agent_signature--large_extra__info__broker_name" href="https://www.har.com/better-homes-and-gardens-real-estate-gary-greene/broker_GGPR11" title="View Better Homes And Gardens Real's page" aria-label="View Better Homes And Gardens Real's page">
                Better Homes And Gardens Real
              </a>
            </div>
          </div>

          <div class="component_content__demo__description">extra Large agent signature</div>
          
        </div>
       </div>
       
       <hr>
       
        
      <div class="row justify-content-center">
        <div class="col col-sm-6 col-12">
          
          <div class="agent_signature--square">
            <div class="agent_signature agent_signature--square__photo">
              <a tabindex="-1" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Amy Nabors

's profile" style="background-image:url('https://pics.harstatic.com/agent/593161.jpg?ts=2021-03-04T16:45:004981');"></a>
            </div>
            <div class="agent_signature--square__info">
              <a class="agent_signature--square__info__agent_name" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Amy Nabors

's profile" aria-label="View Amy Nabors

's profile">
                Amy Nabors


              </a>
              <div class="agent_signature--square__info__broker_name">
              	<a class="mr-3" href="https://www.har.com/better-homes-and-gardens-real-estate-gary-greene/broker_GGPR11" title="View Better Homes And Gardens Real's page" aria-label="View Better Homes And Gardens Real's page">
                	<img class="float-left mr-1" style="width:12px;padding-top:2px;" src="https://content.harstatic.com/media/icons/phone_slate.svg"> (713) 828-6075
				</a>
				
				<a href="https://www.har.com/better-homes-and-gardens-real-estate-gary-greene/broker_GGPR11" title="View Better Homes And Gardens Real's page" aria-label="View Better Homes And Gardens Real's page">
                	<img style="width:12px;" src="https://content.harstatic.com/media/icons/email_slate_light.svg"> Email
				</a>
			  </div>
            </div>
          </div>
          <div class="component_content__demo__description">Square agent signature</div>
          
        </div>
       </div>
       <hr>
       
        
      <div class="row justify-content-center">
        <div class="col col-sm-6 col-12">
          
          <div class="text-center">
	      		<a tabindex="-1" class="agent_signature--photoonlye" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Amy Nabors

's profile">
	      			<span style=""></span>
	      		</a>
          </div>
          <div class="component_content__demo__description">Without Photo</div>
        </div>
        <div class="col col-sm-6 col-12">
          <div class="text-center">
	      		<a tabindex="-1" class="agent_signature--photoonlye" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Amy Nabors

's profile">
	      			<span style="background-image:url('https://pics.harstatic.com/agent/593161.jpg?ts=2021-03-04T16:45:004981');"></span>
	      		</a>
          </div>
          <div class="component_content__demo__description">With Photo</div>
          
        </div>
       </div>
       
       <div class="row justify-content-center">
        <div class="col col-sm-3 col-12">
          
          <div class="text-center">
	      		<a href="#" tabindex="-1" class="agent_signature--mini" title="View Amy Nabors 's profile">
	      			<div class="agent_signature--mini__photo" style="background-image:url('https://pics.harstatic.com/agent/593161.jpg?ts=2021-03-04T16:45:004981');"></div>
	      			<div class="agent_signature--mini__name text-truncate">Laura Mayer</div>
	      		</a>
          </div>
          <div class="component_content__demo__description">Without Photo</div>
        </div>
        <div class="col col-sm-3 col-12">
          <div class="text-center">
	      		<a href="#" tabindex="-1" class="agent_signature--mini__extra" title="View Amy Nabors 's profile">
	      			<div class="agent_signature--mini__extra__photo" style="background-image:url('https://pics.harstatic.com/agent/593161.jpg?ts=2021-03-04T16:45:004981');"></div>
	      		</a>
          </div>
          <div class="component_content__demo__description">With Photo</div>
          
        </div>
       </div>
       </div>`
    ];


    this.codeSnippets = [
`
`
 ];

  }

  render(){
    return (
      <TemplateDefault
        pageTitle="Agent Signatures Facelift"
        activeParent="components"
        activeChild="agent_signatures">

		<TemplateComponentBlock blockTitle="Agent Signatures V2" elements={this.elements[0]} codeSnippets={this.codeSnippets[0]} />
        <TemplateComponentBlock blockTitle="Depreciated" elements={this.elements[1]} codeSnippets={this.codeSnippets[1]} />

      </TemplateDefault>
    )
  }

}
