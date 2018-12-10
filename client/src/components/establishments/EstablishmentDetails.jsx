// Establishments
import React, { Component } from "react";

class EstablishmentsDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="establishmentsdetails">
        <h1>Name Of Establishment</h1>
				<div>
					<h3>Descrição</h3>
					<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eum quos optio perspiciatis error, blanditiis corporis cumque ad provident delectus, explicabo quia. Praesentium voluptate similique nesciunt voluptatibus, corrupti laboriosam architecto!</span>
					<span>serviços</span>
					<ul>
						<li>*</li>
						<li>*</li>
						<li>*</li>
					</ul>
				</div>
      </div>
    );
  }
}

export default EstablishmentsDetails;