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
        <div class="col col-sm-4 col-12 pr-sm-5 pl-sm-5">
	      	<label for="cityl">City</label>
	      	<input type="text" class="form-control form-control--large" id="cityl" aria-describedby="city" placeholder="City">
	      	<div class="component_content__demo__description">Large Input</div>
        </div>        
        <div class="col col-12 pr-sm-5 pl-sm-5" style="max-width:500px;">
		    <label for="inlineFormInputGroup">Monthly rent</label>
		    <div class="input-group input-group--custom mb-2">
		        <div class="input-group-prepend">
		          <div class="input-group-text">$</div>
		        </div>
		        <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Monthly rent">
		    </div>
		    <div class="input-description">Enter the amount of the monthly rent payment.</div>
		</div>
		<div class="col col-12" style="max-width:500px;">
		    <label for="Bedrooms">Bedrooms</label>
		    <div class="input-grouped mb-2">
		        <div class="input-grouped__text">
		          <input type="text" class="form-control input-grouped__text__input" placeholder="Monthly rent">
		        </div>
		        <div class="input-grouped__text">
		          <input type="text" class="form-control input-grouped__text__input" placeholder="Monthly rent">
		        </div>
		    </div>
		</div>
       </div>`,

      `<div class="row">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 tabindex="0">Map search input</h4>
        </div>
      </div>

      <div class="row">
        <div class="col col-4 pr-sm-5 pl-sm-5">
          <div>
	          <div class="input-group input-group--search_input_map">
		          <input type="text" class="form-control" placeholder="Search homes...">
		          <div class="input-group-append">
		            <button class="btn" type="button"></button>
		          </div>
	          </div>	          
          </div>
          <div class="component_content__demo__description">Empty search input</div>
        </div>
        <div class="col col-sm-4 col-12 pr-sm-5 pl-sm-5">
          <div>
	          <div class="input-group input-group--search_input_map">
		          <input type="text" class="form-control" placeholder="Search homes..." value="Lcr 666  WEST FI">
		          <div class="input-group-append">
		            <button class="btn" type="button"></button>
		          </div>
	          </div>	          
          </div>
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
       </div>
       
       <hr>

      <div class="row">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 tabindex="0">Serach Input Medium</h4>
        </div>
      </div>

      <div class="row justify-content-center">
      	<div class="col col-sm-9 col-12 mt-5">
	      	<div class="input-group input-group--search_input_medium">
	          <input type="text" class="form-control" placeholder="Enter address, city or zip code" aria-label="Enter address, city or zip code">
	          <div class="input-group-append">
	            <button class="btn btn--prominent" type="button"></button>
	          </div>
	        </div>
	        <div class="component_content__demo__description">Medium Search Box</div>
        </div>        
       </div>
       
       <hr>
       
       <div class="row">
	        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
	          <h4 tabindex="0">Form search input</h4>
	        </div>
	    </div>
       <div class="row">
        <div class="col col-6 pr-sm-5 pl-sm-5">
          <div>
		        <input type="text" class="form-control input-search_form" placeholder="Search by address, city or zip code">
          </div>
          <div class="component_content__demo__description">Form Search input with icon</div>
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
      
      <div class="row">
         <div class="col-6 col-12" style="margin-bottom: 0; padding-bottom: 0;">
           <h4 tabindex="0">Checkbox With Description</h4>
         </div>
       </div>

       <div class="row mt-4 pb-3">
         <div class="col col-sm-6 col-12 pr-sm-6 pl-sm-6">
          <div role="checkbox" class="custom-control custom-checkbox custom-checkbox_with-description">
            <input type="checkbox" id="checkbox_button_medium_1" name="checkbox_button_medium" class="custom-control-input">
            <label class="custom-control-label" for="checkbox_button_medium_1">Auto Refresh Results</label>
            <span>Search results will be refreshed automatically when moving/zooming to match the visible area of the map.</span>
          </div>
          <div class="component_content__demo__description">checkbox default state</div>
        </div>
		
		<div class="col col-sm-6 col-12 pr-sm-6 pl-sm-6">
          
        </div>
        
      </div>
      
      <div class="row">
         <div class="col-6 col-12" style="margin-bottom: 0; padding-bottom: 0;">
           <h4 tabindex="0">Checkbox With Description</h4>
         </div>
       </div>

       <div class="row mt-4 pb-3">
         <div class="col col-sm-6 col-12 pr-sm-6 pl-sm-6">
          <div role="checkbox" class="custom-control custom-checkbox custom-checkbox__outline">
            <input type="checkbox" id="checkbox_button_medium_13" name="checkbox_button_medium3" class="custom-control-input">
            <label class="custom-control-label" for="checkbox_button_medium_13">
            	<span class="custom-control-label_title">Wonderful houses</span>
            	<span class="custom-control-label_info">
            		1 home <span style="color:rgba(82, 115, 138, 0.48);">Wonderful houses</span>
            	</span>
            </label>
          </div>
        </div>
		
		<div class="col col-sm-6 col-12 pr-sm-6 pl-sm-6">
          
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

       <div class="row">
         <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
           <h4 tabindex="0">Radio button large</h4>
         </div>
       </div>

      <div class="row mt-4 pb-3">

        <div class="col col-sm-4 col-12 pr-sm-5 pl-sm-5">
          <div role="radio" class="custom-control custom-radio custom-radio-row border-bottom">
            <input type="radio" id="radio_button_medium_22" name="checkbox_button_medium" class="custom-control-input">
            <label class="custom-control-label" for="radio_button_medium_22">1 bathroom</label>
          </div>
          
          <div role="radio" class="custom-control custom-radio custom-radio-row border-bottom">
            <input type="radio" id="checkbox_button_medium_23" name="checkbox_button_medium" class="custom-control-input">
            <label class="custom-control-label" for="checkbox_button_medium_23">2 bedroom</label>
          </div>
          
          <div role="radio" class="custom-control custom-radio custom-radio-row border-bottom">
            <input type="radio" id="checkbox_button_medium_24" name="checkbox_button_medium" class="custom-control-input">
            <label class="custom-control-label" for="checkbox_button_medium_24">Under $500 sqft.</label>
          </div>
          
          <div class="component_content__demo__description">Radio row wise</div>
          
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
          <select class="custom-select custom-select_large_extra">
    		    <option selected>Select</option>
    		    <option value="1">Option one</option>
    		    <option value="2">Option two</option>
    		    <option value="3">Option three</option>
    		  </select>
          <div class="component_content__demo__description">Large Select Menu</div>
        </div>
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
        <div class="col col-sm-4 col-12 pr-sm-5 pl-sm-5">
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
        <div class="col col-sm-4 col-12 pr-sm-5 pl-sm-5">
    			<div class="dropdown dropdown--custom dropdown--custom_medium dropdown--custom_bold">
    			  <button class="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    			    Dropdown button
    			  </button>
    			  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    			    <a class="dropdown-item" href="#">Action one</a>
    			    <a class="dropdown-item" href="#">Action two</a>
    			    <a class="dropdown-item" href="#">Action three</a>
    			  </div>
    			</div>
          <div class="component_content__demo__description">Bold Dropdown Menu</div>
        </div>
       </div>
       
       <div class="row">
        <div class="col col-sm-4 col-12 pr-sm-5 pl-sm-5">
    			<div class="dropdown dropdown--custom dropdown--custom_medium dropdown--custom_strong">
    			  <button class="dropdown-toggle border-0" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    			    Dropdown button
    			  </button>
    			  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    			    <a class="dropdown-item" href="#">Action one</a>
    			    <a class="dropdown-item" href="#">Action two</a>
    			    <a class="dropdown-item" href="#">Action three</a>
    			  </div>
    			</div>
          <div class="component_content__demo__description">Bold Dropdown Menu</div>
        </div>
        <div class="col col-sm-4 col-12 pr-sm-5 pl-sm-5"> 
       		<div class="dropdown">
			  <button class="dropdown-toggle btn btn--ordinary" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			    button style
			  </button>
			  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" x-placement="bottom-start" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(434px, 41px, 0px);">
			    <a class="dropdown-item" href="#">Action one</a>
			    <a class="dropdown-item" href="#">Action two</a>
			    <a class="dropdown-item" href="#">Action three</a>
			  </div>
			</div>
		</div>
        <div class="col col-sm-4 col-12 pr-sm-5 pl-sm-5">
    		<div class="dropdown dropdown--custom dropdown--custom__simple">
			  <button class="dropdown-toggle btn--flate" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			    Sort by
			  </button>
			  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
			    <a class="dropdown-item" href="#">Action one</a>
			    <a class="dropdown-item" href="#">Action two</a>
			    <a class="dropdown-item" href="#">Action three</a>
			  </div>
			</div>
          <div class="component_content__demo__description">Dropdown Simple</div>
        </div>        
       </div>
      `,

      `<div class="row">
        <div class="col col-sm-4 col-12 pr-sm-5 pl-sm-5">
          <div class="choosable_iconbox">
            <input type="checkbox" class="custom-control-input" id="choosable_iconbox">
            <label class="custom-control-label" for="choosable_iconbox">
            	<span class="custom-control-label__icon">
            		<!-- this is svg icon we can change this accordingly -->
            		<svg xmlns="http://www.w3.org/2000/svg" width="32" height="16" viewBox="0 0 32 16">
					    <g fill="none" fill-rule="evenodd">
					        <path class="test" fill="#FFF" d="M0 0h32v16H0z" opacity=".01"/>
					        <g fill="#666">
					            <path d="M18.661 5.932c-.4.244-.769.533-1.098.86l-5.254-5.157L6.201 7.63a.72.72 0 0 1-1.002.014.688.688 0 0 1 .015-.983l6.573-6.45A.735.735 0 0 1 12.309 0a.734.734 0 0 1 .522.21l5.83 5.722zm-2.315 7.327h-2.519V9.412a.572.572 0 0 0-.575-.564h-2a.571.571 0 0 0-.575.564v3.847H7.542a.319.319 0 0 1-.32-.315V7.91c0-.173.101-.415.226-.537l4.578-4.506a.325.325 0 0 1 .453 0l4.574 4.502A5.748 5.748 0 0 0 15.84 10.9c0 .84.18 1.637.505 2.358z"/>
					            <path d="M21.801 16c-2.87 0-5.198-2.283-5.198-5.099 0-2.816 2.327-5.098 5.198-5.098C24.672 5.803 27 8.085 27 10.9S24.672 16 21.801 16zm.015-3.131l2.513 1.207-.48-2.557 2.034-1.81-2.81-.374-1.257-2.326-1.257 2.326-2.81.373 2.033 1.811-.48 2.557 2.514-1.207z"/>
					        </g>
					    </g>
					</svg>
            	</span>
            	<span class="custom-control-label__text">Multi Family</span>
            </label>
          </div>
          <div class="component_content__demo__description">Choosable Icon Box with Inline SVG Icon</div>
        </div>
        
        <div class="col col-sm-4 col-12 pr-sm-5 pl-sm-5">
          <div class="choosable_iconbox">
            <input type="checkbox" class="custom-control-input" id="choosable_iconbox2" checked="checked">
            <label class="custom-control-label" for="choosable_iconbox2">
            	<span class="custom-control-label__icon">
            		<!-- this is svg icon we can change this accordingly -->
            		<svg xmlns="http://www.w3.org/2000/svg" width="32" height="16" viewBox="0 0 32 16">
					    <g fill="none" fill-rule="evenodd">
					        <path class="test" fill="#FFF" d="M0 0h32v16H0z" opacity=".01"/>
					        <g fill="#666">
					            <path d="M18.661 5.932c-.4.244-.769.533-1.098.86l-5.254-5.157L6.201 7.63a.72.72 0 0 1-1.002.014.688.688 0 0 1 .015-.983l6.573-6.45A.735.735 0 0 1 12.309 0a.734.734 0 0 1 .522.21l5.83 5.722zm-2.315 7.327h-2.519V9.412a.572.572 0 0 0-.575-.564h-2a.571.571 0 0 0-.575.564v3.847H7.542a.319.319 0 0 1-.32-.315V7.91c0-.173.101-.415.226-.537l4.578-4.506a.325.325 0 0 1 .453 0l4.574 4.502A5.748 5.748 0 0 0 15.84 10.9c0 .84.18 1.637.505 2.358z"/>
					            <path d="M21.801 16c-2.87 0-5.198-2.283-5.198-5.099 0-2.816 2.327-5.098 5.198-5.098C24.672 5.803 27 8.085 27 10.9S24.672 16 21.801 16zm.015-3.131l2.513 1.207-.48-2.557 2.034-1.81-2.81-.374-1.257-2.326-1.257 2.326-2.81.373 2.033 1.811-.48 2.557 2.514-1.207z"/>
					        </g>
					    </g>
					</svg>
            	</span>
            	<span class="custom-control-label__text">Multi Family</span>
            </label>
          </div>
          <div class="component_content__demo__description">Choosable Icon Box checked</div>
        </div>
        
        <div class="col col-sm-4 col-12 pr-sm-5 pl-sm-5">
          <div class="choosable_iconbox">
            <input type="checkbox" class="custom-control-input" id="choosable_iconbox3" disabled>
            <label class="custom-control-label" for="choosable_iconbox3">
            	<span class="custom-control-label__icon">
            		<!-- this is svg icon we can change this accordingly -->
            		<svg xmlns="http://www.w3.org/2000/svg" width="32" height="16" viewBox="0 0 32 16">
					    <g fill="none" fill-rule="evenodd">
					        <path class="test" fill="#FFF" d="M0 0h32v16H0z" opacity=".01"/>
					        <g fill="#666">
					            <path d="M18.661 5.932c-.4.244-.769.533-1.098.86l-5.254-5.157L6.201 7.63a.72.72 0 0 1-1.002.014.688.688 0 0 1 .015-.983l6.573-6.45A.735.735 0 0 1 12.309 0a.734.734 0 0 1 .522.21l5.83 5.722zm-2.315 7.327h-2.519V9.412a.572.572 0 0 0-.575-.564h-2a.571.571 0 0 0-.575.564v3.847H7.542a.319.319 0 0 1-.32-.315V7.91c0-.173.101-.415.226-.537l4.578-4.506a.325.325 0 0 1 .453 0l4.574 4.502A5.748 5.748 0 0 0 15.84 10.9c0 .84.18 1.637.505 2.358z"/>
					            <path d="M21.801 16c-2.87 0-5.198-2.283-5.198-5.099 0-2.816 2.327-5.098 5.198-5.098C24.672 5.803 27 8.085 27 10.9S24.672 16 21.801 16zm.015-3.131l2.513 1.207-.48-2.557 2.034-1.81-2.81-.374-1.257-2.326-1.257 2.326-2.81.373 2.033 1.811-.48 2.557 2.514-1.207z"/>
					        </g>
					    </g>
					</svg>
            	</span>
            	<span class="custom-control-label__text">Multi Family</span>
            </label>
          </div>
          <div class="component_content__demo__description">Choosable Icon Box disabled</div>
        </div>
        
      </div>
      <div class="row d-none">
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

	  <div class="row">
        <div class="col col-sm-4 col-12 pr-sm-5 pl-sm-5">
          <div class="choosable_topic">
            <input type="checkbox" class="custom-control-input" id="choosable_topic">
            <label class="choosable_topic-label" for="choosable_topic" data-toggle="tooltip" data-placement="top" title="Chosable Topic" data-original-title="Chosable Topic">Chosable Topic</label>
          </div>
          <div class="component_content__demo__description">Chosable Topic</div>
        </div>
        
        <div class="col col-sm-4 col-12 pr-sm-5 pl-sm-5">
          <div class="choosable_topic">
            <input type="checkbox" class="custom-control-input" id="choosable_topic" checked="checked">
            <label class="choosable_topic-label" for="choosable_topic" data-toggle="tooltip" data-placement="top" title="Chosable Topic" data-original-title="Chosable Topic">Chosable Topic</label>
          </div>
          <div class="component_content__demo__description">Choosable Icon Box checked</div>
        </div>
        
        <div class="col col-sm-4 col-12 pr-sm-5 pl-sm-5">
          <div class="choosable_iconbox">
            <input type="checkbox" class="custom-control-input" id="choosable_iconbox3" disabled>
            <label class="custom-control-label" for="choosable_iconbox3">
            	<span class="custom-control-label__icon">
            		<!-- this is svg icon we can change this accordingly -->
            		<svg xmlns="http://www.w3.org/2000/svg" width="32" height="16" viewBox="0 0 32 16">
					    <g fill="none" fill-rule="evenodd">
					        <path class="test" fill="#FFF" d="M0 0h32v16H0z" opacity=".01"/>
					        <g fill="#666">
					            <path d="M18.661 5.932c-.4.244-.769.533-1.098.86l-5.254-5.157L6.201 7.63a.72.72 0 0 1-1.002.014.688.688 0 0 1 .015-.983l6.573-6.45A.735.735 0 0 1 12.309 0a.734.734 0 0 1 .522.21l5.83 5.722zm-2.315 7.327h-2.519V9.412a.572.572 0 0 0-.575-.564h-2a.571.571 0 0 0-.575.564v3.847H7.542a.319.319 0 0 1-.32-.315V7.91c0-.173.101-.415.226-.537l4.578-4.506a.325.325 0 0 1 .453 0l4.574 4.502A5.748 5.748 0 0 0 15.84 10.9c0 .84.18 1.637.505 2.358z"/>
					            <path d="M21.801 16c-2.87 0-5.198-2.283-5.198-5.099 0-2.816 2.327-5.098 5.198-5.098C24.672 5.803 27 8.085 27 10.9S24.672 16 21.801 16zm.015-3.131l2.513 1.207-.48-2.557 2.034-1.81-2.81-.374-1.257-2.326-1.257 2.326-2.81.373 2.033 1.811-.48 2.557 2.514-1.207z"/>
					        </g>
					    </g>
					</svg>
            	</span>
            	<span class="custom-control-label__text">Multi Family</span>
            </label>
          </div>
          <div class="component_content__demo__description">Choosable Icon Box disabled</div>
        </div>
        
      </div>
      <div class="row d-none">
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
<input disabled type="text" class="form-control" id="city" aria-describedby="city" placeholder="City">

