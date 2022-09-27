import React, {Component} from "react";
import TemplateExpanded from '../../components/TemplateExpanded';
import TemplateComponentBlock from '../../components/TemplateComponentBlock';

export default class PageHeaders extends Component {

  constructor(props) {
    super(props);

    this.elements = [
      `<!-- hero_landing_page -->
      <div class="bg_color_cement_light pt-5 pb-5 pl-5 pr-5">
      	<div class="container" style="opacity:0.5;">
      		<h1 tabindex="0">Parent Pages</h1>
      		<h3 tabindex="0">Examples:</h3>
			<ul class="list--black font_size--large_extra">
				<li>https://www-v2.har.com/homevalues</li>
			</ul>
      	</div>
      </div>
      <div class="border-bottom border-top" style="opacity:0.5;"><img class="w-100" src="https://content.harstatic.com/media/bgs/topnav_screenshot2.png"></div>
      
      <div class="border-bottom">
      
      <section class="hero_landing_page">
        <h1 tabindex="0" class="hero_landing_page__title">Find a Pro</h1>		
		
        <!-- radio-buttons -->
        <div role="radiogroup" class="horizontal_scrollable_items_container hero_landing_page__form">
          <div role="radio" class="custom-control custom-radio custom-radio--large custom-control-inline">
            <input type="radio" id="example_radio_button_large_1" name="example_radio_button_large" class="custom-control-input" checked>
            <label class="custom-control-label" for="example_radio_button_large_1">Agents</label>
          </div>
          <div role="radio" class="custom-control custom-radio custom-radio--large custom-control-inline">
            <input type="radio" id="example_radio_button_large_2" name="example_radio_button_large" class="custom-control-input">
            <label class="custom-control-label" for="example_radio_button_large_2">Brokers</label>
          </div>
          <div role="radio" class="custom-control custom-radio custom-radio--large custom-control-inline">
            <input type="radio" id="example_radio_button_large_3" name="example_radio_button_large" class="custom-control-input">
            <label class="custom-control-label" for="example_radio_button_large_3">Service Providers</label>
          </div>
        </div>
        <!-- /radio-buttons -->
		
        <!-- search_input_medium -->
        <div class="row no-gutters pb-md-0" style="max-width:930px;">
			  <div class="col-md col-12 pr-md-4 pr-0 pb-3">
				  <input type="text" class="form-control form-control--large" placeholder="License Number…" aria-label="License Number…" value="" style="min-width:260px;">				  
			  </div>
			  <div class="col-md col-12 pr-md-4 pr-0 pb-3">
				  <input type="text" class="form-control form-control--large" placeholder="License Number…" aria-label="City or Zip Code" value="" style="min-width:260px;">				  
			  </div>
	  	      <div class="col-md-auto col-12">
		  	      <div class="row">
		  	      	<div class="col-6 order-1 order-md-0 col-md-auto">
		  	      		<button type="submit" class="btn btn--prominent mb-0 btn--large" data-toggle="modal" data-target="#CityorZipCode">Search</button>
		  	      	</div>
		  	      	<div class="col-6 order-1 order-md-0 col-md-auto text-md-right text-right align-self-center">
		  	      		<button role="button" data-id="FilterOpenHouses" class="open_filters btn btn--filters btn--medium" aria-label="Flate"><img src="https://content.harstatic.com/media/icons/icon-landing-page-filter.svg">FILTERS <span>1</span></button>
		  	      	</div>
		  	      </div>
	  	      </div>
		</div>
        <!-- /search_input_medium -->

      </section>
      <!-- /hero_landing_page -->
	  </div>

	  
	  
	  <section class="hero_landing_page">
        <h1 tabindex="0" class="hero_landing_page__title">Find a Pro</h1>		
		<div class="hero_landing_page__tagline" style="max-width:600px;">
			Compare home value estimate from different automated home valuation providers
		</div>
        <!-- radio-buttons -->
        <div role="radiogroup" class="horizontal_scrollable_items_container hero_landing_page__form mb-2">
          <div role="radio" class="custom-control custom-radio custom-radio--large custom-control-inline">
            <input type="radio" id="example_radio_button_large_1" name="example_radio_button_large" class="custom-control-input" checked>
            <label class="custom-control-label" for="example_radio_button_large_1">Agents</label>
          </div>
          <div role="radio" class="custom-control custom-radio custom-radio--large custom-control-inline">
            <input type="radio" id="example_radio_button_large_2" name="example_radio_button_large" class="custom-control-input">
            <label class="custom-control-label" for="example_radio_button_large_2">Brokers</label>
          </div>
          <div role="radio" class="custom-control custom-radio custom-radio--large custom-control-inline">
            <input type="radio" id="example_radio_button_large_3" name="example_radio_button_large" class="custom-control-input">
            <label class="custom-control-label" for="example_radio_button_large_3">Service Providers</label>
          </div>
        </div>
        <!-- /radio-buttons -->
		
        <!-- search_input_medium -->
        <div class="row no-gutters pb-md-0" style="max-width:930px;">
			  <div class="col-md col-12 pr-md-4 pr-0 pb-3">
				  <input type="text" class="form-control form-control--large" placeholder="License Number…" aria-label="License Number…" value="" style="min-width:260px;">				  
			  </div>
			  <div class="col-md col-12 pr-md-4 pr-0 pb-3">
				  <input type="text" class="form-control form-control--large" placeholder="License Number…" aria-label="City or Zip Code" value="" style="min-width:260px;">				  
			  </div>
	  	      <div class="col-md-auto col-12">
		  	      <div class="row">
		  	      	<div class="col-6 order-1 order-md-0 col-md-auto">
		  	      		<button type="submit" class="btn btn--prominent mb-0 btn--large" data-toggle="modal" data-target="#CityorZipCode">Search</button>
		  	      	</div>
		  	      	<div class="col-6 order-1 order-md-0 col-md-auto text-md-right text-right align-self-center">
		  	      		<button role="button" data-id="FilterOpenHouses" class="open_filters btn btn--filters btn--medium" aria-label="Flate"><img src="https://content.harstatic.com/media/icons/icon-landing-page-filter.svg">FILTERS <span>1</span></button>
		  	      	</div>
		  	      </div>
	  	      </div>
		</div>
        <!-- /search_input_medium -->

      </section>
      <!-- /hero_landing_page -->
      
            
      
      
      
      
      
      <!-- hero_child_page -->
      <div class="bg_color_cement_light pt-5 pb-5 pl-5 pr-5">
      	<div class="container" style="opacity:0.5;">
      		<h1 tabindex="0">Child Pages</h1>
      		<h3 tabindex="0">Examples:</h3>
			<ul class="list--black font_size--large_extra">
				<li>---</li>
			</ul>
      	</div>
      </div>
      <div class="border-bottom border-top" style="opacity:0.5;"><img class="w-100" src="https://content.harstatic.com/media/bgs/topnav_screenshot2.png"></div>
      
      <div class="border-bottom">
      
      <section class="hero_child_page">
        <h1 tabindex="0" class="hero_child_page__title">Title Child Page</h1>		
		<div class="hero_child_page__tagline" style="max-width:600px;">
			Compare home value estimate from different automated home valuation providers
		</div>
        <!-- radio-buttons -->
        <div role="radiogroup" class="horizontal_scrollable_items_container hero_child_page__form mb-2">
          <div role="radio" class="custom-control custom-radio custom-radio--large custom-control-inline">
            <input type="radio" id="example_radio_button_large_1" name="example_radio_button_large" class="custom-control-input" checked>
            <label class="custom-control-label" for="example_radio_button_large_1">Agents</label>
          </div>
          <div role="radio" class="custom-control custom-radio custom-radio--large custom-control-inline">
            <input type="radio" id="example_radio_button_large_2" name="example_radio_button_large" class="custom-control-input">
            <label class="custom-control-label" for="example_radio_button_large_2">Brokers</label>
          </div>
          <div role="radio" class="custom-control custom-radio custom-radio--large custom-control-inline">
            <input type="radio" id="example_radio_button_large_3" name="example_radio_button_large" class="custom-control-input">
            <label class="custom-control-label" for="example_radio_button_large_3">Service Providers</label>
          </div>
        </div>
        <!-- /radio-buttons -->
		
        <!-- search_input_medium -->
        <div class="row no-gutters pb-md-0" style="max-width:930px;">
			  <div class="col-md col-12 pr-md-4 pr-0 pb-3">
				  <input type="text" class="form-control form-control--large" placeholder="License Number…" aria-label="License Number…" value="" style="min-width:260px;">				  
			  </div>
			  <div class="col-md col-12 pr-md-4 pr-0 pb-3">
				  <input type="text" class="form-control form-control--large" placeholder="License Number…" aria-label="City or Zip Code" value="" style="min-width:260px;">				  
			  </div>
	  	      <div class="col-md-auto col-12">
		  	      <div class="row">
		  	      	<div class="col-6 order-1 order-md-0 col-md-auto">
		  	      		<button type="submit" class="btn btn--prominent mb-0 btn--large" data-toggle="modal" data-target="#CityorZipCode">Search</button>
		  	      	</div>
		  	      	<div class="col-6 order-1 order-md-0 col-md-auto text-md-right text-right align-self-center">
		  	      		<button role="button" data-id="FilterOpenHouses" class="open_filters btn btn--filters btn--medium" aria-label="Flate"><img src="https://content.harstatic.com/media/icons/icon-landing-page-filter.svg">FILTERS <span>1</span></button>
		  	      	</div>
		  	      </div>
	  	      </div>
		</div>
        <!-- /search_input_medium -->

      </section>
      <!-- /hero_child_page -->
	  </div>




<div class="border-bottom">
      <div class="breadcrumbs"><div><a href="https://www-v2-test.har.com/homevalues">Home Values</a><span class="breadcrumbs__empty">Search Results</span></div></div>
      <section class="hero_child_page hero_child_page__withbreadcrubs">
        <h1 tabindex="0" class="hero_child_page__title">Title Child Page</h1>		
		<div class="hero_child_page__tagline" style="max-width:600px;">
			Compare home value estimate from different automated home valuation providers
		</div>
        <!-- radio-buttons -->
        <div role="radiogroup" class="horizontal_scrollable_items_container hero_child_page__form mb-2">
          <div role="radio" class="custom-control custom-radio custom-radio--large custom-control-inline">
            <input type="radio" id="example_radio_button_large_1" name="example_radio_button_large" class="custom-control-input" checked>
            <label class="custom-control-label" for="example_radio_button_large_1">Agents</label>
          </div>
          <div role="radio" class="custom-control custom-radio custom-radio--large custom-control-inline">
            <input type="radio" id="example_radio_button_large_2" name="example_radio_button_large" class="custom-control-input">
            <label class="custom-control-label" for="example_radio_button_large_2">Brokers</label>
          </div>
          <div role="radio" class="custom-control custom-radio custom-radio--large custom-control-inline">
            <input type="radio" id="example_radio_button_large_3" name="example_radio_button_large" class="custom-control-input">
            <label class="custom-control-label" for="example_radio_button_large_3">Service Providers</label>
          </div>
        </div>
        <!-- /radio-buttons -->
		
        <!-- search_input_medium -->
        <div class="row no-gutters pb-3 pb-md-0" style="max-width:930px;">
			  <div class="col-md col-12 pr-md-4 pr-0 pb-3">
				  <input type="text" class="form-control form-control--large" placeholder="License Number…" aria-label="License Number…" value="" style="min-width:260px;">				  
			  </div>
			  <div class="col-md col-12 pr-md-4 pr-0 pb-3">
				  <input type="text" class="form-control form-control--large" placeholder="License Number…" aria-label="City or Zip Code" value="" style="min-width:260px;">				  
			  </div>
	  	      <div class="col-md-auto col-12">
		  	      <div class="row">
		  	      	<div class="col-6 order-1 order-md-0 col-md-auto">
		  	      		<button type="submit" class="btn btn--prominent mb-0 btn--large" data-toggle="modal" data-target="#CityorZipCode">Search</button>
		  	      	</div>
		  	      	<div class="col-6 order-1 order-md-0 col-md-auto text-md-right text-right align-self-center">
		  	      		<button role="button" data-id="FilterOpenHouses" class="open_filters btn btn--filters btn--medium" aria-label="Flate"><img src="https://content.harstatic.com/media/icons/icon-landing-page-filter.svg">FILTERS <span>1</span></button>
		  	      	</div>
		  	      </div>
	  	      </div>
		</div>
        <!-- /search_input_medium -->

      </section>
      <!-- /hero_child_page -->
	  </div>
	  
	  
      
      
      
      
      
      
      
      <!-- hero_landing_page -->
      <div class="bg_color_cement_light pt-5 pb-5 pl-5 pr-5">
      	<div class="container" style="opacity:0.5;">
      		<h1 tabindex="0">Results Pages</h1>
      		<h3 tabindex="0">Examples:</h3>
			<ul class="list--black font_size--large_extra">
				<li>---</li>
			</ul>
      	</div>
      </div>
      <div class="border-bottom border-top" style="opacity:0.5;"><img class="w-100" src="https://content.harstatic.com/media/bgs/topnav_screenshot2.png"></div>
      
      <div class="container">
      	<div class="breadcrumbs__withshare">
	      	<div class="breadcrumbs">
	      	<div><a href="texasrealestate/?tab=region">Texas </a><a href="texasrealestate/?tab=city">Cities </a><a href="/sugarland/realestate">Sugar Land</a><a href="/houses-for-rent-by-city">Houses for Rent</a><span class="breadcrumbs__empty"> For Rent</span></div>
	      	</div>
	    </div>
      </div>
      
      <section class="hero_results_page hero_results_page__withshare">
      	<div class="row">
      		<div class="col align-self-center">
	  			<h1 tabindex="0" class="hero_results_page__title hero_results_page__title__withshare">Just listed houses for sale and rent in Sugar Land, TX</h1>
	  		</div>
	  		<div class="col-auto">
	  			<div class="d-inline-block">
					<div class="text-center font_size--small_extra color_cement_dark pb-1">SHARE</div>
					<a href="javascript:void(0)" onclick="OpenShare()" class="btn btn--ordinary btn--large btn--icon btn--icon--lone btn--icon--share mb-2" aria-label="Button"></a>
				</div>
	  		</div>
	  	</div>
		
		<div class="hero_results_page__desc">
	  		Just listed houses in Sugar Land, TX are displayed below and feature only those new, REALTOR® listed properties added to HAR.com within the last seven days. You can browse these new listings in Sugar Land, apply a variety of search filters and sort them several different ways. <a href="#">You can also find more info by visiting Sugar Land homes for sale and rent</a>.
	  	</div>
      </section>
      <!-- /hero_landing_page -->
      
      
      
      
      
      
      
      
      <!-- hero_detail_page -->
      <div class="bg_color_cement_light pt-5 pb-5 pl-5 pr-5">
      	<div class="container" style="opacity:0.5;">
      		<h1 tabindex="0">Detail Pages</h1>
      		<h3 tabindex="0">Examples:</h3>
      		<ul class="list--black font_size--large_extra">
				<li>---</li>
			</ul>
      	</div>
      </div>
      <div class="border-bottom border-top"><img class="w-100" src="https://content.harstatic.com/media/bgs/topnav_screenshot2.png"></div>
      <div class="row">
			<div class="col align-self-center">
				<div class="">
			      	<div class="breadcrumbs">
			      	<div><a href="texasrealestate/?tab=region">Senior Living Finder </a><a href="texasrealestate/?tab=city">Details </a></div>
		      	</div>
		    </div>

			</div>
			<div class="col-auto align-self-center">
				<a href="#" class="btn btn--simple btn--small  btn--icon btn--icon--share" aria-label="Search">share</a>
			</div>
		</div>
      
	      		    
      <section class="hero_detail_page">
      	<div class="row">
			<div class="col-md-6 col-12 pb-md-0 pb-3">
				<h1 tabindex="0" class="hero_detail_page__title">University Place</h1>

			   <div class="hero_detail_page__address"><img style="max-width:22px;" src="https://content.harstatic.com/media/icons/location_icon_auxiliary.svg" class="mr-2">1523 Old Ranch Road 12, San Marcos, 78666 <a class="font_weight--bold" href="#">Get directions</a>
			   </div>
			   
			   <div class="hero_detail_page__ratting">
				   <div class="row no-gutters">
						<div class="col-sm-auto col-12 pb-md-0 pb-3 align-self-center">
							<div class="align-self-center d-inline-block font_weight--bold pr-2">School Rating:</div>
							<div class="pr-3 d-inline-block"><img alt="" class="pb-1" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg" style="width:20px;"><img alt="" class="pb-1" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg" style="width:20px;"><img alt="" class="pb-1" src="https://content.harstatic.com/media/icons/stars_16by16_gray.svg" style="width:20px;"><img alt="" class="pb-1" src="https://content.harstatic.com/media/icons/stars_16by16_gray.svg" style="width:20px;"><img alt="" class="pb-1" src="https://content.harstatic.com/media/icons/stars_16by16_gray.svg" style="width:20px;"></div>
						</div>
						
						<div class="col-sm-auto col-12 align-self-center">
							<div class="pr-2 mr-2 align-self-center d-inline-block"><div class="label label--grade label--grade_a">A</div> Excellent</div>
							<div class="align-self-center d-inline-block">
								<img src="https://content.harstatic.com/media/icons/school-grade-medal.svg">
								<img src="https://content.harstatic.com/media/icons/school-grade-medal.svg">
								<img src="https://content.harstatic.com/media/icons/school-grade-medal.svg">
								<img src="https://content.harstatic.com/media/icons/school-grade-medal.svg">
								<img src="https://content.harstatic.com/media/icons/school-grade-medal.svg">
							</div>
						</div>
					</div>
				</div>
				
				<div class="hero_detail_page__review">
					<div class="row no-gutters">
						<div class="col-auto align-self-center mr-2">
							<img alt="" class="pb-1" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg" style="width:13px;"><img alt="" class="pb-1" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg" style="width:13px;"><img alt="" class="pb-1" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg" style="width:13px;"><img alt="" class="pb-1" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg" style="width:13px;"><img alt="" class="pb-1" src="https://content.harstatic.com/media/icons/stars_16by16_gray.svg" style="width:13px;">
						</div>
						<div class="col-auto align-self-center pr-3 mr-3 border-right">1 community review ↓</div>
						<div class="col-sm col-12 pt-sm-0 pt-3"><a class="font_weight--semi_bold" href="#">Write a Review</a></div>
					</div>
				</div>

					
				<div class="hero_detail_page__desc">
				   <p>
				   Welcome to University Place, located in Houston, Texas. Here you will find detailed information about University Place such as care information, general services and amenities. You can also search real estate or homes nearby University Place.
				   </p>
				   <a href="#description" class="font_weight--bold">View more description ↓</a>
				</div>
			</div>
			<div class="col-md-6 col-12">
				<div class="hero_detail_page__image align-self-center" style="min-height:200px; background-image:url('https://www.har.com/api/staticmap?sensor=false&amp;zoom=16&amp;size=240x170&amp;center=32.589144000000000,-97.120812000000000&amp;markers=icon:https://content.harstatic.com/img/icons/golficon.png|32.589144000000000,-97.120812000000000&amp;maptype=satellite&amp;client=gme-houstonrealtorsinformation&amp;signature=DtZ0NqfubQJPZbsnPiXN58Cq_Tk=');">
				</div>
			</div>
		</div>
      </section>
      <!-- /hero_landing_page -->
      <div class="bg_color_cement_light pt-5 pb-5 pl-5 pr-5" style="min-height:80px;"></div>
      
      

      
      
      
      
      <div class="row">
			<div class="col align-self-center">
				<div class="">
			      	<div class="breadcrumbs">
			      	<div><a href="texasrealestate/?tab=region">Senior Living Finder </a><a href="texasrealestate/?tab=city">Details </a></div>
		      	</div>
		    </div>

			</div>
			<div class="col-auto align-self-center">
				<a href="#" class="btn btn--simple btn--small  btn--icon btn--icon--share" aria-label="Search">share</a>
			</div>
		</div>
      
	      		    
      <section class="hero_detail_page">
      	<div class="row">
			<div class="col-md-6 col-12 pb-md-0 pb-3">
				<h1 tabindex="0" class="hero_detail_page__title">Imperial at Sugar Land Homes and Houses for sale and rent</h1>

				<div class="hero_detail_page__review hero_detail_page__review__noborder">
					<div class="row no-gutters">
						<div class="col-auto align-self-center mr-2">
							<img alt="" class="pb-1" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg" style="width:13px;"><img alt="" class="pb-1" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg" style="width:13px;"><img alt="" class="pb-1" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg" style="width:13px;"><img alt="" class="pb-1" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg" style="width:13px;"><img alt="" class="pb-1" src="https://content.harstatic.com/media/icons/stars_16by16_gray.svg" style="width:13px;">
						</div>
						<div class="col-auto align-self-center pr-3 mr-3 border-right">1 community review ↓</div>
						<div class="col-sm col-12 pt-sm-0 pt-3"><a class="font_weight--semi_bold" href="#">Write a Review</a></div>
					</div>
				</div>

					
				<div class="hero_detail_page__desc">
				   <div class="border border_radius--default">
						<div class="border-bottom p-4"><h3 class="mb-0" tabindex="0">Imperial at Sugar Land Real Estate Profile</h3></div>
						<div class="p-4 text-uppercase">
							<div class="row no-gutters pb-4">
								<div class="col-4">
									<div class="font_weight--bold font_size--small_extra">Home for Sale</div>
									<div class="font_size--large font_weight--light">439</div>
								</div>
								<div class="col-4">
									<div class="font_weight--bold font_size--small_extra">Home for Rent</div>
									<div class="font_size--large font_weight--light">222</div>
								</div>
								<div class="col-4">
									<div class="font_weight--bold font_size--small_extra">Bedrooms</div>
									<div class="font_size--large font_weight--light">2 avg.</div>
								</div>
							</div>
							
							<div class="row no-gutters pb-4">
								<div class="col-4">
									<div class="font_weight--bold font_size--small_extra">Sale Price</div>
									<div class="font_size--large font_weight--light">$505,446 avg.</div>
								</div>
								<div class="col-4">
									<div class="font_weight--bold font_size--small_extra">Rent Price</div>
									<div class="font_size--large font_weight--light">$1,936 avg.</div>
								</div>
								<div class="col-4">
									<div class="font_weight--bold font_size--small_extra">Bathrooms</div>
									<div class="font_size--large font_weight--light">2 avg.</div>
								</div>
							</div>
							
							<div class="row no-gutters pb-2">
								<div class="col-4">
									<div class="font_weight--bold font_size--small_extra">Price/Square Ft.</div>
									<div class="font_size--large font_weight--light">222 avg.</div>
								</div>
								<div class="col-4">
									<div class="font_weight--bold font_size--small_extra">Rent/Square Ft.</div>
									<div class="font_size--large font_weight--light">2 avg.</div>
								</div>
								<div class="col-4">
									<div class="font_weight--bold font_size--small_extra">Average Square Ft.</div>
									<div class="font_size--large font_weight--light">2,133 avg.</div>
								</div>
							</div>
							
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-6 col-12">
				<div class="hero_detail_page__image align-self-center" style="min-height:200px; background-image:url('https://www.har.com/api/staticmap?sensor=false&amp;zoom=16&amp;size=240x170&amp;center=32.589144000000000,-97.120812000000000&amp;markers=icon:https://content.harstatic.com/img/icons/golficon.png|32.589144000000000,-97.120812000000000&amp;maptype=satellite&amp;client=gme-houstonrealtorsinformation&amp;signature=DtZ0NqfubQJPZbsnPiXN58Cq_Tk=');">
				</div>
			</div>
		</div>
      </section>
      <!-- /hero_landing_page -->
      <div class="bg_color_cement_light pt-5 pb-5 pl-5 pr-5" style="min-height:80px;"></div>
      
      
      
      
      `,
      `
      
      <!-- hero_seo pages -->
      <div class="bg_color_cement_light pt-5 pb-5 pl-5 pr-5">
      	<div class="container" style="opacity:0.5;">
      		<h1 tabindex="0">SEO Pages</h1>
      		<h3 tabindex="0">Examples:</h3>
			<ul class="list--black font_size--large_extra">
				<li>#</li>
			</ul>
      	</div>
      </div>
      <div class="border-bottom border-top" style="opacity:0.5;"><img class="w-100" src="https://content.harstatic.com/media/bgs/topnav_screenshot2.png"></div>
      
      <section class="hero_seo_page" style="background-image:url('https://content.harstatic.com/media/bgs/header_bgs.webp');">
      	<div class="hero_seo_page__inner">
      		<h1 tabindex="0" class="hero_seo_page__title">Lago Mar</h1>
      		<div class="hero_seo_page__tagline">The neighborhood that brings nature to your doorstep in an idyllic setting that embraces a modern lifestyle.</div>
        </div>
      </section>
    `
    ];
	
    this.codeSnippets = [
``,

    ];

  }

  render() {

    return (
      <TemplateExpanded
        pageTitle="PageHeaders"
        activeParent="template_blocks"
        activeChild="pageHeaders">

        <TemplateComponentBlock hasContainer={false} blockTitle="" elements={this.elements[0]} codeSnippets={this.codeSnippets[0]} />
        <TemplateComponentBlock hasContainer={false} blockTitle="" elements={this.elements[1]} codeSnippets={this.codeSnippets[1]} />
        

      </TemplateExpanded>
    )
  }

}
