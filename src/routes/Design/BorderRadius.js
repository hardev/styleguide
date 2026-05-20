import React, {Component} from "react";
import TemplateDefault from '../../components/TemplateDefault';
import TemplateComponentBlock from '../../components/TemplateComponentBlock';

export default class BorderRadius extends Component {

  constructor(props) {
    super(props);

    this.elements = [
      `<div class="row justify-content-center">
        <div class="col col-sm-6 col-12">
          <div class="depth border_radius--mini" style="height: 98px"></div>
          <div class="pt-2 pb-5">
            border_radius--mini (2px)<br>
          </div>
          
          <div class="border_radius--default depth" style="height: 98px"></div>
          <div class="pt-2 pb-5">
            border_radius--default (4px)<br>
          </div>
          
          <div class="border_radius--pudgy depth" style="height: 98px"></div>
          <div class="pt-2 pb-5">
            border_radius--pudgy (8px)<br>
          </div>
          
          <div class="depth  border_radius--round12" style="height: 98px"></div>
          <div class="pt-2 pb-5">
            border_radius--round12 (12px)<br>            
          </div>
          
          <div class="depth border_radius--round" style="height: 98px"></div>
          <div class="pt-2 pb-5">
            border_radius--round (16px)<br>
          </div>
          
          <div class="depth  border_radius--round24" style="height: 98px"></div>
          <div class="pt-2 pb-5">
            border_radius--round24 (24px)<br>            
          </div>
          
          <div class="border_radius--rounded depth" style="height: 128px"></div>
          <div class="pt-2 pb-5">
            border_radius--default (32px)<br>
          </div>
          
          
        </div>
        <div class="clear_both"></div>
      </div>`,
    ];


    this.codeSnippets = [
`<div class="border_radius border_radius--default depth depth--landed"></div>`,
    ];

  }

  render() {

    return (
      <TemplateDefault
        pageTitle="Border Radius"
        activeParent="design"
        activeChild="border_radius">

        <TemplateComponentBlock blockTitle="Default Border Radius" elements={this.elements[0]} codeSnippets={this.codeSnippets[0]} />

      </TemplateDefault>
    )
  }

}
