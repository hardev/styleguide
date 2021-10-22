import React, {Component} from "react";
import TemplateExpanded from '../../components/TemplateExpanded';
import TemplateComponentBlock from '../../components/TemplateComponentBlock';

export default class TeamHeader extends Component {

  constructor(props) {
    super(props);

    this.elements = [      
      `
      <!-- Broker Header block -->
      <section class="brokerheader brokerheader__team brokerheader__team__nobackground">
        <div class="brokerheader__agrow">
        	<div class="brokerheader__agrow__ag">
        		<div class="brokerheader__agrow__ag__ph">
        			<a class="brokerheader__agrow__ag__ph__img" href="#">
        				<img src="https://content.harstatic.com/media/icons/broker_building.svg">
        				<!-- if no image for agent company <img src="https://content.harstatic.com/media/icons/broker_building.svg"> -->
        			</a>
        		</div>
        	</div>
        	<div class="brokerheader__agrow__inner">
				<div class="brokerheader__photo__inner_share">
					<a href="#"><img alt="Facebook" src="https://content.harstatic.com/media/icons/facebook_auxiliary.svg"></a>
					<a href="#"><img alt="LinkedIn" src="https://content.harstatic.com/media/icons/linkedin_auxiliary.svg"></a>
					<a href="#"><img alt="twitter" src="https://content.harstatic.com/media/icons/twitter_auxiliary.svg"></a>
					<a class="pl-2" href="#"><span>Share</span></a>
				</div>
				<div class="brokerheader__agrow__inner__cols">
	        		<div class="brokerheader__agrow__ag__info  text-truncate">
	        			<div class="brokerheader__agrow__ag__info_title">
		        			<div class="label label--typeahead label--typeahead_team mb-2">Team</div>
	        				<h1 tabindex="0" class="text-truncate d-block">Tailored Real Estate Group</h1>
						</div>
	        			
	        			<div class="row no-gutters brokerheader__agrow__ag__info_text d-none d-md-inline-flex">
	        				<div class="col text-truncate">Compass RE Texas, LLC</div>
	        				<div class="col-auto">(<a class="font_weight--semi_bold" href="#">View Firm</a>)</div>
	        			</div>
	        			
	        			<div class="row no-gutters brokerheader__agrow__ag__info_textres d-flex d-md-none">
	        				<div class="col text-truncate">Compass RE Texas, LLC</div>
	        				<div class="col-auto">(<a class="font_weight--semi_bold" href="#">View Firm</a>)</div>
	        			</div>
	        		</div>
	        		
	        		<div class="brokerheader__agrow__links d-md-block d-none">
						<button tabindex="0" class="btn btn--prominent ml-lg-3 mb-2">Send email</button>
						<div class="brokerheader__agrow__links_more">
							<button tabindex="0" class="btn btn--ordinary btn--small mr-3">View phone</button>
							<button tabindex="0" class="btn btn--ordinary btn--small">Visit website ↗</button>
						</div>
					</div><!-- brokerheader__links -->
	        	</div>
			</div><!-- /brokerheader__broker -->						
        </div><!-- brokerheader__broker -->
        
        <div class="team_details_row">
	        <div class="brokerheader__details">
		        <div class="brokerheader__details__list">
		        	<div class="pr-md-3 mr-md-3 border-md-right">
			        	<a href="#" tabindex="-1" class="agent_signature--mini" title="View Amy Nabors 's profile">
		      				<div class="agent_signature--mini__photo" style="background-image:url('https://pics.harstatic.com/agent/593161.jpg?ts=2021-03-04T16:45:004981');"></div>
			  				<div class="agent_signature--mini__name font_weight--bold text-truncate">Laura Mayer</div>
			  			</a>
			  		</div>
			  		
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
					<button tabindex="0" class="btn btn--prominent btn--medium w-100 mb-2">Send email</button>
					<div class="row no-gutters">
						<div class="col-6 pb-2 pr-1">
							<button tabindex="0" class="btn btn--ordinary mr-3 w-100">View phone</button>
						</div>
						<div class="col-6 pb-2 pl-1">
							<button tabindex="0" class="btn btn--ordinary w-100">Visit website ↗</button>
						</div>
					</div>
				</div><!-- agentheader__agrow__links_resp -->
		        
		        <div class="brokerheader__details__certi">
		        	<div class="brokerheader__details__certi__lang">
		        		<div class="brokerheader__details__certi__title">2 Languages</div>
		        		<div class="brokerheader__details__certi__list">
		        			<a href="#"><a href="#"><a href="#"><a href="#"><a href="#"><a href="#">Italian</a></a></a></a></a></a>, <a class="agentheader__certi__list__link" href="#">+1</a>
		        		</div>
		        	</div>
		        	<div class="brokerheader__details__certi__cert">
		        		<div class="brokerheader__details__certi__title">6 Certifications</div>
		        		<div class="brokerheader__details__certi__list">
		        			<a href="#" class="certificate certificate--small">GRI</a>
							<a href="#" class="certificate certificate--small">SMP</a>
		        			<a class="agentheader__certi__list__link" href="#">+3</a>
		        		</div>
		        	</div>
		        	
		        </div>
		    </div>
		    
		    <div class="team_details_row__descrip">
				Tailored to your life, Tailored Real Estate Group represents the Lands, <span>Lake and Loop of Houston your lifestyle and goals. Lead by Broker Associate, Kat Robinson, Samantha Plomer, Kelsey Samuel and Mary Ann Bernard, this group works diligently with goals of dividing and conquering for your exceptional</span>… <a href="#">read more ↓</a>
		    </div>
		<div>
      </section>
      <!-- /broker Header block -->
      
      <br><br><br><br><br>
      `,
      `
      <!-- Broker Header block -->
      <section class="brokerheader teamheader__small_nobg">
      	<div class="brokerheader__agrow">
        	<div class="brokerheader__agrow__ag">
        		<div class="brokerheader__agrow__ag__ph">
        			<a class="brokerheader__agrow__ag__ph__img" href="#">
        				<img src="https://content.harstatic.com/media/icons/broker_building.svg">
        				<!-- if no image for agent company <img src="https://content.harstatic.com/media/icons/broker_building.svg"> -->
        			</a>
        		</div>
        		<div class="brokerheader__agrow__ag__info  text-truncate">
        			<div class="brokerheader__agrow__ag__info_title">
        				<div class="label label--typeahead label--typeahead_team mb-2">Team</div>
        				<h1 class="d-block" tabindex="0">Tailored Real Estate Group</h1>
					</div>
        			
        			<div class="row no-gutters brokerheader__agrow__ag__info_text d-none d-md-inline-flex">
        				<div class="col text-truncate">Compass RE Texas, LLC</div>
        				<div class="col-auto">(<a class="font_weight--semi_bold" href="#">View Firm</a>)</div>
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
						
						<div class="agentheader__agrow__linksresp d-md-none d-block">
							<button tabindex="0" class="btn btn--prominent btn--medium w-100 mb-2">Send email</button>
							<div class="row no-gutters">
								<div class="col-6 pb-2 pr-1">
									<button tabindex="0" class="btn btn--ordinary mr-3 w-100">View phone</button>
								</div>
								<div class="col-6 pb-2 pl-1">
									<button tabindex="0" class="btn btn--ordinary w-100">Visit website ↗</button>
								</div>
							</div>
						</div><!-- agentheader__agrow__links_resp -->
				        
        		</div>
			</div><!-- /brokerheader__broker -->
			
			<div class="brokerheader__agrow__links d-md-block d-none">
				<div class="brokerheader__agrow__links_share">
					<a href="#"><img alt="Facebook" src="https://content.harstatic.com/media/icons/facebook_auxiliary.svg"></a>
					<a href="#"><img alt="LinkedIn" src="https://content.harstatic.com/media/icons/linkedin_auxiliary.svg"></a>
					<a href="#"><img alt="twitter" src="https://content.harstatic.com/media/icons/twitter_auxiliary.svg"></a>
					<a class="pl-2" href="#"><span>Share</span></a>
				</div>
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
        pageTitle="Team Header"
        activeParent="template_blocks"
        activeChild="team_header">

        <TemplateComponentBlock hasContainer={false} blockTitle="Team Header" elements={this.elements[0]} codeSnippets={this.codeSnippets[0]} />
        <TemplateComponentBlock hasContainer={false} blockTitle="Team Header smaller" elements={this.elements[1]} codeSnippets={this.codeSnippets[1]} />
        

      </TemplateExpanded>
    )
  }

}
