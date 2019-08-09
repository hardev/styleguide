import React, {Component} from "react";
import TemplateDefault from '../../components/TemplateDefault';
import TemplateComponentBlock from '../../components/TemplateComponentBlock';

export default class Tables extends Component {

  constructor(props) {
    super(props);

    this.elements = [
      `<div class="row justify-content-center">
        <div class="col col-10 pt-4">
			<div class="table-responsive">
				<table class="table table--normal table--normal-medium">
				  <thead>
				    <tr>
				      <th scope="col" style="min-width:200px;">Table Header</th>
				      <th scope="col">Web Views</th>
				      <th scope="col">App Views</th>
				      <th scope="col">Total</th>
				    </tr>
				  </thead>
				  <tbody>
				    <tr>
				      <td>Table Row</td>
				      <td>Table Row</td>
				      <td>Table Row</td>
				      <td>Table Row</td>
				    </tr>
				    <tr>
				      <td>Table Row</td>
				      <td>Table Row</td>
				      <td>Table Row</td>
				      <td>Table Row</td>
				    </tr>
				    <tr>
				      <td>Table Row</td>
				      <td>Table Row</td>
				      <td>Table Row</td>
				      <td>Table Row</td>
				    </tr>
				    <tr>
				      <td>Table Row</td>
				      <td>Table Row</td>
				      <td>Table Row</td>
				      <td>Table Row</td>
				    </tr>
				  </tbody>
				</table>
			</div>
          <div class="component_content__demo__description">Medium Table<br>e.g., Listing traffic report table</div>
        </div>`,
        `<div class="row justify-content-center">
        <div class="col col-10 pt-4">
			<div class="table-responsive" style="max-width:400px;margin:0px auto;">
				<table class="table table--normal table--normal-small">				  
				  <tbody>
				    <tr>
				      <td><span class="table_description_title">Townhouse Condo</span> type</td>
				      <td><span class="table_description_title">4</span> bedrooms</td>
				    </tr>
				    <tr>
				      <td><span class="table_description_title">1</span> Stories</td>
				      <td><span class="table_description_title">5,793 </span> Building Sqft.</td>
				    </tr>
				    <tr>
				      <td><span class="table_description_title">Townhouse Condo</span> type</td>
				      <td><span class="table_description_title">4</span> bedrooms</td>
				    </tr>
				    <tr>
				      <td><span class="table_description_title">1</span> Stories</td>
				      <td><span class="table_description_title">5,793 </span> Building Sqft.</td>
				    </tr>
				  </tbody>
				</table>
			</div>
          <div class="component_content__demo__description">Small table<br>e.g., Listing card feature table</div>
        </div>`
    ];


    this.codeSnippets = [
`<div class="table-responsive">
	<table class="table table--normal table--normal-medium">
	  <thead>
	    <tr>
	      <th scope="col" style="min-width:200px;">Table Header</th>
	      <th scope="col">Web Views</th>
	      <th scope="col">App Views</th>
	      <th scope="col">Total</th>
	    </tr>
	  </thead>
	  <tbody>
	    <tr>
	      <td>Table Row</td>
	      <td>Table Row</td>
	      <td>Table Row</td>
	      <td>Table Row</td>
	    </tr>
	    <tr>
	      <td>Table Row</td>
	      <td>Table Row</td>
	      <td>Table Row</td>
	      <td>Table Row</td>
	    </tr>
	    <tr>
	      <td>Table Row</td>
	      <td>Table Row</td>
	      <td>Table Row</td>
	      <td>Table Row</td>
	    </tr>
	    <tr>
	      <td>Table Row</td>
	      <td>Table Row</td>
	      <td>Table Row</td>
	      <td>Table Row</td>
	    </tr>
	  </tbody>
	</table>
</div>`,
`<div class="table-responsive">
	<table class="table table--normal table--normal-small">				  
	  <tbody>
	    <tr>
	      <td><span class="table_description_title">Townhouse Condo</span> type</td>
	      <td><span class="table_description_title">4</span> bedrooms</td>
	    </tr>
	    <tr>
	      <td><span class="table_description_title">1</span> Stories</td>
	      <td><span class="table_description_title">5,793 </span> Building Sqft.</td>
	    </tr>
	    <tr>
	      <td><span class="table_description_title">Townhouse Condo</span> type</td>
	      <td><span class="table_description_title">4</span> bedrooms</td>
	    </tr>
	    <tr>
	      <td><span class="table_description_title">1</span> Stories</td>
	      <td><span class="table_description_title">5,793 </span> Building Sqft.</td>
	    </tr>
	  </tbody>
	</table>
</div>`
    ];

  }

  render(){
    return (
      <TemplateDefault
        pageTitle="Tables Variations"
        activeParent="components"
        activeChild="tables">

        <TemplateComponentBlock blockTitle="Medium table" elements={this.elements[0]} codeSnippets={this.codeSnippets[0]} />
        <TemplateComponentBlock blockTitle="Small table" elements={this.elements[1]} codeSnippets={this.codeSnippets[1]} />

      </TemplateDefault>
    )
  }

}
