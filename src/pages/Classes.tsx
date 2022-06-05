import ClassGrid from '../components/ClassGrid';
import SearchBar from '../components/SearchBar';
import { createStyles, Container, Title, Center } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  page_title: {
    fontWeight: 500,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
  },
}));

export default function Classes() {
  const { classes } = useStyles();

  return (
    <>
      <Container pt="xl" pb="xl" size="sm">
        <Center pt="xl" pb="xl">
          <Title order={1} className={classes.page_title}>Search among thousands of classes</Title>
        </Center>
        <SearchBar />
      </Container>
      <Container pt="md" pb="md">
        <ClassGrid />
      </Container>
    </>
  );
}