<!-- Label read only -->
<label class="sr-only" for="City">City</label>
`,

`<!-- Map search input -->
<div class="input-group input-group--search_input_map">
  <input type="text" class="form-control" placeholder="Search homes...">
  <div class="input-group-append">
    <button class="btn" type="button"></button>
  </div>
</div>

<!-- Home search input -->
<div class="input-group input-group--search_input_home">
  <input type="text" class="form-control" placeholder="Enter address, city or zip code" aria-label="Enter address, city or zip code">
  <div class="input-group-append">
    <button class="btn btn--prominent" type="button"></button>
  </div>
</div>

<!-- Search Box Medium -->
<div class="input-group input-group--search_input_medium">
  <input type="text" class="form-control" placeholder="Enter address, city or zip code" aria-label="Enter address, city or zip code">
  <div class="input-group-append">
    <button class="btn btn--prominent" type="button"></button>
  </div>
</div>

<!-- Form Search Box -->
<input type="text" class="form-control input-search_form" placeholder="Search by address, city or zip code">
`,
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

<!-- Checbox with description -->
<div role="checkbox" class="custom-control custom-checkbox custom-checkbox_with-description">
<input type="checkbox" id="checkbox_button_medium_1" name="checkbox_button_medium" class="custom-control-input">
<label class="custom-control-label" for="checkbox_button_medium_1">Auto Refresh Results</label>
<span>Search results will be refreshed automatically when moving/zooming to match the visible area of the map.</span>
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

<!-- Bold Dropdown Menu -->
<div class="dropdown dropdown--custom dropdown--custom_medium dropdown--custom_bold">
  <button class="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action one</a>
    <a class="dropdown-item" href="#">Action two</a>
    <a class="dropdown-item" href="#">Action three</a>
  </div>
</div>

`,

