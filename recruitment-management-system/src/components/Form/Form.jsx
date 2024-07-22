import React, { useState } from "react";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import "./Form.scss";

const Form = ({
  fields,
  onFieldChange,
  values,
  errors,
  onSubmit,
  onListChange,
}) => {
  return (
    <div className="form-container">
      <div className="inputs-container">
        {fields.map((field) => {
          return field.component ? (
            <field.component
              key={field.name}
              value={values[field.name]}
              handleListChange={(newList) => onListChange(newList, field.name)}
              handleChange={(e) => onFieldChange(e, field.name)}
              {...field}
            />
          ) : (
            <FormInput
              key={field.name}
              type={field.type}
              label={field.label}
              name={field.name}
              value={values[field.name]}
              error={errors[field.name]}
              handleChange={(e) =>
                onFieldChange(e, field.name, field.maxLength)
              }
            />
          );
        })}
      </div>
      <div>
        <Button
          text="Submit"
          handleSubmit={onSubmit}
          className="form-btn primary-btn"
        />
        <Button
          text="Cancel"
          handleSubmit={() => navigate("/employees")}
          className="form-btn secondary-btn"
        />
      </div>
    </div>
  );
};

export default Form;
