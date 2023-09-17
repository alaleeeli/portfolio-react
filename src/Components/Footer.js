import { HorizontalLine } from "./HorizontalLine";
import { Instagram } from './Social Media/Instagram';
import { Twitter } from './Social Media/Twitter';
import { LinkedIn } from './Social Media/LinkedIn';
import { GitHub } from './Social Media/GitHub';

export function Footer() {
    return (
        <>
            <HorizontalLine />

            <ul className="flex justify-center mt-5 mb-20 space-x-5">
                <li> <Instagram height="10" width="10" /> </li>
                <li> <Twitter height="10" width="10" /> </li>
                <li> <LinkedIn height="10" width="10" /> </li>
                <li> <GitHub height="10" width="10" /></li>
            </ul>
        </>
    );
}
