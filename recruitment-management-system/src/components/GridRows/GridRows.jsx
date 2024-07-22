import "./GridRows.scss";

const GridRows = (props) => {
  const color = props.color;

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
            return (
              <span className="data--span" key={props.Headers[options]}>
                {props.Headers[options]}
              </span> 
            );
          })}
        </div>
        <br />
        <div className="data--details">
          {props.Details.map((value) => {
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
                key={value.id}
              >
                {Object.keys(props.Headers).map((options) => {
                  if (value[options]) {
                    return (
                      <span
                        className={
                          color[value[options]]
                            ? color[value[options]]
                            : "data--span"
                        }
                        key={value[options]}
                      >
                        {value[options]}
                      </span>
                    );
                  }
                })}
                {props.actions(value.id) ? props.actions(value.id) : {}}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default GridRows;
