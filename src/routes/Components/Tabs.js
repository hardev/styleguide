import React, {Component} from "react";
import TemplateDefault from '../../components/TemplateDefault';
import TemplateComponentBlock from '../../components/TemplateComponentBlock';

export default class Tabs extends Component {

  constructor(props) {
    super(props);

    this.elements = [
      `<div class="row justify-content-center">
        <div class="col col-10 pt-4">
          <ul class="nav nav-tabs nav-tabs--underline" id="myTab" role="tablist">
		  <li class="nav-item">
		    <a class="nav-link active" id="ForRent-tab" data-toggle="tab" href="#ForRent" role="tab" aria-controls="home" aria-selected="true">For Rent<span>2</span></a>
		  </li>
		  <li class="nav-item">
		    <a class="nav-link" id="ForSale-tab" data-toggle="tab" href="#ForSale" role="tab" aria-controls="profile" aria-selected="false">For Sale</a>
		  </li>
		  <li class="nav-item">
		    <a class="nav-link" id="RecentlyRented-tab" data-toggle="tab" href="#RecentlyRented" role="tab" aria-controls="contact" aria-selected="false">Recently Rented</a>
		  </li>
		  <li class="nav-item">
		    <a class="nav-link" id="RecentlySold-tab" data-toggle="tab" href="#RecentlySold" role="tab" aria-controls="contact" aria-selected="false">Recently Sold</a>
		  </li>
		</ul>
		<div class="tab-content" id="myTabContent">
		  <div class="tab-pane fade show active" id="ForRent" role="tabpanel" aria-labelledby="ForRent-tab"><br><br>{ Tab: For Rent tab content placeholder }<br><br><br></div>
		  <div class="tab-pane fade" id="ForSale" role="tabpanel" aria-labelledby="ForSale-tab"><br><br>{ Tab: For Sale tab content placeholder }<br><br><br></div>
		  <div class="tab-pane fade" id="RecentlyRented" role="tabpanel" aria-labelledby="RecentlyRented-tab"><br><br>{ Tab: Recently Rented tab content placeholder }<br><br><br></div>
		  <div class="tab-pane fade" id="RecentlySold" role="tabpanel" aria-labelledby="RecentlySold-tab"><br><br>{ Tab: Recently Sold tab content placeholder }<br><br><br></div>
		</div>
          <div class="component_content__demo__description">Underline Style</div>
        </div>`,
        `<div class="component_content__negative_content">
        <div class="row justify-content-center">
        <div class="col col-10 pt-4">
          <ul class="nav nav-tabs nav-tabs--negative" id="myTab" role="tablist">
		  <li class="nav-item">
		    <a class="nav-link active" id="ForRent-tab" data-toggle="tab" href="#ForRent" role="tab" aria-controls="home" aria-selected="true">For Rent<span>2</span></a>
		  </li>
		  <li class="nav-item">
		    <a class="nav-link" id="ForSale-tab" data-toggle="tab" href="#ForSale" role="tab" aria-controls="profile" aria-selected="false">For Sale</a>
		  </li>
		  <li class="nav-item">
		    <a class="nav-link" id="RecentlyRented-tab" data-toggle="tab" href="#RecentlyRented" role="tab" aria-controls="contact" aria-selected="false">Recently Rented</a>
		  </li>
		  <li class="nav-item">
		    <a class="nav-link" id="RecentlySold-tab" data-toggle="tab" href="#RecentlySold" role="tab" aria-controls="contact" aria-selected="false">Recently Sold</a>
		  </li>
		</ul>
		<div class="tab-content" id="myTabContent">
		  <div class="tab-pane fade show active color_snow_white" id="ForRent" role="tabpanel" aria-labelledby="ForRent-tab"><br><br>{ Tab: For Rent tab content placeholder }<br><br><br></div>
		  <div class="tab-pane fade color_snow_white" id="ForSale" role="tabpanel" aria-labelledby="ForSale-tab"><br><br>{ Tab: For Sale tab content placeholder }<br><br><br></div>
		  <div class="tab-pane fade color_snow_white" id="RecentlyRented" role="tabpanel" aria-labelledby="RecentlyRented-tab"><br><br>{ Tab: Recently Rented tab content placeholder }<br><br><br></div>
		  <div class="tab-pane fade color_snow_white" id="RecentlySold" role="tabpanel" aria-labelledby="RecentlySold-tab"><br><br>{ Tab: Recently Sold tab content placeholder }<br><br><br></div>
		</div>
          <div class="component_content__demo__description">Underline Style</div>
        </div>`,
        `<div class="row justify-content-center">
        <div class="col col-10 pt-4">
          <ul class="nav nav-tabs nav-tabs--simple" id="myTab" role="tablist">
		  <li class="nav-item">
		    <a class="nav-link active" id="ForRent-tab" data-toggle="tab" href="#ForRent" role="tab" aria-controls="home" aria-selected="true">For Rent</a>
		  </li>
		  <li class="nav-item">
		    <a class="nav-link" id="ForSale-tab" data-toggle="tab" href="#ForSale" role="tab" aria-controls="profile" aria-selected="false">For Sale</a>
		  </li>
		  <li class="nav-item">
		    <a class="nav-link" id="RecentlyRented-tab" data-toggle="tab" href="#RecentlyRented" role="tab" aria-controls="contact" aria-selected="false">Recently Rented</a>
		  </li>
		  <li class="nav-item">
		    <a class="nav-link" id="RecentlySold-tab" data-toggle="tab" href="#RecentlySold" role="tab" aria-controls="contact" aria-selected="false">Recently Sold</a>
		  </li>
		</ul>
		<div class="tab-content" id="myTabContent">
		  <div class="tab-pane fade show active" id="ForRent" role="tabpanel" aria-labelledby="ForRent-tab"><br><br>{ Tab: For Rent tab content placeholder }<br><br><br></div>
		  <div class="tab-pane fade" id="ForSale" role="tabpanel" aria-labelledby="ForSale-tab"><br><br>{ Tab: For Sale tab content placeholder }<br><br><br></div>
		  <div class="tab-pane fade" id="RecentlyRented" role="tabpanel" aria-labelledby="RecentlyRented-tab"><br><br>{ Tab: Recently Rented tab content placeholder }<br><br><br></div>
		  <div class="tab-pane fade" id="RecentlySold" role="tabpanel" aria-labelledby="RecentlySold-tab"><br><br>{ Tab: Recently Sold tab content placeholder }<br><br><br></div>
		</div>
          <div class="component_content__demo__description">Underline Style</div>
        </div>
        </div>	`,

    ];


    this.codeSnippets = [
`<ul class="nav nav-tabs nav-tabs--underline" id="myTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="ForRent-tab" data-toggle="tab" href="#ForRent" role="tab" aria-controls="home" aria-selected="true">For Rent</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="ForSale-tab" data-toggle="tab" href="#ForSale" role="tab" aria-controls="profile" aria-selected="false">For Sale</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="RecentlyRented-tab" data-toggle="tab" href="#RecentlyRented" role="tab" aria-controls="contact" aria-selected="false">Recently Rented</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="RecentlySold-tab" data-toggle="tab" href="#RecentlySold" role="tab" aria-controls="contact" aria-selected="false">Recently Sold</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="ForRent" role="tabpanel" aria-labelledby="ForRent-tab">{ Tab: For Rent tab content placeholder }</div>
  <div class="tab-pane fade" id="ForSale" role="tabpanel" aria-labelledby="ForSale-tab">{ Tab: For Sale tab content placeholder }</div>
  <div class="tab-pane fade" id="RecentlyRented" role="tabpanel" aria-labelledby="RecentlyRented-tab">{ Tab: Recently Rented tab content placeholder }</div>
  <div class="tab-pane fade" id="RecentlySold" role="tabpanel" aria-labelledby="RecentlySold-tab">{ Tab: Recently Sold tab content placeholder }</div>
</div>`,
`<ul class="nav nav-tabs nav-tabs--negative" id="myTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="ForRent-tab" data-toggle="tab" href="#ForRent" role="tab" aria-controls="home" aria-selected="true">For Rent<span>2</span></a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="ForSale-tab" data-toggle="tab" href="#ForSale" role="tab" aria-controls="profile" aria-selected="false">For Sale</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="RecentlyRented-tab" data-toggle="tab" href="#RecentlyRented" role="tab" aria-controls="contact" aria-selected="false">Recently Rented</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="RecentlySold-tab" data-toggle="tab" href="#RecentlySold" role="tab" aria-controls="contact" aria-selected="false">Recently Sold</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active color_snow_white" id="ForRent" role="tabpanel" aria-labelledby="ForRent-tab"><br><br>{ Tab: For Rent tab content placeholder }<br><br><br></div>
  <div class="tab-pane fade color_snow_white" id="ForSale" role="tabpanel" aria-labelledby="ForSale-tab"><br><br>{ Tab: For Sale tab content placeholder }<br><br><br></div>
  <div class="tab-pane fade color_snow_white" id="RecentlyRented" role="tabpanel" aria-labelledby="RecentlyRented-tab"><br><br>{ Tab: Recently Rented tab content placeholder }<br><br><br></div>
  <div class="tab-pane fade color_snow_white" id="RecentlySold" role="tabpanel" aria-labelledby="RecentlySold-tab"><br><br>{ Tab: Recently Sold tab content placeholder }<br><br><br></div>
</div>`,
`<ul class="nav nav-tabs nav-tabs--simple" id="myTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="ForRent-tab" data-toggle="tab" href="#ForRent" role="tab" aria-controls="home" aria-selected="true">For Rent</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="ForSale-tab" data-toggle="tab" href="#ForSale" role="tab" aria-controls="profile" aria-selected="false">For Sale</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="RecentlyRented-tab" data-toggle="tab" href="#RecentlyRented" role="tab" aria-controls="contact" aria-selected="false">Recently Rented</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="RecentlySold-tab" data-toggle="tab" href="#RecentlySold" role="tab" aria-controls="contact" aria-selected="false">Recently Sold</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="ForRent" role="tabpanel" aria-labelledby="ForRent-tab">{ Tab: For Rent tab content placeholder }</div>
  <div class="tab-pane fade" id="ForSale" role="tabpanel" aria-labelledby="ForSale-tab">{ Tab: For Sale tab content placeholder }</div>
  <div class="tab-pane fade" id="RecentlyRented" role="tabpanel" aria-labelledby="RecentlyRented-tab">{ Tab: Recently Rented tab content placeholder }</div>
  <div class="tab-pane fade" id="RecentlySold" role="tabpanel" aria-labelledby="RecentlySold-tab">{ Tab: Recently Sold tab content placeholder }</div>
</div>`,

``
  ];

  }

  render(){
    return (
      <TemplateDefault
        pageTitle="Tabs"
        activeParent="components"
        activeChild="tabs">

        <TemplateComponentBlock blockTitle="Nav Tabs" elements={this.elements[0]} codeSnippets={this.codeSnippets[0]} />
        <TemplateComponentBlock blockTitle="Nav Tabs Negative" elements={this.elements[1]} codeSnippets={this.codeSnippets[1]} />
        <TemplateComponentBlock blockTitle="Nav Tabs (simple)" elements={this.elements[2]} codeSnippets={this.codeSnippets[2]} />


      </TemplateDefault>
    )
  }

}
