import { useEffect, useState } from 'react';
import {BadgeImage} from './BadgeImage';


export const BadgeBuilder = ({ name }) => {
    const [source, setSource] = useState('')
    useEffect(() => {
        var im = new Image(); 

        var rex = /[a-zA-Z]+\s{1}[a-zA-Z]{1}$/ 
        var canvas = document.createElement("canvas"),
        ctx = canvas.getContext("2d");
        im.onload = function() {
            canvas.width = im.width;
            canvas.height = im.height;
            ctx.drawImage(im, 0, 0);
            ctx.font = "60px Arial";
            ctx.fillStyle = "#FFFFFF";
            ctx.fillRect(20, 300, 750, 80);
            if (name?.length && rex.exec(name)) {
                ctx.fillStyle = "#FFFFFF";
                ctx.fillRect(20, 290, 750, 90);
                ctx.font = "100px Arial";
                ctx.fillStyle = "#ba168b";
                ctx.fillText(name, 50, 360);
            } else {
                ctx.fillStyle = "#999999";
                ctx.fillText("Enter First Name + Initial", 50, 360);
            }
            setSource( canvas.toDataURL()); 
        };
        im.src = BadgeImage;
    })
    return (
        <div >
            {source && <img src={source} alt="New Badge" />} 
        </div>
    );
};

