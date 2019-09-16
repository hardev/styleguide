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
       `
       <div class="row">
         <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
           <h4 tabindex="0">Default Checkbox</h4>
         </div>
       </div>

       <div class="row mt-4 pb-3">
         <div class="col col-sm-4 col-12 pr-sm-5 pl-sm-5">
          <div role="checkbox" class="custom-control custom-checkbox custom-control-inline">
            <input type="checkbox" id="checkbox_button_medium_1" name="checkbox_button_medium" class="custom-control-input">
            <label class="custom-control-label" for="checkbox_button_medium_1">Yes</label>
          </div>
          <div class="component_content__demo__description">checkbox default state</div>
        </div>

        <div class="col col-sm-4 col-12 pr-sm-5 pl-sm-5">
          <div role="checkbox" class="custom-control custom-checkbox custom-control-inline">
            <input type="checkbox" id="checkbox_button_medium_2" name="checkbox_button_medium" class="custom-control-input" checked="checked">
            <label class="custom-control-label" for="checkbox_button_medium_2">Yes</label>
          </div>
          <div class="component_content__demo__description">checkbox checked</div>
        </div>

        <div class="col col-sm-4 col-12 pr-sm-5 pl-sm-5">
          <div role="checkbox" class="custom-control custom-checkbox custom-control-inline">
            <input type="checkbox" id="checkbox_button_medium_3" name="checkbox_button_medium" class="custom-control-input" disabled="disabled">
            <label class="custom-control-label" for="checkbox_button_medium_3">Disabled Checkbox</label>
          </div>
          <div class="component_content__demo__description">checkbox disabled</div>
        </div>
        
      </div>
       `,

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
    		    <option selected>Select</option>
    		    <option value="1">Option one</option>
    		    <option value="2">Option two</option>
    		    <option value="3">Option three</option>
    		  </select>
          <div class="component_content__demo__description">Large Select Menu</div>
        </div>
        <div class="col col-sm-3 col-12 pr-sm-5 pl-sm-5">
          <select class="custom-select custom-select_medium">
    		    <option selected>Select</option>
    		    <option value="1">Option one</option>
    		    <option value="2">Option two</option>
    		    <option value="3">Option three</option>
    		  </select>
          <div class="component_content__demo__description">Medium Select Menu</div>
        </div>
       </div>
      `,

      `<div class="row">
        <div class="col col-sm-5 col-12 pr-sm-5 pl-sm-5">
    			<div class="dropdown dropdown--custom dropdown--custom_large">
    			  <button class="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    			    Dropdown button
    			  </button>
    			  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    			    <a class="dropdown-item" href="#">Action one</a>
    			    <a class="dropdown-item" href="#">Action two</a>
    			    <a class="dropdown-item" href="#">Action three</a>
    			  </div>
    			</div>
          <div class="component_content__demo__description">Large Dropdown Menu</div>
        </div>
        <div class="col col-sm-4 col-12 pr-sm-5 pl-sm-5">
    			<div class="dropdown dropdown--custom dropdown--custom_medium">
    			  <button class="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    			    Dropdown button
    			  </button>
    			  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    			    <a class="dropdown-item" href="#">Action one</a>
    			    <a class="dropdown-item" href="#">Action two</a>
    			    <a class="dropdown-item" href="#">Action three</a>
    			  </div>
    			</div>
          <div class="component_content__demo__description">Medium Dropdown Menu</div>
        </div>
       </div>
      `,

      `<div class="row">
        <div class="col col-sm-4 col-12 pr-sm-5 pl-sm-5">
          <div class="choosable_box choosable_box--choosable_box choosable_box--choosable_box--multi_family">
            <input type="checkbox" class="custom-control-input" id="customCheckDisabled">
            <label class="custom-control-label" for="customCheckDisabled">Multi Family</label>
          </div>
          <div class="component_content__demo__description">Choosable Checkbox</div>
        </div>
        <div class="col col-sm-4 col-12 pr-sm-5 pl-sm-5">
          <div class="choosable_box choosable_box--choosable_box choosable_box--choosable_box--multi_family">
            <input type="checkbox" class="custom-control-input" id="customcheckbox" checked="checked">
            <label class="custom-control-label" for="customcheckbox">Multi Family</label>
          </div>
          <div class="component_content__demo__description">Choosable Checkbox checked</div>
        </div>
        <div class="col col-sm-4 col-12 pr-sm-5 pl-sm-5">
          <div class="choosable_box choosable_box--choosable_box choosable_box--choosable_box--multi_family">
            <input type="checkbox" class="custom-control-input" id="customcheckbox2" disabled>
            <label class="custom-control-label" for="customcheckbox2">Multi Family</label>
          </div>
          <div class="component_content__demo__description">Choosable Checkbox disabled</div>
        </div>
      </div>
      `,

       `<div class="row justify-content-center">
          <div class="col col-sm-6 col-12 pr-sm-5 pl-sm-5">
            <div class="btn-group btn-group-toggle" data-toggle="buttons">
              <label class="btn btn-secondary active">
                <input type="radio" name="options" id="option1" autocomplete="off" checked> For Sale
              </label>
              <label class="btn btn-secondary">
                <input type="radio" name="options" id="option2" autocomplete="off"> For Rent
              </label>
            </div>
            <div class="component_content__demo__description">Toggle Buttons</div>
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
`
<!-- Checbox Default state -->
<div role="checkbox" class="custom-control custom-checkbox custom-control-inline">
<input type="checkbox" id="checkbox_button_medium_1" name="checkbox_button_medium" class="custom-control-input">
<label class="custom-control-label" for="checkbox_button_medium_1">Yes</label>
</div>

<!-- Checbox checked -->
<div role="checkbox" class="custom-control custom-checkbox custom-control-inline">
<input type="checkbox" id="checkbox_button_medium_2" name="checkbox_button_medium" class="custom-control-input" checked="checked">
<label class="custom-control-label" for="checkbox_button_medium_2">Yes</label>
</div>

<!-- Checbox Disabled -->
<div role="checkbox" class="custom-control custom-checkbox custom-control-inline">
<input type="checkbox" id="checkbox_button_medium_3" name="checkbox_button_medium" class="custom-control-input" disabled="disabled">
<label class="custom-control-label" for="checkbox_button_medium_3">Disabled Checkbox</label>
</div>
`
,
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

