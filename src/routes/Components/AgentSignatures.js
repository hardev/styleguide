import React, {Component} from "react";
import TemplateDefault from '../../components/TemplateDefault';
import TemplateComponentBlock from '../../components/TemplateComponentBlock';

export default class AgentSignatures extends Component {

  constructor(props) {
    super(props);

    this.elements = [
      `<div class="row justify-content-center">
        <div class="col col-sm-6 col-12">

          <div class="agent_signature">
            <div class="agent_signature agent_signature__photo">
              <a tabindex="-1" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Shadrick Bogany's profile" style="background-image:url('https://pics.harstatic.com/agent/312961.jpg');"></a>
            </div>
            <div class="agent_signature agent_signature__info">
              <a class="agent_signature agent_signature__info agent_signature__info__agent_name" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Shadrick Bogany's profile" aria-label="View Shadrick Bogany's profile">
                Shadrick Bogany
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
        <div class="col col-sm-6 col-12">
          
          <div class="agent_signature--large">
            <div class="agent_signature agent_signature--large__photo">
              <a tabindex="-1" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Shadrick Bogany's profile" style="background-image:url('https://pics.harstatic.com/agent/312961.jpg');"></a>
            </div>
            <div class="agent_signature--large__info">
              <a class="agent_signature--large__info__agent_name" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Shadrick Bogany's profile" aria-label="View Shadrick Bogany's profile">
                Shadrick Bogany
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
              <a tabindex="-1" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Shadrick Bogany's profile" style="background-image:url('https://pics.harstatic.com/agent/312961.jpg');"></a>
            </div>
            <div class="agent_signature--large_extra__info">
            	<div class="pb-2"><img alt="" class="mr-2" style="width:51px;" src="https://content.harstatic.com/media/icons/label-platinum.svg"></div>
              <a class="agent_signature--large_extra__info__agent_name" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Shadrick Bogany's profile" aria-label="View Shadrick Bogany's profile">
                Shadrick Bogany
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
              <a tabindex="-1" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Shadrick Bogany's profile" style="background-image:url('https://pics.harstatic.com/agent/312961.jpg');"></a>
            </div>
            <div class="agent_signature--square__info">
              <a class="agent_signature--square__info__agent_name" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Shadrick Bogany's profile" aria-label="View Shadrick Bogany's profile">
                Shadrick Bogany
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
       </div>`
    ];


    this.codeSnippets = [
`
<!-- Basic agent signature -->
<div class="agent_signature">
	<div class="agent_signature agent_signature__photo">
	  <a tabindex="-1" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Shadrick Bogany's profile" style="background-image:url('https://pics.harstatic.com/agent/312961.jpg');"></a>
	</div>
	<div class="agent_signature agent_signature__info">
	  <a class="agent_signature agent_signature__info agent_signature__info__agent_name" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Shadrick Bogany's profile" aria-label="View Shadrick Bogany's profile">
	    Shadrick Bogany
	  </a>
	  <br />
	  <a class="agent_signature agent_signature__info agent_signature__info__broker_name" href="https://www.har.com/better-homes-and-gardens-real-estate-gary-greene/broker_GGPR11" title="View Better Homes And Gardens Real's page" aria-label="View Better Homes And Gardens Real's page">
	    Better Homes And Gardens Real
	  </a>
	</div>
</div>


<!-- Large agent signature -->
<div class="agent_signature--large">
<div class="agent_signature agent_signature--large__photo">
  <a tabindex="-1" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Shadrick Bogany's profile" style="background-image:url('https://pics.harstatic.com/agent/312961.jpg');"></a>
</div>
<div class="agent_signature--large__info">
  <a class="agent_signature--large__info__agent_name" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Shadrick Bogany's profile" aria-label="View Shadrick Bogany's profile">
    Shadrick Bogany
  </a>
  <br />
  <a class="agent_signature--large__info__broker_name" href="https://www.har.com/better-homes-and-gardens-real-estate-gary-greene/broker_GGPR11" title="View Better Homes And Gardens Real's page" aria-label="View Better Homes And Gardens Real's page">
    Better Homes And Gardens Real
  </a>
</div>
</div>

<!-- extra Large agent signature -->
<div class="row justify-content-center">
<div class="col col-sm-6 col-12">
  <div class="agent_signature--large_extra">
    <div class="agent_signature agent_signature--large_extra__photo">
      <a tabindex="-1" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Shadrick Bogany's profile" style="background-image:url('https://pics.harstatic.com/agent/312961.jpg');"></a>
    </div>
    <div class="agent_signature--large_extra__info">
    	<div class="pb-2"><img alt="" class="mr-2" style="width:51px;" src="https://content.harstatic.com/media/icons/label-platinum.svg"></div>
      <a class="agent_signature--large_extra__info__agent_name" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Shadrick Bogany's profile" aria-label="View Shadrick Bogany's profile">
        Shadrick Bogany
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
       




<!-- Large agent square -->
<div class="agent_signature--square">
<div class="agent_signature agent_signature--square__photo">
  <a tabindex="-1" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Shadrick Bogany's profile" style="background-image:url('https://pics.harstatic.com/agent/312961.jpg');"></a>
</div>
<div class="agent_signature--square__info">
  <a class="agent_signature--square__info__agent_name" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Shadrick Bogany's profile" aria-label="View Shadrick Bogany's profile">
    Shadrick Bogany
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
`
    ];

  }

  render(){
    return (
      <TemplateDefault
        pageTitle="Agent Signatures"
        activeParent="components"
        activeChild="agent_signatures">

        <TemplateComponentBlock blockTitle="Sizes" elements={this.elements[0]} codeSnippets={this.codeSnippets[0]} />

      </TemplateDefault>
    )
  }

}
