import React, {Component} from "react";
import TemplateDefault from '../../components/TemplateDefault';
import TemplateComponentBlock from '../../components/TemplateComponentBlock';

export default class CardsV2 extends Component {

  constructor(props) {
    super(props);

    this.elements = [
      `<div class="row">
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
          	<div class="cardv2--rating__icons">
          		<div onclick="location.href='#'; return false;" class="cardv2--rating__icons_icon" data-toggle="tooltip" data-placement="top" title="Report issue"><img style="width:18px;" src="https://content.harstatic.com/media/icons/icon-info_auxiliary.svg"></div>
          		<div onclick="location.href='#'; return false;" class="cardv2--rating__icons_icon" data-toggle="tooltip" data-placement="top" title="Print"><img style="width:18px;" src="https://content.harstatic.com/media/icons/icon-print_auxiliary.svg"></div>
          		<div onclick="location.href='#'; return false;" class="cardv2--rating__icons_icon" data-toggle="tooltip" data-placement="top" title="Share"><img style="width:20px;" src="https://content.harstatic.com/media/icons/share_gray.svg"></div>
          	</div>
            <div class="cardv2--rating__prop">
            	<div class="cardv2--rating__prop_img" style="background-image: url(https://photos.harstatic.com/153440342/hr/img-1.jpeg?ts=2018-09-13T14:59:06.353);"></div>
            	<div class="cardv2--rating__prop_text">
            		<h4 tabindex="0">Southlake Drive</h4>
            		<div class="cardv2--rating__prop_text_desc">Represented the Buyer <span>• Survey on Nov 12, 2018<span></div>
            	</div>
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

      </TemplateDefault>
    )
  }

}
