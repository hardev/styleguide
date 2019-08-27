import React, {Component} from "react";
import TemplateDefault from '../../components/TemplateDefault';
import TemplateComponentBlock from '../../components/TemplateComponentBlock';

export default class FilterPill extends Component {

  constructor(props) {
    super(props);

    this.elements = [`
    <div class="row">
      	<div class="col col-3">
	      	<button class="filterpill" title="">Price</button>		    
          <div class="clearfix"></div>
		  <div class="component_content__demo__description">Default</div>
        </div>
        
        <div class="col col-3">
	      	<button class="filterpill filterpill--active" title="">$50k – $250k</button>		    
          <div class="clearfix"></div>
		  <div class="component_content__demo__description">Value filtered</div>
        </div>
        
        <div class="col col-3">
	      	<button class="filterpill filterpill--all" title="">All filters <span>6</span></button>		    
          <div class="clearfix"></div>
		  <div class="component_content__demo__description">Multiple filters in use</div>
        </div>
        
        <div class="col col-3">
	      	<button class="filterpill" title="" disabled>Price</button>		    
          <div class="clearfix"></div>
		  <div class="component_content__demo__description">Disabled</div>
        </div>
    </div>`,
    ];


    this.codeSnippets = [

`<!-- Filter Pill Default -->
<button class="filterpill" title="">Price</button>

<!-- Filter Pill Value filtered -->
<button class="filterpill filterpill--active" title="">$50k – $250k</button>

<!-- Filter Pill Multiple filters in use -->
<button class="filterpill filterpill--all" title="">All filters <span>6</span></button>	

<!-- Filter Pill Disabled -->
<button class="filterpill" title="" disabled>Price</button>
`,
    ];

  }

  render(){
    return (
      <TemplateDefault
        pageTitle="Filter Pills"
        activeParent="components"
        activeChild="filter_pills">

        <TemplateComponentBlock blockTitle="Filter Pill variations" elements={this.elements[0]} codeSnippets={this.codeSnippets[0]} />
        
      </TemplateDefault>
    )
  }

}



