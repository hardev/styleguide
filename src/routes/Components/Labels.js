import React, {Component} from "react";
import TemplateDefault from '../../components/TemplateDefault';
import TemplateComponentBlock from '../../components/TemplateComponentBlock';

export default class Labels extends Component {

  constructor(props) {
    super(props);

    this.elements = [
      `<div class="row justify-content-center">
        <div class="col col-3 pt-3">          
          <div class="label label--forsale">for sale</div>
          <div class="component_content__demo__description">For Sale</div>          
        </div>
        <div class="col col-3 pt-3">          
          <div class="label label--forrent">for rent</div>
        </div>
        <div class="col col-3 pt-3">          
          <div class="label label--sold">sold</div>
        </div> 
        <div class="col col-3 pt-3">          
          <div class="label label--terminated">terminated</div>
        </div>        
       </div>
       <div class="row">
        <div class="col col-3 pt-3">
          <div class="label label--openhouse">Open House</div>
          <div class="component_content__demo__description">Open House</div>          
        </div>
        <div class="col col-9 pt-3"></div>
        <div class="col col-auto pt-3">          
          <div class="label label--pending">Under Contract - Pending</div>
          <div class="component_content__demo__description">Pending</div>          
        </div>
        <div class="col col-auto pt-3">          
          <div class="label label--pending__continue">Under Contract - Pending Continue</div>
          <div class="component_content__demo__description">Pending Continue</div>
        </div>
        <div class="col col-auto pt-3">          
          <div class="label label--pending__continue_show">Under Contract - Pending Continue to Show</div>
          <div class="component_content__demo__description">Pending Continue Show</div>
        </div>
       </div>
       <div class="row">
        <div class="col col-3 pt-3">          
          <div class="label label--newconstruction"><img src="https://content.harstatic.com/media/icons/icon-new-construction.svg">New construction</div>
        </div>
        <div class="col col-3 pt-3">          
          <div class="label label--justlisted"><img src="https://content.harstatic.com/media/icons/icon-just-listed.svg">Just listed</div>          
        </div>
        <div class="col col-3 pt-3">          
          <div class="label label--pricereduction"><img src="https://content.harstatic.com/media/icons/icon-price-reduction.svg">Price Reduction</div>          
        </div>
        <div class="col col-3 pt-3">          
          <div class="label label--foreclosure"><img src="https://content.harstatic.com/media/icons/icon-foreclosure.svg">Foreclosure</div>          
        </div>
        <div class="col col-3 pt-3">          
          <div class="label label--openhouse_simple"><img src="https://content.harstatic.com/media/icons/icon-open-house.svg">Open House</div>          
        </div>
        <div class="col col-3 pt-3">          
          <div class="label label--virtualopenhouse"><img src="https://content.harstatic.com/media/icons/icon-open-house.svg">Virtual Open House</div>          
        </div>
       </div>`,
       `<div class="row">
        <div class="col col-3 pt-3">  
          <div class="label label--grade label--grade_a">A</div>
          <div class="component_content__demo__description">School labels Grade A</div>          
        </div>
        <div class="col col-3 pt-3">  
          <div class="label label--grade label--grade_b">B</div>
          <div class="component_content__demo__description">School labels Grade B</div>          
        </div>
        <div class="col col-3 pt-3">  
          <div class="label label--grade label--grade_c">C</div>
          <div class="component_content__demo__description">School labels Grade C</div>          
        </div>
        <div class="col col-3 pt-3">  
          <div class="label label--grade label--grade_d">D</div>
          <div class="component_content__demo__description">School labels Grade D</div>          
        </div>
        <div class="col col-3 pt-3">  
          <div class="label label--grade label--grade_f">F</div>
          <div class="component_content__demo__description">School labels Grade F</div>          
        </div>
        <div class="col col-3 pt-3">
          <div class="label label--private_school">Private School</div>          
          <div class="component_content__demo__description">Private School</div>          
        </div>
       </div>`,
       `<div class="row justify-content-center">
        <div class="col col-2 pt-3">          
          <div class="label label--typeahead  label--typeahead_street">Street</div> 
        </div>
        <div class="col col-2 pt-3">          
          <div class="label label--typeahead  label--typeahead_city">City</div>
        </div>
        <div class="col col-2 pt-3">          
          <div class="label label--typeahead  label--typeahead_zipcode">Zip Code</div>
        </div>
        <div class="col col-2 pt-3">          
          <div class="label label--typeahead  label--typeahead_mls">MLS#</div>
        </div>
        <div class="col col-2 pt-3">          
          <div class="label label--typeahead  label--typeahead_district">District</div>
        </div>
        <div class="col col-2 pt-3">          
          <div class="label label--typeahead  label--typeahead_school">School</div>
        </div>
        <div class="col col-2 pt-3">          
          <div class="label label--typeahead  label--typeahead_broker">Broker</div>
        </div>
        <div class="col col-2 pt-3">          
          <div class="label label--typeahead  label--typeahead_lead">Lead</div>
        </div>
        <div class="col col-2 pt-3">     
        </div>
        <div class="col col-2 pt-3">          
        </div>
        <div class="col col-2 pt-3">          
        </div>
        <div class="col col-2 pt-3">          
        </div>
       </div>`,
       `<div class="row justify-content-center">
        <div class="col col-3 pt-3">          
          <div class="label label--forsale">for sale</div>
          <div class="component_content__demo__description">For Sale</div>          
        </div>
        <div class="col col-3 pt-3">          
          <div class="label label--forrent">for rent</div>
        </div>
        <div class="col col-3 pt-3">          
          <div class="label label--newconstruction"><img src="https://content.harstatic.com/media/icons/icon-new-construction.svg">New construction</div>
        </div>
        <div class="col col-3 pt-3">          
          <div class="label label--justlisted"><img src="https://content.harstatic.com/media/icons/icon-just-listed.svg">Just listed</div>          
        </div>
        <div class="col col-3 pt-3">          
          <div class="label label--pricereduction"><img src="https://content.harstatic.com/media/icons/icon-price-reduction.svg">Price Reduction</div>          
        </div>
       </div>
       <div class="row">
        <div class="col col-3 pt-3">          
          <div class="label label--openhouse">Open House</div>
          <div class="component_content__demo__description">Open House</div>          
        </div>
       </div>`,
    ];


    this.codeSnippets = [
`<div class="label label--forsale">for sale</div>
<div class="label label--forrent">for rent</div>
<div class="label label--sold">sold</div>
<div class="label label--newconstruction"><img src="https://content.harstatic.com/media/icons/icon-new-construction.svg">New construction</div>
<div class="label label--justlisted"><img src="https://content.harstatic.com/media/icons/icon-just-listed.svg">Just listed</div>          
<div class="label label--openhouse">Open House</div>`,
`<div class="label label--grade label--grade_a">A</div>
<div class="label label--grade label--grade_d">D</div>`,
`<div class="label label--typeahead  label--typeahead_street">Street</div>
<div class="label label--typeahead  label--typeahead_city">City</div>
<div class="label label--typeahead  label--typeahead_zipcode">Zip Code</div>
<div class="label label--typeahead  label--typeahead_mls">MLS#</div>
<div class="label label--typeahead  label--typeahead_district">District</div>
<div class="label label--typeahead  label--typeahead_school">School</div>`,			
];

  }

  render(){
    return (
      <TemplateDefault
        pageTitle="Labels"
        activeParent="components"
        activeChild="labels">

        <TemplateComponentBlock blockTitle="Listing Labels" elements={this.elements[0]} codeSnippets={this.codeSnippets[0]} />
        <TemplateComponentBlock blockTitle="School Labels" elements={this.elements[1]} codeSnippets={this.codeSnippets[1]} />
        <TemplateComponentBlock blockTitle="Typeahead Labels" elements={this.elements[2]} codeSnippets={this.codeSnippets[2]} />
        
      </TemplateDefault>
    )
  }

}
