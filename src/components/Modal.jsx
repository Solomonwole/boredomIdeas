import React from "react";
import styled from "styled-components";
import { IoCloseSharp } from "react-icons/io5";

function VerifyModal({ closeModal, text, title, content }) {
  return (
    <>
      <Modal>
        <div />
        <div className="modal-content">
          <div className="close">
            <IoCloseSharp className="icon" onClick={closeModal} />
          </div>
          <h3>{title}</h3>
          <p>{text}</p>
          <div>
          {content}
          </div>
        </div>
      </Modal>
    </>
  );
}

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  overflow: hidden;

  .modal-content {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 20px;
    z-index: 1001;
    width: 90%;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .close {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      font-size: 22px;

      .icon {
        cursor: pointer;
      }
    }

    img {
      width: 117px;
    }

    p {
      text-align: center;
      width: 75%;
      margin-top: 20px;
    }
    @media screen and (min-width: 428px) {
      width: 444px;
    }
  }
`;
export default VerifyModal;
