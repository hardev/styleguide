import React, {Component} from "react";
import TemplateDefault from '../../components/TemplateDefault';
import TemplateComponentBlock from '../../components/TemplateComponentBlock';
import {CopyToClipboard} from 'react-copy-to-clipboard';

export default class ColorScheme extends Component {

  constructor(props) {
    super(props);

    this.elements_brand_color_1 = [
      ['Extra Light HAR Blue', '#DAE1F8', 'bg_color_har_blue_light_extra color_har_blue_dark'],
      ['Light HAR Blue', '#94AAEB', 'bg_color_har_blue_light color_har_blue_dark'],
      ['HAR Blue', '#0738CD', 'bg_color_har_blue color_snow_white'],
      ['Dark HAR Blue', '#042280', 'bg_color_har_blue_dark color_snow_white'],
    ];

    this.colors = [
      {
        name: "Brand colors",
        colors: [

          [
            {
              name: "Extra Light HAR Blue",
              code: "#DAE1F8",
              class: "bg_color_har_blue_light_extra color_har_blue_dark"
            },
            {
              name: "Light HAR Blue",
              code: "#94AAEB",
              class: "bg_color_har_blue_light color_har_blue_dark"
            },
            {
              name: "HAR Blue",
              code: "#0738CD",
              class: "bg_color_har_blue color_snow_white"
            },
            {
              name: "Dark HAR Blue",
              code: "#042280",
              class: "bg_color_har_blue_dark color_snow_white"
            }
          ],

          [
            {
              name: "XXX",
              code: "#000",
              class: "bg_color_har_blue_light_extra color_har_blue_dark"
            },
            {
              name: "YYY",
              code: "#000",
              class: "bg_color_har_blue_light color_har_blue_dark"
            }
          ]

        ]
      },
    ]

    this.copyCode = this.copyCode.bind(this);
  }

  copyCode(e) {
    let code = e.currentTarget.querySelector("span").textContent;
    alert("Hex color code copied clipboard: " + code);
  }

