import "./style.css";

const Section = (props) => (
    <section className="section">
        <header className="section__header">
            <h2 className="section__title">{props.title}</h2>
            {props.extraHeaderContent}
        </header>
        {props.body}
    </section>
);

export default Section;