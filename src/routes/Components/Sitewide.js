import React, {Component} from "react";
import TemplateDefault from '../../components/TemplateDefault';
import TemplateComponentBlock from '../../components/TemplateComponentBlock';

export default class Sitewide extends Component {

  constructor(props) {
    super(props);

    this.elements = [
      `<div class="p-md-5 p-3">
        	<div class="collage bg_color_cement_light" style="max-width:525px;">
        		<a class="collage_item" href="#" style="background-image: url(https://pics.harstatic.com/agent/614682.jpg?ts=2019-05-13T18:54:00);filter: grayscale(1);"></a>
        		<a class="collage_item" href="#" style="background-image: url(https://pics.harstatic.com/agent/724268.jpg?ts=2019-08-27T08:22:00);filter: grayscale(1);"></a>
        		<a class="collage_item" href="#" style="background-image: url(https://pics.harstatic.com/agent/657743.jpg?ts=2016-01-20T16:48:00);filter: grayscale(1);"></a>
        		<a class="collage_item" href="#" style="background-image: url(https://pics.harstatic.com/agent/571069.jpg?ts=2020-03-09T13:29:00);filter: grayscale(1);"></a>
        		<a class="collage_item" href="#" style="background-image: url(https://pics.harstatic.com/agent/592300.jpg?ts=2021-02-11T09:55:00);filter: grayscale(1);"></a>
        		<a class="collage_item" href="#" style="background-image: url(https://pics.harstatic.com/agent/95470905.jpg?ts=2016-06-27T16:32:00);filter: grayscale(1);"></a>
        		<a class="collage_item" href="#" style="background-image: url(https://pics.harstatic.com/agent/646680.jpg?ts=2015-10-16T18:33:00);filter: grayscale(1);"></a>
        		<a class="collage_item" href="#" style="background-image: url(https://pics.harstatic.com/agent/744599.jpg?ts=2020-10-09T09:31:00);filter: grayscale(1);"></a>
        		<a class="collage_item" href="#" style="background-image: url(https://pics.harstatic.com/agent/699976.jpg?ts=2019-11-06T16:38:00);filter: grayscale(1);"></a>
        		<a class="collage_item" href="#" style="background-image: url(https://pics.harstatic.com/agent/614682.jpg?ts=2019-05-13T18:54:00);filter: grayscale(1);"></a>
        		<a class="collage_item" href="#" style="background-image: url(https://pics.harstatic.com/agent/724268.jpg?ts=2019-08-27T08:22:00);filter: grayscale(1);"></a>
        		<a class="collage_item" href="#" style="background-image: url(https://pics.harstatic.com/agent/657743.jpg?ts=2016-01-20T16:48:00);filter: grayscale(1);"></a>
        		<a class="collage_item" href="#" style="background-image: url(https://pics.harstatic.com/agent/571069.jpg?ts=2020-03-09T13:29:00);filter: grayscale(1);"></a>
        		<a class="collage_item" href="#" style="background-image: url(https://pics.harstatic.com/agent/592300.jpg?ts=2021-02-11T09:55:00);filter: grayscale(1);"></a>
        		<a class="collage_item" href="#" style="background-image: url(https://pics.harstatic.com/agent/95470905.jpg?ts=2016-06-27T16:32:00);filter: grayscale(1);"></a>
        		<a class="collage_item" href="#" style="background-image: url(https://pics.harstatic.com/agent/646680.jpg?ts=2015-10-16T18:33:00);filter: grayscale(1);"></a>
        		<a class="collage_item" href="#" style="background-image: url(https://pics.harstatic.com/agent/744599.jpg?ts=2020-10-09T09:31:00);filter: grayscale(1);"></a>
        		<a class="collage_item" href="#" style="background-image: url(https://pics.harstatic.com/agent/699976.jpg?ts=2019-11-06T16:38:00);filter: grayscale(1);"></a>
        		<a class="collage_item" href="#" style="background-image: url(https://pics.harstatic.com/agent/614682.jpg?ts=2019-05-13T18:54:00);filter: grayscale(1);"></a>
        		<a class="collage_item" href="#" style="background-image: url(https://pics.harstatic.com/agent/724268.jpg?ts=2019-08-27T08:22:00);filter: grayscale(1);"></a>
        		<a class="collage_item" href="#" style="background-image: url(https://pics.harstatic.com/agent/657743.jpg?ts=2016-01-20T16:48:00);filter: grayscale(1);"></a>
        		<a class="collage_item" href="#" style="background-image: url(https://pics.harstatic.com/agent/571069.jpg?ts=2020-03-09T13:29:00);filter: grayscale(1);"></a>
        		<a class="collage_item" href="#" style="background-image: url(https://pics.harstatic.com/agent/592300.jpg?ts=2021-02-11T09:55:00);filter: grayscale(1);"></a>
        		<a class="collage_item" href="#" style="background-image: url(https://pics.harstatic.com/agent/95470905.jpg?ts=2016-06-27T16:32:00);filter: grayscale(1);"></a>
        		<a class="collage_item" href="#" style="background-image: url(https://pics.harstatic.com/agent/646680.jpg?ts=2015-10-16T18:33:00);filter: grayscale(1);"></a>
        		<a class="collage_item" href="#" style="background-image: url(https://pics.harstatic.com/agent/744599.jpg?ts=2020-10-09T09:31:00);filter: grayscale(1);"></a>
        		<a class="collage_item" href="#" style="background-image: url(https://pics.harstatic.com/agent/699976.jpg?ts=2019-11-06T16:38:00);filter: grayscale(1);"></a>
        		<a class="collage_item" href="#" style="background-image: url(https://pics.harstatic.com/agent/614682.jpg?ts=2019-05-13T18:54:00);filter: grayscale(1);"></a>
        		<a class="collage_item" href="#" style="background-image: url(https://pics.harstatic.com/agent/724268.jpg?ts=2019-08-27T08:22:00);filter: grayscale(1);"></a>
        		<a class="collage_item" href="#" style="background-image: url(https://pics.harstatic.com/agent/657743.jpg?ts=2016-01-20T16:48:00);filter: grayscale(1);"></a>
        		<div class="clearfix"></div>
        	</div>
       </div>`,
       `<div class="row">
        	<div class="col col-8">
        		<div class="alertbox alertbox--warning"><span class="font_weight--bold">Warning:</span> Answers provided are just opinions and should not be accepted as advice.</div>
        	</div>
       </div>`,
       `<div class="row">
        	<div class="col col-12">
        		<div class="tabuler tabuler--list">
        			<div class="tabuler--list__img"><a href="#" style="background-image: url(https://content.harstatic.com/high_rise/lr/1051_1.jpg);"></a></div>
        			<div class="tabuler--list__content">
        				<div class="tabuler--list__content_address"><a href="#">1000 West Clay Condos</a></div>
        				<div class="tabuler--list__content_city"><a href="#">Houston</a></div>
        				<div class="tabuler--list__clear"></div>    				
        				<div class="tabuler--list__content_info">0 unit</div>
        				<div class="tabuler--list__content_info">3 floor</div>
        				<div class="tabuler--list__content_info">0 penthouse</div>
        				<div class="tabuler--list__clear"></div>
        				<div class="tabuler--list__content_listings"><a href="#">0 listing</a></div>
        				<div class="clearfix"></div>
        			</div>
        			<div class="clearfix"></div>
        		</div>
        	</div>
       </div>`,
       `<div class="row">
        	<div class="col col-12">
        		<div class="disclaimer">
        			<div class="disclaimer__title">Notice & Disclaimer</div>
        			<div class="disclaimer__text">        				
						Marlowe - 1311 Polk St, Houston, TX 77002 - Highrise condominium can be found using Highrise Finder. For more information on Highrise Finder contact support@har.com or call 713.629.1900 Ext. 374.
					</div>
        		</div>
        	</div>
       </div>`,
       `<div class="row">
        	<div class="col col-12">
        		<img class="flag flag--small" src="https://content.harstatic.com/resources/images/find_a_pro/flags_mini/uk.jpg">
        		<img class="flag flag--small" src="https://content.harstatic.com/resources/images/find_a_pro/flags_mini/kr.jpg">
        		<img class="flag flag--small" src="https://content.harstatic.com/resources/images/find_a_pro/flags_mini/dk.jpg">
        		<img class="flag flag--small" src="https://content.harstatic.com/resources/images/find_a_pro/flags_mini/no.jpg">

				<div class="component_content__demo__description">Flags Small</div>
        	</div>
       </div>
	   <div class="row">
        	<div class="col col-12">
        		<img class="flag flag--mini" src="https://content.harstatic.com/resources/images/find_a_pro/flags_mini/uk.jpg">
        		<img class="flag flag--mini" src="https://content.harstatic.com/resources/images/find_a_pro/flags_mini/kr.jpg">
        		<img class="flag flag--mini" src="https://content.harstatic.com/resources/images/find_a_pro/flags_mini/dk.jpg">
        		<img class="flag flag--mini" src="https://content.harstatic.com/resources/images/find_a_pro/flags_mini/no.jpg">

				<div class="component_content__demo__description">Flags mini</div>
        	</div>
       </div>
       <div class="row">
        	<div class="col col-12">
        		<div class="certificate certificate--small">CSMS</div>
				<div class="certificate certificate--small">GRI</div>				
        	</div>
       </div>`,
    ];


    this.codeSnippets = [
`<div class="collage bg_color_cement_light" style="max-width:525px;">
	<a class="collage_item" href="#" style="background-image: url(https://pics.harstatic.com/agent/614682.jpg?ts=2019-05-13T18:54:00);filter: grayscale(1);"></a>
	<a class="collage_item" href="#" style="background-image: url(https://pics.harstatic.com/agent/724268.jpg?ts=2019-08-27T08:22:00);filter: grayscale(1);"></a>
	<a class="collage_item" href="#" style="background-image: url(https://pics.harstatic.com/agent/657743.jpg?ts=2016-01-20T16:48:00);filter: grayscale(1);"></a>
	<a class="collage_item" href="#" style="background-image: url(https://pics.harstatic.com/agent/571069.jpg?ts=2020-03-09T13:29:00);filter: grayscale(1);"></a>
	<a class="collage_item" href="#" style="background-image: url(https://pics.harstatic.com/agent/592300.jpg?ts=2021-02-11T09:55:00);filter: grayscale(1);"></a>
	<a class="collage_item" href="#" style="background-image: url(https://pics.harstatic.com/agent/95470905.jpg?ts=2016-06-27T16:32:00);filter: grayscale(1);"></a>
	<a class="collage_item" href="#" style="background-image: url(https://pics.harstatic.com/agent/646680.jpg?ts=2015-10-16T18:33:00);filter: grayscale(1);"></a>
	<a class="collage_item" href="#" style="background-image: url(https://pics.harstatic.com/agent/744599.jpg?ts=2020-10-09T09:31:00);filter: grayscale(1);"></a>
	<a class="collage_item" href="#" style="background-image: url(https://pics.harstatic.com/agent/699976.jpg?ts=2019-11-06T16:38:00);filter: grayscale(1);"></a>
	<a class="collage_item" href="#" style="background-image: url(https://pics.harstatic.com/agent/614682.jpg?ts=2019-05-13T18:54:00);filter: grayscale(1);"></a>
	<a class="collage_item" href="#" style="background-image: url(https://pics.harstatic.com/agent/724268.jpg?ts=2019-08-27T08:22:00);filter: grayscale(1);"></a>
	<a class="collage_item" href="#" style="background-image: url(https://pics.harstatic.com/agent/657743.jpg?ts=2016-01-20T16:48:00);filter: grayscale(1);"></a>
	<a class="collage_item" href="#" style="background-image: url(https://pics.harstatic.com/agent/571069.jpg?ts=2020-03-09T13:29:00);filter: grayscale(1);"></a>
	<a class="collage_item" href="#" style="background-image: url(https://pics.harstatic.com/agent/592300.jpg?ts=2021-02-11T09:55:00);filter: grayscale(1);"></a>
	<a class="collage_item" href="#" style="background-image: url(https://pics.harstatic.com/agent/95470905.jpg?ts=2016-06-27T16:32:00);filter: grayscale(1);"></a>
	<a class="collage_item" href="#" style="background-image: url(https://pics.harstatic.com/agent/646680.jpg?ts=2015-10-16T18:33:00);filter: grayscale(1);"></a>
	<a class="collage_item" href="#" style="background-image: url(https://pics.harstatic.com/agent/744599.jpg?ts=2020-10-09T09:31:00);filter: grayscale(1);"></a>
	<a class="collage_item" href="#" style="background-image: url(https://pics.harstatic.com/agent/699976.jpg?ts=2019-11-06T16:38:00);filter: grayscale(1);"></a>
	<a class="collage_item" href="#" style="background-image: url(https://pics.harstatic.com/agent/614682.jpg?ts=2019-05-13T18:54:00);filter: grayscale(1);"></a>
	<a class="collage_item" href="#" style="background-image: url(https://pics.harstatic.com/agent/724268.jpg?ts=2019-08-27T08:22:00);filter: grayscale(1);"></a>
	<a class="collage_item" href="#" style="background-image: url(https://pics.harstatic.com/agent/657743.jpg?ts=2016-01-20T16:48:00);filter: grayscale(1);"></a>
	<a class="collage_item" href="#" style="background-image: url(https://pics.harstatic.com/agent/571069.jpg?ts=2020-03-09T13:29:00);filter: grayscale(1);"></a>
	<a class="collage_item" href="#" style="background-image: url(https://pics.harstatic.com/agent/592300.jpg?ts=2021-02-11T09:55:00);filter: grayscale(1);"></a>
	<a class="collage_item" href="#" style="background-image: url(https://pics.harstatic.com/agent/95470905.jpg?ts=2016-06-27T16:32:00);filter: grayscale(1);"></a>
	<a class="collage_item" href="#" style="background-image: url(https://pics.harstatic.com/agent/646680.jpg?ts=2015-10-16T18:33:00);filter: grayscale(1);"></a>
	<a class="collage_item" href="#" style="background-image: url(https://pics.harstatic.com/agent/744599.jpg?ts=2020-10-09T09:31:00);filter: grayscale(1);"></a>
	<a class="collage_item" href="#" style="background-image: url(https://pics.harstatic.com/agent/699976.jpg?ts=2019-11-06T16:38:00);filter: grayscale(1);"></a>
	<a class="collage_item" href="#" style="background-image: url(https://pics.harstatic.com/agent/614682.jpg?ts=2019-05-13T18:54:00);filter: grayscale(1);"></a>
	<a class="collage_item" href="#" style="background-image: url(https://pics.harstatic.com/agent/724268.jpg?ts=2019-08-27T08:22:00);filter: grayscale(1);"></a>
	<a class="collage_item" href="#" style="background-image: url(https://pics.harstatic.com/agent/657743.jpg?ts=2016-01-20T16:48:00);filter: grayscale(1);"></a>
	<div class="clearfix"></div>
</div>`,
`<div class="alertbox alertbox--warning"><span class="font_weight--bold">Warning:</span> Answers provided are just opinions and should not be accepted as advice.</div>
`,			
];

  }

  render(){
    return (
      <TemplateDefault
        pageTitle="Sitewide"
        activeParent="components"
        activeChild="sitewide">

        <TemplateComponentBlock blockTitle="Photo Collage" elements={this.elements[0]} codeSnippets={this.codeSnippets[0]} />
        <TemplateComponentBlock blockTitle="Alert Boxes" elements={this.elements[1]} codeSnippets={this.codeSnippets[1]} />
        <TemplateComponentBlock blockTitle="Tabuler Data" elements={this.elements[2]} codeSnippets={this.codeSnippets[2]} />
        <TemplateComponentBlock blockTitle="Disclaimer" elements={this.elements[3]} codeSnippets={this.codeSnippets[3]} />
        <TemplateComponentBlock blockTitle="Disclaimer" elements={this.elements[4]} codeSnippets={this.codeSnippets[4]} />
        
      </TemplateDefault>
    )
  }

}
