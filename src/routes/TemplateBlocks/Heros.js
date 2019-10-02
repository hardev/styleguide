import React, {Component} from "react";
import TemplateExpanded from '../../components/TemplateExpanded';
import TemplateComponentBlock from '../../components/TemplateComponentBlock';

export default class Heros extends Component {

  constructor(props) {
    super(props);

    this.elements = [
      `<!-- hero_landing_page -->
      <section class="hero_landing_page">
        <h1 tabindex="0" class="mb-5">Header Goes Here</h1>

        <!-- radio-buttons -->
        <div role="radiogroup" class="horizontal_scrollable_items_container mb-3">
          <div role="radio" class="custom-control custom-radio custom-radio--large custom-control-inline">
            <input type="radio" id="example_radio_button_large_1" name="example_radio_button_large" class="custom-control-input" checked>
            <label class="custom-control-label" for="example_radio_button_large_1">Option 1</label>
          </div>
          <div role="radio" class="custom-control custom-radio custom-radio--large custom-control-inline">
            <input type="radio" id="example_radio_button_large_2" name="example_radio_button_large" class="custom-control-input">
            <label class="custom-control-label" for="example_radio_button_large_2">Option 2</label>
          </div>
          <div role="radio" class="custom-control custom-radio custom-radio--large custom-control-inline">
            <input type="radio" id="example_radio_button_large_3" name="example_radio_button_large" class="custom-control-input">
            <label class="custom-control-label" for="example_radio_button_large_3">Option 3</label>
          </div>
        </div>
        <!-- /radio-buttons -->

        <!-- search_input_medium -->
        <div class="input-group input-group--search_input_medium">
          <input type="text" class="form-control" placeholder="Search for something" aria-label="Search for something">
          <div class="input-group-append">
            <button class="btn btn--prominent" type="button"></button>
          </div>
        </div>
        <!-- /search_input_medium -->

        <!-- filterpill -->
        <div class="horizontal_scrollable_items_container">
          <button class="filterpill mr-2" aria-label="Filter by something">Some Filter</button>
          <button class="filterpill mr-2" aria-label="Filter by something">Some Filter</button>
          <button class="filterpill mr-2" aria-label="Filter by something">Some Filter</button>
          <button class="filterpill mr-2" aria-label="Filter by something">Some Filter</button>
        </div>
        <!-- /filterpill -->

      </section>
      <!-- /hero_landing_page -->`,
    ];


    this.codeSnippets = [
`<!-- hero_landing_page -->
<section class="hero_landing_page">
  <h1 tabindex="0" class="mb-5">Header Goes Here</h1>

  <!-- radio-buttons -->
  <div role="radiogroup" class="mb-3">
    <div role="radio" class="custom-control custom-radio custom-radio--large custom-control-inline">
      <input type="radio" id="example_radio_button_large_1" name="example_radio_button_large" class="custom-control-input" checked>
      <label class="custom-control-label" for="example_radio_button_large_1">Option 1</label>
    </div>
    <div role="radio" class="custom-control custom-radio custom-radio--large custom-control-inline">
      <input type="radio" id="example_radio_button_large_2" name="example_radio_button_large" class="custom-control-input">
      <label class="custom-control-label" for="example_radio_button_large_2">Option 2</label>
    </div>
    <div role="radio" class="custom-control custom-radio custom-radio--large custom-control-inline">
      <input type="radio" id="example_radio_button_large_3" name="example_radio_button_large" class="custom-control-input">
      <label class="custom-control-label" for="example_radio_button_large_3">Option 3</label>
    </div>
  </div>
  <!-- /radio-buttons -->

  <!-- search_input_medium -->
  <div class="input-group input-group--search_input_medium">
    <input type="text" class="form-control" placeholder="Search for something" aria-label="Search for something">
    <div class="input-group-append">
      <button class="btn btn--prominent" type="button"></button>
    </div>
  </div>
  <!-- /search_input_medium -->

  <!-- filterpill -->
  <div>
    <button class="filterpill mr-2" aria-label="Filter by something">Some Filter</button>
    <button class="filterpill mr-2" aria-label="Filter by something">Some Filter</button>
    <button class="filterpill mr-2" aria-label="Filter by something">Some Filter</button>
  </div>
  <!-- /filterpill -->

</section>
<!-- /hero_landing_page -->`,
    ];

  }

  render() {

    return (
      <TemplateExpanded
        pageTitle="Heros"
        activeParent="template_blocks"
        activeChild="heros">

        <TemplateComponentBlock hasContainer={false} blockTitle="Inner Page Hero" elements={this.elements[0]} codeSnippets={this.codeSnippets[0]} />

      </TemplateExpanded>
    )
  }

}
