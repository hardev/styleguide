import React, {Component} from "react";
import TemplateDefault from '../../components/TemplateDefault';
import TemplateComponentBlock from '../../components/TemplateComponentBlock';

export default class Images extends Component {

  constructor(props) {
    super(props);

    this.elements = [
      `<div class="row justify-content-center">
        <div class="col col-md-8 col-12">
          <div class="imageframe imageframe--artwork">
          	<div class="imageframe--artwork__icon">
          		<img style="max-width:250px;" src="https://content.harstatic.com/media/artwork/help_center/chat_1@2x.png">
          	</div>
          </div>
        </div>
        <div class="col col-md-4 col-12">
          
        </div>
        <div class="clear_both"></div>
      </div>
      
      `,
      `
      <div class="row justify-content-center">
        <div class="col col-md-8 col-12">
        	<a href="#" class="imageframe imageframe--video">
				<img src="https://content.harstatic.com/media/temprary/video_bg_img.png">
			</a>
		</div>
	  </div>
      `,
    ];


    this.codeSnippets = [
``,
    ];

  }

  render() {

    return (
      <TemplateDefault
        pageTitle="Iconography"
        activeParent="design"
        activeChild="iconography">

        <TemplateComponentBlock blockTitle="Icon Link Basic" elements={this.elements[0]} codeSnippets={this.codeSnippets[0]} />
        <TemplateComponentBlock blockTitle="Video icon with image" elements={this.elements[1]} codeSnippets={this.codeSnippets[1]} />

      </TemplateDefault>
    )
  }

}
