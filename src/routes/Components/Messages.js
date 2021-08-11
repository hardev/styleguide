import React, {Component} from "react";
import TemplateDefault from '../../components/TemplateDefault';
import TemplateComponentBlock from '../../components/TemplateComponentBlock';

export default class Messages extends Component {

  constructor(props) {
    super(props);

    this.elements = [
      `<div class="row justify-content-center">
        <div class="col col-12 pt-3">          
          <div class="message message--primary">This is a primary alert</div>
          <div class="message message--secondary">This is a secondary alert</div>
          <div class="message message--success">This is a success alert</div>
          <div class="message message--danger message--withicon" style="background-image:url(https://content.harstatic.com/media/icons/icon-alert-danger_red.svg);">This is a danger alert</div>
          <div class="message message--warning message--withicon" style="background-image:url(https://content.harstatic.com/media/icons/icon-alert-warning_black.svg);">This is a warning alert</div>
          <div class="message message--info message--withicon" style="background-image:url(https://content.harstatic.com/media/icons/icon-alert-info_charchole.svg);">This is a info alert</div>
          <div class="message message--light">This is a light alert</div>
          <div class="message message--dark">This is a dark alert</div>
        </div>
        
       </div>       
       `,
    ];


    this.codeSnippets = [
`<div class="message message--primary">This is a primary alert</div>
<div class="message message--secondary">This is a secondary alert</div>
<div class="message message--success">This is a success alert</div>
<div class="message message--danger">This is a danger alert</div>
<div class="message message--warning">This is a warning alert</div>
<div class="message message--info">This is a info alert</div>
<div class="message message--light">This is a light alert</div>
<div class="message message--dark">This is a dark alert</div>`,			
];

  }

  render(){
    return (
      <TemplateDefault
        pageTitle="Messages"
        activeParent="components"
        activeChild="messages">

        <TemplateComponentBlock blockTitle="Alert Messages" elements={this.elements[0]} codeSnippets={this.codeSnippets[0]} />        
      </TemplateDefault>
    )
  }

}
