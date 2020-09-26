import React, {useState} from 'react';
import { Input, Button } from 'antd';

const { TextArea } = Input;

const Form = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const submit = (event) => {
    event.preventDefault();
    console.log(name, phone, email, subject, message);
  };

  return (
    <>
      <form className="container" onSubmit={submit}>
        <div className="row d-flex justify-content-center">
          <div className="col-lg-4 col-md-4 col-sm-11 col-11">
            <Input size="large" placeholder="Անուն" required onChange={event => setName(event.target.value)} />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-11 col-11 mt-4 mt-md-0">
            <Input size="large" placeholder="Հեռախոս" required onChange={event => setPhone(event.target.value)} />
          </div>
        </div>
        <div className="row d-flex justify-content-center mt-4">
          <div className="col-lg-8 col-md-8 col-sm-11 col-11 mx-auto">
            <Input size="large" placeholder="Էլեկտրոնային հասցե" required onChange={event => setEmail(event.target.value)} />
          </div>
        </div>
        <div className="row d-flex justify-content-center mt-4">
          <div className="col-lg-8 col-md-8 col-sm-11 col-11 mx-auto">
            <Input size="large" placeholder="Թեմա" required onChange={event => setSubject(event.target.value)} />
          </div>
        </div>
        <div className="row d-flex justify-content-center mt-4">
          <div className="col-lg-8 col-md-8 col-sm-11 col-11 mx-auto">
            <TextArea rows={7} placeholder="Հաղորդագրություն․․․" allowClear required onChange={event => setMessage(event.target.value)} />
          </div>
        </div>
        <div className="row d-flex justify-content-center my-4">
          <div className="col-lg-8 col-md-8 col-sm-11 col-11 text-right">
            <Button size="large" type="primary" htmlType="submit">
              Ուղարկել
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;