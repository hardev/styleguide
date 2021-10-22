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
        <div class="hero_institutional_page__tageline" style="max-width:420px;">The Houston Association of REALTORS® (HAR) is committed to providing an accessible website.</div>
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
				<a class="font_size--medium font_weight--semi_bold pr-5" href="#">Advanced search</a>
				<a class="font_size--medium font_weight--semi_bold pr-5" href="#">Drive time estimator</a>
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
        <TemplateComponentBlock hasContainer={false} blockTitle="Hero for Home page" elements={this.elements[2]} codeSnippets={this.codeSnippets[2]} />
        <TemplateComponentBlock hasContainer={false} blockTitle="Hero default" elements={this.elements[3]} codeSnippets={this.codeSnippets[3]} />
        <TemplateComponentBlock hasContainer={false} blockTitle="Hero default withimage" elements={this.elements[4]} codeSnippets={this.codeSnippets[4]} />

      </TemplateExpanded>
    )
  }

}
