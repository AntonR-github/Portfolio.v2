import CV from "../../../Assets/CV-AntonReviakin.pdf";
import CVHB from "../../../Assets/CV-AntonReviakinHB.pdf";


function CTA(): JSX.Element {
    return (
        <div className="CTA">
			<a href={CV} download className="btn">Download CV</a>
            <a href={CVHB} download className="btn">Download CV (Hebrew)</a>
            <a href="#about" className="btn btn-primary">Let's Talk</a>
        </div>
    );
}

export default CTA;
