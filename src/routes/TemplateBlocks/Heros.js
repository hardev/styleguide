import React, {Component} from "react";
import TemplateExpanded from '../../components/TemplateExpanded';
import TemplateComponentBlock from '../../components/TemplateComponentBlock';

export default class Heros extends Component {

  constructor(props) {
    super(props);

    this.elements = [
      `<!-- hero_landing_page -->
      <section class="hero_landing_page">
        <h1 tabindex="0" class="mb-5">Header Goes Here</h1>

        <!-- radio-buttons -->
        <div role="radiogroup" class="horizontal_scrollable_items_container mb-3">
          <div role="radio" class="custom-control custom-radio custom-radio--large custom-control-inline">
            <input type="radio" id="example_radio_button_large_1" name="example_radio_button_large" class="custom-control-input" checked>
            <label class="custom-control-label" for="example_radio_button_large_1">Option 1</label>
          </div>
          <div role="radio" class="custom-control custom-radio custom-radio--large custom-control-inline">
            <input type="radio" id="example_radio_button_large_2" name="example_radio_button_large" class="custom-control-input">
            <label class="custom-control-label" for="example_radio_button_large_2">Option 2</label>
          </div>
          <div role="radio" class="custom-control custom-radio custom-radio--large custom-control-inline">
            <input type="radio" id="example_radio_button_large_3" name="example_radio_button_large" class="custom-control-input">
            <label class="custom-control-label" for="example_radio_button_large_3">Option 3</label>
          </div>
        </div>
        <!-- /radio-buttons -->

        <!-- search_input_medium -->
        <div class="input-group input-group--search_input_medium">
          <input type="text" class="form-control" placeholder="Search for something" aria-label="Search for something">
          <div class="input-group-append">
            <button class="btn btn--prominent" type="button"></button>
          </div>
        </div>
        <!-- /search_input_medium -->

        <!-- filterpill -->
        <div class="horizontal_scrollable_items_container">
          <button class="filterpill mr-2" aria-label="Filter by something">Some Filter</button>
          <button class="filterpill mr-2" aria-label="Filter by something">Some Filter</button>
          <button class="filterpill mr-2" aria-label="Filter by something">Some Filter</button>
          <button class="filterpill mr-2" aria-label="Filter by something">Some Filter</button>
        </div>
        <!-- /filterpill -->

      </section>
      <!-- /hero_landing_page -->`,
      `<!-- hero_institutional_page -->
      <section class="hero_institutional_page">
        <h1 tabindex="0">Accessibility</h1>
        <div class="hero_institutional_page__tageline" style="max-width:430px;">The Houston Association of REALTORS® (HAR) is committed to providing an accessible website.</div>
      </section>
      <!-- /hero_institutional_page -->`
     ,      
      `<!-- hero_institutional_page -->
      <section class="hero_institutional_page text-left border-bottom">
        <h1 tabindex="0">Tools</h1>
        <div class="hero_institutional_page__tageline  text-left ml-0" style="max-width:674px;">Amazing tools designed to connect consumers with agents and brokers. HAR.com provides over 80 Tools & Services to REALTOR®/Pros & consumers..</div>
      </section>
      <!-- /hero_institutional_page -->`
      ,
      `<!-- hero_home -->
      <div class="hero_home">
        	<div class="ml-auto mr-auto" style="max-width:1056px;">
				<h2 class="h2--simple h2--simple__black">Start your home search</h2>
				<div class="hero_home__form">
					<div class="hero_home__form_select">
						<label class="color_black">Location</label>
						<div class="dropdown dropdown--custom dropdown--custom__simple">
						  <button class="dropdown-toggle btn--flate" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						    Homes for sale
						  </button>
						  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
						    <a class="dropdown-item" href="#">Action one</a>
						    <a class="dropdown-item" href="#">Action two</a>
						    <a class="dropdown-item" href="#">Action three</a>
						  </div>
						</div>
					</div>
					<div class="hero_home__form_input">
						<label class="color_black">Location</label>
						<input type="text" class="form-control" id="cityl" aria-describedby="city" placeholder="Enter address, city or zip code">
					</div>
					<div class="hero_home__form_button">
						<button class="btn">Search homes</button>
					</div>
			    </div>
			    <div class="hero_home__form_button responsive">
					<button class="btn">Search homes</button>
				</div>
				<div class="text-md-left text-center">
					<a class="font_size--medium font_weight--semi_bold pr-5" href="#">Advanced search</a>
					<a class="font_size--medium font_weight--semi_bold" href="#">Drive time estimator</a>
				</div>
			</div>
      </div>
      <!-- /hero_home -->`
      ,
      `<!-- hero_smaller -->
      <div class="hero_home hero_home__compact">
        	<div class="ml-auto mr-auto" style="max-width:1056px;">
				<div class="hero_home__form">
					<div class="hero_home__form_select">
						<label class="color_black">Where to search</label>
						<div class="dropdown dropdown--custom dropdown--custom__simple">
						  <button class="dropdown-toggle btn--flate" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						    Members Area
						  </button>
						  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
						    <a class="dropdown-item" href="#">Action one</a>
						    <a class="dropdown-item" href="#">Action two</a>
						    <a class="dropdown-item" href="#">Action three</a>
						  </div>
						</div>
					</div>
					<div class="hero_home__form_input">
						<label class="color_black">Search</label>
						<input type="text" class="form-control" id="cityl" aria-describedby="city" placeholder="Enter any keyword">
					</div>
					<div class="hero_home__form_button">
						<button type="button" class="btn">Search</button>
					</div>
			    </div>
			    <div class="hero_home__form_button responsive">
					<button class="btn">Search homes</button>
				</div>
			</div>
      </div>
      <!-- /hero_home -->`,
      `
      <!-- hero section default -->
      <section class="hero hero--default">
      	  <div class="hero--default__content">
	    	<h1 tabindex="0">Lorem ipsum dolor sit</h1>
	    	<div class="hero--default__content--tagline">Here goes the page tagline with a single sentence.</div>
	    	<div class="hero--default__content--pera">
	    		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non consectetur diam. Phasellus feugiat ipsum quis auctor scelerisque. Sed nisi diam, cursus sed turpis non, ornare elementum enim.Praesent vel molestie ante, accumsan pellentesque risus. Vivamus sagittis interdum est, quis sagittis.
	    	</div>
	    	<button role="button" type="button" class="btn btn--prominent btn--large">Optional CTA Button</button>
	      </div>
      </section>
      <!-- /hero_institutional_page -->
      `,`
      

      <!-- hero with presized image -->
      <section class="hero hero--withimage">
        <div class="hero--withimage__left">
        	<h1 tabindex="0">Find your home in Texas</h1>
        	<div class="hero--withimage--tagline">Here goes the page tagline with a single sentence.</div>
        	<div class="hero--withimage--pera">
        		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non consectetur diam. Phasellus feugiat ipsum quis auctor scelerisque. Sed nisi diam, cursus sed turpis non, ornare elementum enim.Praesent vel molestie ante, accumsan pellentesque risus. Vivamus sagittis interdum est, quis sagittis.
        	</div>
        	<button role="button" type="button" class="btn btn--prominent btn--medium">Optional CTA Button</button>
		</div>
		<div class="hero--withimage__right">
		</div>
      </section>
      <!-- /hero_institutional_page -->
      
      `,`
      <!-- hero section default -->
      <section class="hero hero--withimage" style="background-image:url(https://content.harstatic.com/media/bgs/real_estate_community.jpg);">
      	  <div class="container">
	      	  <div class="hero--withimage__content">
		    	<h1 tabindex="0">Real Estate Community</h1>
		    	<div class="hero--withimage__content--tagline">Real Estate Community allows consumers and Realtors to ask questions, post answers, share facts, opinions and persona experiences with each other. We have on ask a pro.</div>
		    	<div class="hero--withimage__content--pera">
		    		More than 200,000 active HAR.com registered users interact with more than 22,000 REALTORS members online. Ask a question or share your knowledge today! The Real Estate Community serves as a great way for members to build relationships with consumers by sharing their knowledge. Consumers can become members of the Real Estate Community to have their questions answered by other community members and to learn more about the Houston real estate market.
		    	</div>
		    	<button role="button" type="button" class="btn btn--prominent btn--large">Optional CTA Button</button>
		      </div>
		   </div>
      </section>
      <!-- /hero_institutional_page -->
      `,
      
    ];


    this.codeSnippets = [
``,

    ];

  }

