import React, {Component} from "react";
import TemplateDefault from '../../components/TemplateDefault';
import TemplateComponentBlock from '../../components/TemplateComponentBlock';

export default class Depth extends Component {

  constructor(props) {
    super(props);

    this.elements = [
      `<div class="row justify-content-center">
        <div class="col col-sm-6 col-12">
          <div class="depth depth--landed border_radius border_radius--default" style="height: 128px"></div>
          <div class="component_content__demo__description">
            e.g., Ordinary gridded-content information
          </div>
        </div>
        <div class="clear_both"></div>
      </div>`,

      `<div class="row justify-content-center">
        <div class="col col-sm-6 col-12">
          <div class="depth depth--emboss border_radius border_radius--default" style="height: 128px"></div>
          <div class="component_content__demo__description">
            e.g., Listing card
          </div>
        </div>
        <div class="clear_both"></div>
      </div>`,

      `<div class="row justify-content-center">
        <div class="col col-sm-6 col-12">
          <div class="depth depth--standed_out border_radius border_radius--default" style="height: 128px"></div>
          <div class="component_content__demo__description">
            e.g., Filter dropdown
          </div>
        </div>
        <div class="clear_both"></div>
      </div>`,

      `<div class="row justify-content-center">
        <div class="col col-sm-6 col-12">
          <div class="depth depth--above_all border_radius border_radius--default" style="height: 128px"></div>
          <div class="component_content__demo__description">
            e.g., Listing Card Preview on search map
          </div>
        </div>
        <div class="clear_both"></div>
      </div>`,
    ];


    this.codeSnippets = [
`<div class="depth depth--landed border_radius border_radius--default">
  <!--
  Content goes here
  If you want to use it as a card, don't do it. Instead, use the class "card"
  -->
</div>`,

`<div class="depth depth--emboss border_radius border_radius--default">
  <!--
  Content goes here
  If you want to use it as a card, don't do it. Instead, use the class "card"
  -->
</div>`,

`<div class="depth depth--standed_out border_radius border_radius--default">
  <!--
  Content goes here
  If you want to use it as a card, don't do it. Instead, use the class "card"
  -->
</div>`,

`<div class="depth depth--above_all border_radius border_radius--default">
  <!--
  Content goes here
  If you want to use it as a card, don't do it. Instead, use the class "card"
  -->
</div>`,
    ];

  }

  render() {

    return (
      <TemplateDefault
        pageTitle="Depth"
        activeParent="design"
        activeChild="depth">

        <TemplateComponentBlock blockTitle="Landed" elements={this.elements[0]} codeSnippets={this.codeSnippets[0]} />
        <TemplateComponentBlock blockTitle="Emboss" elements={this.elements[1]} codeSnippets={this.codeSnippets[1]} />
        <TemplateComponentBlock blockTitle="Standed Out" elements={this.elements[2]} codeSnippets={this.codeSnippets[2]} />
        <TemplateComponentBlock blockTitle="Above All" elements={this.elements[3]} codeSnippets={this.codeSnippets[3]} />

      </TemplateDefault>
    )
  }

}
