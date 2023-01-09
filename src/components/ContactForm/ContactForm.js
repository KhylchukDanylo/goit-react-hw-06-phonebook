import { useState } from 'react';
import { Form, FormLabel, FormInput } from './ContactForm.styled';
import Button from 'components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { nanoid } from 'nanoid';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const handleAddContact = e => {
    e.preventDefault();
    let secyritu = true;
    contacts.forEach(elm => {
      if (elm.name === name) {
        alert('This name is taken!');
        secyritu = false;
      }
    });
    if (secyritu) {
      dispatch(addContact({ id: nanoid(), name, number }));
      resetForm();
    }
  };

  return (
    <Form onSubmit={handleAddContact}>
      <FormLabel>
        Name
        <FormInput
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FormLabel>
      <FormLabel>
        Number
        <FormInput
          value={number}
          onChange={handleChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FormLabel>
      <Button type="submit">Add contact</Button>
    </Form>
  );
}
