import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./CopyBox.css";
import phLink from "../../img/ph-link-bold.svg"

export const CopyBox = ({ property1, phLinkBold = phLink }) => {
    const [state, dispatch] = useReducer(reducer, {
        property1: property1 || "default",
    });

    return (
        <div
            className="copy-box"
            onClick={() => {
                dispatch("click");
            }}
        >
            <div className="overlap">
                <div className={`copy ${state.property1}`}>
                    <div className="overlap-group">
                        <div className="div">
                            {state.property1 === "default" && <>copy</>}

                            {state.property1 === "variant-2" && <>Copied!</>}
                        </div>
                    </div>
                </div>
                <img
                    className="ph-link-bold"
                    alt="Ph link bold"
                    src={state.property1 === "variant-2" ? phLinkBold : phLinkBold}
                />
                <div className="text-wrapper">example.com/share-link-23</div>
            </div>
        </div>
    );
};

function reducer(state, action) {
    if (state.property1 === "default") {
        switch (action) {
            case "click":
                return {
                    property1: "variant-2",
                };
        }
    }

    if (state.property1 === "variant-2") {
        switch (action) {
            case "click":
                return {
                    property1: "default",
                };
        }
    }

    return state;
}

CopyBox.propTypes = {
    property1: PropTypes.oneOf(["variant-2", "default"]),
    phLinkBold: PropTypes.string,
};
