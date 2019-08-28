import jQuery from 'jquery'

import React, {Component} from "react";
import TemplateDefault from '../../components/TemplateDefault';
import TemplateComponentBlock from '../../components/TemplateComponentBlock';

export default class Popovers extends Component {
  
  componentDidMount() {
		
	jQuery('.filterpill').on('click.popover', function() {
		jQuery('#SelectPrice').fadeIn();
	}) 
		
  }//componentDidMount() {
  
  componentWillUnmount() {
	  
	jQuery('.filterpill').off('.popover')
  
  }//componentWillUnmount() {
  
  constructor(props) {
    super(props);

    this.elements = [`
    <div class="row">
      	<div class="col col-12 pr-sm-5 pl-sm-5">
	      	<button class="filterpill" data-toggle="popover" data-placement="bottom" data-content="#SelectPrice" title="" aria-describedby="SelectPrice">Price</button>
	      	<div id="SelectPrice" class="popover popover--standard popover--standard_large fade" role="tooltip">
	      		<h3 class="popover-header text-uppercase text-center">Price</h3>
	      		<div class="popover-body">
			        Des Perdai
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
<div class="popover popover--normal popover--normal_large depth depth--above_all" role="tooltip" style="position:static;">
		<h3 class="popover-header">Price</h3>
		<div class="popover-body">
        Des Perdai
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

        <TemplateComponentBlock blockTitle="Input" elements={this.elements[0]} codeSnippets={this.codeSnippets[0]} />
        
      </TemplateDefault>
    )
  }

}



