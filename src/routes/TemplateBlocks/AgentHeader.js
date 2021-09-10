import React, {Component} from "react";
import TemplateExpanded from '../../components/TemplateExpanded';
import TemplateComponentBlock from '../../components/TemplateComponentBlock';

export default class AgentHeader extends Component {

  constructor(props) {
    super(props);

    this.elements = [
      `

      <!-- Agent Header block -->
      <section class="agentheader">
      	<div class="agentheader__photo" style="background-image:url(https://content.harstatic.com/img/member/heroimages/Agent_Website_Image_11.jpg);">
      		<div class="agentheader__photo__inner">
	      		<div class="agentheader__photo__inner_share">
					<a href="#"><img alt="Facebook" src="https://content.harstatic.com/media/icons/social/white/facebook.svg"></a>
					<a href="#"><img alt="LinkedIn" src="https://content.harstatic.com/media/icons/social/white/linkedin.svg"></a>
					<a href="#"><img alt="twitter" src="https://content.harstatic.com/media/icons/social/white/twitter.svg"></a>
					<a href="#"><span>Share</span></a>
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
        				<h1 tabindex="0">Mich Scheffer</h1>
						<span><img src="https://content.harstatic.com/media/icons/platinum.svg"></span>
					</div>
        			<div class="agentheader__agrow__ag__info_rating">
        				<div>
            				<img src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg">
							<img src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg">
							<img src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg">
							<img src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg">
							<img src="https://content.harstatic.com/media/icons/stars_16by16_gray.svg">
						</div>
						<span>4.0/5.0 (70 surveys)</span>
            	    </div>
        			<div class="row no-gutters agentheader__agrow__ag__info_text">
        				<div class="col text-truncate">Better Homes and Gardens Real Estate Gary Gardens Real Estate Gary</div>
        				<div class="col-auto">(<a class="font_weight--semi_bold" href="#">view firm</a>)</div>
        			</div>
        			<div class="row no-gutters agentheader__agrow__ag__info_text">
        				<div class="col text-truncate">Lead of A to Z Houston Real Estate Team</div>
        				<div class="col-auto">(<a class="font_weight--semi_bold" href="#">view team</a>)</div>
        			</div>
					
        		</div>
			</div><!-- /agentheader__agent -->
			
			<div class="agentheader__agrow__links">
				<button tabindex="0" class="btn btn--ordinary mb-2">Recommend this Agent</button>
				<button tabindex="0" class="btn btn--prominent ml-3 mb-2">Request callback</button>
				<div class="agentheader__agrow__links_more">
					<button tabindex="0" class="btn btn--ordinary btn--small mr-3">View phone</button>
					<button tabindex="0" class="btn btn--ordinary btn--small">Send email</button>
				</div>
			</div><!-- agentheader__links -->			
        </div><!-- agentheader__agent -->
        <div class="agentheader__certi">
        	<div class="agentheader__certi__lang">
        		<div class="agentheader__certi__title">2 Languages</div>
        		<div class="agentheader__certi__list">
        			Portuguese, Italian, <a href="#">+1</a>
        		</div>
        	</div>
        	<div class="agentheader__certi__cul">
        		<div class="agentheader__certi__title">8 Cultures</div>
        		<div class="agentheader__certi__list">
        			<img class="flag flag--small" src="https://content.harstatic.com/resources/images/find_a_pro/flags_mini/uk.jpg">
					<img class="flag flag--small" src="https://content.harstatic.com/resources/images/find_a_pro/flags_mini/kr.jpg">
					<img class="flag flag--small" src="https://content.harstatic.com/resources/images/find_a_pro/flags_mini/dk.jpg">
        			<a href="#">+5</a>
        		</div>
        	</div>
        	<div class="agentheader__certi__cert">
        		<div class="agentheader__certi__title">6 Certifications</div>
        		<div class="agentheader__certi__list">
        			<div class="certificate certificate--small">CSMS</div>
					<div class="certificate certificate--small">GRI</div>
					<div class="certificate certificate--small">SMP</div>
        			<a href="#">+3</a>
        		</div>
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
					<a href="#"><span>Share</span></a>
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
        				<h1 tabindex="0">Mich Scheffer</h1>
						<span><img src="https://content.harstatic.com/media/icons/platinum.svg"></span>
					</div>
        			<div class="agentheader__agrow__ag__info_rating">
        				<div>
            				<img src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg">
							<img src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg">
							<img src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg">
							<img src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg">
							<img src="https://content.harstatic.com/media/icons/stars_16by16_gray.svg">
						</div>
						<span>4.0/5.0 (70 surveys)</span>
            	    </div>
        			<div class="row no-gutters agentheader__agrow__ag__info_text">
        				<div class="col text-truncate">Better Homes and Gardens Real Estate Gary Gardens Real Estate Gary</div>
        				<div class="col-auto">(<a class="font_weight--semi_bold" href="#">view firm</a>)</div>
        			</div>
        			<div class="row no-gutters agentheader__agrow__ag__info_text">
        				<div class="col text-truncate">Lead of A to Z Houston Real Estate Team</div>
        				<div class="col-auto">(<a class="font_weight--semi_bold" href="#">view team</a>)</div>
        			</div>
					
        		</div>
			</div><!-- /agentheader__agent -->
			
			<div class="agentheader__agrow__links">
				<button tabindex="0" class="btn btn--ordinary mb-2">Recommend this Agent</button>
				<button tabindex="0" class="btn btn--prominent ml-3 mb-2">Request callback</button>
				<div class="agentheader__agrow__links_more">
					<button tabindex="0" class="btn btn--ordinary btn--small mr-3">View phone</button>
					<button tabindex="0" class="btn btn--ordinary btn--small">Send email</button>
				</div>
			</div><!-- agentheader__links -->			
        </div><!-- agentheader__agent -->
        <div class="agentheader__certi">
        	<div class="agentheader__certi__lang">
        		<div class="agentheader__certi__title">2 Languages</div>
        		<div class="agentheader__certi__list">
        			Portuguese, Italian, <a href="#">+1</a>
        		</div>
        	</div>
        	<div class="agentheader__certi__cul">
        		<div class="agentheader__certi__title">8 Cultures</div>
        		<div class="agentheader__certi__list">
        			<img class="flag flag--small" src="https://content.harstatic.com/resources/images/find_a_pro/flags_mini/uk.jpg">
					<img class="flag flag--small" src="https://content.harstatic.com/resources/images/find_a_pro/flags_mini/kr.jpg">
					<img class="flag flag--small" src="https://content.harstatic.com/resources/images/find_a_pro/flags_mini/dk.jpg">
        			<a href="#">+5</a>
        		</div>
        	</div>
        	<div class="agentheader__certi__cert">
        		<div class="agentheader__certi__title">6 Certifications</div>
        		<div class="agentheader__certi__list">
        			<div class="certificate certificate--small">CSMS</div>
					<div class="certificate certificate--small">GRI</div>
					<div class="certificate certificate--small">SMP</div>
        			<a href="#">+3</a>
        		</div>
        	</div>
        </div>
      </section>
      <!-- /Agent Header block -->
      
      <br><br><br><br><br>
      `,
      `
      <!-- Broker Header block -->
      <section class="brokerheader">
      	<div class="brokerheader__photo" style="background-image:url(https://content.harstatic.com/img/member/heroimages/Agent_Website_Image_11.jpg);">
      		<div class="brokerheader__photo__inner">
	      		<div class="brokerheader__photo__inner_share">
					<a href="#"><img alt="Facebook" src="https://content.harstatic.com/media/icons/social/white/facebook.svg"></a>
					<a href="#"><img alt="LinkedIn" src="https://content.harstatic.com/media/icons/social/white/linkedin.svg"></a>
					<a href="#"><img alt="twitter" src="https://content.harstatic.com/media/icons/social/white/twitter.svg"></a>
					<a href="#"><span>Share</span></a>
				</div>
			</div>
        </div>
        <div class="brokerheader__agrow">
        	<div class="brokerheader__agrow__ag">
        		<div class="brokerheader__agrow__ag__ph">
        			<a class="brokerheader__agrow__ag__ph__img" href="#">
        				<img src="https://pics.harstatic.com/office/14600.gif">
        			</a>
        		</div>
        		<div class="brokerheader__agrow__ag__info  text-truncate">
        			<div class="brokerheader__agrow__ag__info_title">
        				<h1 tabindex="0">John Daugherty Realtors</h1>
						<span><img src="https://content.harstatic.com/media/icons/platinum.svg"></span>
					</div>
        			
        			<div class="row no-gutters brokerheader__agrow__ag__info_text">
        				<div class="col-auto pr-2"><img src="https://content.harstatic.com/media/icons/location_icon_auxiliary.svg"></div>
        				<div class="col text-truncate">520 Post Oak Blvd Fl 6 – Houston, TX 77027</div>
        				<div class="col-auto"><a class="font_weight--semi_bold" href="#">Get directions</a></div>
        			</div>
        		</div>
			</div><!-- /brokerheader__broker -->
			
			<div class="brokerheader__agrow__links">
				<button tabindex="0" class="btn btn--prominent ml-3 mb-2">Send email</button>
				<div class="brokerheader__agrow__links_more">
					<button tabindex="0" class="btn btn--ordinary btn--small mr-3">View phone</button>
					<button tabindex="0" class="btn btn--ordinary btn--small">Visit website ↗</button>
				</div>
			</div><!-- brokerheader__links -->			
        </div><!-- brokerheader__broker -->
        
        <div class="brokerheader__details">
	        <div class="brokerheader__details__list">
	        	<div class="pr-3 mr-3 border-right">
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
	        
	        <div class="brokerheader__details__certi">
	        	<div class="brokerheader__details__certi__lang">
	        		<div class="brokerheader__details__certi__title">2 Languages</div>
	        		<div class="brokerheader__details__certi__list">
	        			Portuguese, Italian, <a href="#">+1</a>
	        		</div>
	        	</div>
	        	<div class="brokerheader__details__certi__cul">
	        		<div class="brokerheader__details__certi__title">8 Cultures</div>
	        		<div class="brokerheader__details__certi__list">
	        			<img class="flag flag--small" src="https://content.harstatic.com/resources/images/find_a_pro/flags_mini/uk.jpg">
						<img class="flag flag--small" src="https://content.harstatic.com/resources/images/find_a_pro/flags_mini/kr.jpg">
						<img class="flag flag--small" src="https://content.harstatic.com/resources/images/find_a_pro/flags_mini/dk.jpg">
	        			<a href="#">+5</a>
	        		</div>
	        	</div>
	        	<div class="brokerheader__details__certi__cert">
	        		<div class="brokerheader__details__certi__title">6 Certifications</div>
	        		<div class="brokerheader__details__certi__list">
	        			<div class="certificate certificate--small">CSMS</div>
						<div class="certificate certificate--small">GRI</div>
						<div class="certificate certificate--small">SMP</div>
	        			<a href="#">+3</a>
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
					<a href="#"><span>Share</span></a>
				</div>
			</div>
        </div>
        <div class="brokerheader__agrow">
        	<div class="brokerheader__agrow__ag">
        		<div class="brokerheader__agrow__ag__ph">
        			<a class="brokerheader__agrow__ag__ph__img" href="#">
        				<img src="https://pics.harstatic.com/office/14600.gif">
        			</a>
        		</div>
        		<div class="brokerheader__agrow__ag__info  text-truncate">
        			<div class="brokerheader__agrow__ag__info_title">
        				<h1 tabindex="0">John Daugherty Realtors</h1>
						<span><img src="https://content.harstatic.com/media/icons/platinum.svg"></span>
					</div>
        			
        			<div class="row no-gutters brokerheader__agrow__ag__info_text">
        				<div class="col-auto pr-2"><img src="https://content.harstatic.com/media/icons/location_icon_auxiliary.svg"></div>
        				<div class="col text-truncate">520 Post Oak Blvd Fl 6 – Houston, TX 77027</div>
        				<div class="col-auto"><a class="font_weight--semi_bold" href="#">Get directions</a></div>
        				
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
        			</div>
        		</div>
			</div><!-- /brokerheader__broker -->
			
			<div class="brokerheader__agrow__links">
				<button tabindex="0" class="btn btn--prominent ml-3 mb-2">Send email</button>
				<div class="brokerheader__agrow__links_more">
					<button tabindex="0" class="btn btn--ordinary btn--small mr-3">View phone</button>
					<button tabindex="0" class="btn btn--ordinary btn--small">Visit website ↗</button>
				</div>
			</div><!-- brokerheader__links -->			
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
        pageTitle="Agent Header"
        activeParent="template_blocks"
        activeChild="agent_header">

        <TemplateComponentBlock hasContainer={false} blockTitle="Agent Header" elements={this.elements[0]} codeSnippets={this.codeSnippets[0]} />
        <TemplateComponentBlock hasContainer={false} blockTitle="Agent Header smaller" elements={this.elements[1]} codeSnippets={this.codeSnippets[1]} />
        <TemplateComponentBlock hasContainer={false} blockTitle="Broker Header" elements={this.elements[2]} codeSnippets={this.codeSnippets[2]} />
        <TemplateComponentBlock hasContainer={false} blockTitle="Broker Header" elements={this.elements[3]} codeSnippets={this.codeSnippets[3]} />

      </TemplateExpanded>
    )
  }

}
