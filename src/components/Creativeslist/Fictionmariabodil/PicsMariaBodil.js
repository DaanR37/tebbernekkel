import IMAGESJSONSMALLFORMAT from "../../../imagesjsonsmallformat";
import "./picsmariabodil.scss";

export default function PicsMariaBodil() {
    return (
        <wrapper>
            <div id="grid-wrapper-pics">
                {
                    IMAGESJSONSMALLFORMAT && IMAGESJSONSMALLFORMAT.map((item) =>
                        <div key={item.id}>
                            <img src={item.image} alt="" />
                        </div>
                    )
                }
            </div>
        </wrapper>
    )
}
