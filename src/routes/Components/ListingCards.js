import React, {Component} from "react";
import TemplateDefault from '../../components/TemplateDefault';
import TemplateComponentBlock from '../../components/TemplateComponentBlock';


export default class ListingCards extends Component {

  constructor(props) {
    super(props);

    this.elements = [
      `<div class="row pb-4">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 tabindex="0">Landscape Large - List View</h4>
        </div>
      </div>

      <div class="row">
        <div class="col col-sm-12 col-12 mb-0 pb-0 ">

          <!-- card--listing -->
          <div class="card card--listing">

            <!-- card--listing__header -->
            <div class="row no-gutters card--listing__header">
              <div class="col-7">
                <div class="agent_signature">
                  <div class="agent_signature agent_signature__photo">
                    <a tabindex="-1" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Shadrick Bogany's profile" style="background-image:url('https://pics.harstatic.com/agent/312961.jpg');"></a>
                  </div>
                  <div class="agent_signature agent_signature__info">
                    <a class="agent_signature agent_signature__info agent_signature__info__agent_name" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Shadrick Bogany's profile" aria-label="View Shadrick Bogany's profile">
                      Shadrick Bogany
                    </a>
                    <br />
                    <a class="agent_signature agent_signature__info agent_signature__info__broker_name" href="https://www.har.com/better-homes-and-gardens-real-estate-gary-greene/broker_GGPR11" title="View Better Homes And Gardens Real's page" aria-label="View Better Homes And Gardens Real's page">
                      Better Homes And Gardens Real
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-5 text-right">
                <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--favorite btn--small-extra" aria-label="Save Bartlett Street #4 Houston TX 77098 as favorite">Save</button>
                <div class="dropdown dropdown--custom dropdown--custom_medium d-inline-block">
				  <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--onlyicon btn--icon--dot_dot_dot btn--small-extra" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
				  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
				    <a class="dropdown-item" href="#">Action</a>
				    <a class="dropdown-item" href="#">Another action</a>
				    <a class="dropdown-item" href="#">Something else here</a>
				  </div>
				</div>                
              </div>
            </div>
            <!-- /card--listing__header -->

            <!-- card--listing__body -->
            <a href="har.com">
	          <div class="card--listing__body">
              <div class="card--listing__body_wraper">

                <div class="card--listing__body__image_content">
                  <div class="card--listing__body__image_content_image" style="background-image: url(https://photos.harstatic.com/153440342/hr/img-1.jpeg?ts=2018-09-13T14:59:06.353);"></div>
                </div>
                <div class="card--listing__body__content">
                  <div class="d-flex justify-content-between pb-3">
  	              	<div class="text-truncate pr-2">
  	              		<div class="text-decoration-none"><h4 tabindex="0">Bartlett Street #4 Long Title Goes </h4></div>
  	              		<div class="color_slate_light pt-1">Houston TX 77098</div>
  	              	</div>
  	              	<div class="text-right">
  	              		<div class="font_size--large font_weight--bold color_carbon text-nowrap">$1,995</div>
  	              		<div class="label label--forsale mr-0">for sale</div>
  	              	</div>
  	              </div>
  	              

                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">2</span> bedrooms
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">1</span>Full & <span class="font_weight--semi_bold color_carbon pr-1">4</span> Half Bath(s)
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">16,300</span> built sqft
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">20,000</span> lot sqft
                  </div>                  
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">2 </span> stories
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">1954 </span> year built
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">Private Pool </span> none
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">72572799</span> MLS#
                  </div>
                  <div class="card--listing__body__content__description_row">
                  		<div class="color_available">20 days at har.com</div>
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">Townhouse Condo</span>
                  </div>
                  <div class="clearfix"></div>
  	            </div>  				
              </div>
	          </div>
            <!-- /card--listing__body -->
			</a>
          </div>
          <!-- /card--listing -->

        </div>
      </div>
      
	  
	  <div class="pt-5 pb-5"></div>
	  
	  
	  <div class="row pb-4">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 tabindex="0">Landscape Large - List View with labels</h4>
        </div>
      </div>

      <div class="row">
        <div class="col col-sm-12 col-12 mb-0 pb-0 ">

          <!-- card--listing -->
          <div class="card card--listing">

            <!-- card--listing__header -->
            <div class="row no-gutters card--listing__header">
              <div class="col-7">
                <div class="agent_signature">
                  <div class="agent_signature agent_signature__photo">
                    <a tabindex="-1" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Shadrick Bogany's profile" style="background-image:url('https://pics.harstatic.com/agent/312961.jpg');"></a>
                  </div>
                  <div class="agent_signature agent_signature__info">
                    <a class="agent_signature agent_signature__info agent_signature__info__agent_name" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Shadrick Bogany's profile" aria-label="View Shadrick Bogany's profile">
                      Shadrick Bogany
                    </a>
                    <br />
                    <a class="agent_signature agent_signature__info agent_signature__info__broker_name" href="https://www.har.com/better-homes-and-gardens-real-estate-gary-greene/broker_GGPR11" title="View Better Homes And Gardens Real's page" aria-label="View Better Homes And Gardens Real's page">
                      Better Homes And Gardens Real
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-5 text-right">
                <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--favorite btn--small-extra" aria-label="Save Bartlett Street #4 Houston TX 77098 as favorite">Save</button>
                <div class="dropdown dropdown--custom dropdown--custom_medium d-inline-block">
				  <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--onlyicon btn--icon--dot_dot_dot btn--small-extra" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
				  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
				    <a class="dropdown-item" href="#">Action</a>
				    <a class="dropdown-item" href="#">Another action</a>
				    <a class="dropdown-item" href="#">Something else here</a>
				  </div>
				</div>                
              </div>
            </div>
            <!-- /card--listing__header -->

            <!-- card--listing__body -->
	          <div class="card--listing__body">
              <div class="card--listing__body_wraper">

                <a href="#" class="card--listing__body__image_content">
                  <div class="card--listing__body__image_content_image" style="background-image: url(https://photos.harstatic.com/153440342/hr/img-1.jpeg?ts=2018-09-13T14:59:06.353);"></div>
                </a>
                <div class="card--listing__body__content">
                  <div class="d-flex justify-content-between pb-3">
  	              	<div class="text-truncate pr-2">
  	              		<a class="text-decoration-none" href="#"><h4 tabindex="0">Bartlett Street #4 Long Title Goes </h4></a>
  	              		<div class="color_slate_light pt-1">Houston TX 77098</div>
  	              	</div>
  	              	<div class="text-right">
  	              		<div class="font_size--large font_weight--bold color_carbon text-nowrap">$1,995</div>
  	              		<div class="label label--forsale mr-0">for sale</div>
  	              	</div>
  	              </div>
  	              

                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">2</span> bedrooms
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">1</span>Full & <span class="font_weight--semi_bold color_carbon pr-1">4</span> Half Bath(s)
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">16,300</span> built sqft
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">20,000</span> lot sqft
                  </div>                  
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">2 </span> stories
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">1954 </span> year built
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">Private Pool </span> none
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">72572799</span> MLS#
                  </div>
                  <div class="card--listing__body__content__description_row">
                  		<div class="color_available">20 days at har.com</div>
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">Townhouse Condo</span>
                  </div>
                  <div class="clearfix"></div>
  	            </div>  				
              </div>
              <div class="card--listing__labels pt-3">
  					<div class="label label--justlisted"><img src="https://content.harstatic.com/media/icons/icon-just-listed.svg">Just listed</div>
  					<div class="label label--pricereduction"><img src="https://content.harstatic.com/media/icons/icon-price-reduction.svg">Price Reduction</div>
  					<div class="label label--newconstruction"><img src="https://content.harstatic.com/media/icons/icon-new-construction.svg">New construction</div>
  					<div class="label label--openhouse_simple"><img src="https://content.harstatic.com/media/icons/icon-open-house.svg">Open House</div>
  					<div class="label label--virtualopenhouse"><img src="https://content.harstatic.com/media/icons/icon-open-house.svg">Virtual Open House</div>
  					<div class="label label--foreclosure"><img src="https://content.harstatic.com/media/icons/icon-foreclosure.svg">Foreclosure</div>
  			  </div>
	          </div>
            <!-- /card--listing__body -->

          </div>
          <!-- /card--listing -->

        </div>
      </div>
      
      <div class="pt-5 pb-5"></div>
      
      <div class="row pb-4">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 tabindex="0">Landscape Large - List View (with Improvements details)</h4>
        </div>
      </div>

      <div class="row pb-4">
        <div class="col col-sm-12 col-12 mb-0 pb-0 ">

          <!-- card--listing Improvements -->
          <div class="card card--listing">

            <!-- card--listing__header -->
            <div class="row no-gutters card--listing__header">
              <div class="col-7">
                <div class="agent_signature">
                  <div class="agent_signature agent_signature__photo">
                    <a tabindex="-1" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Shadrick Bogany's profile" style="background-image:url('https://pics.harstatic.com/agent/312961.jpg');"></a>
                  </div>
                  <div class="agent_signature agent_signature__info">
                    <a class="agent_signature agent_signature__info agent_signature__info__agent_name" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Shadrick Bogany's profile" aria-label="View Shadrick Bogany's profile">
                      Shadrick Bogany
                    </a>
                    <br />
                    <a class="agent_signature agent_signature__info agent_signature__info__broker_name" href="https://www.har.com/better-homes-and-gardens-real-estate-gary-greene/broker_GGPR11" title="View Better Homes And Gardens Real's page" aria-label="View Better Homes And Gardens Real's page">
                      Better Homes And Gardens Real
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-5 text-right">
                <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--favorite btn--small-extra" aria-label="Save Bartlett Street #4 Houston TX 77098 as favorite">Save</button>
                <div class="dropdown dropdown--custom dropdown--custom_medium d-inline-block">
				  <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--onlyicon btn--icon--dot_dot_dot btn--small-extra" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
				  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
				    <a class="dropdown-item" href="#">Action</a>
				    <a class="dropdown-item" href="#">Another action</a>
				    <a class="dropdown-item" href="#">Something else here</a>
				  </div>
				</div>
              </div>
            </div>
            <!-- /card--listing__header -->

            <!-- card--listing__body -->
            <a href="http://har.com">
	          <div class="card--listing__body">
              <div class="card--listing__body_wraper">

                <div class="card--listing__body__image_content">
                  <div class="card--listing__body__image_content_image" style="background-image: url(https://photos.harstatic.com/153440342/hr/img-1.jpeg?ts=2018-09-13T14:59:06.353);"></div>
                </div>
                <div class="card--listing__body__content">
                  <div class="d-flex justify-content-between pb-3">
  	              	<div class="text-truncate pr-2">
  	              		<div class="text-decoration-none"><h4 tabindex="0">Bartlett Street #4 Long Title Goes</h4></div>
  	              		<div class="color_slate_light pt-1">Houston TX 77098</div>
  	              	</div>
  	              	<div class="text-right">
  	              		<div class="font_size--large font_weight--bold color_carbon text-nowrap">$1,995</div>
  	              		<div class="label label--forsale mr-0">for sale</div>
  	              	</div>
  	              </div>
  	              

                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">2</span> bedrooms
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">1</span>Full & <span class="font_weight--semi_bold color_carbon pr-1">4</span> Half Bath(s)
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">16,300</span> built sqft
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">20,000</span> lot sqft
                  </div>                  
                  <div class="card--listing__body__content__description_row">
                  		<div class="color_available">20 days at har.com</div>
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">Townhouse Condo</span>
                  </div>
                  <div class="clearfix"></div>
                  <!-- improvements block -->
                  <div  onclick="location.href='http://google.com'; return false;" class="card--listing__body__impovement">
                  	<div class="color_cement_dark text-truncate"><span class="font_weight--semi_bold color_carbon">Improvements:</span> Auxiliary Building, Fenced, Guest House, Storage Sheed</div>
                  	<div class="d-flex justify-content-between"> 	
                  		<div class=" color_cement_dark text-truncate pr-2"><span class="font_weight--semi_bold color_carbon">Land Use:</span> Leisure Ranch, Mobile Home Allowed, Other, Resort, Unrestricted</div>
                  		<div class="text-nowrap">View more</div>
                  	</div>
                  </div>
  	            </div>

              </div>
	          </div>
	        </a>
            <!-- /card--listing__body -->

          </div>
          <!-- /card--listing Improvements -->

        </div>
      </div>
      
      
      
      <div class="pt-5 pb-5"></div>
      
      <div class="row pb-4">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 tabindex="0">Landscape Large - List View (with school details)</h4>
        </div>
      </div>

      <div class="row pb-4">
        <div class="col col-sm-12 col-12 mb-0 pb-0 ">

          <!-- card--listing Improvements -->
          <div class="card card--listing">

            <!-- card--listing__header -->
            <div class="row no-gutters card--listing__header">
              <div class="col-7">
                <div class="agent_signature">
                  <div class="agent_signature agent_signature__photo">
                    <a tabindex="-1" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Shadrick Bogany's profile" style="background-image:url('https://pics.harstatic.com/agent/312961.jpg');"></a>
                  </div>
                  <div class="agent_signature agent_signature__info">
                    <a class="agent_signature agent_signature__info agent_signature__info__agent_name" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Shadrick Bogany's profile" aria-label="View Shadrick Bogany's profile">
                      Shadrick Bogany
                    </a>
                    <br />
                    <a class="agent_signature agent_signature__info agent_signature__info__broker_name" href="https://www.har.com/better-homes-and-gardens-real-estate-gary-greene/broker_GGPR11" title="View Better Homes And Gardens Real's page" aria-label="View Better Homes And Gardens Real's page">
                      Better Homes And Gardens Real
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-5 text-right">
                <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--favorite btn--small-extra" aria-label="Save Bartlett Street #4 Houston TX 77098 as favorite">Save</button>
                <div class="dropdown dropdown--custom dropdown--custom_medium d-inline-block">
				  <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--onlyicon btn--icon--dot_dot_dot btn--small-extra" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
				  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
				    <a class="dropdown-item" href="#">Action</a>
				    <a class="dropdown-item" href="#">Another action</a>
				    <a class="dropdown-item" href="#">Something else here</a>
				  </div>
				</div>
              </div>
            </div>
            <!-- /card--listing__header -->

            <!-- card--listing__body -->
	          <div class="card--listing__body">
              <div class="card--listing__body_wraper">

                <a href="#" class="card--listing__body__image_content">
                  <div class="card--listing__body__image_content_image" style="background-image: url(https://photos.harstatic.com/153440342/hr/img-1.jpeg?ts=2018-09-13T14:59:06.353);"></div>
                </a>
                <div class="card--listing__body__content">
                  <div class="d-flex justify-content-between pb-3">
  	              	<div class="text-truncate pr-2">
  	              		<a class="text-decoration-none" href="#"><h4 tabindex="0">Bartlett Street #4 Long Title Goes</h4></a>
  	              		<div class="color_slate_light pt-1">Houston TX 77098</div>
  	              	</div>
  	              	<div class="text-right">
  	              		<div class="font_size--large font_weight--bold color_carbon text-nowrap">$1,995</div>
  	              		<div class="label label--forsale mr-0">for sale</div>
  	              	</div>
  	              </div>
  	              

                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">2</span> bedrooms
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">1</span>Full & <span class="font_weight--semi_bold color_carbon pr-1">4</span> Half Bath(s)
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">16,300</span> built sqft
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">20,000</span> lot sqft
                  </div>                  
                  <div class="card--listing__body__content__description_row">
                  		<div class="color_available">20 days at har.com</div>
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">Townhouse Condo</span>
                  </div>
                  <div class="clearfix"></div>
                  <!-- improvements block -->
                  <div class="card--listing__body__impovement">
                  	<div class="color_cement_dark"><span class="font_weight--semi_bold color_carbon">Zone / Assizned Schools:</span> <a href="#">Settlers Way Elementary School</a>, <a href="#">First Colony Middle School</a>, <a href="#">Clements High School</a></div>                  	 
                  </div>
  	            </div>

              </div>
	          </div>
            <!-- /card--listing__body -->

          </div>
          <!-- /card--listing Improvements -->

        </div>
      </div>
      
      
      
      <div class="pt-5 pb-5"></div>
      

      <div class="row pb-4">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 tabindex="0">Landscape Large - List View (Sold)</h4>
        </div>
      </div>

      <div class="row">
        <div class="col col-sm-12 col-12 mb-0 pb-0 ">

          <!-- card--listing Sold -->
          <div class="card card--listing">

            <!-- card--listing__header -->
            <div class="row no-gutters card--listing__header">
              <div class="col-7">
                <div class="agent_signature">
                  <div class="agent_signature agent_signature__photo">
                    <a tabindex="-1" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Shadrick Bogany's profile" style="background-image:url('https://pics.harstatic.com/agent/312961.jpg');"></a>
                  </div>
                  <div class="agent_signature agent_signature__info">
                    <a class="agent_signature agent_signature__info agent_signature__info__agent_name" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Shadrick Bogany's profile" aria-label="View Shadrick Bogany's profile">
                      Shadrick Bogany
                    </a>
                    <br />
                    <a class="agent_signature agent_signature__info agent_signature__info__broker_name" href="https://www.har.com/better-homes-and-gardens-real-estate-gary-greene/broker_GGPR11" title="View Better Homes And Gardens Real's page" aria-label="View Better Homes And Gardens Real's page">
                      Better Homes And Gardens Real
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-5 text-right">
                <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--favorite btn--small-extra" aria-label="Save Bartlett Street #4 Houston TX 77098 as favorite">Save</button>
                <div class="dropdown dropdown--custom dropdown--custom_medium d-inline-block">
				  <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--onlyicon btn--icon--dot_dot_dot btn--small-extra" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
				  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
				    <a class="dropdown-item" href="#">Action</a>
				    <a class="dropdown-item" href="#">Another action</a>
				    <a class="dropdown-item" href="#">Something else here</a>
				  </div>
				</div>
              </div>
            </div>
            <!-- /card--listing__header -->

            <!-- card--listing__body -->
	          <div class="card--listing__body">
              <div class="card--listing__body_wraper">

                <a href="#" class="card--listing__body__image_content">
                  <div class="card--listing__body__image_content_image" style="background-image: url(https://photos.harstatic.com/153440342/hr/img-1.jpeg?ts=2018-09-13T14:59:06.353);"></div>
                </a>
                <div class="card--listing__body__content">
                  <div class="d-flex justify-content-between pb-3">
  	              	<div class="text-truncate pr-2">
  	              		<a class="text-decoration-none" href="#"><h4 tabindex="0">Barlett Street #4</h4></a>
  	              		<div class="color_slate_light pt-1">Houston TX 77098</div>
  	              	</div>
  	              	<div class="text-right">
  	              		<div class="font_size--large font_weight--bold color_carbon text-nowrap">$1,655,000 - 1,705,000</div>
  	              		<div class="label label--sold mr-0">sold</div>
  	              	</div>
  	              </div>
  	              
  				  
  				  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">2</span> bedrooms
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">1</span>Full & <span class="font_weight--semi_bold color_carbon pr-1">4</span> Half Bath(s)
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">16,300</span> built sqft
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">20,000</span> lot sqft
                  </div>                  
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">2 </span> stories
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">1954 </span> year built
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">Private Pool </span> none
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">72572799</span> MLS#
                  </div>
                  <div class="card--listing__body__content__description_row">
                  		<div class="color_sold">Sold: 10/23/2020</div>
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">Townhouse Condo</span>
                  </div>
                  <div class="clearfix"></div>
                               
  	            </div>

              </div>
	          </div>
            <!-- /card--listing__body -->

          </div>
          <!-- /card--listing Improvements -->

        </div>
      </div>
      
      
      
      <div class="pt-5 pb-5"></div>
      
      

      <div class="row pb-4">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 class="mb-2" tabindex="0">Landscape Large - Map View</h4> 
          <div class="pb-4 text-left color_slate">Note: for map veiw use same card with container which have specific max-width so it will adopt style it self.</div>
        </div>
      </div>

      <div class="row">
        <div class="col col-sm-12 col-12 mb-0 pb-0 ">

          <!-- card--listing -->
          <div class="card card--listing" style="max-width:642px;">

            <!-- card--listing__header -->
            <div class="row no-gutters card--listing__header">
              <div class="col-7">
                <div class="agent_signature">
                  <div class="agent_signature agent_signature__photo">
                    <a tabindex="-1" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Shadrick Bogany's profile" style="background-image:url('https://pics.harstatic.com/agent/312961.jpg');"></a>
                  </div>
                  <div class="agent_signature agent_signature__info">
                    <a class="agent_signature agent_signature__info agent_signature__info__agent_name" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Shadrick Bogany's profile" aria-label="View Shadrick Bogany's profile">
                      Shadrick Bogany
                    </a>
                    <br />
                    <a class="agent_signature agent_signature__info agent_signature__info__broker_name" href="https://www.har.com/better-homes-and-gardens-real-estate-gary-greene/broker_GGPR11" title="View Better Homes And Gardens Real's page" aria-label="View Better Homes And Gardens Real's page">
                      Better Homes And Gardens Real
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-5 text-right">
                <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--favorite btn--small-extra" aria-label="Save Bartlett Street #4 Houston TX 77098 as favorite">Save</button>
                <div class="dropdown dropdown--custom dropdown--custom_medium d-inline-block">
				  <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--onlyicon btn--icon--dot_dot_dot btn--small-extra" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
				  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
				    <a class="dropdown-item" href="#">Action</a>
				    <a class="dropdown-item" href="#">Another action</a>
				    <a class="dropdown-item" href="#">Something else here</a>
				  </div>
				</div>
              </div>
            </div>
            <!-- /card--listing__header -->

            <!-- card--listing__body -->
	          <div class="card--listing__body">
              <div class="card--listing__body_wraper">

                <a href="#" class="card--listing__body__image_content">
                  <div class="card--listing__body__image_content_image" style="background-image: url(https://photos.harstatic.com/153440342/hr/img-1.jpeg?ts=2018-09-13T14:59:06.353);"></div>
                </a>
                <div class="card--listing__body__content">
                  <div class="d-flex justify-content-between pb-3">
  	              	<div class="text-truncate pr-2">
  	              		<a class="text-decoration-none" href="#"><h4 tabindex="0">Barlett Street #4</h4></a>
  	              		<div class="color_slate_light pt-1">Houston TX 77098</div>
  	              	</div>
  	              	<div class="text-right">
  	              		<div class="font_size--large font_weight--bold color_carbon text-nowrap">$1,995</div>
  	              		<div class="label label--forsale mr-0">for sale</div>
  	              	</div>
  	              </div>
  	              
  				  
  				  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">2</span> bedrooms
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">1</span>Full & <span class="font_weight--semi_bold color_carbon pr-1">4</span> Half Bath(s)
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">16,300</span> built sqft
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">20,000</span> lot sqft
                  </div>                  
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">2 </span> stories
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">1954 </span> year built
                  </div>
                  <div class="card--listing__body__content__description_row">
                  		<div class="color_available">20 days at har.com</div>
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">Townhouse Condo</span>
                  </div>
                  <div class="clearfix"></div>
                               
  	            </div>

              </div>
	          </div>
            <!-- /card--listing__body -->

          </div>
          <!-- /card--listing -->

        </div>
      </div>
      

      <div class="row">
        <div class="col col-sm-12 col-12 mb-0 pb-0 ">

          <!-- card--listing -->
          <div class="card card--listing" style="max-width:642px;">

            <!-- card--listing__header -->
            <div class="row no-gutters card--listing__header">
              <div class="col-7">
                <div class="agent_signature">
                  <div class="agent_signature agent_signature__photo">
                    <a tabindex="-1" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Shadrick Bogany's profile" style="background-image:url('https://pics.harstatic.com/agent/312961.jpg');"></a>
                  </div>
                  <div class="agent_signature agent_signature__info">
                    <a class="agent_signature agent_signature__info agent_signature__info__agent_name" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Shadrick Bogany's profile" aria-label="View Shadrick Bogany's profile">
                      Shadrick Bogany
                    </a>
                    <br />
                    <a class="agent_signature agent_signature__info agent_signature__info__broker_name" href="https://www.har.com/better-homes-and-gardens-real-estate-gary-greene/broker_GGPR11" title="View Better Homes And Gardens Real's page" aria-label="View Better Homes And Gardens Real's page">
                      Better Homes And Gardens Real
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-5 text-right">
                <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--favorite btn--small-extra" aria-label="Save Bartlett Street #4 Houston TX 77098 as favorite">Save</button>
                <div class="dropdown dropdown--custom dropdown--custom_medium d-inline-block">
				  <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--onlyicon btn--icon--dot_dot_dot btn--small-extra" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
				  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
				    <a class="dropdown-item" href="#">Action</a>
				    <a class="dropdown-item" href="#">Another action</a>
				    <a class="dropdown-item" href="#">Something else here</a>
				  </div>
				</div>
              </div>
            </div>
            <!-- /card--listing__header -->

            <!-- card--listing__body -->
	          <div class="card--listing__body">
              <div class="card--listing__body_wraper">

                <a href="#" class="card--listing__body__image_content">
                  <div class="card--listing__body__image_content_image" style="background-image: url(https://photos.harstatic.com/153440342/hr/img-1.jpeg?ts=2018-09-13T14:59:06.353);"></div>
                </a>
                <div class="card--listing__body__content">
                  <div class="d-flex justify-content-between pb-3">
  	              	<div class="text-truncate pr-2">
  	              		<a class="text-decoration-none" href="#"><h4 tabindex="0">Barlett Street #4</h4></a>
  	              		<div class="color_slate_light pt-1">Houston TX 77098</div>
  	              	</div>
  	              	<div class="text-right">
  	              		<div class="font_size--large font_weight--bold color_carbon text-nowrap">$1,995</div>
  	              		<div class="label label--forsale mr-0">for sale</div>
  	              	</div>
  	              </div>
  	              
  				  
  				  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">2</span> bedrooms
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">1</span>Full & <span class="font_weight--semi_bold color_carbon pr-1">4</span> Half Bath(s)
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">16,300</span> built sqft
                  </div>
                  
                  <div class="card--listing__body__content__description_row">
                	 	&nbsp;
                  </div>                 
                  <div class="card--listing__body__content__description_row">
                  		<div class="color_available">20 days at har.com</div>
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">Townhouse Condo</span>
                  </div>
                  <div class="clearfix"></div>
                  <div class="card--listing__body__impovement">
                  	<div class="color_cement_dark text-truncate"><span class="font_weight--semi_bold color_carbon">Improvements:</span> Auxiliary Building, Fenced, Guest House, Storage Sheed</div>
                  	<div class="d-flex justify-content-between"> 	
                  		<div class=" color_cement_dark text-truncate pr-2"><span class="font_weight--semi_bold color_carbon">Land Use:</span> Leisure Ranch, Mobile Home Allowed, Other, Resort, Unrestricted</div>
                  		<div class="text-nowrap"><a href="#">View more</a></div>
                  	</div>
                  </div>             
  	            </div>

              </div>
	          </div>
            <!-- /card--listing__body -->

          </div>
          <!-- /card--listing Improvements s -->

        </div>
      </div>
      
      <div class="row">
        <div class="col col-sm-12 col-12 mb-0 pb-0 ">

          <!-- card--listing -->
          <div class="card card--listing" style="max-width:642px;">

            <!-- card--listing__header -->
            <div class="row no-gutters card--listing__header">
              <div class="col-7">
                <div class="agent_signature">
                  <div class="agent_signature agent_signature__photo">
                    <a tabindex="-1" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Shadrick Bogany's profile" style="background-image:url('https://pics.harstatic.com/agent/312961.jpg');"></a>
                  </div>
                  <div class="agent_signature agent_signature__info">
                    <a class="agent_signature agent_signature__info agent_signature__info__agent_name" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Shadrick Bogany's profile" aria-label="View Shadrick Bogany's profile">
                      Shadrick Bogany
                    </a>
                    <br />
                    <a class="agent_signature agent_signature__info agent_signature__info__broker_name" href="https://www.har.com/better-homes-and-gardens-real-estate-gary-greene/broker_GGPR11" title="View Better Homes And Gardens Real's page" aria-label="View Better Homes And Gardens Real's page">
                      Better Homes And Gardens Real
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-5 text-right">
                <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--favorite btn--small-extra" aria-label="Save Bartlett Street #4 Houston TX 77098 as favorite">Save</button>
                <div class="dropdown dropdown--custom dropdown--custom_medium d-inline-block">
				  <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--onlyicon btn--icon--dot_dot_dot btn--small-extra" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
				  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
				    <a class="dropdown-item" href="#">Action</a>
				    <a class="dropdown-item" href="#">Another action</a>
				    <a class="dropdown-item" href="#">Something else here</a>
				  </div>
				</div>
              </div>
            </div>
            <!-- /card--listing__header -->

            <!-- card--listing__body -->
	          <div class="card--listing__body">
              <div class="card--listing__body_wraper">

                <a href="#" class="card--listing__body__image_content">
                  <div class="card--listing__body__image_content_image" style="background-image: url(https://photos.harstatic.com/153440342/hr/img-1.jpeg?ts=2018-09-13T14:59:06.353);"></div>
                </a>
                <div class="card--listing__body__content">
                  <div class="d-flex justify-content-between pb-3">
  	              	<div class="text-truncate pr-2">
  	              		<a class="text-decoration-none" href="#"><h4 tabindex="0">Barlett Street #4</h4></a>
  	              		<div class="color_slate_light pt-1">Houston TX 77098</div>
  	              	</div>
  	              	<div class="text-right">
  	              		<div class="font_size--large font_weight--bold color_carbon text-nowrap">$1,995</div>
  	              		<div class="label label--forsale mr-0">for sale</div>
  	              	</div>
  	              </div>
  	              
  				  
  				  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">2</span> bedrooms
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">1</span>Full & <span class="font_weight--semi_bold color_carbon pr-1">4</span> Half Bath(s)
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">16,300</span> built sqft
                  </div>
                  
                  <div class="card--listing__body__content__description_row">
                	 	&nbsp;
                  </div>                 
                  <div class="card--listing__body__content__description_row">
                  		<div class="color_available">20 days at har.com</div>
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">Townhouse Condo</span>
                  </div>
                  <div class="clearfix"></div>
                  <div class="card--listing__body__impovement">
                  	<div class="color_cement_dark text-truncate"><span class="font_weight--semi_bold color_carbon">Improvements:</span> Auxiliary Building, Fenced, Guest House, Storage Sheed</div>
                  	<div class="d-flex justify-content-between"> 	
                  		<div class=" color_cement_dark text-truncate pr-2"><span class="font_weight--semi_bold color_carbon">Land Use:</span> Leisure Ranch, Mobile Home Allowed, Other, Resort, Unrestricted</div>
                  		<div class="text-nowrap"><a href="#">View more</a></div>
                  	</div>
                  </div>             
  	            </div>

              </div>
	          </div>
            <!-- /card--listing__body -->

          </div>
          <!-- /card--listing Improvements -->

        </div>
      </div>
      
      
      
      
      
       <div class="row pb-4 pt-5 mt-5">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 class="mb-2" tabindex="0">Landscape x-Large </h4> 
          <div class="pb-4 text-left color_slate">this card is used in Golf Cource, Appartment, Senior living etc result pages.</div>
        </div>
      </div>
      <div class="row">
        <div class="col col-sm-12 col-12 mb-0 pb-0 ">

          <!-- card--listing -->
          <div class="card card--listing  card--listing__xlarge" style="max-width:710px;">

            <!-- card--listing__header -->
            <div class="row no-gutters card--listing__header">
              <div class="col-7">
			  	
              </div>
              <div class="col-5 text-right">
                <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--favorite btn--small-extra" aria-label="Save Bartlett Street #4 Houston TX 77098 as favorite">Save</button>
                <div class="dropdown dropdown--custom dropdown--custom_medium d-inline-block">
				  <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--onlyicon btn--icon--dot_dot_dot btn--small-extra" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
				  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
				    <a class="dropdown-item" href="#">Action</a>
				    <a class="dropdown-item" href="#">Another action</a>
				    <a class="dropdown-item" href="#">Something else here</a>
				  </div>
				</div>
              </div>
            </div>
            <!-- /card--listing__header -->

            <!-- card--listing__body -->
            <a href="har.com">
	          <div class="card--listing__body">
              <div class="card--listing__body_wraper card--listing__body_wraper_xlarge ">

                <div class="card--listing__body__image_content">
                  <div class="card--listing__body__image_content_image" style="background-image: url(https://photos.harstatic.com/153440342/hr/img-1.jpeg?ts=2018-09-13T14:59:06.353);"></div>
                </div>
                <div class="card--listing__body__content">
	                  <div class="pb-3">
	  	              	<div class="text-truncate pr-2">
	  	              		<h4 tabindex="0">1000 West Clay Condos</h4>
	  	              		<div class="color_slate_light pt-1">1000 W Main St, Houston, TX 77002</div>
	  	              	</div>
	  	              	<div class="pt-2 color_slate_light">
							<img style="width:18px;" alt="" class="pb-1" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg"><img style="width:18px;" alt="" class="pb-1" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg"><img style="width:18px;" alt="" class="pb-1" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg"><img style="width:18px;" alt="" class="pb-1" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg"><img style="width:18px;" alt="" class="pb-1 mr-3" src="https://content.harstatic.com/media/icons/stars_16by16_gray.svg">2 reviews
					  	</div>
	  	              </div>
	  	              
	  				  
	  				  <div class="card--listing__body__content__description_row">
	                	 	<span class="font_weight--semi_bold color_carbon pr-1">9</span> floors
	                  </div>
	                  <div class="card--listing__body__content__description_row">
	                	 	<span class="font_weight--semi_bold color_carbon pr-1">802</span> units
	                  </div>
	                  <div class="card--listing__body__content__description_row">
	                	 	<span class="font_weight--semi_bold color_carbon pr-1">14</span> penthouses
	                  </div>
	                  <div class="card--listing__body__content__description_row">
	                	 	<span class="font_weight--semi_bold color_carbon pr-1">1920</span> year built
	                  </div>
	                  <div class="clearfix"></div>
                  
	                  <div class="card--listing__body__content__description_row_full pt-4">
	                	 	Bayou Lofts is located in the historic district of downtown Houston. This building was the headquarters of the Southern Pacific Railroad for 85 years. Beautiful finishes with hardwo…
	                  </div>
					  <div class="clearfix"></div>
  	            </div>

              </div>
	          </div>
	        </a>
            <!-- /card--listing__body -->

          </div>
          <!-- /card--listing Improvements -->

        </div>
      </div>
      
      
      
      <div class="row">
        <div class="col col-sm-12 col-12 mb-0 pb-0 ">

          <!-- card--listing -->
          <div class="card card--listing  card--listing__xlarge" style="max-width:710px;">

            <!-- card--listing__header -->
            <div class="row no-gutters card--listing__header">
              <div class="col-7">
			  	
              </div>
              <div class="col-5 text-right">
                <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--favorite btn--small-extra" aria-label="Save Bartlett Street #4 Houston TX 77098 as favorite">Save</button>
                <div class="dropdown dropdown--custom dropdown--custom_medium d-inline-block">
				  <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--onlyicon btn--icon--dot_dot_dot btn--small-extra" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
				  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
				    <a class="dropdown-item" href="#">Action</a>
				    <a class="dropdown-item" href="#">Another action</a>
				    <a class="dropdown-item" href="#">Something else here</a>
				  </div>
				</div>
              </div>
            </div>
            <!-- /card--listing__header -->

            <!-- card--listing__body -->
            <a href="har.com">
	          <div class="card--listing__body">
              <div class="card--listing__body_wraper card--listing__body_wraper_xlarge ">

                <div class="card--listing__body__image_content">
                  <div class="card--listing__body__image_content_image" style="background-image: url(https://photos.harstatic.com/153440342/hr/img-1.jpeg?ts=2018-09-13T14:59:06.353);"></div>
                </div>
                <div class="card--listing__body__content">
	                  <div class="pb-3">
	  	              	<div class="text-truncate pr-2">
	  	              		<h4 tabindex="0">1000 West Clay Condos</h4>
	  	              		<div class="color_slate_light pt-1">1000 W Main St, Houston, TX 77002</div>
	  	              	</div>
	  	              	<div class="pt-2 color_slate_light">
							<img style="width:18px;" alt="" class="pb-1" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg"><img style="width:18px;" alt="" class="pb-1" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg"><img style="width:18px;" alt="" class="pb-1" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg"><img style="width:18px;" alt="" class="pb-1" src="https://content.harstatic.com/media/icons/stars_16by16_yellow.svg"><img style="width:18px;" alt="" class="pb-1 mr-3" src="https://content.harstatic.com/media/icons/stars_16by16_gray.svg">2 reviews
					  	</div>
	  	              </div>
	  	              
	  				  
	  				  <div class="card--listing__body__content__description_row">
	                	 	<span class="font_weight--semi_bold color_carbon pr-1">9</span> floors
	                  </div>
	                  <div class="card--listing__body__content__description_row">
	                	 	<span class="font_weight--semi_bold color_carbon pr-1">802</span> units
	                  </div>
	                  <div class="card--listing__body__content__description_row">
	                	 	<span class="font_weight--semi_bold color_carbon pr-1">14</span> penthouses
	                  </div>
	                  <div class="card--listing__body__content__description_row">
	                	 	<span class="font_weight--semi_bold color_carbon pr-1">1920</span> year built
	                  </div>
	                  <div class="clearfix"></div>
					  <div onclick="location.href='http://google.com'; return false;" class="card--listing__body__impovement">
		                <div class="row no-gutters pb-1">
			                <div class="col-auto font_weight--bold" style="width:80px;">1 bedroom</div>
			                <div class="col color_slate">$1,775 – $2,043</div>
		                </div>
		                <div class="row no-gutters pb-1">
			                <div class="col-auto font_weight--bold" style="width:80px;">2 bedrooms</div>
			                <div class="col color_slate">$2,584 – $3,294</div>
		                </div>
	                  	<div>View details</div>
	                  </div>
  	            </div>

              </div>
	          </div>
	        </a>
            <!-- /card--listing__body -->

          </div>
          <!-- /card--listing Improvements -->

        </div>
      </div>
      `,

      `<div class="row">
        <div class="col col-sm-12 col-12 mb-0 pb-0 ">

	  
	  <div class="row">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 tabindex="0">Landscape Reduced</h4>
        </div>
      </div>

      <div class="row">
        <div class="col-12">

          <!-- card--listing Landscape reduced -->
          <div class="card card--listing card--listing--small" style="max-width:358px;">

            <!-- card--listing__body -->
	          <div class="card--listing__body">
              <div class="card--listing__body_wraper">

                <a href="#" class="card--listing__body__image_content">
                  <div class="card--listing__body__image_content_image" style="background-image: url(https://photos.harstatic.com/153440342/hr/img-1.jpeg?ts=2018-09-13T14:59:06.353);"></div>
                </a>
                <div class="card--listing__body__content">
                  <div class="color_available pb-2">20 days at har.com</div>	
                  <div class="d-flex justify-content-between pb-2">
  	              	<div class="text-truncate pr-2">
  	              		<a class="text-decoration-none" href="#"><h4 tabindex="0">Bartlett Street #4 Long Title Goes </h4></a>
  	              		<span class="color_slate_light pb-1">Houston TX 77098</span>
  	              	</div>
  	              	<div class="text-right">
  	              		<div class="font_size--medium font_weight--bold color_carbon text-nowrap">$1.9M</div>
  	              		<div class="label label--forsale mr-0 text-nowrap mr-0">for sale</div>
  	              	</div>
  	              </div>
  	              
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">2</span> beds
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">2</span> baths
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">16,300</span> lot
                  </div>
                  <div class="clearfix"></div>
  	            </div>

              </div>
	          </div>
            <!-- /card--listing__body -->

          </div>
          <!-- /card--listing Landscape reduced -->

        </div>
      </div>
	  
	  
	  <div class="pb-5"></div>
	    
	    

	  <div class="row">
        <div class="col-12">

          <!-- card--listing reduced sold -->
          <div class="card card--listing card--listing--small" style="max-width:358px;">

            <!-- card--listing__body -->
	          <div class="card--listing__body">
              <div class="card--listing__body_wraper">

                <a href="#" class="card--listing__body__image_content">
                  <div class="card--listing__body__image_content_image" style="background-image: url(https://photos.harstatic.com/153440342/hr/img-1.jpeg?ts=2018-09-13T14:59:06.353);"></div>
                </a>
                <div class="card--listing__body__content">
                  <div class="color_sold pb-2">Sold: 10/23/2020</div>	
                  <div class="d-flex justify-content-between pb-2">
  	              	<div class="text-truncate pr-2">
  	              		<a class="text-decoration-none" href="#"><h4 tabindex="0">Bartlett Street #4 Long Title Goes </h4></a>
  	              		<span class="color_slate_light pb-1">Houston TX 77098</span>
  	              	</div>
  	              	<div class="text-right">
  	              		<div class="font_size--medium font_weight--bold color_carbon text-nowrap">$1.9M- 2.2M</div>
  	              		<div class="label label--sold mr-0 text-nowrap mr-0">sold</div>
  	              	</div>
  	              </div>
  	              
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">2</span> beds
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">2</span> baths
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">16,300</span> lot
                  </div>
                  <div class="clearfix"></div>
  	            </div>

              </div>
	          </div>
            <!-- /card--listing__body -->

          </div>
          <!-- /card--listing reduced sold -->

        </div>
      </div>
      
      `,

      `<div class="row">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 tabindex="0">Portrait large</h4>
        </div>
      </div>

      <div class="row">
        <div class="col col-sm-6 col-12 mb-0 pb-0 ">

          <!-- card--listing -->
          <div class="card card--listing card--listing--portrait">
            <!-- card--listing__header -->
            <div class="row no-gutters card--listing__header">
              <div class="col-7">
                <div class="agent_signature">
                  <div class="agent_signature agent_signature__photo">
                    <a tabindex="-1" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Shadrick Bogany's profile" style="background-image:url('https://pics.harstatic.com/agent/312961.jpg');"></a>
                  </div>
                  <div class="agent_signature agent_signature__info">
                    <a class="agent_signature agent_signature__info agent_signature__info__agent_name" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Shadrick Bogany's profile" aria-label="View Shadrick Bogany's profile">
                      Shadrick Bogany
                    </a>
                    <br />
                    <a class="agent_signature agent_signature__info agent_signature__info__broker_name" href="https://www.har.com/better-homes-and-gardens-real-estate-gary-greene/broker_GGPR11" title="View Better Homes And Gardens Real's page" aria-label="View Better Homes And Gardens Real's page">
                      Better Homes And Gardens Real
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-5 text-right">
                <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--favorite btn--small-extra btn--icon--onlyicon " aria-label="Save Bartlett Street #4 Houston TX 77098 as favorite"></button>
                <div class="dropdown dropdown--custom dropdown--custom_medium d-inline-block">
				  <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--onlyicon btn--icon--dot_dot_dot btn--small-extra" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
				  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
				    <a class="dropdown-item" href="#">Action</a>
				    <a class="dropdown-item" href="#">Another action</a>
				    <a class="dropdown-item" href="#">Something else here</a>
				  </div>
				</div>                
              </div>
            </div>
            <!-- /card--listing__header -->
            <!-- card--listing__body -->
	          <div class="card--listing__body">
              <div class="card--listing__body_wraper">

                <a href="#" class="card--listing__body__image_content">
                  <div class="card--listing__body__image_content_image" style="background-image: url(https://photos.harstatic.com/153440342/hr/img-1.jpeg?ts=2018-09-13T14:59:06.353);"></div>
                </a>
                <div class="card--listing__body__content">
                  <a class="text-decoration-none" href="#"><h4 class="mb-0" tabindex="0">8015 Glen Dell Court</h4></a>
  	              <div class="color_slate_light pb-3">Houston TX 77098</div>
  	              
                  <div class="d-flex justify-content-between pb-2">
  	              	<div class="pr-2 align-self-center">
  	              		<div class="font_size--medium font_weight--bold color_carbon text-nowrap">$ 1,705,000</div>  	              		
  	              	</div>
  	              	<div class="text-right">  	              		
  	              		<div class="label label--forsale mr-0">for sale</div>
  	              	</div>
  	              </div>
                  
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">2</span> bedrooms
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">2</span> bathroom
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">5,056</span> built Sqft.
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">20,000</span> lot Sqft.
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">3</span> Stories
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">2012 </span> yeat built
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">Has Private Pool </span>
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">72572799 </span> MLS#
                  </div>
                  <div class="card--listing__body__content__description_row">
                  		<div class="color_available">20 days at har.com</div>
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">Townhouse Condo</span>
                  </div>
                  <div class="clearfix"></div>
  	            </div>
              </div>
	          </div>
            <!-- /card--listing__body -->
          </div>
          <!-- /card--listing -->
		  
		  
		  
		  <div class="pb-5"></div>
		  
		  
		  
		 <!-- card--listing -->
          <div class="card card--listing card--listing--portrait">
            <!-- card--listing__header -->
            <div class="row no-gutters card--listing__header">
              <div class="col-7">
                <div class="agent_signature">
                  <div class="agent_signature agent_signature__photo">
                    <a tabindex="-1" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Shadrick Bogany's profile" style="background-image:url('https://pics.harstatic.com/agent/312961.jpg');"></a>
                  </div>
                  <div class="agent_signature agent_signature__info">
                    <a class="agent_signature agent_signature__info agent_signature__info__agent_name" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Shadrick Bogany's profile" aria-label="View Shadrick Bogany's profile">
                      Shadrick Bogany
                    </a>
                    <br />
                    <a class="agent_signature agent_signature__info agent_signature__info__broker_name" href="https://www.har.com/better-homes-and-gardens-real-estate-gary-greene/broker_GGPR11" title="View Better Homes And Gardens Real's page" aria-label="View Better Homes And Gardens Real's page">
                      Better Homes And Gardens Real
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-5 text-right">
                <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--favorite btn--small-extra btn--icon--onlyicon " aria-label="Save Bartlett Street #4 Houston TX 77098 as favorite"></button>
                <div class="dropdown dropdown--custom dropdown--custom_medium d-inline-block">
				  <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--onlyicon btn--icon--dot_dot_dot btn--small-extra" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
				  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
				    <a class="dropdown-item" href="#">Action</a>
				    <a class="dropdown-item" href="#">Another action</a>
				    <a class="dropdown-item" href="#">Something else here</a>
				  </div>
				</div>                
              </div>
            </div>
            <!-- /card--listing__header -->
            <!-- card--listing__body -->
	          <div class="card--listing__body">
              <div class="card--listing__body_wraper">

                <a href="#" class="card--listing__body__image_content">
                  <div class="card--listing__body__image_content_image" style="background-image: url(https://photos.harstatic.com/153440342/hr/img-1.jpeg?ts=2018-09-13T14:59:06.353);"></div>
                </a>
                <div class="card--listing__body__content">
                  <a class="text-decoration-none" href="#"><h4 class="mb-0" tabindex="0">8015 Glen Dell Court</h4></a>
  	              
  	              
  	              <div class="d-flex justify-content-between pb-2">
  	              	<div class="pr-2 align-self-center">
  	              		<div class="color_slate_light">Houston TX 77098</div>
  	              	</div>
  	              	<div class="text-right">  	              		
  	              		<div class="card--listing__body__font_rent">Also For Rent</div>
  	              	</div>
  	              </div>
  	              
  	              
                  <div class="d-flex justify-content-between pb-2">
  	              	<div class="pr-2 align-self-center">
  	              		<div class="font_size--medium font_weight--bold color_carbon text-nowrap"><img src="https://content.harstatic.com/media/icons/price_rediction_arrow.svg"> $ 1,705,000</div>  	              		
  	              	</div>
  	              	<div class="text-right">  	              		
  	              		<div class="label label--forsale mr-0 mr-0">for sale</div>
  	              	</div>
  	              </div>
                  
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">2</span> bedrooms
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">2</span> bathroom
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">5,056</span> built Sqft.
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">20,000</span> lot Sqft.
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">3</span> Stories
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">2012 </span> yeat built
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">Has Private Pool </span>
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">72572799 </span> MLS#
                  </div>
                  <div class="card--listing__body__content__description_row">
                  		<div class="color_available">20 days at har.com</div>
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">Townhouse Condo</span>
                  </div>
                  <div class="clearfix"></div>
  	            </div>
              </div>
              <div class="card--listing__labels pt-3">
  					<div class="label label--justlisted mb-2"><img src="https://content.harstatic.com/media/icons/icon-just-listed.svg">Just listed</div>
  					<div class="label label--pricereduction mb-2"><img src="https://content.harstatic.com/media/icons/icon-price-reduction.svg">Price Reduction</div>
  					<div class="label label--openhouse_simple mb-2"><img src="https://content.harstatic.com/media/icons/icon-open-house.svg">Open House</div>
  					<div class="label label--newconstruction mb-2"><img src="https://content.harstatic.com/media/icons/icon-new-construction.svg">New construction</div>  					
  					<div class="label label--virtualopenhouse mb-2"><img src="https://content.harstatic.com/media/icons/icon-open-house.svg">Virtual Open House</div>
  					<div class="label label--foreclosure mb-2"><img src="https://content.harstatic.com/media/icons/icon-foreclosure.svg">Foreclosure</div>
  			  </div>
	          </div>
            <!-- /card--listing__body -->
          </div>
          <!-- /card--listing -->
          
          
          
          
          
          <div class="pb-5"></div>
		  
		  
		  
		 <!-- card--listing -->
          <div class="card card--listing card--listing--portrait">
            <!-- card--listing__header -->
            <div class="row no-gutters card--listing__header">
              <div class="col-7">
                <div class="agent_signature">
                  <div class="agent_signature agent_signature__photo">
                    <a tabindex="-1" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Shadrick Bogany's profile" style="background-image:url('https://pics.harstatic.com/agent/312961.jpg');"></a>
                  </div>
                  <div class="agent_signature agent_signature__info">
                    <a class="agent_signature agent_signature__info agent_signature__info__agent_name" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Shadrick Bogany's profile" aria-label="View Shadrick Bogany's profile">
                      Shadrick Bogany
                    </a>
                    <br />
                    <a class="agent_signature agent_signature__info agent_signature__info__broker_name" href="https://www.har.com/better-homes-and-gardens-real-estate-gary-greene/broker_GGPR11" title="View Better Homes And Gardens Real's page" aria-label="View Better Homes And Gardens Real's page">
                      Better Homes And Gardens Real
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-5 text-right">
                <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--favorite btn--small-extra btn--icon--onlyicon " aria-label="Save Bartlett Street #4 Houston TX 77098 as favorite"></button>
                <div class="dropdown dropdown--custom dropdown--custom_medium d-inline-block">
				  <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--onlyicon btn--icon--dot_dot_dot btn--small-extra" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
				  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
				    <a class="dropdown-item" href="#">Action</a>
				    <a class="dropdown-item" href="#">Another action</a>
				    <a class="dropdown-item" href="#">Something else here</a>
				  </div>
				</div>                
              </div>
            </div>
            <!-- /card--listing__header -->
            <!-- card--listing__body -->
	          <div class="card--listing__body">
              <div class="card--listing__body_wraper">

                <a href="#" class="card--listing__body__image_content">
                  <div class="card--listing__body__image_content_image" style="background-image: url(https://photos.harstatic.com/153440342/hr/img-1.jpeg?ts=2018-09-13T14:59:06.353);"></div>
                </a>
                <div class="card--listing__body__content">
                  <a class="text-decoration-none" href="#"><h4 class="mb-0" tabindex="0">8015 Glen Dell Court</h4></a>
  	              <div class="color_slate_light pb-2">Houston TX 77098</div>
  	              
                  <div class="d-flex justify-content-between pb-2">
  	              	<div class="pr-2 align-self-center">
  	              		<div class="font_size--medium font_weight--bold color_carbon text-nowrap">$ 1,705,000</div>  	              		
  	              	</div>
  	              	<div class="text-right">  	              		
  	              		<div class="label label--forsale mr-0 mr-0">for sale</div>
  	              	</div>
  	              </div>
                  
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">2</span> bedrooms
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">2</span> bathroom
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">5,056</span> built Sqft.
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">3</span> Stories
                  </div>
                  <div class="card--listing__body__content__description_row">
                  		<div class="color_available">20 days at har.com</div>
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">Townhouse Condo</span>
                  </div>
                  <div class="clearfix"></div>
                  
                  <div class="card--listing__body__impovement">
	                  	<div class="color_cement_dark"><span class="font_weight--semi_bold color_carbon">Improvements:</span> Auxiliary Building, Fenced, Guest House, Storage Sheed</div>
	                  	<div class="d-flex justify-content-between"> 	
	                  		<div class=" color_cement_dark text-truncate pr-2"><span class="font_weight--semi_bold color_carbon">Land Use:</span> Leisure Ranch, Mobile Home Allowed, Other, Resort, Unrestricted</div>
	                  		<div class="text-nowrap"><a href="#">View more</a></div>
	                  	</div>
	                 </div>
  	            </div>
	              	
	            </div>
	          </div>
            <!-- /card--listing__body -->
          </div>
          <!-- /card--listing -->
          
          
          
          <div class="pb-5"></div>
		  
		  
		  
		 <!-- card--listing -->
          <div class="card card--listing card--listing--portrait">
            <!-- card--listing__header -->
            <div class="row no-gutters card--listing__header">
              <div class="col-7">
                <div class="agent_signature">
                  <div class="agent_signature agent_signature__photo">
                    <a tabindex="-1" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Shadrick Bogany's profile" style="background-image:url('https://pics.harstatic.com/agent/312961.jpg');"></a>
                  </div>
                  <div class="agent_signature agent_signature__info">
                    <a class="agent_signature agent_signature__info agent_signature__info__agent_name" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Shadrick Bogany's profile" aria-label="View Shadrick Bogany's profile">
                      Shadrick Bogany
                    </a>
                    <br />
                    <a class="agent_signature agent_signature__info agent_signature__info__broker_name" href="https://www.har.com/better-homes-and-gardens-real-estate-gary-greene/broker_GGPR11" title="View Better Homes And Gardens Real's page" aria-label="View Better Homes And Gardens Real's page">
                      Better Homes And Gardens Real
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-5 text-right">
                <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--favorite btn--small-extra btn--icon--onlyicon " aria-label="Save Bartlett Street #4 Houston TX 77098 as favorite"></button>
                <div class="dropdown dropdown--custom dropdown--custom_medium d-inline-block">
				  <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--onlyicon btn--icon--dot_dot_dot btn--small-extra" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
				  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
				    <a class="dropdown-item" href="#">Action</a>
				    <a class="dropdown-item" href="#">Another action</a>
				    <a class="dropdown-item" href="#">Something else here</a>
				  </div>
				</div>                
              </div>
            </div>
            <!-- /card--listing__header -->
            <!-- card--listing__body -->
	          <div class="card--listing__body">
              <div class="card--listing__body_wraper">

                <a href="#" class="card--listing__body__image_content">
                  <div class="card--listing__body__image_content_image" style="background-image: url(https://photos.harstatic.com/153440342/hr/img-1.jpeg?ts=2018-09-13T14:59:06.353);"></div>
                </a>
                <div class="card--listing__body__content">
                  <a class="text-decoration-none" href="#"><h4 class="mb-0" tabindex="0">8015 Glen Dell Court</h4></a>
  	              <div class="color_slate_light pb-2">Houston TX 77098</div>
  	              
                  <div class="d-flex justify-content-between pb-2">
  	              	<div class="pr-2 align-self-center">
  	              		<div class="font_size--medium font_weight--bold color_carbon text-nowrap">$ 1,705,000</div>  	              		
  	              	</div>
  	              	<div class="text-right">  	              		
  	              		<div class="label label--forsale mr-0 mr-0">for sale</div>
  	              	</div>
  	              </div>
                  
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">2</span> bedrooms
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">2</span> bathroom
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">5,056</span> built Sqft.
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">3</span> Stories
                  </div>
                  <div class="card--listing__body__content__description_row">
                  		<div class="color_available">20 days at har.com</div>
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">Townhouse Condo</span>
                  </div>
                  <div class="clearfix"></div>
                  
                  <div class="card--listing__body__impovement">
                  	<div class="color_cement_dark"><div class="font_weight--semi_bold color_carbon">Zone / Assizned Schools</div> <a href="#">Settlers Way Elementary School</a>, <a href="#">First Colony Middle School</a>, <a href="#">Clements High School</a></div>                  	 
                  </div>
  	            </div>
	              	
	            </div>
	          </div>
            <!-- /card--listing__body -->
          </div>
          <!-- /card--listing -->
          
          
          
          <div class="pb-5"></div>
          
           
          
          <!-- card--listing -->
          <div class="card card--listing card--listing--portrait">
            <!-- card--listing__header -->
            <div class="row no-gutters card--listing__header">
              <div class="col-7">
                <div class="agent_signature">
                  <div class="agent_signature agent_signature__photo">
                    <a tabindex="-1" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Shadrick Bogany's profile" style="background-image:url('https://pics.harstatic.com/agent/312961.jpg');"></a>
                  </div>
                  <div class="agent_signature agent_signature__info">
                    <a class="agent_signature agent_signature__info agent_signature__info__agent_name" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Shadrick Bogany's profile" aria-label="View Shadrick Bogany's profile">
                      Shadrick Bogany
                    </a>
                    <br />
                    <a class="agent_signature agent_signature__info agent_signature__info__broker_name" href="https://www.har.com/better-homes-and-gardens-real-estate-gary-greene/broker_GGPR11" title="View Better Homes And Gardens Real's page" aria-label="View Better Homes And Gardens Real's page">
                      Better Homes And Gardens Real
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-5 text-right">
                <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--favorite btn--small-extra btn--icon--onlyicon " aria-label="Save Bartlett Street #4 Houston TX 77098 as favorite"></button>
                <div class="dropdown dropdown--custom dropdown--custom_medium d-inline-block">
				  <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--onlyicon btn--icon--dot_dot_dot btn--small-extra" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
				  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
				    <a class="dropdown-item" href="#">Action</a>
				    <a class="dropdown-item" href="#">Another action</a>
				    <a class="dropdown-item" href="#">Something else here</a>
				  </div>
				</div>                
              </div>
            </div>
            <!-- /card--listing__header -->
            <!-- card--listing__body -->
	          <div class="card--listing__body">
              <div class="card--listing__body_wraper">

                <a href="#" class="card--listing__body__image_content">
                  <div class="card--listing__body__image_content_image" style="background-image: url(https://photos.harstatic.com/153440342/hr/img-1.jpeg?ts=2018-09-13T14:59:06.353);"></div>
                </a>
                <div class="card--listing__body__content">
                  <a class="text-decoration-none" href="#"><h4 class="mb-0" tabindex="0">8015 Glen Dell Court</h4></a>
  	              <div class="color_slate_light pb-3">Houston TX 77098</div>
  	              
                  <div class="d-flex justify-content-between pb-2">
  	              	<div class="pr-2 align-self-center">
  	              		<div class="font_size--medium font_weight--bold color_carbon text-nowrap">$1,655,000 - 1,705,000</div>  	              		
  	              	</div>
  	              	<div class="text-right">  	              		
  	              		<div class="label label--sold mr-0 mr-0">sold</div>
  	              	</div>
  	              </div>
                  
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">2</span> bedrooms
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">2</span> bathroom
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">5,056</span> built Sqft.
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">20,000</span> lot Sqft.
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">3</span> Stories
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">2012 </span> yeat built
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">Has Private Pool </span>
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">72572799 </span> MLS#
                  </div>
                  <div class="card--listing__body__content__description_row">
                  		<div class="color_sold">Sold: 10/23/2020</div>
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">Townhouse Condo</span>
                  </div>
                  <div class="clearfix"></div>
  	            </div>
              </div>
	          </div>
            <!-- /card--listing__body -->
          </div>
          <!-- /card--listing -->
		  
		  
		  
		  
	  <div class="pb-5"></div>	  
	
	
		  
	  <div class="row">
        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
          <h4 tabindex="0">Portrait large Reduced</h4>
        </div>
      </div>

      <div class="row">
        <div class="col-12 ">

          <!-- card--listing -->
          <div class="card card--listing card--listing--portrait card--listing--reduced">
            <!-- card--listing__header -->
            <div class="row no-gutters card--listing__header">
              <div class="col-7">
                <div class="agent_signature">
                  <div class="agent_signature agent_signature__photo">
                    <a tabindex="-1" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Shadrick Bogany's profile" style="background-image:url('https://pics.harstatic.com/agent/312961.jpg');"></a>
                  </div>
                  <div class="agent_signature agent_signature__info">
                    <a class="agent_signature agent_signature__info agent_signature__info__agent_name" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Shadrick Bogany's profile" aria-label="View Shadrick Bogany's profile">
                      Shadrick Bogany
                    </a>
                    <br />
                    <a class="agent_signature agent_signature__info agent_signature__info__broker_name" href="https://www.har.com/better-homes-and-gardens-real-estate-gary-greene/broker_GGPR11" title="View Better Homes And Gardens Real's page" aria-label="View Better Homes And Gardens Real's page">
                      Better Homes And Gardens Real
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-5 text-right">
                <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--favorite btn--small-extra btn--icon--onlyicon " aria-label="Save Bartlett Street #4 Houston TX 77098 as favorite"></button>
                <div class="dropdown dropdown--custom dropdown--custom_medium d-inline-block">
				  <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--onlyicon btn--icon--dot_dot_dot btn--small-extra" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
				  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
				    <a class="dropdown-item" href="#">Action</a>
				    <a class="dropdown-item" href="#">Another action</a>
				    <a class="dropdown-item" href="#">Something else here</a>
				  </div>
				</div>                
              </div>
            </div>
            <!-- /card--listing__header -->
            <!-- card--listing__body -->
	          <div class="card--listing__body">
              <div class="card--listing__body_wraper">

                <a href="#" class="card--listing__body__image_content">
                  <div class="card--listing__body__image_content_image" style="background-image: url(https://photos.harstatic.com/153440342/hr/img-1.jpeg?ts=2018-09-13T14:59:06.353);"></div>
                </a>
                <div class="card--listing__body__content">
                  <a class="text-decoration-none" href="#"><h4 class="mb-0" tabindex="0">8015 Glen Dell Court</h4></a>
  	              <div class="color_slate_light pb-3">Houston TX 77098</div>
  	              
                  <div class="d-flex justify-content-between pb-2">
  	              	<div class="pr-2 align-self-center">
  	              		<div class="font_size--medium font_weight--bold color_carbon text-nowrap">$ 1,705,000</div>  	              		
  	              	</div>
  	              	<div class="text-right">  	              		
  	              		<div class="label label--forsale mr-0">for sale</div>
  	              	</div>
  	              </div>
                  
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">2</span> bedrooms
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">2</span> bathroom
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">5,056</span> built Sqft.
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">20,000</span> lot Sqft.
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">3</span> Stories
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">2012 </span> yeat built
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">Has Private Pool </span>
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">72572799 </span> MLS#
                  </div>
                  <div class="card--listing__body__content__description_row">
                  		<div class="color_available">20 days at har.com</div>
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">Townhouse Condo</span>
                  </div>
                  <div class="clearfix"></div>
  	            </div>
              </div>
	          </div>
            <!-- /card--listing__body -->
          </div>
          <!-- /card--listing -->
		  
		  
		  
		  
		  <div class="pb-5"></div>
		  
		  
		  
		  <!-- card--listing -->
          <div class="card card--listing card--listing--portrait card--listing--reduced">
            <!-- card--listing__header -->
            <div class="row no-gutters card--listing__header">
              <div class="col-7">
                <div class="agent_signature">
                  <div class="agent_signature agent_signature__photo">
                    <a tabindex="-1" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Shadrick Bogany's profile" style="background-image:url('https://pics.harstatic.com/agent/312961.jpg');"></a>
                  </div>
                  <div class="agent_signature agent_signature__info">
                    <a class="agent_signature agent_signature__info agent_signature__info__agent_name" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Shadrick Bogany's profile" aria-label="View Shadrick Bogany's profile">
                      Shadrick Bogany
                    </a>
                    <br />
                    <a class="agent_signature agent_signature__info agent_signature__info__broker_name" href="https://www.har.com/better-homes-and-gardens-real-estate-gary-greene/broker_GGPR11" title="View Better Homes And Gardens Real's page" aria-label="View Better Homes And Gardens Real's page">
                      Better Homes And Gardens Real
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-5 text-right">
                <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--favorite btn--small-extra btn--icon--onlyicon " aria-label="Save Bartlett Street #4 Houston TX 77098 as favorite"></button>
                <div class="dropdown dropdown--custom dropdown--custom_medium d-inline-block">
				  <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--onlyicon btn--icon--dot_dot_dot btn--small-extra" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
				  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
				    <a class="dropdown-item" href="#">Action</a>
				    <a class="dropdown-item" href="#">Another action</a>
				    <a class="dropdown-item" href="#">Something else here</a>
				  </div>
				</div>                
              </div>
            </div>
            <!-- /card--listing__header -->
            <!-- card--listing__body -->
	          <div class="card--listing__body">
              <div class="card--listing__body_wraper">

                <a href="#" class="card--listing__body__image_content">
                  <div class="card--listing__body__image_content_image" style="background-image: url(https://photos.harstatic.com/153440342/hr/img-1.jpeg?ts=2018-09-13T14:59:06.353);"></div>
                </a>
                <div class="card--listing__body__content">
                  <a class="text-decoration-none" href="#"><h4 class="mb-0" tabindex="0">8015 Glen Dell Court</h4></a>
  	              <div class="color_slate_light pb-3">Houston TX 77098</div>
  	              
                  <div class="d-flex justify-content-between pb-2">
  	              	<div class="pr-2 align-self-center">
  	              		<div class="font_size--medium font_weight--bold color_carbon text-nowrap">$ 1,705,000</div>  	              		
  	              	</div>
  	              	<div class="text-right">  	              		
  	              		<div class="label label--forsale mr-0">for sale</div>
  	              	</div>
  	              </div>
                  
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">2</span> bedrooms
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">2</span> bathroom
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">5,056</span> built Sqft.
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">20,000</span> lot Sqft.
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">3</span> Stories
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">2012 </span> yeat built
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">Has Private Pool </span>
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">72572799 </span> MLS#
                  </div>
                  <div class="card--listing__body__content__description_row">
                  		<div class="color_available">20 days at har.com</div>
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">Townhouse Condo</span>
                  </div>
                  <div class="clearfix"></div>
  	            </div>
              </div>
	          </div>
            <!-- /card--listing__body -->
            <div class="card--listing__labels pt-3">
  					<div class="label label--justlisted mb-2"><img src="https://content.harstatic.com/media/icons/icon-just-listed.svg">Just listed</div>
  					<div class="label label--virtualopenhouse mb-2"><img src="https://content.harstatic.com/media/icons/icon-open-house.svg">Virtual Open House</div>
  					<div class="label label--pricereduction mb-2"><img src="https://content.harstatic.com/media/icons/icon-price-reduction.svg">Price Reduction</div>
  					<div class="label label--openhouse_simple mb-2"><img src="https://content.harstatic.com/media/icons/icon-open-house.svg">Open House</div>
  					<div class="label label--newconstruction mb-2"><img src="https://content.harstatic.com/media/icons/icon-new-construction.svg">New construction</div>  					
  					<div class="label label--foreclosure mb-2"><img src="https://content.harstatic.com/media/icons/icon-foreclosure.svg">Foreclosure</div>
  			  </div>
          </div>
          <!-- /card--listing -->
          
          
          
          
           <div class="pb-5"></div>
		  
		  
		  
		  <!-- card--listing -->
          <div class="card card--listing card--listing--portrait card--listing--reduced">
            <!-- card--listing__header -->
            <div class="row no-gutters card--listing__header">
              <div class="col-7">
                <div class="agent_signature">
                  <div class="agent_signature agent_signature__photo">
                    <a tabindex="-1" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Shadrick Bogany's profile" style="background-image:url('https://pics.harstatic.com/agent/312961.jpg');"></a>
                  </div>
                  <div class="agent_signature agent_signature__info">
                    <a class="agent_signature agent_signature__info agent_signature__info__agent_name" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Shadrick Bogany's profile" aria-label="View Shadrick Bogany's profile">
                      Shadrick Bogany
                    </a>
                    <br />
                    <a class="agent_signature agent_signature__info agent_signature__info__broker_name" href="https://www.har.com/better-homes-and-gardens-real-estate-gary-greene/broker_GGPR11" title="View Better Homes And Gardens Real's page" aria-label="View Better Homes And Gardens Real's page">
                      Better Homes And Gardens Real
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-5 text-right">
                <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--favorite btn--small-extra btn--icon--onlyicon " aria-label="Save Bartlett Street #4 Houston TX 77098 as favorite"></button>
                <div class="dropdown dropdown--custom dropdown--custom_medium d-inline-block">
				  <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--onlyicon btn--icon--dot_dot_dot btn--small-extra" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
				  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
				    <a class="dropdown-item" href="#">Action</a>
				    <a class="dropdown-item" href="#">Another action</a>
				    <a class="dropdown-item" href="#">Something else here</a>
				  </div>
				</div>                
              </div>
            </div>
            <!-- /card--listing__header -->
            <!-- card--listing__body -->
	          <div class="card--listing__body">
              <div class="card--listing__body_wraper">

                <a href="#" class="card--listing__body__image_content">
                  <div class="card--listing__body__image_content_image" style="background-image: url(https://photos.harstatic.com/153440342/hr/img-1.jpeg?ts=2018-09-13T14:59:06.353);"></div>
                </a>
                <div class="card--listing__body__content">
                  <a class="text-decoration-none" href="#"><h4 class="mb-0" tabindex="0">8015 Glen Dell Court</h4></a>
  	              <div class="color_slate_light pb-3">Houston TX 77098</div>
  	              
                  <div class="d-flex justify-content-between pb-2">
  	              	<div class="pr-2 align-self-center">
  	              		<div class="font_size--medium font_weight--bold color_carbon text-nowrap">$ 1,705,000</div>  	              		
  	              	</div>
  	              	<div class="text-right">  	              		
  	              		<div class="label label--forsale mr-0">for sale</div>
  	              	</div>
  	              </div>
                  
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">2</span> bedrooms
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">2</span> bathroom
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">5,056</span> built Sqft.
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">20,000</span> lot Sqft.
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">3</span> Stories
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">2012 </span> yeat built
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">Has Private Pool </span>
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">72572799 </span> MLS#
                  </div>
                  <div class="card--listing__body__content__description_row">
                  		<div class="color_available">20 days at har.com</div>
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">Townhouse Condo</span>
                  </div>
                  <div class="clearfix"></div>
                  
                  <div class="card--listing__body__impovement">
                  	<div class="color_cement_dark"><span class="font_weight--semi_bold color_carbon">Improvements:</span> Auxiliary Building, Fenced, Guest House, Storage Sheed</div>
                  	
                  	<div class=" color_cement_dark pr-2"><span class="font_weight--semi_bold color_carbon">Land Use:</span> Leisure Ranch, Mobile Home Allowed, Other, Resort, Unrestricted</div>
                  	<div class="text-nowrap"><a href="#">View more</a></div>
                  	
                 </div>
                  
  	            </div>
              </div>
	          </div>
            <!-- /card--listing__body -->
          </div>
          <!-- /card--listing -->
          
          

		  <div class="pb-5"></div>
		  
		  
		  
		  <!-- card--listing -->
          <div class="card card--listing card--listing--portrait card--listing--reduced">
            <!-- card--listing__header -->
            <div class="row no-gutters card--listing__header">
              <div class="col-7">
                <div class="agent_signature">
                  <div class="agent_signature agent_signature__photo">
                    <a tabindex="-1" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Shadrick Bogany's profile" style="background-image:url('https://pics.harstatic.com/agent/312961.jpg');"></a>
                  </div>
                  <div class="agent_signature agent_signature__info">
                    <a class="agent_signature agent_signature__info agent_signature__info__agent_name" href="https://www.har.com/shadrick-bogany/agent_BOGANYS" title="View Shadrick Bogany's profile" aria-label="View Shadrick Bogany's profile">
                      Shadrick Bogany
                    </a>
                    <br />
                    <a class="agent_signature agent_signature__info agent_signature__info__broker_name" href="https://www.har.com/better-homes-and-gardens-real-estate-gary-greene/broker_GGPR11" title="View Better Homes And Gardens Real's page" aria-label="View Better Homes And Gardens Real's page">
                      Better Homes And Gardens Real
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-5 text-right">
                <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--favorite btn--small-extra btn--icon--onlyicon " aria-label="Save Bartlett Street #4 Houston TX 77098 as favorite"></button>
                <div class="dropdown dropdown--custom dropdown--custom_medium d-inline-block">
				  <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--onlyicon btn--icon--dot_dot_dot btn--small-extra" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
				  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
				    <a class="dropdown-item" href="#">Action</a>
				    <a class="dropdown-item" href="#">Another action</a>
				    <a class="dropdown-item" href="#">Something else here</a>
				  </div>
				</div>                
              </div>
            </div>
            <!-- /card--listing__header -->
            <!-- card--listing__body -->
	          <div class="card--listing__body">
              <div class="card--listing__body_wraper">

                <a href="#" class="card--listing__body__image_content">
                  <div class="card--listing__body__image_content_image" style="background-image: url(https://photos.harstatic.com/153440342/hr/img-1.jpeg?ts=2018-09-13T14:59:06.353);"></div>
                </a>
                <div class="card--listing__body__content">
                  <a class="text-decoration-none" href="#"><h4 class="mb-0" tabindex="0">8015 Glen Dell Court</h4></a>
  	              <div class="color_slate_light pb-3">Houston TX 77098</div>
  	              
                  <div class="d-flex justify-content-between pb-2">
  	              	<div class="pr-2 align-self-center">
  	              		<div class="font_size--medium font_weight--bold color_carbon text-nowrap">$ 1,705,000</div>  	              		
  	              	</div>
  	              	<div class="text-right">  	              		
  	              		<div class="label label--forsale mr-0">for sale</div>
  	              	</div>
  	              </div>
                  
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">2</span> bedrooms
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">2</span> bathroom
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">5,056</span> built Sqft.
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">20,000</span> lot Sqft.
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">3</span> Stories
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">2012 </span> yeat built
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">Has Private Pool </span>
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">72572799 </span> MLS#
                  </div>
                  <div class="card--listing__body__content__description_row">
                  		<div class="color_available">20 days at har.com</div>
                  </div>
                  <div class="card--listing__body__content__description_row">
                	 	<span class="font_weight--semi_bold color_carbon pr-1">Townhouse Condo</span>
                  </div>
                  <div class="clearfix"></div>
                  
                  <div class="card--listing__body__impovement schools">
                  	<div class="color_cement_dark">
                  		<span class="font_weight--semi_bold color_carbon">Zone / Assizned Schools</span><br>
                  		<a href="#">Settlers Way Elementary School</a><br>
                  		<a href="#">First Colony Middle School</a><br>
                  		<a href="#">Clements High School</a>
                  	</div>
                  </div>
                  
  	            </div>
              </div>
	          </div>
            <!-- /card--listing__body -->
          </div>
          <!-- /card--listing -->
		  

          
          <div class="pb-5"></div>
		  
		  <div class="row">
	        <div class="col col-12" style="margin-bottom: 0; padding-bottom: 0;">
	          <h4 tabindex="0">Highrises</h4>
	        </div>
	      </div>
		  
		  <!-- card--listing -->
          <div class="card card--listing card--listing--portrait card--listing--reduced">
              <!-- card--listing__body -->
	          <div class="card--listing__body">
              <div class="card--listing__body_wraper card--listing__body_wraper_small">

                <a href="#" class="card--listing__body__image_content ">
                  <div class="card--listing__body__image_content_image" style="background-image: url(https://content.harstatic.com/high_rise/lr/196_1.jpg);"></div>
                </a>
                <div class="card--listing__body__content">
                  <a class="text-decoration-none" href="#"><h4 class="mb-0" tabindex="0">St James</h4></a>
  	              <div class="color_slate_light pb-3">3331 D’amico<br>Houston, TX</div>
  	              <div class="card--listing__body__content__description_row_full">
  	              		<div class="row no-gutters">
  	              			<div class="col-4"><span class="font_weight--semi_bold color_carbon pr-1">7</span> floors</div>
  	              			<div class="col-4"><span class="font_weight--semi_bold color_carbon pr-1">7</span> units</div>
  	              			<div class="col-4"><span class="font_weight--semi_bold color_carbon pr-1">12</span> penth.</div>
  	              		</div>            	 	
                  </div>                
  	            </div>
              </div>
	          </div>
            <!-- /card--listing__body -->
          </div>
          <!-- /card--listing -->
          
          
          <div class="pb-5"></div>
          
          <!-- card--listing -->
          <div class="card card--listing card--listing--portrait card--listing--reduced">
              <!-- card--listing__body -->
	          <div class="card--listing__body">
              <div class="card--listing__body_wraper card--listing__body_wraper_small">

                <a href="#" class="card--listing__body__image_content ">
                  <div class="card--listing__body__image_content_image" style="background-image: url(https://content.harstatic.com/high_rise/lr/196_1.jpg);"></div>
                </a>
                <div class="card--listing__body__content">
                  <a class="text-decoration-none" href="#"><h4 class="mb-0" tabindex="0">St James</h4></a>
  	              <div class="color_slate_light pb-3">3331 D’amico<br>Houston, TX</div>
  	              <div class="card--listing__body__content__description_row_full">
  	              		<div class="row no-gutters">
  	              			<div class="col-4"><span class="font_weight--semi_bold color_carbon pr-1">7</span> floors</div>
  	              			<div class="col-4"><span class="font_weight--semi_bold color_carbon pr-1">7</span> units</div>
  	              			<div class="col-4"><span class="font_weight--semi_bold color_carbon pr-1">12</span> penth.</div>
  	              		</div>            	 	
                  </div>                
  	            </div>
              </div>
	          </div>
            <!-- /card--listing__body -->
          </div>
          <!-- /card--listing -->

        </div>
      </div>
      
     
      
      `,
    ];


    this.codeSnippets = [

`
------------------------------------------------------------
Landscape Large - List View
------------------------------------------------------------
 

`,
`

`,
`
[you can copy element by element expecter. we will add code here one final version as page is going too scrollable.]
`
    ];

  }

  render(){
    return (
      <TemplateDefault
        pageTitle="Listing Cards"
        activeParent="components"
        activeChild="listing_cards">

        <TemplateComponentBlock blockTitle="Landscape" elements={this.elements[0]} codeSnippets={this.codeSnippets[0]} />
        <TemplateComponentBlock blockTitle="Landscape Reduced" elements={this.elements[1]} codeSnippets={this.codeSnippets[1]} />
        <TemplateComponentBlock blockTitle="Portrait " elements={this.elements[2]} codeSnippets={this.codeSnippets[2]} />


      </TemplateDefault>
    )
  }

}
