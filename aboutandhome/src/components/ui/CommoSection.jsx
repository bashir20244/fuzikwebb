import style from "./CommoSection.module.css";

const CommoSection = ({ title }) => {
    return (
        <section className={style.commom__section}>
          <div className="container">
            <div className={style.commom__section__hero}>
              <h2>{title}</h2>
            </div>
          </div>
        </section>
      );
};

export default CommoSection;