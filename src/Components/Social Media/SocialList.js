import {Instagram} from './Instagram';
import {Twitter} from './Twitter';
import {LinkedIn} from './LinkedIn';
import {GitHub} from './GitHub';

export default function SocialList({height, width}) {
    return (
        <>
            <ul className="flex justify-center mb-5 space-x-5">
                <li> <Instagram height={height} width={width} /> </li>
                <li> <Twitter height={height} width={width} /> </li>
                <li> <LinkedIn height={height} width={width} /> </li>
                <li> <GitHub height={height} width={width} /></li>
            </ul>
        </>
    );
}