import React, {Component} from "react";
import TemplateDefault from '../../components/TemplateDefault';
import TemplateComponentBlock from '../../components/TemplateComponentBlock';

export default class Tables extends Component {

  constructor(props) {
    super(props);

    this.elements = [
      `<div class="row justify-content-center">
        <div class="col col-10 pt-4">
          <div class="table_wrapper">
    				<table tabindex="0" class="table table--medium">
              <caption>Listing traffic report table</caption>
    				  <thead>
    				    <tr>
    				      <th scope="col">Table Header</th>
    				      <th scope="col">Web Views</th>
    				      <th scope="col">App Views</th>
    				      <th scope="col">Total</th>
    				    </tr>
    				  </thead>
    				  <tbody>
    				    <tr>
    				      <td scope="row">Table Row</td>
    				      <td>Table Row</td>
    				      <td>Table Row</td>
    				      <td>Table Row</td>
    				    </tr>
    				    <tr>
    				      <td scope="row">Table Row</td>
    				      <td>Table Row</td>
    				      <td>Table Row</td>
    				      <td>Table Row</td>
    				    </tr>
    				    <tr>
    				      <td scope="row">Table Row</td>
    				      <td>Table Row</td>
    				      <td>Table Row</td>
    				      <td>Table Row</td>
    				    </tr>
    				    <tr>
    				      <td scope="row">Table Row</td>
    				      <td>Table Row</td>
    				      <td>Table Row</td>
    				      <td>Table Row</td>
    				    </tr>
    				  </tbody>
    				</table>
          </div>
          <div class="component_content__demo__description">e.g., Listing traffic report table</div>
        </div>`,

        `<div class="row justify-content-center">
        <div class="col col-10 pt-4">
          <div class="table_wrapper">
    				<table tabindex="0" class="table table--small" style="max-width: 400px; margin:0px auto;">
              <caption>Some data about Houston</caption>
    				  <tbody>
    				    <tr>
    				      <td scope="row"><span class="table__description_highlighted">Townhouse Condo</span> type</td>
    				      <td><span class="table__description_highlighted">4</span> bedrooms</td>
    				    </tr>
    				    <tr>
    				      <td scope="row"><span class="table__description_highlighted">1</span> Stories</td>
    				      <td><span class="table__description_highlighted">5,793 </span> Building Sqft.</td>
    				    </tr>
    				    <tr>
    				      <td scope="row"><span class="table__description_highlighted">Townhouse Condo</span> type</td>
    				      <td scope="row"><span class="table__description_highlighted">4</span> bedrooms</td>
    				    </tr>
    				    <tr>
    				      <td scope="row"><span class="table__description_highlighted">1</span> Stories</td>
    				      <td><span class="table__description_highlighted">5,793 </span> Building Sqft.</td>
    				    </tr>
    				  </tbody>
    				</table>
          </div>
          <div class="component_content__demo__description">Use it for not very important tabular data – <strong>never</strong> for listing card feature table</div>
        </div>`
    ];


    this.codeSnippets = [
`<div class="table_wrapper">
  <table class="table table--medium">

    <!-- Table description for accessibility purposes -->
    <caption>Listing traffic report table</caption>

    <thead>
      <tr>
        <th scope="col">Table Header</th>
        <th scope="col">Web Views</th>
        <th scope="col">App Views</th>
        <th scope="col">Total</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td scope="row">Table Row</td>
        <td>Table Row</td>
        <td>Table Row</td>
        <td>Table Row</td>
      </tr>
      <tr>
        <td scope="row">Table Row</td>
        <td>Table Row</td>
        <td>Table Row</td>
        <td>Table Row</td>
      </tr>
      <tr>
        <td scope="row">Table Row</td>
        <td>Table Row</td>
        <td>Table Row</td>
        <td>Table Row</td>
      </tr>
      <tr>
        <td scope="row">Table Row</td>
        <td>Table Row</td>
        <td>Table Row</td>
        <td>Table Row</td>
      </tr>
    </tbody>
  </table>
</div>`,

`<div class="table_wrapper">
  <table class="table table--small">

    <!-- Table description for accessibility purposes -->
    <caption>Some data about Houston</caption>

    <tbody>
      <tr>
        <td scope="row"><span class="table__description_highlighted">Townhouse Condo</span> type</td>
        <td><span class="table__description_highlighted">4</span> bedrooms</td>
      </tr>
      <tr>
        <td scope="row"><span class="table__description_highlighted">1</span> Stories</td>
        <td><span class="table__description_highlighted">5,793 </span> Building Sqft.</td>
      </tr>
      <tr>
        <td scope="row"><span class="table__description_highlighted">Townhouse Condo</span> type</td>
        <td><span class="table__description_highlighted">4</span> bedrooms</td>
      </tr>
      <tr>
        <td scope="row"><span class="table__description_highlighted">1</span> Stories</td>
        <td><span class="table__description_highlighted">5,793 </span> Building Sqft.</td>
      </tr>
    </tbody>
  </table>
</div>`
  ];

  }

  render(){
    return (
      <TemplateDefault
        pageTitle="Tables"
        activeParent="components"
        activeChild="tables">

        <TemplateComponentBlock blockTitle="Medium Table" elements={this.elements[0]} codeSnippets={this.codeSnippets[0]} />
        <TemplateComponentBlock blockTitle="Small Table" elements={this.elements[1]} codeSnippets={this.codeSnippets[1]} />

      </TemplateDefault>
    )
  }

}
