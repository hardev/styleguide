import React, {Component} from "react";
import TemplateDefault from '../../components/TemplateDefault';
import TemplateComponentBlock from '../../components/TemplateComponentBlock';

export default class FilterPill extends Component {

  constructor(props) {
    super(props);

    this.elements = [`
    <div class="row">
      <div class="col col-3">
        <button class="filterpill" aria-label="Filter by price">Price</button>
        <div class="clearfix"></div>
        <div class="component_content__demo__description">Default</div>
      </div>

      <div class="col col-3">
        <button class="filterpill filterpill--active" aria-label="Filtered by price: $50k – $250k">$50k – $250k</button>
        <div class="clearfix"></div>
        <div class="component_content__demo__description">Value filtered</div>
      </div>

      <div class="col col-3">
        <button class="filterpill filterpill--all" aria-label="View all filters">All filters <span>6</span></button>
        <div class="clearfix"></div>
        <div class="component_content__demo__description">Multiple filters in use</div>
      </div>

      <div class="col col-3">
        <button class="filterpill" title="" disabled aria-label="Filter by price disabled">Price</button>
        <div class="clearfix"></div>
        <div class="component_content__demo__description">Disabled</div>
      </div>
    </div>`,
    ];


    this.codeSnippets = [

`<!-- Filter Pill default -->
<button class="filterpill" aria-label="Filter by price">Price</button>

<!-- Filter Pill Value filtered -->
<button class="filterpill filterpill--active" aria-label="Filtered by price: $50k – $250k">$50k – $250k</button>

<!-- Multiple filters in use -->
<button class="filterpill filterpill--all" aria-label="View all filters">All filters <span>6</span></button>

<!-- Filter Pill disabled -->
<button class="filterpill" title="" disabled aria-label="Filter by price disabled">Price</button>
`,
    ];

  }

  render(){
    return (
      <TemplateDefault
        pageTitle="Filter Pills"
        activeParent="components"
        activeChild="filter_pills">

        <TemplateComponentBlock blockTitle="Variations" elements={this.elements[0]} codeSnippets={this.codeSnippets[0]} />

      </TemplateDefault>
    )
  }

}
