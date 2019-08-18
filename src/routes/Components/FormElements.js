import React, {Component} from "react";
import TemplateDefault from '../../components/TemplateDefault';
import TemplateComponentBlock from '../../components/TemplateComponentBlock';

export default class Forms extends Component {

  constructor(props) {
    super(props);

    this.elements = [
      `<div class="row  mt-4 pb-3">
      	<div class="col col-sm-4 col-12 pr-sm-5 pl-sm-5">
	      	<label for="city">City</label>
	      	<input type="text" class="form-control" id="city" aria-describedby="city" placeholder="City">
	      	<div class="component_content__demo__description">Empty input</div>
        </div>
        <div class="col col-sm-4 col-12 pr-sm-5 pl-sm-5">
	      	<label for="city">City</label>
	      	<input type="text" class="form-control" id="city" aria-describedby="city" value="Houston">
	      	<div class="component_content__demo__description">Filled input</div>
        </div>
        <div class="col col-sm-4 col-12 pr-sm-5 pl-sm-5">
	      	<label for="city">City</label>
	      	<input disabled type="text" class="form-control" id="city" aria-describedby="city" placeholder="City">
	      	<div class="component_content__demo__description">Disabled input</div>
        </div>
       </div>`,
      `<div class="row justify-content-center">
      	<div class="col col-sm-9 col-12 mt-5">
	      	<div class="input-group input-group--quicksearch">
	          <input type="text" class="form-control" placeholder="Enter address, city or zip code" aria-label="Enter address, city or zip code" aria-describedby="basic-addon2">
	          <div class="input-group-append">
	            <button class="btn btn-prominent" type="button"><img class="pl-2 pr-2" src="https://content.harstatic.com/resource_2019/imgs/home/search_white_small.svg"></button>
	          </div>	          
	        </div>
	        <div class="component_content__demo__description">Home Search Input</div>
        </div>
        <div class="col col-sm-9 col-12">
	      	<div class="input-group input-group--quicksearch">
	          <input type="text" class="form-control" value="Houston" aria-label="Enter address, city or zip code" aria-describedby="basic-addon2">
	          <div class="input-group-append">
	            <button class="btn btn-prominent" type="button"><img class="pl-2 pr-2" src="https://content.harstatic.com/resource_2019/imgs/home/search_white_small.svg"></button>
	          </div>	          
	        </div>
	        <div class="component_content__demo__description">Home Search Input Filled</div>
        </div>
       </div>`,
       `<div class="row  mt-4 pb-3">
      	<div class="col col-sm-3 col-12 pr-sm-5 pl-sm-5">
	      	<div class="custom-control custom-radio custom-control-inline">
			  <input type="radio" id="customRadioInline1" name="CustomRadio" class="custom-control-input">
			  <label class="custom-control-label" for="customRadioInline1">Yes</label>
			</div>
			<div class="component_content__demo__description">Radio button default state</div>
        </div>
        <div class="col col-sm-3 col-12 pr-sm-5 pl-sm-5">
	      	<div class="custom-control custom-radio custom-control-inline">
			  <input type="radio" id="customRadioInline2" name="CustomRadio" class="custom-control-input" checked="checked">
			  <label class="custom-control-label" for="customRadioInline2">Yes</label>
			</div>
			<div class="component_content__demo__description">Radio button checked</div>
        </div>
        <div class="col col-sm-3 col-12 pr-sm-5 pl-sm-5">
	      	<div class="custom-control custom-radio custom-control-inline">
			  <input type="radio" id="customRadioInline3" name="CustomRadio" class="custom-control-input" disabled>
			  <label class="custom-control-label" for="customRadioInline3">Yes</label>
			</div>
			<div class="component_content__demo__description">Radio button disabled</div>
        </div>
        <div class="col col-sm-3 col-12 pr-sm-5 pl-sm-5">
	      	<div class="custom-control custom-radio custom-control-inline">
			  <input type="radio" id="customRadioInline4" name="CustomRadio2" class="custom-control-input">
			  <label class="custom-control-label" for="customRadioInline4">Yes</label>
			</div>
			<div class="custom-control custom-radio custom-control-inline">
			  <input type="radio" id="customRadioInline5" name="CustomRadio2" class="custom-control-input">
			  <label class="custom-control-label" for="customRadioInline5">No</label>
			</div>
			<div class="component_content__demo__description">Example of Radio button options</div>
        </div>
       </div>`,
       `<div class="row  mt-4 pb-3">
      	<div class="col col-sm-4 col-12 pr-sm-5 pl-sm-5">
	      	<div class="custom-control custom-radio custom-radio--large custom-control-inline">
			  <input type="radio" id="CustomRadionLarge" name="CustomRadio3" class="custom-control-input">
			  <label class="custom-control-label" for="CustomRadionLarge">Yes</label>
			</div>
			<div class="component_content__demo__description">Radio button default state</div>
        </div>
        <div class="col col-sm-4 col-12 pr-sm-5 pl-sm-5">
	      	<div class="custom-control custom-radio custom-radio--large custom-control-inline">
			  <input type="radio" id="CustomRadionLarge2" name="CustomRadio3" class="custom-control-input" checked="checked">
			  <label class="custom-control-label" for="CustomRadionLarge2">Yes</label>
			</div>
			<div class="component_content__demo__description">Radio button checked</div>
        </div>        
        <div class="col col-sm-4 col-12 pr-sm-5 pl-sm-5">
	      	<div class="custom-control custom-radio custom-radio--large custom-control-inline">
			  <input type="radio" id="CustomRadionLarge4" name="CustomRadio4" class="custom-control-input">
			  <label class="custom-control-label" for="CustomRadionLarge4">Yes</label>
			</div>
			<div class="custom-control custom-radio custom-radio--large custom-control-inline">
			  <input type="radio" id="CustomRadionLarge6" name="CustomRadio4" class="custom-control-input">
			  <label class="custom-control-label" for="CustomRadionLarge6">No</label>
			</div>
			<div class="component_content__demo__description">Example of Radio button options</div>
        </div>
       </div>`,
       `<div class="row  mt-4 pb-3">
      	<div class="col col-sm-4 col-12 pr-sm-5 pl-sm-5">
	      	<div class="custom-control custom-radio custom-radio--large custom-radio--negative custom-control-inline">
			  <input type="radio" id="CustomRadionLarge9" name="CustomRadio3" class="custom-control-input">
			  <label class="custom-control-label" for="CustomRadionLarge9">Yes</label>
			</div>
			<div class="component_content__demo__description">Radio button default state</div>
        </div>
        <div class="col col-sm-4 col-12 pr-sm-5 pl-sm-5">
	      	<div class="custom-control custom-radio custom-radio--large custom-radio--negative custom-control-inline">
			  <input type="radio" id="CustomRadionLarge10" name="CustomRadio3" class="custom-control-input" checked="checked">
			  <label class="custom-control-label" for="CustomRadionLarge10">Yes</label>
			</div>
			<div class="component_content__demo__description">Radio button checked</div>
        </div>        
        <div class="col col-sm-4 col-12 pr-sm-5 pl-sm-5">
	      	<div class="custom-control custom-radio custom-radio--large custom-radio--negative custom-control-inline">
			  <input type="radio" id="CustomRadionLarge7" name="CustomRadio6" class="custom-control-input">
			  <label class="custom-control-label" for="CustomRadionLarge7">Yes</label>
			</div>
			<div class="custom-control custom-radio custom-radio--large custom-radio--negative custom-control-inline">
			  <input type="radio" id="CustomRadionLarge8" name="CustomRadio6" class="custom-control-input" checked="checked">
			  <label class="custom-control-label" for="CustomRadionLarge8">No</label>
			</div>
			<div class="component_content__demo__description">Example of Radio button options</div>
        </div>
       </div>`,

    ];


    this.codeSnippets = [

`<label for="city">City</label>
<input type="text" class="form-control" id="city" aria-describedby="city" placeholder="City">
<label for="city">City</label>
<input type="text" class="form-control" id="city" aria-describedby="city" value="Houston">
<label for="city">City</label>
<input disabled type="text" class="form-control" id="city" aria-describedby="city" placeholder="City">`,

`<div class="input-group input-group--quicksearch">
	<input type="text" class="form-control" placeholder="Enter address, city or zip code" aria-label="Enter address, city or zip code" aria-describedby="basic-addon2">
	<div class="input-group-append">
	    <button class="btn btn-prominent" type="button"><img class="pl-2 pr-2" src="https://content.harstatic.com/resource_2019/imgs/home/search_white_small.svg"></button>
	</div>	          
</div>`,

`<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline1" name="CustomRadio" class="custom-control-input">
  <label class="custom-control-label" for="customRadioInline1">Yes</label>
</div>`,

`<div class="custom-control custom-radio custom-radio--large custom-control-inline">
  <input type="radio" id="CustomRadionLarge10" name="CustomRadio3" class="custom-control-input" checked="checked">
  <label class="custom-control-label" for="CustomRadionLarge10">Yes</label>
</div>`,

`<div class="custom-control custom-radio custom-radio--large custom-radio--negative custom-control-inline">
  <input type="radio" id="CustomRadionLarge10" name="CustomRadio3" class="custom-control-input" checked="checked">
  <label class="custom-control-label" for="CustomRadionLarge10">Yes</label>
</div>`
			
    ];

  }

  render(){
    return (
      <TemplateDefault
        pageTitle="Forms"
        activeParent="components"
        activeChild="forms">

        <TemplateComponentBlock blockTitle="Input" elements={this.elements[0]} codeSnippets={this.codeSnippets[0]} />
        <TemplateComponentBlock blockTitle="Search Input" elements={this.elements[1]} codeSnippets={this.codeSnippets[1]} />
        <TemplateComponentBlock blockTitle="Radio Button" elements={this.elements[2]} codeSnippets={this.codeSnippets[2]} />
        <TemplateComponentBlock blockTitle="Radio Button Large" elements={this.elements[3]} codeSnippets={this.codeSnippets[3]} />
        <TemplateComponentBlock blockTitle="Radio Button Large Negative" elements={this.elements[4]} codeSnippets={this.codeSnippets[4]} />

      </TemplateDefault>
    )
  }

}
