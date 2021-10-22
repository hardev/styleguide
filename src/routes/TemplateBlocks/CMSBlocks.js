import React, {Component} from "react";
import TemplateExpanded from '../../components/TemplateExpanded';
import TemplateComponentBlock from '../../components/TemplateComponentBlock';

export default class CMSBlocks extends Component {

  constructor(props) {
    super(props);

    this.elements = [
      `
        
        <!-- leftright image content -->
        <div class="row">
        	<div class="col-md-6 col-12 order-md-0 order-0">
        		<div class="imageframe imageframe--artwork">
		          	<div class="imageframe--artwork__icon">
		          		<img style="max-width:250px;" src="https://content.harstatic.com/media/artwork/help_center/chat_1@2x.png">
		          	</div>
		        </div>
        	</div>
        	<div class="col-md-6 col-12 pt-5 content__halfimage order-md-1 order-1">
        		<h2 tabindex="0">Frequently Asked Questions</h2>
        		<p class="font_size--large pb-4">
        			We have put together some of the most frequently asked questions about HAR.com based on feedback from our users. We've done our level best to make this FAQ as informative as possible with tutorial videos and detailed explanations of content on the site. If you have suggestions for improvements, please let us know.
        		</p>
        		<button role="button" class="btn btn--ordinary btn--large">Watch how it works</button>
        	</div>
        </div>
        
		`,
      ``
    ];


    this.codeSnippets = [
``,

    ];

  }

  render() {

    return (
      <TemplateExpanded
        pageTitle="CMSBlocks"
        activeParent="template_blocks"
        activeChild="cmsblocks">

        <TemplateComponentBlock hasContainer={false} blockTitle="image Blocks" elements={this.elements[0]} codeSnippets={this.codeSnippets[0]} />

      </TemplateExpanded>
    )
  }

}
