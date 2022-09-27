import React, { Component } from "react";
import logo from '../assets/images/logo-har-default.svg';
import { Link } from 'react-router-dom';

export default class Header extends Component {
	//
	// state = {
	// 	collapseID: ''
	// }
	//
	// toggleCollapse = collapseID => () => {
	// 	this.setState(prevState => ({ collapseID: (prevState.collapseID !== 'collapseID' ? collapseID : '') }));
	// }

	constructor(props) {
		super(props);

		this.state = {
			isFloatingMenuOn: '',
			asideMainClass: '',
			FloatingMenuBtnClass: ''
		};

		this.toggleMenu = this.toggleMenu.bind(this);
	}

	toggleMenu() {
		let auxState;
		if (this.state.isFloatingMenuOn == '') {
			auxState = 'menu_open';
		} else {
			auxState = '';
		}

    this.setState(state => ({
			isFloatingMenuOn: auxState,
			asideMainClass: `aside_main--` + auxState,
			FloatingMenuBtnClass: `floating_menu_btn--` + auxState
      // isFloatingMenuOn: !state.isFloatingMenuOn
    }));
  }

	render() {
		return (
			<div>

        <header className="header_mobile">
          <div onClick={this.toggleMenu} aria-label="Show/hide menu" className={`floating_menu_btn ${this.state.FloatingMenuBtnClass}`}></div>

          <div className="header_mobile__logo">
            <Link to="/"><img src={logo} alt="HAR Styleguide" /></Link>
          </div>
        </header>

				<div
					onClick={this.toggleMenu}
					aria-label="Show/hide menu"
					className={`
						floating_menu_btn
						${this.state.FloatingMenuBtnClass}
						${this.props.isFloatingNavigation ? "true" : "d-none"}
					`}></div>

        <aside
					className={`
						aside_main
						${this.state.asideMainClass}
						${this.props.isFloatingNavigation ? "aside_main--floating" : ""}
					`}>

          <div className="aside_main__logo">
            <Link to="/"><img src={logo} alt="HAR Styleguide" /></Link><br />Styleguide
          </div>

          <nav id="aside_main_nav" className="aside_main__nav aside_main__nav--main">
            <ul>

              <li className="li">
                <Link to="/">Introduction</Link>
              </li>

              <li className="li li--has-children">

								<a data-toggle="collapse"
									 href="#menu_design"
									 role="button"
									 aria-expanded={ this.props.activeParent == 'design' ? 'true' : 'false' }
									 aria-controls="menu_design">
									Design
								</a>

								<ul
									className={`collapse ${this.props.activeParent == 'design' ? 'show' : ''} `}
									id="menu_design"
									data-parent="#aside_main_nav">

                  <li className={`li ${this.props.activeChild == 'border_radius' ? 'li--active' : ''} `}>
                    <Link to="/design/border_radius">Border Radius</Link>
                  </li>
                  <li className={`li ${this.props.activeChild == 'color_scheme' ? 'li--active' : ''} `}>
                    <Link to="/design/color_scheme">Color Scheme</Link>
                  </li>
                  <li className={`li ${this.props.activeChild == 'depth' ? 'li--active' : ''} `}>
                    <Link to="/design/depth">Depth</Link>
                  </li>
                  <li className={`li ${this.props.activeChild == 'iconography' ? 'li--active' : ''} `}>
										<Link to="/design/iconography">Iconography</Link>
                  </li>
                  <li className={`li ${this.props.activeChild == 'typography' ? 'li--active' : ''} `}>
										<Link to="/design/typography">Typography</Link>
                  </li>
                  <li className={`li ${this.props.activeChild == 'images' ? 'li--active' : ''} `}>
										<Link to="/design/images">Images</Link>
                  </li>
                </ul>
              </li>

              <li className="li li--has-children">

                <a data-toggle="collapse"
									 href="#menu_components"
									 role="button"
									 aria-expanded={ this.props.activeParent == 'components' ? 'true' : 'false' }
									 aria-controls="menu_components">
                  Components
                </a>

                <ul
									className={`collapse ${this.props.activeParent == 'components' ? 'show' : ''} `}
									id="menu_components"
									data-parent="#aside_main_nav">

                  <li className={`li ${this.props.activeChild == 'agent_signatures' ? 'li--active' : ''} `}>
                    <Link to="/components/agent_signatures">Agent Signatures</Link>
                  </li>
                  <li className={`li ${this.props.activeChild == 'buttons' ? 'li--active' : ''} `}>
                    <Link to="/components/buttons">Buttons</Link>
                  </li>
                  <li className={`li ${this.props.activeChild == 'filter_pills' ? 'li--active' : ''} `}>
                    <Link to="/components/filter_pills">Filter Pills</Link>
                  </li>
                  <li className={`li ${this.props.activeChild == 'form_elements' ? 'li--active' : ''} `}>
                    <Link to="/components/form_elements">Form Elements</Link>
                  </li>
                  
                  <li className={`li ${this.props.activeChild == 'listing_cards_portrait_v2' ? 'li--active' : ''} `}>
                    <Link to="/components/listing_cards_portrait_v2">Listing Cards - Portrait V2</Link>
                  </li>
				  <li className={`li ${this.props.activeChild == 'listing_cards_landscape_v2' ? 'li--active' : ''} `}>
                    <Link to="/components/listing_cards_landscape_v2">Listing Cards - Landscape V2</Link>
                  </li>
                  <li className={`li ${this.props.activeChild == 'cards' ? 'li--active' : ''} `}>
                    <Link to="/components/cards">Cards (Others)</Link>
                  </li>
                  <li className={`li ${this.props.activeChild == 'cardsv2' ? 'li--active' : ''} `}>
                    <Link to="/components/cardsv2">Cards (Others) V2</Link>
                  </li>
                  <li className={`li ${this.props.activeChild == 'listing_status_tags' ? 'li--active' : ''} `}>
                    <Link to="/components/listing_status_tags">Listing Status Tags</Link>
                  </li>
                  <li className={`li ${this.props.activeChild == 'popovers' ? 'li--active' : ''} `}>
                    <Link to="/components/popovers">Popovers</Link>
                  </li>
                  <li className={`li ${this.props.activeChild == 'search_map' ? 'li--active' : ''} `}>
                    <Link to="/components/search_map">Search Map</Link>
                  </li>
                  <li className={`li ${this.props.activeChild == 'tables' ? 'li--active' : ''} `}>
                    <Link to="/components/tables">Tables</Link>
                  </li>
                  <li className={`li ${this.props.activeChild == 'tabs' ? 'li--active' : ''} `}>
                    <Link to="/components/tabs">Tabs</Link>
                  </li>
                  <li className={`li ${this.props.activeChild == 'modal' ? 'li--active' : ''} `}>
                    <Link to="/components/modal">Modal</Link>
                  </li>
                  <li className={`li ${this.props.activeChild == 'labels' ? 'li--active' : ''} `}>
                    <Link to="/components/labels">Labels</Link>
                  </li>
                  <li className={`li ${this.props.activeChild == 'messages' ? 'li--active' : ''} `}>
                    <Link to="/components/messages">Messages</Link>
                  </li>
                  <li className={`li ${this.props.activeChild == 'favorites' ? 'li--active' : ''} `}>
                    <Link to="/components/Favorites">Favorites</Link>
                  </li>
                  <li className={`li ${this.props.activeChild == 'sitewide' ? 'li--active' : ''} `}>
                    <Link to="/components/Sitewide">Sitewide</Link>
                  </li>
                  <li className={`li ${this.props.activeChild == 'listing_cards' ? 'li--active' : ''} `}>
                    <Link to="/components/listing_cards">Listing Cards [out dated]</Link>
                  </li>              
                </ul>
              </li>

							<li className="li li--has-children">

                <a data-toggle="collapse"
									 href="#menu_template_blocks"
									 role="button"
									 aria-expanded={ this.props.activeParent == 'template_blocks' ? 'true' : 'false' }
									 aria-controls="menu_template_blocks">
                  Template Blocks
                </a>

                <ul
									className={`collapse ${this.props.activeParent == 'template_blocks' ? 'show' : ''} `}
									id="menu_template_blocks"
									data-parent="#aside_main_nav">

                  <li className={`li ${this.props.activeChild == 'heros' ? 'li--active' : ''} `}>
                    <Link to="/template_blocks/heros">Heros</Link>
                  </li>
                  <li className={`li ${this.props.activeChild == 'page_headers' ? 'li--active' : ''} `}>
                    <Link to="/template_blocks/page_headers">Page Headers</Link>
                  </li>                  
                  <li className={`li ${this.props.activeChild == 'agent_header' ? 'li--active' : ''} `}>
                    <Link to="/template_blocks/agent_header">Agent Header</Link>
                  </li>
                  <li className={`li ${this.props.activeChild == 'broker_header' ? 'li--active' : ''} `}>
                    <Link to="/template_blocks/broker_header">Broker Header</Link>
                  </li>
                  <li className={`li ${this.props.activeChild == 'team_header' ? 'li--active' : ''} `}>
                    <Link to="/template_blocks/team_header">Team Header</Link>
                  </li>
                  <li className={`li ${this.props.activeChild == 'cmsblocks' ? 'li--active' : ''} `}>
                    <Link to="/template_blocks/cmsblocks">CMS Blocks</Link>
                  </li>
                </ul>
              </li>

            </ul>
          </nav>

          <nav className="aside_main__nav aside_main__nav--main aside_main__nav--extra">
            <ul>
              <li className="li">
                <a href="https://github.com/riandesign/har_styleguide" target="_blank">
                  <span className="icon icon--16x16 icon--github"></span>
                  View on GitHub
                </a>
              </li>
            </ul>
          </nav>

        </aside>
      </div>
		)
	}
}
