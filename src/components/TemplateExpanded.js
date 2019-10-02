import React, { Component } from "react";
import "../assets/stylesheets/main.scss";

import Navigation from './Navigation';
import Content from './Content';

export default class TemplateExpanded extends Component {

	render(){
		return (
			<div className="body_content">

				<Navigation
		      activeParent={this.props.activeParent}
		      activeChild={this.props.activeChild}
					isFloatingNavigation={true} />

				<Content wrapperClass="wrapper wrapper--full_width" pageTitle={this.props.pageTitle}>
					{this.props.children}
				</Content>
			</div>
		)
	}
}
