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
      </div>
      
      <div class="row justify-content-center">
        <div class="col col-sm-3 col-12">
          <div class="icon icon--circle"><img src="https://content.harstatic.com/media/icons/icon-crm-shared-file.svg"></div>
          <div class="component_content__demo__description">
            
          </div>
        </div>
        <div class="col col-sm-3 col-12">
          <div class="icon icon--circle icon--circle_large"><img src="https://content.harstatic.com/media/icons/claim_yourprofile/illustration-enhance-your-profile_.svg"></div>
          <div class="component_content__demo__description">
            
          </div>
        </div>
        <div class="col col-sm-3 col-12">
          <div class="icon_square"><span><img src="https://content.harstatic.com/media/icons/mls_subscriber_icons/icon-har-pro-archive-report.svg"></span></div>
          <div class="component_content__demo__description">
            
          </div>
        </div>
        <div class="col col-sm-3 col-12">
          
          <div class="component_content__demo__description">
            
          </div>
        </div>
        <div class="clear_both"></div>
      </div>
      
      
      `,
      `
      <div class="row justify-content-center">
        <div class="col col-sm-12 col-12">
        	<div class="d-inline-block pr-3">
        		<button type="button" class="btn btn--ordinary btn--icon--onlyicon btn--icon btn--icon--favorite">
        	</div>
        	<div class="d-inline-block pr-3">
        		<button type="button" class="btn btn--ordinary btn--small btn--icon--onlyicon btn--icon btn--icon--favorite">
        	</div>
        	<div class="d-inline-block pr-3">
        		<button type="button" class="btn btn--icon--borderless btn--icon btn--icon--favorite"></button>
        	</div>	
        	
        	<br><br>
        	
        	<div class="d-inline-block pr-3">
        		<button type="button" class="btn btn--ordinary btn--icon--onlyicon btn--icon btn--icon--favorited">
        	</div>
        	<div class="d-inline-block pr-3">
        		<button type="button" class="btn btn--ordinary btn--small btn--icon--onlyicon btn--icon btn--icon--favorited">
        	</div>
        	<div class="d-inline-block pr-3">
        		<button type="button" class="btn btn--icon--borderless btn--icon btn--icon--favorited"></button>
        	</div>
        	
        	<br><br>
        	
        	<button class="btn btn--ordinary btn--icon btn--icon--onlyicon btn--icon--full btn--icon--audio btn--large"></button>
        	<button class="btn btn--ordinary btn--icon btn--icon--onlyicon btn--icon--full btn--icon--play btn--large"></button>
        	<button class="btn btn--ordinary btn--icon btn--icon--onlyicon btn--icon--full btn--icon--tour btn--large"></button>
        	<button class="btn btn--ordinary btn--icon btn--icon--gallery btn--large">View Gallery (43 photos)</button>
        </div>
      </div>
      `,
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
        <TemplateComponentBlock blockTitle="Icon Buttons" elements={this.elements[1]} codeSnippets={this.codeSnippets[1]} />

      </TemplateDefault>
    )
  }

}
