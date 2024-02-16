import {
  Button,
  Card,
  TextInput,
  Title
} from '@tremor/react';
import { useUserAction } from 'src/hooks/useUserAction';
export function CrearNewUser() {
  const { addUser } = useUserAction();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const github = formData.get('github') as string;
    addUser({ name, email, github });
    form.reset();
  };

  return (
    <Card className='mt-10'>
      <Title>Create New User</Title>
      <form onSubmit={handleSubmit} action=''>
        <TextInput
          name='name'
          placeholder='Her the name'
        />

        <TextInput
          name='email'
          placeholder='Her the email'
        />
        <TextInput
          name='github'
          placeholder='Her the user github'
        />
        <Button
          type='submit'
          className='bg-blue-600 rounded-md hover:bg-blue-400 mt-16'
        >
          Create New User
        </Button>
      </form>
    </Card>
  );
}