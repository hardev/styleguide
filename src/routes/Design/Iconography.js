import React, {Component} from "react";
import TemplateDefault from '../../components/TemplateDefault';
import TemplateComponentBlock from '../../components/TemplateComponentBlock';

export default class Iconography extends Component {

  constructor(props) {
    super(props);

    this.elements = [
      `<div class="row justify-content-center">
        <div class="col col-sm-3 col-12">
          <a class="iconlink iconlink--basic" href="#"><span><img src="https://content.harstatic.com/media/icons/forbuttons/icons-16-x-16-charts-pie.svg"></span>Data Insight</a>
          <div class="component_content__demo__description">
            
          </div>
        </div>
        <div class="col col-sm-3 col-12">
          <a class="iconlink iconlink--basic" href="#"><span><img src="https://content.harstatic.com/media/icons/forbuttons/icons-16-x-16-school.svg"></span>School</a>
          <div class="component_content__demo__description">
            
          </div>
        </div>
        <div class="col col-sm-3 col-12">
          <a class="iconlink iconlink--basic" href="#"><span><img src="https://content.harstatic.com/media/icons/forbuttons/icons-16-x-16-dollar-sign.svg"></span>Financial</a>
          <div class="component_content__demo__description">
            
          </div>
        </div>
        <div class="col col-sm-3 col-12">
          <a class="iconlink iconlink--basic" href="#"><span><img src="https://content.harstatic.com/media/icons/forbuttons/icons-16-x-16-save.svg"></span>Share</a>
          <div class="component_content__demo__description">
            
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
    ];

  }

  render() {

    return (
      <TemplateDefault
        pageTitle="Iconography"
        activeParent="design"
        activeChild="iconography">

        <TemplateComponentBlock blockTitle="Icon Link Basic" elements={this.elements[0]} codeSnippets={this.codeSnippets[0]} />

      </TemplateDefault>
    )
  }

}
