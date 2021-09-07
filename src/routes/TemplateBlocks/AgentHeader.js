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

      </TemplateExpanded>
    )
  }

}
