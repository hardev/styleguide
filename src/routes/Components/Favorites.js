import React, {Component} from "react";
import TemplateDefault from '../../components/TemplateDefault';
import TemplateComponentBlock from '../../components/TemplateComponentBlock';

export default class Favorites extends Component {

  constructor(props) {
    super(props);

    this.elements = [
      `<div class="row">
        	<div class="col col-md-7 col-12">
        		<a href="#" class="card--favorites">
        			<div class="card--favorites__img" style="background-image:url(https://photos.harstatic.com/188106006/lr/img-1.jpeg?ts=2020-08-04T09:30:40.867);"></div>
        			<div class="card--favorites__content">
        				<h4 tabindex="0">Barlett Street #4 Houston TX 77098</h4>
        				<div class="card--favorites__content_info"><img class="mr-1" style="height:11px;" src="https://content.harstatic.com/media/icons/icon-favorite-folder_auxilary.svg"> Wonderful houses, For my family!</div>	
        			</div>
        		</a>
        		
        		<a href="#" class="card--favorites">
        			<div class="card--favorites__img" style="background-image:url(https://photos.harstatic.com/185537603/lr/img-1.jpeg?ts=2020-05-19T14:08:18.347);"></div>
        			<div class="card--favorites__content">
        				<h4 tabindex="0">915 Franklin Street Boulevart Street Boulevart 9F, Houston</h4>
        				<div class="card--favorites__content_info"><img class="mr-1" style="height:11px;" src="https://content.harstatic.com/media/icons/icon-favorite-folder_auxilary.svg"> For my family!</div>	
        			</div>
        		</a>
        		
        		<a href="#" class="card--favorites">
        			<div class="card--favorites__img" style="background-image:url(https://photos.harstatic.com/188106006/lr/img-2.jpeg?ts=2020-08-04T09:30:40.867);"></div>
        			<div class="card--favorites__content">
        				<h4 tabindex="0">Barlett Street #4 Houston TX 77098</h4>
        				<div class="card--favorites__content_info"><img class="mr-1" style="height:11px;" src="https://content.harstatic.com/media/icons/icon-favorite-folder_auxilary.svg"> Wonderful houses, For my family!</div>	
        				<div class="fav_container">
							<div class="fav_container__inner">I need that garden my wife will love it, and I’ll find some peace in my life. I already see ourself living there.</div>
						</div>
        			</div>
        		</a>
        		
        		<a href="#" class="card--favorites">
        			<div class="card--favorites__img" style="background-image:url(https://photos.harstatic.com/188106006/lr/img-3.jpeg?ts=2020-08-04T09:30:40.867);"></div>
        			<div class="card--favorites__content">
        				<h4 tabindex="0">Barlett Street #4 Houston TX 77098</h4>
        				<div class="card--favorites__content_info"><img class="mr-1" src="https://content.harstatic.com/media/icons/icons-heart-mini.svg"> Wonderful houses, For my family!</div>	
        			</div>
        		</a>
        		
				<div class="mb-3 text-left">	        		
	        		<div class="fav_container">
						<textarea class="form-control" style="resize:none;" rows="2">I need that garden… my wife will love it, and I’ll find some peace in my life. I already see ourself living there.</textarea>
					</div>
					<a class="color_slate font_size--small_extra" style="opacity:0.56;" href="#"><img src="https://content.harstatic.com/media/icons/icon-erase-note.svg" style="width:11px;"> Erase note</a>
				</div>
				
				<div class="mb-3 text-left">	        		
	        		<div class="fav_container">
	        			<a class="fav_container--lock" href="#"><img src="https://content.harstatic.com/media/icons/Lock.svg"></a>
						<textarea class="form-control" style="resize:none;" rows="2">I need that garden… my wife will love it, and I’ll find some peace in my life. I already see ourself living there.</textarea>
					</div>
					<a class="color_slate font_size--small_extra" style="opacity:0.56;" href="#"><img src="https://content.harstatic.com/media/icons/icon-erase-note.svg" style="width:11px;"> Erase note</a>
				</div>
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
    ];


    this.codeSnippets = [
``,
`<div class="alertbox alertbox--warning"><span class="font_weight--bold">Warning:</span> Answers provided are just opinions and should not be accepted as advice.</div>
`,			
];

  }

  render(){
    return (
      <TemplateDefault
        pageTitle="Favorites"
        activeParent="components"
        activeChild="favorites">

        <TemplateComponentBlock blockTitle="Favorites Cards" elements={this.elements[0]} codeSnippets={this.codeSnippets[0]} />
        <TemplateComponentBlock blockTitle="Alert Boxes" elements={this.elements[1]} codeSnippets={this.codeSnippets[1]} />
        <TemplateComponentBlock blockTitle="Tabuler Data" elements={this.elements[2]} codeSnippets={this.codeSnippets[2]} />
        
      </TemplateDefault>
    )
  }

}
