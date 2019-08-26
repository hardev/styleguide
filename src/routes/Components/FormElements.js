import React, {Component} from "react";
import TemplateDefault from '../../components/TemplateDefault';
import TemplateComponentBlock from '../../components/TemplateComponentBlock';

export default class Forms extends Component {

  constructor(props) {
    super(props);

    this.elements = [
      `<div class="row">
      	<div class="col col-sm-4 col-12 pr-sm-5 pl-sm-5">
	      	<label for="city">City</label>
	      	<input type="text" class="form-control" id="city" aria-describedby="city" placeholder="City">
	      	<div class="component_content__demo__description">Empty input</div>
        </div>
        <div class="col col-sm-4 col-12 pr-sm-5 pl-sm-5">
	      	<label for="city">City</label>
	      	<input type="text" class="form-control" id="city" aria-describedby="city" placeholder="City" value="Houston">
	      	<div class="component_content__demo__description">Filled input</div>
        </div>
        <div class="col col-sm-4 col-12 pr-sm-5 pl-sm-5">
	      	<label for="city">City</label>
	      	<input disabled type="text" class="form-control" id="city" aria-describedby="city" placeholder="City">
	      	<div class="component_content__demo__description">Disabled input</div>
        </div>
       </div>`,

      `<div class="row">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 tabindex="0">Map search input</h4>
        </div>
      </div>

      <div class="row">
        <div class="col col-sm-4 col-12 pr-sm-5 pl-sm-5">
          <div>{ under development }</div>
          <div class="component_content__demo__description">Empty search input</div>
        </div>
        <div class="col col-sm-4 col-12 pr-sm-5 pl-sm-5">
          <div>{ under development }</div>
          <div class="component_content__demo__description">Filled search input</div>
        </div>
       </div>

      <hr>

      <div class="row">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 tabindex="0">Home search input</h4>
        </div>
      </div>

      <div class="row justify-content-center">
      	<div class="col col-sm-9 col-12 mt-5">
	      	<div class="input-group input-group--search_input_home">
	          <input type="text" class="form-control" placeholder="Enter address, city or zip code" aria-label="Enter address, city or zip code">
	          <div class="input-group-append">
	            <button class="btn btn--prominent" type="button"></button>
	          </div>
	        </div>
	        <div class="component_content__demo__description">Home empty search input</div>
        </div>
        <div class="col col-sm-9 col-12">
	      	<div class="input-group input-group--search_input_home">
	          <input type="text" class="form-control" placeholder="Enter address, city or zip code" aria-label="Enter address, city or zip code" value="Houston">
	          <div class="input-group-append">
	            <button class="btn btn--prominent" type="button"></button>
	          </div>
	        </div>
	        <div class="component_content__demo__description">Home filled search input</div>
        </div>
       </div>`,

       `<div class="row">
         <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
           <h4 tabindex="0">Radio button medium</h4>
         </div>
       </div>

       <div class="row mt-4 pb-3">
         <div class="col col-sm-4 col-12 pr-sm-5 pl-sm-5">
          <div role="radio" class="custom-control custom-radio custom-control-inline">
            <input type="radio" id="radio_button_medium_1" name="radio_button_medium" class="custom-control-input">
            <label class="custom-control-label" for="radio_button_medium_1">Yes</label>
          </div>
          <div class="component_content__demo__description">Radio button default state</div>
        </div>

        <div class="col col-sm-4 col-12 pr-sm-5 pl-sm-5">
          <div role="radio" class="custom-control custom-radio custom-control-inline">
            <input type="radio" id="radio_button_medium_2" name="radio_button_medium" class="custom-control-input" disabled>
            <label class="custom-control-label" for="radio_button_medium_2">Yes</label>
          </div>
          <div class="component_content__demo__description">Radio button disabled</div>
        </div>

        <div class="col col-sm-4 col-12 pr-sm-5 pl-sm-5">
          <div role="radiogroup">
            <div role="radio" class="custom-control custom-radio custom-control-inline">
              <input type="radio" id="radio_button_medium_example_1" name="radio_button_medium_example" class="custom-control-input">
              <label class="custom-control-label" for="radio_button_medium_example_1">Yes</label>
            </div>
            <div role="radio" class="custom-control custom-radio custom-control-inline">
              <input type="radio" id="radio_button_medium_example_2" name="radio_button_medium_example" class="custom-control-input">
              <label class="custom-control-label" for="radio_button_medium_example_2">No</label>
            </div>
          </div>
          <div class="component_content__demo__description">Example of radio button options</div>
        </div>
      </div>

       <hr />

       <div class="row">
         <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
           <h4 tabindex="0">Radio button large</h4>
         </div>
       </div>

      <div class="row mt-4 pb-3">

        <div class="col col-sm-4 col-12 pr-sm-5 pl-sm-5">
          <div role="radio" class="custom-control custom-radio custom-radio--large custom-control-inline">
            <input type="radio" id="radio_button_large_1" name="radio_button_large" class="custom-control-input">
            <label class="custom-control-label" for="radio_button_large_1">Yes</label>
          </div>
          <div class="component_content__demo__description">Radio button default state</div>
        </div>

        <div class="col col-sm-4 col-12 pr-sm-5 pl-sm-5">
          <div role="radio" class="custom-control custom-radio custom-radio--large custom-control-inline">
            <input disabled type="radio" id="radio_button_large_2" name="radio_button_large" class="custom-control-input">
            <label class="custom-control-label" for="radio_button_large_2">Yes</label>
          </div>
          <div class="component_content__demo__description">Radio button disabled</div>
        </div>

        <div class="col col-sm-4 col-12 pr-sm-5 pl-sm-5">
          <div role="radiogroup">
            <div role="radio" class="custom-control custom-radio custom-radio--large custom-control-inline">
              <input type="radio" id="radio_button_large_example_1" name="radio_button_large_example" class="custom-control-input">
              <label class="custom-control-label" for="radio_button_large_example_1">Yes</label>
            </div>
            <div role="radio" class="custom-control custom-radio custom-radio--large custom-control-inline">
              <input type="radio" id="radio_button_large_example_2" name="radio_button_large_example" class="custom-control-input">
              <label class="custom-control-label" for="radio_button_large_example_2">No</label>
            </div>
          </div>
          <div class="component_content__demo__description">Example of Radio button options</div>
        </div>
      </div>

      <hr />

      <div class="component_content__negative_content">
        <div class="row">
          <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
            <h4 tabindex="0">Radio button negative</h4>
          </div>
        </div>

       <div class="row mt-4 pb-3">

         <div class="col col-sm-4 col-12 pr-sm-5 pl-sm-5">
           <div role="radio" class="custom-control custom-radio custom-radio--negative custom-control-inline">
             <input type="radio" id="radio_button_large_negative_1" name="radio_button_large_negative" class="custom-control-input">
             <label class="custom-control-label" for="radio_button_large_negative_1">Yes</label>
           </div>
           <div class="component_content__demo__description">Radio button default state</div>
         </div>

         <div class="col col-sm-4 col-12 pr-sm-5 pl-sm-5">
           <div role="radio" class="custom-control custom-radio custom-radio--negative custom-control-inline">
             <input disabled type="radio" id="radio_button_large_negative_2" name="radio_button_large_negative" class="custom-control-input">
             <label class="custom-control-label" for="radio_button_large_negative_2">Yes</label>
           </div>
           <div class="component_content__demo__description">Radio button disabled</div>
         </div>

         <div class="col col-sm-4 col-12 pr-sm-5 pl-sm-5">
           <div role="radiogroup">
             <div role="radio" class="custom-control custom-radio custom-radio--negative custom-control-inline">
               <input type="radio" id="radio_button_large_negative_example_1" name="radio_button_large_negative_example" class="custom-control-input">
               <label class="custom-control-label" for="radio_button_large_negative_example_1">Yes</label>
             </div>
             <div role="radio" class="custom-control custom-radio custom-radio--negative custom-control-inline">
               <input type="radio" id="radio_button_large_negative_example_2" name="radio_button_large_negative_example" class="custom-control-input">
               <label class="custom-control-label" for="radio_button_large_negative_example_2">No</label>
             </div>
           </div>
           <div class="component_content__demo__description">Example of Radio button options</div>
         </div>
       </div>
     </div>
       `,
       `<div class="row">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 tabindex="0">Select Menu</h4>
        </div>
      </div>

      <div class="row">
        <div class="col col-sm-4 col-12 pr-sm-5 pl-sm-5">
          <select class="custom-select custom-select_large">
		    <option selected>Sort By</option>
		    <option value="1">One</option>
		    <option value="2">Two</option>
		    <option value="3">Three</option>
		  </select>
          <div class="component_content__demo__description">Large Select Menu</div>
        </div>
        <div class="col col-sm-3 col-12 pr-sm-5 pl-sm-5">
          <select class="custom-select custom-select_medium">
		    <option selected>Sort By</option>
		    <option value="1">One</option>
		    <option value="2">Two</option>
		    <option value="3">Three</option>
		  </select>
          <div class="component_content__demo__description">Medium Select Menu</div>
        </div>
       </div>
      `,
       `<div class="row">
        <div class="col col-sm-4 col-12 pr-sm-5 pl-sm-5">
			<div id="SingleFamily" class="custom-control custom-checkbox custom-checkbox--choosable_box">
			  <input type="checkbox" class="custom-control-input" id="customCheckDisabled">
			  <label class="custom-control-label" for="customCheckDisabled">Multi Family</label>
			</div>
          <div class="component_content__demo__description">Choosable Checkbox</div>
        </div>
        <div class="col col-sm-4 col-12 pr-sm-5 pl-sm-5">
          	<div id="MultiFamily" class="custom-control custom-checkbox custom-checkbox--choosable_box">
			  <input type="checkbox" class="custom-control-input" id="customcheckbox" checked="checked">
			  <label class="custom-control-label" for="customcheckbox">Multi Family</label>
			</div>
			<div class="component_content__demo__description">Choosable Checkbox Checked</div>
        </div>
        <div class="col col-sm-4 col-12 pr-sm-5 pl-sm-5">
          	<div id="Townhouse" class="custom-control custom-checkbox custom-checkbox--choosable_box">
			  <input type="checkbox" class="custom-control-input" id="customcheckbox2" disabled>
			  <label class="custom-control-label" for="customcheckbox2">Multi Family</label>
			</div>
			<div class="component_content__demo__description">Choosable Checkbox Disabled</div>
        </div>
       </div>
      `,

    ];


    this.codeSnippets = [

`<!-- Empty input -->
<label for="city">City</label>
<input type="text" class="form-control" id="city" aria-describedby="city" placeholder="City">

<!-- Disabled input -->
<label for="city">City</label>
<input disabled type="text" class="form-control" id="city" aria-describedby="city" placeholder="City">`,

`<!-- Map search input -->
{ under development }

<!-- Home search input -->
<div class="input-group input-group--search_input_home">
  <input type="text" class="form-control" placeholder="Enter address, city or zip code" aria-label="Enter address, city or zip code">
  <div class="input-group-append">
    <button class="btn btn--prominent" type="button"></button>
  </div>
</div>`,

`<!-- Radio button medium -->
<div role="radiogroup">
  <div role="radio" class="custom-control custom-radio custom-control-inline">
    <input type="radio" id="example_radio_button_1" name="example_radio_button" class="custom-control-input">
    <label class="custom-control-label" for="example_radio_button_1">Yes</label>
  </div>
  <div role="radio" class="custom-control custom-radio custom-control-inline">
    <input type="radio" id="example_radio_button_2" name="example_radio_button" class="custom-control-input">
    <label class="custom-control-label" for="example_radio_button_2">No</label>
  </div>
</div>

<!-- Radio button large -->
<div role="radiogroup">
  <div role="radio" class="custom-control custom-radio custom-radio--large custom-control-inline">
    <input type="radio" id="example_radio_button_large_1" name="example_radio_button_large" class="custom-control-input">
    <label class="custom-control-label" for="example_radio_button_large_1">Yes</label>
  </div>
  <div role="radio" class="custom-control custom-radio custom-radio--large custom-control-inline">
    <input type="radio" id="example_radio_button_large_2" name="example_radio_button_large" class="custom-control-input">
    <label class="custom-control-label" for="example_radio_button_large_2">No</label>
  </div>
</div>

<!-- Radio button negative -->
<div role="radiogroup">
  <div role="radio" class="custom-control custom-radio custom-radio--negative custom-control-inline">
    <input type="radio" id="example_radio_button_large_1" name="example_radio_button_large" class="custom-control-input">
    <label class="custom-control-label" for="example_radio_button_large_1">Yes</label>
  </div>
  <div role="radio" class="custom-control custom-radio custom-control-inline">
    <input type="radio" id="example_radio_button_large_2" name="example_radio_button_large" class="custom-control-input">
    <label class="custom-control-label" for="example_radio_button_large_2">No</label>
  </div>
</div>`,

`<!-- Select Mennu Large -->
<div role="radiogroup">
  <select class="custom-select custom-select_large">
    <option selected>Sort By</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>

<!-- Select Mennu Medium -->
  <select class="custom-select custom-select_medium">
    <option selected>Sort By</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>
`,
`<!-- Shoosable Checkbox Normal -->
<div id="SingleFamily" class="custom-control custom-checkbox custom-checkbox--choosable_box">
  <input type="checkbox" class="custom-control-input" id="customCheckDisabled">
  <label class="custom-control-label" for="customCheckDisabled">Multi Family</label>
</div>

<!-- Shoosable Checkbox Checked -->
<div id="MultiFamily" class="custom-control custom-checkbox custom-checkbox--choosable_box">
  <input type="checkbox" class="custom-control-input" id="customcheckbox" checked="checked">
  <label class="custom-control-label" for="customcheckbox">Multi Family</label>
</div>

<!-- Shoosable Checkbox Checked -->
<div id="Townhouse" class="custom-control custom-checkbox custom-checkbox--choosable_box">
  <input type="checkbox" class="custom-control-input" id="customcheckbox2" disabled>
  <label class="custom-control-label" for="customcheckbox2">Multi Family</label>
</div>
`,

    ];

  }

  render(){
    return (
      <TemplateDefault
        pageTitle="Form Elements"
        activeParent="components"
        activeChild="form_elements">

        <TemplateComponentBlock blockTitle="Input" elements={this.elements[0]} codeSnippets={this.codeSnippets[0]} />
        <TemplateComponentBlock blockTitle="Search input" elements={this.elements[1]} codeSnippets={this.codeSnippets[1]} />
        <TemplateComponentBlock blockTitle="Radio button" elements={this.elements[2]} codeSnippets={this.codeSnippets[2]} />
        <TemplateComponentBlock blockTitle="Select Menu" elements={this.elements[3]} codeSnippets={this.codeSnippets[3]} />
        <TemplateComponentBlock blockTitle="Choosable Box" elements={this.elements[4]} codeSnippets={this.codeSnippets[4]} />

      </TemplateDefault>
    )
  }

}
