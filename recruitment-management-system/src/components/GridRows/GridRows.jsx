import "./GridRows.scss";

const GridRows = (props) => {
  const color = props.color;
  console.log(color);
  console.log(props.Headers);
  console.log(props.Details);

  return (
    <>
      <div className="data">
        <div
          className="data--heading"
          style={{
            gridTemplateColumns: `repeat(${
              Object.keys(props.Headers).length
            }, 1fr)`,
          }}
        >
          {Object.keys(props.Headers).map((options) => {
            if (options != "address" && options != "email") {
              return (
                <>
                  <span className="data--span">{props.Headers[options]}</span>
                </>
              );
            }
          })}
        </div>
        <br />
        <div className="data--details">
          {console.log(props.Details)}{" "}
          {props.Details.map((value) => {
            {
              console.log(Object.keys(props.Headers).length);
            }

            return (
              <div
                className="data--rows"
                style={{
                  gridTemplateColumns: `repeat(${
                    Object.keys(props.Headers).length
                  }, 1fr)`,
                }}
                onClick={(e) => {
                  onSelect(e, value.id);
                }}
              >
                {Object.keys(props.Headers).map((options) => {
                  console.log(options, "options");
                  if (value[options]) {
                    console.log(options, props.Headers, value[options]);
                    return (
                      <span
                        className={color.options ? color.options : "data--span"}
                      >
                        {value[options]}
                      </span>
                    );
                  } else {
                    return (
                      <>
                        <span className="data--span"></span>
                      </>
                    );
                  }
                })}
                {props.actions()}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default GridRows;
