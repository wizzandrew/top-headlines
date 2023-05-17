import React, { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import "../css/SignInModal.css";

type SignInProps = {
  modalOpen: boolean;
  toggle: () => void;
};

export default function SignInModal(props: SignInProps) {
  // form state for username and password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // handle submit of the form
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("username: " + username + " password: " + password);
    props.toggle();
  };

  return (
    <Modal isOpen={props.modalOpen} toggle={props.toggle}>
      <ModalHeader toggle={props.toggle}>
        Sign in <br />
        <span>Log in to manage your account and leave comments.</span>
      </ModalHeader>
      <ModalBody>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="_username">Username</Label>
            <Input
              id="username"
              name="username"
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </FormGroup>
          <FormGroup className="secondFormGroup">
            <Label for="_password">
              Password <span id="forgotPassword">(Forgot password?)</span>
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </FormGroup>
          <Button
            className="d-flex my-0 mx-auto singInBtn"
            color="primary"
            type="submit"
          >
            <span>Sign in</span>
          </Button>
          <hr className="lineSeparator" />
          <div className="createAccText">
            <p>Don't have a TH account yet?</p>
            <span>Register now</span>
          </div>
        </form>
      </ModalBody>
    </Modal>
  );
}