`<!-- choosable iconbox -->
<div class="choosable_iconbox">
<input type="checkbox" class="custom-control-input" id="choosable_iconbox">
<label class="custom-control-label" for="choosable_iconbox">
	<span class="custom-control-label__icon">
		<!-- this is svg icon we can change this accordingly -->
		<svg xmlns="http://www.w3.org/2000/svg" width="32" height="16" viewBox="0 0 32 16">
		    <g fill="none" fill-rule="evenodd">
		        <path class="test" fill="#FFF" d="M0 0h32v16H0z" opacity=".01"/>
		        <g fill="#666">
		            <path d="M18.661 5.932c-.4.244-.769.533-1.098.86l-5.254-5.157L6.201 7.63a.72.72 0 0 1-1.002.014.688.688 0 0 1 .015-.983l6.573-6.45A.735.735 0 0 1 12.309 0a.734.734 0 0 1 .522.21l5.83 5.722zm-2.315 7.327h-2.519V9.412a.572.572 0 0 0-.575-.564h-2a.571.571 0 0 0-.575.564v3.847H7.542a.319.319 0 0 1-.32-.315V7.91c0-.173.101-.415.226-.537l4.578-4.506a.325.325 0 0 1 .453 0l4.574 4.502A5.748 5.748 0 0 0 15.84 10.9c0 .84.18 1.637.505 2.358z"/>
		            <path d="M21.801 16c-2.87 0-5.198-2.283-5.198-5.099 0-2.816 2.327-5.098 5.198-5.098C24.672 5.803 27 8.085 27 10.9S24.672 16 21.801 16zm.015-3.131l2.513 1.207-.48-2.557 2.034-1.81-2.81-.374-1.257-2.326-1.257 2.326-2.81.373 2.033 1.811-.48 2.557 2.514-1.207z"/>
		        </g>
		    </g>
		</svg>
	</span>
	<span class="custom-control-label__text">Multi Family</span>
</label>
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
