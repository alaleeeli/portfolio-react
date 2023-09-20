import HorizontalLine from "../Lines/HorizontalLine";
import SocialList from '../SocialMedia/SocialList'

export default function Footer({title, lineWidth}) {
    return (
        <>
            <HorizontalLine title={title} width={lineWidth}/>

            <SocialList height="10" width="10"/>
        </>
    );
}