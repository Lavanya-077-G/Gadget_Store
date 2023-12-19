import React from 'react';
import { connect } from 'react-redux';
import { closePopup } from './actions/index';

const Popup = ({ message, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 shadow-lg rounded-md">
        <p>{message}</p>
        <button onClick={onClose} className="mt-2 bg-blue-500 text-white px-3 py-1 rounded-md">
          Close
        </button>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
    message: state.popupMessage,
    showPopup: state.showPopup,
  });
  
  const mapDispatchToProps = {
    onClose: closePopup,
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Popup);


