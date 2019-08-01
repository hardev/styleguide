import React, {Component} from "react";
import TemplateDefault from '../../components/TemplateDefault';
import TemplateComponentBlock from '../../components/TemplateComponentBlock';

export default class BorderRadius extends Component {

  constructor(props) {
    super(props);

    this.elements = [
      `<div class="row justify-content-center">
        <div class="col col-sm-6 col-12">
          <div class="border_radius border_radius--default depth depth--landed" style="height: 128px"></div>
          <div class="component_content__demo__description">
            Used for all shaped elements (e.g., cards)
          </div>
        </div>
        <div class="clear_both"></div>
      </div>`,

      `<div class="row justify-content-center">
        <div class="col col-sm-6 col-12">
          <div class="border_radius border_radius--pudgy depth depth--landed" style="height: 128px"></div>
          <div class="component_content__demo__description">
            Used for specific and prominent elements
          </div>
        </div>
        <div class="clear_both"></div>
      </div>`,
    ];


    this.codeSnippets = [
`<div class="border_radius border_radius--default depth depth--landed"></div>`,

`<div class="border_radius border_radius--pudgy depth depth--landed"></div>`,
    ];

  }

  render() {

    return (
      <TemplateDefault
        pageTitle="Border Radius"
        activeParent="design"
        activeChild="border_radius">

        <TemplateComponentBlock blockTitle="Default Border Radius (4px)" elements={this.elements[0]} codeSnippets={this.codeSnippets[0]} />
        <TemplateComponentBlock blockTitle="Pudgy Border Radius (8px)" elements={this.elements[1]} codeSnippets={this.codeSnippets[1]} />

      </TemplateDefault>
    )
  }

}
