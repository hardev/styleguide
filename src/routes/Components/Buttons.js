import React, {Component} from "react";
import TemplateDefault from '../../components/TemplateDefault';
import TemplateComponentBlock from '../../components/TemplateComponentBlock';

export default class Buttons extends Component {

  constructor(props) {
    super(props);

    this.elements = [
      `<div class="row">
        <div class="col col-sm-3 col-6">
          <button role="button" class="btn btn--primary btn--large">Button</button>
          <div class="component_content__demo__description">Large Button</div>
        </div>

        <div class="col col-sm-3 col-6">
          <button role="button" class="btn btn--primary btn--medium">Button</button>
          <div class="component_content__demo__description">Medium Button</div>
        </div>

        <div class="col col-sm-3 col-6">
          <button role="button" class="btn btn--primary btn--small">Button</button>
          <div class="component_content__demo__description">Small Button</div>
        </div>

        <div class="col col-sm-3 col-6">
          <button role="button" class="btn btn--primary btn--small-extra">Button</button>
          <div class="component_content__demo__description">Extra Small Button</div>
        </div>

        <div class="clear_both"></div>
      </div>`,

      `<div class="row">
        <div class="col col-sm-3 col-6">
          <button role="button" class="btn btn--primary btn--medium">Button</button>
          <div class="component_content__demo__description">Primary Button</div>
        </div>

        <div class="col col-sm-3 col-6">
          <button role="button" class="btn btn--prominent btn--medium">Button</button>
          <div class="component_content__demo__description">Prominent Button</div>
        </div>

        <div class="col col-sm-3 col-6">
          <button role="button" class="btn btn--ordinary btn--medium">Button</button>
          <div class="component_content__demo__description">Ordinary Button</div>
        </div>

        <div class="col col-sm-3 col-6">
          <button role="button" class="btn btn--shapeless btn--medium">Button</button>
          <div class="component_content__demo__description">Shapeless Button</div>
        </div>

        <div class="clear_both"></div>
      </div>

      <hr>

      <div class="row">
        <div class="col col-sm-3 col-6">
          <button role="button" class="btn btn--primary btn--medium" disabled>Button</button>
          <div class="component_content__demo__description">Disabled Button</div>
        </div>

        <div class="col col--dark col-sm-3 col-6">
          <button role="button" class="btn btn--search btn--medium" aria-label="Search"></button>
          <div class="component_content__demo__description">Search Button</div>
        </div>

        <div class="clear_both"></div>
      </div>`,

      `<div class="row">
        <div class="col col-sm-3 col-6">
          <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--placeholder">Button</button>
          <div class="component_content__demo__description">Button with Icon</div>
        </div>

        <div class="col col-sm-3 col-6">
          <button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--placeholder" aria-label="Button"></button>
          <div class="component_content__demo__description">Button with Lone Icon</div>
        </div>

        <div class="col col-sm-3 col-6">

          <div class="dropdown">
            <button class="btn btn--ordinary btn--medium dropdown-toggle" type="button" id="buttonWithOptions" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Button
            </button>
            <div class="dropdown-menu depth--standed_out" aria-labelledby="buttonWithOptions">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </div>

          <div class="component_content__demo__description">Button with Options</div>
        </div>

        <div class="col col-sm-3 col-6">

          <div class="dropdown">
            <button class="btn btn--ordinary btn--medium dropdown-toggle btn--icon btn--icon--lone btn--icon--placeholder" type="button" id="buttonWithIconAndOptions" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Button
            </button>
            <div class="dropdown-menu depth depth--standed_out" aria-labelledby="buttonWithIconAndOptions">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </div>

          <div class="component_content__demo__description">Button with Icon and Options</div>
        </div>

        <div class="clear_both"></div>
      </div>`
    ];


    this.codeSnippets = [

`<button role="button" class="btn btn--primary btn--large">Button</button>
<button role="button" class="btn btn--primary btn--medium">Button</button>
<button role="button" class="btn btn--primary btn--small">Button</button>
<button role="button" class="btn btn--primary btn--small-extra">Button</button>`,

`<button role="button" class="btn btn--primary btn--medium">Button</button>
<button role="button" class="btn btn--prominent btn--medium">Button</button>
<button role="button" class="btn btn--ordinary btn--medium">Button</button>
<button role="button" class="btn btn--shapeless btn--medium">Button</button>
<button role="button" class="btn btn--primary btn--medium" disabled>Button</button>
<button role="button" class="btn btn--search btn--medium" aria-label="Search"></button>`,

`<!-- Button with Icon -->
<button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--placeholder">Button</button>

<!-- Button with Lone Icon -->
<button role="button" class="btn btn--ordinary btn--medium btn--icon btn--icon--lone btn--icon--placeholder" aria-label="Button"></button>

<!-- Button with Options -->
<div class="dropdown">
  <button class="btn btn--ordinary btn--medium dropdown-toggle" type="button" id="buttonWithOptions" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Button
  </button>
  <div class="dropdown-menu depth--standed_out" aria-labelledby="buttonWithOptions">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>

<!-- Button with Icon and Options -->
<div class="dropdown">
  <button class="btn btn--ordinary btn--medium dropdown-toggle btn--icon btn--icon--lone btn--icon--placeholder" type="button" id="buttonWithIconAndOptions" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Button
  </button>
  <div class="dropdown-menu depth depth--standed_out" aria-labelledby="buttonWithIconAndOptions">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>`
    ];

  }

  render(){
    return (
      <TemplateDefault
        pageTitle="Buttons"
        activeParent="components"
        activeChild="buttons">

        <TemplateComponentBlock blockTitle="Sizes" elements={this.elements[0]} codeSnippets={this.codeSnippets[0]} />
        <TemplateComponentBlock blockTitle="Styles" elements={this.elements[1]} codeSnippets={this.codeSnippets[1]} />
        <TemplateComponentBlock blockTitle="Variations" elements={this.elements[2]} codeSnippets={this.codeSnippets[2]} />

      </TemplateDefault>
    )
  }

}
