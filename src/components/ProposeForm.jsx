import React, { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import LinkModal from './LinkModal';

const ProposeForm = ({ className = '' }) => {
    const [text, setText] = useState('');
    const [modal, setModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setModal(true);
    };

    return (
        <>
            <form className={`form_btn ${className}`} onSubmit={handleSubmit}>
                <InputGroup className="form_wrapper">
                    <Form.Control
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        className="form_field"
                        placeholder="can you type the name of bandariya"
                    />
                    <Button className="form_btn" variant="danger" type="submit">
                        TELL HER
                    </Button>
                </InputGroup>
            </form>
            <LinkModal person={text} show={modal} hide={() => setModal(false)} />
        </>
    );
};

export default ProposeForm;
