import React, {Component} from "react";
import TemplateDefault from '../../components/TemplateDefault';
import TemplateComponentBlock from '../../components/TemplateComponentBlock';

export default class Labels extends Component {

  constructor(props) {
    super(props);

    this.elements = [
      `
      <div class="row justify-content-start">
        <div class="col col-6 pt-3 text-left">          
          <h4 tabindex="">Type</h4>
          
          <div class="label label--forsale_type">For Sale</div>
          <br><br>
          <div class="label label--forrent_type">For Rent</div>
          
          <br><br>
          <h4 tabindex="">Type usage in Heighrise</h4>
          
          <div class="label label--forsale_round">2 units for sale</div>
          <br><br>
          <div class="label label--forrent_round">5 units for rent</div>
          <br><br>
          <div class="label label--sold_round">19 units sold</div>
          
        </div>
        
       
     </div>
      
      <div class="row justify-content-start">
        <div class="col col-6 text-left">          
          <h4 tabindex="">Status</h4>
          <br>
          <div class="label label--forsale">Active</div>
          <br><br>
          <div class="label label--comingsoon">Coming Soon</div>
          <br><br>
          <div class="label label--undercontract">Under Contract – OP</div>
          <br><br>
          <div class="label label--undercontract">Under Contract – P</div>
          <br><br>
          <div class="label label--undercontract">Under Contract – PS</div>
          <br><br>
          <div class="label label--expired">Expired</div>
          <br><br>
          <div class="label label--withdraw">Withdraw</div>
          <br><br>
          <div class="label label--withdrawn">Withdrawn</div>
          <br><br>
          <div class="label label--terminated">Terminated</div>
          <br><br>
          <div class="label label--incompleted">Incomplete</div>
          <br><br>
          <div class="label label--notforsale">Not for sale</div>
          <br><br>
          <div class="label label--sold">Sold</div>

		  <br><br><br><br>
          <div class="label label--sold label--large">Sold Price: <span class="font_weight--bold">$1,095,000</span></div>
        </div>
        
        
        <div class="col col-6 pt-3 text-left">          
          <h4 tabindex="">Property Labels</h4>
          
		  <br>
          <div class="label label--openhouse_simple"><img src="https://content.harstatic.com/media/icons/icon-open-house.svg">Open House</div>
          <br><br>
          <div class="label label--justlisted"><img src="https://content.harstatic.com/media/icons/icon-just-listed.svg">Just listed</div>          
          <br><br>
          <div class="label label--newconstruction"><img src="https://content.harstatic.com/media/icons/icon-new-construction.svg">New construction</div>
          <br><br>
          <div class="label label--pricereduction"><img src="https://content.harstatic.com/media/icons/icon-price-reduction.svg">Price Reduction</div> 
          <br><br>
          <div class="label label--foreclosure"><img src="https://content.harstatic.com/media/icons/icon-foreclosure.svg">Foreclosure</div>
          <!--<br><br>
          <div class="label label--virtualopenhouse"><img src="https://content.harstatic.com/media/icons/icon-open-house.svg">Virtual Open House</div> -->
		  <br><br><br><br>
          <div class="label label--openhouse">Open House</div>
          
        </div>
        
       </div>       
       
       `,
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
       </div>
       <div class="row">
        <div class="col col-3 pt-3">  
          <div class="label label--grade label--grade__large label--grade_a">A</div>
          <div class="component_content__demo__description">School labels Grade A</div>          
        </div>
        <div class="col col-3 pt-3">  
          <div class="label label--grade label--grade__large label--grade_b">B</div>
          <div class="component_content__demo__description">School labels Grade B</div>          
        </div>
        <div class="col col-3 pt-3">  
          <div class="label label--grade label--grade__large label--grade_c">C</div>
          <div class="component_content__demo__description">School labels Grade C</div>          
        </div>
        <div class="col col-3 pt-3">  
          <div class="label label--grade label--grade__large label--grade_d">D</div>
          <div class="component_content__demo__description">School labels Grade D</div>          
        </div>
        <div class="col col-3 pt-3">  
          <div class="label label--grade label--grade__large label--grade_f">F</div>
          <div class="component_content__demo__description">School labels Grade F</div>          
        </div>
       </div>
       `,
       `<div class="row justify-content-center">
        <div class="col col-2 pt-3">          
          <div class="label label--typeahead  label--typeahead_neighborhood">Neighborhood</div> 
        </div>
        <div class="col col-2 pt-3">          
          <div class="label label--typeahead  label--typeahead_subdivision">Subdivision</div> 
        </div>
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
          <div class="label label--typeahead  label--typeahead_team">Team</div>
        </div>
        <div class="col col-2 pt-3">          
          <div class="label label--typeahead  label--typeahead_lead">Lead</div>
        </div>
        <div class="col col-2 pt-3">
        	<div class="label label--typeahead  label--typeahead_community">Community</div>
        </div>
        <div class="col col-2 pt-3">
        	<div class="label label--typeahead  label--typeahead_highrise">Highrise</div>
        </div>
        <div class="col col-2 pt-3">
        	<div class="label label--typeahead  label--typeahead_course">Course</div>
        </div>
        <div class="col col-2 pt-3">
        	<div class="label label--typeahead  label--typeahead_apartment_name">Apartment</div>
        </div>
        <div class="col col-2 pt-3">
        	<div class="label label--typeahead  label--typeahead_marketarea">Marketarea</div>
        </div>
        <div class="col col-2 pt-3">
        	<div class="label label--typeahead  label--typeahead_county">County </div>
        </div>
        <div class="col col-2 pt-3">
        	<div class="label label--typeahead  label--typeahead_office">Office</div>
        </div>
        <div class="col col-2 pt-3">
        	<div class="label label--typeahead  label--typeahead_keyword">Keyword</div>
        </div>
        <div class="col col-2 pt-3">
        	<div class="label label--typeahead  label--typeahead_category">Category</div>
        </div>
        <div class="col col-2 pt-3">
        	<div class="label label--typeahead  label--typeahead_management_name">Management Name</div>
        </div>
        <div class="col col-2 pt-3">
        	<div class="label label--typeahead  label--typeahead_charterschool">Charterschool</div>
        </div>
       </div>`,
       `<div class="row justify-content-center">
        <div class="col col-2 pt-3">
          <div class="label label--agent label--agent__bronze">Bronze</div>
        </div>
        <div class="col col-2 pt-3">          
          <div class="label label--agent label--agent__platinum">Platinum</div>
        </div>
        <div class="col col-2 pt-3">          
          <div class="label label--agent label--agent__diamond">Diamond</div>
        </div>
        <div class="col col-2 pt-3">          
          <div class="label label--agent label--agent__gold">Gold</div>
        </div>
        <div class="col col-2 pt-3">          
          <div class="label label--agent label--agent__silver">Silver</div>         
        </div>
       </div>`,
       `<div class="row justify-content-center">
        <div class="col col-12 pt-3 text-left">
          <div class="label label--badges label--badges__justlisted">Just Listed</div>
          <br><br>
          <div class="label label--badges label--badges__openhouse">Open House</div>
          <br><br>
          <div class="label label--badges label--badges__pricereduced">Price Reduced</div>
          <br><br>
          <div class="label label--badges label--badges__homevalues">Home Values</div>
          <br><br>
          <div class="label label--badges label--badges__neighborhoods">Neighborhoods</div>         
          <br><br>
          <div class="label label--badges label--badges__agentsbrokers">Agents & Brokers</div>
          <br><br>
          <div class="label label--default label--default__membership">Membership</div>
          <a href="#" class="label label--default label--default__membership">Member of Something Else</a>
          <br><br>
          <a href="#" class="label label--default label--default__team">Lead of A to Z Houston Real Estate Team</a>
          <br><br><br><br>
          <div class="label label--default label--default__open">Open</div>
          <div class="label label--default label--default__close">Close</div>
          <div class="label label--default label--default__resolved"><img src="https://content.harstatic.com/media/icons/checkmark-rounded_cement.svg">Resolved</div>
        </div>
        
        <div class="col col-12 pt-3 text-left">
          <div class="label label--badges label--badges__small label--badges__justlisted">Just Listed</div>
          <br><br>
          <div class="label label--badges label--badges__small label--badges__openhouse">Open House</div>
          <br><br>
          <div class="label label--badges label--badges__small label--badges__pricereduced">Price Reduced</div>
          <br><br>
          <div class="label label--badges label--badges__small label--badges__homevalues">Home Values</div>
          <br><br>
          <div class="label label--badges label--badges__small label--badges__neighborhoods">Neighborhoods</div>         
          <br><br>
          <div class="label label--badges label--badges__small label--badges__agentsbrokers">Agents & Brokers</div>
          <br><br>
          <div class="label label--default label--badges__small label--default__membership">Membership</div>
          <a href="#" class="label label--default label--default__membership">Member of Something Else</a>
          <br><br>
          <a href="#" class="label label--default label--default__team">Lead of A to Z Houston Real Estate Team</a>
          <br><br><br><br>
          <div class="label label--default label--default__open">Open</div>
          <div class="label label--default label--default__close">Close</div>
          <div class="label label--default label--default__resolved"><img src="https://content.harstatic.com/media/icons/checkmark-rounded_cement.svg">Resolved</div>
        </div>
        
        <div class="col col-12 pt-3 text-left random__badges">
          <div class="label label--badges">Just Listed</div>
          <br><br>
          <div class="label label--badges">Open House</div>
          <br><br>
          <div class="label label--badges">Price Reduced</div>
          <br><br>
          <div class="label label--badges">Home Values</div>
          <br><br>
          <div class="label label--badges">Neighborhoods</div>         
          <br><br>
          <div class="label label--badges">Agents & Brokers</div>
          <br><br>
        </div>
        
        
       </div>
       `,
       `<div class="row justify-content-center">
        <div class="col col-12 pt-3 text-left">
          <br><br>
          <div class="statusdote statusdote--active"></div>
          <div class="statusdote statusdote--rent"></div>
          <div class="statusdote statusdote--sold"></div>
          <div class="statusdote statusdote--pending"></div>
          <br><br>
          
        </div>
       </div>
       `,
       `<div class="row">
        <div class="col col-3 pt-3">
          <div class="label label--recognized">Open House</div>
          <div class="component_content__demo__description">Recognized by NAR</div>
        </div>
        <div class="col col-auto pt-3">          
          <div class="label label--recognized_none">Non-Nar by NAR</div>
          <div class="component_content__demo__description">Non-Nar by NAR</div>          
        </div>
       </div>
       `,
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

        <TemplateComponentBlock blockTitle="Listing Status" elements={this.elements[0]} codeSnippets={this.codeSnippets[0]} />
        <TemplateComponentBlock blockTitle="School Labels" elements={this.elements[1]} codeSnippets={this.codeSnippets[1]} />
        <TemplateComponentBlock blockTitle="Typeahead Labels" elements={this.elements[2]} codeSnippets={this.codeSnippets[2]} />
		<TemplateComponentBlock blockTitle="Agent Level Labels" elements={this.elements[3]} codeSnippets={this.codeSnippets[3]} />
		<TemplateComponentBlock blockTitle="Labels Default" elements={this.elements[4]} codeSnippets={this.codeSnippets[4]} />
		<TemplateComponentBlock blockTitle="Status Dotes" elements={this.elements[5]} codeSnippets={this.codeSnippets[5]} />
		<TemplateComponentBlock blockTitle="Other" elements={this.elements[6]} codeSnippets={this.codeSnippets[6]} />
        
      </TemplateDefault>
    )
  }

}
