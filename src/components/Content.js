import React, { Component } from "react";

export default class Content extends Component {

	constructor(props) {
    super(props);
  }

	render() {

		return (
      <main className={this.props.wrapperClass ? this.props.wrapperClass : "wrapper"}>

        <div className="container">
          <div className="row">
            <div className="col-12">

              <div className="content_title">
                <h1 tabIndex="0">{this.props.pageTitle}</h1>
              </div>

              {this.props.children}

            </div>
          </div>
        </div>

        <footer>
          HAR {(new Date().getFullYear())} – Styleguide
        </footer>

      </main>
		)
	}
}
