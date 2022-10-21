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
    </div>
    <div class="row mt-4">
      <div class="col col-3">
        <div class="filterpill filterpill--closeable">
        	Kip Collison
        	<a href="#"></a>
        </div>
        <div class="clearfix"></div>
        <div class="component_content__demo__description">Closable Pill</div>
      </div>
      
      <div class="col col-3">
        <div class="filterpill filterpill--transparent">
        	Price 110K - 130K
        	<a href="#"></a>
        </div>
        <div class="clearfix"></div>
        <div class="component_content__demo__description">Closable Pill</div>
      </div>
      
      <div class="col col-3">
        <button class="iconpill" title="" aria-label="Filter by price disabled">Add to Folder  <span><img src="https://content.harstatic.com/media/icons/forbuttons/buttons-save-search.svg"></span></button>
        <div class="clearfix"></div>
        <div class="component_content__demo__description">Icon Pill</div>
      </div>
      <div class="col col-3">
        <button class="iconpill iconpill__icon iconpill__icon__mobile_shrink" title="" aria-label="Filter by price disabled"><div class="iconpill__icon__img"><img src="https://content.harstatic.com/media/icons/dollor_with_harblue.svg"></div> <div class="iconpill__icon__text hide_text_resp">Price</div></button>
        <div class="clearfix"></div>
        <div class="component_content__demo__description">Icon Pill</div>
      </div>
      <div class="col col-3">
        <button class="iconpill iconpill__icon iconpill__icon__mobile_shrink" title="" aria-label="Filter by price disabled"><div class="iconpill__icon__img"><img src="https://content.harstatic.com/media/icons/filters_icon_for_search.svg"></div> <div class="iconpill__icon__text hide_text_resp">Filters</div></button>
        <div class="clearfix"></div>
        <div class="component_content__demo__description">Icon Pill</div>
      </div>
      
      <div class="col col-3">
        <button class="iconpill iconpill__icon" title="" aria-label="Filter by price disabled"><div class="iconpill__icon__img"><img src="https://content.harstatic.com/media/icons/icon-saved-searches-blue.svg"></div><div class="iconpill__icon__text"> Save Search</div></button>
        <div class="clearfix"></div>
        <div class="component_content__demo__description">Icon Pill</div>
      </div>
      
      
    </div>
    <div class="row mt-4">
      <div class="col col-3">
        <div class="folder folder--closeable">
        	For my family!
        	<a class="folder--closeable_close" href="#"></a>
        </div>
        <div class="clearfix"></div>
        <div class="component_content__demo__description">Folder Pill</div>
      </div>
      <div class="col col-3">
        <div class="folder folder--closeable folder__withicon">
        	Big Houses
        	<a class="folder--closeable_close" href="#"></a>
        </div>
        <div class="clearfix"></div>
        <div class="component_content__demo__description">Folder Pill</div>
      </div>
      <div class="col col-6">
        <div class="pill pill--location">
        	Houston
        	<a class="folder--closeable_close" href="#"></a>
        </div>
        <div class="pill pill--location">
        	Austin
        	<a class="folder--closeable_close" href="#"></a>
        </div>
        <div class="clearfix"></div>
        <div class="component_content__demo__description">Folder Pill</div>
      </div>
      
      <div class="col col-6">
        <div class="pill pill--filters">
        	Houston
        	<a class="folder--closeable_close" href="#"></a>
        </div>
        <div class="pill pill--filters">
        	Austin
        	<a class="folder--closeable_close" href="#"></a>
        </div>
        <div class="clearfix"></div>
        <div class="component_content__demo__description">Folder Pill</div>
      </div>
      
    </div>
    
    <div class="row mb-5">
      <div class="col-12">
	      <div class="alphabets_filter">
	        <ul>
				<li><a href="#">A</a></li>
				<li><a href="#">B</a></li>
				<li><a class="active" href="#">C</a></li>
				<li><a href="#">D</a></li>
				<li><a class="disable" href="#">E</a></li>
				<li><a href="#">F</a></li>
				<li><a href="#">G</a></li>
				<li><a href="#">H</a></li>
				<li><a href="#">I</a></li>
				<li><a href="#">J</a></li>
				<li><a class="disable" href="#">K</a></li>
				<li><a class="disable" href="#">L</a></li>
				<li><a href="#">M</a></li>
				<li><a href="#">N</a></li>
				<li><a href="#">O</a></li>
				<li><a href="#">P</a></li>
				<li><a href="#">Q</a></li>
				<li><a href="#">R</a></li>
				<li><a href="#">S</a></li>
				<li><a href="#">T</a></li>
				<li><a href="#">U</a></li>
				<li><a href="#">W</a></li>
				<li><a href="#">X</a></li>
				<li><a href="#">Y</a></li>
				<li><a href="#">Z</a></li>
			</ul>
		  </div>
		  
      </div>
      
    </div>
    `,
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

<!-- Filter Pill closeable -->
<div class="filterpill filterpill--closeable">
    Kip Collison
    <a href="#"></a>
</div>

<!-- Folder Pill closeable -->
<div class="folder folder--closeable">
	For my family!
	<a href="#"><img src="https://content.harstatic.com/media/icons/close_white_small.svg"></a>
</div>

<!-- Alphabet Filters -->
<div class="alphabets_filter">
    <ul>
		<li><a href="#">A</a></li>
		<li><a href="#">B</a></li>
		<li><a class="active" href="#">C</a></li>
		<li><a href="#">D</a></li>
		<li><a class="disable" href="#">E</a></li>
		<li><a href="#">F</a></li>
		<li><a href="#">G</a></li>
		<li><a href="#">H</a></li>
		<li><a href="#">I</a></li>
		<li><a href="#">J</a></li>
		<li><a class="disable" href="#">K</a></li>
		<li><a class="disable" href="#">L</a></li>
		<li><a href="#">M</a></li>
		<li><a href="#">N</a></li>
		<li><a href="#">O</a></li>
		<li><a href="#">P</a></li>
		<li><a href="#">Q</a></li>
		<li><a href="#">R</a></li>
		<li><a href="#">S</a></li>
		<li><a href="#">T</a></li>
		<li><a href="#">U</a></li>
		<li><a href="#">W</a></li>
		<li><a href="#">X</a></li>
		<li><a href="#">Y</a></li>
		<li><a href="#">Z</a></li>
	</ul>
  </div>
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
