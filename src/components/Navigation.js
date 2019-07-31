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
			isMobileMenuOn: '',
			asideMainClass: '',
			HeaderMobileMenuBtnClass: ''
		};

		this.toggleMenu = this.toggleMenu.bind(this);
	}

	toggleMenu() {
		let auxState;
		if (this.state.isMobileMenuOn == '') { 
			auxState = 'menu_open';
		} else {
			auxState = '';
		}

    this.setState(state => ({
			isMobileMenuOn: auxState,
			asideMainClass: `aside_main--` + auxState,
			HeaderMobileMenuBtnClass: `header_mobile__mobile_menu_btn--` + auxState
      // isMobileMenuOn: !state.isMobileMenuOn
    }));
  }

	render(){
		return (
			<div>
        <header className="header_mobile">
          <div onClick={this.toggleMenu} aria-label="Show/hide menu" className={`header_mobile__mobile_menu_btn ${this.state.HeaderMobileMenuBtnClass}`}></div>

          <div className="header_mobile__logo">
            <Link to="/"><img src={logo} alt="HAR Styleguide" /></Link>
          </div>
        </header>


        <aside className={`aside_main ${this.state.asideMainClass}`}>

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
                    <Link to="/components/agent_signatures">Agent Singnatures</Link>
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
                  <li className={`li ${this.props.activeChild == 'listing_cards' ? 'li--active' : ''} `}>
                    <Link to="/components/listing_cards">Listing Cards</Link>
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
