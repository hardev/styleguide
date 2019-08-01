import React, {Component} from "react";
import TemplateDefault from '../../components/TemplateDefault';
import TemplateComponentBlock from '../../components/TemplateComponentBlock';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import $ from 'jquery';

export default class ColorScheme extends Component {

  componentDidMount() {
    $('[data-toggle="tooltip"]').tooltip();
  }

  constructor(props) {
    super(props);

    this.colors = [

      // BRAND COLORS ======

      {
        name: "Brand colors",
        colors: [

          {
            name: "Blue Group",
            colors: [
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
              },
            ]
          },
          {
            name: "Pink Group",
            colors: [
              {
                name: "Extra Light HAR Pink",
                code: "#FFE4EB",
                class: "bg_color_har_pink_light_extra color_har_pink_dark"
              },
              {
                name: "Light HAR Pink",
                code: "#FFA4BB",
                class: "bg_color_har_pink_light color_har_pink_dark"
              },
              {
                name: "HAR Pink",
                code: "#FD4B78",
                class: "bg_color_har_pink color_snow_white"
              },
              {
                name: "Dark HAR Pink",
                code: "#B03453",
                class: "bg_color_har_pink_dark color_snow_white"
              },
            ]
          }

        ]
      },

      // UI COLORS ======

      {
        name: "UI colors",
        colors: [

          {
            name: "Available Group",
            colors: [
              {
                name: "Light Available",
                code: "#E5FFF9",
                class: "bg_color_available_light color_available"
              },
              {
                name: "Light HAR Blue",
                code: "#018361",
                class: "bg_color_available color_snow_white"
              }
            ]
          },
          {
            name: "Pending Group",
            colors: [
              {
                name: "Light Pending",
                code: "#FDF7CF",
                class: "bg_color_pending_light color_carbon"
              },
              {
                name: "Pending",
                code: "#FBA000",
                class: "bg_color_pending color_carbon"
              }
            ]
          },
          {
            name: "Sold Group",
            colors: [
              {
                name: "Light Sold",
                code: "#FFD8D8",
                class: "bg_color_sold_light color_sold"
              },
              {
                name: "Sold",
                code: "#CC0000",
                class: "bg_color_sold color_snow_white"
              }
            ]
          },
          {
            name: "Auxiliary Group",
            colors: [
              {
                name: "Light Auxiliary",
                code: "#AFB8D9",
                class: "bg_color_auxiliary_light color_auxiliary"
              },
              {
                name: "Auxiliary",
                code: "#515B7A",
                class: "bg_color_auxiliary color_snow_white"
              }
            ]
          }

        ]
      },

      // GREY COLORS ======

      {
        name: "Grey colors",
        colors: [

          {
            name: "Black Group",
            colors: [
              {
                name: "Black",
                code: "#000000",
                class: "bg_color_black color_snow_white"
              }
            ]
          },
          {
            name: "Carbon Group",
            colors: [
              {
                name: "Carbon",
                code: "#212529",
                class: "bg_color_carbon color_snow_white"
              }
            ]
          },
          {
            name: "Cement Group",
            colors: [
              {
                name: "Light Cement",
                code: "#F3F4F7",
                class: "bg_color_cement_light color_cement_dark"
              },
              {
                name: "Sold",
                code: "#DDDDDD",
                class: "bg_color_cement color_cement_dark"
              },
              {
                name: "Sold",
                code: "#5D5E5E",
                class: "bg_color_cement_dark color_snow_white"
              }
            ]
          },
          {
            name: "Slate Group",
            colors: [
              {
                name: "Light Slate",
                code: "#52738A",
                class: "bg_color_slate_light color_snow_white"
              },
              {
                name: "Auxiliary",
                code: "#3B5363",
                class: "bg_color_slate color_snow_white"
              }
            ]
          },
          {
            name: "Cloudy Sky Group",
            colors: [
              {
                name: "Light Cloudy Sky",
                code: "#EDF0FA",
                class: "bg_color_cloudy_sky_light color_auxiliary"
              },
              {
                name: "Cloudy Sky",
                code: "#DFE3F0",
                class: "bg_color_cloudy_sky color_auxiliary"
              }
            ]
          },
          {
            name: "Snow White Group",
            colors: [
              {
                name: "Snow White",
                code: "#FFFFFF",
                class: "bg_color_snow_white color_auxiliary border_thin_light"
              }
            ]
          }

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




    return (
      <TemplateDefault
        pageTitle="Color Scheme"
        activeParent="design"
        activeChild="color_scheme">


        {
          this.colors.map(branch =>
            <article style={{marginBottom: "56px"}}>
              <h2 tabIndex="0" className="h2">{branch.name}</h2>

              <div className="row">
                {
                  branch.colors.map(colorGroups =>

                    <div class="col col-sm-3 col-6">
                      <div className="design_color_scheme">
                        <ul>
                          {
                            colorGroups.colors.map(color =>
                              <CopyToClipboard text={color.code} onCopy={() => { /* Do stuff here */ }}>
                                <li onClick={this.copyCode} className={`design_color_scheme__item ${color.class} `}
                                    data-toggle="tooltip" data-placement="top" title="Copy hex color code">
                                  {color.name}<br />
                                  <span>{color.code}</span>
                                </li>
                              </CopyToClipboard>
                            )
                          }

                        </ul>
                      </div>
                    </div>

                  )
                }
              </div>
            </article>
          )
        }


      </TemplateDefault>
    )
  }

}