  render() {

    return (
      <TemplateExpanded
        pageTitle="Heros"
        activeParent="template_blocks"
        activeChild="heros">

        <TemplateComponentBlock hasContainer={false} blockTitle="Inner Page Hero" elements={this.elements[0]} codeSnippets={this.codeSnippets[0]} />
        <TemplateComponentBlock hasContainer={false} blockTitle="Inner Institutional Hero" elements={this.elements[1]} codeSnippets={this.codeSnippets[1]} />
        <TemplateComponentBlock hasContainer={false} blockTitle="Simple Hero Left align" elements={this.elements[2]} codeSnippets={this.codeSnippets[2]} />
        <TemplateComponentBlock hasContainer={false} blockTitle="Hero for Home page" elements={this.elements[3]} codeSnippets={this.codeSnippets[3]} />
        <TemplateComponentBlock hasContainer={false} blockTitle="Hero for Inner page" elements={this.elements[4]} codeSnippets={this.codeSnippets[4]} />
        <TemplateComponentBlock hasContainer={false} blockTitle="Hero default" elements={this.elements[5]} codeSnippets={this.codeSnippets[5]} />
        <TemplateComponentBlock hasContainer={false} blockTitle="Hero default withimage" elements={this.elements[6]} codeSnippets={this.codeSnippets[6]} />
        <TemplateComponentBlock hasContainer={false} blockTitle="Hero Real estate Community" elements={this.elements[7]} codeSnippets={this.codeSnippets[7]} />

      </TemplateExpanded>
    )
  }

}
