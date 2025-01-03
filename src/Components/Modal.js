import { Modal } from "bootstrap";
import React, { useState } from "react";
// import

function CallModal({show, setShow}) {
    // const [show, setShow] = useState(false);

    return (
        <div>
            <Modal show={show} onhide={() => (setShow(false))}>
                <Modal.Header>
                    <Modal.Title> Save Document </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h3> Are you sure you want to Save..?</h3>
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={() => (setShow(false))} > Close </button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default CallModal;







// <div>
// <h1> Modal ! </h1>
// {/* <!-- Modal --> */}
// <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//     <div class="modal-dialog" role="document">
//         <div class="modal-content">
//             <div class="modal-header">
//                 <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
//                 <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//                     <span aria-hidden="true">&times;</span>
//                 </button>
//             </div>
//             <div class="modal-body">
//                 ...
//             </div>
//             <div class="modal-footer">
//                 <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
//                 <button type="button" class="btn btn-primary">Save changes</button>
//             </div>
//         </div>
//     </div>
// </div>
// </div>
