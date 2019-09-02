import React, {Component} from "react";
import TemplateDefault from '../../components/TemplateDefault';
import TemplateComponentBlock from '../../components/TemplateComponentBlock';

export default class Popovers extends Component {

  constructor(props) {
    super(props);

    this.elements = [`
    <div class="row">
      	<div class="col col-12 pr-sm-5 pl-sm-5">
		    <div class="position-wrapper">
		      	<button class="filterpill toggle-popover" data-popover="SelectPrice" data-placement="bottom" data-target="SelectPrice" title="" aria-describedby="SelectPrice">Open Popover</button>
	 	      	<div id="SelectPrice" class="popover popover--standard popover--standard_large" role="tooltip" style="display:none;">
		      		<h3 class="popover-header text-uppercase text-center">Price</h3>
		      		<div class="popover-body">
				        Auto Expand and Auto Scroll
			        </div>
			    </div>
			</div>
		    <div class="clearfix"></div>
		    <div class="component_content__demo__description">Popover Normal Large</div>
        </div>

        <div class="col col-sm-6 col-12 pr-sm-5 pl-sm-5">

        </div>

    </div>`
    ,
    `
    <div class="row">
      	<div class="col col-12 pr-sm-5 pl-sm-5">
		    <div class="position-wrapper">
		      	<button class="filterpill toggle-popover" data-popover="Filters" data-placement="bottom" data-target="Filters" title="" aria-describedby="SelectPrice">Open Popover</button>
	 	      	<div id="Filters" class="popover popover--standard popover--standard_large" role="tooltip" style="display:none;">
		      		<h3 class="popover-header text-uppercase text-center">Price</h3>
		      		<div class="popover-body">
				        Auto Expand and Auto Scroll
			        </div>
			        <div class="popover-footer text-right">
		        		<button role="button" class="btn btn--shapeless btn--medium" aria-label="Search">Reset</button>
						<button role="button" class="btn btn--primary btn--medium">View 2,030 homes</button>
			        </div>
			    </div>
			</div>
		    <div class="clearfix"></div>
		    <div class="component_content__demo__description">Popover Normal Large (with footer)</div>
        </div>

        <div class="col col-sm-6 col-12 pr-sm-5 pl-sm-5">

        </div>
    </div>
	`,
    `<div class="row">
      	<div class="col col-4 pr-sm-5 pl-sm-5">
		    <div class="position-wrapper">
		      	<button class="custom-select custom-select_large toggle-popover" data-popover="Bedrooms" data-target="Bedrooms" data-placement="bottom" title="" aria-describedby="SelectPrice">Bedrooms</button>
	 	      	<div id="Bedrooms" class="popover popover--shapeless" role="tooltip" style="display:none;">
		      		<a class="popover--shapeless_close" href="javascript:void(0);"><img src="https://content.harstatic.com/resource_2019/imgs/icons/cross_gray_small.svg"></a>
		      		<h3 class="popover-header text-uppercase text-center">Price</h3>
		      		<div class="popover-body text-center">
				        Up to 4 bathrooms
				        <ul class="range">
				        	<li class="range--item"><span>1</span></li>
				        	<li class="range--item range--item_min"><span>2</span></li>
				        	<li class="range--item range--item_range"><span>3</span></li>
				        	<li class="range--item range--item_range"><span>4</span></li>
				        	<li class="range--item range--item_max"><span>5</span></li>
				        	<li class="range--item"><span>6 +</span></li>
				        </ul>
			        </div>
			    </div>
			</div>
		    <div class="clearfix"></div>
		    <div class="component_content__demo__description">Popover Normal Large</div>
        </div>

        <div class="col col-sm-6 col-12 pr-sm-5 pl-sm-5">

        </div>

    </div>`,
    ];


    this.codeSnippets = [

`<!-- Popover Normal Large -->
<div class="position-wrapper">
  	<button class="filterpill toggle-popover" data-popover="SelectPrice" data-placement="bottom" data-target="SelectPrice" title="" aria-describedby="SelectPrice">Price</button>
      	<div id="SelectPrice" class="popover popover--standard popover--standard_large" role="tooltip" style="display:none;">
  		<h3 class="popover-header text-uppercase text-center">Price</h3>
  		<div class="popover-body">
	        Auto Expand and Auto Scroll
        </div>
    </div>
</div>`,`
<div class="position-wrapper">
  	<button class="filterpill toggle-popover" data-popover="Filters" data-placement="bottom" data-target="Filters" title="" aria-describedby="SelectPrice">Open Popover with Footer</button>
      	<div id="Filters" class="popover popover--standard popover--standard_large" role="tooltip" style="display:none;">
  		<h3 class="popover-header text-uppercase text-center">Price</h3>
  		<div class="popover-body">
	        Auto Expand and Auto Scroll
        </div>
        <div class="popover-footer text-right">
    		<button role="button" class="btn btn--shapeless btn--medium" aria-label="Search">Reset</button>
			<button role="button" class="btn btn--primary btn--medium">View 2,030 homes</button>
        </div>
    </div>
</div>
`,
`<!-- Popover Normal Large -->
<div class="position-wrapper">
  	<button class="custom-select custom-select_large toggle-popover" data-popover="Bedrooms" data-target="Bedrooms" data-placement="bottom" title="" aria-describedby="SelectPrice">Bedrooms</button>
      	<div id="Bedrooms" class="popover popover--shapeless" role="tooltip" style="display:none;">
  		<a class="popover--shapeless_close" href="javascript:void(0);"><img src="https://content.harstatic.com/resource_2019/imgs/icons/cross_gray_small.svg"></a>
  		<h3 class="popover-header text-uppercase text-center">Price</h3>
  		<div class="popover-body text-center">
	        Up to 4 bathrooms
	        <ul class="range">
	        	<li class="range--item"><span>1</span></li>
	        	<li class="range--item range--item_min"><span>2</span></li>
	        	<li class="range--item range--item_range"><span>3</span></li>
	        	<li class="range--item range--item_range"><span>4</span></li>
	        	<li class="range--item range--item_max"><span>5</span></li>
	        	<li class="range--item"><span>6 +</span></li>
	        </ul>
        </div>
    </div>
</div>`,
    ];

  }

  render(){
    return (
      <TemplateDefault
        pageTitle="Popovers"
        activeParent="components"
        activeChild="popovers">

        <TemplateComponentBlock blockTitle="Popover standard" elements={this.elements[0]} codeSnippets={this.codeSnippets[0]} />
        <TemplateComponentBlock blockTitle="Popover standard with Footer" elements={this.elements[1]} codeSnippets={this.codeSnippets[1]} />
        <TemplateComponentBlock blockTitle="Popover shapeless" elements={this.elements[2]} codeSnippets={this.codeSnippets[2]} />

      </TemplateDefault>
    )
  }

}
