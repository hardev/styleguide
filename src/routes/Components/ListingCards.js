import React, {Component} from "react";
import TemplateDefault from '../../components/TemplateDefault';
import TemplateComponentBlock from '../../components/TemplateComponentBlock';


export default class ListingCards extends Component {

  constructor(props) {
    super(props);

    this.elements = [
      `<div class="row text-left">
        <div class="col-6">
			<a href="#" class="card card--badge_horizental depth depth--emboss text-decoration-none" style="background-image:url(https://content.harstatic.com/resource_2019/imgs/temprary/badges.jpg);">
				<div class="content">
					<div class="font_size--large font_weight--bold mb-2 color_black">Open House</div>
					<span class="text">Pay a visit to several properties open for you</span>
				</div>
			</a>
		</div>
		
		<div class="col-6">
			<a href="#" class="card card--badge_horizental depth depth--emboss text-decoration-none" style="background-image:url(https://content.harstatic.com/resource_2019/imgs/temprary/badges.jpg);">
				<div class="content">
					<div class="font_size--large font_weight--bold mb-2 color_black">Open House</div>
					<span class="text">Pay a visit to several properties open for you</span>
				</div>
			</a>
		</div>
      </div>`,
      
      `<div class="row text-left">
        <div class="col-3">
			<a href="#" class="card card--badge_vertical depth depth--emboss border_radius--default" style="background-image:url(https://content.harstatic.com/resource_2019/imgs/temprary/city_badge2.jpg);">
				<div class="content">
					<div class="font_size--medium font_weight--bold mb-2 text-decoration-none color_black d-block" tabindex="0">Houston</div>
					<div class="text mb-1"><span class="color_carbon font_weight--bold">5,803</span> Homes for Sale</div>
					<div class="text"><span class="color_carbon font_weight--bold">$506K</span> Avg. price</div>
				</div>
			</a>
		</div>
		
		<div class="col-3">
			<a href="#" class="card card--badge_vertical depth depth--emboss border_radius--default" style="background-image:url(https://content.harstatic.com/resource_2019/imgs/temprary/city_badge2.jpg);">
				<div class="content">
					<div class="font_size--medium font_weight--bold mb-2 text-decoration-none color_black d-block" tabindex="0">Houston</div>
					<div class="text mb-1"><span class="color_carbon font_weight--bold">5,803</span> Homes for Sale</div>
					<div class="text"><span class="color_carbon font_weight--bold">$506K</span> Avg. price</div>
				</div>
			</a>
		</div>
		
		<div class="col-3">
			<a href="#" class="card card--badge_vertical depth depth--emboss border_radius--default" style="background-image:url(https://content.harstatic.com/resource_2019/imgs/temprary/city_badge2.jpg);">
				<div class="content">
					<div class="font_size--medium font_weight--bold mb-2 text-decoration-none color_black d-block" tabindex="0">Houston</div>
					<div class="text mb-1"><span class="color_carbon font_weight--bold">5,803</span> Homes for Sale</div>
					<div class="text"><span class="color_carbon font_weight--bold">$506K</span> Avg. price</div>
				</div>
			</a>
		</div>
		
      </div>`,
    ];


    this.codeSnippets = [

`<!-- Card Badge Horizental -->
<a href="#" class="card card--badge_horizental depth depth--emboss text-decoration-none" style="background-image:url(https://content.harstatic.com/resource_2019/imgs/temprary/badges.jpg);">
	<div class="content">
		<div class="font_size--large font_weight--bold mb-2 color_black">Open House</div>
		<span class="text">Pay a visit to several properties open for you</span>
	</div>
</a>`,

`<!-- Card Badge Vertical -->
<a href="#" class="card card--badge_vertical depth depth--emboss border_radius--default" style="background-image:url(https://content.harstatic.com/resource_2019/imgs/temprary/city_badge2.jpg);">
	<div class="content">
		<div class="font_size--medium font_weight--bold mb-2 text-decoration-none color_black d-block" tabindex="0">Houston</div>
		<div class="text mb-1"><span class="color_carbon font_weight--bold">5,803</span> Homes for Sale</div>
		<div class="text"><span class="color_carbon font_weight--bold">$506K</span> Avg. price</div>
	</div>
</a>`,

    ];

  }

  render(){
    return (
      <TemplateDefault
        pageTitle="Listing Cards"
        activeParent="components"
        activeChild="listing_cards">

        <TemplateComponentBlock blockTitle="Card Badge Style (horizental)" elements={this.elements[0]} codeSnippets={this.codeSnippets[0]} />
        <TemplateComponentBlock blockTitle="Card Badge Style (vertical)" elements={this.elements[1]} codeSnippets={this.codeSnippets[1]} />

      </TemplateDefault>
    )
  }

}

