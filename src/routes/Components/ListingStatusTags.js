import React, {Component} from "react";
import TemplateDefault from '../../components/TemplateDefault';
import TemplateComponentBlock from '../../components/TemplateComponentBlock';
import $ from 'jquery';

export default class ListingStatusTags extends Component {

  componentDidMount() {
    $('[data-toggle="tooltip"]').tooltip();
  }

  constructor(props) {
    super(props);

    this.elements = [
      `<div class="row">
        <div class="col col-sm-4 col-6">
          <div class="tag_status tag_status--available">for sale</div>
          <div class="component_content__demo__description">For sale / rent listing</div>
        </div>

        <div class="col col-sm-4 col-6">
          <div class="tag_status tag_status--sold">sold</div>
          <div class="component_content__demo__description">Sold listing</div>
        </div>

        <div class="col col-sm-4 col-6">
          <div class="tag_status tag_status--not_for_sale">not for sale</div>
          <div class="component_content__demo__description">Not for sale listing</div>
        </div>

        <div class="clear_both"></div>
      </div>

      <hr>

      <div class="row">
        <div class="col col-sm-4 col-6">
          <div class="tag_status tag_status--pending">pending</div>
          <div class="component_content__demo__description">Pending listing</div>
        </div>

        <div class="col col-sm-4 col-6">
          <div class="tag_status tag_status--pending tag_status--info" data-toggle="tooltip" data-placement="top" title="Option pending">pending</div>
          <div class="component_content__demo__description">Option pending</div>
        </div>

        <div class="col col-sm-4 col-6">
          <div class="tag_status tag_status--pending tag_status--info" data-toggle="tooltip" data-placement="top" title="Pending continue to show">pending</div>
          <div class="component_content__demo__description">Pending continue to show</div>
        </div>

        <div class="clear_both"></div>
      </div>`,
    ];


    this.codeSnippets = [

`<div class="tag_status tag_status--available">for sale</div>

<div class="tag_status tag_status--sold">sold</div>

<div class="tag_status tag_status--not_for_sale">not for sale</div>

<div class="tag_status tag_status--pending">pending</div>

<div class="tag_status tag_status--pending tag_status--info"
  data-toggle="tooltip" data-placement="top" title="Option pending">
  pending
</div>

<div class="tag_status tag_status--pending tag_status--info"
  data-toggle="tooltip" data-placement="top" title="Pending continue to show">
  pending
</div>`,

    ];

  }

  render(){
    return (
      <TemplateDefault
        pageTitle="Listing Status Tags"
        activeParent="components"
        activeChild="listing_status_tags">

        <TemplateComponentBlock blockTitle="Variations" elements={this.elements[0]} codeSnippets={this.codeSnippets[0]} />

      </TemplateDefault>
    )
  }

}
