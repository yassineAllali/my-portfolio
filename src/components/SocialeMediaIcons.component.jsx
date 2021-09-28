import React from "react";
import INFO from "../data/info";


const SocialeMediaIcons = () => {
    const {linkedin, github, gitlab} = INFO;
    return (
        <div className="flex-center">
            <a href={linkedin} target="_blank"><i className="fa fa-linkedin fa-3x icon-3d"></i></a>
            <a href={github} target="_blank"><i className="fa fa-github fa-3x icon-3d"></i></a>
            <a href={gitlab} target="_blank"><i className="fa fa-gitlab fa-3x icon-3d"></i></a> 
        </div>
    );

}


export default SocialeMediaIcons;