import React, {Component} from "react";
import TemplateDefault from '../../components/TemplateDefault';
import TemplateComponentBlock from '../../components/TemplateComponentBlock';

export default class Modal extends Component {

  constructor(props) {
    super(props);

    this.elements = [
      `<div class="row justify-content-center">
        <div class="col col-10 pt-4">          
          <button type="button" class="btn btn--primary btn--medium" data-toggle="modal" data-target="#exampleModalFullWidth">Open Modal</button>
          <div class="component_content__demo__description">Full-Width Modal</div>
          <div id="exampleModalFullWidth" class="modal fade modal--full-width" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenteredScrollableTitle" style="display: none;" aria-hidden="true">
			  <div class="modal-dialog modal-dialog-scrollable modal-xl" role="document">
			    <div class="modal-content">
			      <div class="modal-header">
			        <h5 tabindex="0" class="modal-title" id="exampleModalCenteredScrollableTitle">Modal title</h5>
			        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><img src="https://content.harstatic.com/media/icons/close_black.svg"></button>
			      </div>
			      <div class="modal-body text-left">
			        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
			        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
			        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
			        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
			        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
			      </div>
			      <div class="modal-footer text-center">
			        <button role="button" class="btn btn--primary btn--medium" aria-label="Apply">Apply</button>
			        <button role="button" class="btn btn--shapeless btn--medium" data-dismiss="modal" aria-label="Cancel">Cancel</button>			        
			      </div>
			    </div>
			  </div>
			</div>
        </div>`,

        `<div class="row justify-content-center">
        <div class="col col-10 pt-4">          
          <button type="button" class="btn btn--primary btn--medium" data-toggle="modal" data-target="#exampleModalMedium">Open Modal</button>
          <div class="component_content__demo__description">Medium Modal</div>
          <div id="exampleModalMedium" class="modal fade modal--medium" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenteredScrollableTitle" style="display: none;" aria-hidden="true">
			  <div class="modal-dialog modal-dialog-scrollable modal-lg  modal-dialog-centered" role="document">
			    <div class="modal-content">
			      <div class="modal-header">
			        <h5 tabindex="0" class="modal-title" id="exampleModalCenteredScrollableTitle">Modal title</h5>
			        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><img src="https://content.harstatic.com/media/icons/close_black.svg"></button>
			      </div>
			      <div class="modal-body text-left">
			        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
			        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
			        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
			        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
			        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
			      </div>
			      <div class="modal-footer text-center">			        
			        <button role="button" class="btn btn--primary btn--medium" aria-label="Apply">Apply</button>
			        <button role="button" class="btn btn--shapeless btn--medium" data-dismiss="modal" aria-label="Cancel">Cancel</button>
			      </div>
			    </div>
			  </div>
			</div>
        </div>`,

        `<div class="row justify-content-center">
        <div class="col col-10 pt-4">          
          <button type="button" class="btn btn--primary btn--medium" data-toggle="modal" data-target="#exampleModalSmall">Open Modal</button>
          <div class="component_content__demo__description">Small Modal</div>
          <div id="exampleModalSmall" class="modal fade modal--small" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenteredScrollableTitle" style="display: none;" aria-hidden="true">
			  <div class="modal-dialog modal-dialog-scrollable modal-sm modal-dialog-centered" role="document">
			    <div class="modal-content">
			      <div class="modal-header">
			        <h5 tabindex="0" class="modal-title" id="exampleModalCenteredScrollableTitle">Modal title</h5>
			        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><img src="https://content.harstatic.com/media/icons/close_black.svg"></button>
			      </div>
			      <div class="modal-body text-left">
			        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
			        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
			        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
			        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
			        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
			      </div>
			      <div class="modal-footer text-center">
			        <button role="button" class="btn btn--primary btn--medium" aria-label="Apply">Apply</button>
			        <button role="button" class="btn btn--shapeless btn--medium" data-dismiss="modal" aria-label="Cancel">Cancel</button>			        
			      </div>
			    </div>
			  </div>
			</div>
        </div>`,
        `<div class="row justify-content-center">
        <div class="col col-10 pt-4">          
          <button type="button" class="btn btn--primary btn--medium" data-toggle="modal" data-target="#exampleModalSmallWH">Open Modal Without Header</button>
          <div class="component_content__demo__description">Small Modal</div>
          <div id="exampleModalSmallWH" class="modal fade modal--small" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenteredScrollableTitle" style="display: none;" aria-hidden="true">
			  <div class="modal-dialog modal-dialog-scrollable modal-sm modal-dialog-centered" role="document">
			    <div class="modal-content">
			      <div class="p-3">
			        <button type="button" class="close" style="z-index:+1;" data-dismiss="modal" aria-label="Close"><img src="https://content.harstatic.com/media/icons/close_black.svg"></button>
			      </div>
			      <div class="modal-body text-left">
			        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
			        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
			        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
			        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
			        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
			      </div>
			      <div class="modal-footer text-center">
			        <button role="button" class="btn btn--primary btn--medium" aria-label="Apply">Apply</button>
			        <button role="button" class="btn btn--shapeless btn--medium" data-dismiss="modal" aria-label="Cancel">Cancel</button>			        
			      </div>
			    </div>
			  </div>
			</div>
        </div>`,
    ];


    this.codeSnippets = [
`<div id="exampleModalFullWidth" class="modal fade modal--full-width" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenteredScrollableTitle" style="display: none;" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable modal-xl" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 tabindex="0" class="modal-title" id="exampleModalCenteredScrollableTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><img src="https://content.harstatic.com/media/icons/icon-close-auxiliary.svg"></button>
      </div>
      <div class="modal-body">
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
      </div>
      <div class="modal-footer text-center">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>`,

`<div id="exampleModalMedium" class="modal fade modal--medium" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenteredScrollableTitle" style="display: none;" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable modal-lg modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 tabindex="0" class="modal-title" id="exampleModalCenteredScrollableTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><img src="https://content.harstatic.com/media/icons/icon-close-auxiliary.svg"></button>
      </div>
      <div class="modal-body text-left">
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
      </div>
      <div class="modal-footer text-center">
        <button role="button" class="btn btn--shapeless btn--medium" data-dismiss="modal" aria-label="Cancel">Cancel</button>
        <button role="button" class="btn btn--primary btn--medium" aria-label="Apply">Apply</button>
      </div>
    </div>
  </div>
</div>`,

`<div id="exampleModalSmall" class="modal fade modal--small" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenteredScrollableTitle" style="display: none;" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable modal-sm modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 tabindex="0" class="modal-title" id="exampleModalCenteredScrollableTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><img src="https://content.harstatic.com/media/icons/icon-close-auxiliary.svg"></button>
      </div>
      <div class="modal-body text-left">
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
      </div>
      <div class="modal-footer text-center">
        <button role="button" class="btn btn--shapeless btn--medium" data-dismiss="modal" aria-label="Cancel">Cancel</button>
        <button role="button" class="btn btn--primary btn--medium" aria-label="Apply">Apply</button>
      </div>
    </div>
  </div>
</div>
`			
  ];

  }

  render(){
    return (
      <TemplateDefault
        pageTitle="Modal"
        activeParent="components"
        activeChild="modal">

        <TemplateComponentBlock blockTitle="Full-Width Modal" elements={this.elements[0]} codeSnippets={this.codeSnippets[0]} />
        <TemplateComponentBlock blockTitle="Medium Modal" elements={this.elements[1]} codeSnippets={this.codeSnippets[1]} />
        <TemplateComponentBlock blockTitle="Small Modal" elements={this.elements[2]} codeSnippets={this.codeSnippets[2]} />
        <TemplateComponentBlock blockTitle="Without Header" elements={this.elements[3]} codeSnippets={this.codeSnippets[3]} />

      </TemplateDefault>
    )
  }

}
