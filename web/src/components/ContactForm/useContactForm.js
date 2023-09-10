import { useEffect, useImperativeHandle, useState } from 'react';
import { useErrors } from '../../hooks/useErrors';
import { isEmailValid } from '../../utils/isEmailValid';
import { formatPhone } from '../../utils/formatPhone';
import CategoriesService from '../../services/CategoriesService';

export function useContactForm(onSubmit, ref) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [categories, setCategories] = useState([]);
  const [isLoadingCategories, setIslLoadingCategories] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    errors, setError, removeError, getErrorMessageByFieldName,
  } = useErrors();

  const isFormValid = name && !errors.length;

  function handleNameChange(event) {
    const { value } = event.target;
    setName(value);

    if (!value) {
      setError({ field: 'name', message: 'Nome é obrigatório' });
    } else {
      removeError('name');
    }
  }

  function handleEmailChange(event) {
    const { value } = event.target;

    setEmail(value);

    if (value && !isEmailValid(value)) {
      setError({ field: 'email', message: 'Digite um email válido' });
    } else {
      removeError('email');
    }
  }

  function handlePhoneChange(event) {
    const { value } = event.target;
    const phoneMask = formatPhone(value);
    setPhone(phoneMask);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setIsSubmitting(true);

    await onSubmit({
      name,
      email,
      phone,
      categoryId,
    });

    setIsSubmitting(false);
  }

  useImperativeHandle(ref, () => ({
    setFieldsValues: (contact) => {
      setName(contact.name ?? '');
      setEmail(contact.email ?? '');
      setPhone(formatPhone(contact.phone ?? ''));
      setCategoryId(contact.category.id ?? '');
    },

    resetFields: () => {
      setName('');
      setEmail('');
      setPhone('');
      setCategoryId('');
    },
  }), []);

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchCategories() {
      try {
        setIslLoadingCategories(true);

        const response = await CategoriesService.listCategories(abortController.signal);
        setCategories(response);
      } catch {} finally {
        setIslLoadingCategories(false);
      }
    }
    fetchCategories();

    return () => {
      abortController.abort();
    };
  }, []);

  return {
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
  };
}