  render() {


    const displayColorGroups = function(colors) {
      let result = [];

      colors.map((colorGroup, i) => {
        result.push(<div>{colorGroup.name}</div>);
      })

      return result;
    }


    const colorGroups = this.colors.map((colorGroup, i) =>

      <article style={{marginBottom: "56px"}}>
        <h2 tabIndex="0" className="h2">{colorGroup.name}</h2>

        {
          this.aaa = colorGroup.colors.map((aaaitem, aaakey) => {
            for (var i = 0; i < aaaitem.length; i++) {
              // aaaitem[i]
            }
          })
        }
      </article>
    );


    return (
      <TemplateDefault
        pageTitle="Color Scheme"
        activeParent="design"
        activeChild="color_scheme">

        <hr />

        { displayColorGroups(this.colors) }

        <hr />

        { colorGroups }


        <hr style={{marginBottom: "1000px"}} />



        <article style={{marginBottom: "56px"}}>
          <h2 tabIndex="0" className="h2">Brand colors</h2>

          <div className="row">

            <div class="col col-sm-3 col-6">
              <div className="design_color_scheme">
                <ul>
                  {this.elements_brand_color_1.map((value, index) => {
                    return <CopyToClipboard text={"#DAE1F8"} onCopy={() => { /* Do stuff here */ }}>
                      <li onClick={this.copyCode} className={`design_color_scheme__item ${value[2]}`}>
                        {value[0]}<br />
                        <span>{value[1]}</span>
                      </li>
                    </CopyToClipboard>
                  })}
                </ul>
              </div>
            </div>

            <div class="col col-sm-3 col-6">
            <div className="design_color_scheme">
              <ul>
                <li onClick={this.copyCode} className="design_color_scheme__item bg_color_har_pink_light_extra color_har_pink_dark">
                  Extra Light HAR Pink<br />
                  <span>#FFE4EB</span>
                </li>
                <li onClick={this.copyCode} className="design_color_scheme__item bg_color_har_pink_light color_har_pink_dark">
                  Light HAR Pink<br />
                  <span>#FFA4BB</span>
                </li>
                <li onClick={this.copyCode} className="design_color_scheme__item bg_color_har_pink color_snow_white">
                  HAR Pink<br />
                  <span>#FD4B78</span>
                </li>
                <li onClick={this.copyCode} className="design_color_scheme__item bg_color_har_pink_dark color_snow_white">
                  Dark HAR Pink<br />
                  <span>#B03453</span>
                </li>
              </ul>
            </div>
            </div>

            <div class="col col-sm-3 col-6"></div>

            <div class="col col-sm-3 col-6"></div>

            <div class="clear_both"></div>
          </div>
        </article>


        <article style={{marginBottom: "56px"}}>
          <h2 tabIndex="0" className="h2">UI colors</h2>

          <div className="row">

            <div class="col col-sm-3 col-6">
              <div className="design_color_scheme">
                <ul>
                  <li onClick={this.copyCode} className="design_color_scheme__item bg_color_available_light color_available">
                    Light Available<br />
                    <span>#E5FFF9</span>
                  </li>
                  <li onClick={this.copyCode} className="design_color_scheme__item bg_color_available color_snow_white">
                    Available<br />
                    <span>#018361</span>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col col-sm-3 col-6">
              <div className="design_color_scheme">
                <ul>
                  <li onClick={this.copyCode} className="design_color_scheme__item bg_color_pending_light color_carbon">
                    Light Pending<br />
                    <span>#FDF7CF</span>
                  </li>
                  <li onClick={this.copyCode} className="design_color_scheme__item bg_color_pending color_carbon">
                    Pending<br />
                    <span>#FBA000</span>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col col-sm-3 col-6">
              <div className="design_color_scheme">
                <ul>
                  <li onClick={this.copyCode} className="design_color_scheme__item bg_color_sold_light color_sold">
                    Light Sold<br />
                    <span>#FFD8D8</span>
                  </li>
                  <li onClick={this.copyCode} className="design_color_scheme__item bg_color_sold color_snow_white">
                    Sold<br />
                    <span>#CC0000</span>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col col-sm-3 col-6">
              <div className="design_color_scheme">
                <ul>
                  <li onClick={this.copyCode} className="design_color_scheme__item bg_color_auxiliary_light color_auxiliary">
                    Light Auxiliary<br />
                    <span>#AFB8D9</span>
                  </li>
                  <li onClick={this.copyCode} className="design_color_scheme__item bg_color_auxiliary color_snow_white">
                    Auxiliary<br />
                    <span>#515B7A</span>
                  </li>
                </ul>
              </div>
            </div>

            <div class="clear_both"></div>
          </div>
        </article>


        <article>
          <h2 tabIndex="0" className="h2">Grey colors</h2>

          <div className="row">

            <div class="col col-sm-3 col-6">
              <div className="design_color_scheme">
                <ul>
                  <li onClick={this.copyCode} className="design_color_scheme__item bg_color_black color_snow_white">
                    Dark<br />
                    <span>#000000</span>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col col-sm-3 col-6">
              <div className="design_color_scheme">
                <ul>
                  <li onClick={this.copyCode} className="design_color_scheme__item bg_color_carbon color_snow_white">
                    Carbon<br />
                    <span>#212529</span>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col col-sm-3 col-6">
              <div className="design_color_scheme">
                <ul>
                  <li onClick={this.copyCode} className="design_color_scheme__item bg_color_cement_light color_cement_dark">
                    Light Cement<br />
                    <span>#F3F4F7</span>
                  </li>
                  <li onClick={this.copyCode} className="design_color_scheme__item bg_color_cement color_cement_dark">
                    Cement<br />
                    <span>#DDDDDD</span>
                  </li>
                  <li onClick={this.copyCode} className="design_color_scheme__item bg_color_cement_dark color_snow_white">
                    Dark Cement<br />
                    <span>#5D5E5E</span>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col col-sm-3 col-6">
              <div className="design_color_scheme">
                <ul>
                  <li onClick={this.copyCode} className="design_color_scheme__item bg_color_slate_light color_snow_white">
                    Light Slate<br />
                    <span>#52738A</span>
                  </li>
                  <li onClick={this.copyCode} className="design_color_scheme__item bg_color_slate color_snow_white">
                    Slate<br />
                    <span>#3B5363</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="clear_both"></div>
          </div>

          <hr />

          <div className="row">

            <div class="col col-sm-3 col-6">
              <div className="design_color_scheme">
                <ul>
                  <li onClick={this.copyCode} className="design_color_scheme__item bg_color_cloudy_sky_light color_auxiliary">
                    Light Cloudy Sky<br />
                    <span>#EDF0FA</span>
                  </li>
                  <li onClick={this.copyCode} className="design_color_scheme__item bg_color_cloudy_sky color_auxiliary">
                    Cloudy Sky<br />
                    <span>#DFE3F0</span>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col col-sm-3 col-6">
              <div className="design_color_scheme">
                <ul>
                  <li onClick={this.copyCode} className="design_color_scheme__item bg_color_snow_white color_auxiliary" style={{border: "1px solid #DFE3F0"}}>
                    Snow White<br />
                    <span>#FFFFFF</span>
                  </li>
                </ul>
              </div>
            </div>

            <div class="clear_both"></div>
          </div>
        </article>

      </TemplateDefault>
    )
  }

}
