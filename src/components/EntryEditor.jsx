import React, { useState } from 'react';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

function EntryEditor(props) {
  const [entry, updateEntry] = useState(props.entry);
  function handleChange(e) {
    const { name, value } = e.target;
    const updated = {
      ...entry,
    };
    updated[name] = value;
    updateEntry(updated);
  }
  function save() {
    props.save(entry);
  }
  return (
    <Modal isOpen={true} toggle={props.cancel}>
      <ModalHeader toggle={props.cancel}>
        Log entry {entry.date.toLocaleString('en-GB', { timeZone: 'UTC' })}
      </ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="text">
              Remarks
            </Label>
            <Input
              id="text"
              name="text"
              type="textarea"
              placeholder="with a placeholder"
              value={entry.text}
              onChange={handleChange}
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={save}>
          Save
        </Button>{' '}
        <Button color="secondary" onClick={props.cancel}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default EntryEditor;