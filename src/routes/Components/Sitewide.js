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
       `<div class="p-md-5 p-3">
        	<div class="" style="max-width:525px;">
        		<a class="advisory_item" href="#" style="background-image: url(https://pics.harstatic.com/agent/680946.jpg);filter: grayscale(1);" data-toggle="tooltip" data-placement="top" title="Elyssin Corona"></a>
        		<a class="advisory_item" href="#" style="background-image: url(https://pics.harstatic.com/agent/631098.jpg);filter: grayscale(1);" data-toggle="tooltip" data-placement="top" title="Elyssin Corona"></a>
        		<a class="advisory_item" href="#" style="background-image: url(https://pics.harstatic.com/agent/694080.jpg);filter: grayscale(1);" data-toggle="tooltip" data-placement="top" title="Elyssin Corona"></a>
        		<a class="advisory_item" href="#" style="background-image: url(https://pics.harstatic.com/agent/199279.jpg);filter: grayscale(1);" data-toggle="tooltip" data-placement="top" title="Elyssin Corona"></a>
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
        		<blockquote class="qoutetion">
        			<div class="qoutetion__text">        				
						<span>The greatest compliment you can give me is a referral The greatest compliment you can give me is a referral!<img class="qoutetion__text_endqoute" src="https://content.harstatic.com/media/icons/quote-end.svg"><span>
					</div>
					<a class="qoutetion__readmore" href="">read more</a>
        		</blockquote>
        		
        		<br><br><br>
        		
        		<blockquote class="qoutetion qoutetion__large">
        			<div class="qoutetion__large__text">        				
						<span>The greatest compliment you can give me is a referral The greatest compliment you can give me is a referral!<span>
					</div>
        		</blockquote>
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
       </div>`
       ,`
       <div class="row pl-5 pr-5">
        	<div class="col col-4">
        		<a href="#" class="map_pointer map_pointer__agent"><div class="map_pointer__agent__agentpic" style="background-image:url('https://pics.harstatic.com/agent/720353.jpg?ts=2020-03-04T21:54:005525');"></div></a>
				<div class="component_content__demo__description text-left">Map Agents</div>
        	</div>
        	<div class="col col-4">
        		<a href="#" class="map_pointer map_pointer__agents"><div class="map_pointer__agents__inner">8</div></a>

				<div class="component_content__demo__description text-left">Multiple agents</div>
        	</div>
       </div>`,
       
        `
       <div class="row">
        	<div class="col col-12">
        		<button type="button" class="btn btn--ordinary video-btn" data-toggle="modal" data-src="https://www.youtube.com/embed/Jfrjeg26Cwk" data-target="#VideoPopup">Play Video 1 - autoplay</button>	
				<button type="button" class="btn btn--ordinary video-btn" data-toggle="modal" data-src="https://www.youtube.com/embed/IP7uGKgJL8U" data-target="#VideoPopup">Play Video 2</button>
					
				<div class="modal fade modal--medium modal--video" id="VideoPopup" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				  <div class="modal-dialog modal-dialog-centered" role="document">
				    <div class="modal-content">
				      <div class="modal-body">				
				       <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>        
				        <!-- 16:9 aspect ratio -->
						<div class="embed-responsive embed-responsive-16by9">
						  <iframe class="embed-responsive-item" src="" id="VideoIframeContainer"  allowscriptaccess="always" allow="autoplay"></iframe>
						</div>
				      </div>				
				    </div>
				  </div>
				</div>
				
				<script>
				$(document).on('ready', function() {
					// Gets the video src from the data-src on each button					
					var $videoSrc;  
					$('.video-btn').click(function() {
					    $videoSrc = $(this).data( "src" );
					});
					console.log($videoSrc);
					// when the modal is opened autoplay it  
					$('#VideoPopup').on('shown.bs.modal', function (e) {					    
					// set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
					$("#VideoIframeContainer").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
					})
					// stop playing the youtube video when I close the modal
					$('#VideoPopup').on('hide.bs.modal', function (e) {
					    // a poor man's stop video
					    $("#VideoIframeContainer").attr('src',$videoSrc); 
					})
   				</script>
   				
				<div class="component_content__demo__description">Video Popup</div>
        	</div>
       </div>`,
        `
       <div class="row">
        	<div class="col col-12">
        		<div class="scroll">
	        		<div class="row flex-row flex-nowrap pt-1 pb-3 small-gutters scroll--horizental">
	        			<div class="col-auto">
	        				 <select class="custom-select custom-select__rounded custom-select_medium">
				    		    <option selected>Schools</option>
				    		    <option value="1">Elementary School</option>
				    		    <option value="2">Middle School</option>
				    		    <option value="3">High School</option>
				    		</select>
						</div>
						
						<div class="col-auto">
	        				 <select class="custom-select custom-select__rounded custom-select_medium">
				    		    <option selected>Nearby Places</option>
				    		    <option value="1">Restaurants</option>
				    		    <option value="2">Gas Stations</option>
				    		    <option value="3">Groceries</option>
				    		    <option value="3">Pharmacies</option>
				    		    <option value="3">ATMs</option>
								<option value="3">Convenience stores</option>
								<option value="3">Post offices</option>
								<option value="3">Florists</option>
								<option value="3">Libraries</option>
								<option value="3">Car wash</option>
								<option value="3">Copy shops</option>
								<option value="3">Parking</option>
								<option value="3">Hospitals</option>
				    		</select>
						</div>
						
						<div class="col-auto">
	                    	<a class="btn btn--ordinary d-inline-block" target="_blank" href="https://www.bing.com/maps/default.aspx?cp=29.721845~-95.42681&amp;style=b&amp;dir=0&amp;sp=Point.29.721845_-95.42681_">Bird's Eye View</a>
						</div>
						
						<div class="col-auto ml-auto">
	        				 <select class="custom-select custom-select__rounded custom-select_medium">
				    		    <option selected>Map View</option>
				    		    <option value="1">Sattlite View</option>
				    		    <option value="2">Hybrid View</option>
				    		</select>
						</div>
						
					</div>
				</div>
				<div class="component_content__demo__description">Video Popup</div>
        	</div>
       </div>`,`
       <div class="row">
        	<div class="col col-12">
        		<div class="breadcrumbs">
	        		<a href="#">Home</a>
					<a href="#">Market Area Videos</a>
					<a href="#">1960/Cypress</a>
					<a href="#">Video</a>
				</div>
				<div class="component_content__demo__description">Video Popup</div>
        	</div>
       </div>`,
       `
       <div class="row">
        	<div class="col col-12">
        		<div id="accordion" class="accordion accordion__bordered">
	        
			        <!-- main item -->
			        <div class="accordion--faqs overflow-hidden">
			            <a href="javascript:void(0);" class="accordion--faqs_header collapsed" data-toggle="collapse" data-target="#collapse1" aria-expanded="true" aria-controls="collapse1">What services are included in MLS Standard Services?</a>
			            
			            <div id="collapse1" class="collapse accordion--faqs_body" aria-labelledby="collapse1" data-parent="#collapse1">
			                <div class="card-body p-0">
				                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur erat in elit malesuada, nec volutpat nunc mattis. In gravida tortor nunc. Phasellus dictum in 							neque vitae ultricies.
			
								Etiam ac tellus facilisis, dignissim dolor sed, gravida nisi. Duis euismod feugiat lectus sit amet viverra. Maecenas pellentesque sem sed magna elementum pellentesque. Cras 							feugiat enim mi, a luctus metus dapibus in.
			                </div>
			            </div>
			        </div>
			        <!-- main item ended -->
					
					<!-- main item -->
			        <div class="accordion--faqs overflow-hidden">
			            <a href="javascript:void(0);" class="accordion--faqs_header collapsed" data-toggle="collapse" data-target="#collapse2" aria-expanded="true" aria-controls="collapse2">How much does MLS Standard services cost?</a>
			            
			            <div id="collapse2" class="collapse accordion--faqs_body" aria-labelledby="collapse2" data-parent="#collapse2">
			                <div class="card-body p-0">
				                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur erat in elit malesuada, nec volutpat nunc mattis. In gravida tortor nunc. Phasellus dictum in 							neque vitae ultricies.
			
								Etiam ac tellus facilisis, dignissim dolor sed, gravida nisi. Duis euismod feugiat lectus sit amet viverra. Maecenas pellentesque sem sed magna elementum pellentesque. Cras 							feugiat enim mi, a luctus metus dapibus in.
			                </div>
			            </div>
			        </div>
			        <!-- main item ended -->
			        
			        <!-- main item -->
			        <div class="accordion--faqs overflow-hidden">
			            <a href="javascript:void(0);" class="accordion--faqs_header collapsed" data-toggle="collapse" data-target="#collapse3" aria-expanded="true" aria-controls="collapse3">What services are included in MLS Platinum Services?</a>
			            
			            <div id="collapse3" class="collapse accordion--faqs_body" aria-labelledby="collapse3" data-parent="#collapse3">
			                <div class="card-body p-0">
				                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur erat in elit malesuada, nec volutpat nunc mattis. In gravida tortor nunc. Phasellus dictum in 							neque vitae ultricies.
			
								Etiam ac tellus facilisis, dignissim dolor sed, gravida nisi. Duis euismod feugiat lectus sit amet viverra. Maecenas pellentesque sem sed magna elementum pellentesque. Cras 							feugiat enim mi, a luctus metus dapibus in.
			                </div>
			            </div>
			        </div>
			        <!-- main item ended -->
			        
		        </div><!--  id="accordion" -->
        	</div>
       </div>`,
       `
       <div class="row mb-5">
        	<div class="col col-12">
        		<div class="mapprop_popover">
        			<img class="mapprop_popover__img" src="https://photos.harstatic.com/205272854/hr/img-1.jpeg?ts=2022-03-06T17:09:09.930">
        			<div class="mapprop_popover__details">
	        			<div class="row pb-2">
	        				<div class="col mapprop_popover__details__price">$1,875,000</div>
	        				<div class="col-auto"><div class="label label--forsale">Active</div></div>        				
	        			</div>
	        			<div class="mapprop_popover__details__desc">
	        				3766 Elmora Street<br>
							Southside Place,TX 77005
						</div>
						<a class="btn btn--ordinary" href="#">View details</a>
					</div>
        		</div>
        	</div>
       </div>
       
       
       <div class="row">
        	<div class="col col-12">
        		<div class="mapprop_popover__small">
        			<img class="mapprop_popover__small__img" src="https://photos.harstatic.com/205272854/hr/img-1.jpeg?ts=2022-03-06T17:09:09.930">
        			<div class="mapprop_popover__small__details">
	        			<div class="row pb-2">
	        				<div class="col mapprop_popover__small__details__price">$1,875,000</div>
	        				<div class="col-auto"><div class="label label--forsale">Active</div></div>        				
	        			</div>
	        			<div class="mapprop_popover__small__details__desc">
							<ul>
								<li>6 beds</li>
								<li>1 full &amp; 4 half baths</li>
								<li>3 stories</li>
								<li>8,741 built sqft</li>
								<li>1986 year built</li>
							</ul>
						</div>
						<a class="mapprop_popover__small__viewmore" href="#">View details</a>
					</div>
        		</div>
        	</div>
       </div>
       
       
       
       
       <div class="row">
        	<div class="col col-12">
       			<div class="date_card date_card__small dept color_auxiliary border_radius--default text-center position-relative overflow-hidden">
					<div class="date_card_top">Thursday</div>
					<div class="date_card_date">01</div>
					<div class="date_card_bottom">Jan</div>							
				</div>
        	</div>
        	
        	<div class="col col-12">
       			<div class="date_card date_card__large dept color_auxiliary border_radius--default text-center position-relative overflow-hidden selected">
					<div class="date_card_top">Friday</div>
					<div class="date_card_date">01</div>
					<div class="date_card_bottom">Tomorrow</div>							
				</div>
				
				<div class="date_card date_card__large dept color_auxiliary border_radius--default text-center position-relative overflow-hidden">
					<div class="date_card_top">Saturday</div>
					<div class="date_card_date">02</div>
					<div class="date_card_bottom">Tomorrow</div>							
				</div>
        	</div>
       </div>
       
       
       
       `,
       `
       <div class="section_roundedbg mb-5 mt-5 p-5">
		   
		    <div class="text-center">
		    	<div class="tagline_text mb-4 pt-4">Mobile Apps</div>
		        <h2 tabindex="0" class="h2 h2--strong mb-4 text-center">Expand your search<br>experience on your phone</h2>
		    </div>
		   
		</div>
       `
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
`
3
`,	
`
4
`,
`
5
`,
`
6
`,
`
7
`,
`
8
`,
`
<button type="button" class="btn btn--ordinary video-btn" data-toggle="modal" data-src="https://www.youtube.com/embed/Jfrjeg26Cwk" data-target="#VideoPopup">Play Video 1 - autoplay</button>	
<button type="button" class="btn btn--ordinary video-btn" data-toggle="modal" data-src="https://www.youtube.com/embed/IP7uGKgJL8U" data-target="#VideoPopup">Play Video 2</button>
	
<div class="modal fade modal--medium modal--video" id="VideoPopup" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-body">				
       <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>        
        <!-- 16:9 aspect ratio -->
		<div class="embed-responsive embed-responsive-16by9">
		  <iframe class="embed-responsive-item" src="" id="VideoIframeContainer"  allowscriptaccess="always" allow="autoplay"></iframe>
		</div>
      </div>				
    </div>
  </div>
</div>

<script>
$(document).on('ready', function() {
	// Gets the video src from the data-src on each button					
	var $videoSrc;  
	$('.video-btn').click(function() {
	    $videoSrc = $(this).data( "src" );
	});
	console.log($videoSrc);
	// when the modal is opened autoplay it  
	$('#VideoPopup').on('shown.bs.modal', function (e) {					    
	// set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
	$("#VideoIframeContainer").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
	})
	// stop playing the youtube video when I close the modal
	$('#VideoPopup').on('hide.bs.modal', function (e) {
	    // a poor man's stop video
	    $("#VideoIframeContainer").attr('src',$videoSrc); 
	})
});
</script>
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
        <TemplateComponentBlock blockTitle="Advisory Group" elements={this.elements[1]} codeSnippets={this.codeSnippets[1]} />
        <TemplateComponentBlock blockTitle="Alert Boxes" elements={this.elements[2]} codeSnippets={this.codeSnippets[2]} />
        <TemplateComponentBlock blockTitle="Tabuler Data" elements={this.elements[3]} codeSnippets={this.codeSnippets[3]} />
        <TemplateComponentBlock blockTitle="Disclaimer" elements={this.elements[4]} codeSnippets={this.codeSnippets[4]} />
        <TemplateComponentBlock blockTitle="Qoutetion" elements={this.elements[5]} codeSnippets={this.codeSnippets[5]} />
        <TemplateComponentBlock blockTitle="Flags and Tags" elements={this.elements[6]} codeSnippets={this.codeSnippets[6]} />
        <TemplateComponentBlock blockTitle="Map Pointers" elements={this.elements[7]} codeSnippets={this.codeSnippets[7]} />
        <TemplateComponentBlock blockTitle="Open Youtube video in Popup" elements={this.elements[8]} codeSnippets={this.codeSnippets[8]} />
        <TemplateComponentBlock blockTitle="Horizental Scrolbar" elements={this.elements[9]} codeSnippets={this.codeSnippets[9]} />
        <TemplateComponentBlock blockTitle="Breadcrumbs" elements={this.elements[10]} codeSnippets={this.codeSnippets[10]} />
        <TemplateComponentBlock blockTitle="Accordian" elements={this.elements[11]} codeSnippets={this.codeSnippets[11]} />
        <TemplateComponentBlock blockTitle="Map Popover" elements={this.elements[12]} codeSnippets={this.codeSnippets[12]} />
        <TemplateComponentBlock blockTitle="BG Rounded box" elements={this.elements[13]} codeSnippets={this.codeSnippets[13]} />
        
        
      </TemplateDefault>
    )
  }

}
