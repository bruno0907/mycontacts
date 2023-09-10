import { forwardRef } from 'react';

import PropTypes from 'prop-types';

import { Form } from '../Form';
import { FormGroup } from '../FormGroup';
import { Input } from '../Input';
import { Select } from '../Select';
import { Button } from '../Button';
import { useContactForm } from './useContactForm';

const ContactForm = forwardRef(({ buttonLabel, onSubmit }, ref) => {
  const {
    name,
    email,
    phone,
    categoryId,
    setCategoryId,
    categories,
    isLoadingCategories,
    isSubmitting,
    getErrorMessageByFieldName,
    isFormValid,
    handleEmailChange,
    handleNameChange,
    handlePhoneChange,
    handleSubmit,
  } = useContactForm(onSubmit, ref);

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          placeholder="Nome*"
          error={getErrorMessageByFieldName('name')}
          value={name}
          onChange={handleNameChange}
          disabled={isSubmitting}
        />
      </FormGroup>
      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input
          type="email"
          placeholder="Email"
          error={getErrorMessageByFieldName('email')}
          value={email}
          onChange={handleEmailChange}
          disabled={isSubmitting}
        />
      </FormGroup>
      <FormGroup>
        <Input
          placeholder="Telefone"
          value={phone}
          onChange={handlePhoneChange}
          maxLength="15"
          disabled={isSubmitting}
        />
      </FormGroup>
      <FormGroup isLoading={isLoadingCategories}>
        <Select
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          disabled={isLoadingCategories || isSubmitting}
        >
          <option value="">Sem categoria</option>
          {categories.map((categoryElement) => (
            <option
              key={categoryElement.id}
              value={categoryElement.id}
            >
              {categoryElement.name}
            </option>
          ))}
        </Select>
      </FormGroup>
      <Button
        type="submit"
        full
        disabled={!isFormValid}
        isLoading={isSubmitting}
      >
        {buttonLabel}
      </Button>
    </Form>
  );
});

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  onSubmit: PropTypes.func,
};

export { ContactForm };
