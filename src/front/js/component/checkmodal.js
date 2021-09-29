import React from "react";
import PropTypes from "prop-types";

export function CheckModal(props) {
	return (
		<div
			className={props.id !== undefined ? "modal show" : "modal"}
			style={props.id !== undefined ? { display: "block" } : { display: "none" }}
			role="dialog">
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Check-In</h5>
						<button
							type="button"
							className="close"
							data-dismiss="modal"
							aria-label="Close"
							onClick={props.onClose}>
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">
						<input
							type="text"
							id="fob"
							placeholder="Fob Number"
							maxLength="20"
							// value={fob}
							// onChange={ev => setName(ev.target.value)}
						/>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-primary">
							Check-In
						</button>
						<button
							type="button"
							className="btn btn-secondary"
							data-dismiss="modal"
							onClick={props.onClose}>
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
CheckModal.propTypes = { id: PropTypes.string, onClose: PropTypes.func };
