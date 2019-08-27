import React, { Component } from "react";
import "../assets/stylesheets/main.scss";

import Navigation from './Navigation';
import Content from './Content';

export default class TemplateDefault extends Component {

	render(){
		return (
			<div className="body_content">

				<Navigation
		      activeParent={this.props.activeParent}
		      activeChild={this.props.activeChild}/>

				<Content pageTitle={this.props.pageTitle}>
					{this.props.children}
				</Content>
			</div>
		)
	}
}
