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
		    <a class="nav-link d-flex" id="RecentlySold-tab" data-toggle="tab" href="#RecentlySold" role="tab" aria-controls="contact" aria-selected="false"><img class="mr-2" src="https://content.harstatic.com/media/icons/star_pink2.svg">Recently Sold</a>
		  </li>
		</ul>
		<div class="tab-content" id="myTabContent">
		  <div class="tab-pane fade show active" id="ForRent" role="tabpanel" aria-labelledby="ForRent-tab"><br><br>{ Tab: For Rent tab content placeholder }<br><br><br></div>
		  <div class="tab-pane fade" id="ForSale" role="tabpanel" aria-labelledby="ForSale-tab"><br><br>{ Tab: For Sale tab content placeholder }<br><br><br></div>
		  <div class="tab-pane fade" id="RecentlyRented" role="tabpanel" aria-labelledby="RecentlyRented-tab"><br><br>{ Tab: Recently Rented tab content placeholder }<br><br><br></div>
		  <div class="tab-pane fade" id="RecentlySold" role="tabpanel" aria-labelledby="RecentlySold-tab"><br><br>{ Tab: Recently Sold tab content placeholder }<br><br><br></div>
		</div>
		
		<div class="col col-10 pt-4">
          <ul class="nav nav-tabs nav-tabs--underline nav-tabs--bold" id="myTab" role="tablist">
			  <li class="nav-item">
			    <a class="nav-link active" id="ForRent-tab" data-toggle="tab" href="#ForRent" role="tab" aria-controls="home" aria-selected="true">For Rent</a>
			  </li>
			  <li class="nav-item">
			    <a class="nav-link" id="ForSale-tab" data-toggle="tab" href="#ForSale" role="tab" aria-controls="profile" aria-selected="false">For Sale</a>
			  </li>
		  </ul>
		
		
          <div class="component_content__demo__description">Underline Style</div>
        </div>
        
        <div class="col col-10 pt-4">
          <ul class="nav nav-tabs nav-tabs--underline nav-tabs--fullwidth" id="myTab" role="tablist">
			  <li class="nav-item">
			    <a class="nav-link active" id="ForRent-tab" data-toggle="tab" href="#ForRent" role="tab" aria-controls="home" aria-selected="true">For Rent</a>
			  </li>
			  <li class="nav-item">
			    <a class="nav-link" id="ForSale-tab" data-toggle="tab" href="#ForSale" role="tab" aria-controls="profile" aria-selected="false">For Sale</a>
			  </li>
		  </ul>
		
		
          <div class="component_content__demo__description">Underline Style</div>
        </div>
        
		<div class="row">        
	        <div class="col col-10 pt-4">
	          <ul class="nav nav-tabs nav-tabs--underline" id="myTab" role="tablist">
			  <li class="nav-item">
			    <a class="nav-link active" id="ListingDetails-tab" data-toggle="tab" href="#ListingDetails" role="tab" aria-controls="contact" aria-selected="false">Listing Details</a>
			  </li>
			  <li class="nav-item">
			    <a class="nav-link d-flex" id="MLSSubscriberInfo-tab" data-toggle="tab" href="#MLSSubscriberInfo" role="tab" aria-controls="contact" aria-selected="false"><img class="mr-2" src="https://content.harstatic.com/media/icons/star_pink2.svg">MLS Subscriber Info</a>
			  </li>
			</ul>
			<div class="tab-content" id="myTabContent">
			  <div class="tab-pane fade show active" id="ListingDetails" role="tabpanel" aria-labelledby="ListingDetails-tab"><br><br>{ Tab: For ListingDetails tab content placeholder }<br><br><br></div>
			  <div class="tab-pane fade" id="MLSSubscriberInfo" role="tabpanel" aria-labelledby="MLSSubscriberInfo-tab"><br><br>{ Tab: MLSSubscriberInfo tab content placeholder }<br><br><br></div>
			</div>
	    </div>
        `,
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
        </div>`,
        `<div class="row justify-content-center">
        <div class="col col-10 pt-4">
          <ul class="nav nav-tabs nav-tabs--pink justify-content-center" id="myTab" role="tablist">
		  <li class="nav-item">
		    <a class="nav-link active" id="ForRent-tab" data-toggle="tab" href="#ForRent" role="tab" aria-controls="home" aria-selected="true">Buy</a>
		  </li>
		  <li class="nav-item">
		    <a class="nav-link" id="ForSale-tab" data-toggle="tab" href="#ForSale" role="tab" aria-controls="profile" aria-selected="false">Rent</a>
		  </li>
		  <li class="nav-item">
		    <a class="nav-link" id="RecentlyRented-tab" data-toggle="tab" href="#RecentlyRented" role="tab" aria-controls="contact" aria-selected="false">Home Values</a>
		  </li>
		  <li class="nav-item">
		    <a class="nav-link" id="RecentlySold-tab" data-toggle="tab" href="#RecentlySold" role="tab" aria-controls="contact" aria-selected="false">Schools</a>
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
        `<div class="row justify-content-center">
        <div class="col col-10 pt-4">
          <ul class="nav nav-tabs nav-tabs--filters" id="myTab" role="tablist">
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
        `<div class="row justify-content-center">
        <div class="col col-10 pt-4">
          <ul class="nav nav-tabs nav-tabs--solid" id="myTab" role="tablist">
		  <li class="nav-item">
		    <a class="nav-link active" id="ForRent-tab" data-toggle="tab" href="#ForRent" role="tab" aria-controls="home" aria-selected="true">Listing Details</a>
		  </li>
		  <li class="nav-item">
		    <a class="nav-link" id="ForSale-tab" data-toggle="tab" href="#ForSale" role="tab" aria-controls="profile" aria-selected="false">MLS Subscriber Info</a>
		  </li>
		</ul>
		<div class="tab-content" id="myTabContent">
		  <div class="tab-pane fade show active" id="ForRent" role="tabpanel" aria-labelledby="ForRent-tab"><br><br>{ Tab: For Rent tab content placeholder }<br><br><br></div>
		  <div class="tab-pane fade" id="ForSale" role="tabpanel" aria-labelledby="ForSale-tab"><br><br>{ Tab: For Sale tab content placeholder }<br><br><br></div>
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
`<!-- tabs simple with pink selected -->`,
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
        <TemplateComponentBlock blockTitle="Tabs pink underline" elements={this.elements[3]} codeSnippets={this.codeSnippets[3]} />
        <TemplateComponentBlock blockTitle="Tabs used in Filters" elements={this.elements[4]} codeSnippets={this.codeSnippets[4]} />
        <TemplateComponentBlock blockTitle="Tabs used in listing details" elements={this.elements[5]} codeSnippets={this.codeSnippets[5]} />


      </TemplateDefault>
    )
  }

}
