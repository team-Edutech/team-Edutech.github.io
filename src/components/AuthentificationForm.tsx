import React, { useState } from 'react';
import { useForm, useLocalStorage } from '@mantine/hooks';
import { Mail, Lock } from 'tabler-icons-react';
import {
  TextInput,
  PasswordInput,
  Group,
  Checkbox,
  Button,
  Text,
  LoadingOverlay,
  Anchor,
} from '@mantine/core';
import {UserProfile} from './LocalStorage';

export interface AuthenticationFormProps {
  noShadow?: boolean;
  noPadding?: boolean;
  noSubmit?: boolean;
  style?: React.CSSProperties;
  formType: 'register' | 'login';
  setFormType: React.Dispatch<React.SetStateAction<"register" | "login">>;
  modalSetOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AuthenticationForm({
  noShadow,
  noPadding,
  noSubmit,
  style,
  formType,
  setFormType, 
  modalSetOpened,
}: AuthenticationFormProps) {
  const [, setLogin] = useLocalStorage<UserProfile | null>({ key: 'login', defaultValue: null });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const toggleFormType = () => {
    setFormType((current) => (current === 'register' ? 'login' : 'register'));
    setError(null);
  };

  const form = useForm({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      termsOfService: true,
    },

    validationRules: {
      firstName: (value) => formType === 'login' || value.trim().length >= 2,
      lastName: (value) => formType === 'login' || value.trim().length >= 2,
      email: (value) => /^\S+@\S+$/.test(value),
      password: (value) => formType === 'login' || /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(value),
      confirmPassword: (val, values) => formType === 'login' || val === values?.password,
    },

    errorMessages: {
      email: 'Invalid email',
      password: 'Password should contain 1 number, 1 letter and at least 6 characters',
      confirmPassword: "Passwords don't match. Try again",
    },
  });

  const login = () => {
    // Dummy function, replace with actual call to backend
    let jwt_token;
    if (form.values.email === 'user@gmail.com' && form.values.password === 'admin') {
      jwt_token = 'jwt-token';
    } else {
      return null
    }

    // Also call backend to retrieve info for current user
    // Dummy again
    let user = {
      token: jwt_token,
      firstName: "Henry",
      lastName: "Silkeater",
      email: "user@gmail.com",
      avatar: "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    };

    // Save user in local storage
    setLogin(user);
    return user;
  };

  const handleSubmit = () => {
    setLoading(true);
    setError(null);
    setTimeout(() => {
      if (formType === 'register') {
        setError('Registration are not open yet');
      } else {
        const user = login();
        if (user) {
          modalSetOpened(false);
        } else {
          setError('Unknown user / wrong password');
        };
      }

      setLoading(false);
    }, 500);
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <LoadingOverlay visible={loading} />
      {formType === 'register' && (
        <Group grow>
          <TextInput
            data-autofocus
            required
            placeholder="Your first name"
            label="First name"
            {...form.getInputProps('firstName')}
          />

          <TextInput
            required
            placeholder="Your last name"
            label="Last name"
            {...form.getInputProps('lastName')}
          />
        </Group>
      )}

      <TextInput
        mt="md"
        required
        placeholder="Your email"
        label="Email"
        icon={<Mail />}
        {...form.getInputProps('email')}
      />

      <PasswordInput
        mt="md"
        required
        placeholder="Password"
        label="Password"
        icon={<Lock />}
        {...form.getInputProps('password')}
      />

      {formType === 'register' && (
        <PasswordInput
          mt="md"
          required
          label="Confirm Password"
          placeholder="Confirm password"
          icon={<Lock />}
          {...form.getInputProps('confirmPassword')}
        />
      )}

      {formType === 'register' && (
        <Checkbox
          mt="xl"
          label="I agree to the terms of services "
          {...form.getInputProps('termsOfService', { type: 'checkbox' })}
        />
      )}

      {error && (
        <Text color="red" size="sm" mt="sm">
          {error}
        </Text>
      )}

      {!noSubmit && (
        <Group position="apart" mt="xl">
          <Anchor
            component="button"
            type="button"
            color="gray"
            onClick={toggleFormType}
            size="sm"
          >
            {formType === 'register'
              ? 'Have an account? Login'
              : "Don't have an account? Register"}
          </Anchor>

          <Button color="blue" type="submit">
            {formType === 'register' ? 'Register' : 'Login'}
          </Button>
        </Group>
      )}
    </form>
  );
}