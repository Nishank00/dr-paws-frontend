import React from 'react'

const DialogBox = ({ isOpen,onClosePopup, children }) => {
    return (
        <>
            {

                isOpen && (
                    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                        <div className="  rounded shadow-md relative group">
                            <span
                                className="absolute top-1 right-1 text-white cursor-pointer text-4xl transition-transform transform hover:scale-150"
                                onClick={onClosePopup}
                            >
                                &times;
                            </span>
                            {children}

                        </div>
                    </div>
                )

            }
        </>
    )
}

export default DialogBox