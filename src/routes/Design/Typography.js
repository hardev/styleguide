import React, {Component} from "react";
import TemplateDefault from '../../components/TemplateDefault';
import TemplateComponentBlock from '../../components/TemplateComponentBlock';

export default class Typography extends Component {

  constructor(props) {
    super(props);

    this.elements = [
      `<div class="row">
        <div class="col col-12">

          <div class="font_size font_size--large_extra text_align_left">
            A B C D E F G H I J K L M N O P Q R S T U V W X Y Z<br />
            a b c d e f g h i j k l m n o p q r s t u v w x y z<br />
            0 1 2 3 4 5 6 7 8 9
          </div>

          <div class="component_content__demo__description">
            Primary typeface: <strong>Inter</strong>
          </div>
        </div>
        <div class="clear_both"></div>
      </div>`,

      `<div class="row">
        <div class="col col-12">

          <div class="font_size font_size--large_extra_extra_extra_extra text_align_left">
            Find your home in Texas
          </div>

          <div class="component_content__demo__description">
            48px – Extra extra extra extra large
          </div>
        </div>
        <div class="clear_both"></div>
      </div>
      <hr />
      <div class="row">
        <div class="col col-12">

          <div class="font_size font_size--large_extra_extra_extra text_align_left">
            Find your home in Texas
          </div>

          <div class="component_content__demo__description">
            32px – Extra extra extra large
          </div>
        </div>
        <div class="clear_both"></div>
      </div>
      <hr />
      <div class="row">
        <div class="col col-12">

          <div class="font_size font_size--large_extra_extra text_align_left">
            Find your home in Texas
          </div>

          <div class="component_content__demo__description">
            24px – Extra extra large
          </div>
        </div>
        <div class="clear_both"></div>
      </div>
      <hr />
      <div class="row">
        <div class="col col-12">

          <div class="font_size font_size--large_extra text_align_left">
            Find your home in Texas
          </div>

          <div class="component_content__demo__description">
            18px – Extra large
          </div>
        </div>
        <div class="clear_both"></div>
      </div>
      <hr />
      <div class="row">
        <div class="col col-12">

          <div class="font_size font_size--large text_align_left">
            Find your home in Texas
          </div>

          <div class="component_content__demo__description">
            16px – Large
          </div>
        </div>
        <div class="clear_both"></div>
      </div>
      <hr />
      <div class="row">
        <div class="col col-12">

          <div class="font_size font_size--medium text_align_left">
            Find your home in Texas
          </div>

          <div class="component_content__demo__description">
            14px – Medium
          </div>
        </div>
        <div class="clear_both"></div>
      </div>
      <hr />
      <div class="row">
        <div class="col col-12">

          <div class="font_size font_size--small text_align_left">
            Find your home in Texas
          </div>

          <div class="component_content__demo__description">
            12px – Small
          </div>
        </div>
        <div class="clear_both"></div>
      </div>
      <hr />
      <div class="row">
        <div class="col col-12">

          <div class="font_size font_size--small_extra text_align_left">
            Find your home in Texas
          </div>

          <div class="component_content__demo__description">
            11px – Extra small
          </div>
        </div>
        <div class="clear_both"></div>
      </div>`,

      `<div class="row">
        <div class="col col-sm-3 col-6">
          <span class="font_weight font_weight--light font_size font_size--large_extra_extra_extra">
            Hr
          </span>
          <div class="component_content__demo__description">
            Inter Light
          </div>
        </div>

        <div class="col col-sm-3 col-6">
          <span class="font_weight font_weight--regular font_size font_size--large_extra_extra_extra">
            Hr
          </span>
          <div class="component_content__demo__description">
            Inter Regular
          </div>
        </div>

        <div class="col col-sm-3 col-6">
          <span class="font_weight font_weight--semi_bold font_size font_size--large_extra_extra_extra">
            Hr
          </span>
          <div class="component_content__demo__description">
            Inter Semi Bold
          </div>
        </div>

        <div class="col col-sm-3 col-6">
          <span class="font_weight font_weight--bold font_size font_size--large_extra_extra_extra">
            Hr
          </span>
          <div class="component_content__demo__description">
            Inter Bold
          </div>
        </div>
        <div class="clear_both"></div>
      </div>`,

      `
      
      <div class="row text-left">
        <div class="col col-12">

          <h1 tabindex="0" style="margin-bottom: 0;">
            Find your home in Texas
          </h1>

          <div class="component_content__demo__description">
            H1 – Main page
          </div>
        </div>
        <div class="clear_both"></div>
      </div>
      <hr />
      <div class="row text-left">
        <div class="col col-12">

          <h2 tabindex="0" class="h2 h2--strong" style="margin-bottom: 0;">
            Find your home in Texas
          </h2>

          <div class="component_content__demo__description">
            H2 – Strong
          </div>
        </div>
        <div class="clear_both"></div>
      </div>
      
      <hr />
      <div class="row text-left">
        <div class="col col-12">

          <h2 tabindex="0" class="h2 h2--strong h2--centerline"><span>Stay closer to HAR</span></h2>

          <div class="component_content__demo__description">
            H2 – Strong
          </div>
        </div>
        <div class="clear_both"></div>
      </div>      
      
      <hr />
      <div class="row text-left">
        <div class="col col-12">

          <h1 tabindex="0" class="h1--inner_page" style="margin-bottom: 0;">
            Find real estate agents
          </h1>

          <div class="component_content__demo__description">
            H1 – Inner page
          </div>
        </div>
        <div class="clear_both"></div>
      </div>
      <hr />
      <div class="row">
        <div class="col col-12">

          <h2 tabindex="0" style="margin-bottom: 0;">
            Latest real estate blog posts
          </h2>

          <div class="component_content__demo__description">
            H2
          </div>
        </div>
        <div class="clear_both"></div>
      </div>
	  
	  <hr />
      <div class="row">
        <div class="col col-12">

          <h2 tabindex="0" class="h2--simple">
            Latest real estate blog posts
          </h2>

          <div class="component_content__demo__description">
            H2 without line
          </div>
        </div>
        <div class="clear_both"></div>
      </div>

	  <hr />
      <div class="row">
        <div class="col col-12">

          <h2 tabindex="0" class="h2--simple h2--simple__black">
            Latest real estate blog posts
          </h2>

          <div class="component_content__demo__description">
            H2 Black
          </div>
        </div>
        <div class="clear_both"></div>
      </div>


	  <hr />
      <div class="row">
        <div class="col col-12">

          <h2 tabindex="0" class="h2--light">
            Find your dream home in Texas          
          </h2>

          <div class="component_content__demo__description">
            H2 Light
          </div>
        </div>
        <div class="clear_both"></div>
      </div>


      <hr />
      <div class="row">
        <div class="col col-12">

          <h3 tabindex="0" style="margin-bottom: 0;">
            Resources links
          </h3>

          <div class="component_content__demo__description">
            H3
          </div>
        </div>
        <div class="clear_both"></div>
      </div>
      <hr />
      <div class="row">
        <div class="col col-12">

          <h4 tabindex="0" style="margin-bottom: 0;">
            Sahar Mutammara
          </h4>

          <div class="component_content__demo__description">
            H4
          </div>
        </div>
        <div class="clear_both"></div>
      </div>`,

      `<div class="component_content__negative_content">
        <div class="row">
          <div class="col col-12 text-left">

            <h1 tabindex="0" class="h1--negative" style="margin-bottom: 0;">
              Find your home in Texas
            </h1>

            <div class="component_content__demo__description">
              H1 – Main page
            </div>
          </div>
          <div class="clear_both"></div>
        </div>
        <hr />
        <div class="row">
          <div class="col col-12 text-left">

            <h1 tabindex="0" class="h1--inner_page h1--negative" style="margin-bottom: 0;">
              Find real estate agents
            </h1>

            <div class="component_content__demo__description">
              H1 – Inner page
            </div>
          </div>
          <div class="clear_both"></div>
        </div>
        <hr />
        <div class="row">
          <div class="col col-12">

            <h2 tabindex="0" class="h2--negative" style="margin-bottom: 0;">
              Latest real estate blog posts
            </h2>

            <div class="component_content__demo__description">
              H2
            </div>
          </div>
          <div class="clear_both"></div>
        </div>
        <hr />
        <div class="row">
          <div class="col col-12">

            <h3 tabindex="0" class="h3--negative" style="margin-bottom: 0;">
              Resources links
            </h3>

            <div class="component_content__demo__description">
              H3
            </div>
          </div>
          <div class="clear_both"></div>
        </div>
        <hr />
        <div class="row">
          <div class="col col-12">

            <h4 tabindex="0" class="h4--negative" style="margin-bottom: 0;">
              Sahar Mutammara
            </h4>

            <div class="component_content__demo__description">
              H4
            </div>
          </div>
          <div class="clear_both"></div>
        </div>
      </div>`,

      `<div class="row text-left">
        <div class="col col-sm-6 col-12">
          <ul class="list list--inside">
			<li>List Item</li>
			<li>Item can be any text</li>
		  </ul>
          
          <div class="component_content__demo__description">
            List Inside style
          </div>
        </div>
        <div class="clear_both"></div>
      </div>
      <div class="row text-left">
        <div class="col col-12">
          <ul class="list list--blue">
			<li>Should I refinance?</li>
			<li>How much will my fixed rate mortgage payment be?</li>
			<li>How much will my adjustable rate mortgage payments be?</li>
			<li>How much will my payments be for a ballon mortgage?</li>
			<li>Should I rent or buy?</li>
		  </ul>
          
          <div class="component_content__demo__description">
            List style blue
          </div>
        </div>
        <div class="clear_both"></div>
      </div>`
      ,

      `<div class="row text-left">
        <div class="col col-sm-6 col-12">
          <div class="tagline_text">Your real estate market</div>
        </div>
        <div class="clear_both"></div>
      </div>`,
    ];


    this.codeSnippets = [
`<div class="font_size font_size--large_extra">
  A B C D E F G H I J K L M N O P Q R S T U V W X Y Z<br />
  a b c d e f g h i j k l m n o p q r s t u v w x y z<br />
  0 1 2 3 4 5 6 7 8 9
</div>`,

`<div class="font_size font_size--large_extra_extra_extra_extra">
  Find your home in Texas
</div>
<div class="font_size font_size--large_extra_extra_extra">
  Find your home in Texas
</div>
<div class="font_size font_size--large_extra_extra">
  Find your home in Texas
</div>
<div class="font_size font_size--large_extra">
  Find your home in Texas
</div>
<div class="font_size font_size--large">
  Find your home in Texas
</div>
<div class="font_size font_size--medium">
  Find your home in Texas
</div>
<div class="font_size font_size--small">
  Find your home in Texas
</div>
<div class="font_size font_size--small_extra">
  Find your home in Texas
</div>`,

`<span class="font_weight font_weight--light">Hr</span>
<span class="font_weight font_weight--regular">Hr</span>
<span class="font_weight font_weight--semi_bold">Hr</span>
<span class="font_weight font_weight--bold">Hr</span>`,

`<h1 tabindex="0">Find your home in Texas</h1>
<h1 tabindex="0" class="h1--inner_page">Find real estate agents</h1>
<h2 tabindex="0">Latest real estate blog posts</h2>
<h3 tabindex="0">Resources links</h3>
<h4 tabindex="0">Sahar Mutammara</h4>`,

`<h1 tabindex="0" class="h1--negative">Find your home in Texas</h1>
<h1 tabindex="0" class="h1--inner_page h1--negative">Find real estate agents</h1>
<h2 tabindex="0" class="h2--negative">Latest real estate blog posts</h2>
<h3 tabindex="0" class="h3--negative">Resources links</h3>
<h4 tabindex="0" class="h4--negative">Sahar Mutammara</h4>`,

`<ul class="list list--inside">
	<li>List Item</li>
	<li>List item can be any thing</li>
</ul>`,
    ];

  }

  render() {

    return (
      <TemplateDefault
        pageTitle="Typography"
        activeParent="design"
        activeChild="typography">

        <TemplateComponentBlock blockTitle="Typeface" elements={this.elements[0]} codeSnippets={this.codeSnippets[0]} />
        <TemplateComponentBlock blockTitle="Font sizes" elements={this.elements[1]} codeSnippets={this.codeSnippets[1]} />
        <TemplateComponentBlock blockTitle="Font weights" elements={this.elements[2]} codeSnippets={this.codeSnippets[2]} />
        <TemplateComponentBlock blockTitle="Headings" elements={this.elements[3]} codeSnippets={this.codeSnippets[3]} />
        <TemplateComponentBlock blockTitle="Negative headings" elements={this.elements[4]} codeSnippets={this.codeSnippets[4]} />
        <TemplateComponentBlock blockTitle="List Style" elements={this.elements[5]} codeSnippets={this.codeSnippets[5]} />
        <TemplateComponentBlock blockTitle="Others" elements={this.elements[6]} codeSnippets={this.codeSnippets[6]} />

      </TemplateDefault>
    )
  }

}
