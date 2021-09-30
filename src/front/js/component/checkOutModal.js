import React from "react";
import PropTypes from "prop-types";
import { useUpdateData } from "../store/data";

export function CheckOutModal(props) {
	const checkout = useUpdateData("/api/tenant/" + props.id, "PATCH");
	React.useEffect(
		() => {
			if (checkout.updated) {
				checkout.reset();
				props.onClose();
			}
		},
		[checkout.updated]
	);

	return (
		<div
			className={props.id !== undefined ? "modal show" : "modal"}
			style={props.id !== undefined ? { display: "block" } : { display: "none" }}
			role="dialog">
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Modal title</h5>
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
						<p>Modal body text goes here.</p>
					</div>
					<div className="modal-footer">
						<button
							type="button"
							className="btn btn-primary"
							onClick={() => {
								checkout.updateData({ status: "Checked-Out" });
							}}>
							Check-Out
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
CheckOutModal.propTypes = { id: PropTypes.string, onClose: PropTypes.func };