`<!-- Large Select Menu -->
<select class="custom-select custom-select_large">
  <option selected>Select</option>
  <option value="1">Option one</option>
  <option value="2">Option two</option>
  <option value="3">Option three</option>
</select>

<!-- Medium Select Menu -->
<select class="custom-select custom-select_medium">
  <option selected>Select</option>
  <option value="1">Option one</option>
  <option value="2">Option two</option>
  <option value="3">Option three</option>
</select>
`,
`
<!-- Large Dropdown Menu -->
<div class="dropdown dropdown--custom dropdown--custom_large">
  <button class="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>

<!-- Medium Dropdown Menu -->
<div class="dropdown dropdown--custom dropdown--custom_medium">
  <button class="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
`,

`<!-- Choosable Checkbox -->
<div class="choosable_box choosable_box--choosable_box choosable_box--choosable_box--multi_family">
  <input type="checkbox" class="custom-control-input" id="customCheckDisabled">
  <label class="custom-control-label" for="customCheckDisabled">Multi Family</label>
</div>

<!-- Choosable Checkbox checked -->
<div class="choosable_box choosable_box--choosable_box choosable_box--choosable_box--multi_family">
  <input type="checkbox" class="custom-control-input" id="customcheckbox" checked="checked">
  <label class="custom-control-label" for="customcheckbox">Multi Family</label>
</div>

<!-- Choosable Checkbox disabled -->
<div class="choosable_box choosable_box--choosable_box choosable_box--choosable_box--multi_family">
  <input type="checkbox" class="custom-control-input" id="customcheckbox2" disabled>
  <label class="custom-control-label" for="customcheckbox2">Multi Family</label>
</div>
`,
`
<!-- Toggle Button -->
<div class="btn-group btn-group-toggle" data-toggle="buttons">
  <label class="btn btn-secondary active">
    <input type="radio" name="options" id="option1" autocomplete="off" checked> For Sale
  </label>
  <label class="btn btn-secondary">
    <input type="radio" name="options" id="option2" autocomplete="off"> For Rent
  </label>
</div>

`,
`
<!-- Dropdown -->
<div class="dropdown">
  <button class="btn btn--ordinary btn--medium" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
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
        <TemplateComponentBlock blockTitle="Checkbox" elements={this.elements[2]} codeSnippets={this.codeSnippets[2]} />
        <TemplateComponentBlock blockTitle="Radio button" elements={this.elements[3]} codeSnippets={this.codeSnippets[3]} />
        <TemplateComponentBlock blockTitle="Select Menu" elements={this.elements[4]} codeSnippets={this.codeSnippets[4]} />
        <TemplateComponentBlock blockTitle="Dropdown Menu" elements={this.elements[5]} codeSnippets={this.codeSnippets[5]} />
        <TemplateComponentBlock blockTitle="Choosable Box" elements={this.elements[6]} codeSnippets={this.codeSnippets[6]} />
        <TemplateComponentBlock blockTitle="Toggle Buttons" elements={this.elements[7]} codeSnippets={this.codeSnippets[7]} />


      </TemplateDefault>
    )
  }

}
