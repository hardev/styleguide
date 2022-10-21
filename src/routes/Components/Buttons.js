import React, {Component} from "react";
import TemplateDefault from '../../components/TemplateDefault';
import TemplateComponentBlock from '../../components/TemplateComponentBlock';

export default class Buttons extends Component {

  constructor(props) {
    super(props);

    this.elements = [
      `<div class="row">
        <div class="col col-sm-3 col-6">
          <button role="button" class="btn btn--primary btn--large__extra">Button</button>
          <div class="component_content__demo__description">Extra Large Button</div>
        </div>

        <div class="col col-sm-3 col-6">
          <button role="button" class="btn btn--primary btn--large">Button</button>
          <div class="component_content__demo__description">Large Button</div>
        </div>

        <div class="col col-sm-3 col-6">
          <button role="button" class="btn btn--primary btn--medium">Button</button>          
          <div class="component_content__demo__description">Medium Button</div>
        </div>

        <div class="col col-sm-3 col-6">
          <button role="button" class="btn btn--primary btn--small">Button</button>
          <div class="component_content__demo__description">Small Button</div>
        </div>

        <div class="clear_both"></div>
      </div>`,

      `<div class="row">
        <div class="col col-sm-3 col-6">
          <button role="button" class="btn btn--primary btn--medium">Button</button>
          <div class="component_content__demo__description">Primary Button</div>
        </div>

        <div class="col col-sm-3 col-6">
          <button role="button" class="btn btn--prominent btn--medium">Button</button>
          <div class="component_content__demo__description">Prominent Button</div>
        </div>

        <div class="col col-sm-3 col-6">
          <button role="button" class="btn btn--ordinary btn--medium">Button</button>
          <div class="component_content__demo__description">Ordinary Button</div>
        </div>

        <div class="col col-sm-3 col-6">
          <button role="button" class="btn btn--shapeless btn--medium">Button</button>
          <div class="component_content__demo__description">Shapeless Button</div>
        </div>
		
        <div class="clear_both"></div>
      </div>

      <hr>

      <div class="row">
        <div class="col col-sm-3 col-6">
          <button role="button" class="btn btn--primary btn--medium" disabled>Button</button>
          <div class="component_content__demo__description">Disabled Button</div>
        </div>

        <div class="col col--dark col-sm-3 col-6">
          <button role="button" class="btn btn--search btn--medium" aria-label="Search"></button>
          <div class="component_content__demo__description">Search Button</div>
        </div>
		
		<div class="col col-sm-3 col-6">
          <button role="button" class="btn btn--simple btn--medium" aria-label="Search">Button</button>
          <div class="component_content__demo__description">Button Simple</div>
        </div>
        
        <div class="col col-sm-3 col-6">
          <button role="button" class="btn btn--flate btn--medium" aria-label="Flate">Button</button>
          <div class="component_content__demo__description">Button Flate with hover bg</div>
        </div>
      </div>
      
      
      `,

      `<div class="row">
        <div class="col col-sm-3 col-6">
          <button role="button" class="btn btn--primary btn--medium btn--withspiner"><span class="spinner-border spinner-border-sm"></span>Button</button>
          <div class="component_content__demo__description">Button with Icon</div>
        </div>
        
        <div class="col col-sm-3 col-6">
          <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--placeholder">Button</button>
          <div class="component_content__demo__description">Button with Icon</div>
        </div>

        <div class="col col-sm-3 col-6">
          <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--placeholder" aria-label="Button"></button>
          <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--placeholder" aria-label="Button"></button>
          <button role="button" class="btn btn--ordinary btn--medium btn--iconbg" aria-label="Button"><span style="background-image: url(https://content.harstatic.com/resource_2019/imgs/icons/heart_outline.svg);"></span></button>
          <div class="component_content__demo__description">Button with Lone Icon</div>
        </div>

        <div class="col col-sm-3 col-6">

          <div class="dropdown">
            <button class="btn btn--ordinary btn--medium dropdown-toggle" type="button" id="buttonWithOptions" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Button
            </button>
            <div class="dropdown-menu depth--standed_out" aria-labelledby="buttonWithOptions">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </div>

          <div class="component_content__demo__description">Button with Options</div>
        </div>

        <div class="col col-sm-3 col-6">

          <div class="dropdown">
            <button class="btn btn--ordinary btn--medium dropdown-toggle btn--icon btn--icon--lone btn--icon--placeholder" type="button" id="buttonWithIconAndOptions" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Button
            </button>
            <div class="dropdown-menu depth depth--standed_out" aria-labelledby="buttonWithIconAndOptions">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </div>

          <div class="component_content__demo__description">Button with Icon and Options</div>
        </div>

        <div class="clear_both"></div>
      </div>
      `
      ,

      `<div class="row">
        <div class="col">
          <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--favorited mb-2" aria-label="Button"></button>
          <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--favorite mb-2" aria-label="Button"></button>
          <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--dislike mb-2" aria-label="Button"></button>
          <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--like mb-2" aria-label="Button"></button>
          <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--listview mb-2" aria-label="Button"></button>
          <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--maptoggle mb-2" aria-label="Button"></button>
          <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--gallery mb-2" aria-label="Button"></button>
          <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--audio mb-2" aria-label="Button"></button>
		  <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--play mb-2" aria-label="Button"></button>
		  <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--tour mb-2" aria-label="Button"></button>
		  <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--print mb-2" aria-label="Button"></button>
		  <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--drive mb-2" aria-label="Button"></button>
		  <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--remarks mb-2" aria-label="Button"></button>
		  <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--home mb-2" aria-label="Button"></button>
		  <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--folder mb-2" aria-label="Button"></button>
		  <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--receipt mb-2" aria-label="Button"></button>
		  <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--duplicate mb-2" aria-label="Button"></button>
		  <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--view mb-2" aria-label="Button"></button>
		  <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--comment mb-2" aria-label="Button"></button>
		  <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--email mb-2" aria-label="Button"></button>
		  <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--download mb-2" aria-label="Button"></button>
		  <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--external-link mb-2" aria-label="Button"></button>
		  <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--delete-auxiliary mb-2" aria-label="Button"></button>
		  <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--delete-red mb-2" aria-label="Button"></button>
		  <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--edit mb-2" aria-label="Button"></button>
		  <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--add mb-2" aria-label="Button"></button>
		  <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--close mb-2" aria-label="Button"></button>
		  <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--street_view mb-2" aria-label="Button"></button>
		  <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--gallery mb-2" aria-label="Button"></button>
		  <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--map_view mb-2" aria-label="Button"></button>
		  <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--share mb-2" aria-label="Button"></button>
		  <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--filters mb-2" aria-label="Button"></button>
		  <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--dot_dot_dot mb-2" aria-label="Button"></button>
		  <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--placeholder mb-2" aria-label="Button"></button>
		  
		  <br><br><br>
		  <button role="button" class="btn btn--ordinary btn--icon btn--icon--maptoggle btn--large ">View Map</button>
          <button role="button" class="btn btn--ordinary btn--icon btn--icon--listview btn--large">View List</button>
          
          <br><br><br>
          <button class="btn btn--ordinary btn--icon btn--icon--onlyicon btn--icon--full btn--icon--audio mr-md-2"></button>
		  <button class="btn btn--ordinary btn--icon btn--icon--onlyicon btn--icon--full btn--icon--play mr-md-2"></button>
		  <button class="btn btn--ordinary btn--icon btn--icon--onlyicon btn--icon--full btn--icon--tour btn--icon--full--text"><span>1 video, 2 tours</span></button>
        </div>

        <div class="clear_both"></div>
      </div>
      
      <hr>
      
      <div class="row">
        <div class="col">
          <button role="button" class="btn btn--ordinary btn--large btn--icon btn--icon--lone btn--icon--favorited mb-2" aria-label="Button"></button>
          <button role="button" class="btn btn--ordinary btn--large btn--icon btn--icon--lone btn--icon--favorite mb-2" aria-label="Button"></button>
          <button role="button" class="btn btn--ordinary btn--large btn--icon btn--icon--lone btn--icon--like mb-2" aria-label="Button"></button>
          <button role="button" class="btn btn--ordinary btn--large btn--icon btn--icon--lone btn--icon--dislike mb-2" aria-label="Button"></button>          
          <button role="button" class="btn btn--ordinary btn--large btn--icon btn--icon--lone btn--icon--disliked mb-2" aria-label="Button"></button>
          <button role="button" class="btn btn--ordinary btn--large btn--icon btn--icon--lone btn--icon--listview mb-2" aria-label="Button"></button>
          <button role="button" class="btn btn--ordinary btn--large btn--icon btn--icon--lone btn--icon--maptoggle mb-2" aria-label="Button"></button>
          <button role="button" class="btn btn--ordinary btn--large btn--icon btn--icon--lone btn--icon--gallery mb-2" aria-label="Button"></button>
          <button role="button" class="btn btn--ordinary btn--large btn--icon btn--icon--lone btn--icon--audio mb-2" aria-label="Button"></button>
		  <button role="button" class="btn btn--ordinary btn--large btn--icon btn--icon--lone btn--icon--play mb-2" aria-label="Button"></button>
		  <button role="button" class="btn btn--ordinary btn--large btn--icon btn--icon--lone btn--icon--tour mb-2" aria-label="Button"></button>
		  <button role="button" class="btn btn--ordinary btn--large btn--icon btn--icon--lone btn--icon--print mb-2" aria-label="Button"></button>
		  <button role="button" class="btn btn--ordinary btn--large btn--icon btn--icon--lone btn--icon--drive mb-2" aria-label="Button"></button>
		  <button role="button" class="btn btn--ordinary btn--large btn--icon btn--icon--lone btn--icon--remarks mb-2" aria-label="Button"></button>
		  <button role="button" class="btn btn--ordinary btn--large btn--icon btn--icon--lone btn--icon--home mb-2" aria-label="Button"></button>
		  <button role="button" class="btn btn--ordinary btn--large btn--icon btn--icon--lone btn--icon--folder mb-2" aria-label="Button"></button>
		  <button role="button" class="btn btn--ordinary btn--large btn--icon btn--icon--lone btn--icon--receipt mb-2" aria-label="Button"></button>
		  <button role="button" class="btn btn--ordinary btn--large btn--icon btn--icon--lone btn--icon--duplicate mb-2" aria-label="Button"></button>
		  <button role="button" class="btn btn--ordinary btn--large btn--icon btn--icon--lone btn--icon--view mb-2" aria-label="Button"></button>
		  <button role="button" class="btn btn--ordinary btn--large btn--icon btn--icon--lone btn--icon--comment mb-2" aria-label="Button"></button>
		  <button role="button" class="btn btn--ordinary btn--large btn--icon btn--icon--lone btn--icon--email mb-2" aria-label="Button"></button>
		  <button role="button" class="btn btn--ordinary btn--large btn--icon btn--icon--lone btn--icon--download mb-2" aria-label="Button"></button>
		  <button role="button" class="btn btn--ordinary btn--large btn--icon btn--icon--lone btn--icon--external-link mb-2" aria-label="Button"></button>
		  <button role="button" class="btn btn--ordinary btn--large btn--icon btn--icon--lone btn--icon--delete-auxiliary mb-2" aria-label="Button"></button>
		  <button role="button" class="btn btn--ordinary btn--large btn--icon btn--icon--lone btn--icon--delete-red mb-2" aria-label="Button"></button>
		  <button role="button" class="btn btn--ordinary btn--large btn--icon btn--icon--lone btn--icon--edit mb-2" aria-label="Button"></button>
		  <button role="button" class="btn btn--ordinary btn--large btn--icon btn--icon--lone btn--icon--add mb-2" aria-label="Button"></button>
		  <button role="button" class="btn btn--ordinary btn--large btn--icon btn--icon--lone btn--icon--close mb-2" aria-label="Button"></button>
		  <button role="button" class="btn btn--ordinary btn--large btn--icon btn--icon--lone btn--icon--street_view mb-2" aria-label="Button"></button>
		  <button role="button" class="btn btn--ordinary btn--large btn--icon btn--icon--lone btn--icon--gallery mb-2" aria-label="Button"></button>
		  <button role="button" class="btn btn--ordinary btn--large btn--icon btn--icon--lone btn--icon--map_view mb-2" aria-label="Button"></button>
		  <button role="button" class="btn btn--ordinary btn--large btn--icon btn--icon--lone btn--icon--share mb-2" aria-label="Button"></button>
		  <button role="button" class="btn btn--ordinary btn--large btn--icon btn--icon--lone btn--icon--filters mb-2" aria-label="Button"></button>
		  <button role="button" class="btn btn--ordinary btn--large btn--icon btn--icon--lone btn--icon--dot_dot_dot mb-2" aria-label="Button"></button>
		  <button role="button" class="btn btn--ordinary btn--large btn--icon btn--icon--lone btn--icon--placeholder mb-2" aria-label="Button"></button>
        </div>
        
        <div class="clear_both"></div>
      </div>
      <hr>
      
	    <div class="row">
	        <div class="col">	          
			  <button role="button" class="btn btn--simple btn--small  btn--icon btn--icon--phone" aria-label="Search">Call</button>
			  <button role="button" class="btn btn--simple btn--small  btn--icon btn--icon--callback" aria-label="Search">Call Back</button>
			  <button role="button" class="btn btn--simple btn--small  btn--icon btn--icon--email" aria-label="Search">Email</button>
			  <button role="button" class="btn btn--simple btn--small  btn--icon btn--icon--user" aria-label="Search">Profile</button>
			</div>
		</div>
      `,

      `<div class="row small-gutters">
        <div class="col col-4">
          <button role="button" class="btn btn--ordinary btn--fluid">Street View</button>
          <div class="component_content__demo__description">bnt--fluid</div>
        </div>

        <div class="col col-4">
          <button role="button" class="btn btn--ordinary btn--fluid">Get Directions</button>
          <div class="component_content__demo__description">bnt--fluid</div>
        </div>
		
		<div class="col col-4">
          <button role="button" class="btn btn--ordinary btn--fluid">Drive Time</button>
          <div class="component_content__demo__description">bnt--fluid</div>
        </div>
      </div>
      
       <hr>

      <div class="row">
        <div class="col col-sm-4 col-12">
          <button role="button" class="btn btn--filters btn--large" aria-label="Flate"><img src="https://content.harstatic.com/media/icons/icon-landing-page-filter.svg">FILTERS <span>2</span></button>
          <div class="component_content__demo__description">Button Flate</div>
        </div>
        
        <div class="col col-sm-4 col-12">
          <button role="button" class="btn btn--filters btn--filters-active btn--large" aria-label="Flate"><img src="https://content.harstatic.com/media/icons/icon-landing-page-filter.svg">FILTERS <span>2</span></button>
          <div class="component_content__demo__description">Button Filters Active state</div>
        </div>
                
        <div class="clear_both"></div>
      </div>
      
      <hr>
      
      <div class="row">
        <div class="col col-sm-4 col-12">
          <button role="button" class="btn btn--claimprofile" aria-label="Flate">Claim your profile <img class="ml-2" src="https://content.harstatic.com/media/icons/arrow_right_white_simple.svg"></button>
          <div class="component_content__demo__description">Button claim profile</div>
        </div>
        
        <div class="col col-sm-4 col-12">
          <button role="button" class="btn btn--claimprofile btn--claimprofile__large" aria-label="Flate">
          	<span class="btn--claimprofile__large__title">Are you Abel?</span>
          	<span class="btn--claimprofile__large__text">Claim you profile for free -></span>
          	<img src="https://content.harstatic.com/media/icons/claimprofile_arrow.svg">
          </button>
          <div class="component_content__demo__description">Button claim profile</div>
        </div>
        
                
        <div class="clear_both"></div>
      </div>
      
      
      <hr>
      
      <div class="row">
        <div class="col col-sm-3 col-6">
          <button role="button" class="btn btn--text btn--medium btn--medium__inline">Options</button>
          <div class="component_content__demo__description">Button Text</div>
        </div>

        <div class="col col-sm-3 col-6">
          <button role="button" class="btn btn--text btn--medium btn--medium__inline"><img src="https://content.harstatic.com/media/icons/map_small_auxiliary.svg"> Map View</button>
          <div class="component_content__demo__description">Button Text with icon</div>
        </div>

        <div class="col col-sm-3 col-6">

          <button id="OpenFilters" role="button" class="btn btn--text btn--medium  btn--medium__inline" aria-label="Flate"><img class="mr-2" style="width:24px;" src="https://content.harstatic.com/media/icons/icon-landing-page-filter.svg">Filters</button>

          <div class="component_content__demo__description">Button Filter simple</div>
        </div>

        <div class="col col-sm-3 col-6">

          <div class="dropdown dropdown--custom dropdown--custom__simple d-inline-block">
			  <button class="dropdown-toggle btn btn--flate btn--medium btn--medium__inline" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="height:inherit;">Sort By</button>
			  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton" x-placement="bottom-end" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(-119px, 41px, 0px);">
			    <a class="dropdown-item" href="#">Option 1</a>
			    <a class="dropdown-item" href="#">Option 2</a>
			    <a class="dropdown-item" href="#">Option 3</a>
			  </div>
			</div>

          <div class="component_content__demo__description">Button with dropdown</div>
        </div>

        <div class="clear_both"></div>
      </div>
       <hr>
      
      <div class="row">
        <div class="col col-6 text-left">
	        <a class="category_link" href="#">Active Adults (Age 55+)</a>
        </div>
        <div class="col col-sm-3 col-6">
        	<a class="btn btn--outline" href="#"><img src="https://content.harstatic.com/media/icons/icons-12-12-edit.svg"> Edit Folders</a>
        </div>
		
        <div class="col col-3">
	        <button class="btn btn--remove" title="" aria-label="remove"><span><img src="https://content.harstatic.com/media/icons/cross_white_small_2.svg"></span> remove</button>
	        <div class="clearfix"></div>
	        <div class="component_content__demo__description">btn remove</div>
	    </div>
        
        <div class="col col-12 text-left">
        	<button role="button" class="btn btn--primary btn--rounded btn--medium">Button Rounded</button>
		</div>

        <div class="clear_both"></div>
      </div>
      
      <hr>
      <div class="row">
        <div class="col col-12 text-left">
	        <button role="button" class="btn btn--anchor">Home</button>
	        <button role="button" class="btn btn--anchor">Shools</button>
	        <button role="button" class="btn btn--anchor">Home Values</button>
			<button role="button" class="btn btn--anchor">Highrise</button>
        </div>

        <div class="clear_both"></div>
      </div>
      
      <hr>
      <div class="row">
        <div class="col col-12 text-left">
	        <button role="button" class="btn btn--neighborhoods">Alvin South</button>
	        <button role="button" class="btn btn--neighborhoods">Brookshire</button>
	        <button role="button" class="btn btn--neighborhoods">Conroe Southwest</button>
			<div 1="" class="neighborhood-show-more dropdown dropdown--custom dropdown--custom_medium dropdown--custom_bold d-inline-block">
                  <button onclick="#" class="dropdown-toggle btn" type="button" aria-haspopup="true" aria-expanded="false">Alvin South</button>
            </div>
        </div>

        <div class="clear_both"></div>
      </div>
      `
    ];


    this.codeSnippets = [

`<button role="button" class="btn btn--primary btn--large">Button</button>
<button role="button" class="btn btn--primary btn--medium">Button</button>
<button role="button" class="btn btn--primary btn--small">Button</button>
<button role="button" class="btn btn--primary btn--small-extra">Button</button>`,

`<button role="button" class="btn btn--primary btn--medium">Button</button>
<button role="button" class="btn btn--prominent btn--medium">Button</button>
<button role="button" class="btn btn--ordinary btn--medium">Button</button>
<button role="button" class="btn btn--shapeless btn--medium">Button</button>
<button role="button" class="btn btn--primary btn--medium" disabled>Button</button>
<button role="button" class="btn btn--search btn--medium" aria-label="Search"></button>
<button role="button" class="btn btn--simple btn--medium" aria-label="Search">Button</button>`,

`<!-- Button with Icon -->
<button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--placeholder">Button</button>

<!-- Button with Lone Icon -->
<button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--placeholder" aria-label="Button"></button>

<!-- Button with Options -->
<div class="dropdown">
  <button class="btn btn--ordinary btn--medium dropdown-toggle" type="button" id="buttonWithOptions" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Button
  </button>
  <div class="dropdown-menu depth--standed_out" aria-labelledby="buttonWithOptions">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>

<!-- Button with Icon and Options -->
<div class="dropdown">
  <button class="btn btn--ordinary btn--medium dropdown-toggle btn--icon btn--icon--lone btn--icon--placeholder" type="button" id="buttonWithIconAndOptions" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Button
  </button>
  <div class="dropdown-menu depth depth--standed_out" aria-labelledby="buttonWithIconAndOptions">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>`
    ];

  }

  render(){
    return (
      <TemplateDefault
        pageTitle="Buttons"
        activeParent="components"
        activeChild="buttons">

        <TemplateComponentBlock blockTitle="Sizes" elements={this.elements[0]} codeSnippets={this.codeSnippets[0]} />
        <TemplateComponentBlock blockTitle="Styles" elements={this.elements[1]} codeSnippets={this.codeSnippets[1]} />
        <TemplateComponentBlock blockTitle="Variations" elements={this.elements[2]} codeSnippets={this.codeSnippets[2]} />
        <TemplateComponentBlock blockTitle="All Buttons with icons" elements={this.elements[3]} codeSnippets={this.codeSnippets[3]} />
        <TemplateComponentBlock blockTitle="Others" elements={this.elements[4]} codeSnippets={this.codeSnippets[4]} />

      </TemplateDefault>
    )
  }

}
