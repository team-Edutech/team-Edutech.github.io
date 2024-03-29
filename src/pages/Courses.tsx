import CourseGrid from '../components/CourseGrid';
import SearchBar from '../components/SearchBar';
import { createStyles, Container, Title, Center } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  page_title: {
    fontWeight: 500,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
  },
}));

export default function Courses() {
  const { classes } = useStyles();

  return (
    <>
      <Container pt="xl" pb="xl" size="sm">
        <Center pt="xl" pb="xl">
          <Title order={1} className={classes.page_title}>코스 탐색</Title>
        </Center>
        <SearchBar />
      </Container>
      <Container pt="md" pb="md"></Container>
      <Container pt="md" pb="md">
        <CourseGrid />
      </Container>
    </>
  );
}